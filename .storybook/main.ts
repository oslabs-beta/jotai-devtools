// import { StorybookConfig } from '@storybook/react-webpack5';
// const webpack = require('webpack');
// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@storybook/addon-a11y',
//     '@storybook/addon-mdx-gfm',
//     '@storybook/addon-styling-webpack', // Add this line only if you are not using Vite
//     'storybook-dark-mode',
//   ],
//   framework: {
//     name: '@storybook/react-webpack5',
//     options: {},
//   },
//   docs: {
//     autodocs: true,
//   },
//   typescript: {
//     reactDocgen: 'react-docgen-typescript',
//     reactDocgenTypescriptOptions: {
//       compilerOptions: {
//         allowSyntheticDefaultImports: false,
//         esModuleInterop: false,
//       },
//     },
//   },
//   core: {
//     disableTelemetry: true, // 👈 Disables telemetry
//     enableCrashReports: false, // 👈 Appends the crash reports to the telemetry events
//   },

//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.

//     config?.plugins?.push(
//       new webpack.DefinePlugin({
//         __DEV__: configType === 'DEVELOPMENT',
//       }),
//     );

//     // Return the altered config
//     return config;
//   },
// };
// export default config;

import { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const webpack = require('webpack');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-styling-webpack', // Add this line only if you are not using Vite
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    enableCrashReports: false, // 👈 Appends the crash reports to the telemetry events
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config?.plugins?.push(
      new webpack.DefinePlugin({
        __DEV__: configType === 'DEVELOPMENT',
      }),
    );

    // Add the following lines to resolve the `dist` folder
    config.resolve.modules.push(path.resolve(__dirname, '../dist'));

    // Return the altered config
    return config;
  },
};

export default config;
