'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [34],
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
      var react = __webpack_require__('./node_modules/react/index.js'),
        MantineProvider = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs',
        ),
        esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
        src = __webpack_require__('./src/index.ts'),
        Title = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Title/Title.mjs',
        ),
        vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
        utils = __webpack_require__(
          './node_modules/jotai/esm/vanilla/utils.mjs',
        ),
        index_modern = __webpack_require__(
          './node_modules/jotai-tanstack-query/dist/index.modern.js',
        ),
        interval = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/observable/interval.js',
        ),
        map = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        Text = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Text/Text.mjs',
        ),
        Button = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Button/Button.mjs',
        ),
        jsx_runtime = __webpack_require__(
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
                  }, 1e3);
                })
              );
              var data;
            },
          );
        },
        asyncAtom = (0, vanilla.eU)(Promise.resolve(null));
      asyncAtom.debugLabel = 'asyncAtom';
      const derivedAsyncAtom = (0, vanilla.eU)(async (get) => {
          const result = await get(asyncAtom);
          return result?.userId || 'No user';
        }),
        Async = () => {
          const [request, setRequest] = (0, esm_react.fp)(asyncAtom),
            userId = (0, esm_react.md)(derivedAsyncAtom);
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
              'User: ',
              userId,
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
      const doubleCountAtom = (0, vanilla.eU)((get) => 2 * get(countAtom));
      doubleCountAtom.debugLabel = 'doubleCountAtom';
      const doubleCountInNestedObjectAtom = (0, vanilla.eU)((get) => ({
        doubleCount: { nested: { value: get(doubleCountAtom) } },
      }));
      doubleCountInNestedObjectAtom.debugLabel =
        'doubleCountInNestedObjectAtom';
      const Counter = () => {
        const [count, setCount] = (0, esm_react.fp)(countAtom);
        (0, esm_react.md)(doubleCountAtom),
          (0, esm_react.md)(doubleCountInNestedObjectAtom);
        const add = react.useCallback(() => setCount((c) => c + 1), [setCount]);
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
      const baseCountAtom = (0, vanilla.eU)(1);
      baseCountAtom.debugLabel = 'baseCountAtom';
      (0, utils.t_)((get) => 2 * get(baseCountAtom)).debugLabel =
        'countAtomWithDefaultAtom';
      const counterSubject = (0, interval.Y)(1e3).pipe(
        (0, map.T)((i) => `#${i}`),
      );
      (0, utils.zx)(() => counterSubject).debugLabel = 'counterAtom';
      const Playground_asyncAtom = (0, vanilla.eU)(
        async () =>
          new Promise((resolve) => {
            const timer = window.setTimeout(() => {
              clearTimeout(timer), resolve('Resolved data');
            }, 1e3);
          }),
      );
      Playground_asyncAtom.debugLabel = 'asyncAtom';
      (0, utils.Rq)(Playground_asyncAtom).debugLabel = 'loadableAtom';
      const someRandomArray = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
        ],
        arrayAtom = (0, vanilla.eU)(someRandomArray);
      arrayAtom.debugLabel = 'arrayAtom';
      (0, utils.cU)(arrayAtom).debugLabel = 'splitAtomAtom';
      const asyncArrayAtom = (0, vanilla.eU)(async () => someRandomArray);
      asyncArrayAtom.debugLabel = 'asyncArrayAtom';
      (0, utils.cU)(unwrap(asyncArrayAtom, () => [])).debugLabel =
        'splitAsyncAtom';
      const idAtom = (0, vanilla.eU)(1);
      idAtom.debugLabel = 'idAtom';
      const [userAtom] = (0, index_modern.fw)((get) => ({
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
        circularAtom = (0, vanilla.eU)(circularObject);
      (circularAtom.debugLabel = 'circularAtom'),
        (circularAtom.debugPrivate = !0);
      (0, vanilla.eU)((get) => ({
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
        const anAtom = (0, vanilla.eU)(i);
        return (anAtom.debugLabel = `anAtom${i}`), anAtom;
      });
      (0, vanilla.eU)((get) =>
        aVeryBigSetOfAtoms.map((a) => get(a)),
      ).debugLabel = 'anBigAtomHolder';
      const uselessCount = (0, vanilla.eU)(0);
      uselessCount.debugLabel = 'frozenCountAtom';
      const FrozenCounter = () => {
        const [count, setUselessCount] = (0, esm_react.fp)(uselessCount);
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
      (0, vanilla.eU)(1).debugLabel = 'countAtomA';
      const Playground = () =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Title.h, { children: 'Playground' }),
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
          component: src.VD,
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
            return (0, jsx_runtime.jsx)(MantineProvider.y, {
              theme: { primaryColor: 'dark', cursorType: 'pointer' },
              defaultColorScheme: 'dark',
              children: (0, jsx_runtime.jsxs)(esm_react.Kq, {
                children: [
                  (0, jsx_runtime.jsx)(src.VD, { ...props }),
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
      __webpack_require__.d(__webpack_exports__, { VD: () => DevTools });
      const DevTools = () => null;
    },
  },
]);
