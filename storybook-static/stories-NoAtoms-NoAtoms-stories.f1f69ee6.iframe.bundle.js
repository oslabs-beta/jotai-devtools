'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [474],
  {
    './src/stories/NoAtoms/NoAtoms.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => NoAtoms_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        src = __webpack_require__('./src/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      const NoAtoms = () =>
        (0, jsx_runtime.jsxs)('div', {
          style: { height: '500px' },
          children: [
            (0, jsx_runtime.jsx)('h1', { children: 'NoAtoms' }),
            (0, jsx_runtime.jsx)('div', { children: 'hello' }),
          ],
        });
      NoAtoms.displayName = 'NoAtoms';
      const NoAtoms_stories = { component: src.VD, title: 'NoAtoms' },
        Default = {
          render: ({ ...args }) => {
            const nextOptions = {
                ...args.options,
                shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
              },
              props = { ...args, options: nextOptions };
            return (0, jsx_runtime.jsxs)(esm_react.Kq, {
              children: [
                (0, jsx_runtime.jsx)(src.VD, { ...props }),
                (0, jsx_runtime.jsx)(NoAtoms, {}),
              ],
            });
          },
          args: { isInitialOpen: !0, 'options.shouldShowPrivateAtoms': !1 },
          argTypes: {
            store: { control: { type: !1 } },
            options: { control: { type: !1 } },
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: ({\n    ...args\n  }) => {\n    const nextOptions = {\n      ...args.options,\n      shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms']\n    };\n    const props = {\n      ...args,\n      options: nextOptions\n    };\n    return <Provider>\n        <DevTools {...props} />\n        <NoAtoms />\n      </Provider>;\n  },\n  args: {\n    isInitialOpen: true,\n    'options.shouldShowPrivateAtoms': false\n  },\n  argTypes: {\n    store: {\n      control: {\n        type: false\n      }\n    },\n    options: {\n      control: {\n        type: false\n      }\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
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
