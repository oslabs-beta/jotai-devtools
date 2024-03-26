/*! For license information please see 198.db1096ce.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [198],
  {
    './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/react.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Dv: () => useAtomValue,
          KO: () => useAtom,
          b9: () => useSetAtom,
          zt: () => Provider,
        });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/vanilla.mjs',
          );
        const StoreContext = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),
          useStore = (options) => {
            const store = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
              StoreContext,
            );
            return (
              (null == options ? void 0 : options.store) ||
              store ||
              (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.K7)()
            );
          },
          Provider = ({ children, store }) => {
            const storeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
            return (
              store ||
                storeRef.current ||
                (storeRef.current = (0,
                jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.MT)()),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                StoreContext.Provider,
                { value: store || storeRef.current },
                children,
              )
            );
          },
          isPromiseLike = (x) =>
            'function' == typeof (null == x ? void 0 : x.then),
          use =
            react__WEBPACK_IMPORTED_MODULE_0__.use ||
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
            });
        function useAtomValue(atom, options) {
          const store = useStore(options),
            [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] =
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(
                (prev) => {
                  const nextValue = store.get(atom);
                  return Object.is(prev[0], nextValue) &&
                    prev[1] === store &&
                    prev[2] === atom
                    ? prev
                    : [nextValue, store, atom];
                },
                void 0,
                () => [store.get(atom), store, atom],
              );
          let value = valueFromReducer;
          (storeFromReducer === store && atomFromReducer === atom) ||
            (rerender(), (value = store.get(atom)));
          const delay = null == options ? void 0 : options.delay;
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              const unsub = store.sub(atom, () => {
                'number' != typeof delay
                  ? rerender()
                  : setTimeout(rerender, delay);
              });
              return rerender(), unsub;
            }, [store, atom, delay]),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(value),
            isPromiseLike(value) ? use(value) : value
          );
        }
        function useSetAtom(atom, options) {
          const store = useStore(options);
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (...args) => {
              if (!('write' in atom)) throw new Error('not writable atom');
              return store.set(atom, ...args);
            },
            [store, atom],
          );
        }
        function useAtom(atom, options) {
          return [useAtomValue(atom, options), useSetAtom(atom, options)];
        }
      },
    './node_modules/.pnpm/jotai@2.2.3_@types+react@18.2.57_react@18.2.0/node_modules/jotai/esm/vanilla.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          K7: () => getDefaultStore,
          MT: () => createStore,
          cn: () => atom,
        });
        let keyCount = 0;
        function atom(read, write) {
          const key = 'atom' + ++keyCount,
            config = { toString: () => key };
          return (
            'function' == typeof read
              ? (config.read = read)
              : ((config.init = read),
                (config.read = (get) => get(config)),
                (config.write = (get, set, arg) =>
                  set(
                    config,
                    'function' == typeof arg ? arg(get(config)) : arg,
                  ))),
            write && (config.write = write),
            config
          );
        }
        const hasInitialValue = (atom) => 'init' in atom,
          isActuallyWritableAtom = (atom) => !!atom.write,
          cancelPromiseMap = new WeakMap(),
          cancelPromise = (promise, next) => {
            const cancel = cancelPromiseMap.get(promise);
            cancel && (cancelPromiseMap.delete(promise), cancel(next));
          },
          resolvePromise = (promise, value) => {
            (promise.status = 'fulfilled'), (promise.value = value);
          },
          rejectPromise = (promise, e) => {
            (promise.status = 'rejected'), (promise.reason = e);
          },
          isEqualAtomValue = (a, b) =>
            'v' in a && 'v' in b && Object.is(a.v, b.v),
          isEqualAtomError = (a, b) =>
            'e' in a && 'e' in b && Object.is(a.e, b.e),
          hasPromiseAtomValue = (a) => 'v' in a && a.v instanceof Promise,
          returnAtomValue = (atomState) => {
            if ('e' in atomState) throw atomState.e;
            return atomState.v;
          },
          createStore = () => {
            const atomStateMap = new WeakMap(),
              mountedMap = new WeakMap(),
              pendingMap = new Map();
            let storeListenersRev1, storeListenersRev2, mountedAtoms;
            (storeListenersRev1 = new Set()),
              (storeListenersRev2 = new Set()),
              (mountedAtoms = new Set());
            const getAtomState = (atom) => atomStateMap.get(atom),
              setAtomState = (atom, atomState) => {
                Object.freeze(atomState);
                const prevAtomState = atomStateMap.get(atom);
                if (
                  (atomStateMap.set(atom, atomState),
                  pendingMap.has(atom) || pendingMap.set(atom, prevAtomState),
                  prevAtomState && hasPromiseAtomValue(prevAtomState))
                ) {
                  const next =
                    'v' in atomState
                      ? atomState.v instanceof Promise
                        ? atomState.v
                        : Promise.resolve(atomState.v)
                      : Promise.reject(atomState.e);
                  cancelPromise(prevAtomState.v, next);
                }
              },
              updateDependencies = (atom, nextAtomState, nextDependencies) => {
                const dependencies = new Map();
                let changed = !1;
                nextDependencies.forEach((aState, a) => {
                  aState || a !== atom || (aState = nextAtomState),
                    aState
                      ? (dependencies.set(a, aState),
                        nextAtomState.d.get(a) !== aState && (changed = !0))
                      : console.warn('[Bug] atom state not found');
                }),
                  (changed || nextAtomState.d.size !== dependencies.size) &&
                    (nextAtomState.d = dependencies);
              },
              setAtomValue = (atom, value, nextDependencies) => {
                const prevAtomState = getAtomState(atom),
                  nextAtomState = {
                    d:
                      (null == prevAtomState ? void 0 : prevAtomState.d) ||
                      new Map(),
                    v: value,
                  };
                if (
                  (nextDependencies &&
                    updateDependencies(atom, nextAtomState, nextDependencies),
                  prevAtomState &&
                    isEqualAtomValue(prevAtomState, nextAtomState) &&
                    prevAtomState.d === nextAtomState.d)
                )
                  return prevAtomState;
                if (
                  prevAtomState &&
                  hasPromiseAtomValue(prevAtomState) &&
                  hasPromiseAtomValue(nextAtomState) &&
                  ((b = nextAtomState),
                  'v' in (a = prevAtomState) &&
                    'v' in b &&
                    a.v.orig &&
                    a.v.orig === b.v.orig)
                ) {
                  if (prevAtomState.d === nextAtomState.d) return prevAtomState;
                  nextAtomState.v = prevAtomState.v;
                }
                var a, b;
                return setAtomState(atom, nextAtomState), nextAtomState;
              },
              setAtomValueOrPromise = (
                atom,
                valueOrPromise,
                nextDependencies,
                abortPromise,
              ) => {
                if (
                  'function' ==
                  typeof (null == (x = valueOrPromise) ? void 0 : x.then)
                ) {
                  let continuePromise;
                  const promise = new Promise((resolve, reject) => {
                    let settled = !1;
                    valueOrPromise.then(
                      (v) => {
                        if (!settled) {
                          settled = !0;
                          const prevAtomState = getAtomState(atom),
                            nextAtomState = setAtomValue(
                              atom,
                              promise,
                              nextDependencies,
                            );
                          resolvePromise(promise, v),
                            resolve(v),
                            (null == prevAtomState
                              ? void 0
                              : prevAtomState.d) !== nextAtomState.d &&
                              mountDependencies(
                                atom,
                                nextAtomState,
                                null == prevAtomState
                                  ? void 0
                                  : prevAtomState.d,
                              );
                        }
                      },
                      (e) => {
                        if (!settled) {
                          settled = !0;
                          const prevAtomState = getAtomState(atom),
                            nextAtomState = setAtomValue(
                              atom,
                              promise,
                              nextDependencies,
                            );
                          rejectPromise(promise, e),
                            reject(e),
                            (null == prevAtomState
                              ? void 0
                              : prevAtomState.d) !== nextAtomState.d &&
                              mountDependencies(
                                atom,
                                nextAtomState,
                                null == prevAtomState
                                  ? void 0
                                  : prevAtomState.d,
                              );
                        }
                      },
                    ),
                      (continuePromise = (next) => {
                        settled ||
                          ((settled = !0),
                          next.then(
                            (v) => resolvePromise(promise, v),
                            (e) => rejectPromise(promise, e),
                          ),
                          resolve(next));
                      });
                  });
                  return (
                    (promise.orig = valueOrPromise),
                    (promise.status = 'pending'),
                    ((promise, cancel) => {
                      cancelPromiseMap.set(promise, cancel),
                        promise
                          .catch(() => {})
                          .finally(() => cancelPromiseMap.delete(promise));
                    })(promise, (next) => {
                      next && continuePromise(next),
                        null == abortPromise || abortPromise();
                    }),
                    setAtomValue(atom, promise, nextDependencies)
                  );
                }
                var x;
                return setAtomValue(atom, valueOrPromise, nextDependencies);
              },
              readAtomState = (atom) => {
                const atomState = getAtomState(atom);
                if (
                  atomState &&
                  (atomState.d.forEach((_, a) => {
                    a === atom || mountedMap.has(a) || readAtomState(a);
                  }),
                  Array.from(atomState.d).every(([a, s]) => {
                    const aState = getAtomState(a);
                    return (
                      a === atom ||
                      aState === s ||
                      (aState &&
                        !hasPromiseAtomValue(aState) &&
                        isEqualAtomValue(aState, s))
                    );
                  }))
                )
                  return atomState;
                const nextDependencies = new Map();
                let isSync = !0;
                const getter = (a) => {
                  if (a === atom) {
                    const aState2 = getAtomState(a);
                    if (aState2)
                      return (
                        nextDependencies.set(a, aState2),
                        returnAtomValue(aState2)
                      );
                    if (hasInitialValue(a))
                      return nextDependencies.set(a, void 0), a.init;
                    throw new Error('no atom init');
                  }
                  const aState = readAtomState(a);
                  return (
                    nextDependencies.set(a, aState), returnAtomValue(aState)
                  );
                };
                let controller, setSelf;
                const options = {
                  get signal() {
                    return (
                      controller || (controller = new AbortController()),
                      controller.signal
                    );
                  },
                  get setSelf() {
                    return (
                      isActuallyWritableAtom(atom) ||
                        console.warn(
                          'setSelf function cannot be used with read-only atom',
                        ),
                      !setSelf &&
                        isActuallyWritableAtom(atom) &&
                        (setSelf = (...args) => {
                          if (
                            (isSync &&
                              console.warn(
                                'setSelf function cannot be called in sync',
                              ),
                            !isSync)
                          )
                            return writeAtom(atom, ...args);
                        }),
                      setSelf
                    );
                  },
                };
                try {
                  const valueOrPromise = atom.read(getter, options);
                  return setAtomValueOrPromise(
                    atom,
                    valueOrPromise,
                    nextDependencies,
                    () => (null == controller ? void 0 : controller.abort()),
                  );
                } catch (error) {
                  return ((atom, error, nextDependencies) => {
                    const prevAtomState = getAtomState(atom),
                      nextAtomState = {
                        d:
                          (null == prevAtomState ? void 0 : prevAtomState.d) ||
                          new Map(),
                        e: error,
                      };
                    return (
                      nextDependencies &&
                        updateDependencies(
                          atom,
                          nextAtomState,
                          nextDependencies,
                        ),
                      prevAtomState &&
                      isEqualAtomError(prevAtomState, nextAtomState) &&
                      prevAtomState.d === nextAtomState.d
                        ? prevAtomState
                        : (setAtomState(atom, nextAtomState), nextAtomState)
                    );
                  })(atom, error, nextDependencies);
                } finally {
                  isSync = !1;
                }
              },
              readAtom = (atom) => returnAtomValue(readAtomState(atom)),
              canUnmountAtom = (atom, mounted) =>
                !mounted.l.size &&
                (!mounted.t.size ||
                  (1 === mounted.t.size && mounted.t.has(atom))),
              recomputeDependents = (atom) => {
                const dependencyMap = new Map(),
                  dirtyMap = new WeakMap(),
                  loop1 = (a) => {
                    const mounted = mountedMap.get(a);
                    null == mounted ||
                      mounted.t.forEach((dependent) => {
                        dependent !== a &&
                          (dependencyMap.set(
                            dependent,
                            (dependencyMap.get(dependent) || new Set()).add(a),
                          ),
                          dirtyMap.set(
                            dependent,
                            (dirtyMap.get(dependent) || 0) + 1,
                          ),
                          loop1(dependent));
                      });
                  };
                loop1(atom);
                const loop2 = (a) => {
                  const mounted = mountedMap.get(a);
                  null == mounted ||
                    mounted.t.forEach((dependent) => {
                      var _a;
                      if (dependent !== a) {
                        let dirtyCount = dirtyMap.get(dependent);
                        if (
                          (dirtyCount && dirtyMap.set(dependent, --dirtyCount),
                          !dirtyCount)
                        ) {
                          let isChanged = !!(null ==
                          (_a = dependencyMap.get(dependent))
                            ? void 0
                            : _a.size);
                          if (isChanged) {
                            const prevAtomState = getAtomState(dependent),
                              nextAtomState = readAtomState(dependent);
                            isChanged =
                              !prevAtomState ||
                              !isEqualAtomValue(prevAtomState, nextAtomState);
                          }
                          isChanged ||
                            dependencyMap.forEach((s) => s.delete(dependent));
                        }
                        loop2(dependent);
                      }
                    });
                };
                loop2(atom);
              },
              writeAtomState = (atom, ...args) => {
                let isSync = !0;
                const result = atom.write(
                  (a) => returnAtomValue(readAtomState(a)),
                  (a, ...args2) => {
                    let r;
                    if (a === atom) {
                      if (!hasInitialValue(a))
                        throw new Error('atom not writable');
                      const prevAtomState = getAtomState(a),
                        nextAtomState = setAtomValueOrPromise(a, args2[0]);
                      (prevAtomState &&
                        isEqualAtomValue(prevAtomState, nextAtomState)) ||
                        recomputeDependents(a);
                    } else r = writeAtomState(a, ...args2);
                    if (!isSync) {
                      const flushed = flushPending();
                      storeListenersRev2.forEach((l) =>
                        l({ type: 'async-write', flushed }),
                      );
                    }
                    return r;
                  },
                  ...args,
                );
                return (isSync = !1), result;
              },
              writeAtom = (atom, ...args) => {
                const result = writeAtomState(atom, ...args),
                  flushed = flushPending();
                return (
                  storeListenersRev2.forEach((l) =>
                    l({ type: 'write', flushed }),
                  ),
                  result
                );
              },
              mountAtom = (atom, initialDependent) => {
                const mounted = {
                  t: new Set(initialDependent && [initialDependent]),
                  l: new Set(),
                };
                if (
                  (mountedMap.set(atom, mounted),
                  mountedAtoms.add(atom),
                  readAtomState(atom).d.forEach((_, a) => {
                    const aMounted = mountedMap.get(a);
                    aMounted
                      ? aMounted.t.add(atom)
                      : a !== atom && mountAtom(a, atom);
                  }),
                  readAtomState(atom),
                  isActuallyWritableAtom(atom) && atom.onMount)
                ) {
                  const onUnmount = atom.onMount((...args) =>
                    writeAtom(atom, ...args),
                  );
                  onUnmount && (mounted.u = onUnmount);
                }
                return mounted;
              },
              unmountAtom = (atom) => {
                var _a;
                const onUnmount =
                  null == (_a = mountedMap.get(atom)) ? void 0 : _a.u;
                onUnmount && onUnmount(),
                  mountedMap.delete(atom),
                  mountedAtoms.delete(atom);
                const atomState = getAtomState(atom);
                atomState
                  ? (hasPromiseAtomValue(atomState) &&
                      cancelPromise(atomState.v),
                    atomState.d.forEach((_, a) => {
                      if (a !== atom) {
                        const mounted = mountedMap.get(a);
                        mounted &&
                          (mounted.t.delete(atom),
                          canUnmountAtom(a, mounted) && unmountAtom(a));
                      }
                    }))
                  : console.warn(
                      '[Bug] could not find atom state to unmount',
                      atom,
                    );
              },
              mountDependencies = (atom, atomState, prevDependencies) => {
                const depSet = new Set(atomState.d.keys());
                null == prevDependencies ||
                  prevDependencies.forEach((_, a) => {
                    if (depSet.has(a)) return void depSet.delete(a);
                    const mounted = mountedMap.get(a);
                    mounted &&
                      (mounted.t.delete(atom),
                      canUnmountAtom(a, mounted) && unmountAtom(a));
                  }),
                  depSet.forEach((a) => {
                    const mounted = mountedMap.get(a);
                    mounted
                      ? mounted.t.add(atom)
                      : mountedMap.has(atom) && mountAtom(a, atom);
                  });
              },
              flushPending = () => {
                let flushed;
                for (flushed = new Set(); pendingMap.size; ) {
                  const pending = Array.from(pendingMap);
                  pendingMap.clear(),
                    pending.forEach(([atom, prevAtomState]) => {
                      const atomState = getAtomState(atom);
                      if (atomState) {
                        atomState.d !==
                          (null == prevAtomState ? void 0 : prevAtomState.d) &&
                          mountDependencies(
                            atom,
                            atomState,
                            null == prevAtomState ? void 0 : prevAtomState.d,
                          );
                        const mounted = mountedMap.get(atom);
                        !mounted ||
                          (prevAtomState &&
                            !hasPromiseAtomValue(prevAtomState) &&
                            (isEqualAtomValue(prevAtomState, atomState) ||
                              isEqualAtomError(prevAtomState, atomState))) ||
                          (mounted.l.forEach((listener) => listener()),
                          flushed.add(atom));
                      } else console.warn('[Bug] no atom state to flush');
                    });
                }
                return storeListenersRev1.forEach((l) => l('state')), flushed;
              },
              subscribeAtom = (atom, listener) => {
                const mounted = ((atom) => {
                    let mounted = mountedMap.get(atom);
                    return mounted || (mounted = mountAtom(atom)), mounted;
                  })(atom),
                  flushed = flushPending(),
                  listeners = mounted.l;
                return (
                  listeners.add(listener),
                  storeListenersRev1.forEach((l) => l('sub')),
                  storeListenersRev2.forEach((l) =>
                    l({ type: 'sub', flushed }),
                  ),
                  () => {
                    listeners.delete(listener),
                      ((atom) => {
                        const mounted = mountedMap.get(atom);
                        mounted &&
                          canUnmountAtom(atom, mounted) &&
                          unmountAtom(atom);
                      })(atom),
                      storeListenersRev1.forEach((l) => l('unsub')),
                      storeListenersRev2.forEach((l) => l({ type: 'unsub' }));
                  }
                );
              };
            return {
              get: readAtom,
              set: writeAtom,
              sub: subscribeAtom,
              dev_subscribe_store: (l, rev) =>
                2 !== rev
                  ? (console.warn(
                      'The current StoreListener revision is 2. The older ones are deprecated.',
                    ),
                    storeListenersRev1.add(l),
                    () => {
                      storeListenersRev1.delete(l);
                    })
                  : (storeListenersRev2.add(l),
                    () => {
                      storeListenersRev2.delete(l);
                    }),
              dev_get_mounted_atoms: () => mountedAtoms.values(),
              dev_get_atom_state: (a) => atomStateMap.get(a),
              dev_get_mounted: (a) => mountedMap.get(a),
              dev_restore_atoms: (values) => {
                for (const [atom, valueOrPromise] of values)
                  hasInitialValue(atom) &&
                    (setAtomValueOrPromise(atom, valueOrPromise),
                    recomputeDependents(atom));
                const flushed = flushPending();
                storeListenersRev2.forEach((l) =>
                  l({ type: 'restore', flushed }),
                );
              },
            };
          };
        let defaultStore;
        const getDefaultStore = () => (
          defaultStore || (defaultStore = createStore()), defaultStore
        );
        globalThis.__JOTAI_PACKAGE_IS_LOADED__
          ? console.warn(
              'Detected multiple Jotai instances. It may cause unexpected behavior. https://github.com/pmndrs/jotai/discussions/2044',
            )
          : (globalThis.__JOTAI_PACKAGE_IS_LOADED__ = !0);
      },
    './node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        var f = __webpack_require__(
            './node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          k = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          m = Object.prototype.hasOwnProperty,
          n =
            f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          p = { key: !0, ref: !0, __self: !0, __source: !0 };
        function q(c, a, g) {
          var b,
            d = {},
            e = null,
            h = null;
          for (b in (void 0 !== g && (e = '' + g),
          void 0 !== a.key && (e = '' + a.key),
          void 0 !== a.ref && (h = a.ref),
          a))
            m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
          if (c && c.defaultProps)
            for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
          return {
            $$typeof: k,
            type: c,
            key: e,
            ref: h,
            props: d,
            _owner: n.current,
          };
        }
        (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
      },
    './node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js',
      );
    },
  },
]);
