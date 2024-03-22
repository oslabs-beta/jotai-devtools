'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [613],
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
      var react = __webpack_require__('./node_modules/react/index.js'),
        src = __webpack_require__('./src/index.ts'),
        MantineProvider = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs',
        ),
        Text = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Text/Text.mjs',
        ),
        Title = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Title/Title.mjs',
        ),
        Grid = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Grid/Grid.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        Button = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Button/Button.mjs',
        ),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs');
      const demoStore = (0, vanilla.y$)(),
        DemoJotaiStoreContext = (0, react.createContext)(demoStore),
        demoStoreOptions = { store: demoStore };
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
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
        asyncAtom = (0, vanilla.eU)(Promise.resolve(null));
      asyncAtom.debugLabel = 'asyncAtom';
      const Async = () => {
        const [request, setRequest] = (0, esm_react.fp)(
          asyncAtom,
          demoStoreOptions,
        );
        return (0, jsx_runtime.jsxs)(Box.a, {
          children: [
            (0, jsx_runtime.jsx)(Title.h, { size: 'h5', children: 'Async' }),
            (0, jsx_runtime.jsxs)(Text.E, {
              component: 'div',
              mb: 10,
              c: 'dark.2',
              children: [
                'Out-of-the-box Suspense support. ',
                (0, jsx_runtime.jsx)('i', { children: 'Timeout: 8000 ms' }),
              ],
            }),
            (0, jsx_runtime.jsxs)(Text.E, {
              component: 'div',
              children: [
                'Request status: ',
                request ? '✅ Success' : 'Ready',
                ' ',
              ],
            }),
            (0, jsx_runtime.jsx)(Button.$, {
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
          './node_modules/@mantine/core/esm/components/Code/Code.mjs',
        ),
        use_timeout = __webpack_require__(
          './node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs',
        );
      const countAtom = (0, vanilla.eU)(0);
      countAtom.debugLabel = 'countAtom';
      const Counter = () => {
        const [count, setCount] = (0, esm_react.fp)(
            countAtom,
            demoStoreOptions,
          ),
          add = react.useCallback(() => setCount((c) => c + 1), [setCount]);
        return (
          (0, use_timeout.Z)(
            () => {
              Array.from({ length: 0 }).forEach(add);
            },
            200,
            { autoInvoke: !0 },
          ),
          (0, jsx_runtime.jsxs)(Box.a, {
            maw: '500px',
            children: [
              (0, jsx_runtime.jsx)(Title.h, {
                size: 'h5',
                children: 'Counter',
              }),
              (0, jsx_runtime.jsx)(Code.C, {
                color: 'gray',
                block: !0,
                children: count,
              }),
              (0, jsx_runtime.jsx)(Button.$, {
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
        './node_modules/@mantine/core/esm/components/Divider/Divider.mjs',
      );
      const Random_countAtom = (0, vanilla.eU)(1);
      Random_countAtom.debugLabel = 'randomCountAtom';
      const textAtom = (0, vanilla.eU)('hello');
      textAtom.debugLabel = 'textAtom';
      const bigintAtom = (0, vanilla.eU)(BigInt(Number.MAX_SAFE_INTEGER));
      bigintAtom.debugLabel = 'bigintAtom';
      const atomReturnsUndefined = (0, vanilla.eU)(void 0);
      atomReturnsUndefined.debugLabel = 'atomReturnsUndefined';
      const atomWithSomeSymbol = (0, vanilla.eU)(Symbol('hello'));
      atomWithSomeSymbol.debugLabel = 'atomWithSomeSymbol';
      const atomWithFunction = (0, vanilla.eU)(() => () => 'hello');
      atomWithFunction.debugLabel = 'atomWithFunction';
      const nestedObjectAtom = (0, vanilla.eU)((get) => ({
        nestedObject: {
          doubleCount: 2 * get(Random_countAtom),
          tripleCount: 3 * get(Random_countAtom),
        },
        foo: 'bar',
      }));
      nestedObjectAtom.debugLabel = 'nestedObjectAtom';
      const atomsInAtomsCountAtom = (0, vanilla.eU)(
        (0, vanilla.eU)((0, vanilla.eU)((get) => get(Random_countAtom))),
      );
      atomsInAtomsCountAtom.debugLabel = 'atomsInAtomsCountAtom';
      const baseErrorAtom = (0, vanilla.eU)(0),
        triggerErrorAtom = (0, vanilla.eU)(
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
        const [count, setCount] = (0, esm_react.fp)(
            Random_countAtom,
            demoStoreOptions,
          ),
          [, setError] = (0, esm_react.fp)(triggerErrorAtom, demoStoreOptions);
        (0, esm_react.md)(nestedObjectAtom, demoStoreOptions),
          (0, esm_react.md)(textAtom, demoStoreOptions),
          (0, esm_react.md)(bigintAtom, demoStoreOptions),
          (0, esm_react.md)(atomReturnsUndefined, demoStoreOptions),
          (0, esm_react.md)(atomWithSomeSymbol, demoStoreOptions),
          (0, esm_react.md)(atomWithFunction, demoStoreOptions);
        (0, esm_react.md)(atomsInAtomsCountAtom, demoStoreOptions);
        return (0, jsx_runtime.jsxs)(Box.a, {
          maw: '500px',
          children: [
            (0, jsx_runtime.jsx)(Title.h, { size: 'h5', children: 'Random' }),
            (0, jsx_runtime.jsx)(Code.C, {
              color: 'gray',
              block: !0,
              children: count,
            }),
            (0, jsx_runtime.jsx)(Button.$, {
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
            (0, jsx_runtime.jsx)(Divider.c, { size: 'sm', my: 'lg' }),
            (0, jsx_runtime.jsx)(Button.$, {
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
          './node_modules/@mantine/core/esm/components/Flex/Flex.mjs',
        ),
        Checkbox = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Checkbox/Checkbox.mjs',
        ),
        ActionIcon = __webpack_require__(
          './node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs',
        ),
        Radio = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Radio/Radio.mjs',
        ),
        Group = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Group/Group.mjs',
        ),
        TextInput = __webpack_require__(
          './node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs',
        ),
        List = __webpack_require__(
          './node_modules/@mantine/core/esm/components/List/List.mjs',
        ),
        IconX = __webpack_require__(
          './node_modules/@tabler/icons-react/dist/esm/icons/IconX.js',
        );
      const filterAtom = (0, vanilla.eU)('all'),
        initialAtom = (0, vanilla.eU)({ title: 'test', completed: !1 }),
        todosAtom = (0, vanilla.eU)([initialAtom]);
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
        const [item, setItem] = (0, esm_react.fp)(atom, demoStoreOptions);
        react.useEffect(() => {}, [atom]);
        return (0, jsx_runtime.jsxs)(Flex.s, {
          justify: 'space-between',
          align: 'center',
          my: 10,
          children: [
            (0, jsx_runtime.jsxs)(Flex.s, {
              align: 'center',
              children: [
                (0, jsx_runtime.jsx)(Checkbox.S, {
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
                (0, jsx_runtime.jsx)(Text.E, {
                  component: 'div',
                  td: item.completed ? 'line-through' : void 0,
                  fz: 'md',
                  children: item.title,
                }),
              ],
            }),
            (0, jsx_runtime.jsx)(ActionIcon.M, {
              onClick: () => remove(atom),
              variant: 'outline',
              color: 'dark',
              size: 'sm',
              children: (0, jsx_runtime.jsx)(IconX.A, {}),
            }),
          ],
        });
      };
      TodoItem.displayName = 'TodoItem';
      const Filter = () => {
        const [filter, set] = (0, esm_react.fp)(filterAtom, demoStoreOptions);
        return (0, jsx_runtime.jsxs)(Radio.s.Group, {
          onChange: (value) => set(value),
          value: filter,
          children: [
            (0, jsx_runtime.jsx)(Radio.s, { value: 'all', label: 'All' }),
            (0, jsx_runtime.jsx)(Radio.s, {
              value: 'completed',
              label: 'Completed',
            }),
            (0, jsx_runtime.jsx)(Radio.s, {
              value: 'incompleted',
              label: 'Incompleted',
            }),
          ],
        });
      };
      Filter.displayName = 'Filter';
      const Filtered = (props) => {
          const [todos] = (0, esm_react.fp)(filteredAtom, demoStoreOptions),
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
          const setTodos = (0, esm_react.Xr)(todosAtom, demoStoreOptions);
          return (0, jsx_runtime.jsxs)('form', {
            onSubmit: (e) => {
              e.preventDefault();
              const title = e.currentTarget.inputTitle.value;
              (e.currentTarget.inputTitle.value = ''),
                title.trim() &&
                  setTodos((prev) => [
                    ...prev,
                    (0, vanilla.eU)({ title, completed: !1 }),
                  ]);
            },
            children: [
              (0, jsx_runtime.jsxs)(Group.Y, {
                justify: 'space-between',
                children: [
                  (0, jsx_runtime.jsx)(Filter, {}),
                  (0, jsx_runtime.jsx)(Button.$, {
                    onClick: () => {
                      setTodos((prev) => [...prev].reverse());
                    },
                    children: 'Reverse',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(TextInput.k, {
                placeholder: 'Type your todo',
                name: 'inputTitle',
                mt: 'sm',
              }),
              (0, jsx_runtime.jsx)(List.B, {
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
        (0, jsx_runtime.jsxs)(Box.a, {
          maw: '500px',
          children: [
            (0, jsx_runtime.jsx)(Title.h, {
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
          children: (0, jsx_runtime.jsxs)(MantineProvider.y, {
            theme: { primaryColor: 'blue', cursorType: 'pointer' },
            defaultColorScheme: props.defaultColorScheme || 'dark',
            children: [
              (0, jsx_runtime.jsx)(src.VD, { store: demoStore, ...props }),
              (0, jsx_runtime.jsx)('div', {
                className: 'App',
                children: (0, jsx_runtime.jsxs)(react.Suspense, {
                  fallback: (0, jsx_runtime.jsx)(Text.E, {
                    component: 'div',
                    className: 'loading-suspense',
                    children: 'Your suspense loading component...',
                  }),
                  children: [
                    (0, jsx_runtime.jsx)(Title.h, {
                      size: 'h3',
                      children: 'Demos',
                    }),
                    (0, jsx_runtime.jsx)(Text.E, {
                      component: 'div',
                      mb: 10,
                      c: 'dark.2',
                      children: 'Jotai DevTools — Early Preview',
                    }),
                    (0, jsx_runtime.jsxs)(Grid.x, {
                      gutter: 'xl',
                      children: [
                        (0, jsx_runtime.jsx)(Grid.x.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Random, {}),
                        }),
                        (0, jsx_runtime.jsx)(Grid.x.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Counter, {}),
                        }),
                        (0, jsx_runtime.jsx)(Grid.x.Col, {
                          span: 6,
                          children: (0, jsx_runtime.jsx)(Todos, {}),
                        }),
                        ' ',
                        (0, jsx_runtime.jsx)(Grid.x.Col, {
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
      const DevTools_stories = { component: src.VD, title: 'Devtools' },
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
