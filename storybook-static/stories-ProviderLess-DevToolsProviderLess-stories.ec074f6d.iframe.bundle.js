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
      var react = __webpack_require__('./node_modules/react/index.js'),
        src = __webpack_require__('./src/index.ts'),
        vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs');
      const countAtom = (0, vanilla.eU)(0);
      countAtom.debugLabel = 'countAtom';
      const Counter = () => {
          const [count, setCount] = (0, esm_react.fp)(countAtom);
          return react.createElement(
            'div',
            null,
            count,
            ' ',
            react.createElement(
              'button',
              { onClick: () => setCount((c) => c + 1) },
              'Increment',
            ),
          );
        },
        DevToolsProviderLess_stories = {
          component: src.VD,
          title: 'DevtoolsProviderLess',
          argTypes: {
            store: { control: { type: !1 } },
            options: { control: { type: !1 } },
          },
        },
        Default = ((args) =>
          react.createElement(
            react.Fragment,
            null,
            react.createElement(src.VD, args),
            react.createElement(Counter, null),
          )).bind({});
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
