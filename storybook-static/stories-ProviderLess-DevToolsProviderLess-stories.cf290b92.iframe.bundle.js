'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [378],
  {
    './src/stories/ProviderLess/DevToolsProviderLess.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DevToolsProviderLess_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var src = __webpack_require__('./src/index.ts'),
        vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      const countAtom = (0, vanilla.eU)(0);
      countAtom.debugLabel = 'countAtom';
      const Counter = () => {
        const [count, setCount] = (0, esm_react.fp)(countAtom);
        return (0, jsx_runtime.jsxs)('div', {
          children: [
            count,
            ' ',
            (0, jsx_runtime.jsx)('button', {
              onClick: () => setCount((c) => c + 1),
              children: 'Increment',
            }),
          ],
        });
      };
      Counter.displayName = 'Counter';
      const DevToolsProviderLess_stories = {
          component: src.VD,
          title: 'DevtoolsProviderLess',
          argTypes: {
            store: { control: { type: !1 } },
            options: { control: { type: !1 } },
          },
        },
        Default = ((args) =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(src.VD, { ...args }),
              (0, jsx_runtime.jsx)(Counter, {}),
            ],
          })).bind({});
      (Default.args = { isInitialOpen: !0 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                'args => <>\n    <DevTools {...args} />\n    <Counter />\n  </>',
              ...Default.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Default'];
    },
    './src/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { VD: () => DevTools });
      const DevTools = () => null;
    },
  },
]);
