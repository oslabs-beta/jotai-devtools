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
        use_computed_color_scheme = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-computed-color-scheme.mjs',
        ),
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
        demoStoreOptions = { store: demoStore },
        makeRandomFetchReq = async () => {
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
        return react.createElement(
          Box.a,
          null,
          react.createElement(Title.h, { size: 'h5' }, 'Async'),
          react.createElement(
            Text.E,
            { mb: 10, color: 'dark.2' },
            'Out-of-the-box Suspense support. ',
            react.createElement('i', null, 'Timeout: 8000 ms'),
          ),
          react.createElement(
            Text.E,
            null,
            'Request status: ',
            request ? '✅ Success' : 'Ready',
            ' ',
          ),
          react.createElement(
            Button.$,
            {
              onClick: async () => {
                setRequest(makeRandomFetchReq);
              },
              size: 'xs',
              tt: 'uppercase',
              mt: 5,
            },
            'Fetch',
          ),
        );
      };
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
          react.createElement(
            Box.a,
            { maw: '500px' },
            react.createElement(Title.h, { size: 'h5' }, 'Counter'),
            react.createElement(Code.C, { block: !0 }, count),
            react.createElement(
              Button.$,
              {
                display: 'block',
                mt: 5,
                onClick: add,
                size: 'xs',
                color: 'dark',
                tt: 'uppercase',
              },
              'Add 1',
            ),
          )
        );
      };
      var Divider = __webpack_require__(
        './node_modules/@mantine/core/esm/components/Divider/Divider.mjs',
      );
      const aVeryBigSetOfAtoms = Array.from({ length: 10 }, (_, i) => {
          const anAtom = (0, vanilla.eU)(i);
          return (anAtom.debugLabel = `anAtom${i}`), anAtom;
        }),
        anBigAtomHolder = (0, vanilla.eU)((get) =>
          aVeryBigSetOfAtoms.map((a) => get(a)),
        );
      anBigAtomHolder.debugLabel = 'anBigAtomHolder';
      const createDependentAtomChain = (depth, initialValue = 0) => {
          if (0 === depth) {
            const baseAtom = (0, vanilla.eU)(initialValue);
            return (baseAtom.debugLabel = `baseAtom-${initialValue}`), baseAtom;
          }
          const parentAtom = createDependentAtomChain(depth - 1, initialValue),
            childAtom = (0, vanilla.eU)((get) => get(parentAtom) + 1);
          return (
            (childAtom.debugLabel = `childAtom-${depth}-${initialValue}`),
            childAtom
          );
        },
        shallowChain = createDependentAtomChain(10),
        Random_countAtom = (0, vanilla.eU)(1);
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
      const dependentOfNestedObjectAtom = (0, vanilla.eU)((get) => {
        const { nestedObject } = get(nestedObjectAtom);
        return {
          quadrupleCount: 2 * nestedObject.doubleCount,
          sixTimesCount: 2 * nestedObject.tripleCount,
        };
      });
      dependentOfNestedObjectAtom.debugLabel = 'dependentOfNestedObjectAtom';
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
          (0, esm_react.md)(atomWithFunction, demoStoreOptions),
          (0, esm_react.md)(dependentOfNestedObjectAtom, demoStoreOptions),
          (0, esm_react.md)(anBigAtomHolder, demoStoreOptions),
          (0, esm_react.md)(shallowChain, demoStoreOptions);
        (0, esm_react.md)(atomsInAtomsCountAtom, demoStoreOptions);
        return react.createElement(
          Box.a,
          { maw: '500px' },
          react.createElement(Title.h, { size: 'h5' }, 'Random'),
          react.createElement(Code.C, { block: !0 }, count),
          react.createElement(
            Button.$,
            {
              display: 'block',
              mt: 5,
              onClick: react.useCallback(
                () => setCount((c) => c + 1),
                [setCount],
              ),
              size: 'xs',
              color: 'dark',
              tt: 'uppercase',
            },
            'Add 1',
          ),
          react.createElement(Divider.c, { size: 'sm', my: 'lg' }),
          react.createElement(
            Button.$,
            {
              display: 'block',
              mt: 5,
              onClick: setError,
              size: 'xs',
              color: 'red.8',
              tt: 'uppercase',
            },
            'Trigger error 💥',
          ),
        );
      };
      var use_mantine_color_scheme = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs',
        ),
        ActionIcon = __webpack_require__(
          './node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs',
        ),
        IconSun = __webpack_require__(
          './node_modules/@tabler/icons-react/dist/esm/icons/IconSun.mjs',
        ),
        IconMoonStars = __webpack_require__(
          './node_modules/@tabler/icons-react/dist/esm/icons/IconMoonStars.mjs',
        );
      const ThemeToggle = () => {
        const { colorScheme, toggleColorScheme } = (0,
          use_mantine_color_scheme.C)(),
          dark = 'dark' === colorScheme;
        return react.createElement(
          ActionIcon.M,
          {
            variant: 'filled',
            color: dark ? 'gray' : 'dark',
            onClick: () => toggleColorScheme(),
            title: 'Toggle color scheme',
          },
          dark
            ? react.createElement(IconSun.A, { size: 16 })
            : react.createElement(IconMoonStars.A, { size: 16 }),
        );
      };
      var Flex = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Flex/Flex.mjs',
        ),
        Checkbox = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Checkbox/Checkbox.mjs',
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
          './node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs',
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
          return react.createElement(
            Flex.s,
            { justify: 'space-between', align: 'center', my: 10 },
            react.createElement(
              Flex.s,
              { align: 'center' },
              react.createElement(Checkbox.S, {
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
              react.createElement(
                Text.E,
                {
                  style: {
                    textDecoration: item.completed ? 'line-through' : '',
                  },
                  fz: 'md',
                },
                item.title,
              ),
            ),
            react.createElement(
              ActionIcon.M,
              {
                onClick: () => remove(atom),
                variant: 'outline',
                color: 'dark',
                size: 'sm',
              },
              react.createElement(IconX.A, null),
            ),
          );
        },
        Filter = () => {
          const [filter, set] = (0, esm_react.fp)(filterAtom, demoStoreOptions);
          return react.createElement(
            Radio.s.Group,
            { onChange: (value) => set(value), value: filter },
            react.createElement(Radio.s, { value: 'all', label: 'All' }),
            react.createElement(Radio.s, {
              value: 'completed',
              label: 'Completed',
            }),
            react.createElement(Radio.s, {
              value: 'incompleted',
              label: 'Incompleted',
            }),
          );
        },
        Filtered = (props) => {
          const [todos] = (0, esm_react.fp)(filteredAtom, demoStoreOptions),
            components = todos.map((atom, i) =>
              react.createElement(TodoItem, {
                atom,
                key: `todo-item${i}` + atom.toString(),
                remove: props.remove,
              }),
            );
          return react.createElement(react.Fragment, null, components);
        },
        TodoList = () => {
          const setTodos = (0, esm_react.Xr)(todosAtom, demoStoreOptions);
          return react.createElement(
            'form',
            {
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
            },
            react.createElement(
              Group.Y,
              { style: { justifyContent: 'space-between' } },
              react.createElement(Filter, null),
              react.createElement(
                Button.$,
                {
                  onClick: () => {
                    setTodos((prev) => [...prev].reverse());
                  },
                },
                'Reverse',
              ),
            ),
            react.createElement(TextInput.k, {
              placeholder: 'Type your todo',
              name: 'inputTitle',
              mt: 'sm',
            }),
            react.createElement(
              List.B,
              { listStyleType: 'none' },
              react.createElement(Filtered, {
                remove: (todo) =>
                  setTodos((prev) => prev.filter((item) => item !== todo)),
              }),
            ),
          );
        },
        Todos = () =>
          react.createElement(
            Box.a,
            { maw: '500px' },
            react.createElement(Title.h, { size: 'h5' }, 'Todo list'),
            react.createElement(TodoList, null),
          );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const DevToolsWithColorScheme = (props) => {
          const colorScheme = (0, use_computed_color_scheme.l)();
          return react.createElement(
            src.VD,
            _extends({ store: demoStore, theme: colorScheme }, props),
          );
        },
        DemoApp = (props) =>
          react.createElement(
            DemoJotaiStoreContext.Provider,
            { value: demoStore },
            react.createElement(
              MantineProvider.y,
              { theme: { primaryColor: 'cyan', cursorType: 'pointer' } },
              react.createElement(DevToolsWithColorScheme, props),
              react.createElement(
                'div',
                { className: 'App' },
                react.createElement(ThemeToggle, null),
                react.createElement(
                  react.Suspense,
                  {
                    fallback: react.createElement(
                      Text.E,
                      { className: 'loading-suspense' },
                      'Your suspense loading component...',
                    ),
                  },
                  react.createElement(Title.h, { size: 'h3' }, 'Demos'),
                  react.createElement(
                    Text.E,
                    { mb: 10, color: 'dark.2' },
                    'Jotai DevTools — Early Preview',
                  ),
                  react.createElement(
                    Grid.x,
                    { gutter: 'xl' },
                    react.createElement(
                      Grid.x.Col,
                      { span: 6 },
                      react.createElement(Random, null),
                    ),
                    react.createElement(
                      Grid.x.Col,
                      { span: 6 },
                      react.createElement(Counter, null),
                    ),
                    react.createElement(
                      Grid.x.Col,
                      { span: 6 },
                      react.createElement(Todos, null),
                    ),
                    ' ',
                    react.createElement(
                      Grid.x.Col,
                      { span: 6 },
                      react.createElement(Async, null),
                    ),
                  ),
                ),
              ),
            ),
          );
      try {
        (DemoApp.displayName = 'DemoApp'),
          (DemoApp.__docgenInfo = {
            description: '',
            displayName: 'DemoApp',
            props: {
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
                },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !1,
                type: { name: 'Store' },
              },
              isInitialOpen: {
                defaultValue: null,
                description: '',
                name: 'isInitialOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: '"dark" | "light"' },
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
            return react.createElement(DemoApp, props);
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
