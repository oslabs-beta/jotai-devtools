'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [856],
  {
    './src/stories/TodoApp/TodoDemo.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TodoDemo_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var src = __webpack_require__('./src/index.ts'),
        CloseOutlined = __webpack_require__(
          './node_modules/@ant-design/icons/es/icons/CloseOutlined.js',
        ),
        react_spring_web_modern = __webpack_require__(
          './node_modules/@react-spring/web/dist/react-spring_web.modern.mjs',
        ),
        es_radio = __webpack_require__('./node_modules/antd/es/radio/index.js'),
        vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        todoStyles = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/TodoApp/todoStyles.css',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(todoStyles.A, options);
      todoStyles.A && todoStyles.A.locals && todoStyles.A.locals;
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      const filterAtom = (0, vanilla.eU)('all');
      filterAtom.debugLabel = 'filterAtom';
      const todosAtom = (0, vanilla.eU)([]);
      todosAtom.debugLabel = 'todosAtom';
      const filteredAtom = (0, vanilla.eU)((get) => {
        const filter = get(filterAtom),
          todos = get(todosAtom);
        return 'all' === filter
          ? todos
          : 'completed' === filter
            ? todos.filter((atom) => get(atom).completed)
            : todos.filter((atom) => !get(atom).completed);
      });
      filteredAtom.debugLabel = 'filteredAtom';
      const TodoItem = ({ atom, remove }) => {
          const [item, setItem] = (0, esm_react.fp)(atom);
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)('input', {
                type: 'checkbox',
                checked: item.completed,
                onChange: () =>
                  setItem((props) => ({
                    ...props,
                    completed: !props.completed,
                  })),
              }),
              (0, jsx_runtime.jsx)('span', {
                style: { textDecoration: item.completed ? 'line-through' : '' },
                children: item.title,
              }),
              (0, jsx_runtime.jsx)(CloseOutlined.A, {
                onClick: () => remove(atom),
              }),
            ],
          });
        },
        Filter = () => {
          const [filter, set] = (0, esm_react.fp)(filterAtom);
          return (0, jsx_runtime.jsxs)(es_radio.Ay.Group, {
            onChange: (e) => set(e.target.value),
            value: filter,
            children: [
              (0, jsx_runtime.jsx)(es_radio.Ay, {
                value: 'all',
                children: 'All',
              }),
              (0, jsx_runtime.jsx)(es_radio.Ay, {
                value: 'completed',
                children: 'Completed',
              }),
              (0, jsx_runtime.jsx)(es_radio.Ay, {
                value: 'incompleted',
                children: 'Incompleted',
              }),
            ],
          });
        };
      Filter.displayName = 'Filter';
      const Filtered = (props) => {
          const [todos] = (0, esm_react.fp)(filteredAtom);
          return (0, react_spring_web_modern.pn)(todos, {
            keys: (todo) => todo.toString(),
            from: { opacity: 0, height: 0 },
            enter: { opacity: 1, height: 40 },
            leave: { opacity: 0, height: 0 },
          })((style, atom) =>
            (0, jsx_runtime.jsx)(react_spring_web_modern.a.div, {
              className: 'item',
              style,
              children: (0, jsx_runtime.jsx)(TodoItem, { atom, ...props }),
            }),
          );
        },
        TodoList = () => {
          const setTodos = (0, esm_react.Xr)(todosAtom);
          return (0, jsx_runtime.jsxs)('form', {
            id: 'todoForm',
            onSubmit: (e) => {
              e.preventDefault();
              const title = e.currentTarget.inputTitle.value;
              e.currentTarget.inputTitle.value = '';
              const newTodoAtom = (0, vanilla.eU)({ title, completed: !1 });
              (newTodoAtom.debugLabel = `todoAtom-${title}`),
                setTodos((prev) => [...prev, newTodoAtom]);
            },
            children: [
              (0, jsx_runtime.jsx)(Filter, {}),
              (0, jsx_runtime.jsx)('input', {
                id: 'todo-input',
                name: 'inputTitle',
                placeholder: 'Type ...',
              }),
              (0, jsx_runtime.jsx)(Filtered, {
                remove: (todo) =>
                  setTodos((prev) => prev.filter((item) => item !== todo)),
              }),
            ],
          });
        };
      TodoList.displayName = 'TodoList';
      const customStore = (0, vanilla.y$)(),
        TodoApp = (props) =>
          (0, jsx_runtime.jsx)('div', {
            style: { height: '700px' },
            children: (0, jsx_runtime.jsxs)(esm_react.Kq, {
              store: customStore,
              children: [
                (0, jsx_runtime.jsx)('h1', {
                  id: 'todoTitle',
                  children: 'Todo List',
                }),
                (0, jsx_runtime.jsx)(TodoList, {}),
                (0, jsx_runtime.jsx)(src.VD, { store: customStore, ...props }),
              ],
            }),
          });
      TodoApp.displayName = 'TodoApp';
      try {
        (TodoApp.displayName = 'TodoApp'),
          (TodoApp.__docgenInfo = {
            description: '',
            displayName: 'TodoApp',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !1,
                type: {
                  name: '{ get: <Value>(atom: Atom<Value>) => Value; set: <Value_1, Args extends unknown[], Result>(atom: WritableAtom<Value_1, Args, Result>, ...args: Args) => Result; ... 5 more ...; dev_restore_atoms: (values: Iterable<...>) => void; } | { ...; }',
                },
              },
              isInitialOpen: {
                defaultValue: null,
                description: '',
                name: 'isInitialOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultColorScheme: {
                defaultValue: null,
                description: '',
                name: 'defaultColorScheme',
                required: !1,
                type: { name: '"dark" | "light"' },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
                },
              },
              nonce: {
                defaultValue: null,
                description: '',
                name: 'nonce',
                required: !1,
                type: { name: 'string' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'DevToolsOptions' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/stories/TodoApp/TodoApp.tsx#TodoApp'
            ] = {
              docgenInfo: TodoApp.__docgenInfo,
              name: 'TodoApp',
              path: 'src/stories/TodoApp/TodoApp.tsx#TodoApp',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const TodoDemo_stories = {
          component: src.VD,
          title: 'Devtools + TodoApp',
        },
        Default = {
          render: ({ ...args }) => {
            const nextOptions = {
                ...args.options,
                shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
              },
              props = { ...args, options: nextOptions };
            return (0, jsx_runtime.jsx)(TodoApp, { ...props });
          },
          args: { isInitialOpen: !1, 'options.shouldShowPrivateAtoms': !1 },
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
              "{\n  render: ({\n    ...args\n  }) => {\n    const nextOptions = {\n      ...args.options,\n      shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms']\n    };\n    const props = {\n      ...args,\n      options: nextOptions\n    };\n    return <TodoApp {...props} />;\n  },\n  args: {\n    isInitialOpen: false,\n    'options.shouldShowPrivateAtoms': false\n  },\n  argTypes: {\n    store: {\n      control: {\n        type: false\n      }\n    },\n    options: {\n      control: {\n        type: false\n      }\n    }\n  }\n}",
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
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/TodoApp/todoStyles.css':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@import url(https://rsms.me/inter/inter.css);',
        ]),
          ___CSS_LOADER_EXPORT___.push([
            module.id,
            '\n* {\n  box-sizing: border-box;\n}\n\n#body {\n  width: 100%;\n  height: 100%;\n}\n\n#body {\n  margin-top: 5em;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  background: #fdfdfd;\n  font-family: "Inter", sans-serif !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  filter: saturate(0);\n}\n\n#root {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n#todo-input:not([type="checkbox"]) {\n  width: 30%;\n  border: none;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);\n  padding: 10px 20px;\n  margin-top: 2em;\n  margin-bottom: 4em;\n  background: white;\n}\n\n#todo-input:focus {\n  outline: none;\n}\n\n.anticon-close {\n  width: 32px !important;\n  cursor: pointer;\n  color: #c0c0c0;\n}\n\n.anticon-close:hover {\n  color: #272730;\n}\n\n.item {\n  position: relative;\n  display: flex;\n  width: 30%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  overflow: hidden;\n}\n\n.item > span {\n  display: inline-block;\n  width: 100%;\n}\n\n#todoTitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5em;\n  font-weight: 800;\n  margin: 0;\n  padding: 0;\n  color: black;\n\n  white-space: nowrap;\n}\n\n#todoForm{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}',
            '',
            {
              version: 3,
              sources: ['webpack://./src/stories/TodoApp/todoStyles.css'],
              names: [],
              mappings:
                ';AAGA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,2CAA2C;EAC3C,mCAAmC;EACnC,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,6CAA6C;EAC7C,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,YAAY;;EAEZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB',
              sourcesContent: [
                '\n@import url("https://rsms.me/inter/inter.css");\n\n* {\n  box-sizing: border-box;\n}\n\n#body {\n  width: 100%;\n  height: 100%;\n}\n\n#body {\n  margin-top: 5em;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  background: #fdfdfd;\n  font-family: "Inter", sans-serif !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  filter: saturate(0);\n}\n\n#root {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n#todo-input:not([type="checkbox"]) {\n  width: 30%;\n  border: none;\n  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);\n  padding: 10px 20px;\n  margin-top: 2em;\n  margin-bottom: 4em;\n  background: white;\n}\n\n#todo-input:focus {\n  outline: none;\n}\n\n.anticon-close {\n  width: 32px !important;\n  cursor: pointer;\n  color: #c0c0c0;\n}\n\n.anticon-close:hover {\n  color: #272730;\n}\n\n.item {\n  position: relative;\n  display: flex;\n  width: 30%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  overflow: hidden;\n}\n\n.item > span {\n  display: inline-block;\n  width: 100%;\n}\n\n#todoTitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 5em;\n  font-weight: 800;\n  margin: 0;\n  padding: 0;\n  color: black;\n\n  white-space: nowrap;\n}\n\n#todoForm{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}',
              ],
              sourceRoot: '',
            },
          ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
