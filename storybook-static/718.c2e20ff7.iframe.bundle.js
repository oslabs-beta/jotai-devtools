'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [718],
  {
    './node_modules/jotai/esm/react.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Kq: () => Provider,
        Xr: () => useSetAtom,
        fp: () => useAtom,
        md: () => useAtomValue,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/jotai/esm/vanilla.mjs',
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
            (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.zp)()
          );
        },
        Provider = ({ children, store }) => {
          const storeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
          return (
            store ||
              storeRef.current ||
              (storeRef.current = (0,
              jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.y$)()),
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
    './node_modules/jotai/esm/vanilla.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        eU: () => atom,
        y$: () => createStore,
        zp: () => getDefaultStore,
      });
      let keyCount = 0;
      function atom(read, write) {
        const key = 'atom' + ++keyCount,
          config = { toString: () => key };
        return (
          'function' == typeof read
            ? (config.read = read)
            : ((config.init = read),
              (config.read = defaultRead),
              (config.write = defaultWrite)),
          write && (config.write = write),
          config
        );
      }
      function defaultRead(get) {
        return get(this);
      }
      function defaultWrite(get, set, arg) {
        return set(this, 'function' == typeof arg ? arg(get(this)) : arg);
      }
      const isSelfAtom = (atom, a) =>
          atom.unstable_is ? atom.unstable_is(a) : a === atom,
        hasInitialValue = (atom) => 'init' in atom,
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
          !!a && 'v' in a && 'v' in b && Object.is(a.v, b.v),
        isEqualAtomError = (a, b) =>
          !!a && 'e' in a && 'e' in b && Object.is(a.e, b.e),
        hasPromiseAtomValue = (a) => !!a && 'v' in a && a.v instanceof Promise,
        returnAtomValue = (atomState) => {
          if ('e' in atomState) throw atomState.e;
          return atomState.v;
        },
        createStore$1 = () => {
          const atomStateMap = new WeakMap(),
            mountedMap = new WeakMap(),
            pendingStack = [],
            pendingMap = new WeakMap();
          let devListenersRev2, mountedAtoms;
          (devListenersRev2 = new Set()), (mountedAtoms = new Set());
          const getAtomState = (atom) => atomStateMap.get(atom),
            addPendingDependent = (atom, atomState) => {
              atomState.d.forEach((_, a) => {
                var _a;
                if (!pendingMap.has(a)) {
                  const aState = getAtomState(a);
                  null == (_a = pendingStack[pendingStack.length - 1]) ||
                    _a.add(a),
                    pendingMap.set(a, [aState, new Set()]),
                    aState && addPendingDependent(a, aState);
                }
                pendingMap.get(a)[1].add(atom);
              });
            },
            setAtomState = (atom, atomState) => {
              var _a;
              Object.freeze(atomState);
              const prevAtomState = getAtomState(atom);
              if (
                (atomStateMap.set(atom, atomState),
                pendingMap.has(atom) ||
                  (null == (_a = pendingStack[pendingStack.length - 1]) ||
                    _a.add(atom),
                  pendingMap.set(atom, [prevAtomState, new Set()]),
                  addPendingDependent(atom, atomState)),
                hasPromiseAtomValue(prevAtomState))
              ) {
                const next =
                  'v' in atomState
                    ? atomState.v instanceof Promise
                      ? atomState.v
                      : Promise.resolve(atomState.v)
                    : Promise.reject(atomState.e);
                prevAtomState.v !== next &&
                  cancelPromise(prevAtomState.v, next);
              }
            },
            updateDependencies = (
              atom,
              nextAtomState,
              nextDependencies,
              keepPreviousDependencies,
            ) => {
              const dependencies = new Map(
                keepPreviousDependencies ? nextAtomState.d : null,
              );
              let changed = !1;
              nextDependencies.forEach((aState, a) => {
                !aState && isSelfAtom(atom, a) && (aState = nextAtomState),
                  aState
                    ? (dependencies.set(a, aState),
                      nextAtomState.d.get(a) !== aState && (changed = !0))
                    : console.warn('[Bug] atom state not found');
              }),
                (changed || nextAtomState.d.size !== dependencies.size) &&
                  (nextAtomState.d = dependencies);
            },
            setAtomValue = (
              atom,
              value,
              nextDependencies,
              keepPreviousDependencies,
            ) => {
              const prevAtomState = getAtomState(atom),
                nextAtomState = {
                  d:
                    (null == prevAtomState ? void 0 : prevAtomState.d) ||
                    new Map(),
                  v: value,
                };
              if (
                (nextDependencies &&
                  updateDependencies(
                    atom,
                    nextAtomState,
                    nextDependencies,
                    keepPreviousDependencies,
                  ),
                isEqualAtomValue(prevAtomState, nextAtomState) &&
                  prevAtomState.d === nextAtomState.d)
              )
                return prevAtomState;
              if (
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
                const updatePromiseDependencies = () => {
                    const prevAtomState = getAtomState(atom);
                    if (
                      !hasPromiseAtomValue(prevAtomState) ||
                      prevAtomState.v !== promise
                    )
                      return;
                    const nextAtomState = setAtomValue(
                      atom,
                      promise,
                      nextDependencies,
                    );
                    mountedMap.has(atom) &&
                      prevAtomState.d !== nextAtomState.d &&
                      mountDependencies(atom, nextAtomState, prevAtomState.d);
                  },
                  promise = new Promise((resolve, reject) => {
                    let settled = !1;
                    valueOrPromise.then(
                      (v) => {
                        settled ||
                          ((settled = !0),
                          resolvePromise(promise, v),
                          resolve(v),
                          updatePromiseDependencies());
                      },
                      (e) => {
                        settled ||
                          ((settled = !0),
                          rejectPromise(promise, e),
                          reject(e),
                          updatePromiseDependencies());
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
                  setAtomValue(atom, promise, nextDependencies, !0)
                );
              }
              var x;
              return setAtomValue(atom, valueOrPromise, nextDependencies);
            },
            readAtomState = (atom, force) => {
              const atomState = getAtomState(atom);
              if (!force && atomState) {
                if (mountedMap.has(atom)) return atomState;
                if (
                  Array.from(atomState.d).every(([a, s]) => {
                    if (a === atom) return !0;
                    const aState = readAtomState(a);
                    return aState === s || isEqualAtomValue(aState, s);
                  })
                )
                  return atomState;
              }
              const nextDependencies = new Map();
              let isSync = !0;
              const getter = (a) => {
                if (isSelfAtom(atom, a)) {
                  const aState2 = getAtomState(a);
                  if (aState2)
                    return (
                      nextDependencies.set(a, aState2), returnAtomValue(aState2)
                    );
                  if (hasInitialValue(a))
                    return nextDependencies.set(a, void 0), a.init;
                  throw new Error('no atom init');
                }
                const aState = readAtomState(a);
                return nextDependencies.set(a, aState), returnAtomValue(aState);
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
                      updateDependencies(atom, nextAtomState, nextDependencies),
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
            recomputeDependents = (atom) => {
              const topsortedAtoms = new Array(),
                markedAtoms = new Set(),
                visit = (n) => {
                  if (!markedAtoms.has(n)) {
                    markedAtoms.add(n);
                    for (const m of ((a) => {
                      var _a, _b;
                      const dependents = new Set(
                        null == (_a = mountedMap.get(a)) ? void 0 : _a.t,
                      );
                      return (
                        null == (_b = pendingMap.get(a)) ||
                          _b[1].forEach((dependent) => {
                            dependents.add(dependent);
                          }),
                        dependents
                      );
                    })(n))
                      n !== m && visit(m);
                    topsortedAtoms.push(n);
                  }
                };
              visit(atom);
              const changedAtoms = new Set([atom]);
              for (let i = topsortedAtoms.length - 1; i >= 0; --i) {
                const a = topsortedAtoms[i],
                  prevAtomState = getAtomState(a);
                if (!prevAtomState) continue;
                let hasChangedDeps = !1;
                for (const dep of prevAtomState.d.keys())
                  if (dep !== a && changedAtoms.has(dep)) {
                    hasChangedDeps = !0;
                    break;
                  }
                if (hasChangedDeps) {
                  const nextAtomState = readAtomState(a, !0);
                  isEqualAtomValue(prevAtomState, nextAtomState) ||
                    changedAtoms.add(a);
                }
              }
            },
            writeAtomState = (atom, ...args) =>
              atom.write(
                (a) => returnAtomValue(readAtomState(a)),
                (a, ...args2) => {
                  const isSync = pendingStack.length > 0;
                  let r;
                  if (
                    (isSync || pendingStack.push(new Set([a])),
                    isSelfAtom(atom, a))
                  ) {
                    if (!hasInitialValue(a))
                      throw new Error('atom not writable');
                    const prevAtomState = getAtomState(a),
                      nextAtomState = setAtomValueOrPromise(a, args2[0]);
                    isEqualAtomValue(prevAtomState, nextAtomState) ||
                      recomputeDependents(a);
                  } else r = writeAtomState(a, ...args2);
                  if (!isSync) {
                    const flushed = flushPending(pendingStack.pop());
                    devListenersRev2.forEach((l) =>
                      l({ type: 'async-write', flushed }),
                    );
                  }
                  return r;
                },
                ...args,
              ),
            writeAtom = (atom, ...args) => {
              pendingStack.push(new Set([atom]));
              const result = writeAtomState(atom, ...args),
                flushed = flushPending(pendingStack.pop());
              return (
                devListenersRev2.forEach((l) => l({ type: 'write', flushed })),
                result
              );
            },
            mountAtom = (atom, initialDependent, onMountQueue) => {
              var _a;
              const existingMount = mountedMap.get(atom);
              if (existingMount)
                return (
                  initialDependent && existingMount.t.add(initialDependent),
                  existingMount
                );
              const queue = onMountQueue || [];
              null == (_a = getAtomState(atom)) ||
                _a.d.forEach((_, a) => {
                  a !== atom && mountAtom(a, atom, queue);
                }),
                readAtomState(atom);
              const mounted = {
                t: new Set(initialDependent && [initialDependent]),
                l: new Set(),
              };
              if (
                (mountedMap.set(atom, mounted),
                mountedAtoms.add(atom),
                isActuallyWritableAtom(atom) && atom.onMount)
              ) {
                const { onMount } = atom;
                queue.push(() => {
                  const onUnmount = onMount((...args) =>
                    writeAtom(atom, ...args),
                  );
                  onUnmount && (mounted.u = onUnmount);
                });
              }
              return onMountQueue || queue.forEach((f) => f()), mounted;
            },
            tryUnmountAtom = (atom, mounted) => {
              if (
                !((atom, mounted) =>
                  !mounted.l.size &&
                  (!mounted.t.size ||
                    (1 === mounted.t.size && mounted.t.has(atom))))(
                  atom,
                  mounted,
                )
              )
                return;
              const onUnmount = mounted.u;
              onUnmount && onUnmount(),
                mountedMap.delete(atom),
                mountedAtoms.delete(atom);
              const atomState = getAtomState(atom);
              atomState
                ? (hasPromiseAtomValue(atomState) && cancelPromise(atomState.v),
                  atomState.d.forEach((_, a) => {
                    if (a !== atom) {
                      const mountedDep = mountedMap.get(a);
                      mountedDep &&
                        (mountedDep.t.delete(atom),
                        tryUnmountAtom(a, mountedDep));
                    }
                  }))
                : console.warn(
                    '[Bug] could not find atom state to unmount',
                    atom,
                  );
            },
            mountDependencies = (atom, atomState, prevDependencies) => {
              const depSet = new Set(atomState.d.keys()),
                maybeUnmountAtomSet = new Set();
              null == prevDependencies ||
                prevDependencies.forEach((_, a) => {
                  if (depSet.has(a)) return void depSet.delete(a);
                  maybeUnmountAtomSet.add(a);
                  const mounted = mountedMap.get(a);
                  mounted && mounted.t.delete(atom);
                }),
                depSet.forEach((a) => {
                  mountAtom(a, atom);
                }),
                maybeUnmountAtomSet.forEach((a) => {
                  const mounted = mountedMap.get(a);
                  mounted && tryUnmountAtom(a, mounted);
                });
            },
            flushPending = (pendingAtoms) => {
              let flushed;
              flushed = new Set();
              const pending = [],
                collectPending = (pendingAtom) => {
                  var _a;
                  if (!pendingMap.has(pendingAtom)) return;
                  const [prevAtomState, dependents] =
                    pendingMap.get(pendingAtom);
                  pendingMap.delete(pendingAtom),
                    pending.push([pendingAtom, prevAtomState]),
                    dependents.forEach(collectPending),
                    null == (_a = getAtomState(pendingAtom)) ||
                      _a.d.forEach((_, a) => collectPending(a));
                };
              return (
                pendingAtoms.forEach(collectPending),
                pending.forEach(([atom, prevAtomState]) => {
                  const atomState = getAtomState(atom);
                  if (atomState) {
                    if (atomState !== prevAtomState) {
                      const mounted = mountedMap.get(atom);
                      mounted &&
                        atomState.d !==
                          (null == prevAtomState ? void 0 : prevAtomState.d) &&
                        mountDependencies(
                          atom,
                          atomState,
                          null == prevAtomState ? void 0 : prevAtomState.d,
                        ),
                        mounted &&
                          (hasPromiseAtomValue(prevAtomState) ||
                            (!isEqualAtomValue(prevAtomState, atomState) &&
                              !isEqualAtomError(prevAtomState, atomState))) &&
                          (mounted.l.forEach((listener) => listener()),
                          flushed.add(atom));
                    }
                  } else console.warn('[Bug] no atom state to flush');
                }),
                flushed
              );
            },
            subscribeAtom = (atom, listener) => {
              const mounted = mountAtom(atom),
                flushed = flushPending([atom]),
                listeners = mounted.l;
              return (
                listeners.add(listener),
                devListenersRev2.forEach((l) => l({ type: 'sub', flushed })),
                () => {
                  listeners.delete(listener),
                    tryUnmountAtom(atom, mounted),
                    devListenersRev2.forEach((l) => l({ type: 'unsub' }));
                }
              );
            };
          return {
            get: readAtom,
            set: writeAtom,
            sub: subscribeAtom,
            dev_subscribe_store: (l) => (
              devListenersRev2.add(l),
              () => {
                devListenersRev2.delete(l);
              }
            ),
            dev_get_mounted_atoms: () => mountedAtoms.values(),
            dev_get_atom_state: (a) => atomStateMap.get(a),
            dev_get_mounted: (a) => mountedMap.get(a),
            dev_restore_atoms: (values) => {
              pendingStack.push(new Set());
              for (const [atom, valueOrPromise] of values)
                hasInitialValue(atom) &&
                  (setAtomValueOrPromise(atom, valueOrPromise),
                  recomputeDependents(atom));
              const flushed = flushPending(pendingStack.pop());
              devListenersRev2.forEach((l) => l({ type: 'restore', flushed }));
            },
          };
        };
      let defaultStore;
      Symbol('CONTINUE_PROMISE');
      const createStore = createStore$1,
        getDefaultStore = () => (
          defaultStore ||
            ((defaultStore = createStore$1()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore),
            globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore &&
              console.warn(
                'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044',
              )),
          defaultStore
        );
    },
  },
]);
