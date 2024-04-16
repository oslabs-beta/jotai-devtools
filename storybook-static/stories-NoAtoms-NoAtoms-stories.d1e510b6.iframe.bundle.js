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
      var react = __webpack_require__('./node_modules/react/index.js'),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        src = __webpack_require__('./src/index.ts');
      const NoAtoms = () =>
          react.createElement(
            'div',
            { style: { height: '500px' } },
            react.createElement('h1', null, 'NoAtoms'),
            react.createElement('div', null, 'hello'),
          ),
        NoAtoms_stories = { component: src.VD, title: 'NoAtoms' },
        Default = {
          render: ({ ...args }) => {
            const nextOptions = {
                ...args.options,
                shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
              },
              props = { ...args, options: nextOptions };
            return react.createElement(
              esm_react.Kq,
              null,
              react.createElement(src.VD, props),
              react.createElement(NoAtoms, null),
            );
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
