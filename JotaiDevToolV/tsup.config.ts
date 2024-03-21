import { replace } from 'esbuild-plugin-replace';
import { Options, defineConfig } from 'tsup';
import fsPromises from 'fs/promises';
import path from 'path';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';


const defaultOutExtension: Options['outExtension'] = ({ format }) => {
  return {
    js: `.${format}.js`,
  };
};

const cssModulePlugin = {
  name: "css-module",
  setup(build): void {
          build.onResolve(
            { filter: /\.module\.css$/, namespace: "file" },
            (args) => {
              const pathDir = path.join(__dirname, args.path);
              // Log the original args and the constructed pathDir
              console.log('onResolve args:', args);
              console.log('Constructed pathDir:', pathDir);
              return {
                path: `${args.path}`,
                namespace: "css-module",
                pluginData: {
                  pathDir: pathDir,
                },
              };
            });
          
          build.onLoad(
            { filter: /#css-module$/, namespace: "css-module" },
            async (args) => {
              const { pluginData } = args as {
                pluginData: { pathDir: string };
              };

              const source = await fsPromises.readFile(
                pluginData.pathDir,
                "utf8"
              );

              let cssModule = {};
              const result = await postcss([
                postcssModules({
                  getJSON(_, json) {
                    cssModule = json;
                  },
                }),
              ]).process(source, { from: pluginData.pathDir });

              return {
                pluginData: { css: result.css },
                contents: `import "${
                  pluginData.pathDir
                }"; export default ${JSON.stringify(cssModule)}`,
              };
            }
          );
          build.onResolve(
            { filter: /\.module\.css$/, namespace: "css-module" },
            (args) => ({
              path: path.join(args.resolveDir, args.path),
              namespace: "css-module",
              pluginData: args.pluginData as { css: string },
            })
          );
          build.onLoad(
            { filter: /#css-module-data$/, namespace: "css-module" },
            (args) => ({
              contents: (args.pluginData as { css: string }).css,
              loader: "css",
            })
          );
        },
};

const defaultEsBuildPlugins: Options['esbuildPlugins'] = [
  replace({
    // FIXME - Should filter it by `include` instead of `exclude`. This doesn't seem to be working /^.*\.js$/,
    exclude: /\.woff2$/,
    __DEV__: '(process.env.NODE_ENV!=="production")',
  }),
  cssModulePlugin,
];

const baseConfig: Options = {
  // Outputs `dist/index.js` and `dist/utils.js`
  entry: {
    index: 'src/index.ts',
    // Workaround to generate seperate chunks for DevTools so we could export a null component for production builds
    internal__devtools: 'src/DevTools/index.ts',
    utils: 'src/utils/index.ts',
  },
  loader: {
    '.woff2': 'dataurl',
  },
  sourcemap: true,
  // Clean output directory before each build
  clean: true,
  minify: false,
  splitting: true,
  tsconfig: './tsconfig.build.json',
  dts: true,
  external: ['jotai', 'react', 'react-dom'],
  noExternal: ['@tabler/icons-react'],
  platform: 'node',
  outExtension: defaultOutExtension,
  esbuildPlugins: defaultEsBuildPlugins,
  // // TSUP does not appear to be respecting tsconfig's jsx property
  // // See - https://github.com/egoist/tsup/issues/792
  inject: ['./react-shim.js'],
};

const cjsConfig: Options = {
  ...baseConfig,
  format: ['cjs'],
};

const mjsOutExtension: Options['outExtension'] = ({ format }) => {
  return {
    js: `.${format}.mjs`,
  };
};

const mjsConfig: Options = {
  ...baseConfig,
  format: ['esm'],
  outExtension: mjsOutExtension,
};

export default defineConfig([cjsConfig, mjsConfig]);
