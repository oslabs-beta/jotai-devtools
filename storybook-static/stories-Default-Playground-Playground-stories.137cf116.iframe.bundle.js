'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [599],
  {
    './src/stories/Default/Playground/Playground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Playground_stories,
        });
      var react = __webpack_require__(
          './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        MantineProvider = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs',
        ),
        esm_react = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/react.mjs',
        ),
        src = __webpack_require__('./src/index.ts'),
        Title = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Title/Title.mjs',
        ),
        vanilla = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/vanilla.mjs',
        ),
        utils = __webpack_require__(
          './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/vanilla/utils.mjs',
        ),
        index_modern = __webpack_require__(
          './node_modules/.pnpm/jotai-tanstack-query@0.7.1_@tanstack+query-core@4.36.1_jotai@2.2.3/node_modules/jotai-tanstack-query/dist/index.modern.js',
        ),
        interval = __webpack_require__(
          './node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/interval.js',
        ),
        map = __webpack_require__(
          './node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js',
        ),
        Box = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        Text = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Text/Text.mjs',
        ),
        Button = __webpack_require__(
          './node_modules/.pnpm/@mantine+core@7.6.0_@mantine+hooks@7.6.0_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs',
        ),
        jsx_runtime = __webpack_require__(
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
                  }, 1e3);
                })
              );
              var data;
            },
          );
        },
        asyncAtom = (0, vanilla.cn)(Promise.resolve(null));
      asyncAtom.debugLabel = 'asyncAtom';
      const derivedAsyncAtom = (0, vanilla.cn)(async (get) => {
          const result = await get(asyncAtom);
          return result?.userId || 'No user';
        }),
        Async = () => {
          const [request, setRequest] = (0, esm_react.KO)(asyncAtom),
            userId = (0, esm_react.Dv)(derivedAsyncAtom);
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
              'User: ',
              userId,
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
      const doubleCountAtom = (0, vanilla.cn)((get) => 2 * get(countAtom));
      doubleCountAtom.debugLabel = 'doubleCountAtom';
      const doubleCountInNestedObjectAtom = (0, vanilla.cn)((get) => ({
        doubleCount: { nested: { value: get(doubleCountAtom) } },
      }));
      doubleCountInNestedObjectAtom.debugLabel =
        'doubleCountInNestedObjectAtom';
      const Counter = () => {
        const [count, setCount] = (0, esm_react.KO)(countAtom);
        (0, esm_react.Dv)(doubleCountAtom),
          (0, esm_react.Dv)(doubleCountInNestedObjectAtom);
        const add = react.useCallback(() => setCount((c) => c + 1), [setCount]);
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
      const baseCountAtom = (0, vanilla.cn)(1);
      baseCountAtom.debugLabel = 'baseCountAtom';
      (0, utils.qs)((get) => 2 * get(baseCountAtom)).debugLabel =
        'countAtomWithDefaultAtom';
      const counterSubject = (0, interval.F)(1e3).pipe(
        (0, map.U)((i) => `#${i}`),
      );
      (0, utils.Ji)(() => counterSubject).debugLabel = 'counterAtom';
      const Playground_asyncAtom = (0, vanilla.cn)(
        async () =>
          new Promise((resolve) => {
            const timer = window.setTimeout(() => {
              clearTimeout(timer), resolve('Resolved data');
            }, 1e3);
          }),
      );
      Playground_asyncAtom.debugLabel = 'asyncAtom';
      (0, utils.n7)(Playground_asyncAtom).debugLabel = 'loadableAtom';
      const someRandomArray = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
        ],
        arrayAtom = (0, vanilla.cn)(someRandomArray);
      arrayAtom.debugLabel = 'arrayAtom';
      (0, utils.PU)(arrayAtom).debugLabel = 'splitAtomAtom';
      const asyncArrayAtom = (0, vanilla.cn)(async () => someRandomArray);
      asyncArrayAtom.debugLabel = 'asyncArrayAtom';
      (0, utils.PU)(unwrap(asyncArrayAtom, () => [])).debugLabel =
        'splitAsyncAtom';
      const idAtom = (0, vanilla.cn)(1);
      idAtom.debugLabel = 'idAtom';
      const [userAtom] = (0, index_modern.K_)((get) => ({
        queryKey: ['users', get(idAtom)],
        queryFn: async ({ queryKey: [, id] }) =>
          (
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          ).json(),
      }));
      userAtom.debugLabel = 'userAtom';
      const circularObject = new (class CircularClass {
          constructor() {
            this.circular = this;
          }
        })(),
        circularAtom = (0, vanilla.cn)(circularObject);
      (circularAtom.debugLabel = 'circularAtom'),
        (circularAtom.debugPrivate = !0);
      (0, vanilla.cn)((get) => ({
        count: get(baseCountAtom),
        0: 'some string',
        a: 1,
        b: {
          c: {
            d: ['h', 'e', 'l', 'l', { o: 'world' }, { o: 'world' }],
            e: [new Date(), 2, 3, () => {}, () => !0, !0, null, void 0],
          },
          d: { e: Symbol('e'), f: Number.MAX_SAFE_INTEGER },
          2: () => 'Hello John!',
          3: !0,
          4: null,
          5: void 0,
        },
      })).debugLabel = 'anAtomWithObject';
      const aVeryBigSetOfAtoms = Array.from({ length: 5e3 }, (_, i) => {
        const anAtom = (0, vanilla.cn)(i);
        return (anAtom.debugLabel = `anAtom${i}`), anAtom;
      });
      (0, vanilla.cn)((get) =>
        aVeryBigSetOfAtoms.map((a) => get(a)),
      ).debugLabel = 'anBigAtomHolder';
      const uselessCount = (0, vanilla.cn)(0);
      uselessCount.debugLabel = 'frozenCountAtom';
      const FrozenCounter = () => {
        const [count, setUselessCount] = (0, esm_react.KO)(uselessCount);
        return (0, jsx_runtime.jsxs)('div', {
          children: [
            (0, jsx_runtime.jsxs)('pre', {
              children: ['useless count:', count],
            }),
            (0, jsx_runtime.jsx)('button', {
              onClick: () => {
                setUselessCount((p) => p);
              },
              children: 'click',
            }),
          ],
        });
      };
      FrozenCounter.displayName = 'FrozenCounter';
      (0, vanilla.cn)(1).debugLabel = 'countAtomA';
      const Playground = () =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Title.D, { children: 'Playground' }),
              (0, jsx_runtime.jsx)(Counter, {}),
              (0, jsx_runtime.jsx)(FrozenCounter, {}),
              (0, jsx_runtime.jsx)(react.Suspense, {
                fallback: (0, jsx_runtime.jsx)('div', {
                  children: 'Loading...',
                }),
                children: (0, jsx_runtime.jsx)(Async, {}),
              }),
            ],
          }),
        Playground_stories = {
          component: src.N5,
          title: 'DevtoolsPlayground',
          argTypes: {
            store: { control: { type: !1 } },
            options: { control: { type: !1 } },
          },
        },
        Default = {
          render: ({ ...args }) => {
            const nextOptions = {
                ...args.options,
                shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
                snapshotHistoryLimit: args['options.snapshotHistoryLimit'],
                shouldExpandJsonTreeViewInitially:
                  args['options.shouldExpandJsonTreeViewInitially'],
              },
              props = { ...args, options: nextOptions };
            return (0, jsx_runtime.jsx)(MantineProvider.M, {
              theme: { primaryColor: 'dark', cursorType: 'pointer' },
              defaultColorScheme: 'dark',
              children: (0, jsx_runtime.jsxs)(esm_react.zt, {
                children: [
                  (0, jsx_runtime.jsx)(src.N5, { ...props }),
                  (0, jsx_runtime.jsx)(Playground, {}),
                ],
              }),
            });
          },
          args: {
            isInitialOpen: !0,
            'options.shouldShowPrivateAtoms': !1,
            'options.snapshotHistoryLimit': 1 / 0,
            'options.shouldExpandJsonTreeViewInitially': !1,
          },
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
              "{\n  render: ({\n    ...args\n  }) => {\n    const nextOptions = {\n      ...args.options,\n      shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],\n      snapshotHistoryLimit: args['options.snapshotHistoryLimit'],\n      shouldExpandJsonTreeViewInitially: args['options.shouldExpandJsonTreeViewInitially']\n    };\n    const props = {\n      ...args,\n      options: nextOptions\n    };\n    return <MantineProvider theme={{\n      primaryColor: 'dark',\n      cursorType: 'pointer'\n    }} defaultColorScheme=\"dark\">\n        <Provider>\n          <DevTools {...props} />\n          <Playground />\n        </Provider>\n      </MantineProvider>;\n  },\n  args: {\n    isInitialOpen: true,\n    'options.shouldShowPrivateAtoms': false,\n    'options.snapshotHistoryLimit': Infinity,\n    'options.shouldExpandJsonTreeViewInitially': false\n  },\n  argTypes: {\n    store: {\n      control: {\n        type: false\n      }\n    },\n    options: {\n      control: {\n        type: false\n      }\n    }\n  }\n}",
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
      __webpack_require__.d(__webpack_exports__, { N5: () => DevTools });
      const DevTools = () => null;
    },
  },
]);
