/*! For license information please see stories-Default-DevTools-stories.03cd093e.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [977],
  {
    './src/stories/Default/DevTools.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DevTools_stories,
        });
      var react = __webpack_require__(
          './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        index_cjs = __webpack_require__('./dist/index.cjs.js'),
        MantineProvider = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs',
        ),
        Text = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Text/Text.mjs',
        ),
        Title = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/Title.mjs',
        ),
        Grid = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs',
        ),
        src = __webpack_require__('./src/index.ts'),
        Box = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        Button = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs',
        ),
        esm_react = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/react.mjs',
        ),
        vanilla = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/vanilla.mjs',
        );
      const demoStore = (0, vanilla.MT)(),
        DemoJotaiStoreContext = (0, react.createContext)(demoStore),
        demoStoreOptions = { store: demoStore };
      var jsx_runtime = __webpack_require__(
        './node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
      );
      const makeRandomFetchReq = async () => {
          const id = ((min = 1, max = 100) =>
            Math.round(Math.random() * max) + min)();
          return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            (res) => {
              return (
                (data = res.json()),
                new Promise((resolve) => {
                  const timeout = setTimeout(() => {
                    clearTimeout(timeout), resolve(data);
                  }, 8e3);
                })
              );
              var data;
            },
          );
        },
        asyncAtom = (0, vanilla.cn)(Promise.resolve(null));
      asyncAtom.debugLabel = 'asyncAtom';
      const Async = () => {
        const [request, setRequest] = (0, esm_react.KO)(
          asyncAtom,
          demoStoreOptions,
        );
        return (0, jsx_runtime.jsxs)(Box.x, {
          children: [
            (0, jsx_runtime.jsx)(Title.D, { size: 'h5', children: 'Async' }),
            (0, jsx_runtime.jsxs)(Text.x, {
              component: 'div',
              mb: 10,
              c: 'dark.2',
              children: [
                'Out-of-the-box Suspense support. ',
                (0, jsx_runtime.jsx)('i', { children: 'Timeout: 8000 ms' }),
              ],
            }),
            (0, jsx_runtime.jsxs)(Text.x, {
              component: 'div',
              children: [
                'Request status: ',
                request ? '✅ Success' : 'Ready',
                ' ',
              ],
            }),
            (0, jsx_runtime.jsx)(Button.z, {
              onClick: async () => {
                setRequest(makeRandomFetchReq);
              },
              size: 'xs',
              mt: 5,
              children: 'Fetch',
            }),
          ],
        });
      };
      Async.displayName = 'Async';
      var Code = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Code/Code.mjs',
        ),
        use_timeout = __webpack_require__(
          './node_modules/.pnpm/@mantine+hooks@7.6.0_react@18.2.0/node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs',
        );
      const countAtom = (0, vanilla.cn)(0);
      countAtom.debugLabel = 'countAtom';
      const Counter = () => {
        const [count, setCount] = (0, esm_react.KO)(
            countAtom,
            demoStoreOptions,
          ),
          add = react.useCallback(() => setCount((c) => c + 1), [setCount]);
        return (
          (0, use_timeout.K)(
            () => {
              Array.from({ length: 0 }).forEach(add);
            },
            200,
            { autoInvoke: !0 },
          ),
          (0, jsx_runtime.jsxs)(Box.x, {
            maw: '500px',
            children: [
              (0, jsx_runtime.jsx)(Title.D, {
                size: 'h5',
                children: 'Counter',
              }),
              (0, jsx_runtime.jsx)(Code.E, {
                color: 'gray',
                block: !0,
                children: count,
              }),
              (0, jsx_runtime.jsx)(Button.z, {
                display: 'block',
                mt: 5,
                onClick: add,
                size: 'xs',
                color: 'dark',
                children: 'Add 1',
              }),
            ],
          })
        );
      };
      Counter.displayName = 'Counter';
      var Divider = __webpack_require__(
        './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Divider/Divider.mjs',
      );
      const Random_countAtom = (0, vanilla.cn)(1);
      Random_countAtom.debugLabel = 'randomCountAtom';
      const textAtom = (0, vanilla.cn)('hello');
      textAtom.debugLabel = 'textAtom';
      const bigintAtom = (0, vanilla.cn)(BigInt(Number.MAX_SAFE_INTEGER));
      bigintAtom.debugLabel = 'bigintAtom';
      const atomReturnsUndefined = (0, vanilla.cn)(void 0);
      atomReturnsUndefined.debugLabel = 'atomReturnsUndefined';
      const atomWithSomeSymbol = (0, vanilla.cn)(Symbol('hello'));
      atomWithSomeSymbol.debugLabel = 'atomWithSomeSymbol';
      const atomWithFunction = (0, vanilla.cn)(() => () => 'hello');
      atomWithFunction.debugLabel = 'atomWithFunction';
      const nestedObjectAtom = (0, vanilla.cn)((get) => ({
        nestedObject: {
          doubleCount: 2 * get(Random_countAtom),
          tripleCount: 3 * get(Random_countAtom),
        },
        foo: 'bar',
      }));
      nestedObjectAtom.debugLabel = 'nestedObjectAtom';
      const atomsInAtomsCountAtom = (0, vanilla.cn)(
        (0, vanilla.cn)((0, vanilla.cn)((get) => get(Random_countAtom))),
      );
      atomsInAtomsCountAtom.debugLabel = 'atomsInAtomsCountAtom';
      const baseErrorAtom = (0, vanilla.cn)(0),
        triggerErrorAtom = (0, vanilla.cn)(
          (get) => {
            const val = get(baseErrorAtom);
            if (val >= 1) {
              const randomFn = function () {};
              return (
                (randomFn.toString = () => {
                  throw new Error('Random error');
                }),
                randomFn
              );
            }
            return val;
          },
          (get, set) => set(baseErrorAtom, (prev) => prev + 1),
        );
      triggerErrorAtom.debugLabel = 'triggerErrorAtom';
      const Random = () => {
        const [count, setCount] = (0, esm_react.KO)(
            Random_countAtom,
            demoStoreOptions,
          ),
          [, setError] = (0, esm_react.KO)(triggerErrorAtom, demoStoreOptions);
        (0, esm_react.Dv)(nestedObjectAtom, demoStoreOptions),
          (0, esm_react.Dv)(textAtom, demoStoreOptions),
          (0, esm_react.Dv)(bigintAtom, demoStoreOptions),
          (0, esm_react.Dv)(atomReturnsUndefined, demoStoreOptions),
          (0, esm_react.Dv)(atomWithSomeSymbol, demoStoreOptions),
          (0, esm_react.Dv)(atomWithFunction, demoStoreOptions);
        (0, esm_react.Dv)(atomsInAtomsCountAtom, demoStoreOptions);
        return (0, jsx_runtime.jsxs)(Box.x, {
          maw: '500px',
          children: [
            (0, jsx_runtime.jsx)(Title.D, { size: 'h5', children: 'Random' }),
            (0, jsx_runtime.jsx)(Code.E, {
              color: 'gray',
              block: !0,
              children: count,
            }),
            (0, jsx_runtime.jsx)(Button.z, {
              display: 'block',
              mt: 5,
              onClick: react.useCallback(
                () => setCount((c) => c + 1),
                [setCount],
              ),
              size: 'xs',
              color: 'dark',
              children: 'Add 1',
            }),
            (0, jsx_runtime.jsx)(Divider.i, { size: 'sm', my: 'lg' }),
            (0, jsx_runtime.jsx)(Button.z, {
              display: 'block',
              mt: 5,
              onClick: setError,
              size: 'xs',
              color: 'red.8',
              children: 'Trigger error 💥',
            }),
          ],
        });
      };
      Random.displayName = 'Random';
      var Flex = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Flex/Flex.mjs',
        ),
        Checkbox = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Checkbox/Checkbox.mjs',
        ),
        ActionIcon = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs',
        ),
        Radio = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Radio/Radio.mjs',
        ),
        Group = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/Group.mjs',
        ),
        TextInput = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs',
        ),
        List = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/List/List.mjs',
        ),
        IconX = __webpack_require__(
          './node_modules/.pnpm/@tabler+icons-react@2.47.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconX.js',
        );
      const filterAtom = (0, vanilla.cn)('all'),
        initialAtom = (0, vanilla.cn)({ title: 'test', completed: !1 }),
        todosAtom = (0, vanilla.cn)([initialAtom]);
      todosAtom.debugLabel = 'todosAtom';
      const filteredAtom = (0, vanilla.cn)((get) => {
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
        const [item, setItem] = (0, esm_react.KO)(atom, demoStoreOptions);
        react.useEffect(() => {}, [atom]);
        return (0, jsx_runtime.jsxs)(Flex.k, {
          justify: 'space-between',
          align: 'center',
          my: 10,
          children: [
            (0, jsx_runtime.jsxs)(Flex.k, {
              align: 'center',
              children: [
                (0, jsx_runtime.jsx)(Checkbox.X, {
                  size: 'xs',
                  onChange: () =>
                    setItem((props) => ({
                      ...props,
                      completed: !props.completed,
                    })),
                  checked: item.completed,
                  display: 'block',
                  mr: 10,
                  mb: -6,
                }),
                (0, jsx_runtime.jsx)(Text.x, {
                  component: 'div',
                  td: item.completed ? 'line-through' : void 0,
                  fz: 'md',
                  children: item.title,
                }),
              ],
            }),
            (0, jsx_runtime.jsx)(ActionIcon.A, {
              onClick: () => remove(atom),
              variant: 'outline',
              color: 'dark',
              size: 'sm',
              children: (0, jsx_runtime.jsx)(IconX.Z, {}),
            }),
          ],
        });
      };
      TodoItem.displayName = 'TodoItem';
      const Filter = () => {
        const [filter, set] = (0, esm_react.KO)(filterAtom, demoStoreOptions);
        return (0, jsx_runtime.jsxs)(Radio.Y.Group, {
          onChange: (value) => set(value),
          value: filter,
          children: [
            (0, jsx_runtime.jsx)(Radio.Y, { value: 'all', label: 'All' }),
            (0, jsx_runtime.jsx)(Radio.Y, {
              value: 'completed',
              label: 'Completed',
            }),
            (0, jsx_runtime.jsx)(Radio.Y, {
              value: 'incompleted',
              label: 'Incompleted',
            }),
          ],
        });
      };
      Filter.displayName = 'Filter';
      const Filtered = (props) => {
          const [todos] = (0, esm_react.KO)(filteredAtom, demoStoreOptions),
            components = todos.map((atom, i) =>
              (0, jsx_runtime.jsx)(
                TodoItem,
                { atom, remove: props.remove },
                `todo-item${i}` + atom.toString(),
              ),
            );
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: components,
          });
        },
        TodoList = () => {
          const setTodos = (0, esm_react.b9)(todosAtom, demoStoreOptions);
          return (0, jsx_runtime.jsxs)('form', {
            onSubmit: (e) => {
              e.preventDefault();
              const title = e.currentTarget.inputTitle.value;
              (e.currentTarget.inputTitle.value = ''),
                title.trim() &&
                  setTodos((prev) => [
                    ...prev,
                    (0, vanilla.cn)({ title, completed: !1 }),
                  ]);
            },
            children: [
              (0, jsx_runtime.jsxs)(Group.Z, {
                justify: 'space-between',
                children: [
                  (0, jsx_runtime.jsx)(Filter, {}),
                  (0, jsx_runtime.jsx)(Button.z, {
                    onClick: () => {
                      setTodos((prev) => [...prev].reverse());
                    },
                    children: 'Reverse',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(TextInput.o, {
                placeholder: 'Type your todo',
                name: 'inputTitle',
                mt: 'sm',
              }),
              (0, jsx_runtime.jsx)(List.a, {
                listStyleType: 'none',
                children: (0, jsx_runtime.jsx)(Filtered, {
                  remove: (todo) =>
                    setTodos((prev) => prev.filter((item) => item !== todo)),
                }),
              }),
            ],
          });
        };
      TodoList.displayName = 'TodoList';
      const Todos = () =>
        (0, jsx_runtime.jsxs)(Box.x, {
          maw: '500px',
          children: [
            (0, jsx_runtime.jsx)(Title.D, {
              size: 'h5',
              children: 'Todo list',
            }),
            (0, jsx_runtime.jsx)(TodoList, {}),
          ],
        });
      Todos.displayName = 'Todos';
      const DemoApp = (props) =>
        (0, jsx_runtime.jsx)(DemoJotaiStoreContext.Provider, {
          value: demoStore,
          children: (0, jsx_runtime.jsxs)(MantineProvider.M, {
            theme: { primaryColor: 'blue', cursorType: 'pointer' },
            defaultColorScheme: props.defaultColorScheme || 'dark',
            children: [
              (0, jsx_runtime.jsx)(src.N5, { store: demoStore, ...props }),
              (0, jsx_runtime.jsx)('div', {
                className: 'App',
                children: (0, jsx_runtime.jsxs)(react.Suspense, {
                  fallback: (0, jsx_runtime.jsx)(Text.x, {
                    component: 'div',
                    className: 'loading-suspense',
                    children: 'Your suspense loading component...',
                  }),
                  children: [
                    (0, jsx_runtime.jsx)(Title.D, {
                      size: 'h3',
                      children: 'Demos',
                    }),
                    (0, jsx_runtime.jsx)(Text.x, {
                      component: 'div',
                      mb: 10,
                      c: 'dark.2',
                      children: 'Jotai DevTools — Early Preview',
                    }),
                    (0, jsx_runtime.jsxs)(Grid.r, {
                      gutter: 'xl',
                      children: [
                        (0, jsx_runtime.jsx)(Grid.r.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Random, {}),
                        }),
                        (0, jsx_runtime.jsx)(Grid.r.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Counter, {}),
                        }),
                        (0, jsx_runtime.jsx)(Grid.r.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Todos, {}),
                        }),
                        ' ',
                        (0, jsx_runtime.jsx)(Grid.r.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Async, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      DemoApp.displayName = 'DemoApp';
      try {
        (DemoApp.displayName = 'DemoApp'),
          (DemoApp.__docgenInfo = {
            description: '',
            displayName: 'DemoApp',
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
              'src/stories/Default/Demos/DemoApp.tsx#DemoApp'
            ] = {
              docgenInfo: DemoApp.__docgenInfo,
              name: 'DemoApp',
              path: 'src/stories/Default/Demos/DemoApp.tsx#DemoApp',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const DevTools_stories = { component: index_cjs.N5, title: 'Devtools' },
        Default = {
          render: ({ ...args }) => {
            const nextOptions = {
                ...args.options,
                shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
              },
              props = { ...args, options: nextOptions };
            return (0, jsx_runtime.jsx)(DemoApp, { ...props });
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
              "{\n  render: ({\n    ...args\n  }) => {\n    const nextOptions = {\n      ...args.options,\n      shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms']\n    };\n    const props = {\n      ...args,\n      options: nextOptions\n    };\n    return <DemoApp {...props} />;\n  },\n  args: {\n    isInitialOpen: true,\n    'options.shouldShowPrivateAtoms': false\n  },\n  argTypes: {\n    store: {\n      control: {\n        type: false\n      }\n    },\n    options: {\n      control: {\n        type: false\n      }\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
    './dist/chunk-5K6HCVT2.cjs.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      function _optionalChain(ops) {
        let lastAccessLHS,
          value = ops[0],
          i = 1;
        for (; i < ops.length; ) {
          const op = ops[i],
            fn = ops[i + 1];
          if (
            ((i += 2),
            ('optionalAccess' === op || 'optionalCall' === op) && null == value)
          )
            return;
          'access' === op || 'optionalAccess' === op
            ? ((lastAccessLHS = value), (value = fn(value)))
            : ('call' !== op && 'optionalCall' !== op) ||
              ((value = fn((...args) => value.call(lastAccessLHS, ...args))),
              (lastAccessLHS = void 0));
        }
        return value;
      }
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var fn,
        res,
        __create = Object.create,
        __defProp = Object.defineProperty,
        __getOwnPropDesc = Object.getOwnPropertyDescriptor,
        __getOwnPropNames = Object.getOwnPropertyNames,
        __getProtoOf = Object.getPrototypeOf,
        __hasOwnProp = Object.prototype.hasOwnProperty,
        _react = __webpack_require__(
          './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        init_react_shim =
          ((function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          })(_react),
          (fn = { 'react-shim.js'() {} }),
          function __init() {
            return (
              fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res
            );
          });
      init_react_shim(), init_react_shim();
      var _react3 = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/react.js',
        ),
        isEqualAtomsValues = (left, right) =>
          left.size === right.size &&
          Array.from(left).every(([left2, v]) =>
            Object.is(right.get(left2), v),
          ),
        isEqualAtomsDependents = (left, right) =>
          left.size === right.size &&
          Array.from(left).every(([a, dLeft]) => {
            const dRight = right.get(a);
            return (
              dRight &&
              dLeft.size === dRight.size &&
              Array.from(dLeft).every((d) => dRight.has(d))
            );
          });
      function useAtomsSnapshot({
        shouldShowPrivateAtoms = !1,
        ...options
      } = {}) {
        const store = _react3.useStore.call(void 0, options),
          [atomsSnapshot, setAtomsSnapshot] = _react.useState.call(
            void 0,
            () => ({ values: new Map(), dependents: new Map() }),
          ),
          duringReactRenderPhase = _react.useRef.call(void 0, !0);
        return (
          (duringReactRenderPhase.current = !0),
          _react.useLayoutEffect.call(void 0, () => {
            duringReactRenderPhase.current = !1;
          }),
          _react.useEffect.call(
            void 0,
            () => {
              const devSubscribeStore =
                _optionalChain([
                  store,
                  'optionalAccess',
                  (_) => _.dev_subscribe_store,
                ]) ||
                _optionalChain([
                  store,
                  'optionalAccess',
                  (_2) => _2.dev_subscribe_state,
                ]);
              if (!devSubscribeStore) return;
              let prevValues = new Map(),
                prevDependents = new Map();
              'dev_subscribe_store' in store ||
                console.warn(
                  '[DEPRECATION-WARNING]: Your Jotai version is out-of-date and contains deprecated properties that will be removed soon. Please update to the latest version of Jotai.',
                );
              const callback = (type) => {
                  'object' != typeof type &&
                    console.warn(
                      '[DEPRECATION-WARNING]: Your Jotai version is out-of-date and contains deprecated properties that will be removed soon. Please update to the latest version of Jotai.',
                    );
                  const values = new Map(),
                    dependents = new Map();
                  for (const atom of _optionalChain([
                    store,
                    'access',
                    (_3) => _3.dev_get_mounted_atoms,
                    'optionalCall',
                    (_4) => _4(),
                  ]) || []) {
                    if (!shouldShowPrivateAtoms && atom.debugPrivate) continue;
                    const atomState = _optionalChain([
                      store,
                      'access',
                      (_5) => _5.dev_get_atom_state,
                      'optionalCall',
                      (_6) => _6(atom),
                    ]);
                    atomState &&
                      'v' in atomState &&
                      values.set(atom, atomState.v);
                    const mounted = _optionalChain([
                      store,
                      'access',
                      (_7) => _7.dev_get_mounted,
                      'optionalCall',
                      (_8) => _8(atom),
                    ]);
                    if (mounted) {
                      let atomDependents = mounted.t;
                      shouldShowPrivateAtoms ||
                        (atomDependents = new Set(
                          Array.from(atomDependents.values()).filter(
                            (dependent) => !dependent.debugPrivate,
                          ),
                        )),
                        dependents.set(atom, atomDependents);
                    }
                  }
                  if (
                    isEqualAtomsValues(prevValues, values) &&
                    isEqualAtomsDependents(prevDependents, dependents)
                  )
                    return;
                  (prevValues = values), (prevDependents = dependents);
                  const deferrableAtomSetAction = () =>
                    setAtomsSnapshot({ values, dependents });
                  duringReactRenderPhase.current
                    ? Promise.resolve().then(deferrableAtomSetAction)
                    : deferrableAtomSetAction();
                },
                unsubscribe = _optionalChain([
                  devSubscribeStore,
                  'optionalCall',
                  (_9) => _9(callback, 2),
                ]);
              return callback({}), unsubscribe;
            },
            [store, shouldShowPrivateAtoms],
          ),
          atomsSnapshot
        );
      }
      function useGotoAtomsSnapshot(options) {
        const store = _react3.useStore.call(void 0, options);
        return _react.useCallback.call(
          void 0,
          (snapshot) => {
            store.dev_restore_atoms && store.dev_restore_atoms(snapshot.values);
          },
          [store],
        );
      }
      init_react_shim(), init_react_shim();
      var atomToPrintable = (atom) => atom.debugLabel || atom.toString(),
        stateToPrintable = ([store, atoms]) =>
          Object.fromEntries(
            atoms.flatMap((atom) => {
              const mounted = _optionalChain([
                store,
                'access',
                (_10) => _10.dev_get_mounted,
                'optionalCall',
                (_11) => _11(atom),
              ]);
              if (!mounted) return [];
              const dependents = mounted.t,
                atomState =
                  _optionalChain([
                    store,
                    'access',
                    (_12) => _12.dev_get_atom_state,
                    'optionalCall',
                    (_13) => _13(atom),
                  ]) || {};
              return [
                [
                  atomToPrintable(atom),
                  {
                    ...('e' in atomState && { error: atomState.e }),
                    ...('v' in atomState && { value: atomState.v }),
                    dependents: Array.from(dependents).map(atomToPrintable),
                  },
                ],
              ];
            }),
          );
      init_react_shim(), init_react_shim();
      var createReduxConnection = (extension, name) => {
        if (!extension) return;
        const connection = extension.connect({ name });
        return Object.assign(connection, { shouldInit: !0 });
      };
      init_react_shim();
      var getReduxExtension = (enabled = !1) => {
        if (!enabled) return;
        const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
        return reduxExtension;
      };
      init_react_shim();
      var atomToPrintable2 = (atom) =>
          atom.debugLabel ? `${atom}:${atom.debugLabel}` : `${atom}`,
        getDevtoolsState = (atomsSnapshot) => {
          const values = {};
          atomsSnapshot.values.forEach((v, atom) => {
            values[atomToPrintable2(atom)] = v;
          });
          const dependents = {};
          return (
            atomsSnapshot.dependents.forEach((d, atom) => {
              dependents[atomToPrintable2(atom)] =
                Array.from(d).map(atomToPrintable2);
            }),
            { values, dependents }
          );
        };
      (exports.__commonJS = (cb, mod) =>
        function __require() {
          return (
            mod ||
              (0, cb[__getOwnPropNames(cb)[0]])(
                (mod = { exports: {} }).exports,
                mod,
              ),
            mod.exports
          );
        }),
        (exports.__toESM = (mod, isNodeMode, target) => (
          (target = null != mod ? __create(__getProtoOf(mod)) : {}),
          ((to, from, except, desc) => {
            if ((from && 'object' == typeof from) || 'function' == typeof from)
              for (let key of __getOwnPropNames(from))
                __hasOwnProp.call(to, key) ||
                  key === except ||
                  __defProp(to, key, {
                    get: () => from[key],
                    enumerable:
                      !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                  });
            return to;
          })(
            !isNodeMode && mod && mod.__esModule
              ? target
              : __defProp(target, 'default', { value: mod, enumerable: !0 }),
            mod,
          )
        )),
        (exports.init_react_shim = init_react_shim),
        (exports.useAtomsSnapshot = useAtomsSnapshot),
        (exports.useGotoAtomsSnapshot = useGotoAtomsSnapshot),
        (exports.useAtomsDebugValue = (options) => {
          const enabled = (function _nullishCoalesce(lhs, rhsFn) {
              return null != lhs ? lhs : rhsFn();
            })(
              _optionalChain([options, 'optionalAccess', (_14) => _14.enabled]),
              () => !1,
            ),
            store = _react3.useStore.call(void 0, options),
            [atoms, setAtoms] = _react.useState.call(void 0, []),
            duringReactRenderPhase = _react.useRef.call(void 0, !0);
          (duringReactRenderPhase.current = !0),
            _react.useLayoutEffect.call(void 0, () => {
              duringReactRenderPhase.current = !1;
            }),
            _react.useEffect.call(
              void 0,
              () => {
                const devSubscribeStore =
                  _optionalChain([
                    store,
                    'optionalAccess',
                    (_15) => _15.dev_subscribe_store,
                  ]) ||
                  _optionalChain([
                    store,
                    'optionalAccess',
                    (_16) => _16.dev_subscribe_state,
                  ]);
                if (!enabled || !devSubscribeStore) return;
                const callback = () => {
                  const deferrableAtomSetAction = () =>
                    setAtoms(
                      Array.from(
                        _optionalChain([
                          store,
                          'access',
                          (_17) => _17.dev_get_mounted_atoms,
                          'optionalCall',
                          (_18) => _18(),
                        ]) || [],
                      ),
                    );
                  duringReactRenderPhase.current
                    ? Promise.resolve().then(deferrableAtomSetAction)
                    : deferrableAtomSetAction();
                };
                'dev_subscribe_store' in store ||
                  console.warn(
                    "[DEPRECATION-WARNING] Jotai version you're using contains deprecated dev-only properties that will be removed soon. Please update to the latest version of Jotai.",
                  );
                const unsubscribe = _optionalChain([
                  devSubscribeStore,
                  'optionalCall',
                  (_19) => _19(callback, 2),
                ]);
                return callback(), unsubscribe;
              },
              [enabled, store],
            ),
            _react.useDebugValue.call(void 0, [store, atoms], stateToPrintable);
        }),
        (exports.useAtomDevtools = function useAtomDevtools(anAtom, options) {
          const { enabled, name } = options || {},
            extension = getReduxExtension(enabled),
            [value, setValue] = _react3.useAtom.call(void 0, anAtom, options),
            lastValue = _react.useRef.call(void 0, value),
            isTimeTraveling = _react.useRef.call(void 0, !1),
            devtools = _react.useRef.call(void 0),
            atomName = name || anAtom.debugLabel || anAtom.toString();
          _react.useEffect.call(
            void 0,
            () => {
              if (!extension) return;
              const setValueIfWritable = (value2) => {
                'function' != typeof setValue
                  ? console.warn(
                      '[Warn] you cannot do write operations (Time-travelling, etc) in read-only atoms\n',
                      anAtom,
                    )
                  : setValue(value2);
              };
              devtools.current = createReduxConnection(extension, atomName);
              return _optionalChain([
                devtools,
                'access',
                (_20) => _20.current,
                'optionalAccess',
                (_21) => _21.subscribe,
                'call',
                (_22) =>
                  _22((message) => {
                    if ('ACTION' === message.type && message.payload)
                      try {
                        setValueIfWritable(JSON.parse(message.payload));
                      } catch (e) {
                        console.error(
                          'please dispatch a serializable value that JSON.parse() support\n',
                          e,
                        );
                      }
                    else if ('DISPATCH' === message.type && message.state)
                      ('JUMP_TO_ACTION' !==
                        _optionalChain([
                          message,
                          'access',
                          (_23) => _23.payload,
                          'optionalAccess',
                          (_24) => _24.type,
                        ]) &&
                        'JUMP_TO_STATE' !==
                          _optionalChain([
                            message,
                            'access',
                            (_25) => _25.payload,
                            'optionalAccess',
                            (_26) => _26.type,
                          ])) ||
                        ((isTimeTraveling.current = !0),
                        setValueIfWritable(JSON.parse(message.state)));
                    else if (
                      'DISPATCH' === message.type &&
                      'COMMIT' ===
                        _optionalChain([
                          message,
                          'access',
                          (_27) => _27.payload,
                          'optionalAccess',
                          (_28) => _28.type,
                        ])
                    )
                      _optionalChain([
                        devtools,
                        'access',
                        (_29) => _29.current,
                        'optionalAccess',
                        (_30) => _30.init,
                        'call',
                        (_31) => _31(lastValue.current),
                      ]);
                    else if (
                      'DISPATCH' === message.type &&
                      'IMPORT_STATE' ===
                        _optionalChain([
                          message,
                          'access',
                          (_32) => _32.payload,
                          'optionalAccess',
                          (_33) => _33.type,
                        ])
                    ) {
                      (
                        _optionalChain([
                          message,
                          'access',
                          (_34) => _34.payload,
                          'access',
                          (_35) => _35.nextLiftedState,
                          'optionalAccess',
                          (_36) => _36.computedStates,
                        ]) || []
                      ).forEach(({ state }, index) => {
                        0 === index
                          ? _optionalChain([
                              devtools,
                              'access',
                              (_37) => _37.current,
                              'optionalAccess',
                              (_38) => _38.init,
                              'call',
                              (_39) => _39(state),
                            ])
                          : setValueIfWritable(state);
                      });
                    }
                  }),
              ]);
            },
            [anAtom, extension, atomName, setValue],
          ),
            _react.useEffect.call(
              void 0,
              () => {
                devtools.current &&
                  ((lastValue.current = value),
                  devtools.current.shouldInit
                    ? (devtools.current.init(value),
                      (devtools.current.shouldInit = !1))
                    : isTimeTraveling.current
                      ? (isTimeTraveling.current = !1)
                      : devtools.current.send(
                          `${atomName} - ${new Date().toLocaleString()}`,
                          value,
                        ));
              },
              [anAtom, extension, atomName, value],
            );
        }),
        (exports.useAtomsDevtools = function useAtomsDevtools(name, options) {
          const { enabled } = options || {},
            extension = getReduxExtension(enabled),
            atomsSnapshot = useAtomsSnapshot(options),
            goToSnapshot = useGotoAtomsSnapshot(options),
            isTimeTraveling = _react.useRef.call(void 0, !1),
            isRecording = _react.useRef.call(void 0, !0),
            devtools = _react.useRef.call(void 0),
            snapshots = _react.useRef.call(void 0, []);
          _react.useEffect.call(
            void 0,
            () => {
              if (!extension) return;
              const getSnapshotAt = (index = snapshots.current.length - 1) => {
                const snapshot = snapshots.current[index >= 0 ? index : 0];
                if (!snapshot) throw new Error('snapshot index out of bounds');
                return snapshot;
              };
              devtools.current = createReduxConnection(extension, name);
              const devtoolsUnsubscribe = _optionalChain([
                devtools,
                'access',
                (_40) => _40.current,
                'optionalAccess',
                (_41) => _41.subscribe,
                'call',
                (_42) =>
                  _42((message) => {
                    if ('DISPATCH' === message.type)
                      switch (
                        _optionalChain([
                          message,
                          'access',
                          (_43) => _43.payload,
                          'optionalAccess',
                          (_44) => _44.type,
                        ])
                      ) {
                        case 'RESET':
                          break;
                        case 'COMMIT':
                          _optionalChain([
                            devtools,
                            'access',
                            (_45) => _45.current,
                            'optionalAccess',
                            (_46) => _46.init,
                            'call',
                            (_47) => _47(getDevtoolsState(getSnapshotAt())),
                          ]),
                            (snapshots.current = []);
                          break;
                        case 'JUMP_TO_ACTION':
                        case 'JUMP_TO_STATE':
                          (isTimeTraveling.current = !0),
                            goToSnapshot(
                              getSnapshotAt(message.payload.actionId - 1),
                            );
                          break;
                        case 'PAUSE_RECORDING':
                          isRecording.current = !isRecording.current;
                      }
                  }),
              ]);
              return () => {
                _optionalChain([
                  extension,
                  'optionalAccess',
                  (_48) => _48.disconnect,
                  'optionalCall',
                  (_49) => _49(),
                ]),
                  _optionalChain([
                    devtoolsUnsubscribe,
                    'optionalCall',
                    (_50) => _50(),
                  ]);
              };
            },
            [extension, goToSnapshot, name],
          ),
            _react.useEffect.call(
              void 0,
              () => {
                if (devtools.current)
                  return devtools.current.shouldInit
                    ? (devtools.current.init(void 0),
                      void (devtools.current.shouldInit = !1))
                    : void (isTimeTraveling.current
                        ? (isTimeTraveling.current = !1)
                        : isRecording.current &&
                          (snapshots.current.push(atomsSnapshot),
                          devtools.current.send(
                            {
                              type: `${snapshots.current.length}`,
                              updatedAt: new Date().toLocaleString(),
                            },
                            getDevtoolsState(atomsSnapshot),
                          )));
              },
              [atomsSnapshot],
            );
        });
    },
    './dist/chunk-GFD7OUBX.cjs.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) return obj;
        var newObj = {};
        if (null != obj)
          for (var key in obj)
            Object.prototype.hasOwnProperty.call(obj, key) &&
              (newObj[key] = obj[key]);
        return (newObj.default = obj), newObj;
      }
      function _optionalChain(ops) {
        let lastAccessLHS,
          value = ops[0],
          i = 1;
        for (; i < ops.length; ) {
          const op = ops[i],
            fn = ops[i + 1];
          if (
            ((i += 2),
            ('optionalAccess' === op || 'optionalCall' === op) && null == value)
          )
            return;
          'access' === op || 'optionalAccess' === op
            ? ((lastAccessLHS = value), (value = fn(value)))
            : ('call' !== op && 'optionalCall' !== op) ||
              ((value = fn((...args) => value.call(lastAccessLHS, ...args))),
              (lastAccessLHS = void 0));
        }
        return value;
      }
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _chunk5K6HCVT2cjsjs = __webpack_require__(
          './dist/chunk-5K6HCVT2.cjs.js',
        ),
        require_react_is_production_min = _chunk5K6HCVT2cjsjs.__commonJS.call(
          void 0,
          {
            'node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js'(
              exports,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
              var b = 'function' == typeof Symbol && Symbol.for,
                c = b ? Symbol.for('react.element') : 60103,
                d = b ? Symbol.for('react.portal') : 60106,
                e = b ? Symbol.for('react.fragment') : 60107,
                f = b ? Symbol.for('react.strict_mode') : 60108,
                g = b ? Symbol.for('react.profiler') : 60114,
                h = b ? Symbol.for('react.provider') : 60109,
                k = b ? Symbol.for('react.context') : 60110,
                l = b ? Symbol.for('react.async_mode') : 60111,
                m = b ? Symbol.for('react.concurrent_mode') : 60111,
                n = b ? Symbol.for('react.forward_ref') : 60112,
                p = b ? Symbol.for('react.suspense') : 60113,
                q = b ? Symbol.for('react.suspense_list') : 60120,
                r = b ? Symbol.for('react.memo') : 60115,
                t = b ? Symbol.for('react.lazy') : 60116,
                v = b ? Symbol.for('react.block') : 60121,
                w = b ? Symbol.for('react.fundamental') : 60117,
                x = b ? Symbol.for('react.responder') : 60118,
                y = b ? Symbol.for('react.scope') : 60119;
              function z(a) {
                if ('object' == typeof a && null !== a) {
                  var u = a.$$typeof;
                  switch (u) {
                    case c:
                      switch ((a = a.type)) {
                        case l:
                        case m:
                        case e:
                        case g:
                        case f:
                        case p:
                          return a;
                        default:
                          switch ((a = a && a.$$typeof)) {
                            case k:
                            case n:
                            case t:
                            case r:
                            case h:
                              return a;
                            default:
                              return u;
                          }
                      }
                    case d:
                      return u;
                  }
                }
              }
              function A(a) {
                return z(a) === m;
              }
              (exports.AsyncMode = l),
                (exports.ConcurrentMode = m),
                (exports.ContextConsumer = k),
                (exports.ContextProvider = h),
                (exports.Element = c),
                (exports.ForwardRef = n),
                (exports.Fragment = e),
                (exports.Lazy = t),
                (exports.Memo = r),
                (exports.Portal = d),
                (exports.Profiler = g),
                (exports.StrictMode = f),
                (exports.Suspense = p),
                (exports.isAsyncMode = function (a) {
                  return A(a) || z(a) === l;
                }),
                (exports.isConcurrentMode = A),
                (exports.isContextConsumer = function (a) {
                  return z(a) === k;
                }),
                (exports.isContextProvider = function (a) {
                  return z(a) === h;
                }),
                (exports.isElement = function (a) {
                  return 'object' == typeof a && null !== a && a.$$typeof === c;
                }),
                (exports.isForwardRef = function (a) {
                  return z(a) === n;
                }),
                (exports.isFragment = function (a) {
                  return z(a) === e;
                }),
                (exports.isLazy = function (a) {
                  return z(a) === t;
                }),
                (exports.isMemo = function (a) {
                  return z(a) === r;
                }),
                (exports.isPortal = function (a) {
                  return z(a) === d;
                }),
                (exports.isProfiler = function (a) {
                  return z(a) === g;
                }),
                (exports.isStrictMode = function (a) {
                  return z(a) === f;
                }),
                (exports.isSuspense = function (a) {
                  return z(a) === p;
                }),
                (exports.isValidElementType = function (a) {
                  return (
                    'string' == typeof a ||
                    'function' == typeof a ||
                    a === e ||
                    a === m ||
                    a === g ||
                    a === f ||
                    a === p ||
                    a === q ||
                    ('object' == typeof a &&
                      null !== a &&
                      (a.$$typeof === t ||
                        a.$$typeof === r ||
                        a.$$typeof === h ||
                        a.$$typeof === k ||
                        a.$$typeof === n ||
                        a.$$typeof === w ||
                        a.$$typeof === x ||
                        a.$$typeof === y ||
                        a.$$typeof === v))
                  );
                }),
                (exports.typeOf = z);
            },
          },
        ),
        require_react_is =
          (_chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
            'node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js'(
              exports,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            },
          }),
          _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
            'node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
                (module.exports = require_react_is_production_min());
            },
          })),
        require_object_assign = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var getOwnPropertySymbols = Object.getOwnPropertySymbols,
              hasOwnProperty = Object.prototype.hasOwnProperty,
              propIsEnumerable = Object.prototype.propertyIsEnumerable;
            module.exports = (function shouldUseNative() {
              try {
                if (!Object.assign) return !1;
                var test1 = new String('abc');
                if (
                  ((test1[5] = 'de'),
                  '5' === Object.getOwnPropertyNames(test1)[0])
                )
                  return !1;
                for (var test2 = {}, i = 0; i < 10; i++)
                  test2['_' + String.fromCharCode(i)] = i;
                if (
                  '0123456789' !==
                  Object.getOwnPropertyNames(test2)
                    .map(function (n) {
                      return test2[n];
                    })
                    .join('')
                )
                  return !1;
                var test3 = {};
                return (
                  'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                    test3[letter] = letter;
                  }),
                  'abcdefghijklmnopqrst' ===
                    Object.keys(Object.assign({}, test3)).join('')
                );
              } catch (err) {
                return !1;
              }
            })()
              ? Object.assign
              : function (target, source) {
                  for (
                    var from,
                      symbols,
                      to = (function toObject(val) {
                        if (null == val)
                          throw new TypeError(
                            'Object.assign cannot be called with null or undefined',
                          );
                        return Object(val);
                      })(target),
                      s = 1;
                    s < arguments.length;
                    s++
                  ) {
                    for (var key5 in (from = Object(arguments[s])))
                      hasOwnProperty.call(from, key5) &&
                        (to[key5] = from[key5]);
                    if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (var i = 0; i < symbols.length; i++)
                        propIsEnumerable.call(from, symbols[i]) &&
                          (to[symbols[i]] = from[symbols[i]]);
                    }
                  }
                  return to;
                };
          },
        }),
        require_ReactPropTypesSecret = _chunk5K6HCVT2cjsjs.__commonJS.call(
          void 0,
          {
            'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
              module.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            },
          },
        ),
        require_has = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = Function.call.bind(
                Object.prototype.hasOwnProperty,
              ));
          },
        }),
        require_checkPropTypes = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            function checkPropTypes(
              typeSpecs,
              values,
              location,
              componentName,
              getStack,
            ) {}
            (checkPropTypes.resetWarningCache = function () {
              0;
            }),
              (module.exports = checkPropTypes);
          },
        }),
        require_factoryWithThrowingShims =
          (_chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
            'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
              var ReactIs = require_react_is(),
                assign = require_object_assign(),
                ReactPropTypesSecret = require_ReactPropTypesSecret(),
                has = require_has(),
                checkPropTypes = require_checkPropTypes();
              function emptyFunctionThatReturnsNull() {
                return null;
              }
              module.exports = function (isValidElement, throwOnDirectAccess) {
                var ITERATOR_SYMBOL =
                    'function' == typeof Symbol && Symbol.iterator,
                  FAUX_ITERATOR_SYMBOL = '@@iterator';
                var ANONYMOUS = '<<anonymous>>',
                  ReactPropTypes = {
                    array: createPrimitiveTypeChecker('array'),
                    bigint: createPrimitiveTypeChecker('bigint'),
                    bool: createPrimitiveTypeChecker('boolean'),
                    func: createPrimitiveTypeChecker('function'),
                    number: createPrimitiveTypeChecker('number'),
                    object: createPrimitiveTypeChecker('object'),
                    string: createPrimitiveTypeChecker('string'),
                    symbol: createPrimitiveTypeChecker('symbol'),
                    any: (function createAnyTypeChecker() {
                      return createChainableTypeChecker(
                        emptyFunctionThatReturnsNull,
                      );
                    })(),
                    arrayOf: function createArrayOfTypeChecker(typeChecker) {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          if ('function' != typeof typeChecker)
                            return new PropTypeError(
                              'Property `' +
                                propFullName +
                                '` of component `' +
                                componentName +
                                '` has invalid PropType notation inside arrayOf.',
                            );
                          var propValue = props[propName];
                          if (!Array.isArray(propValue))
                            return new PropTypeError(
                              'Invalid ' +
                                location +
                                ' `' +
                                propFullName +
                                '` of type `' +
                                getPropType(propValue) +
                                '` supplied to `' +
                                componentName +
                                '`, expected an array.',
                            );
                          for (var i = 0; i < propValue.length; i++) {
                            var error = typeChecker(
                              propValue,
                              i,
                              componentName,
                              location,
                              propFullName + '[' + i + ']',
                              ReactPropTypesSecret,
                            );
                            if (error instanceof Error) return error;
                          }
                          return null;
                        },
                      );
                    },
                    element: (function createElementTypeChecker() {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          var propValue = props[propName];
                          return isValidElement(propValue)
                            ? null
                            : new PropTypeError(
                                'Invalid ' +
                                  location +
                                  ' `' +
                                  propFullName +
                                  '` of type `' +
                                  getPropType(propValue) +
                                  '` supplied to `' +
                                  componentName +
                                  '`, expected a single ReactElement.',
                              );
                        },
                      );
                    })(),
                    elementType: (function createElementTypeTypeChecker() {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          var propValue = props[propName];
                          return ReactIs.isValidElementType(propValue)
                            ? null
                            : new PropTypeError(
                                'Invalid ' +
                                  location +
                                  ' `' +
                                  propFullName +
                                  '` of type `' +
                                  getPropType(propValue) +
                                  '` supplied to `' +
                                  componentName +
                                  '`, expected a single ReactElement type.',
                              );
                        },
                      );
                    })(),
                    instanceOf: function createInstanceTypeChecker(
                      expectedClass,
                    ) {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          if (!(props[propName] instanceof expectedClass)) {
                            var expectedClassName =
                              expectedClass.name || ANONYMOUS;
                            return new PropTypeError(
                              'Invalid ' +
                                location +
                                ' `' +
                                propFullName +
                                '` of type `' +
                                (function getClassName(propValue) {
                                  return propValue.constructor &&
                                    propValue.constructor.name
                                    ? propValue.constructor.name
                                    : ANONYMOUS;
                                })(props[propName]) +
                                '` supplied to `' +
                                componentName +
                                '`, expected instance of `' +
                                expectedClassName +
                                '`.',
                            );
                          }
                          return null;
                        },
                      );
                    },
                    node: (function createNodeChecker() {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          return isNode(props[propName])
                            ? null
                            : new PropTypeError(
                                'Invalid ' +
                                  location +
                                  ' `' +
                                  propFullName +
                                  '` supplied to `' +
                                  componentName +
                                  '`, expected a ReactNode.',
                              );
                        },
                      );
                    })(),
                    objectOf: function createObjectOfTypeChecker(typeChecker) {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          if ('function' != typeof typeChecker)
                            return new PropTypeError(
                              'Property `' +
                                propFullName +
                                '` of component `' +
                                componentName +
                                '` has invalid PropType notation inside objectOf.',
                            );
                          var propValue = props[propName],
                            propType = getPropType(propValue);
                          if ('object' !== propType)
                            return new PropTypeError(
                              'Invalid ' +
                                location +
                                ' `' +
                                propFullName +
                                '` of type `' +
                                propType +
                                '` supplied to `' +
                                componentName +
                                '`, expected an object.',
                            );
                          for (var key5 in propValue)
                            if (has(propValue, key5)) {
                              var error = typeChecker(
                                propValue,
                                key5,
                                componentName,
                                location,
                                propFullName + '.' + key5,
                                ReactPropTypesSecret,
                              );
                              if (error instanceof Error) return error;
                            }
                          return null;
                        },
                      );
                    },
                    oneOf: function createEnumTypeChecker(expectedValues) {
                      if (!Array.isArray(expectedValues))
                        return emptyFunctionThatReturnsNull;
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          for (
                            var propValue = props[propName], i = 0;
                            i < expectedValues.length;
                            i++
                          )
                            if (is(propValue, expectedValues[i])) return null;
                          var valuesString = JSON.stringify(
                            expectedValues,
                            function replacer(key5, value) {
                              return 'symbol' === getPreciseType(value)
                                ? String(value)
                                : value;
                            },
                          );
                          return new PropTypeError(
                            'Invalid ' +
                              location +
                              ' `' +
                              propFullName +
                              '` of value `' +
                              String(propValue) +
                              '` supplied to `' +
                              componentName +
                              '`, expected one of ' +
                              valuesString +
                              '.',
                          );
                        },
                      );
                    },
                    oneOfType: function createUnionTypeChecker(
                      arrayOfTypeCheckers,
                    ) {
                      if (!Array.isArray(arrayOfTypeCheckers))
                        return emptyFunctionThatReturnsNull;
                      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        var checker = arrayOfTypeCheckers[i];
                        if ('function' != typeof checker)
                          return (
                            getPostfixForTypeWarning(checker),
                            emptyFunctionThatReturnsNull
                          );
                      }
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          for (
                            var expectedTypes = [], i2 = 0;
                            i2 < arrayOfTypeCheckers.length;
                            i2++
                          ) {
                            var checkerResult = (0, arrayOfTypeCheckers[i2])(
                              props,
                              propName,
                              componentName,
                              location,
                              propFullName,
                              ReactPropTypesSecret,
                            );
                            if (null == checkerResult) return null;
                            checkerResult.data &&
                              has(checkerResult.data, 'expectedType') &&
                              expectedTypes.push(
                                checkerResult.data.expectedType,
                              );
                          }
                          return new PropTypeError(
                            'Invalid ' +
                              location +
                              ' `' +
                              propFullName +
                              '` supplied to `' +
                              componentName +
                              '`' +
                              (expectedTypes.length > 0
                                ? ', expected one of type [' +
                                  expectedTypes.join(', ') +
                                  ']'
                                : '') +
                              '.',
                          );
                        },
                      );
                    },
                    shape: function createShapeTypeChecker(shapeTypes) {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          var propValue = props[propName],
                            propType = getPropType(propValue);
                          if ('object' !== propType)
                            return new PropTypeError(
                              'Invalid ' +
                                location +
                                ' `' +
                                propFullName +
                                '` of type `' +
                                propType +
                                '` supplied to `' +
                                componentName +
                                '`, expected `object`.',
                            );
                          for (var key5 in shapeTypes) {
                            var checker = shapeTypes[key5];
                            if ('function' != typeof checker)
                              return invalidValidatorError(
                                componentName,
                                location,
                                propFullName,
                                key5,
                                getPreciseType(checker),
                              );
                            var error = checker(
                              propValue,
                              key5,
                              componentName,
                              location,
                              propFullName + '.' + key5,
                              ReactPropTypesSecret,
                            );
                            if (error) return error;
                          }
                          return null;
                        },
                      );
                    },
                    exact: function createStrictShapeTypeChecker(shapeTypes) {
                      return createChainableTypeChecker(
                        function validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        ) {
                          var propValue = props[propName],
                            propType = getPropType(propValue);
                          if ('object' !== propType)
                            return new PropTypeError(
                              'Invalid ' +
                                location +
                                ' `' +
                                propFullName +
                                '` of type `' +
                                propType +
                                '` supplied to `' +
                                componentName +
                                '`, expected `object`.',
                            );
                          var allKeys = assign({}, props[propName], shapeTypes);
                          for (var key5 in allKeys) {
                            var checker = shapeTypes[key5];
                            if (
                              has(shapeTypes, key5) &&
                              'function' != typeof checker
                            )
                              return invalidValidatorError(
                                componentName,
                                location,
                                propFullName,
                                key5,
                                getPreciseType(checker),
                              );
                            if (!checker)
                              return new PropTypeError(
                                'Invalid ' +
                                  location +
                                  ' `' +
                                  propFullName +
                                  '` key `' +
                                  key5 +
                                  '` supplied to `' +
                                  componentName +
                                  '`.\nBad object: ' +
                                  JSON.stringify(props[propName], null, '  ') +
                                  '\nValid keys: ' +
                                  JSON.stringify(
                                    Object.keys(shapeTypes),
                                    null,
                                    '  ',
                                  ),
                              );
                            var error = checker(
                              propValue,
                              key5,
                              componentName,
                              location,
                              propFullName + '.' + key5,
                              ReactPropTypesSecret,
                            );
                            if (error) return error;
                          }
                          return null;
                        },
                      );
                    },
                  };
                function is(x, y) {
                  return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y;
                }
                function PropTypeError(message, data) {
                  (this.message = message),
                    (this.data = data && 'object' == typeof data ? data : {}),
                    (this.stack = '');
                }
                function createChainableTypeChecker(validate) {
                  function checkType(
                    isRequired,
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    secret,
                  ) {
                    if (
                      ((componentName = componentName || ANONYMOUS),
                      (propFullName = propFullName || propName),
                      secret !== ReactPropTypesSecret) &&
                      throwOnDirectAccess
                    ) {
                      var err = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                      );
                      throw ((err.name = 'Invariant Violation'), err);
                    }
                    return null == props[propName]
                      ? isRequired
                        ? null === props[propName]
                          ? new PropTypeError(
                              'The ' +
                                location +
                                ' `' +
                                propFullName +
                                '` is marked as required in `' +
                                componentName +
                                '`, but its value is `null`.',
                            )
                          : new PropTypeError(
                              'The ' +
                                location +
                                ' `' +
                                propFullName +
                                '` is marked as required in `' +
                                componentName +
                                '`, but its value is `undefined`.',
                            )
                        : null
                      : validate(
                          props,
                          propName,
                          componentName,
                          location,
                          propFullName,
                        );
                  }
                  var chainedCheckType = checkType.bind(null, !1);
                  return (
                    (chainedCheckType.isRequired = checkType.bind(null, !0)),
                    chainedCheckType
                  );
                }
                function createPrimitiveTypeChecker(expectedType) {
                  return createChainableTypeChecker(
                    function validate(
                      props,
                      propName,
                      componentName,
                      location,
                      propFullName,
                      secret,
                    ) {
                      var propValue = props[propName];
                      return getPropType(propValue) !== expectedType
                        ? new PropTypeError(
                            'Invalid ' +
                              location +
                              ' `' +
                              propFullName +
                              '` of type `' +
                              getPreciseType(propValue) +
                              '` supplied to `' +
                              componentName +
                              '`, expected `' +
                              expectedType +
                              '`.',
                            { expectedType },
                          )
                        : null;
                    },
                  );
                }
                function invalidValidatorError(
                  componentName,
                  location,
                  propFullName,
                  key5,
                  type,
                ) {
                  return new PropTypeError(
                    (componentName || 'React class') +
                      ': ' +
                      location +
                      ' type `' +
                      propFullName +
                      '.' +
                      key5 +
                      '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                      type +
                      '`.',
                  );
                }
                function isNode(propValue) {
                  switch (typeof propValue) {
                    case 'number':
                    case 'string':
                    case 'undefined':
                      return !0;
                    case 'boolean':
                      return !propValue;
                    case 'object':
                      if (Array.isArray(propValue))
                        return propValue.every(isNode);
                      if (null === propValue || isValidElement(propValue))
                        return !0;
                      var iteratorFn = (function getIteratorFn(maybeIterable) {
                        var iteratorFn =
                          maybeIterable &&
                          ((ITERATOR_SYMBOL &&
                            maybeIterable[ITERATOR_SYMBOL]) ||
                            maybeIterable[FAUX_ITERATOR_SYMBOL]);
                        if ('function' == typeof iteratorFn) return iteratorFn;
                      })(propValue);
                      if (!iteratorFn) return !1;
                      var step,
                        iterator = iteratorFn.call(propValue);
                      if (iteratorFn !== propValue.entries) {
                        for (; !(step = iterator.next()).done; )
                          if (!isNode(step.value)) return !1;
                      } else
                        for (; !(step = iterator.next()).done; ) {
                          var entry = step.value;
                          if (entry && !isNode(entry[1])) return !1;
                        }
                      return !0;
                    default:
                      return !1;
                  }
                }
                function getPropType(propValue) {
                  var propType = typeof propValue;
                  return Array.isArray(propValue)
                    ? 'array'
                    : propValue instanceof RegExp
                      ? 'object'
                      : (function isSymbol(propType, propValue) {
                            return (
                              'symbol' === propType ||
                              (!!propValue &&
                                ('Symbol' === propValue['@@toStringTag'] ||
                                  ('function' == typeof Symbol &&
                                    propValue instanceof Symbol)))
                            );
                          })(propType, propValue)
                        ? 'symbol'
                        : propType;
                }
                function getPreciseType(propValue) {
                  if (null == propValue) return '' + propValue;
                  var propType = getPropType(propValue);
                  if ('object' === propType) {
                    if (propValue instanceof Date) return 'date';
                    if (propValue instanceof RegExp) return 'regexp';
                  }
                  return propType;
                }
                function getPostfixForTypeWarning(value) {
                  var type = getPreciseType(value);
                  switch (type) {
                    case 'array':
                    case 'object':
                      return 'an ' + type;
                    case 'boolean':
                    case 'date':
                    case 'regexp':
                      return 'a ' + type;
                    default:
                      return type;
                  }
                }
                return (
                  (PropTypeError.prototype = Error.prototype),
                  (ReactPropTypes.checkPropTypes = checkPropTypes),
                  (ReactPropTypes.resetWarningCache =
                    checkPropTypes.resetWarningCache),
                  (ReactPropTypes.PropTypes = ReactPropTypes),
                  ReactPropTypes
                );
              };
            },
          }),
          _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
            'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
              var ReactPropTypesSecret = require_ReactPropTypesSecret();
              function emptyFunction() {}
              function emptyFunctionWithReset() {}
              (emptyFunctionWithReset.resetWarningCache = emptyFunction),
                (module.exports = function () {
                  function shim(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    secret,
                  ) {
                    if (secret !== ReactPropTypesSecret) {
                      var err = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                      );
                      throw ((err.name = 'Invariant Violation'), err);
                    }
                  }
                  function getShim() {
                    return shim;
                  }
                  shim.isRequired = shim;
                  var ReactPropTypes = {
                    array: shim,
                    bigint: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,
                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    elementType: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim,
                    checkPropTypes: emptyFunctionWithReset,
                    resetWarningCache: emptyFunction,
                  };
                  return (
                    (ReactPropTypes.PropTypes = ReactPropTypes), ReactPropTypes
                  );
                });
            },
          })),
        require_prop_types = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = require_factoryWithThrowingShims()());
          },
        }),
        require_typeof = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js'(
            exports,
            module,
          ) {
            function _typeof2(obj) {
              return (
                (module.exports = _typeof2 =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (obj2) {
                        return typeof obj2;
                      }
                    : function (obj2) {
                        return obj2 &&
                          'function' == typeof Symbol &&
                          obj2.constructor === Symbol &&
                          obj2 !== Symbol.prototype
                          ? 'symbol'
                          : typeof obj2;
                      }),
                (module.exports.__esModule = !0),
                (module.exports.default = module.exports),
                _typeof2(obj)
              );
            }
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = _typeof2),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_toPrimitive = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var _typeof2 = require_typeof().default;
            (module.exports = function _toPrimitive(input, hint) {
              if ('object' !== _typeof2(input) || null === input) return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== _typeof2(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === hint ? String : Number)(input);
            }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_toPropertyKey = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var _typeof2 = require_typeof().default,
              toPrimitive = require_toPrimitive();
            (module.exports = function _toPropertyKey(arg) {
              var key5 = toPrimitive(arg, 'string');
              return 'symbol' === _typeof2(key5) ? key5 : String(key5);
            }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_defineProperty = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var toPropertyKey = require_toPropertyKey();
            (module.exports = function _defineProperty2(obj, key5, value) {
              return (
                (key5 = toPropertyKey(key5)) in obj
                  ? Object.defineProperty(obj, key5, {
                      value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (obj[key5] = value),
                obj
              );
            }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_arrayWithHoles = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayWithHoles.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
              }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_iterableToArrayLimit = _chunk5K6HCVT2cjsjs.__commonJS.call(
          void 0,
          {
            'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
                (module.exports = function _iterableToArrayLimit(arr, i) {
                  var _i =
                    null == arr
                      ? null
                      : ('undefined' != typeof Symbol &&
                          arr[Symbol.iterator]) ||
                        arr['@@iterator'];
                  if (null != _i) {
                    var _s,
                      _e,
                      _x,
                      _r,
                      _arr = [],
                      _n = !0,
                      _d = !1;
                    try {
                      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                        if (Object(_i) !== _i) return;
                        _n = !1;
                      } else
                        for (
                          ;
                          !(_n = (_s = _x.call(_i)).done) &&
                          (_arr.push(_s.value), _arr.length !== i);
                          _n = !0
                        );
                    } catch (err) {
                      (_d = !0), (_e = err);
                    } finally {
                      try {
                        if (
                          !_n &&
                          null != _i.return &&
                          ((_r = _i.return()), Object(_r) !== _r)
                        )
                          return;
                      } finally {
                        if (_d) throw _e;
                      }
                    }
                    return _arr;
                  }
                }),
                (module.exports.__esModule = !0),
                (module.exports.default = module.exports);
            },
          },
        ),
        require_arrayLikeToArray = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayLikeToArray.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                  arr2[i] = arr[i];
                return arr2;
              }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_unsupportedIterableToArray =
          _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
            'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'(
              exports,
              module,
            ) {
              _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
              var arrayLikeToArray = require_arrayLikeToArray();
              (module.exports = function _unsupportedIterableToArray(
                o,
                minLen,
              ) {
                if (o) {
                  if ('string' == typeof o) return arrayLikeToArray(o, minLen);
                  var n = Object.prototype.toString.call(o).slice(8, -1);
                  return (
                    'Object' === n && o.constructor && (n = o.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(o)
                      : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? arrayLikeToArray(o, minLen)
                        : void 0
                  );
                }
              }),
                (module.exports.__esModule = !0),
                (module.exports.default = module.exports);
            },
          }),
        require_nonIterableRest = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/nonIterableRest.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = function _nonIterableRest() {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_slicedToArray = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/slicedToArray.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var arrayWithHoles = require_arrayWithHoles(),
              iterableToArrayLimit = require_iterableToArrayLimit(),
              unsupportedIterableToArray = require_unsupportedIterableToArray(),
              nonIterableRest = require_nonIterableRest();
            (module.exports = function _slicedToArray2(arr, i) {
              return (
                arrayWithHoles(arr) ||
                iterableToArrayLimit(arr, i) ||
                unsupportedIterableToArray(arr, i) ||
                nonIterableRest()
              );
            }),
              (module.exports.__esModule = !0),
              (module.exports.default = module.exports);
          },
        }),
        require_threezerotwofour = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/threezerotwofour.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'threezerotwofour',
                author: 'jan t. sott (http://github.com/idleberg)',
                base00: '#090300',
                base01: '#3a3432',
                base02: '#4a4543',
                base03: '#5c5855',
                base04: '#807d7c',
                base05: '#a5a2a2',
                base06: '#d6d5d4',
                base07: '#f7f7f7',
                base08: '#db2d20',
                base09: '#e8bbd0',
                base0A: '#fded02',
                base0B: '#01a252',
                base0C: '#b5e4f4',
                base0D: '#01a0e4',
                base0E: '#a16a94',
                base0F: '#cdab53',
              }),
              (module.exports = exports.default);
          },
        }),
        require_apathy = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/apathy.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'apathy',
                author: 'jannik siebert (https://github.com/janniks)',
                base00: '#031A16',
                base01: '#0B342D',
                base02: '#184E45',
                base03: '#2B685E',
                base04: '#5F9C92',
                base05: '#81B5AC',
                base06: '#A7CEC8',
                base07: '#D2E7E4',
                base08: '#3E9688',
                base09: '#3E7996',
                base0A: '#3E4C96',
                base0B: '#883E96',
                base0C: '#963E4C',
                base0D: '#96883E',
                base0E: '#4C963E',
                base0F: '#3E965B',
              }),
              (module.exports = exports.default);
          },
        }),
        require_ashes = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/ashes.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'ashes',
                author: 'jannik siebert (https://github.com/janniks)',
                base00: '#1C2023',
                base01: '#393F45',
                base02: '#565E65',
                base03: '#747C84',
                base04: '#ADB3BA',
                base05: '#C7CCD1',
                base06: '#DFE2E5',
                base07: '#F3F4F5',
                base08: '#C7AE95',
                base09: '#C7C795',
                base0A: '#AEC795',
                base0B: '#95C7AE',
                base0C: '#95AEC7',
                base0D: '#AE95C7',
                base0E: '#C795AE',
                base0F: '#C79595',
              }),
              (module.exports = exports.default);
          },
        }),
        require_atelier_dune = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/atelier-dune.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'atelier dune',
                author:
                  'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
                base00: '#20201d',
                base01: '#292824',
                base02: '#6e6b5e',
                base03: '#7d7a68',
                base04: '#999580',
                base05: '#a6a28c',
                base06: '#e8e4cf',
                base07: '#fefbec',
                base08: '#d73737',
                base09: '#b65611',
                base0A: '#cfb017',
                base0B: '#60ac39',
                base0C: '#1fad83',
                base0D: '#6684e1',
                base0E: '#b854d4',
                base0F: '#d43552',
              }),
              (module.exports = exports.default);
          },
        }),
        require_atelier_forest = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/atelier-forest.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'atelier forest',
                author:
                  'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
                base00: '#1b1918',
                base01: '#2c2421',
                base02: '#68615e',
                base03: '#766e6b',
                base04: '#9c9491',
                base05: '#a8a19f',
                base06: '#e6e2e0',
                base07: '#f1efee',
                base08: '#f22c40',
                base09: '#df5320',
                base0A: '#d5911a',
                base0B: '#5ab738',
                base0C: '#00ad9c',
                base0D: '#407ee7',
                base0E: '#6666ea',
                base0F: '#c33ff3',
              }),
              (module.exports = exports.default);
          },
        }),
        require_atelier_heath = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/atelier-heath.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'atelier heath',
                author:
                  'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
                base00: '#1b181b',
                base01: '#292329',
                base02: '#695d69',
                base03: '#776977',
                base04: '#9e8f9e',
                base05: '#ab9bab',
                base06: '#d8cad8',
                base07: '#f7f3f7',
                base08: '#ca402b',
                base09: '#a65926',
                base0A: '#bb8a35',
                base0B: '#379a37',
                base0C: '#159393',
                base0D: '#516aec',
                base0E: '#7b59c0',
                base0F: '#cc33cc',
              }),
              (module.exports = exports.default);
          },
        }),
        require_atelier_lakeside = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/atelier-lakeside.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'atelier lakeside',
                author:
                  'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
                base00: '#161b1d',
                base01: '#1f292e',
                base02: '#516d7b',
                base03: '#5a7b8c',
                base04: '#7195a8',
                base05: '#7ea2b4',
                base06: '#c1e4f6',
                base07: '#ebf8ff',
                base08: '#d22d72',
                base09: '#935c25',
                base0A: '#8a8a0f',
                base0B: '#568c3b',
                base0C: '#2d8f6f',
                base0D: '#257fad',
                base0E: '#5d5db1',
                base0F: '#b72dd2',
              }),
              (module.exports = exports.default);
          },
        }),
        require_atelier_seaside = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/atelier-seaside.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'atelier seaside',
                author:
                  'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
                base00: '#131513',
                base01: '#242924',
                base02: '#5e6e5e',
                base03: '#687d68',
                base04: '#809980',
                base05: '#8ca68c',
                base06: '#cfe8cf',
                base07: '#f0fff0',
                base08: '#e6193c',
                base09: '#87711d',
                base0A: '#c3c322',
                base0B: '#29a329',
                base0C: '#1999b3',
                base0D: '#3d62f5',
                base0E: '#ad2bee',
                base0F: '#e619c3',
              }),
              (module.exports = exports.default);
          },
        }),
        require_bespin = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/bespin.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'bespin',
                author: 'jan t. sott',
                base00: '#28211c',
                base01: '#36312e',
                base02: '#5e5d5c',
                base03: '#666666',
                base04: '#797977',
                base05: '#8a8986',
                base06: '#9d9b97',
                base07: '#baae9e',
                base08: '#cf6a4c',
                base09: '#cf7d34',
                base0A: '#f9ee98',
                base0B: '#54be0d',
                base0C: '#afc4db',
                base0D: '#5ea6ea',
                base0E: '#9b859d',
                base0F: '#937121',
              }),
              (module.exports = exports.default);
          },
        }),
        require_brewer = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/brewer.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'brewer',
                author: 'timothée poisot (http://github.com/tpoisot)',
                base00: '#0c0d0e',
                base01: '#2e2f30',
                base02: '#515253',
                base03: '#737475',
                base04: '#959697',
                base05: '#b7b8b9',
                base06: '#dadbdc',
                base07: '#fcfdfe',
                base08: '#e31a1c',
                base09: '#e6550d',
                base0A: '#dca060',
                base0B: '#31a354',
                base0C: '#80b1d3',
                base0D: '#3182bd',
                base0E: '#756bb1',
                base0F: '#b15928',
              }),
              (module.exports = exports.default);
          },
        }),
        require_bright = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/bright.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'bright',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#000000',
                base01: '#303030',
                base02: '#505050',
                base03: '#b0b0b0',
                base04: '#d0d0d0',
                base05: '#e0e0e0',
                base06: '#f5f5f5',
                base07: '#ffffff',
                base08: '#fb0120',
                base09: '#fc6d24',
                base0A: '#fda331',
                base0B: '#a1c659',
                base0C: '#76c7b7',
                base0D: '#6fb3d2',
                base0E: '#d381c3',
                base0F: '#be643c',
              }),
              (module.exports = exports.default);
          },
        }),
        require_chalk = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/chalk.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'chalk',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#151515',
                base01: '#202020',
                base02: '#303030',
                base03: '#505050',
                base04: '#b0b0b0',
                base05: '#d0d0d0',
                base06: '#e0e0e0',
                base07: '#f5f5f5',
                base08: '#fb9fb1',
                base09: '#eda987',
                base0A: '#ddb26f',
                base0B: '#acc267',
                base0C: '#12cfc0',
                base0D: '#6fc2ef',
                base0E: '#e1a3ee',
                base0F: '#deaf8f',
              }),
              (module.exports = exports.default);
          },
        }),
        require_codeschool = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/codeschool.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'codeschool',
                author: 'brettof86',
                base00: '#232c31',
                base01: '#1c3657',
                base02: '#2a343a',
                base03: '#3f4944',
                base04: '#84898c',
                base05: '#9ea7a6',
                base06: '#a7cfa3',
                base07: '#b5d8f6',
                base08: '#2a5491',
                base09: '#43820d',
                base0A: '#a03b1e',
                base0B: '#237986',
                base0C: '#b02f30',
                base0D: '#484d79',
                base0E: '#c59820',
                base0F: '#c98344',
              }),
              (module.exports = exports.default);
          },
        }),
        require_colors = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/colors.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'colors',
                author: 'mrmrs (http://clrs.cc)',
                base00: '#111111',
                base01: '#333333',
                base02: '#555555',
                base03: '#777777',
                base04: '#999999',
                base05: '#bbbbbb',
                base06: '#dddddd',
                base07: '#ffffff',
                base08: '#ff4136',
                base09: '#ff851b',
                base0A: '#ffdc00',
                base0B: '#2ecc40',
                base0C: '#7fdbff',
                base0D: '#0074d9',
                base0E: '#b10dc9',
                base0F: '#85144b',
              }),
              (module.exports = exports.default);
          },
        }),
        require_default = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/default.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'default',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#181818',
                base01: '#282828',
                base02: '#383838',
                base03: '#585858',
                base04: '#b8b8b8',
                base05: '#d8d8d8',
                base06: '#e8e8e8',
                base07: '#f8f8f8',
                base08: '#ab4642',
                base09: '#dc9656',
                base0A: '#f7ca88',
                base0B: '#a1b56c',
                base0C: '#86c1b9',
                base0D: '#7cafc2',
                base0E: '#ba8baf',
                base0F: '#a16946',
              }),
              (module.exports = exports.default);
          },
        }),
        require_eighties = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/eighties.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'eighties',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#2d2d2d',
                base01: '#393939',
                base02: '#515151',
                base03: '#747369',
                base04: '#a09f93',
                base05: '#d3d0c8',
                base06: '#e8e6df',
                base07: '#f2f0ec',
                base08: '#f2777a',
                base09: '#f99157',
                base0A: '#ffcc66',
                base0B: '#99cc99',
                base0C: '#66cccc',
                base0D: '#6699cc',
                base0E: '#cc99cc',
                base0F: '#d27b53',
              }),
              (module.exports = exports.default);
          },
        }),
        require_embers = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/embers.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'embers',
                author: 'jannik siebert (https://github.com/janniks)',
                base00: '#16130F',
                base01: '#2C2620',
                base02: '#433B32',
                base03: '#5A5047',
                base04: '#8A8075',
                base05: '#A39A90',
                base06: '#BEB6AE',
                base07: '#DBD6D1',
                base08: '#826D57',
                base09: '#828257',
                base0A: '#6D8257',
                base0B: '#57826D',
                base0C: '#576D82',
                base0D: '#6D5782',
                base0E: '#82576D',
                base0F: '#825757',
              }),
              (module.exports = exports.default);
          },
        }),
        require_flat = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/flat.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'flat',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#2C3E50',
                base01: '#34495E',
                base02: '#7F8C8D',
                base03: '#95A5A6',
                base04: '#BDC3C7',
                base05: '#e0e0e0',
                base06: '#f5f5f5',
                base07: '#ECF0F1',
                base08: '#E74C3C',
                base09: '#E67E22',
                base0A: '#F1C40F',
                base0B: '#2ECC71',
                base0C: '#1ABC9C',
                base0D: '#3498DB',
                base0E: '#9B59B6',
                base0F: '#be643c',
              }),
              (module.exports = exports.default);
          },
        }),
        require_google = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/google.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'google',
                author: 'seth wright (http://sethawright.com)',
                base00: '#1d1f21',
                base01: '#282a2e',
                base02: '#373b41',
                base03: '#969896',
                base04: '#b4b7b4',
                base05: '#c5c8c6',
                base06: '#e0e0e0',
                base07: '#ffffff',
                base08: '#CC342B',
                base09: '#F96A38',
                base0A: '#FBA922',
                base0B: '#198844',
                base0C: '#3971ED',
                base0D: '#3971ED',
                base0E: '#A36AC7',
                base0F: '#3971ED',
              }),
              (module.exports = exports.default);
          },
        }),
        require_grayscale = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/grayscale.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'grayscale',
                author: 'alexandre gavioli (https://github.com/alexx2/)',
                base00: '#101010',
                base01: '#252525',
                base02: '#464646',
                base03: '#525252',
                base04: '#ababab',
                base05: '#b9b9b9',
                base06: '#e3e3e3',
                base07: '#f7f7f7',
                base08: '#7c7c7c',
                base09: '#999999',
                base0A: '#a0a0a0',
                base0B: '#8e8e8e',
                base0C: '#868686',
                base0D: '#686868',
                base0E: '#747474',
                base0F: '#5e5e5e',
              }),
              (module.exports = exports.default);
          },
        }),
        require_greenscreen = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/greenscreen.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'green screen',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#001100',
                base01: '#003300',
                base02: '#005500',
                base03: '#007700',
                base04: '#009900',
                base05: '#00bb00',
                base06: '#00dd00',
                base07: '#00ff00',
                base08: '#007700',
                base09: '#009900',
                base0A: '#007700',
                base0B: '#00bb00',
                base0C: '#005500',
                base0D: '#009900',
                base0E: '#00bb00',
                base0F: '#005500',
              }),
              (module.exports = exports.default);
          },
        }),
        require_harmonic = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/harmonic.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'harmonic16',
                author: 'jannik siebert (https://github.com/janniks)',
                base00: '#0b1c2c',
                base01: '#223b54',
                base02: '#405c79',
                base03: '#627e99',
                base04: '#aabcce',
                base05: '#cbd6e2',
                base06: '#e5ebf1',
                base07: '#f7f9fb',
                base08: '#bf8b56',
                base09: '#bfbf56',
                base0A: '#8bbf56',
                base0B: '#56bf8b',
                base0C: '#568bbf',
                base0D: '#8b56bf',
                base0E: '#bf568b',
                base0F: '#bf5656',
              }),
              (module.exports = exports.default);
          },
        }),
        require_hopscotch = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/hopscotch.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'hopscotch',
                author: 'jan t. sott',
                base00: '#322931',
                base01: '#433b42',
                base02: '#5c545b',
                base03: '#797379',
                base04: '#989498',
                base05: '#b9b5b8',
                base06: '#d5d3d5',
                base07: '#ffffff',
                base08: '#dd464c',
                base09: '#fd8b19',
                base0A: '#fdcc59',
                base0B: '#8fc13e',
                base0C: '#149b93',
                base0D: '#1290bf',
                base0E: '#c85e7c',
                base0F: '#b33508',
              }),
              (module.exports = exports.default);
          },
        }),
        require_isotope = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/isotope.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'isotope',
                author: 'jan t. sott',
                base00: '#000000',
                base01: '#404040',
                base02: '#606060',
                base03: '#808080',
                base04: '#c0c0c0',
                base05: '#d0d0d0',
                base06: '#e0e0e0',
                base07: '#ffffff',
                base08: '#ff0000',
                base09: '#ff9900',
                base0A: '#ff0099',
                base0B: '#33ff00',
                base0C: '#00ffff',
                base0D: '#0066ff',
                base0E: '#cc00ff',
                base0F: '#3300ff',
              }),
              (module.exports = exports.default);
          },
        }),
        require_marrakesh = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/marrakesh.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'marrakesh',
                author: 'alexandre gavioli (http://github.com/alexx2/)',
                base00: '#201602',
                base01: '#302e00',
                base02: '#5f5b17',
                base03: '#6c6823',
                base04: '#86813b',
                base05: '#948e48',
                base06: '#ccc37a',
                base07: '#faf0a5',
                base08: '#c35359',
                base09: '#b36144',
                base0A: '#a88339',
                base0B: '#18974e',
                base0C: '#75a738',
                base0D: '#477ca1',
                base0E: '#8868b3',
                base0F: '#b3588e',
              }),
              (module.exports = exports.default);
          },
        }),
        require_mocha = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/mocha.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'mocha',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#3B3228',
                base01: '#534636',
                base02: '#645240',
                base03: '#7e705a',
                base04: '#b8afad',
                base05: '#d0c8c6',
                base06: '#e9e1dd',
                base07: '#f5eeeb',
                base08: '#cb6077',
                base09: '#d28b71',
                base0A: '#f4bc87',
                base0B: '#beb55b',
                base0C: '#7bbda4',
                base0D: '#8ab3b5',
                base0E: '#a89bb9',
                base0F: '#bb9584',
              }),
              (module.exports = exports.default);
          },
        }),
        require_monokai = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/monokai.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'monokai',
                author: 'wimer hazenberg (http://www.monokai.nl)',
                base00: '#272822',
                base01: '#383830',
                base02: '#49483e',
                base03: '#75715e',
                base04: '#a59f85',
                base05: '#f8f8f2',
                base06: '#f5f4f1',
                base07: '#f9f8f5',
                base08: '#f92672',
                base09: '#fd971f',
                base0A: '#f4bf75',
                base0B: '#a6e22e',
                base0C: '#a1efe4',
                base0D: '#66d9ef',
                base0E: '#ae81ff',
                base0F: '#cc6633',
              }),
              (module.exports = exports.default);
          },
        }),
        require_ocean = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/ocean.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'ocean',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#2b303b',
                base01: '#343d46',
                base02: '#4f5b66',
                base03: '#65737e',
                base04: '#a7adba',
                base05: '#c0c5ce',
                base06: '#dfe1e8',
                base07: '#eff1f5',
                base08: '#bf616a',
                base09: '#d08770',
                base0A: '#ebcb8b',
                base0B: '#a3be8c',
                base0C: '#96b5b4',
                base0D: '#8fa1b3',
                base0E: '#b48ead',
                base0F: '#ab7967',
              }),
              (module.exports = exports.default);
          },
        }),
        require_paraiso = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/paraiso.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'paraiso',
                author: 'jan t. sott',
                base00: '#2f1e2e',
                base01: '#41323f',
                base02: '#4f424c',
                base03: '#776e71',
                base04: '#8d8687',
                base05: '#a39e9b',
                base06: '#b9b6b0',
                base07: '#e7e9db',
                base08: '#ef6155',
                base09: '#f99b15',
                base0A: '#fec418',
                base0B: '#48b685',
                base0C: '#5bc4bf',
                base0D: '#06b6ef',
                base0E: '#815ba4',
                base0F: '#e96ba8',
              }),
              (module.exports = exports.default);
          },
        }),
        require_pop = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/pop.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'pop',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#000000',
                base01: '#202020',
                base02: '#303030',
                base03: '#505050',
                base04: '#b0b0b0',
                base05: '#d0d0d0',
                base06: '#e0e0e0',
                base07: '#ffffff',
                base08: '#eb008a',
                base09: '#f29333',
                base0A: '#f8ca12',
                base0B: '#37b349',
                base0C: '#00aabb',
                base0D: '#0e5a94',
                base0E: '#b31e8d',
                base0F: '#7a2d00',
              }),
              (module.exports = exports.default);
          },
        }),
        require_railscasts = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/railscasts.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'railscasts',
                author: 'ryan bates (http://railscasts.com)',
                base00: '#2b2b2b',
                base01: '#272935',
                base02: '#3a4055',
                base03: '#5a647e',
                base04: '#d4cfc9',
                base05: '#e6e1dc',
                base06: '#f4f1ed',
                base07: '#f9f7f3',
                base08: '#da4939',
                base09: '#cc7833',
                base0A: '#ffc66d',
                base0B: '#a5c261',
                base0C: '#519f50',
                base0D: '#6d9cbe',
                base0E: '#b6b3eb',
                base0F: '#bc9458',
              }),
              (module.exports = exports.default);
          },
        }),
        require_shapeshifter = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/shapeshifter.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'shapeshifter',
                author: 'tyler benziger (http://tybenz.com)',
                base00: '#000000',
                base01: '#040404',
                base02: '#102015',
                base03: '#343434',
                base04: '#555555',
                base05: '#ababab',
                base06: '#e0e0e0',
                base07: '#f9f9f9',
                base08: '#e92f2f',
                base09: '#e09448',
                base0A: '#dddd13',
                base0B: '#0ed839',
                base0C: '#23edda',
                base0D: '#3b48e3',
                base0E: '#f996e2',
                base0F: '#69542d',
              }),
              (module.exports = exports.default);
          },
        }),
        require_solarized = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/solarized.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'solarized',
                author:
                  'ethan schoonover (http://ethanschoonover.com/solarized)',
                base00: '#002b36',
                base01: '#073642',
                base02: '#586e75',
                base03: '#657b83',
                base04: '#839496',
                base05: '#93a1a1',
                base06: '#eee8d5',
                base07: '#fdf6e3',
                base08: '#dc322f',
                base09: '#cb4b16',
                base0A: '#b58900',
                base0B: '#859900',
                base0C: '#2aa198',
                base0D: '#268bd2',
                base0E: '#6c71c4',
                base0F: '#d33682',
              }),
              (module.exports = exports.default);
          },
        }),
        require_summerfruit = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/summerfruit.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'summerfruit',
                author: 'christopher corley (http://cscorley.github.io/)',
                base00: '#151515',
                base01: '#202020',
                base02: '#303030',
                base03: '#505050',
                base04: '#B0B0B0',
                base05: '#D0D0D0',
                base06: '#E0E0E0',
                base07: '#FFFFFF',
                base08: '#FF0086',
                base09: '#FD8900',
                base0A: '#ABA800',
                base0B: '#00C918',
                base0C: '#1faaaa',
                base0D: '#3777E6',
                base0E: '#AD00A1',
                base0F: '#cc6633',
              }),
              (module.exports = exports.default);
          },
        }),
        require_tomorrow = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/tomorrow.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'tomorrow',
                author: 'chris kempson (http://chriskempson.com)',
                base00: '#1d1f21',
                base01: '#282a2e',
                base02: '#373b41',
                base03: '#969896',
                base04: '#b4b7b4',
                base05: '#c5c8c6',
                base06: '#e0e0e0',
                base07: '#ffffff',
                base08: '#cc6666',
                base09: '#de935f',
                base0A: '#f0c674',
                base0B: '#b5bd68',
                base0C: '#8abeb7',
                base0D: '#81a2be',
                base0E: '#b294bb',
                base0F: '#a3685a',
              }),
              (module.exports = exports.default);
          },
        }),
        require_tube = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/tube.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'london tube',
                author: 'jan t. sott',
                base00: '#231f20',
                base01: '#1c3f95',
                base02: '#5a5758',
                base03: '#737171',
                base04: '#959ca1',
                base05: '#d9d8d8',
                base06: '#e7e7e8',
                base07: '#ffffff',
                base08: '#ee2e24',
                base09: '#f386a1',
                base0A: '#ffd204',
                base0B: '#00853e',
                base0C: '#85cebc',
                base0D: '#009ddc',
                base0E: '#98005d',
                base0F: '#b06110',
              }),
              (module.exports = exports.default);
          },
        }),
        require_twilight = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/twilight.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0),
              (exports.default = {
                scheme: 'twilight',
                author: 'david hart (http://hart-dev.com)',
                base00: '#1e1e1e',
                base01: '#323537',
                base02: '#464b50',
                base03: '#5f5a60',
                base04: '#838184',
                base05: '#a7a7a7',
                base06: '#c3c3c3',
                base07: '#ffffff',
                base08: '#cf6a4c',
                base09: '#cda869',
                base0A: '#f9ee98',
                base0B: '#8f9d6a',
                base0C: '#afc4db',
                base0D: '#7587a6',
                base0E: '#9b859d',
                base0F: '#9b703f',
              }),
              (module.exports = exports.default);
          },
        }),
        require_lib = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/base16@1.0.0/node_modules/base16/lib/index.js'(
            exports,
          ) {
            function _interopRequire(obj) {
              return obj && obj.__esModule ? obj.default : obj;
            }
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (exports.__esModule = !0);
            var _threezerotwofour = require_threezerotwofour();
            exports.threezerotwofour = _interopRequire(_threezerotwofour);
            var _apathy = require_apathy();
            exports.apathy = _interopRequire(_apathy);
            var _ashes = require_ashes();
            exports.ashes = _interopRequire(_ashes);
            var _atelierDune = require_atelier_dune();
            exports.atelierDune = _interopRequire(_atelierDune);
            var _atelierForest = require_atelier_forest();
            exports.atelierForest = _interopRequire(_atelierForest);
            var _atelierHeath = require_atelier_heath();
            exports.atelierHeath = _interopRequire(_atelierHeath);
            var _atelierLakeside = require_atelier_lakeside();
            exports.atelierLakeside = _interopRequire(_atelierLakeside);
            var _atelierSeaside = require_atelier_seaside();
            exports.atelierSeaside = _interopRequire(_atelierSeaside);
            var _bespin = require_bespin();
            exports.bespin = _interopRequire(_bespin);
            var _brewer = require_brewer();
            exports.brewer = _interopRequire(_brewer);
            var _bright = require_bright();
            exports.bright = _interopRequire(_bright);
            var _chalk = require_chalk();
            exports.chalk = _interopRequire(_chalk);
            var _codeschool = require_codeschool();
            exports.codeschool = _interopRequire(_codeschool);
            var _colors = require_colors();
            exports.colors = _interopRequire(_colors);
            var _default = require_default();
            exports.default = _interopRequire(_default);
            var _eighties = require_eighties();
            exports.eighties = _interopRequire(_eighties);
            var _embers = require_embers();
            exports.embers = _interopRequire(_embers);
            var _flat = require_flat();
            exports.flat = _interopRequire(_flat);
            var _google = require_google();
            exports.google = _interopRequire(_google);
            var _grayscale = require_grayscale();
            exports.grayscale = _interopRequire(_grayscale);
            var _greenscreen = require_greenscreen();
            exports.greenscreen = _interopRequire(_greenscreen);
            var _harmonic = require_harmonic();
            exports.harmonic = _interopRequire(_harmonic);
            var _hopscotch = require_hopscotch();
            exports.hopscotch = _interopRequire(_hopscotch);
            var _isotope = require_isotope();
            exports.isotope = _interopRequire(_isotope);
            var _marrakesh = require_marrakesh();
            exports.marrakesh = _interopRequire(_marrakesh);
            var _mocha = require_mocha();
            exports.mocha = _interopRequire(_mocha);
            var _monokai = require_monokai();
            exports.monokai = _interopRequire(_monokai);
            var _ocean = require_ocean();
            exports.ocean = _interopRequire(_ocean);
            var _paraiso = require_paraiso();
            exports.paraiso = _interopRequire(_paraiso);
            var _pop = require_pop();
            exports.pop = _interopRequire(_pop);
            var _railscasts = require_railscasts();
            exports.railscasts = _interopRequire(_railscasts);
            var _shapeshifter = require_shapeshifter();
            exports.shapeshifter = _interopRequire(_shapeshifter);
            var _solarized = require_solarized();
            exports.solarized = _interopRequire(_solarized);
            var _summerfruit = require_summerfruit();
            exports.summerfruit = _interopRequire(_summerfruit);
            var _tomorrow = require_tomorrow();
            exports.tomorrow = _interopRequire(_tomorrow);
            var _tube = require_tube();
            exports.tube = _interopRequire(_tube);
            var _twilight = require_twilight();
            exports.twilight = _interopRequire(_twilight);
          },
        }),
        require_color_name = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50],
              });
          },
        }),
        require_is_arrayish = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = function isArrayish(obj) {
                return (
                  !(!obj || 'string' == typeof obj) &&
                  (obj instanceof Array ||
                    Array.isArray(obj) ||
                    (obj.length >= 0 &&
                      (obj.splice instanceof Function ||
                        (Object.getOwnPropertyDescriptor(obj, obj.length - 1) &&
                          'String' !== obj.constructor.name))))
                );
              });
          },
        }),
        require_simple_swizzle = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var isArrayish = require_is_arrayish(),
              concat = Array.prototype.concat,
              slice = Array.prototype.slice,
              swizzle = (module.exports = function swizzle2(args) {
                for (var results = [], i = 0, len = args.length; i < len; i++) {
                  var arg = args[i];
                  isArrayish(arg)
                    ? (results = concat.call(results, slice.call(arg)))
                    : results.push(arg);
                }
                return results;
              });
            swizzle.wrap = function (fn) {
              return function () {
                return fn(swizzle(arguments));
              };
            };
          },
        }),
        require_color_string = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var name,
              colorNames = require_color_name(),
              swizzle = require_simple_swizzle(),
              hasOwnProperty = Object.hasOwnProperty,
              reverseNames = Object.create(null);
            for (name in colorNames)
              hasOwnProperty.call(colorNames, name) &&
                (reverseNames[colorNames[name]] = name);
            var cs = (module.exports = { to: {}, get: {} });
            function clamp(num, min, max) {
              return Math.min(Math.max(min, num), max);
            }
            function hexDouble(num) {
              var str = Math.round(num).toString(16).toUpperCase();
              return str.length < 2 ? '0' + str : str;
            }
            (cs.get = function (string) {
              var val, model;
              switch (string.substring(0, 3).toLowerCase()) {
                case 'hsl':
                  (val = cs.get.hsl(string)), (model = 'hsl');
                  break;
                case 'hwb':
                  (val = cs.get.hwb(string)), (model = 'hwb');
                  break;
                default:
                  (val = cs.get.rgb(string)), (model = 'rgb');
              }
              return val ? { model, value: val } : null;
            }),
              (cs.get.rgb = function (string) {
                if (!string) return null;
                var match,
                  i,
                  hexAlpha,
                  rgb = [0, 0, 0, 1];
                if ((match = string.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
                  for (
                    hexAlpha = match[2], match = match[1], i = 0;
                    i < 3;
                    i++
                  ) {
                    var i2 = 2 * i;
                    rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
                  }
                  hexAlpha && (rgb[3] = parseInt(hexAlpha, 16) / 255);
                } else if ((match = string.match(/^#([a-f0-9]{3,4})$/i))) {
                  for (hexAlpha = (match = match[1])[3], i = 0; i < 3; i++)
                    rgb[i] = parseInt(match[i] + match[i], 16);
                  hexAlpha &&
                    (rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255);
                } else if (
                  (match = string.match(
                    /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
                  ))
                ) {
                  for (i = 0; i < 3; i++) rgb[i] = parseInt(match[i + 1], 0);
                  match[4] &&
                    (match[5]
                      ? (rgb[3] = 0.01 * parseFloat(match[4]))
                      : (rgb[3] = parseFloat(match[4])));
                } else {
                  if (
                    !(match = string.match(
                      /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
                    ))
                  )
                    return (match = string.match(/^(\w+)$/))
                      ? 'transparent' === match[1]
                        ? [0, 0, 0, 0]
                        : hasOwnProperty.call(colorNames, match[1])
                          ? (((rgb = colorNames[match[1]])[3] = 1), rgb)
                          : null
                      : null;
                  for (i = 0; i < 3; i++)
                    rgb[i] = Math.round(2.55 * parseFloat(match[i + 1]));
                  match[4] &&
                    (match[5]
                      ? (rgb[3] = 0.01 * parseFloat(match[4]))
                      : (rgb[3] = parseFloat(match[4])));
                }
                for (i = 0; i < 3; i++) rgb[i] = clamp(rgb[i], 0, 255);
                return (rgb[3] = clamp(rgb[3], 0, 1)), rgb;
              }),
              (cs.get.hsl = function (string) {
                if (!string) return null;
                var match = string.match(
                  /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
                );
                if (match) {
                  var alpha = parseFloat(match[4]);
                  return [
                    ((parseFloat(match[1]) % 360) + 360) % 360,
                    clamp(parseFloat(match[2]), 0, 100),
                    clamp(parseFloat(match[3]), 0, 100),
                    clamp(isNaN(alpha) ? 1 : alpha, 0, 1),
                  ];
                }
                return null;
              }),
              (cs.get.hwb = function (string) {
                if (!string) return null;
                var match = string.match(
                  /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
                );
                if (match) {
                  var alpha = parseFloat(match[4]);
                  return [
                    ((parseFloat(match[1]) % 360) + 360) % 360,
                    clamp(parseFloat(match[2]), 0, 100),
                    clamp(parseFloat(match[3]), 0, 100),
                    clamp(isNaN(alpha) ? 1 : alpha, 0, 1),
                  ];
                }
                return null;
              }),
              (cs.to.hex = function () {
                var rgba2 = swizzle(arguments);
                return (
                  '#' +
                  hexDouble(rgba2[0]) +
                  hexDouble(rgba2[1]) +
                  hexDouble(rgba2[2]) +
                  (rgba2[3] < 1 ? hexDouble(Math.round(255 * rgba2[3])) : '')
                );
              }),
              (cs.to.rgb = function () {
                var rgba2 = swizzle(arguments);
                return rgba2.length < 4 || 1 === rgba2[3]
                  ? 'rgb(' +
                      Math.round(rgba2[0]) +
                      ', ' +
                      Math.round(rgba2[1]) +
                      ', ' +
                      Math.round(rgba2[2]) +
                      ')'
                  : 'rgba(' +
                      Math.round(rgba2[0]) +
                      ', ' +
                      Math.round(rgba2[1]) +
                      ', ' +
                      Math.round(rgba2[2]) +
                      ', ' +
                      rgba2[3] +
                      ')';
              }),
              (cs.to.rgb.percent = function () {
                var rgba2 = swizzle(arguments),
                  r = Math.round((rgba2[0] / 255) * 100),
                  g = Math.round((rgba2[1] / 255) * 100),
                  b = Math.round((rgba2[2] / 255) * 100);
                return rgba2.length < 4 || 1 === rgba2[3]
                  ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
                  : 'rgba(' +
                      r +
                      '%, ' +
                      g +
                      '%, ' +
                      b +
                      '%, ' +
                      rgba2[3] +
                      ')';
              }),
              (cs.to.hsl = function () {
                var hsla = swizzle(arguments);
                return hsla.length < 4 || 1 === hsla[3]
                  ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
                  : 'hsla(' +
                      hsla[0] +
                      ', ' +
                      hsla[1] +
                      '%, ' +
                      hsla[2] +
                      '%, ' +
                      hsla[3] +
                      ')';
              }),
              (cs.to.hwb = function () {
                var hwba = swizzle(arguments),
                  a = '';
                return (
                  hwba.length >= 4 && 1 !== hwba[3] && (a = ', ' + hwba[3]),
                  'hwb(' +
                    hwba[0] +
                    ', ' +
                    hwba[1] +
                    '%, ' +
                    hwba[2] +
                    '%' +
                    a +
                    ')'
                );
              }),
              (cs.to.keyword = function (rgb) {
                return reverseNames[rgb.slice(0, 3)];
              });
          },
        }),
        require_color_name2 = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-name@1.1.3/node_modules/color-name/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
              (module.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50],
              });
          },
        }),
        require_conversions = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/conversions.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var key5,
              cssKeywords = require_color_name2(),
              reverseKeywords = {};
            for (key5 in cssKeywords)
              cssKeywords.hasOwnProperty(key5) &&
                (reverseKeywords[cssKeywords[key5]] = key5);
            var channels,
              labels,
              model,
              convert = (module.exports = {
                rgb: { channels: 3, labels: 'rgb' },
                hsl: { channels: 3, labels: 'hsl' },
                hsv: { channels: 3, labels: 'hsv' },
                hwb: { channels: 3, labels: 'hwb' },
                cmyk: { channels: 4, labels: 'cmyk' },
                xyz: { channels: 3, labels: 'xyz' },
                lab: { channels: 3, labels: 'lab' },
                lch: { channels: 3, labels: 'lch' },
                hex: { channels: 1, labels: ['hex'] },
                keyword: { channels: 1, labels: ['keyword'] },
                ansi16: { channels: 1, labels: ['ansi16'] },
                ansi256: { channels: 1, labels: ['ansi256'] },
                hcg: { channels: 3, labels: ['h', 'c', 'g'] },
                apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
                gray: { channels: 1, labels: ['gray'] },
              });
            for (model in convert)
              if (convert.hasOwnProperty(model)) {
                if (!('channels' in convert[model]))
                  throw new Error('missing channels property: ' + model);
                if (!('labels' in convert[model]))
                  throw new Error('missing channel labels property: ' + model);
                if (convert[model].labels.length !== convert[model].channels)
                  throw new Error(
                    'channel and label counts mismatch: ' + model,
                  );
                (channels = convert[model].channels),
                  (labels = convert[model].labels),
                  delete convert[model].channels,
                  delete convert[model].labels,
                  Object.defineProperty(convert[model], 'channels', {
                    value: channels,
                  }),
                  Object.defineProperty(convert[model], 'labels', {
                    value: labels,
                  });
              }
            (convert.rgb.hsl = function (rgb) {
              var h,
                l,
                r = rgb[0] / 255,
                g = rgb[1] / 255,
                b = rgb[2] / 255,
                min = Math.min(r, g, b),
                max = Math.max(r, g, b),
                delta = max - min;
              return (
                max === min
                  ? (h = 0)
                  : r === max
                    ? (h = (g - b) / delta)
                    : g === max
                      ? (h = 2 + (b - r) / delta)
                      : b === max && (h = 4 + (r - g) / delta),
                (h = Math.min(60 * h, 360)) < 0 && (h += 360),
                (l = (min + max) / 2),
                [
                  h,
                  100 *
                    (max === min
                      ? 0
                      : l <= 0.5
                        ? delta / (max + min)
                        : delta / (2 - max - min)),
                  100 * l,
                ]
              );
            }),
              (convert.rgb.hsv = function (rgb) {
                var rdif,
                  gdif,
                  bdif,
                  h,
                  s,
                  r = rgb[0] / 255,
                  g = rgb[1] / 255,
                  b = rgb[2] / 255,
                  v = Math.max(r, g, b),
                  diff = v - Math.min(r, g, b),
                  diffc = function (c) {
                    return (v - c) / 6 / diff + 0.5;
                  };
                return (
                  0 === diff
                    ? (h = s = 0)
                    : ((s = diff / v),
                      (rdif = diffc(r)),
                      (gdif = diffc(g)),
                      (bdif = diffc(b)),
                      r === v
                        ? (h = bdif - gdif)
                        : g === v
                          ? (h = 1 / 3 + rdif - bdif)
                          : b === v && (h = 2 / 3 + gdif - rdif),
                      h < 0 ? (h += 1) : h > 1 && (h -= 1)),
                  [360 * h, 100 * s, 100 * v]
                );
              }),
              (convert.rgb.hwb = function (rgb) {
                var r = rgb[0],
                  g = rgb[1],
                  b = rgb[2];
                return [
                  convert.rgb.hsl(rgb)[0],
                  100 * ((1 / 255) * Math.min(r, Math.min(g, b))),
                  100 * (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))),
                ];
              }),
              (convert.rgb.cmyk = function (rgb) {
                var k,
                  r = rgb[0] / 255,
                  g = rgb[1] / 255,
                  b = rgb[2] / 255;
                return [
                  100 *
                    ((1 - r - (k = Math.min(1 - r, 1 - g, 1 - b))) / (1 - k) ||
                      0),
                  100 * ((1 - g - k) / (1 - k) || 0),
                  100 * ((1 - b - k) / (1 - k) || 0),
                  100 * k,
                ];
              }),
              (convert.rgb.keyword = function (rgb) {
                var reversed = reverseKeywords[rgb];
                if (reversed) return reversed;
                var currentClosestKeyword,
                  x,
                  y,
                  currentClosestDistance = 1 / 0;
                for (var keyword in cssKeywords)
                  if (cssKeywords.hasOwnProperty(keyword)) {
                    var value = cssKeywords[keyword],
                      distance =
                        ((x = rgb),
                        (y = value),
                        Math.pow(x[0] - y[0], 2) +
                          Math.pow(x[1] - y[1], 2) +
                          Math.pow(x[2] - y[2], 2));
                    distance < currentClosestDistance &&
                      ((currentClosestDistance = distance),
                      (currentClosestKeyword = keyword));
                  }
                return currentClosestKeyword;
              }),
              (convert.keyword.rgb = function (keyword) {
                return cssKeywords[keyword];
              }),
              (convert.rgb.xyz = function (rgb) {
                var r = rgb[0] / 255,
                  g = rgb[1] / 255,
                  b = rgb[2] / 255;
                return [
                  100 *
                    (0.4124 *
                      (r =
                        r > 0.04045
                          ? Math.pow((r + 0.055) / 1.055, 2.4)
                          : r / 12.92) +
                      0.3576 *
                        (g =
                          g > 0.04045
                            ? Math.pow((g + 0.055) / 1.055, 2.4)
                            : g / 12.92) +
                      0.1805 *
                        (b =
                          b > 0.04045
                            ? Math.pow((b + 0.055) / 1.055, 2.4)
                            : b / 12.92)),
                  100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
                  100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
                ];
              }),
              (convert.rgb.lab = function (rgb) {
                var xyz = convert.rgb.xyz(rgb),
                  x = xyz[0],
                  y = xyz[1],
                  z = xyz[2];
                return (
                  (y /= 100),
                  (z /= 108.883),
                  (x =
                    (x /= 95.047) > 0.008856
                      ? Math.pow(x, 1 / 3)
                      : 7.787 * x + 16 / 116),
                  [
                    116 *
                      (y =
                        y > 0.008856
                          ? Math.pow(y, 1 / 3)
                          : 7.787 * y + 16 / 116) -
                      16,
                    500 * (x - y),
                    200 *
                      (y -
                        (z =
                          z > 0.008856
                            ? Math.pow(z, 1 / 3)
                            : 7.787 * z + 16 / 116)),
                  ]
                );
              }),
              (convert.hsl.rgb = function (hsl) {
                var t1,
                  t2,
                  t3,
                  rgb,
                  val,
                  h = hsl[0] / 360,
                  s = hsl[1] / 100,
                  l = hsl[2] / 100;
                if (0 === s) return [(val = 255 * l), val, val];
                (t1 = 2 * l - (t2 = l < 0.5 ? l * (1 + s) : l + s - l * s)),
                  (rgb = [0, 0, 0]);
                for (var i = 0; i < 3; i++)
                  (t3 = h + (1 / 3) * -(i - 1)) < 0 && t3++,
                    t3 > 1 && t3--,
                    (val =
                      6 * t3 < 1
                        ? t1 + 6 * (t2 - t1) * t3
                        : 2 * t3 < 1
                          ? t2
                          : 3 * t3 < 2
                            ? t1 + (t2 - t1) * (2 / 3 - t3) * 6
                            : t1),
                    (rgb[i] = 255 * val);
                return rgb;
              }),
              (convert.hsl.hsv = function (hsl) {
                var h = hsl[0],
                  s = hsl[1] / 100,
                  l = hsl[2] / 100,
                  smin = s,
                  lmin = Math.max(l, 0.01);
                return (
                  (s *= (l *= 2) <= 1 ? l : 2 - l),
                  (smin *= lmin <= 1 ? lmin : 2 - lmin),
                  [
                    h,
                    100 *
                      (0 === l
                        ? (2 * smin) / (lmin + smin)
                        : (2 * s) / (l + s)),
                    100 * ((l + s) / 2),
                  ]
                );
              }),
              (convert.hsv.rgb = function (hsv) {
                var h = hsv[0] / 60,
                  s = hsv[1] / 100,
                  v = hsv[2] / 100,
                  hi = Math.floor(h) % 6,
                  f = h - Math.floor(h),
                  p = 255 * v * (1 - s),
                  q = 255 * v * (1 - s * f),
                  t = 255 * v * (1 - s * (1 - f));
                switch (((v *= 255), hi)) {
                  case 0:
                    return [v, t, p];
                  case 1:
                    return [q, v, p];
                  case 2:
                    return [p, v, t];
                  case 3:
                    return [p, q, v];
                  case 4:
                    return [t, p, v];
                  case 5:
                    return [v, p, q];
                }
              }),
              (convert.hsv.hsl = function (hsv) {
                var lmin,
                  sl,
                  l,
                  h = hsv[0],
                  s = hsv[1] / 100,
                  v = hsv[2] / 100,
                  vmin = Math.max(v, 0.01);
                return (
                  (l = (2 - s) * v),
                  (sl = s * vmin),
                  [
                    h,
                    100 *
                      (sl =
                        (sl /=
                          (lmin = (2 - s) * vmin) <= 1 ? lmin : 2 - lmin) || 0),
                    100 * (l /= 2),
                  ]
                );
              }),
              (convert.hwb.rgb = function (hwb) {
                var i,
                  v,
                  f,
                  n,
                  r,
                  g,
                  b,
                  h = hwb[0] / 360,
                  wh = hwb[1] / 100,
                  bl = hwb[2] / 100,
                  ratio = wh + bl;
                switch (
                  (ratio > 1 && ((wh /= ratio), (bl /= ratio)),
                  (f = 6 * h - (i = Math.floor(6 * h))),
                  0 != (1 & i) && (f = 1 - f),
                  (n = wh + f * ((v = 1 - bl) - wh)),
                  i)
                ) {
                  default:
                  case 6:
                  case 0:
                    (r = v), (g = n), (b = wh);
                    break;
                  case 1:
                    (r = n), (g = v), (b = wh);
                    break;
                  case 2:
                    (r = wh), (g = v), (b = n);
                    break;
                  case 3:
                    (r = wh), (g = n), (b = v);
                    break;
                  case 4:
                    (r = n), (g = wh), (b = v);
                    break;
                  case 5:
                    (r = v), (g = wh), (b = n);
                }
                return [255 * r, 255 * g, 255 * b];
              }),
              (convert.cmyk.rgb = function (cmyk) {
                var c = cmyk[0] / 100,
                  m = cmyk[1] / 100,
                  y = cmyk[2] / 100,
                  k = cmyk[3] / 100;
                return [
                  255 * (1 - Math.min(1, c * (1 - k) + k)),
                  255 * (1 - Math.min(1, m * (1 - k) + k)),
                  255 * (1 - Math.min(1, y * (1 - k) + k)),
                ];
              }),
              (convert.xyz.rgb = function (xyz) {
                var r,
                  g,
                  b,
                  x = xyz[0] / 100,
                  y = xyz[1] / 100,
                  z = xyz[2] / 100;
                return (
                  (g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
                  (b = 0.0557 * x + -0.204 * y + 1.057 * z),
                  (r =
                    (r = 3.2406 * x + -1.5372 * y + -0.4986 * z) > 0.0031308
                      ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                      : 12.92 * r),
                  (g =
                    g > 0.0031308
                      ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055
                      : 12.92 * g),
                  (b =
                    b > 0.0031308
                      ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055
                      : 12.92 * b),
                  [
                    255 * (r = Math.min(Math.max(0, r), 1)),
                    255 * (g = Math.min(Math.max(0, g), 1)),
                    255 * (b = Math.min(Math.max(0, b), 1)),
                  ]
                );
              }),
              (convert.xyz.lab = function (xyz) {
                var x = xyz[0],
                  y = xyz[1],
                  z = xyz[2];
                return (
                  (y /= 100),
                  (z /= 108.883),
                  (x =
                    (x /= 95.047) > 0.008856
                      ? Math.pow(x, 1 / 3)
                      : 7.787 * x + 16 / 116),
                  [
                    116 *
                      (y =
                        y > 0.008856
                          ? Math.pow(y, 1 / 3)
                          : 7.787 * y + 16 / 116) -
                      16,
                    500 * (x - y),
                    200 *
                      (y -
                        (z =
                          z > 0.008856
                            ? Math.pow(z, 1 / 3)
                            : 7.787 * z + 16 / 116)),
                  ]
                );
              }),
              (convert.lab.xyz = function (lab) {
                var x,
                  y,
                  z,
                  l = lab[0];
                (x = lab[1] / 500 + (y = (l + 16) / 116)),
                  (z = y - lab[2] / 200);
                var y2 = Math.pow(y, 3),
                  x2 = Math.pow(x, 3),
                  z2 = Math.pow(z, 3);
                return (
                  (y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
                  (x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
                  (z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
                  [(x *= 95.047), (y *= 100), (z *= 108.883)]
                );
              }),
              (convert.lab.lch = function (lab) {
                var h,
                  l = lab[0],
                  a = lab[1],
                  b = lab[2];
                return (
                  (h = (360 * Math.atan2(b, a)) / 2 / Math.PI) < 0 &&
                    (h += 360),
                  [l, Math.sqrt(a * a + b * b), h]
                );
              }),
              (convert.lch.lab = function (lch) {
                var hr,
                  l = lch[0],
                  c = lch[1];
                return (
                  (hr = (lch[2] / 360) * 2 * Math.PI),
                  [l, c * Math.cos(hr), c * Math.sin(hr)]
                );
              }),
              (convert.rgb.ansi16 = function (args) {
                var r = args[0],
                  g = args[1],
                  b = args[2],
                  value =
                    1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
                if (0 === (value = Math.round(value / 50))) return 30;
                var ansi =
                  30 +
                  ((Math.round(b / 255) << 2) |
                    (Math.round(g / 255) << 1) |
                    Math.round(r / 255));
                return 2 === value && (ansi += 60), ansi;
              }),
              (convert.hsv.ansi16 = function (args) {
                return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
              }),
              (convert.rgb.ansi256 = function (args) {
                var r = args[0],
                  g = args[1],
                  b = args[2];
                return r === g && g === b
                  ? r < 8
                    ? 16
                    : r > 248
                      ? 231
                      : Math.round(((r - 8) / 247) * 24) + 232
                  : 16 +
                      36 * Math.round((r / 255) * 5) +
                      6 * Math.round((g / 255) * 5) +
                      Math.round((b / 255) * 5);
              }),
              (convert.ansi16.rgb = function (args) {
                var color = args % 10;
                if (0 === color || 7 === color)
                  return (
                    args > 50 && (color += 3.5),
                    [(color = (color / 10.5) * 255), color, color]
                  );
                var mult = 0.5 * (1 + ~~(args > 50));
                return [
                  (1 & color) * mult * 255,
                  ((color >> 1) & 1) * mult * 255,
                  ((color >> 2) & 1) * mult * 255,
                ];
              }),
              (convert.ansi256.rgb = function (args) {
                if (args >= 232) {
                  var c = 10 * (args - 232) + 8;
                  return [c, c, c];
                }
                var rem;
                return (
                  (args -= 16),
                  [
                    (Math.floor(args / 36) / 5) * 255,
                    (Math.floor((rem = args % 36) / 6) / 5) * 255,
                    ((rem % 6) / 5) * 255,
                  ]
                );
              }),
              (convert.rgb.hex = function (args) {
                var string = (
                  ((255 & Math.round(args[0])) << 16) +
                  ((255 & Math.round(args[1])) << 8) +
                  (255 & Math.round(args[2]))
                )
                  .toString(16)
                  .toUpperCase();
                return '000000'.substring(string.length) + string;
              }),
              (convert.hex.rgb = function (args) {
                var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!match) return [0, 0, 0];
                var colorString = match[0];
                3 === match[0].length &&
                  (colorString = colorString
                    .split('')
                    .map(function (char) {
                      return char + char;
                    })
                    .join(''));
                var integer = parseInt(colorString, 16);
                return [
                  (integer >> 16) & 255,
                  (integer >> 8) & 255,
                  255 & integer,
                ];
              }),
              (convert.rgb.hcg = function (rgb) {
                var hue,
                  r = rgb[0] / 255,
                  g = rgb[1] / 255,
                  b = rgb[2] / 255,
                  max = Math.max(Math.max(r, g), b),
                  min = Math.min(Math.min(r, g), b),
                  chroma = max - min;
                return (
                  (hue =
                    chroma <= 0
                      ? 0
                      : max === r
                        ? ((g - b) / chroma) % 6
                        : max === g
                          ? 2 + (b - r) / chroma
                          : 4 + (r - g) / chroma + 4),
                  (hue /= 6),
                  [
                    360 * (hue %= 1),
                    100 * chroma,
                    100 * (chroma < 1 ? min / (1 - chroma) : 0),
                  ]
                );
              }),
              (convert.hsl.hcg = function (hsl) {
                var s = hsl[1] / 100,
                  l = hsl[2] / 100,
                  c = 1,
                  f = 0;
                return (
                  (c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l)) < 1 &&
                    (f = (l - 0.5 * c) / (1 - c)),
                  [hsl[0], 100 * c, 100 * f]
                );
              }),
              (convert.hsv.hcg = function (hsv) {
                var s = hsv[1] / 100,
                  v = hsv[2] / 100,
                  c = s * v,
                  f = 0;
                return (
                  c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f]
                );
              }),
              (convert.hcg.rgb = function (hcg) {
                var h = hcg[0] / 360,
                  c = hcg[1] / 100,
                  g = hcg[2] / 100;
                if (0 === c) return [255 * g, 255 * g, 255 * g];
                var mg,
                  pure = [0, 0, 0],
                  hi = (h % 1) * 6,
                  v = hi % 1,
                  w = 1 - v;
                switch (Math.floor(hi)) {
                  case 0:
                    (pure[0] = 1), (pure[1] = v), (pure[2] = 0);
                    break;
                  case 1:
                    (pure[0] = w), (pure[1] = 1), (pure[2] = 0);
                    break;
                  case 2:
                    (pure[0] = 0), (pure[1] = 1), (pure[2] = v);
                    break;
                  case 3:
                    (pure[0] = 0), (pure[1] = w), (pure[2] = 1);
                    break;
                  case 4:
                    (pure[0] = v), (pure[1] = 0), (pure[2] = 1);
                    break;
                  default:
                    (pure[0] = 1), (pure[1] = 0), (pure[2] = w);
                }
                return (
                  (mg = (1 - c) * g),
                  [
                    255 * (c * pure[0] + mg),
                    255 * (c * pure[1] + mg),
                    255 * (c * pure[2] + mg),
                  ]
                );
              }),
              (convert.hcg.hsv = function (hcg) {
                var c = hcg[1] / 100,
                  v = c + (hcg[2] / 100) * (1 - c),
                  f = 0;
                return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
              }),
              (convert.hcg.hsl = function (hcg) {
                var c = hcg[1] / 100,
                  l = (hcg[2] / 100) * (1 - c) + 0.5 * c,
                  s = 0;
                return (
                  l > 0 && l < 0.5
                    ? (s = c / (2 * l))
                    : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))),
                  [hcg[0], 100 * s, 100 * l]
                );
              }),
              (convert.hcg.hwb = function (hcg) {
                var c = hcg[1] / 100,
                  v = c + (hcg[2] / 100) * (1 - c);
                return [hcg[0], 100 * (v - c), 100 * (1 - v)];
              }),
              (convert.hwb.hcg = function (hwb) {
                var w = hwb[1] / 100,
                  v = 1 - hwb[2] / 100,
                  c = v - w,
                  g = 0;
                return (
                  c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g]
                );
              }),
              (convert.apple.rgb = function (apple) {
                return [
                  (apple[0] / 65535) * 255,
                  (apple[1] / 65535) * 255,
                  (apple[2] / 65535) * 255,
                ];
              }),
              (convert.rgb.apple = function (rgb) {
                return [
                  (rgb[0] / 255) * 65535,
                  (rgb[1] / 255) * 65535,
                  (rgb[2] / 255) * 65535,
                ];
              }),
              (convert.gray.rgb = function (args) {
                return [
                  (args[0] / 100) * 255,
                  (args[0] / 100) * 255,
                  (args[0] / 100) * 255,
                ];
              }),
              (convert.gray.hsl = convert.gray.hsv =
                function (args) {
                  return [0, 0, args[0]];
                }),
              (convert.gray.hwb = function (gray) {
                return [0, 100, gray[0]];
              }),
              (convert.gray.cmyk = function (gray) {
                return [0, 0, 0, gray[0]];
              }),
              (convert.gray.lab = function (gray) {
                return [gray[0], 0, 0];
              }),
              (convert.gray.hex = function (gray) {
                var val = 255 & Math.round((gray[0] / 100) * 255),
                  string = ((val << 16) + (val << 8) + val)
                    .toString(16)
                    .toUpperCase();
                return '000000'.substring(string.length) + string;
              }),
              (convert.rgb.gray = function (rgb) {
                return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100];
              });
          },
        }),
        require_route = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/route.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var conversions = require_conversions();
            function deriveBFS(fromModel) {
              var graph = (function buildGraph() {
                  for (
                    var graph = {},
                      models = Object.keys(conversions),
                      len = models.length,
                      i = 0;
                    i < len;
                    i++
                  )
                    graph[models[i]] = { distance: -1, parent: null };
                  return graph;
                })(),
                queue = [fromModel];
              for (graph[fromModel].distance = 0; queue.length; )
                for (
                  var current = queue.pop(),
                    adjacents = Object.keys(conversions[current]),
                    len = adjacents.length,
                    i = 0;
                  i < len;
                  i++
                ) {
                  var adjacent = adjacents[i],
                    node = graph[adjacent];
                  -1 === node.distance &&
                    ((node.distance = graph[current].distance + 1),
                    (node.parent = current),
                    queue.unshift(adjacent));
                }
              return graph;
            }
            function link(from, to) {
              return function (args) {
                return to(from(args));
              };
            }
            function wrapConversion(toModel, graph) {
              for (
                var path = [graph[toModel].parent, toModel],
                  fn = conversions[graph[toModel].parent][toModel],
                  cur = graph[toModel].parent;
                graph[cur].parent;

              )
                path.unshift(graph[cur].parent),
                  (fn = link(conversions[graph[cur].parent][cur], fn)),
                  (cur = graph[cur].parent);
              return (fn.conversion = path), fn;
            }
            module.exports = function (fromModel) {
              for (
                var graph = deriveBFS(fromModel),
                  conversion = {},
                  models = Object.keys(graph),
                  len = models.length,
                  i = 0;
                i < len;
                i++
              ) {
                var toModel = models[i];
                null !== graph[toModel].parent &&
                  (conversion[toModel] = wrapConversion(toModel, graph));
              }
              return conversion;
            };
          },
        }),
        require_color_convert = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var conversions = require_conversions(),
              route = require_route(),
              convert = {};
            Object.keys(conversions).forEach(function (fromModel) {
              (convert[fromModel] = {}),
                Object.defineProperty(convert[fromModel], 'channels', {
                  value: conversions[fromModel].channels,
                }),
                Object.defineProperty(convert[fromModel], 'labels', {
                  value: conversions[fromModel].labels,
                });
              var routes = route(fromModel);
              Object.keys(routes).forEach(function (toModel) {
                var fn = routes[toModel];
                (convert[fromModel][toModel] = (function wrapRounded(fn) {
                  var wrappedFn = function (args) {
                    if (null == args) return args;
                    arguments.length > 1 &&
                      (args = Array.prototype.slice.call(arguments));
                    var result = fn(args);
                    if ('object' == typeof result)
                      for (var len = result.length, i = 0; i < len; i++)
                        result[i] = Math.round(result[i]);
                    return result;
                  };
                  return (
                    'conversion' in fn &&
                      (wrappedFn.conversion = fn.conversion),
                    wrappedFn
                  );
                })(fn)),
                  (convert[fromModel][toModel].raw = (function wrapRaw(fn) {
                    var wrappedFn = function (args) {
                      return null == args
                        ? args
                        : (arguments.length > 1 &&
                            (args = Array.prototype.slice.call(arguments)),
                          fn(args));
                    };
                    return (
                      'conversion' in fn &&
                        (wrappedFn.conversion = fn.conversion),
                      wrappedFn
                    );
                  })(fn));
              });
            }),
              (module.exports = convert);
          },
        }),
        require_color = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/color@3.2.1/node_modules/color/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var colorString = require_color_string(),
              convert = require_color_convert(),
              _slice = [].slice,
              skippedModels = ['keyword', 'gray', 'hex'],
              hashedModelKeys = {};
            Object.keys(convert).forEach(function (model) {
              hashedModelKeys[
                _slice.call(convert[model].labels).sort().join('')
              ] = model;
            });
            var limiters = {};
            function Color2(obj, model) {
              if (!(this instanceof Color2)) return new Color2(obj, model);
              if (
                (model && model in skippedModels && (model = null),
                model && !(model in convert))
              )
                throw new Error('Unknown model: ' + model);
              var i, channels;
              if (null == obj)
                (this.model = 'rgb'),
                  (this.color = [0, 0, 0]),
                  (this.valpha = 1);
              else if (obj instanceof Color2)
                (this.model = obj.model),
                  (this.color = obj.color.slice()),
                  (this.valpha = obj.valpha);
              else if ('string' == typeof obj) {
                var result = colorString.get(obj);
                if (null === result)
                  throw new Error('Unable to parse color from string: ' + obj);
                (this.model = result.model),
                  (channels = convert[this.model].channels),
                  (this.color = result.value.slice(0, channels)),
                  (this.valpha =
                    'number' == typeof result.value[channels]
                      ? result.value[channels]
                      : 1);
              } else if (obj.length) {
                (this.model = model || 'rgb'),
                  (channels = convert[this.model].channels);
                var newArr = _slice.call(obj, 0, channels);
                (this.color = zeroArray(newArr, channels)),
                  (this.valpha =
                    'number' == typeof obj[channels] ? obj[channels] : 1);
              } else if ('number' == typeof obj)
                (obj &= 16777215),
                  (this.model = 'rgb'),
                  (this.color = [
                    (obj >> 16) & 255,
                    (obj >> 8) & 255,
                    255 & obj,
                  ]),
                  (this.valpha = 1);
              else {
                this.valpha = 1;
                var keys = Object.keys(obj);
                'alpha' in obj &&
                  (keys.splice(keys.indexOf('alpha'), 1),
                  (this.valpha = 'number' == typeof obj.alpha ? obj.alpha : 0));
                var hashedKeys = keys.sort().join('');
                if (!(hashedKeys in hashedModelKeys))
                  throw new Error(
                    'Unable to parse color from object: ' + JSON.stringify(obj),
                  );
                this.model = hashedModelKeys[hashedKeys];
                var labels = convert[this.model].labels,
                  color = [];
                for (i = 0; i < labels.length; i++) color.push(obj[labels[i]]);
                this.color = zeroArray(color);
              }
              if (limiters[this.model])
                for (
                  channels = convert[this.model].channels, i = 0;
                  i < channels;
                  i++
                ) {
                  var limit = limiters[this.model][i];
                  limit && (this.color[i] = limit(this.color[i]));
                }
              (this.valpha = Math.max(0, Math.min(1, this.valpha))),
                Object.freeze && Object.freeze(this);
            }
            function getset(model, channel, modifier) {
              return (
                (model = Array.isArray(model) ? model : [model]).forEach(
                  function (m) {
                    (limiters[m] || (limiters[m] = []))[channel] = modifier;
                  },
                ),
                (model = model[0]),
                function (val) {
                  var result;
                  return arguments.length
                    ? (modifier && (val = modifier(val)),
                      ((result = this[model]()).color[channel] = val),
                      result)
                    : ((result = this[model]().color[channel]),
                      modifier && (result = modifier(result)),
                      result);
                }
              );
            }
            function maxfn(max) {
              return function (v) {
                return Math.max(0, Math.min(max, v));
              };
            }
            function zeroArray(arr, length) {
              for (var i = 0; i < length; i++)
                'number' != typeof arr[i] && (arr[i] = 0);
              return arr;
            }
            (Color2.prototype = {
              toString: function () {
                return this.string();
              },
              toJSON: function () {
                return this[this.model]();
              },
              string: function (places) {
                var self2 = this.model in colorString.to ? this : this.rgb(),
                  args =
                    1 ===
                    (self2 = self2.round(
                      'number' == typeof places ? places : 1,
                    )).valpha
                      ? self2.color
                      : self2.color.concat(this.valpha);
                return colorString.to[self2.model](args);
              },
              percentString: function (places) {
                var self2 = this.rgb().round(
                    'number' == typeof places ? places : 1,
                  ),
                  args =
                    1 === self2.valpha
                      ? self2.color
                      : self2.color.concat(this.valpha);
                return colorString.to.rgb.percent(args);
              },
              array: function () {
                return 1 === this.valpha
                  ? this.color.slice()
                  : this.color.concat(this.valpha);
              },
              object: function () {
                for (
                  var result = {},
                    channels = convert[this.model].channels,
                    labels = convert[this.model].labels,
                    i = 0;
                  i < channels;
                  i++
                )
                  result[labels[i]] = this.color[i];
                return (
                  1 !== this.valpha && (result.alpha = this.valpha), result
                );
              },
              unitArray: function () {
                var rgb = this.rgb().color;
                return (
                  (rgb[0] /= 255),
                  (rgb[1] /= 255),
                  (rgb[2] /= 255),
                  1 !== this.valpha && rgb.push(this.valpha),
                  rgb
                );
              },
              unitObject: function () {
                var rgb = this.rgb().object();
                return (
                  (rgb.r /= 255),
                  (rgb.g /= 255),
                  (rgb.b /= 255),
                  1 !== this.valpha && (rgb.alpha = this.valpha),
                  rgb
                );
              },
              round: function (places) {
                return (
                  (places = Math.max(places || 0, 0)),
                  new Color2(
                    this.color
                      .map(
                        (function roundToPlace(places) {
                          return function (num) {
                            return (function roundTo(num, places) {
                              return Number(num.toFixed(places));
                            })(num, places);
                          };
                        })(places),
                      )
                      .concat(this.valpha),
                    this.model,
                  )
                );
              },
              alpha: function (val) {
                return arguments.length
                  ? new Color2(
                      this.color.concat(Math.max(0, Math.min(1, val))),
                      this.model,
                    )
                  : this.valpha;
              },
              red: getset('rgb', 0, maxfn(255)),
              green: getset('rgb', 1, maxfn(255)),
              blue: getset('rgb', 2, maxfn(255)),
              hue: getset(
                ['hsl', 'hsv', 'hsl', 'hwb', 'hcg'],
                0,
                function (val) {
                  return ((val % 360) + 360) % 360;
                },
              ),
              saturationl: getset('hsl', 1, maxfn(100)),
              lightness: getset('hsl', 2, maxfn(100)),
              saturationv: getset('hsv', 1, maxfn(100)),
              value: getset('hsv', 2, maxfn(100)),
              chroma: getset('hcg', 1, maxfn(100)),
              gray: getset('hcg', 2, maxfn(100)),
              white: getset('hwb', 1, maxfn(100)),
              wblack: getset('hwb', 2, maxfn(100)),
              cyan: getset('cmyk', 0, maxfn(100)),
              magenta: getset('cmyk', 1, maxfn(100)),
              yellow: getset('cmyk', 2, maxfn(100)),
              black: getset('cmyk', 3, maxfn(100)),
              x: getset('xyz', 0, maxfn(100)),
              y: getset('xyz', 1, maxfn(100)),
              z: getset('xyz', 2, maxfn(100)),
              l: getset('lab', 0, maxfn(100)),
              a: getset('lab', 1),
              b: getset('lab', 2),
              keyword: function (val) {
                return arguments.length
                  ? new Color2(val)
                  : convert[this.model].keyword(this.color);
              },
              hex: function (val) {
                return arguments.length
                  ? new Color2(val)
                  : colorString.to.hex(this.rgb().round().color);
              },
              rgbNumber: function () {
                var rgb = this.rgb().color;
                return (
                  ((255 & rgb[0]) << 16) |
                  ((255 & rgb[1]) << 8) |
                  (255 & rgb[2])
                );
              },
              luminosity: function () {
                for (
                  var rgb = this.rgb().color, lum = [], i = 0;
                  i < rgb.length;
                  i++
                ) {
                  var chan = rgb[i] / 255;
                  lum[i] =
                    chan <= 0.03928
                      ? chan / 12.92
                      : Math.pow((chan + 0.055) / 1.055, 2.4);
                }
                return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
              },
              contrast: function (color2) {
                var lum1 = this.luminosity(),
                  lum2 = color2.luminosity();
                return lum1 > lum2
                  ? (lum1 + 0.05) / (lum2 + 0.05)
                  : (lum2 + 0.05) / (lum1 + 0.05);
              },
              level: function (color2) {
                var contrastRatio = this.contrast(color2);
                return contrastRatio >= 7.1
                  ? 'AAA'
                  : contrastRatio >= 4.5
                    ? 'AA'
                    : '';
              },
              isDark: function () {
                var rgb = this.rgb().color;
                return (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1e3 < 128;
              },
              isLight: function () {
                return !this.isDark();
              },
              negate: function () {
                for (var rgb = this.rgb(), i = 0; i < 3; i++)
                  rgb.color[i] = 255 - rgb.color[i];
                return rgb;
              },
              lighten: function (ratio) {
                var hsl = this.hsl();
                return (hsl.color[2] += hsl.color[2] * ratio), hsl;
              },
              darken: function (ratio) {
                var hsl = this.hsl();
                return (hsl.color[2] -= hsl.color[2] * ratio), hsl;
              },
              saturate: function (ratio) {
                var hsl = this.hsl();
                return (hsl.color[1] += hsl.color[1] * ratio), hsl;
              },
              desaturate: function (ratio) {
                var hsl = this.hsl();
                return (hsl.color[1] -= hsl.color[1] * ratio), hsl;
              },
              whiten: function (ratio) {
                var hwb = this.hwb();
                return (hwb.color[1] += hwb.color[1] * ratio), hwb;
              },
              blacken: function (ratio) {
                var hwb = this.hwb();
                return (hwb.color[2] += hwb.color[2] * ratio), hwb;
              },
              grayscale: function () {
                var rgb = this.rgb().color,
                  val = 0.3 * rgb[0] + 0.59 * rgb[1] + 0.11 * rgb[2];
                return Color2.rgb(val, val, val);
              },
              fade: function (ratio) {
                return this.alpha(this.valpha - this.valpha * ratio);
              },
              opaquer: function (ratio) {
                return this.alpha(this.valpha + this.valpha * ratio);
              },
              rotate: function (degrees) {
                var hsl = this.hsl(),
                  hue = hsl.color[0];
                return (
                  (hue = (hue = (hue + degrees) % 360) < 0 ? 360 + hue : hue),
                  (hsl.color[0] = hue),
                  hsl
                );
              },
              mix: function (mixinColor, weight) {
                if (!mixinColor || !mixinColor.rgb)
                  throw new Error(
                    'Argument to "mix" was not a Color instance, but rather an instance of ' +
                      typeof mixinColor,
                  );
                var color1 = mixinColor.rgb(),
                  color2 = this.rgb(),
                  p = void 0 === weight ? 0.5 : weight,
                  w = 2 * p - 1,
                  a = color1.alpha() - color2.alpha(),
                  w1 = ((w * a == -1 ? w : (w + a) / (1 + w * a)) + 1) / 2,
                  w2 = 1 - w1;
                return Color2.rgb(
                  w1 * color1.red() + w2 * color2.red(),
                  w1 * color1.green() + w2 * color2.green(),
                  w1 * color1.blue() + w2 * color2.blue(),
                  color1.alpha() * p + color2.alpha() * (1 - p),
                );
              },
            }),
              Object.keys(convert).forEach(function (model) {
                if (-1 === skippedModels.indexOf(model)) {
                  var channels = convert[model].channels;
                  (Color2.prototype[model] = function () {
                    if (this.model === model) return new Color2(this);
                    if (arguments.length) return new Color2(arguments, model);
                    var newAlpha =
                      'number' == typeof arguments[channels]
                        ? channels
                        : this.valpha;
                    return new Color2(
                      (function assertArray(val) {
                        return Array.isArray(val) ? val : [val];
                      })(convert[this.model][model].raw(this.color)).concat(
                        newAlpha,
                      ),
                      model,
                    );
                  }),
                    (Color2[model] = function (color) {
                      return (
                        'number' == typeof color &&
                          (color = zeroArray(_slice.call(arguments), channels)),
                        new Color2(color, model)
                      );
                    });
                }
              }),
              (module.exports = Color2);
          },
        }),
        require_lodash = _chunk5K6HCVT2cjsjs.__commonJS.call(void 0, {
          'node_modules/.pnpm/lodash.curry@4.1.1/node_modules/lodash.curry/index.js'(
            exports,
            module,
          ) {
            _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
            var wrapFlags = [
                ['ary', 128],
                ['bind', 1],
                ['bindKey', 2],
                ['curry', 8],
                ['curryRight', 16],
                ['flip', 512],
                ['partial', 32],
                ['partialRight', 64],
                ['rearg', 256],
              ],
              genTag = '[object GeneratorFunction]',
              reTrim = /^\s+|\s+$/g,
              reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
              reSplitDetails = /,? & /,
              reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
              reIsBinary = /^0b[01]+$/i,
              reIsHostCtor = /^\[object .+?Constructor\]$/,
              reIsOctal = /^0o[0-7]+$/i,
              reIsUint = /^(?:0|[1-9]\d*)$/,
              freeParseInt = parseInt,
              freeGlobal =
                'object' == typeof __webpack_require__.g &&
                __webpack_require__.g &&
                __webpack_require__.g.Object === Object &&
                __webpack_require__.g,
              freeSelf =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              root = freeGlobal || freeSelf || Function('return this')();
            function apply(func, thisArg, args) {
              switch (args.length) {
                case 0:
                  return func.call(thisArg);
                case 1:
                  return func.call(thisArg, args[0]);
                case 2:
                  return func.call(thisArg, args[0], args[1]);
                case 3:
                  return func.call(thisArg, args[0], args[1], args[2]);
              }
              return func.apply(thisArg, args);
            }
            function arrayIncludes(array, value) {
              return (
                !!(array ? array.length : 0) &&
                (function baseIndexOf(array, value, fromIndex) {
                  if (value != value)
                    return (function baseFindIndex(
                      array,
                      predicate,
                      fromIndex,
                      fromRight,
                    ) {
                      var length = array.length,
                        index = fromIndex + (fromRight ? 1 : -1);
                      for (; fromRight ? index-- : ++index < length; )
                        if (predicate(array[index], index, array)) return index;
                      return -1;
                    })(array, baseIsNaN, fromIndex);
                  var index = fromIndex - 1,
                    length = array.length;
                  for (; ++index < length; )
                    if (array[index] === value) return index;
                  return -1;
                })(array, value, 0) > -1
              );
            }
            function baseIsNaN(value) {
              return value != value;
            }
            function replaceHolders(array, placeholder) {
              for (
                var index = -1,
                  length = array.length,
                  resIndex = 0,
                  result = [];
                ++index < length;

              ) {
                var value = array[index];
                (value !== placeholder && '__lodash_placeholder__' !== value) ||
                  ((array[index] = '__lodash_placeholder__'),
                  (result[resIndex++] = index));
              }
              return result;
            }
            var uid,
              func,
              name,
              funcProto = Function.prototype,
              objectProto = Object.prototype,
              coreJsData = root['__core-js_shared__'],
              maskSrcKey = (uid = /[^.]+$/.exec(
                (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) ||
                  '',
              ))
                ? 'Symbol(src)_1.' + uid
                : '',
              funcToString = funcProto.toString,
              hasOwnProperty = objectProto.hasOwnProperty,
              objectToString = objectProto.toString,
              reIsNative = RegExp(
                '^' +
                  funcToString
                    .call(hasOwnProperty)
                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      '$1.*?',
                    ) +
                  '$',
              ),
              objectCreate = Object.create,
              nativeMax = Math.max,
              nativeMin = Math.min,
              defineProperty =
                ((func = getNative(Object, 'defineProperty')),
                (name = getNative.name) && name.length > 2 ? func : void 0);
            function baseIsNative(value) {
              if (
                !isObject(value) ||
                (function isMasked(func) {
                  return !!maskSrcKey && maskSrcKey in func;
                })(value)
              )
                return !1;
              var pattern =
                (function isFunction(value) {
                  var tag = isObject(value) ? objectToString.call(value) : '';
                  return '[object Function]' == tag || tag == genTag;
                })(value) ||
                (function isHostObject(value) {
                  var result = !1;
                  if (null != value && 'function' != typeof value.toString)
                    try {
                      result = !!(value + '');
                    } catch (e) {}
                  return result;
                })(value)
                  ? reIsNative
                  : reIsHostCtor;
              return pattern.test(
                (function toSource(func) {
                  if (null != func) {
                    try {
                      return funcToString.call(func);
                    } catch (e) {}
                    try {
                      return func + '';
                    } catch (e) {}
                  }
                  return '';
                })(value),
              );
            }
            function createCtor(Ctor) {
              return function () {
                var args = arguments;
                switch (args.length) {
                  case 0:
                    return new Ctor();
                  case 1:
                    return new Ctor(args[0]);
                  case 2:
                    return new Ctor(args[0], args[1]);
                  case 3:
                    return new Ctor(args[0], args[1], args[2]);
                  case 4:
                    return new Ctor(args[0], args[1], args[2], args[3]);
                  case 5:
                    return new Ctor(
                      args[0],
                      args[1],
                      args[2],
                      args[3],
                      args[4],
                    );
                  case 6:
                    return new Ctor(
                      args[0],
                      args[1],
                      args[2],
                      args[3],
                      args[4],
                      args[5],
                    );
                  case 7:
                    return new Ctor(
                      args[0],
                      args[1],
                      args[2],
                      args[3],
                      args[4],
                      args[5],
                      args[6],
                    );
                }
                var thisBinding = (function baseCreate(proto) {
                    return isObject(proto) ? objectCreate(proto) : {};
                  })(Ctor.prototype),
                  result = Ctor.apply(thisBinding, args);
                return isObject(result) ? result : thisBinding;
              };
            }
            function createHybrid(
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary,
              arity,
            ) {
              var isAry = 128 & bitmask,
                isBind = 1 & bitmask,
                isBindKey = 2 & bitmask,
                isCurried = 24 & bitmask,
                isFlip = 512 & bitmask,
                Ctor = isBindKey ? void 0 : createCtor(func);
              return function wrapper() {
                for (
                  var length = arguments.length,
                    args = Array(length),
                    index = length;
                  index--;

                )
                  args[index] = arguments[index];
                if (isCurried)
                  var placeholder = getHolder(wrapper),
                    holdersCount = (function countHolders(array, placeholder) {
                      for (var length = array.length, result = 0; length--; )
                        array[length] === placeholder && result++;
                      return result;
                    })(args, placeholder);
                if (
                  (partials &&
                    (args = (function composeArgs(
                      args,
                      partials,
                      holders,
                      isCurried,
                    ) {
                      for (
                        var argsIndex = -1,
                          argsLength = args.length,
                          holdersLength = holders.length,
                          leftIndex = -1,
                          leftLength = partials.length,
                          rangeLength = nativeMax(
                            argsLength - holdersLength,
                            0,
                          ),
                          result = Array(leftLength + rangeLength),
                          isUncurried = !isCurried;
                        ++leftIndex < leftLength;

                      )
                        result[leftIndex] = partials[leftIndex];
                      for (; ++argsIndex < holdersLength; )
                        (isUncurried || argsIndex < argsLength) &&
                          (result[holders[argsIndex]] = args[argsIndex]);
                      for (; rangeLength--; )
                        result[leftIndex++] = args[argsIndex++];
                      return result;
                    })(args, partials, holders, isCurried)),
                  partialsRight &&
                    (args = (function composeArgsRight(
                      args,
                      partials,
                      holders,
                      isCurried,
                    ) {
                      for (
                        var argsIndex = -1,
                          argsLength = args.length,
                          holdersIndex = -1,
                          holdersLength = holders.length,
                          rightIndex = -1,
                          rightLength = partials.length,
                          rangeLength = nativeMax(
                            argsLength - holdersLength,
                            0,
                          ),
                          result = Array(rangeLength + rightLength),
                          isUncurried = !isCurried;
                        ++argsIndex < rangeLength;

                      )
                        result[argsIndex] = args[argsIndex];
                      for (var offset = argsIndex; ++rightIndex < rightLength; )
                        result[offset + rightIndex] = partials[rightIndex];
                      for (; ++holdersIndex < holdersLength; )
                        (isUncurried || argsIndex < argsLength) &&
                          (result[offset + holders[holdersIndex]] =
                            args[argsIndex++]);
                      return result;
                    })(args, partialsRight, holdersRight, isCurried)),
                  (length -= holdersCount),
                  isCurried && length < arity)
                ) {
                  var newHolders = replaceHolders(args, placeholder);
                  return createRecurry(
                    func,
                    bitmask,
                    createHybrid,
                    wrapper.placeholder,
                    thisArg,
                    args,
                    newHolders,
                    argPos,
                    ary,
                    arity - length,
                  );
                }
                var thisBinding = isBind ? thisArg : this,
                  fn = isBindKey ? thisBinding[func] : func;
                return (
                  (length = args.length),
                  argPos
                    ? (args = (function reorder(array, indexes) {
                        var arrLength = array.length,
                          length = nativeMin(indexes.length, arrLength),
                          oldArray = (function copyArray(source, array) {
                            var index = -1,
                              length = source.length;
                            for (
                              array || (array = Array(length));
                              ++index < length;

                            )
                              array[index] = source[index];
                            return array;
                          })(array);
                        for (; length--; ) {
                          var index = indexes[length];
                          array[length] = isIndex(index, arrLength)
                            ? oldArray[index]
                            : void 0;
                        }
                        return array;
                      })(args, argPos))
                    : isFlip && length > 1 && args.reverse(),
                  isAry && ary < length && (args.length = ary),
                  this &&
                    this !== root &&
                    this instanceof wrapper &&
                    (fn = Ctor || createCtor(fn)),
                  fn.apply(thisBinding, args)
                );
              };
            }
            function createRecurry(
              func,
              bitmask,
              wrapFunc,
              placeholder,
              thisArg,
              partials,
              holders,
              argPos,
              ary,
              arity,
            ) {
              var isCurry = 8 & bitmask;
              (bitmask |= isCurry ? 32 : 64),
                4 & (bitmask &= ~(isCurry ? 64 : 32)) || (bitmask &= -4);
              var result = wrapFunc(
                func,
                bitmask,
                thisArg,
                isCurry ? partials : void 0,
                isCurry ? holders : void 0,
                isCurry ? void 0 : partials,
                isCurry ? void 0 : holders,
                argPos,
                ary,
                arity,
              );
              return (
                (result.placeholder = placeholder),
                setWrapToString(result, func, bitmask)
              );
            }
            function createWrap(
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              argPos,
              ary,
              arity,
            ) {
              var isBindKey = 2 & bitmask;
              if (!isBindKey && 'function' != typeof func)
                throw new TypeError('Expected a function');
              var length = partials ? partials.length : 0;
              if (
                (length || ((bitmask &= -97), (partials = holders = void 0)),
                (ary = void 0 === ary ? ary : nativeMax(toInteger(ary), 0)),
                (arity = void 0 === arity ? arity : toInteger(arity)),
                (length -= holders ? holders.length : 0),
                64 & bitmask)
              ) {
                var partialsRight = partials,
                  holdersRight = holders;
                partials = holders = void 0;
              }
              var newData = [
                func,
                bitmask,
                thisArg,
                partials,
                holders,
                partialsRight,
                holdersRight,
                argPos,
                ary,
                arity,
              ];
              if (
                ((func = newData[0]),
                (bitmask = newData[1]),
                (thisArg = newData[2]),
                (partials = newData[3]),
                (holders = newData[4]),
                !(arity = newData[9] =
                  null == newData[9]
                    ? isBindKey
                      ? 0
                      : func.length
                    : nativeMax(newData[9] - length, 0)) &&
                  24 & bitmask &&
                  (bitmask &= -25),
                bitmask && 1 != bitmask)
              )
                result =
                  8 == bitmask || 16 == bitmask
                    ? (function createCurry(func, bitmask, arity) {
                        var Ctor = createCtor(func);
                        return function wrapper() {
                          for (
                            var length = arguments.length,
                              args = Array(length),
                              index = length,
                              placeholder = getHolder(wrapper);
                            index--;

                          )
                            args[index] = arguments[index];
                          var holders =
                            length < 3 &&
                            args[0] !== placeholder &&
                            args[length - 1] !== placeholder
                              ? []
                              : replaceHolders(args, placeholder);
                          return (length -= holders.length) < arity
                            ? createRecurry(
                                func,
                                bitmask,
                                createHybrid,
                                wrapper.placeholder,
                                void 0,
                                args,
                                holders,
                                void 0,
                                void 0,
                                arity - length,
                              )
                            : apply(
                                this && this !== root && this instanceof wrapper
                                  ? Ctor
                                  : func,
                                this,
                                args,
                              );
                        };
                      })(func, bitmask, arity)
                    : (32 != bitmask && 33 != bitmask) || holders.length
                      ? createHybrid.apply(void 0, newData)
                      : (function createPartial(
                          func,
                          bitmask,
                          thisArg,
                          partials,
                        ) {
                          var isBind = 1 & bitmask,
                            Ctor = createCtor(func);
                          return function wrapper() {
                            for (
                              var argsIndex = -1,
                                argsLength = arguments.length,
                                leftIndex = -1,
                                leftLength = partials.length,
                                args = Array(leftLength + argsLength),
                                fn =
                                  this &&
                                  this !== root &&
                                  this instanceof wrapper
                                    ? Ctor
                                    : func;
                              ++leftIndex < leftLength;

                            )
                              args[leftIndex] = partials[leftIndex];
                            for (; argsLength--; )
                              args[leftIndex++] = arguments[++argsIndex];
                            return apply(fn, isBind ? thisArg : this, args);
                          };
                        })(func, bitmask, thisArg, partials);
              else
                var result = (function createBind(func, bitmask, thisArg) {
                  var isBind = 1 & bitmask,
                    Ctor = createCtor(func);
                  return function wrapper() {
                    return (
                      this && this !== root && this instanceof wrapper
                        ? Ctor
                        : func
                    ).apply(isBind ? thisArg : this, arguments);
                  };
                })(func, bitmask, thisArg);
              return setWrapToString(result, func, bitmask);
            }
            function getHolder(func) {
              return func.placeholder;
            }
            function getNative(object, key5) {
              var value = (function getValue(object, key5) {
                return null == object ? void 0 : object[key5];
              })(object, key5);
              return baseIsNative(value) ? value : void 0;
            }
            function getWrapDetails(source) {
              var match = source.match(reWrapDetails);
              return match ? match[1].split(reSplitDetails) : [];
            }
            function insertWrapDetails(source, details) {
              var length = details.length,
                lastIndex = length - 1;
              return (
                (details[lastIndex] =
                  (length > 1 ? '& ' : '') + details[lastIndex]),
                (details = details.join(length > 2 ? ', ' : ' ')),
                source.replace(
                  reWrapComment,
                  '{\n/* [wrapped with ' + details + '] */\n',
                )
              );
            }
            function isIndex(value, length) {
              return (
                !!(length = null == length ? 9007199254740991 : length) &&
                ('number' == typeof value || reIsUint.test(value)) &&
                value > -1 &&
                value % 1 == 0 &&
                value < length
              );
            }
            var setWrapToString = defineProperty
              ? function (wrapper, reference, bitmask) {
                  var value,
                    source = reference + '';
                  return defineProperty(wrapper, 'toString', {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((value = insertWrapDetails(
                        source,
                        updateWrapDetails(getWrapDetails(source), bitmask),
                      )),
                      function () {
                        return value;
                      }),
                  });
                }
              : function identity(value) {
                  return value;
                };
            function updateWrapDetails(details, bitmask) {
              return (
                (function arrayEach(array, iteratee) {
                  for (
                    var index = -1, length = array ? array.length : 0;
                    ++index < length &&
                    !1 !== iteratee(array[index], index, array);

                  );
                  return array;
                })(wrapFlags, function (pair) {
                  var value = '_.' + pair[0];
                  bitmask & pair[1] &&
                    !arrayIncludes(details, value) &&
                    details.push(value);
                }),
                details.sort()
              );
            }
            function curry2(func, arity, guard) {
              var result = createWrap(
                func,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (arity = guard ? void 0 : arity),
              );
              return (result.placeholder = curry2.placeholder), result;
            }
            function isObject(value) {
              var type = typeof value;
              return !!value && ('object' == type || 'function' == type);
            }
            function toFinite(value) {
              return value
                ? Infinity ===
                    (value = (function toNumber(value) {
                      if ('number' == typeof value) return value;
                      if (
                        (function isSymbol(value) {
                          return (
                            'symbol' == typeof value ||
                            ((function isObjectLike(value) {
                              return !!value && 'object' == typeof value;
                            })(value) &&
                              '[object Symbol]' == objectToString.call(value))
                          );
                        })(value)
                      )
                        return NaN;
                      if (isObject(value)) {
                        var other =
                          'function' == typeof value.valueOf
                            ? value.valueOf()
                            : value;
                        value = isObject(other) ? other + '' : other;
                      }
                      if ('string' != typeof value)
                        return 0 === value ? value : +value;
                      value = value.replace(reTrim, '');
                      var isBinary = reIsBinary.test(value);
                      return isBinary || reIsOctal.test(value)
                        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
                        : reIsBadHex.test(value)
                          ? NaN
                          : +value;
                    })(value)) || -Infinity === value
                  ? 17976931348623157e292 * (value < 0 ? -1 : 1)
                  : value == value
                    ? value
                    : 0
                : 0 === value
                  ? value
                  : 0;
            }
            function toInteger(value) {
              var result = toFinite(value),
                remainder = result % 1;
              return result == result
                ? remainder
                  ? result - remainder
                  : result
                : 0;
            }
            (curry2.placeholder = {}), (module.exports = curry2);
          },
        });
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _react = __webpack_require__(
          './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        React38 = _interopRequireWildcard(_react),
        React37 = _interopRequireWildcard(_react),
        React15 = _interopRequireWildcard(_react),
        React12 = _interopRequireWildcard(_react),
        React3 = _interopRequireWildcard(_react),
        React5 = _interopRequireWildcard(_react),
        React6 = _interopRequireWildcard(_react),
        React9 = _interopRequireWildcard(_react),
        React8 = _interopRequireWildcard(_react),
        React14 = _interopRequireWildcard(_react),
        React13 = _interopRequireWildcard(_react),
        React18 =
          (_interopRequireWildcard(_react), _interopRequireWildcard(_react)),
        React20 =
          (_interopRequireWildcard(_react), _interopRequireWildcard(_react)),
        React35 = _interopRequireWildcard(_react),
        React28 = _interopRequireWildcard(_react),
        _core = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/cjs/index.cjs',
        );
      __webpack_require__(
        './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/styles.css',
      ),
        __webpack_require__(
          './node_modules/.pnpm/@mantine+code-highlight@7.6.0_@mantine+core@7.6.0_@mantine+hooks@7.6.0_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/code-highlight/styles.css',
        );
      var _vanilla = __webpack_require__(
        './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/vanilla.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _react2 = __webpack_require__(
        './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/react.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      _vanilla.createStore.call(void 0);
      var InternalDevToolsContext = _react.createContext.call(void 0, void 0),
        useInternalStore = () => {
          const store = _react.useContext.call(void 0, InternalDevToolsContext);
          if (!store)
            throw new Error(
              'Unable to find internal Jotai store, Did you wrap the component within DevToolsProvider?',
            );
          return store;
        },
        useDevtoolsJotaiStoreOptions = () => ({ store: useInternalStore() }),
        defaultDevToolsOptions = {
          shouldShowPrivateAtoms: !1,
          shouldExpandJsonTreeViewInitially: !1,
          timeTravelPlaybackInterval: 750,
          snapshotHistoryLimit: 1 / 0,
        },
        internalDevToolsOptions = _vanilla.atom.call(
          void 0,
          defaultDevToolsOptions,
        ),
        devToolsOptionsAtom = _vanilla.atom.call(
          void 0,
          (get) => get(internalDevToolsOptions),
          (_, set, options2) => {
            const patchWithDefaultsDevToolsOptions = {
              ...defaultDevToolsOptions,
              ...options2,
            };
            set(internalDevToolsOptions, patchWithDefaultsDevToolsOptions);
          },
        ),
        useDevToolsOptionsValue = () =>
          _react2.useAtomValue.call(
            void 0,
            devToolsOptionsAtom,
            useDevtoolsJotaiStoreOptions(),
          );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _utils = __webpack_require__(
        './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/vanilla/utils.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var generateLocalStorageKey = (key5, version) =>
          `jotai-devtools-${key5}-V${version}`,
        key = generateLocalStorageKey('is-shell-open', 0),
        isShellOpenAtom = _utils.atomWithStorage.call(void 0, key, null);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var userCustomStoreAtom = _vanilla.atom.call(void 0, void 0);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var useThemeMode = (light, dark) =>
        'light' ===
        _core.useComputedColorScheme.call(void 0, 'dark', {
          getInitialValueInEffect: !0,
        })
          ? light
          : dark;
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var shellStyleDefaults_defaultHeight = 370,
        key2 = generateLocalStorageKey('shell-height', 0);
      _utils.atomWithStorage.call(void 0, key2, {
        height: shellStyleDefaults_defaultHeight,
        isDragging: !1,
      });
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var getTypeOfAtomValue = (value) => {
        if (value instanceof Promise) return 'promise';
        if (Array.isArray(value)) return 'array';
        if (null === value) return 'null';
        if (
          ((value) =>
            'function' ==
              typeof _optionalChain([
                value,
                'optionalAccess',
                (_2) => _2.read,
              ]) ||
            'function' ==
              typeof _optionalChain([
                value,
                'optionalAccess',
                (_3) => _3.write,
              ]) ||
            !!_optionalChain([value, 'optionalAccess', (_4) => _4.init]) ||
            !!_optionalChain([value, 'optionalAccess', (_5) => _5.debugLabel]))(
            value,
          )
        )
          return 'atom';
        return typeof value;
      };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var atomToPrintable = (atom8) =>
        atom8.debugLabel ? atom8.debugLabel : `<unlabeled-${atom8}>`;
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _javascriptstringify = __webpack_require__(
          './node_modules/.pnpm/javascript-stringify@2.1.0/node_modules/javascript-stringify/dist/index.js',
        ),
        stringifyWithDoubleQuotes = (value, _, stringify2) =>
          'string' == typeof value
            ? '"' + value.replace(/"/g, '\\"') + '"'
            : stringify2(value),
        literalStringValues = ['bigint', 'symbol', 'undefined', 'function'],
        ErrorSymbol = Symbol('parsing-error'),
        stringifyAtomValue = (atomValue) => {
          const type = getTypeOfAtomValue(atomValue);
          if (literalStringValues.includes(type)) return String(atomValue);
          try {
            const result = _javascriptstringify.stringify.call(
              void 0,
              atomValue,
              stringifyWithDoubleQuotes,
              2,
            );
            return void 0 === result ? String(atomValue) : result;
          } catch (e) {
            return ErrorSymbol;
          }
        },
        selectedShellTabKey = generateLocalStorageKey('selected-shell-tab', 0);
      _utils.atomWithStorage.call(void 0, selectedShellTabKey, 'atom-viewer');
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _reactresizablepanels = __webpack_require__(
        './node_modules/.pnpm/react-resizable-panels@0.0.54_react-dom@18.2.0_react@18.2.0/node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var PanelResizeHandle_module_default = {},
        PanelResizeHandle = () =>
          React38.default.createElement(
            _reactresizablepanels.PanelResizeHandle,
            { id: 'jotai-devtools-panel-resize-handle' },
            React38.default.createElement(
              _core.Box,
              {
                p: '5',
                h: '100%',
                className:
                  PanelResizeHandle_module_default.reactPanelResizeHandle,
              },
              React38.default.createElement(_core.Box, {
                className: PanelResizeHandle_module_default.innerContainer,
                mah: 100,
                mih: 50,
                h: '20%',
                w: 5,
                m: 5,
                bg: useThemeMode('gray.3', 'gray.7'),
              }),
            ),
          ),
        AtomViewer_module_default = {};
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var valuesAtom = _vanilla.atom.call(void 0, []);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var selectedAtomAtom = _vanilla.atom.call(void 0, void 0),
        searchInputInternalValueAtom = _vanilla.atom.call(void 0, ''),
        filteredValuesAtom = _utils.atomWithDefault.call(void 0, (get) =>
          ((searchString, defaultAtoms) => {
            const normalizedStr = searchString.trim().toLocaleLowerCase();
            return normalizedStr
              ? defaultAtoms.filter(([atomTuple]) =>
                  atomToPrintable(atomTuple)
                    .toLocaleLowerCase()
                    .includes(normalizedStr),
                )
              : defaultAtoms;
          })(get(searchInputInternalValueAtom), get(valuesAtom)),
        ),
        searchInputAtom = _vanilla.atom.call(
          void 0,
          (get) => get(searchInputInternalValueAtom),
          (_, set, searchInput) => {
            set(searchInputInternalValueAtom, searchInput);
          },
        ),
        AtomDetail_module_default = {};
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var useUserStore = () => {
          const possibleUserStore = _react2.useAtomValue.call(
            void 0,
            userCustomStoreAtom,
            useDevtoolsJotaiStoreOptions(),
          );
          return _react2.useStore.call(
            void 0,
            possibleUserStore ? { store: possibleUserStore } : void 0,
          );
        },
        useUserStoreOptions = () => ({ store: useUserStore() });
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var use =
          React38.default.use ||
          ((promise) => {
            if ('pending' === promise.status) throw promise;
            if ('fulfilled' === promise.status) return promise.value;
            throw 'rejected' === promise.status
              ? promise.reason
              : ((promise.status = 'pending'),
                promise.then(
                  (v) => {
                    (promise.status = 'fulfilled'), (promise.value = v);
                  },
                  (e) => {
                    (promise.status = 'rejected'), (promise.reason = e);
                  },
                ),
                promise);
          }),
        isInternalAtomSubscribeFunction = (cb) =>
          _optionalChain([cb, 'optionalAccess', (_6) => _6.isJotaiDevTools]);
      function useInternalAtomValue(atom8) {
        const userStore = useUserStore(),
          internalStore = useInternalStore(),
          setSelectedAtomAtom = _react2.useSetAtom.call(
            void 0,
            selectedAtomAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
          [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] =
            _react.useReducer.call(
              void 0,
              (prev) => {
                const nextValue = userStore.get(atom8);
                return Object.is(prev[0], nextValue) &&
                  prev[1] === userStore &&
                  prev[2] === atom8
                  ? prev
                  : [nextValue, userStore, atom8];
              },
              void 0,
              () => [userStore.get(atom8), userStore, atom8],
            );
        let value = valueFromReducer;
        return (
          (storeFromReducer === userStore && atomFromReducer === atom8) ||
            (rerender(), (value = userStore.get(atom8))),
          _react.useEffect.call(
            void 0,
            () => {
              const devSubscribeStore =
                _optionalChain([
                  userStore,
                  'optionalAccess',
                  (_7) => _7.dev_subscribe_store,
                ]) ||
                _optionalChain([
                  userStore,
                  'optionalAccess',
                  (_8) => _8.dev_subscribe_state,
                ]);
              if (!devSubscribeStore) return;
              const atomSubCb = () => {
                rerender();
              };
              atomSubCb.isJotaiDevTools = !0;
              const devSubCb = (type) => {
                  if (
                    'unsub' !==
                    ('string' == typeof type
                      ? type
                      : _optionalChain([
                          type,
                          'optionalAccess',
                          (_9) => _9.type,
                        ]))
                  )
                    return;
                  const activeValue = internalStore.get(selectedAtomAtom);
                  if (activeValue) {
                    const { l = [], t } =
                      _optionalChain([
                        userStore,
                        'access',
                        (_10) => _10.dev_get_mounted,
                        'optionalCall',
                        (_11) => _11(activeValue.atom),
                      ]) || {};
                    if (
                      Array.from(l).every(isInternalAtomSubscribeFunction) &&
                      t &&
                      _optionalChain([
                        t,
                        'optionalAccess',
                        (_12) => _12.size,
                      ]) <= 1
                    )
                      return setSelectedAtomAtom(void 0);
                  }
                },
                devUnsubscribeStore = _optionalChain([
                  devSubscribeStore,
                  'optionalCall',
                  (_13) => _13(devSubCb, 2),
                ]),
                unsub = userStore.sub(atom8, atomSubCb);
              return (
                rerender(),
                () => {
                  _optionalChain([
                    devUnsubscribeStore,
                    'optionalCall',
                    (_14) => _14(),
                  ]),
                    unsub();
                }
              );
            },
            [userStore, setSelectedAtomAtom, internalStore, atom8],
          ),
          value instanceof Promise ? use(value) : value
        );
      }
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var useAtomsSnapshots = () => {
          const { shouldShowPrivateAtoms } = useDevToolsOptionsValue(),
            opts = { store: useUserStore(), shouldShowPrivateAtoms };
          return _chunk5K6HCVT2cjsjs.useAtomsSnapshot.call(void 0, opts);
        },
        useSyncSnapshotValuesToAtom = () => {
          const currentSnapshots = useAtomsSnapshots(),
            [values, setValues] = _react2.useAtom.call(
              void 0,
              valuesAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            valuesArr = _react.useMemo.call(
              void 0,
              () => Array.from(currentSnapshots.values),
              [currentSnapshots.values],
            );
          return (
            _react.useEffect.call(
              void 0,
              () => {
                setValues(valuesArr);
              },
              [setValues, valuesArr],
            ),
            values
          );
        },
        AtomDependentsList_module_default = {},
        AtomDependentsList = ({ atom: atom8 }) => {
          const { dependents } = useAtomsSnapshots(),
            depsForAtom = React3.useMemo(
              () =>
                Array.from(dependents.get(atom8) || []).filter(
                  (a) => a.toString() !== atom8.toString(),
                ),
              [dependents, atom8],
            ),
            listOfDependents = React3.useMemo(
              () =>
                depsForAtom.map((atom9, i) => {
                  const parsedDebugLabel = atomToPrintable(atom9);
                  return React3.createElement(
                    _core.List.Item,
                    { key: `${i}-${atom9.toString()}-dependents-list` },
                    React3.createElement(
                      _core.Code,
                      {
                        'data-testid': `dependents-list-item-${parsedDebugLabel}-${i}`,
                      },
                      parsedDebugLabel,
                    ),
                  );
                }),
              [depsForAtom],
            );
          return React3.createElement(
            _core.Box,
            null,
            React3.createElement(
              _core.Text,
              {
                component: 'div',
                fw: 'bold',
                mb: 10,
                mt: 20,
                className: AtomDependentsList_module_default.dependentsText,
              },
              'Dependents',
            ),
            listOfDependents.length
              ? React3.createElement(
                  _core.List,
                  { type: 'ordered', mb: 10 },
                  listOfDependents,
                )
              : React3.createElement(
                  _core.Text,
                  {
                    component: 'div',
                    size: 'sm',
                    mb: 10,
                    className: AtomDependentsList_module_default.dependentsText,
                  },
                  'No dependents',
                ),
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var MetaInfo = ({ label, value, color }) =>
          React38.default.createElement(
            _core.Box,
            { mb: 10 },
            React38.default.createElement(
              _core.Text,
              {
                component: 'div',
                tt: 'uppercase',
                fz: 10,
                fw: 'bold',
                c: 'dimmed',
                'data-testid': `meta-info-label-${label}`,
              },
              label,
            ),
            React38.default.createElement(
              _core.Code,
              { 'data-testid': `meta-info-value-${value}`, color },
              value,
            ),
          ),
        AtomMetaDetails = React5.memo(
          ({ debugLabel, atomValueType, isAtomPrivate }) =>
            React5.createElement(
              _core.Box,
              null,
              React5.createElement(
                _core.Text,
                { fw: 'bold', mb: 10, c: '#fff' },
                'Meta',
              ),
              React5.createElement(MetaInfo, {
                label: 'Debug Label',
                value: debugLabel,
              }),
              React5.createElement(MetaInfo, {
                label: 'Value type',
                value: atomValueType,
              }),
              isAtomPrivate &&
                React5.createElement(MetaInfo, {
                  label: 'Private',
                  value: 'Yes',
                  color: 'red',
                }),
            ),
        );
      (AtomMetaDetails.displayName = 'AtomMetaDetails'),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var import_prop_types = _chunk5K6HCVT2cjsjs.__toESM.call(
        void 0,
        require_prop_types(),
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var defaultAttributes = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 24,
          height: 24,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        __defProp = Object.defineProperty,
        __defProps = Object.defineProperties,
        __getOwnPropDescs = Object.getOwnPropertyDescriptors,
        __getOwnPropSymbols = Object.getOwnPropertySymbols,
        __hasOwnProp = Object.prototype.hasOwnProperty,
        __propIsEnum = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (obj, key5, value) =>
          key5 in obj
            ? __defProp(obj, key5, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value,
              })
            : (obj[key5] = value),
        __spreadValues = (a, b) => {
          for (var prop in b || (b = {}))
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b))
              __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
          return a;
        },
        createReactComponent = (iconName, iconNamePascal, iconNode) => {
          const Component = _react.forwardRef.call(void 0, (_a, ref) => {
            var a,
              _b = _a,
              { color = 'currentColor', size = 24, stroke = 2, children } = _b,
              rest = ((source, exclude) => {
                var target = {};
                for (var prop in source)
                  __hasOwnProp.call(source, prop) &&
                    exclude.indexOf(prop) < 0 &&
                    (target[prop] = source[prop]);
                if (null != source && __getOwnPropSymbols)
                  for (var prop of __getOwnPropSymbols(source))
                    exclude.indexOf(prop) < 0 &&
                      __propIsEnum.call(source, prop) &&
                      (target[prop] = source[prop]);
                return target;
              })(_b, ['color', 'size', 'stroke', 'children']);
            return _react.createElement.call(
              void 0,
              'svg',
              __spreadValues(
                ((a = __spreadValues({ ref }, defaultAttributes)),
                __defProps(
                  a,
                  __getOwnPropDescs({
                    width: size,
                    height: size,
                    stroke: color,
                    strokeWidth: stroke,
                    className: `tabler-icon tabler-icon-${iconName}`,
                  }),
                )),
                rest,
              ),
              [
                ...iconNode.map(([tag, attrs]) =>
                  _react.createElement.call(void 0, tag, attrs),
                ),
                ...(children || []),
              ],
            );
          });
          return (
            (Component.propTypes = {
              color: import_prop_types.default.string,
              size: import_prop_types.default.oneOfType([
                import_prop_types.default.string,
                import_prop_types.default.number,
              ]),
              stroke: import_prop_types.default.oneOfType([
                import_prop_types.default.string,
                import_prop_types.default.number,
              ]),
            }),
            (Component.displayName = `${iconNamePascal}`),
            Component
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconAlertCircle = createReactComponent(
        'alert-circle',
        'IconAlertCircle',
        [
          ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0', key: 'svg-0' }],
          ['path', { d: 'M12 8v4', key: 'svg-1' }],
          ['path', { d: 'M12 16h.01', key: 'svg-2' }],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconBinaryTree2 = createReactComponent(
        'binary-tree-2',
        'IconBinaryTree2',
        [
          ['path', { d: 'M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z', key: 'svg-0' }],
          ['path', { d: 'M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z', key: 'svg-1' }],
          ['path', { d: 'M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z', key: 'svg-2' }],
          ['path', { d: 'M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z', key: 'svg-3' }],
          ['path', { d: 'M12 8v8', key: 'svg-4' }],
          ['path', { d: 'M6.316 12.496l4.368 -4.992', key: 'svg-5' }],
          ['path', { d: 'M17.684 12.496l-4.366 -4.99', key: 'svg-6' }],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconChevronDown = createReactComponent(
        'chevron-down',
        'IconChevronDown',
        [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconChevronLeft = createReactComponent(
        'chevron-left',
        'IconChevronLeft',
        [['path', { d: 'M15 6l-6 6l6 6', key: 'svg-0' }]],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconChevronRight = createReactComponent(
        'chevron-right',
        'IconChevronRight',
        [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconChevronUp = createReactComponent('chevron-up', 'IconChevronUp', [
        ['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconCircleCheck = createReactComponent(
        'circle-check',
        'IconCircleCheck',
        [
          [
            'path',
            { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' },
          ],
          ['path', { d: 'M9 12l2 2l4 -4', key: 'svg-1' }],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconFileCode = createReactComponent('file-code', 'IconFileCode', [
        ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
        [
          'path',
          {
            d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z',
            key: 'svg-1',
          },
        ],
        ['path', { d: 'M10 13l-1 2l1 2', key: 'svg-2' }],
        ['path', { d: 'M14 13l1 2l-1 2', key: 'svg-3' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconFileDiff = createReactComponent('file-diff', 'IconFileDiff', [
        ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
        [
          'path',
          {
            d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z',
            key: 'svg-1',
          },
        ],
        ['path', { d: 'M12 10l0 4', key: 'svg-2' }],
        ['path', { d: 'M10 12l4 0', key: 'svg-3' }],
        ['path', { d: 'M10 17l4 0', key: 'svg-4' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconLayoutList = createReactComponent(
        'layout-list',
        'IconLayoutList',
        [
          [
            'path',
            {
              d: 'M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z',
              key: 'svg-0',
            },
          ],
          [
            'path',
            {
              d: 'M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z',
              key: 'svg-1',
            },
          ],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconMinus = createReactComponent('minus', 'IconMinus', [
        ['path', { d: 'M5 12l14 0', key: 'svg-0' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconMoonStars = createReactComponent('moon-stars', 'IconMoonStars', [
        [
          'path',
          {
            d: 'M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z',
            key: 'svg-0',
          },
        ],
        [
          'path',
          {
            d: 'M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2',
            key: 'svg-1',
          },
        ],
        ['path', { d: 'M19 11h2m-1 -1v2', key: 'svg-2' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconPlayerPauseFilled = createReactComponent(
        'player-pause-filled',
        'IconPlayerPauseFilled',
        [
          [
            'path',
            {
              d: 'M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z',
              fill: 'currentColor',
              key: 'svg-0',
              strokeWidth: '0',
            },
          ],
          [
            'path',
            {
              d: 'M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z',
              fill: 'currentColor',
              key: 'svg-1',
              strokeWidth: '0',
            },
          ],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconPlayerPlayFilled = createReactComponent(
        'player-play-filled',
        'IconPlayerPlayFilled',
        [
          [
            'path',
            {
              d: 'M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z',
              fill: 'currentColor',
              key: 'svg-0',
              strokeWidth: '0',
            },
          ],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconPlayerRecordFilled = createReactComponent(
        'player-record-filled',
        'IconPlayerRecordFilled',
        [
          [
            'path',
            {
              d: 'M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z',
              fill: 'currentColor',
              key: 'svg-0',
              strokeWidth: '0',
            },
          ],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconRotate2 = createReactComponent('rotate-2', 'IconRotate2', [
        [
          'path',
          { d: 'M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5', key: 'svg-0' },
        ],
        ['path', { d: 'M18.37 7.16l0 .01', key: 'svg-1' }],
        ['path', { d: 'M13 19.94l0 .01', key: 'svg-2' }],
        ['path', { d: 'M16.84 18.37l0 .01', key: 'svg-3' }],
        ['path', { d: 'M19.37 15.1l0 .01', key: 'svg-4' }],
        ['path', { d: 'M19.94 11l0 .01', key: 'svg-5' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconSourceCode = createReactComponent(
        'source-code',
        'IconSourceCode',
        [
          [
            'path',
            {
              d: 'M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5',
              key: 'svg-0',
            },
          ],
          ['path', { d: 'M6 5l-2 2l2 2', key: 'svg-1' }],
          ['path', { d: 'M10 9l2 -2l-2 -2', key: 'svg-2' }],
        ],
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconSun = createReactComponent('sun', 'IconSun', [
        [
          'path',
          { d: 'M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0', key: 'svg-0' },
        ],
        [
          'path',
          {
            d: 'M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7',
            key: 'svg-1',
          },
        ],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconTimeline = createReactComponent('timeline', 'IconTimeline', [
        ['path', { d: 'M4 16l6 -7l5 5l5 -6', key: 'svg-0' }],
        [
          'path',
          { d: 'M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' },
        ],
        [
          'path',
          { d: 'M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' },
        ],
        [
          'path',
          { d: 'M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' },
        ],
        [
          'path',
          { d: 'M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-4' },
        ],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var IconTrashX = createReactComponent('trash-x', 'IconTrashX', [
        ['path', { d: 'M4 7h16', key: 'svg-0' }],
        [
          'path',
          { d: 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12', key: 'svg-1' },
        ],
        [
          'path',
          { d: 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3', key: 'svg-2' },
        ],
        ['path', { d: 'M10 12l4 4m0 -4l-4 4', key: 'svg-3' }],
      ]);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var ErrorMessage_module_default = {},
        ErrorMessage = ({ message }) => {
          const themedRedColor = useThemeMode('red.8', 'red.5');
          return React6.createElement(
            _core.Text,
            {
              component: 'span',
              size: 'sm',
              fw: '500',
              c: themedRedColor,
              className: ErrorMessage_module_default.text,
            },
            React6.createElement(
              _core.Text,
              {
                component: 'span',
                mr: 5,
                className: ErrorMessage_module_default.text,
              },
              React6.createElement(IconAlertCircle, { size: 16 }),
            ),
            message,
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _reactjsontree = __webpack_require__(
          './node_modules/.pnpm/react-json-tree@0.18.0_@types+react@18.2.57_react@18.2.0/node_modules/react-json-tree/lib/esm/index.js',
        ),
        JSONTree_module_default = {};
      function getShortTypeString(val, isForDiff) {
        return (
          isForDiff &&
            Array.isArray(val) &&
            (val = val[2 === val.length ? 1 : 0]),
          (function isIterable(obj) {
            return (
              null !== obj &&
              'object' == typeof obj &&
              !Array.isArray(obj) &&
              'function' == typeof obj[window.Symbol.iterator]
            );
          })(val)
            ? '(…)'
            : Array.isArray(val)
              ? val.length > 0
                ? '[…]'
                : '[]'
              : null === val
                ? 'null'
                : void 0 === val
                  ? 'undef'
                  : 'object' == typeof val
                    ? Object.keys(val).length > 0
                      ? '{…}'
                      : '{}'
                    : 'function' == typeof val
                      ? 'fn'
                      : 'string' == typeof val
                        ? `"${val.substring(0, 10) + (val.length > 10 ? '…' : '')}"`
                        : 'symbol' == typeof val
                          ? 'symbol'
                          : val
        );
      }
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var getItemStringWithDiff = (nodeType, data, isForDiff) => {
          if ('Object' === nodeType) {
            const keys = Object.keys(data);
            0;
            return `{ ${keys
              .slice(0, 3)
              .map(
                (key5) =>
                  `${key5}: ${getShortTypeString(data[key5], isForDiff)}`,
              )
              .concat(keys.length > 3 ? ['…'] : [])
              .join(', ')} }`;
          }
          if ('Array' === nodeType) {
            0;
            return `[${data
              .slice(0, 4)
              .map((val) => getShortTypeString(val), isForDiff)
              .concat(data.length > 3 ? ['…'] : [])
              .join(', ')}]`;
          }
          return nodeType;
        },
        getItemString = (nodeType, data) =>
          getItemStringWithDiff(nodeType, data, !1),
        getItemStringWithDiffEnabled = (nodeType, data) =>
          getItemStringWithDiff(nodeType, data, !0);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var import_typeof = _chunk5K6HCVT2cjsjs.__toESM.call(
          void 0,
          require_typeof(),
        ),
        import_defineProperty = _chunk5K6HCVT2cjsjs.__toESM.call(
          void 0,
          require_defineProperty(),
        ),
        import_slicedToArray = _chunk5K6HCVT2cjsjs.__toESM.call(
          void 0,
          require_slicedToArray(),
        ),
        base16 = _chunk5K6HCVT2cjsjs.__toESM.call(void 0, require_lib()),
        import_color = _chunk5K6HCVT2cjsjs.__toESM.call(
          void 0,
          require_color(),
        ),
        import_lodash = _chunk5K6HCVT2cjsjs.__toESM.call(
          void 0,
          require_lodash(),
        );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key5) {
                (0, import_defineProperty.default)(target, key5, source[key5]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source),
                )
              : ownKeys(Object(source)).forEach(function (key5) {
                  Object.defineProperty(
                    target,
                    key5,
                    Object.getOwnPropertyDescriptor(source, key5),
                  );
                });
        }
        return target;
      }
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var DEFAULT_BASE16 = base16.default,
        BASE16_KEYS = Object.keys(DEFAULT_BASE16),
        flip = function flip2(x) {
          return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
        },
        invertColor = function invertColor2(hexString) {
          var _rgb2yuv = (function rgb2yuv(rgb) {
              var r = rgb[0] / 255,
                g = rgb[1] / 255,
                b = rgb[2] / 255;
              return [
                0.299 * r + 0.587 * g + 0.114 * b,
                -0.14713 * r + -0.28886 * g + 0.436 * b,
                0.615 * r + -0.51499 * g + -0.10001 * b,
              ];
            })((0, import_color.default)(hexString).array()),
            _rgb2yuv2 = (0, import_slicedToArray.default)(_rgb2yuv, 3),
            y = _rgb2yuv2[0],
            u = _rgb2yuv2[1],
            v = _rgb2yuv2[2],
            rgb = (function yuv2rgb(yuv) {
              var r,
                g,
                b,
                y = yuv[0],
                u = yuv[1],
                v = yuv[2];
              return (
                (r = 1 * y + 0 * u + 1.13983 * v),
                (g = 1 * y + -0.39465 * u + -0.5806 * v),
                (b = 1 * y + 2.02311 * u + 0 * v),
                [
                  255 * (r = Math.min(Math.max(0, r), 1)),
                  255 * (g = Math.min(Math.max(0, g), 1)),
                  255 * (b = Math.min(Math.max(0, b), 1)),
                ]
              );
            })([flip(y), u, v]);
          return import_color.default.rgb(rgb).hex();
        },
        merger = function merger2(styling) {
          return function (prevStyling) {
            return {
              className: [prevStyling.className, styling.className]
                .filter(Boolean)
                .join(' '),
              style: _objectSpread(
                _objectSpread({}, prevStyling.style || {}),
                styling.style || {},
              ),
            };
          };
        },
        mergeStylings = function mergeStylings2(
          customStylings,
          defaultStylings,
        ) {
          var keys = Object.keys(defaultStylings);
          for (var key5 in customStylings)
            -1 === keys.indexOf(key5) && keys.push(key5);
          return keys.reduce(function (mergedStyling, key6) {
            return (
              (mergedStyling[key6] = (function mergeStyling2(
                customStyling,
                defaultStyling,
              ) {
                if (void 0 === customStyling) return defaultStyling;
                if (void 0 === defaultStyling) return customStyling;
                var customType = (0, import_typeof.default)(customStyling),
                  defaultType = (0, import_typeof.default)(defaultStyling);
                switch (customType) {
                  case 'string':
                    switch (defaultType) {
                      case 'string':
                        return [defaultStyling, customStyling]
                          .filter(Boolean)
                          .join(' ');
                      case 'object':
                        return merger({
                          className: customStyling,
                          style: defaultStyling,
                        });
                      case 'function':
                        return function (styling) {
                          for (
                            var _len = arguments.length,
                              args = new Array(_len > 1 ? _len - 1 : 0),
                              _key = 1;
                            _key < _len;
                            _key++
                          )
                            args[_key - 1] = arguments[_key];
                          return merger({ className: customStyling })(
                            defaultStyling.apply(
                              void 0,
                              [styling].concat(args),
                            ),
                          );
                        };
                    }
                    break;
                  case 'object':
                    switch (defaultType) {
                      case 'string':
                        return merger({
                          className: defaultStyling,
                          style: customStyling,
                        });
                      case 'object':
                        return _objectSpread(
                          _objectSpread({}, defaultStyling),
                          customStyling,
                        );
                      case 'function':
                        return function (styling) {
                          for (
                            var _len2 = arguments.length,
                              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                              _key2 = 1;
                            _key2 < _len2;
                            _key2++
                          )
                            args[_key2 - 1] = arguments[_key2];
                          return merger({ style: customStyling })(
                            defaultStyling.apply(
                              void 0,
                              [styling].concat(args),
                            ),
                          );
                        };
                    }
                    break;
                  case 'function':
                    switch (defaultType) {
                      case 'string':
                        return function (styling) {
                          for (
                            var _len3 = arguments.length,
                              args = new Array(_len3 > 1 ? _len3 - 1 : 0),
                              _key3 = 1;
                            _key3 < _len3;
                            _key3++
                          )
                            args[_key3 - 1] = arguments[_key3];
                          return customStyling.apply(
                            void 0,
                            [
                              merger(styling)({ className: defaultStyling }),
                            ].concat(args),
                          );
                        };
                      case 'object':
                        return function (styling) {
                          for (
                            var _len4 = arguments.length,
                              args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                              _key4 = 1;
                            _key4 < _len4;
                            _key4++
                          )
                            args[_key4 - 1] = arguments[_key4];
                          return customStyling.apply(
                            void 0,
                            [merger(styling)({ style: defaultStyling })].concat(
                              args,
                            ),
                          );
                        };
                      case 'function':
                        return function (styling) {
                          for (
                            var _len5 = arguments.length,
                              args = new Array(_len5 > 1 ? _len5 - 1 : 0),
                              _key5 = 1;
                            _key5 < _len5;
                            _key5++
                          )
                            args[_key5 - 1] = arguments[_key5];
                          return customStyling.apply(
                            void 0,
                            [
                              defaultStyling.apply(
                                void 0,
                                [styling].concat(args),
                              ),
                            ].concat(args),
                          );
                        };
                    }
                }
              })(customStylings[key6], defaultStylings[key6])),
              mergedStyling
            );
          }, {});
        },
        getStylingByKeys = function getStylingByKeys2(mergedStyling, keys) {
          for (
            var _len6 = arguments.length,
              args = new Array(_len6 > 2 ? _len6 - 2 : 0),
              _key6 = 2;
            _key6 < _len6;
            _key6++
          )
            args[_key6 - 2] = arguments[_key6];
          if (null === keys) return mergedStyling;
          Array.isArray(keys) || (keys = [keys]);
          var props = keys
            .map(function (key5) {
              return mergedStyling[key5];
            })
            .filter(Boolean)
            .reduce(
              function (obj, s) {
                return (
                  'string' == typeof s
                    ? (obj.className = [obj.className, s]
                        .filter(Boolean)
                        .join(' '))
                    : 'object' === (0, import_typeof.default)(s)
                      ? (obj.style = _objectSpread(
                          _objectSpread({}, obj.style),
                          s,
                        ))
                      : 'function' == typeof s &&
                        (obj = _objectSpread(
                          _objectSpread({}, obj),
                          s.apply(void 0, [obj].concat(args)),
                        )),
                  obj
                );
              },
              { className: '', style: {} },
            );
          return (
            props.className || delete props.className,
            0 === Object.keys(props.style).length && delete props.style,
            props
          );
        },
        createStyling = (0, import_lodash.default)(function (
          getStylingFromBase16,
        ) {
          var options2 =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            themeOrStyling =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            _options$defaultBase = options2.defaultBase16,
            defaultBase16 =
              void 0 === _options$defaultBase
                ? DEFAULT_BASE16
                : _options$defaultBase,
            _options$base16Themes = options2.base16Themes,
            base16Theme = getBase16Theme(
              themeOrStyling,
              void 0 === _options$base16Themes ? null : _options$base16Themes,
            );
          base16Theme &&
            (themeOrStyling = _objectSpread(
              _objectSpread({}, base16Theme),
              themeOrStyling,
            ));
          for (
            var theme = BASE16_KEYS.reduce(function (t, key5) {
                return (
                  (t[key5] = themeOrStyling[key5] || defaultBase16[key5]), t
                );
              }, {}),
              customStyling = Object.keys(themeOrStyling).reduce(function (
                s,
                key5,
              ) {
                return -1 === BASE16_KEYS.indexOf(key5)
                  ? ((s[key5] = themeOrStyling[key5]), s)
                  : s;
              }, {}),
              defaultStyling = getStylingFromBase16(theme),
              mergedStyling = mergeStylings(customStyling, defaultStyling),
              _len7 = arguments.length,
              args = new Array(_len7 > 3 ? _len7 - 3 : 0),
              _key7 = 3;
            _key7 < _len7;
            _key7++
          )
            args[_key7 - 3] = arguments[_key7];
          return (0, import_lodash.default)(getStylingByKeys, 2).apply(
            void 0,
            [mergedStyling].concat(args),
          );
        }, 3),
        getBase16Theme = function getBase16Theme2(theme, base16Themes) {
          if (
            (theme &&
              (function isStylingConfig2(theme) {
                return !!theme.extend;
              })(theme) &&
              theme.extend &&
              (theme = theme.extend),
            'string' == typeof theme)
          ) {
            var _theme$split = theme.split(':'),
              _theme$split2 = (0, import_slicedToArray.default)(
                _theme$split,
                2,
              ),
              _themeName = _theme$split2[0],
              modifier = _theme$split2[1];
            (theme = base16Themes
              ? base16Themes[_themeName]
              : base16[_themeName]),
              'inverted' === modifier &&
                (theme = (function invertBase16Theme2(base16Theme) {
                  return Object.keys(base16Theme).reduce(function (t, key5) {
                    return (
                      (t[key5] = /^base/.test(key5)
                        ? invertColor(base16Theme[key5])
                        : 'scheme' === key5
                          ? base16Theme[key5] + ':inverted'
                          : base16Theme[key5]),
                      t
                    );
                  }, {});
                })(theme));
          }
          return theme && Object.prototype.hasOwnProperty.call(theme, 'base00')
            ? theme
            : void 0;
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var getJsonTreeTheme = (base16Theme) => {
          const valueColorMap = {
            String: base16Theme.base0B,
            Date: base16Theme.base0B,
            Number: base16Theme.base09,
            BigInt: base16Theme.base09,
            Boolean: base16Theme.base09,
            Null: base16Theme.base09,
            Undefined: base16Theme.base09,
            Symbol: base16Theme.base09,
            Function: base16Theme.base0A,
          };
          return {
            extend: base16Theme,
            diff: {
              position: 'relative',
              padding: '2px 3px',
              borderRadius: '3px',
            },
            diffAdd: { backgroundColor: base16Theme.base06 },
            diffRemove: {
              textDecoration: 'line-through',
              backgroundColor: base16Theme.base07,
            },
            diffUpdateFrom: {
              textDecoration: 'line-through',
              backgroundColor: base16Theme.base07,
            },
            diffUpdateTo: { backgroundColor: base16Theme.base06 },
            diffUpdateArrow: { color: base16Theme.base03 },
            diffUpdate: () => ({ style: { backgroundColor: 'blue' } }),
            tree: ({ style }) => ({
              style: { ...style, padding: '0.625rem', margin: 0 },
            }),
            nestedNode: ({ style }, keyPath, nodeType, expanded) => ({
              style: { ...style },
            }),
            nestedNodeItemString: ({ style }, keyPath, nodeType, expanded) => ({
              style: {
                ...style,
                cursor: 'pointer',
                color: base16Theme.base03,
                display: expanded ? 'none' : 'inline',
              },
            }),
            arrowSign: ({ style }) => ({
              style: { ...style, paddingLeft: '0.2em' },
            }),
            valueText: ({ style }, nodeType) => ({
              style: { ...style, color: valueColorMap[nodeType] },
            }),
          };
        },
        useCreateJSONTreeBase16Theme = () => {
          const theme = _core.useMantineTheme.call(void 0),
            { colorScheme } = _core.useMantineColorScheme.call(void 0),
            lightOrDark = 'auto' === colorScheme ? 'dark' : colorScheme,
            base16Theme = ((theme) => ({
              light: {
                scheme: 'Jotai DevTools Light',
                author: 'Jotai DevTools',
                base00: _core.rgba.call(void 0, theme.colors.gray[0], 0.65),
                base01: '#ffffff',
                base02: '#ffffff',
                base03: theme.colors.dark[2],
                base04: '#ffffff',
                base05: '#ffffff',
                base06: _core.rgba.call(void 0, theme.colors.green[8], 0.65),
                base07: _core.rgba.call(void 0, theme.colors.red[8], 0.65),
                base08: '#ffffff',
                base09: theme.colors.blue[8],
                base0A: theme.colors.violet[9],
                base0B: theme.colors.teal[8],
                base0C: '#ffffff',
                base0D: theme.colors.gray[8],
                base0E: '#ffffff',
                base0F: '#ffffff',
              },
              dark: {
                scheme: 'Jotai DevTools Dark',
                author: 'Jotai DevTools',
                base00: theme.colors.dark[8],
                base01: '#ffffff',
                base02: '#ffffff',
                base03: theme.colors.dark[3],
                base04: '#ffffff',
                base05: '#ffffff',
                base06: _core.rgba.call(void 0, theme.colors.green[7], 0.65),
                base07: _core.rgba.call(void 0, theme.colors.red[7], 0.65),
                base08: '#ffffff',
                base09: theme.colors.blue[4],
                base0A: theme.colors.violet[4],
                base0B: theme.colors.teal[4],
                base0C: '#ffffff',
                base0D: theme.colors.gray[4],
                base0E: '#ffffff',
                base0F: '#ffffff',
              },
            }))(theme)[lightOrDark];
          return base16Theme;
        },
        useJSONTreeStyling = () => {
          const base16Theme = useCreateJSONTreeBase16Theme(),
            styling = createStyling(getJsonTreeTheme, {
              defaultBase16: base16Theme,
            })(base16Theme);
          return { theme: getJsonTreeTheme(base16Theme), styling };
        },
        defaultValueRenderer = (_, value) => {
          const parsedValue = stringifyAtomValue(value);
          return parsedValue === ErrorSymbol
            ? 'Failed to parse the value'
            : parsedValue;
        },
        JSONTree = (props) => {
          const JSONTreeStyling = useJSONTreeStyling(),
            { shouldExpandJsonTreeViewInitially } = useDevToolsOptionsValue(),
            memoizedShouldExpandNodeInitially = _react.useCallback.call(
              void 0,
              () => !!shouldExpandJsonTreeViewInitially,
              [shouldExpandJsonTreeViewInitially],
            );
          return React38.default.createElement(
            _core.Box,
            {
              className: JSONTree_module_default.monoSpaceFonts,
              'data-testid': 'json-tree-view-container',
            },
            React38.default.createElement(_reactjsontree.JSONTree, {
              hideRoot: !0,
              shouldExpandNodeInitially: memoizedShouldExpandNodeInitially,
              theme: JSONTreeStyling.theme,
              getItemString,
              valueRenderer: defaultValueRenderer,
              ...props,
            }),
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var key3 = generateLocalStorageKey('atom-value-viewer', 0),
        atomValueViewer = _utils.atomWithStorage.call(
          void 0,
          key3,
          'raw-value',
        ),
        AtomValue_module_default = {};
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _codehighlight = __webpack_require__(
          './node_modules/.pnpm/@mantine+code-highlight@7.6.0_@mantine+core@7.6.0_@mantine+hooks@7.6.0_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/code-highlight/cjs/index.cjs',
        ),
        CodeSyntaxHighlighter = ({ children, ...rest }) =>
          React8.createElement(
            _codehighlight.CodeHighlight,
            { ...rest },
            children,
          ),
        MemoizedValueRenderer = React9.memo(({ value }) =>
          React9.createElement(CodeSyntaxHighlighter, {
            code: value,
            language: 'javascript',
            mb: 10,
            copyLabel: 'Copy value',
            'data-testid': 'atom-parsed-value',
          }),
        ),
        supportedTreeValueTypes = ['object', 'array', 'atom'],
        AtomValue = ({ atomValue }) => {
          const [atomValueViewer2, setSelectedValueViewer] =
              _react2.useAtom.call(
                void 0,
                atomValueViewer,
                useDevtoolsJotaiStoreOptions(),
              ),
            parsedValue = stringifyAtomValue(atomValue),
            handleOnTabChange = _react.useCallback.call(
              void 0,
              (value) => {
                value && setSelectedValueViewer(value);
              },
              [setSelectedValueViewer],
            );
          if (parsedValue === ErrorSymbol)
            return React38.default.createElement(
              _core.Box,
              null,
              React38.default.createElement(
                _core.Text,
                { component: 'span', fw: 'bold', mb: 'sm' },
                'Raw value',
              ),
              React38.default.createElement(ErrorMessage, {
                message: 'Failed to parse the value of the atom',
              }),
            );
          const typeOfValue = getTypeOfAtomValue(atomValue);
          return supportedTreeValueTypes.includes(typeOfValue)
            ? React38.default.createElement(
                _core.Box,
                null,
                React38.default.createElement(
                  _core.Text,
                  {
                    component: 'span',
                    fw: 'bold',
                    mb: 'sm',
                    className: AtomValue_module_default.valueText,
                  },
                  'Value',
                ),
                React38.default.createElement(
                  _core.Tabs,
                  {
                    defaultValue: 'raw-value',
                    keepMounted: !1,
                    id: 'jotai-devtools-atom-viewer-value-tabs',
                    value: atomValueViewer2,
                    onChange: handleOnTabChange,
                  },
                  React38.default.createElement(
                    _core.Tabs.List,
                    null,
                    React38.default.createElement(
                      _core.Tabs.Tab,
                      {
                        className: AtomValue_module_default.RawValue,
                        value: 'raw-value',
                        leftSection: React38.default.createElement(
                          IconSourceCode,
                          { size: '0.9rem', stroke: '1.75' },
                        ),
                      },
                      'Raw value',
                    ),
                    React38.default.createElement(
                      _core.Tabs.Tab,
                      {
                        className: AtomValue_module_default.TreeView,
                        value: 'json-tree',
                        leftSection: React38.default.createElement(
                          IconBinaryTree2,
                          { size: '0.9rem', stroke: '1.75' },
                        ),
                      },
                      'Tree view',
                    ),
                  ),
                  React38.default.createElement(
                    _core.Tabs.Panel,
                    { value: 'raw-value', pt: 'xs' },
                    React38.default.createElement(MemoizedValueRenderer, {
                      value: parsedValue,
                    }),
                  ),
                  React38.default.createElement(
                    _core.Tabs.Panel,
                    {
                      value: 'json-tree',
                      pt: 'xs',
                      'data-testid': 'json-tree-panel',
                    },
                    React38.default.createElement(JSONTree, {
                      data: atomValue,
                    }),
                  ),
                ),
              )
            : React38.default.createElement(
                _core.Box,
                null,
                React38.default.createElement(
                  _core.Text,
                  { component: 'div', fw: 'bold', mb: 'sm' },
                  'Raw value',
                ),
                React38.default.createElement(MemoizedValueRenderer, {
                  value: parsedValue,
                }),
              );
        },
        DisplayAtomDetails_module_default = {},
        DisplayAtomDetails = ({ atom: atom8 }) => {
          const atomValue = useInternalAtomValue(atom8),
            atomValueType = getTypeOfAtomValue(atomValue);
          return React38.default.createElement(
            _core.Stack,
            { h: 'auto' },
            React38.default.createElement(
              _core.Title,
              {
                size: 'h3',
                className: DisplayAtomDetails_module_default.atomDetailsText,
              },
              'Atom Details',
            ),
            React38.default.createElement(AtomMetaDetails, {
              debugLabel: atomToPrintable(atom8),
              atomValueType,
              isAtomPrivate: _optionalChain([
                atom8,
                'optionalAccess',
                (_15) => _15.debugPrivate,
              ]),
            }),
            React38.default.createElement(AtomValue, { atomValue }),
            React38.default.createElement(AtomDependentsList, { atom: atom8 }),
          );
        },
        AtomDetail = React12.memo(() => {
          const selectedAtomData = _react2.useAtomValue.call(
              void 0,
              selectedAtomAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            loaderProps = { color: useThemeMode('dark', 'white') };
          return selectedAtomData
            ? React12.createElement(
                React12.Suspense,
                {
                  fallback: React12.createElement(_core.LoadingOverlay, {
                    visible: !0,
                    overlayProps: { blur: 2 },
                    loaderProps,
                  }),
                },
                React12.createElement(DisplayAtomDetails, {
                  atom: selectedAtomData.atom,
                }),
              )
            : React12.createElement(
                _core.Box,
                { className: AtomDetail_module_default.messageBoxWrapper },
                React12.createElement(
                  _core.Text,
                  { component: 'div', w: '100%', ta: 'center' },
                  'Select an atom from the left panel to view the details',
                  ' ',
                ),
              );
        });
      (AtomDetail.displayName = 'AtomDetail'),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var ActionListItem_module_default = {},
        ActionListItem = React13.memo(
          React13.forwardRef(
            ({ label, onClick, id, isActive, ...rest }, ref) => {
              const handleOnClick = React13.useCallback(
                () => onClick(id),
                [onClick, id],
              );
              return React13.createElement(_core.NavLink, {
                ...rest,
                ref,
                label: React13.useMemo(
                  () =>
                    React13.createElement(
                      _core.Text,
                      {
                        component: 'div',
                        className: ActionListItem_module_default.monoSpaceFonts,
                      },
                      label,
                    ),
                  [label],
                ),
                variant: 'filled',
                className: ActionListItem_module_default.navLink,
                active: isActive,
                color: useThemeMode('dark', 'gray'),
                onClick: handleOnClick,
                rightSection: React13.useMemo(
                  () =>
                    React13.createElement(IconChevronRight, {
                      size: 12,
                      stroke: 1.5,
                    }),
                  [],
                ),
              });
            },
          ),
        );
      ActionListItem.displayName = 'ActionListItem';
      var AtomList_module_default = {},
        SearchAtoms = React14.memo(() => {
          const [userInput, setUserInput] = _react2.useAtom.call(
            void 0,
            searchInputAtom,
            useDevtoolsJotaiStoreOptions(),
          );
          return React14.createElement(_core.TextInput, {
            label: 'Search',
            placeholder: 'atom debug label',
            pt: 10,
            pb: 10,
            className: AtomList_module_default.text,
            value: userInput,
            onChange: (event) => {
              const {
                target: { value },
              } = event;
              setUserInput(value);
            },
            id: 'jotai-devtools-atom-debug-search-input',
          });
        }),
        AtomList = () => {
          useSyncSnapshotValuesToAtom();
          const values = _react2.useAtomValue.call(
              void 0,
              filteredValuesAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            [selectedAtomData, setSelectedAtomAtom] = _react2.useAtom.call(
              void 0,
              selectedAtomAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            valuesRef = React14.useRef(values);
          React14.useEffect(() => {
            valuesRef.current = values;
          }, [values]);
          const handleOnClick = React14.useCallback(
              (pos) => {
                if ('string' == typeof pos)
                  throw new Error('Invalid atom position, must be a number');
                if (!valuesRef.current[pos])
                  throw new Error(`Unable to find atom at ${pos} index`);
                setSelectedAtomAtom((currValue) => {
                  const foundAtom = _optionalChain([
                    valuesRef,
                    'access',
                    (_16) => _16.current,
                    'access',
                    (_17) => _17[pos],
                    'optionalAccess',
                    (_18) => _18[0],
                  ]);
                  if (
                    foundAtom &&
                    _optionalChain([
                      currValue,
                      'optionalAccess',
                      (_19) => _19.atomKey,
                    ]) !==
                      _optionalChain([
                        foundAtom,
                        'optionalAccess',
                        (_20) => _20.toString,
                        'call',
                        (_21) => _21(),
                      ])
                  )
                    return {
                      atomKey: _optionalChain([
                        foundAtom,
                        'optionalAccess',
                        (_22) => _22.toString,
                        'call',
                        (_23) => _23(),
                      ]),
                      atom: foundAtom,
                    };
                });
              },
              [setSelectedAtomAtom],
            ),
            atomItems = React14.useMemo(
              () =>
                values.map(([atom8], i) => {
                  const atomKey = atom8.toString();
                  return React14.createElement(ActionListItem, {
                    key: `atom-list-item-${atomKey + i}`,
                    label: atomToPrintable(atom8),
                    onClick: handleOnClick,
                    id: i,
                    isActive:
                      _optionalChain([
                        selectedAtomData,
                        'optionalAccess',
                        (_24) => _24.atomKey,
                      ]) === atomKey,
                  });
                }),
              [values, selectedAtomData, handleOnClick],
            ),
            noResultsFound = !values.length;
          return React14.createElement(
            React14.Fragment,
            null,
            React14.createElement(SearchAtoms, null),
            React14.createElement(
              _core.Box,
              { className: AtomList_module_default.atomItemsWrapper },
              atomItems,
            ),
            noResultsFound &&
              React14.createElement(
                _core.Group,
                { mt: 20, justify: 'center' },
                React14.createElement(IconAlertCircle, { size: 16 }),
                React14.createElement(
                  _core.Text,
                  {
                    fz: 'sm',
                    ml: 0,
                    'data-testid': 'atom-list-no-atoms-found-message',
                  },
                  'No Atoms found!',
                ),
              ),
          );
        };
      React15.memo(() =>
        React15.createElement(
          _reactresizablepanels.PanelGroup,
          { direction: 'horizontal' },
          React15.createElement(
            _reactresizablepanels.Panel,
            {
              defaultSize: 50,
              minSize: 30,
              className: AtomViewer_module_default.panel,
            },
            React15.createElement(
              _core.Flex,
              {
                p: 10,
                pt: 0,
                h: '100%',
                direction: 'column',
                className: AtomViewer_module_default.atomListWrapper,
              },
              React15.createElement(AtomList, null),
            ),
          ),
          React15.createElement(PanelResizeHandle, null),
          React15.createElement(
            _reactresizablepanels.Panel,
            {
              defaultSize: 50,
              minSize: 30,
              className: AtomViewer_module_default.panel,
            },
            React15.createElement(
              _core.Flex,
              { p: 10, h: '100%', direction: 'column', pos: 'relative' },
              React15.createElement(AtomDetail, null),
            ),
          ),
        ),
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      __webpack_require__(
        './node_modules/.pnpm/react-error-boundary@4.0.12_react@18.2.0/node_modules/react-error-boundary/dist/react-error-boundary.esm.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var ThemeToggle = () => {
          const { colorScheme, toggleColorScheme } =
              _core.useMantineColorScheme.call(void 0),
            dark = 'dark' === colorScheme;
          return React38.default.createElement(
            _core.ActionIcon,
            {
              variant: 'filled',
              color: dark ? 'gray' : 'dark',
              onClick: () => toggleColorScheme(),
              title: 'Toggle color scheme',
            },
            dark
              ? React38.default.createElement(IconSun, { size: 16 })
              : React38.default.createElement(IconMoonStars, { size: 16 }),
          );
        },
        Header_module_default = {},
        Header = React18.memo(() => {
          const themedColor = useThemeMode('dark', 'grey'),
            setIsShellOpen = _react2.useSetAtom.call(
              void 0,
              isShellOpenAtom,
              useDevtoolsJotaiStoreOptions(),
            );
          return React18.createElement(
            _core.Box,
            { className: Header_module_default.header },
            React18.createElement(
              _core.Flex,
              { justify: 'space-between', align: 'center', p: 10 },
              React18.createElement(
                _core.Group,
                { mr: 10 },
                React18.createElement(
                  _core.Title,
                  { size: 'h4', className: Header_module_default.logo },
                  '👻 Jōtai DevTools',
                ),
                React18.createElement(
                  _core.Badge,
                  { color: 'orange', variant: 'light', size: 'xs' },
                  'Alpha',
                ),
              ),
              React18.createElement(
                _core.Flex,
                { align: 'center' },
                React18.createElement(ThemeToggle, null),
                React18.createElement(
                  _core.ActionIcon,
                  {
                    ml: 10,
                    title: 'Minimize panel',
                    radius: 'md',
                    variant: 'subtle',
                    color: themedColor,
                    onClick: () => setIsShellOpen(!1),
                  },
                  React18.createElement(IconMinus, { size: 16, color: '#fff' }),
                ),
              ),
            ),
          );
        });
      (Header.displayName = 'Header'),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var TabsHeader_module_default = {};
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _hooks = __webpack_require__(
        './node_modules/.pnpm/@mantine+hooks@7.6.0_react@18.2.0/node_modules/@mantine/hooks/cjs/index.cjs',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var snapshotHistoryAtom = _vanilla.atom.call(void 0, []),
        useSetSnapshotHistory = () =>
          _react2.useSetAtom.call(
            void 0,
            snapshotHistoryAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
        shouldRecordSnapshotHistoryKey = generateLocalStorageKey(
          'should-record-snapshot-history',
          0,
        ),
        shouldRecordSnapshotHistoryAtom = _utils.atomWithStorage.call(
          void 0,
          shouldRecordSnapshotHistoryKey,
          !1,
        ),
        useShouldRecordSnapshotHistoryValue = () =>
          _react2.useAtomValue.call(
            void 0,
            shouldRecordSnapshotHistoryAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
        selectedSnapshotIdHolderAtom = _vanilla.atom.call(void 0, void 0),
        selectedSnapshotIdAtom = _vanilla.atom.call(
          void 0,
          (get) => {
            const snapshotHistory = get(snapshotHistoryAtom),
              selectedSnapshotId = get(selectedSnapshotIdHolderAtom);
            if (snapshotHistory && selectedSnapshotId) {
              const findSnapshotByIdResult =
                ((id = selectedSnapshotId),
                snapshotHistory.find((snapshot) => snapshot.id === id));
              return _optionalChain([
                findSnapshotByIdResult,
                'optionalAccess',
                (_34) => _34.id,
              ]) && !findSnapshotByIdResult.isHidden
                ? findSnapshotByIdResult.id
                : void 0;
            }
            var id;
          },
          (_, set, nextId) => {
            set(selectedSnapshotIdHolderAtom, nextId);
          },
        ),
        useSetSelectedSnapshotId = () =>
          _react2.useSetAtom.call(
            void 0,
            selectedSnapshotIdAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
        searchInputInternalValueAtom2 = _vanilla.atom.call(void 0, ''),
        filteredSnapshotHistoryAtom = _utils.atomWithDefault.call(
          void 0,
          (get) =>
            ((searchString, defaultSnapshots) => {
              const normalizedStr = searchString.trim().toLocaleLowerCase();
              return normalizedStr
                ? defaultSnapshots.filter(({ label }) =>
                    String(label).includes(normalizedStr),
                  )
                : defaultSnapshots;
            })(
              get(searchInputInternalValueAtom2),
              get(snapshotHistoryAtom),
            ).filter((snapshot) => !snapshot.isHidden),
        ),
        useFilteredSnapshotHistoryAtomValue = () =>
          _react2.useAtomValue.call(
            void 0,
            filteredSnapshotHistoryAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
        shouldAutoScrollAtom = _vanilla.atom.call(void 0, !1),
        isTimeTravelingAtom = _vanilla.atom.call(void 0, !1),
        snapshotSliderCurrentStepValueHolderAtom = _vanilla.atom.call(
          void 0,
          0,
        ),
        snapshotSliderCurrentStepAtom = _vanilla.atom.call(
          void 0,
          (get) => get(snapshotSliderCurrentStepValueHolderAtom),
          (get, set, nextStep, gotoAtomsSnapshot) => {
            const idx = Math.round(nextStep / get(snapshotSliderAtom).step - 1),
              foundSnapshotHistory = get(filteredSnapshotHistoryAtom)[idx];
            foundSnapshotHistory
              ? (set(selectedSnapshotIdAtom, foundSnapshotHistory.id),
                set(shouldAutoScrollAtom, 'center'),
                get(isTimeTravelingAtom)
                  ? gotoAtomsSnapshot(foundSnapshotHistory.value)
                  : (set(isTimeTravelingAtom, !0),
                    gotoAtomsSnapshot(foundSnapshotHistory.value),
                    set(isTimeTravelingAtom, !1)))
              : set(selectedSnapshotIdAtom, void 0),
              set(snapshotSliderCurrentStepValueHolderAtom, nextStep);
          },
        ),
        snapshotSliderAtom = _vanilla.atom.call(
          void 0,
          (get) => {
            const filteredSnapshotHistory = get(filteredSnapshotHistoryAtom),
              step = (arrayLength = filteredSnapshotHistory.length)
                ? 1 === arrayLength
                  ? 100
                  : 100 / (arrayLength - 1)
                : 0;
            var arrayLength;
            const max = filteredSnapshotHistory.length * step;
            return {
              value: get(snapshotSliderCurrentStepAtom),
              step,
              isSlidePossible: 0 !== filteredSnapshotHistory.length,
              min: 0,
              max,
            };
          },
          (_, set, ...args) => set(snapshotSliderCurrentStepAtom, ...args),
        ),
        useSnapshotSliderValue = () =>
          _react2.useAtomValue.call(
            void 0,
            snapshotSliderAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
        manualTimeTravelAtom = _vanilla.atom.call(
          void 0,
          (get) => {
            const { value, min, max, step } = get(snapshotSliderAtom);
            return {
              prev: {
                isPossible: value !== min,
                value: Math.max(value - step, min),
              },
              next: {
                isPossible: value !== max,
                value: Math.min(value + step, max),
              },
              initial: min,
            };
          },
          (_, set, ...args) => set(snapshotSliderAtom, ...args),
        ),
        useTimeTravelNavigateActions = () => {
          const [{ prev, next, initial }, setSliderValueRaw] =
              _react2.useAtom.call(
                void 0,
                manualTimeTravelAtom,
                useDevtoolsJotaiStoreOptions(),
              ),
            gotoAtomsSnapshot = _chunk5K6HCVT2cjsjs.useGotoAtomsSnapshot.call(
              void 0,
              useUserStoreOptions(),
            ),
            setSliderValue = _react.useCallback.call(
              void 0,
              (nextStep) => {
                setSliderValueRaw(nextStep, gotoAtomsSnapshot);
              },
              [setSliderValueRaw, gotoAtomsSnapshot],
            ),
            { isSlidePossible } = useSnapshotSliderValue(),
            reset = _react.useCallback.call(
              void 0,
              () => {
                isSlidePossible && setSliderValue(initial);
              },
              [initial, isSlidePossible, setSliderValue],
            ),
            onPrevClick = _react.useCallback.call(
              void 0,
              () => {
                isSlidePossible && setSliderValue(prev.value);
              },
              [prev, isSlidePossible, setSliderValue],
            ),
            onNextClick = _react.useCallback.call(
              void 0,
              () => {
                isSlidePossible && setSliderValue(next.value);
              },
              [next, isSlidePossible, setSliderValue],
            );
          return {
            prev: { isPossible: prev.isPossible, onClick: onPrevClick },
            next: { isPossible: next.isPossible, onClick: onNextClick },
            reset,
            setSliderValue,
          };
        },
        defaultPlaybackOptions = {
          '0.5x': 0.5,
          '1x': 1,
          '1.5x': 1.5,
          '1.75x': 1.75,
          '2x': 2,
        },
        playbackSpeedKey = generateLocalStorageKey('playback-speed', 0),
        playbackSpeedOptionInternalAtom = _utils.atomWithStorage.call(
          void 0,
          playbackSpeedKey,
          '1x',
        ),
        usePlaybackSpeed = () => {
          const { timeTravelPlaybackInterval } = useDevToolsOptionsValue(),
            playbackSpeedOption = _react2.useAtomValue.call(
              void 0,
              playbackSpeedOptionInternalAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            nextSpeed =
              timeTravelPlaybackInterval /
              defaultPlaybackOptions[playbackSpeedOption];
          return Math.max(nextSpeed, 0);
        },
        useTimeTravel = () => {
          const { value, max, isSlidePossible } = useSnapshotSliderValue(),
            [isTimeTraveling, setIsTimeTraveling] = _react2.useAtom.call(
              void 0,
              isTimeTravelingAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            { next, reset } = useTimeTravelNavigateActions(),
            [isPlaying, setIsPlaying] = _react.useState.call(void 0, !1),
            onFinish = _react.useCallback.call(
              void 0,
              () => {
                setIsTimeTraveling(!1), setIsPlaying(!1);
              },
              [setIsTimeTraveling],
            ),
            interval = ((enabled, cb) => {
              const playbackSpeed = usePlaybackSpeed(),
                interval = _hooks.useInterval.call(void 0, cb, playbackSpeed);
              return (
                _react.useEffect.call(
                  void 0,
                  () => (enabled && interval.start(), interval.stop()),
                  [enabled, interval, cb],
                ),
                interval
              );
            })(isPlaying, next.onClick),
            triggerReset = _react.useCallback.call(
              void 0,
              () => {
                isSlidePossible && value === max && !interval.active && reset();
              },
              [isSlidePossible, value, max, interval.active, reset],
            );
          _react.useEffect.call(
            void 0,
            () => {
              (!isSlidePossible || (value === max && isTimeTraveling)) &&
                (interval.stop(), onFinish());
            },
            [value, max, isTimeTraveling, onFinish, interval, isSlidePossible],
          );
          return {
            isTimeTraveling: isPlaying,
            onTimeTravelToggle: _react.useCallback.call(
              void 0,
              () => {
                setIsPlaying((prev) => !prev),
                  setIsTimeTraveling((prev) => !prev && (triggerReset(), !0));
              },
              [triggerReset, setIsTimeTraveling],
            ),
          };
        },
        TabsHeader = React20.memo(() => {
          const isSnapshotRecordingOn = useShouldRecordSnapshotHistoryValue();
          return React20.createElement(
            _core.Tabs.List,
            null,
            React20.createElement(
              _core.Tabs.Tab,
              {
                value: 'atom-viewer',
                leftSection: React20.createElement(IconLayoutList, {
                  size: 14,
                }),
                classNames: {
                  tab: TabsHeader_module_default.tab,
                  tabLabel: TabsHeader_module_default.tabLabel,
                  tabSection: TabsHeader_module_default.tabSection,
                },
              },
              'Atom Viewer',
            ),
            React20.createElement(
              _core.Tabs.Tab,
              {
                value: 'time-travel',
                leftSection: React20.createElement(IconTimeline, { size: 14 }),
                pr: isSnapshotRecordingOn ? 'xl' : 'md',
                classNames: {
                  tab: TabsHeader_module_default.tab,
                  tabLabel: TabsHeader_module_default.tabLabel,
                  tabSection: TabsHeader_module_default.tabSection,
                },
              },
              isSnapshotRecordingOn
                ? React20.createElement(
                    _core.Indicator,
                    {
                      withBorder: !0,
                      inline: !0,
                      processing: !0,
                      size: 8,
                      offset: -12,
                      color: 'red',
                      position: 'middle-end',
                      'data-testid':
                        'jotai-devtools-time-travel-recording-indicator',
                    },
                    'Time travel',
                  )
                : 'Time travel',
            ),
          );
        });
      (TabsHeader.displayName = 'TabsHeader'),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var options = Object.keys(defaultPlaybackOptions),
        PlaybackSpeedDropdown = () => {
          const [value, setOption] = _react2.useAtom.call(
            void 0,
            playbackSpeedOptionInternalAtom,
            useDevtoolsJotaiStoreOptions(),
          );
          return React38.default.createElement(_core.Select, {
            value,
            data: options,
            defaultValue: '1x',
            onChange: (value2) => {
              if (((value) => options.includes(value))(value2))
                return setOption(value2);
              if (null !== value2)
                throw new Error(
                  `[jotai-devtools]: invalid playback option: ${value2}`,
                );
            },
            size: 'xs',
            maw: 80,
            color: 'dark',
            id: 'jotai-devtools-playback-speed-dropdown',
            'data-testid': 'jotai-devtools-playback-speed-dropdown',
            comboboxProps: { position: 'top' },
          });
        },
        PlayBar_module_default = {},
        PlayBar = () => {
          const { step, isSlidePossible, max, value } =
              useSnapshotSliderValue(),
            { prev, next, setSliderValue } = useTimeTravelNavigateActions(),
            { isTimeTraveling, onTimeTravelToggle } = useTimeTravel(),
            isDisabled = !isSlidePossible;
          return React38.default.createElement(
            _core.Box,
            { className: PlayBar_module_default.playBarWrapper },
            React38.default.createElement(
              _core.ActionIcon,
              {
                variant: 'filled',
                color: useThemeMode('dark', 'gray'),
                disabled: isDisabled,
                onClick: onTimeTravelToggle,
                title: isTimeTraveling
                  ? 'Pause time travel'
                  : 'Start time travel',
              },
              isTimeTraveling
                ? React38.default.createElement(IconPlayerPauseFilled, {
                    size: 16,
                  })
                : React38.default.createElement(IconPlayerPlayFilled, {
                    size: 16,
                  }),
            ),
            React38.default.createElement(_core.Slider, {
              value,
              label: null,
              size: 'xs',
              max,
              disabled: isDisabled,
              step,
              onChange: (value2) => {
                setSliderValue(value2);
              },
              classNames: {
                bar: PlayBar_module_default.bar,
                thumb: PlayBar_module_default.thumb,
                markLabel: PlayBar_module_default.markLabel,
                root: PlayBar_module_default.root,
              },
            }),
            React38.default.createElement(
              _core.Group,
              null,
              React38.default.createElement(
                _core.ActionIcon,
                {
                  variant: 'default',
                  color: useThemeMode('dark', 'gray'),
                  'aria-label': 'Restore previous snapshot',
                  title: 'Restore previous snapshot',
                  disabled: isDisabled || isTimeTraveling || !prev.isPossible,
                  onClick: prev.onClick,
                },
                React38.default.createElement(IconChevronLeft, { size: 16 }),
              ),
              React38.default.createElement(
                _core.ActionIcon,
                {
                  variant: 'default',
                  color: useThemeMode('dark', 'gray'),
                  'aria-label': 'Restore next snapshot',
                  title: 'Restore next snapshot',
                  disabled: isDisabled || isTimeTraveling || !next.isPossible,
                  onClick: next.onClick,
                },
                React38.default.createElement(IconChevronRight, { size: 16 }),
              ),
            ),
            React38.default.createElement(PlaybackSpeedDropdown, null),
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _jsondiffpatch = __webpack_require__(
          './node_modules/.pnpm/jsondiffpatch@0.5.0/node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js',
        ),
        defaultObjectHash = (o, idx) =>
          (null === o
            ? '$$null'
            : o && (o.id || 0 === o.id) && `$$id:${JSON.stringify(o.id)}`) ||
          (o && (o._id || 0 === o._id) && `$$_id:${JSON.stringify(o._id)}`) ||
          `$$index:${idx}`,
        defaultPropertyFilter = (name, context) =>
          'function' != typeof context.left[name] &&
          'function' != typeof context.right[name],
        defaultDiffPatcher = new (0, _jsondiffpatch.DiffPatcher)({
          arrays: { detectMove: !1 },
          objectHash: defaultObjectHash,
          propertyFilter: defaultPropertyFilter,
        });
      var STATES_EQUAL_SYMBOL = Symbol('STATES_EQUAL_SYMBOL'),
        selectedSnapshotDetailAtom = _vanilla.atom.call(void 0, (get) => {
          const selectedSnapshotId = get(selectedSnapshotIdAtom),
            snapshotHistory = get(snapshotHistoryAtom);
          if (snapshotHistory.length) {
            const selectedSnapshotIdx = selectedSnapshotId
              ? snapshotHistory.findIndex(
                  (snapshot) => snapshot.id === selectedSnapshotId,
                )
              : snapshotHistory.length - 1;
            if (selectedSnapshotIdx >= 0) {
              const fromState =
                  snapshotHistory[
                    selectedSnapshotIdx > 0 ? selectedSnapshotIdx - 1 : 0
                  ],
                toState = snapshotHistory[selectedSnapshotIdx];
              if (fromState && toState) {
                const diff =
                  (function createDiffPatcher(objectHash, propertyFilter) {
                    return objectHash || propertyFilter
                      ? new (0, _jsondiffpatch.DiffPatcher)({
                          arrays: { detectMove: !1 },
                          objectHash: objectHash || defaultObjectHash,
                          propertyFilter:
                            propertyFilter || defaultPropertyFilter,
                        })
                      : defaultDiffPatcher;
                  })().diff(fromState.displayValues, toState.displayValues) ||
                  STATES_EQUAL_SYMBOL;
                return {
                  id: toState.id,
                  label: selectedSnapshotId ? toState.label : void 0,
                  displayValues: toState.displayValues,
                  diff,
                  isRestorable:
                    diff !== STATES_EQUAL_SYMBOL &&
                    selectedSnapshotIdx !== snapshotHistory.length - 1,
                  timestamp: toState.timestamp,
                  value: toState.value,
                };
              }
            }
          }
        });
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var commonStyles = { section: { marginRight: '0.325rem' } },
        rotateButtonStyles = {
          section: { ...commonStyles.section, transform: 'rotate(130deg)' },
        },
        SnapshotActions = (props) => {
          const [justRestored, setJustRestored] = _react.useState.call(
              void 0,
              !1,
            ),
            gotoSnapshot = _chunk5K6HCVT2cjsjs.useGotoAtomsSnapshot.call(
              void 0,
              useUserStoreOptions(),
            ),
            isTimeTraveling = _react2.useAtomValue.call(
              void 0,
              isTimeTravelingAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            { start, clear } = _hooks.useTimeout.call(
              void 0,
              () => setJustRestored(!1),
              1750,
            );
          _react.useEffect.call(void 0, () => clear, [clear]);
          return React38.default.createElement(
            _core.Box,
            null,
            React38.default.createElement(
              _core.Title,
              { size: 'h5', mb: 10 },
              'Actions',
            ),
            React38.default.createElement(
              _core.Button,
              {
                title: 'Restore this state',
                onClick: () => {
                  setJustRestored(!0),
                    start(),
                    gotoSnapshot(props.snapshotToGoTo);
                },
                variant: 'default',
                styles: justRestored ? commonStyles : rotateButtonStyles,
                leftSection: justRestored
                  ? React38.default.createElement(IconCircleCheck, {
                      size: '0.8rem',
                    })
                  : React38.default.createElement(IconRotate2, {
                      size: '0.8rem',
                    }),
                disabled:
                  !props.isRestorable || isTimeTraveling || justRestored,
                size: 'xs',
              },
              justRestored ? 'Restored' : 'Restore',
            ),
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var SnapshotMetaDetails = (props) =>
        React38.default.createElement(
          _core.Box,
          null,
          React38.default.createElement(
            _core.Title,
            { size: 'h5', mb: 10, c: '#fff' },
            'Meta',
          ),
          React38.default.createElement(MetaInfo, {
            label: 'Timestamp',
            value: props.timestamp,
          }),
        );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var _jotai = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/index.js',
        ),
        key4 = generateLocalStorageKey('snapshot-value-viewer', 0),
        snapshotValueViewer = _utils.atomWithStorage.call(void 0, key4, 'diff');
      function stringifyAndShrink(val) {
        if (null === val) return 'null';
        const str = stringifyAtomValue(val);
        return str === ErrorSymbol
          ? 'UNABLE_TO_PARSE'
          : str.length > 42
            ? str.substring(0, 30) + '…' + str.slice(-10)
            : str;
      }
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var prepareDelta = (value) => {
          if (value && 'a' === value._t) {
            const res = {};
            for (const key5 in value)
              '_t' !== key5 &&
                ('_' !== key5[0] || value[key5.substring(1)]
                  ? value['_' + key5]
                    ? (res[key5] = [value['_' + key5][0], value[key5][0]])
                    : value['_' + key5] ||
                      '_' === key5[0] ||
                      (res[key5] = value[key5])
                  : (res[key5.substring(1)] = value[key5]));
            return res;
          }
          return value;
        },
        TreeView = (props) => {
          const JSONTreeStyling = useJSONTreeStyling(),
            memoizedValueRenderer = _react.useCallback.call(
              void 0,
              (valueAsString, value) =>
                ((valueAsString, value, styling) => {
                  function renderSpan(name, body) {
                    return React38.default.createElement(
                      'span',
                      { key: name, ...styling(['diff', name]) },
                      body,
                    );
                  }
                  if (Array.isArray(value))
                    switch (value.length) {
                      case 1:
                        return renderSpan(
                          'diffAdd',
                          stringifyAndShrink(value[0]),
                        );
                      case 2:
                        return React38.default.createElement(
                          React38.default.Fragment,
                          null,
                          renderSpan(
                            'diffUpdateFrom',
                            stringifyAndShrink(value[0]),
                          ),
                          renderSpan('diffUpdateArrow', ' => '),
                          renderSpan(
                            'diffUpdateTo',
                            stringifyAndShrink(value[1]),
                          ),
                        );
                      case 3:
                        return renderSpan(
                          'diffRemove',
                          stringifyAndShrink(value[0]),
                        );
                    }
                  return React38.default.createElement(
                    React38.default.Fragment,
                    null,
                    valueAsString,
                  );
                })(valueAsString, value, JSONTreeStyling.styling),
              [JSONTreeStyling.styling],
            );
          return props.diff === STATES_EQUAL_SYMBOL
            ? React38.default.createElement(
                _core.Code,
                null,
                '(states are equal)',
              )
            : React38.default.createElement(JSONTree, {
                data: props.diff,
                valueRenderer: memoizedValueRenderer,
                postprocessValue: prepareDelta,
                getItemString: getItemStringWithDiffEnabled,
                isCustomNode: Array.isArray,
              });
        },
        SnapshotValue = (props) => {
          const [snapshotValueViewer3, setSnapshotValueViewer] =
              _jotai.useAtom.call(
                void 0,
                snapshotValueViewer,
                useDevtoolsJotaiStoreOptions(),
              ),
            handleOnTabChange = _react.useCallback.call(
              void 0,
              (value) => {
                value && setSnapshotValueViewer(value);
              },
              [setSnapshotValueViewer],
            );
          return React38.default.createElement(
            _core.Box,
            null,
            React38.default.createElement(
              _core.Title,
              { size: 'h5', mb: 10, c: '#fff' },
              'Value',
            ),
            React38.default.createElement(
              _core.Tabs,
              {
                defaultValue: 'state',
                keepMounted: !1,
                id: 'jotai-devtools-time-travel-value-tabs',
                value: snapshotValueViewer3,
                onChange: handleOnTabChange,
              },
              React38.default.createElement(
                _core.Tabs.List,
                null,
                React38.default.createElement(
                  _core.Tabs.Tab,
                  {
                    className: 'tab',
                    value: 'state',
                    leftSection: React38.default.createElement(IconFileCode, {
                      size: '0.9rem',
                      stroke: '1.75',
                    }),
                  },
                  'State',
                ),
                React38.default.createElement(
                  _core.Tabs.Tab,
                  {
                    className: 'tab2',
                    value: 'diff',
                    leftSection: React38.default.createElement(IconFileDiff, {
                      size: '0.9rem',
                      stroke: '1.75',
                    }),
                  },
                  'Diff',
                ),
              ),
              React38.default.createElement(
                _core.Tabs.Panel,
                { value: 'state', pt: 'xs' },
                React38.default.createElement(JSONTree, {
                  data: props.state.displayValues,
                }),
              ),
              React38.default.createElement(
                _core.Tabs.Panel,
                {
                  value: 'diff',
                  pt: 'xs',
                  'data-testid': 'jotai-devtools-diff-panel',
                },
                React38.default.createElement(TreeView, {
                  diff: props.state.diff,
                }),
              ),
            ),
          );
        },
        DisplaySnapshotDetails = (props) =>
          React38.default.createElement(
            _core.Stack,
            { h: 'auto', pb: 'sm', c: '#fff' },
            React38.default.createElement(
              _core.Title,
              { size: 'h3' },
              'Snapshot ',
              props.details.label,
            ),
            React38.default.createElement(SnapshotMetaDetails, {
              timestamp: props.details.timestamp,
            }),
            React38.default.createElement(SnapshotValue, {
              state: props.details,
            }),
            React38.default.createElement(SnapshotActions, {
              snapshotToGoTo: props.details.value,
              isRestorable: props.details.isRestorable,
              key: props.details.id,
            }),
          ),
        SnapshotDetail_module_default = {},
        SnapshotDetail = React28.memo(() => {
          const selectedSnapshotDetail = _react2.useAtomValue.call(
              void 0,
              selectedSnapshotDetailAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            loaderProps = { color: useThemeMode('dark', 'white') };
          return selectedSnapshotDetail
            ? React28.createElement(
                React28.Suspense,
                {
                  fallback: React28.createElement(_core.LoadingOverlay, {
                    visible: !0,
                    overlayProps: { blur: 2 },
                    loaderProps,
                  }),
                },
                React28.createElement(DisplaySnapshotDetails, {
                  details: selectedSnapshotDetail,
                }),
              )
            : React28.createElement(
                _core.Box,
                { className: SnapshotDetail_module_default.messageBoxWrapper },
                React28.createElement(
                  _core.Text,
                  { component: 'div', w: '100%', ta: 'center' },
                  'Select a snapshot from the left panel to view the details',
                ),
              );
        });
      (SnapshotDetail.displayName = 'SnapshotDetail'),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var ClearHistory = () => {
          const filteredSnapshotHistory = useFilteredSnapshotHistoryAtomValue(),
            setSnapshotHistory = useSetSnapshotHistory(),
            setSelectedSnapshotIdx = useSetSelectedSnapshotId();
          return React38.default.createElement(
            _core.ActionIcon,
            {
              variant: 'default',
              color: useThemeMode('dark', 'gray'),
              'aria-label': 'Clear snapshot history',
              title: 'Clear snapshot history',
              onClick: () => {
                setSnapshotHistory((prev) => {
                  const lastItem = prev.at(-1);
                  return lastItem
                    ? ((lastItem.isHidden = !0),
                      (lastItem.label = 0),
                      [lastItem])
                    : [];
                }),
                  setSelectedSnapshotIdx(void 0);
              },
              disabled: 0 === filteredSnapshotHistory.length,
            },
            React38.default.createElement(IconTrashX, { size: 16 }),
          );
        },
        Header_module_default2 = {};
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var RecordHistory = () => {
        const [shouldRecord, setShouldRecord] = _react2.useAtom.call(
            void 0,
            shouldRecordSnapshotHistoryAtom,
            useDevtoolsJotaiStoreOptions(),
          ),
          label = shouldRecord
            ? 'Stop recording snapshot history'
            : 'Record snapshot history';
        return React38.default.createElement(
          _core.Tooltip,
          { label, openDelay: 750 },
          React38.default.createElement(
            _core.ActionIcon,
            {
              variant: 'outline',
              color: useThemeMode(
                shouldRecord ? 'red.7' : 'dark',
                shouldRecord ? 'red.7' : 'gray',
              ),
              onClick: () => {
                setShouldRecord((prev) => !prev);
              },
              'aria-label': label,
            },
            React38.default.createElement(IconPlayerRecordFilled, { size: 18 }),
          ),
        );
      };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var snapshotHistoryNavigationAtom = _vanilla.atom.call(
          void 0,
          (get) => {
            const snapshotHistory = get(filteredSnapshotHistoryAtom),
              selectedSnapshotId = get(selectedSnapshotIdAtom);
            if (selectedSnapshotId) {
              const foundIndex = snapshotHistory.findIndex(
                (snapshot) => snapshot.id === selectedSnapshotId,
              );
              return {
                prevId:
                  foundIndex > 0
                    ? _optionalChain([
                        snapshotHistory,
                        'access',
                        (_35) => _35[foundIndex - 1],
                        'optionalAccess',
                        (_36) => _36.id,
                      ])
                    : void 0,
                nextId:
                  foundIndex < snapshotHistory.length - 1
                    ? _optionalChain([
                        snapshotHistory,
                        'access',
                        (_37) => _37[foundIndex + 1],
                        'optionalAccess',
                        (_38) => _38.id,
                      ])
                    : void 0,
              };
            }
            return { prevId: void 0, nextId: void 0 };
          },
          (_, set, nextSelectedSnapshotIdAtom, shouldAutoScroll) => {
            set(selectedSnapshotIdAtom, nextSelectedSnapshotIdAtom),
              set(shouldAutoScrollAtom, shouldAutoScroll);
          },
        ),
        SnapshotListNavigation = () => {
          const { prev, next } = (() => {
            const [{ prevId, nextId }, selectSnapshot] = _react2.useAtom.call(
                void 0,
                snapshotHistoryNavigationAtom,
                useDevtoolsJotaiStoreOptions(),
              ),
              isPreviousPossible = !!prevId,
              isNextPossible = !!nextId,
              onPrevious = _react.useCallback.call(
                void 0,
                () => {
                  isPreviousPossible && selectSnapshot(prevId, 'start');
                },
                [prevId, selectSnapshot, isPreviousPossible],
              ),
              onNext = _react.useCallback.call(
                void 0,
                () => {
                  isNextPossible && selectSnapshot(nextId, 'end');
                },
                [nextId, selectSnapshot, isNextPossible],
              );
            return {
              prev: { isPossible: isPreviousPossible, onClick: onPrevious },
              next: { isPossible: isNextPossible, onClick: onNext },
            };
          })();
          return React38.default.createElement(
            _core.Group,
            null,
            React38.default.createElement(
              _core.ActionIcon,
              {
                variant: 'default',
                color: useThemeMode('dark', 'gray'),
                'aria-label': 'Select previous snapshot',
                title: 'Select previous snapshot',
                disabled: !prev.isPossible,
                onClick: prev.onClick,
              },
              React38.default.createElement(IconChevronUp, { size: 16 }),
            ),
            React38.default.createElement(
              _core.ActionIcon,
              {
                variant: 'default',
                color: useThemeMode('dark', 'gray'),
                'aria-label': 'Select next snapshot',
                title: 'Select next snapshot',
                disabled: !next.isPossible,
                onClick: next.onClick,
              },
              React38.default.createElement(IconChevronDown, { size: 16 }),
            ),
          );
        };
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var SnapshotSearchInput = _react.memo.call(void 0, () => {
          const [userInput, setUserInput] = _react2.useAtom.call(
            void 0,
            searchInputInternalValueAtom2,
            useDevtoolsJotaiStoreOptions(),
          );
          return React38.default.createElement(_core.TextInput, {
            placeholder: 'Search',
            value: userInput,
            onChange: (event) => {
              const {
                target: { value },
              } = event;
              setUserInput(value);
            },
            id: 'jotai-devtools-search-input',
          });
        }),
        Header2 = () =>
          React38.default.createElement(
            _core.Stack,
            { className: Header_module_default2.header, gap: 'sm' },
            React38.default.createElement(
              _core.Group,
              { className: Header_module_default2.headerContent, p: 'xs' },
              React38.default.createElement(
                _core.Group,
                null,
                React38.default.createElement(RecordHistory, null),
                React38.default.createElement(ClearHistory, null),
              ),
              React38.default.createElement(SnapshotListNavigation, null),
            ),
            React38.default.createElement(SnapshotSearchInput, null),
          ),
        SnapshotList_module_default = {},
        SnapshotList = () => {
          const historyList = useFilteredSnapshotHistoryAtomValue(),
            selectedSnapshotValue = _react2.useAtomValue.call(
              void 0,
              selectedSnapshotIdAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            setSelectedSnapshot = useSetSelectedSnapshotId(),
            searchInput = _react2.useAtomValue.call(
              void 0,
              searchInputInternalValueAtom2,
              useDevtoolsJotaiStoreOptions(),
            ),
            [shouldAutoScroll, setShouldAutoScroll] = _react2.useAtom.call(
              void 0,
              shouldAutoScrollAtom,
              useDevtoolsJotaiStoreOptions(),
            ),
            { cancel, scrollIntoView, targetRef, scrollableRef } =
              _hooks.useScrollIntoView.call(void 0, {
                cancelable: !0,
                isList: !0,
                duration: 200,
                onScrollFinish: () => {
                  setShouldAutoScroll(!1);
                },
              });
          _react.useEffect.call(
            void 0,
            () => (
              shouldAutoScroll &&
                selectedSnapshotValue &&
                scrollIntoView({ alignment: shouldAutoScroll }),
              cancel
            ),
            [shouldAutoScroll, selectedSnapshotValue, scrollIntoView, cancel],
          );
          const handleOnClick = _react.useCallback.call(
              void 0,
              (id) => {
                if ('string' != typeof id)
                  throw new Error(
                    'Invalid snapshot id supplied, must be a string',
                  );
                setSelectedSnapshot((prev) => {
                  if (id !== prev) return id;
                });
              },
              [setSelectedSnapshot],
            ),
            snapshotHistoryList = _react.useMemo.call(
              void 0,
              () =>
                historyList.map(({ id, label }) => {
                  const isActive = selectedSnapshotValue === id;
                  return React38.default.createElement(ActionListItem, {
                    key: `snapshot-${id}`,
                    label: String(label),
                    onClick: handleOnClick,
                    id,
                    isActive,
                    ref: isActive ? targetRef : void 0,
                    'data-testid': `jotai-devtools-snapshot-${label}`,
                  });
                }),
              [handleOnClick, historyList, selectedSnapshotValue, targetRef],
            ),
            noResultsFound = !historyList.length && searchInput.trim();
          return React38.default.createElement(
            React38.default.Fragment,
            null,
            React38.default.createElement(Header2, null),
            React38.default.createElement(
              _core.Box,
              {
                className:
                  SnapshotList_module_default.snapshotHistoryListWrapper,
                ref: scrollableRef,
                'data-testid': 'jotai-devtools-snapshot-history-list',
              },
              snapshotHistoryList,
            ),
            noResultsFound &&
              React38.default.createElement(
                _core.Group,
                { mt: 20, justify: 'center' },
                React38.default.createElement(IconAlertCircle, { size: 16 }),
                React38.default.createElement(
                  _core.Text,
                  {
                    component: 'span',
                    fz: 'sm',
                    ml: 0,
                    'data-testid': 'jotai-devtools-no-snapshot-found-message',
                  },
                  'No snapshots found!',
                ),
              ),
          );
        },
        TimeTravel_module_default = {};
      React35.memo(() =>
        React35.createElement(
          React35.Fragment,
          null,
          React35.createElement(
            _reactresizablepanels.PanelGroup,
            {
              direction: 'horizontal',
              className: TimeTravel_module_default.panelGroup,
              id: 'jotai-devtools-time-travel-panel-group',
            },
            React35.createElement(
              _reactresizablepanels.Panel,
              {
                defaultSize: 45,
                minSize: 30,
                className: TimeTravel_module_default.panel,
                id: 'jotai-devtools-time-travel-panel-left',
              },
              React35.createElement(
                _core.Flex,
                {
                  p: 10,
                  pt: 0,
                  h: '100%',
                  direction: 'column',
                  className: TimeTravel_module_default.atomListWrapper,
                  'data-testid':
                    'jotai-devtools-time-travel-panel-left-content',
                },
                React35.createElement(SnapshotList, null),
              ),
            ),
            React35.createElement(PanelResizeHandle, null),
            React35.createElement(
              _reactresizablepanels.Panel,
              {
                defaultSize: 55,
                minSize: 40,
                className: TimeTravel_module_default.panel,
                id: 'jotai-devtools-time-travel-panel-right',
              },
              React35.createElement(
                _core.Flex,
                { p: 10, h: '100%', direction: 'column', pos: 'relative' },
                React35.createElement(SnapshotDetail, null),
              ),
            ),
          ),
          React35.createElement(PlayBar, null),
        ),
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0),
        _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var defaultProps = { position: 'bottom-left' };
      React37.forwardRef((_, ref) => {
        const { position } = _core.useProps.call(
            void 0,
            'ShellTriggerButton',
            defaultProps,
            {},
          ),
          setIsShellOpen = _react2.useSetAtom.call(
            void 0,
            isShellOpenAtom,
            useDevtoolsJotaiStoreOptions(),
          );
        return React37.createElement(
          _core.ActionIcon,
          {
            variant: 'filled',
            color: useThemeMode('dark', 'gray.3'),
            onClick: () => setIsShellOpen(!0),
            ref,
            title: 'Open Jotai Devtools',
            className: 'jotai-devtools-trigger-button',
            left: _optionalChain([
              position,
              'optionalAccess',
              (_50) => _50.includes,
              'call',
              (_51) => _51('left'),
            ])
              ? '0.2rem'
              : 'unset',
            right: _optionalChain([
              position,
              'optionalAccess',
              (_52) => _52.includes,
              'call',
              (_53) => _53('right'),
            ])
              ? '0.2rem'
              : 'unset',
            top: _optionalChain([
              position,
              'optionalAccess',
              (_54) => _54.includes,
              'call',
              (_55) => _55('top'),
            ])
              ? '0.2rem'
              : 'unset',
            bottom: _optionalChain([
              position,
              'optionalAccess',
              (_56) => _56.includes,
              'call',
              (_57) => _57('bottom'),
            ])
              ? '0.2rem'
              : 'unset',
          },
          React37.createElement('img', {
            src: '\ndata:image/png;base64,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M844gwULFpjzdnR00N3djcfjMS5oTU2NqYZRukJNn/RMI5EIRUVFrFq1ypSKpaen8/Wvf520tDReeOEFqqurNxLL8TmD4vuAK7Kzszn22GPxer20tLSQnp5Oc3Mzzz//vI4bAqxjD5FdXkWxi+RkoARieaqCggKAuMkuEMNuqtTZ2clNN93E2LFjGTNmDMcee+xnunhtbS3Jycnk5eWRlJSEz+cz59cYbADFqXhOa2izdwDT9cyOJVNSUmhoaDAKuGHDhm0WE5eXl1NTU8OoUaM488wzqaysZMiQISxatAiv10tycjLd3d2mC4AaTdkcWwEyIj6I8B0Ohxk4cCCFhYXU1taaDgM5OTmMGTOG6urqUuCbwL8cw7oSaGhubr7t+eef58QTTyQjIwO32604EOAJ9iAFhK+uO/pt/aFuYHZi2SnihHZ1dTFy5Ei+//3vc+yxxxpULhGKaUtbWxt/+MMf2G+//XC5XBQVFZGfn09KSgpnnHEGr732mgFLEkl/7qZ+25/buUUpsgClM888E4AXXnjhU6v5u7u7+dOf/mSuc+ONNxpgRBYtUdyZyFXWNt5CWUOhEDk5OQwbNswcGwgECIfDDBo0SJb1B/0M7YfAI21tbbz++usGqNmwYYM+/3/bvLHdUL6KSpjH1laGEydOjMtZQe8kUj9QQd9SNm3+2dHRYRgm/SkvwK9+9SvS09P57ne/y8cff8whhxzCVVddxaWXXsrYsWN56qmnmDFjBjNmzKCmpgaPx9OHH9qfkjvbVaig2Om2ulwunn76ad58800uueQSk47pTz766CNGjRrFlVdeafqGPvHEEzz//POMGjXKVE/Y1fVer9fEfbbii5dq1yC6XC7S0tIYPry311NDQ4N5nmPHjoVYmuLifoZ4AfBMfX097777LpWVlUoLrSZWHLxHyVfRHf2m/rj66quB3ljLdkMhpgSaPCI2a3JrkjktlC1HHnkkb775JqmpqfzrX//i1FNP7XNMbW0tP/vZz7j33nsZMmQIa9asobi42EzWRKioxIl69sclBUyvnL/85S/bfDiLFi1i6tSpCT/705/+xLHHHktXV5chLairmhYp9U1taWkx105JSenD8AmFQowcOTLuObS3txONRhk+fLi2W/sT8A8S7+h0GvD6smXLjly2bJnee3qbN7ebylfREl4MsWpvoaISJyIJmCoA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\n',
            alt: 'Jotai Mascot',
          }),
        );
      });
      exports.InternalDevTools = (props) =>
        React38.createElement(React38.Fragment, null);
    },
    './dist/index.cjs.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      __webpack_require__('./dist/chunk-GFD7OUBX.cjs.js');
      var _chunk5K6HCVT2cjsjs = __webpack_require__(
        './dist/chunk-5K6HCVT2.cjs.js',
      );
      _chunk5K6HCVT2cjsjs.init_react_shim.call(void 0);
      var DevTools = () => null;
      (exports.N5 = DevTools),
        _chunk5K6HCVT2cjsjs.useAtomDevtools,
        _chunk5K6HCVT2cjsjs.useAtomsDebugValue,
        _chunk5K6HCVT2cjsjs.useAtomsDevtools,
        _chunk5K6HCVT2cjsjs.useAtomsSnapshot,
        _chunk5K6HCVT2cjsjs.useGotoAtomsSnapshot;
    },
    './src/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { N5: () => DevTools });
      const DevTools = () => null;
    },
  },
]);
