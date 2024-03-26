'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [543],
  {
    './node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            MDXContext: () => MDXContext,
            MDXProvider: () => MDXProvider,
            useMDXComponents: () => useMDXComponents,
            withMDXComponents: () => withMDXComponents,
          });
        var react = __webpack_require__(
          './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        );
        const MDXContext = react.createContext({});
        function withMDXComponents(Component) {
          return function boundMDXComponent(props) {
            const allComponents = useMDXComponents(props.components);
            return react.createElement(Component, { ...props, allComponents });
          };
        }
        function useMDXComponents(components) {
          const contextComponents = react.useContext(MDXContext);
          return react.useMemo(
            () =>
              'function' == typeof components
                ? components(contextComponents)
                : { ...contextComponents, ...components },
            [contextComponents, components],
          );
        }
        const emptyObject = {};
        function MDXProvider({ components, children, disableParentContext }) {
          let allComponents;
          return (
            (allComponents = disableParentContext
              ? 'function' == typeof components
                ? components({})
                : components || emptyObject
              : useMDXComponents(components)),
            react.createElement(
              MDXContext.Provider,
              { value: allComponents },
              children,
            )
          );
        }
      },
  },
]);