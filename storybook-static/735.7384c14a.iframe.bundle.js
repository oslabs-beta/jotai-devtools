'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [735],
  {
    './node_modules/jotai-tanstack-query/dist/index.modern.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { fw: () => a });
      const isServer = 'undefined' == typeof window || 'Deno' in window;
      function noop() {}
      function isValidTimeout(value) {
        return 'number' == typeof value && value >= 0 && value !== 1 / 0;
      }
      function timeUntilStale(updatedAt, staleTime) {
        return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
      }
      function parseQueryArgs(arg1, arg2, arg3) {
        return isQueryKey(arg1)
          ? 'function' == typeof arg2
            ? { ...arg3, queryKey: arg1, queryFn: arg2 }
            : { ...arg2, queryKey: arg1 }
          : arg1;
      }
      function parseFilterArgs(arg1, arg2, arg3) {
        return isQueryKey(arg1)
          ? [{ ...arg2, queryKey: arg1 }, arg3]
          : [arg1 || {}, arg2];
      }
      function matchQuery(filters, query) {
        const {
          type = 'all',
          exact,
          fetchStatus,
          predicate,
          queryKey,
          stale,
        } = filters;
        if (isQueryKey(queryKey))
          if (exact) {
            if (
              query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)
            )
              return !1;
          } else if (!partialMatchKey(query.queryKey, queryKey)) return !1;
        if ('all' !== type) {
          const isActive = query.isActive();
          if ('active' === type && !isActive) return !1;
          if ('inactive' === type && isActive) return !1;
        }
        return (
          ('boolean' != typeof stale || query.isStale() === stale) &&
          (void 0 === fetchStatus || fetchStatus === query.state.fetchStatus) &&
          !(predicate && !predicate(query))
        );
      }
      function matchMutation(filters, mutation) {
        const { exact, fetching, predicate, mutationKey } = filters;
        if (isQueryKey(mutationKey)) {
          if (!mutation.options.mutationKey) return !1;
          if (exact) {
            if (
              hashQueryKey(mutation.options.mutationKey) !==
              hashQueryKey(mutationKey)
            )
              return !1;
          } else if (
            !partialMatchKey(mutation.options.mutationKey, mutationKey)
          )
            return !1;
        }
        return (
          ('boolean' != typeof fetching ||
            ('loading' === mutation.state.status) === fetching) &&
          !(predicate && !predicate(mutation))
        );
      }
      function hashQueryKeyByOptions(queryKey, options) {
        return (
          (null == options ? void 0 : options.queryKeyHashFn) || hashQueryKey
        )(queryKey);
      }
      function hashQueryKey(queryKey) {
        return JSON.stringify(queryKey, (_, val) =>
          isPlainObject(val)
            ? Object.keys(val)
                .sort()
                .reduce((result, key) => ((result[key] = val[key]), result), {})
            : val,
        );
      }
      function partialMatchKey(a, b) {
        return partialDeepEqual(a, b);
      }
      function partialDeepEqual(a, b) {
        return (
          a === b ||
          (typeof a == typeof b &&
            !(!a || !b || 'object' != typeof a || 'object' != typeof b) &&
            !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key])))
        );
      }
      function replaceEqualDeep(a, b) {
        if (a === b) return a;
        const array = isPlainArray(a) && isPlainArray(b);
        if (array || (isPlainObject(a) && isPlainObject(b))) {
          const aSize = array ? a.length : Object.keys(a).length,
            bItems = array ? b : Object.keys(b),
            bSize = bItems.length,
            copy = array ? [] : {};
          let equalItems = 0;
          for (let i = 0; i < bSize; i++) {
            const key = array ? i : bItems[i];
            (copy[key] = replaceEqualDeep(a[key], b[key])),
              copy[key] === a[key] && equalItems++;
          }
          return aSize === bSize && equalItems === aSize ? a : copy;
        }
        return b;
      }
      function shallowEqualObjects(a, b) {
        if ((a && !b) || (b && !a)) return !1;
        for (const key in a) if (a[key] !== b[key]) return !1;
        return !0;
      }
      function isPlainArray(value) {
        return (
          Array.isArray(value) && value.length === Object.keys(value).length
        );
      }
      function isPlainObject(o) {
        if (!hasObjectPrototype(o)) return !1;
        const ctor = o.constructor;
        if (void 0 === ctor) return !0;
        const prot = ctor.prototype;
        return (
          !!hasObjectPrototype(prot) && !!prot.hasOwnProperty('isPrototypeOf')
        );
      }
      function hasObjectPrototype(o) {
        return '[object Object]' === Object.prototype.toString.call(o);
      }
      function isQueryKey(value) {
        return Array.isArray(value);
      }
      function sleep(timeout) {
        return new Promise((resolve) => {
          setTimeout(resolve, timeout);
        });
      }
      function scheduleMicrotask(callback) {
        sleep(0).then(callback);
      }
      function replaceData(prevData, data, options) {
        return null != options.isDataEqual &&
          options.isDataEqual(prevData, data)
          ? prevData
          : 'function' == typeof options.structuralSharing
            ? options.structuralSharing(prevData, data)
            : !1 !== options.structuralSharing
              ? replaceEqualDeep(prevData, data)
              : data;
      }
      const defaultLogger = console;
      const notifyManager = (function createNotifyManager() {
        let queue = [],
          transactions = 0,
          notifyFn = (callback) => {
            callback();
          },
          batchNotifyFn = (callback) => {
            callback();
          };
        const schedule = (callback) => {
            transactions
              ? queue.push(callback)
              : scheduleMicrotask(() => {
                  notifyFn(callback);
                });
          },
          flush = () => {
            const originalQueue = queue;
            (queue = []),
              originalQueue.length &&
                scheduleMicrotask(() => {
                  batchNotifyFn(() => {
                    originalQueue.forEach((callback) => {
                      notifyFn(callback);
                    });
                  });
                });
          };
        return {
          batch: (callback) => {
            let result;
            transactions++;
            try {
              result = callback();
            } finally {
              transactions--, transactions || flush();
            }
            return result;
          },
          batchCalls:
            (callback) =>
            (...args) => {
              schedule(() => {
                callback(...args);
              });
            },
          schedule,
          setNotifyFunction: (fn) => {
            notifyFn = fn;
          },
          setBatchNotifyFunction: (fn) => {
            batchNotifyFn = fn;
          },
        };
      })();
      class Subscribable {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(listener) {
          const identity = { listener };
          return (
            this.listeners.add(identity),
            this.onSubscribe(),
            () => {
              this.listeners.delete(identity), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      const focusManager = new (class FocusManager extends Subscribable {
          constructor() {
            super(),
              (this.setup = (onFocus) => {
                if (!isServer && window.addEventListener) {
                  const listener = () => onFocus();
                  return (
                    window.addEventListener('visibilitychange', listener, !1),
                    window.addEventListener('focus', listener, !1),
                    () => {
                      window.removeEventListener('visibilitychange', listener),
                        window.removeEventListener('focus', listener);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            var _this$cleanup;
            this.hasListeners() ||
              (null == (_this$cleanup = this.cleanup) ||
                _this$cleanup.call(this),
              (this.cleanup = void 0));
          }
          setEventListener(setup) {
            var _this$cleanup2;
            (this.setup = setup),
              null == (_this$cleanup2 = this.cleanup) ||
                _this$cleanup2.call(this),
              (this.cleanup = setup((focused) => {
                'boolean' == typeof focused
                  ? this.setFocused(focused)
                  : this.onFocus();
              }));
          }
          setFocused(focused) {
            this.focused !== focused &&
              ((this.focused = focused), this.onFocus());
          }
          onFocus() {
            this.listeners.forEach(({ listener }) => {
              listener();
            });
          }
          isFocused() {
            return 'boolean' == typeof this.focused
              ? this.focused
              : 'undefined' == typeof document ||
                  [void 0, 'visible', 'prerender'].includes(
                    document.visibilityState,
                  );
          }
        })(),
        onlineEvents = ['online', 'offline'];
      const onlineManager = new (class OnlineManager extends Subscribable {
        constructor() {
          super(),
            (this.setup = (onOnline) => {
              if (!isServer && window.addEventListener) {
                const listener = () => onOnline();
                return (
                  onlineEvents.forEach((event) => {
                    window.addEventListener(event, listener, !1);
                  }),
                  () => {
                    onlineEvents.forEach((event) => {
                      window.removeEventListener(event, listener);
                    });
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          var _this$cleanup;
          this.hasListeners() ||
            (null == (_this$cleanup = this.cleanup) || _this$cleanup.call(this),
            (this.cleanup = void 0));
        }
        setEventListener(setup) {
          var _this$cleanup2;
          (this.setup = setup),
            null == (_this$cleanup2 = this.cleanup) ||
              _this$cleanup2.call(this),
            (this.cleanup = setup((online) => {
              'boolean' == typeof online
                ? this.setOnline(online)
                : this.onOnline();
            }));
        }
        setOnline(online) {
          this.online !== online && ((this.online = online), this.onOnline());
        }
        onOnline() {
          this.listeners.forEach(({ listener }) => {
            listener();
          });
        }
        isOnline() {
          return 'boolean' == typeof this.online
            ? this.online
            : 'undefined' == typeof navigator ||
                void 0 === navigator.onLine ||
                navigator.onLine;
        }
      })();
      function defaultRetryDelay(failureCount) {
        return Math.min(1e3 * 2 ** failureCount, 3e4);
      }
      function canFetch(networkMode) {
        return (
          'online' !== (null != networkMode ? networkMode : 'online') ||
          onlineManager.isOnline()
        );
      }
      class CancelledError {
        constructor(options) {
          (this.revert = null == options ? void 0 : options.revert),
            (this.silent = null == options ? void 0 : options.silent);
        }
      }
      function isCancelledError(value) {
        return value instanceof CancelledError;
      }
      function createRetryer(config) {
        let continueFn,
          promiseResolve,
          promiseReject,
          isRetryCancelled = !1,
          failureCount = 0,
          isResolved = !1;
        const promise = new Promise((outerResolve, outerReject) => {
            (promiseResolve = outerResolve), (promiseReject = outerReject);
          }),
          shouldPause = () =>
            !focusManager.isFocused() ||
            ('always' !== config.networkMode && !onlineManager.isOnline()),
          resolve = (value) => {
            isResolved ||
              ((isResolved = !0),
              null == config.onSuccess || config.onSuccess(value),
              null == continueFn || continueFn(),
              promiseResolve(value));
          },
          reject = (value) => {
            isResolved ||
              ((isResolved = !0),
              null == config.onError || config.onError(value),
              null == continueFn || continueFn(),
              promiseReject(value));
          },
          pause = () =>
            new Promise((continueResolve) => {
              (continueFn = (value) => {
                const canContinue = isResolved || !shouldPause();
                return canContinue && continueResolve(value), canContinue;
              }),
                null == config.onPause || config.onPause();
            }).then(() => {
              (continueFn = void 0),
                isResolved || null == config.onContinue || config.onContinue();
            }),
          run = () => {
            if (isResolved) return;
            let promiseOrValue;
            try {
              promiseOrValue = config.fn();
            } catch (error) {
              promiseOrValue = Promise.reject(error);
            }
            Promise.resolve(promiseOrValue)
              .then(resolve)
              .catch((error) => {
                var _config$retry, _config$retryDelay;
                if (isResolved) return;
                const retry =
                    null != (_config$retry = config.retry) ? _config$retry : 3,
                  retryDelay =
                    null != (_config$retryDelay = config.retryDelay)
                      ? _config$retryDelay
                      : defaultRetryDelay,
                  delay =
                    'function' == typeof retryDelay
                      ? retryDelay(failureCount, error)
                      : retryDelay,
                  shouldRetry =
                    !0 === retry ||
                    ('number' == typeof retry && failureCount < retry) ||
                    ('function' == typeof retry && retry(failureCount, error));
                !isRetryCancelled && shouldRetry
                  ? (failureCount++,
                    null == config.onFail || config.onFail(failureCount, error),
                    sleep(delay)
                      .then(() => {
                        if (shouldPause()) return pause();
                      })
                      .then(() => {
                        isRetryCancelled ? reject(error) : run();
                      }))
                  : reject(error);
              });
          };
        return (
          canFetch(config.networkMode) ? run() : pause().then(run),
          {
            promise,
            cancel: (cancelOptions) => {
              isResolved ||
                (reject(new CancelledError(cancelOptions)),
                null == config.abort || config.abort());
            },
            continue: () =>
              (null == continueFn ? void 0 : continueFn())
                ? promise
                : Promise.resolve(),
            cancelRetry: () => {
              isRetryCancelled = !0;
            },
            continueRetry: () => {
              isRetryCancelled = !1;
            },
          }
        );
      }
      class Removable {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            isValidTimeout(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(newCacheTime) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != newCacheTime ? newCacheTime : isServer ? 1 / 0 : 3e5,
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
      class Query extends Removable {
        constructor(config) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = config.defaultOptions),
            this.setOptions(config.options),
            (this.observers = []),
            (this.cache = config.cache),
            (this.logger = config.logger || defaultLogger),
            (this.queryKey = config.queryKey),
            (this.queryHash = config.queryHash),
            (this.initialState =
              config.state ||
              (function getDefaultState(options) {
                const data =
                    'function' == typeof options.initialData
                      ? options.initialData()
                      : options.initialData,
                  hasData = void 0 !== data,
                  initialDataUpdatedAt = hasData
                    ? 'function' == typeof options.initialDataUpdatedAt
                      ? options.initialDataUpdatedAt()
                      : options.initialDataUpdatedAt
                    : 0;
                return {
                  data,
                  dataUpdateCount: 0,
                  dataUpdatedAt: hasData
                    ? null != initialDataUpdatedAt
                      ? initialDataUpdatedAt
                      : Date.now()
                    : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: hasData ? 'success' : 'loading',
                  fetchStatus: 'idle',
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setOptions(options) {
          (this.options = { ...this.defaultOptions, ...options }),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            'idle' !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(newData, options) {
          const data = replaceData(this.state.data, newData, this.options);
          return (
            this.dispatch({
              data,
              type: 'success',
              dataUpdatedAt: null == options ? void 0 : options.updatedAt,
              manual: null == options ? void 0 : options.manual,
            }),
            data
          );
        }
        setState(state, setStateOptions) {
          this.dispatch({ type: 'setState', state, setStateOptions });
        }
        cancel(options) {
          var _this$retryer;
          const promise = this.promise;
          return (
            null == (_this$retryer = this.retryer) ||
              _this$retryer.cancel(options),
            promise ? promise.then(noop).catch(noop) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some(
            (observer) => !1 !== observer.options.enabled,
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some(
              (observer) => observer.getCurrentResult().isStale,
            )
          );
        }
        isStaleByTime(staleTime = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !timeUntilStale(this.state.dataUpdatedAt, staleTime)
          );
        }
        onFocus() {
          var _this$retryer2;
          const observer = this.observers.find((x) =>
            x.shouldFetchOnWindowFocus(),
          );
          observer && observer.refetch({ cancelRefetch: !1 }),
            null == (_this$retryer2 = this.retryer) ||
              _this$retryer2.continue();
        }
        onOnline() {
          var _this$retryer3;
          const observer = this.observers.find((x) =>
            x.shouldFetchOnReconnect(),
          );
          observer && observer.refetch({ cancelRefetch: !1 }),
            null == (_this$retryer3 = this.retryer) ||
              _this$retryer3.continue();
        }
        addObserver(observer) {
          this.observers.includes(observer) ||
            (this.observers.push(observer),
            this.clearGcTimeout(),
            this.cache.notify({
              type: 'observerAdded',
              query: this,
              observer,
            }));
        }
        removeObserver(observer) {
          this.observers.includes(observer) &&
            ((this.observers = this.observers.filter((x) => x !== observer)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: 'observerRemoved',
              query: this,
              observer,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
        }
        fetch(options, fetchOptions) {
          var _this$options$behavio, _context$fetchOptions;
          if ('idle' !== this.state.fetchStatus)
            if (
              this.state.dataUpdatedAt &&
              null != fetchOptions &&
              fetchOptions.cancelRefetch
            )
              this.cancel({ silent: !0 });
            else if (this.promise) {
              var _this$retryer4;
              return (
                null == (_this$retryer4 = this.retryer) ||
                  _this$retryer4.continueRetry(),
                this.promise
              );
            }
          if ((options && this.setOptions(options), !this.options.queryFn)) {
            const observer = this.observers.find((x) => x.options.queryFn);
            observer && this.setOptions(observer.options);
          }
          const abortController = (function getAbortController() {
              if ('function' == typeof AbortController)
                return new AbortController();
            })(),
            queryFnContext = {
              queryKey: this.queryKey,
              pageParam: void 0,
              meta: this.meta,
            },
            addSignalProperty = (object) => {
              Object.defineProperty(object, 'signal', {
                enumerable: !0,
                get: () => {
                  if (abortController)
                    return (
                      (this.abortSignalConsumed = !0), abortController.signal
                    );
                },
              });
            };
          addSignalProperty(queryFnContext);
          const context = {
            fetchOptions,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1),
                  this.options.queryFn(queryFnContext))
                : Promise.reject(
                    "Missing queryFn for queryKey '" +
                      this.options.queryHash +
                      "'",
                  ),
          };
          var _context$fetchOptions2;
          (addSignalProperty(context),
          null == (_this$options$behavio = this.options.behavior) ||
            _this$options$behavio.onFetch(context),
          (this.revertState = this.state),
          'idle' === this.state.fetchStatus ||
            this.state.fetchMeta !==
              (null == (_context$fetchOptions = context.fetchOptions)
                ? void 0
                : _context$fetchOptions.meta)) &&
            this.dispatch({
              type: 'fetch',
              meta:
                null == (_context$fetchOptions2 = context.fetchOptions)
                  ? void 0
                  : _context$fetchOptions2.meta,
            });
          const onError = (error) => {
            var _this$cache$config$on,
              _this$cache$config,
              _this$cache$config$on2,
              _this$cache$config2;
            ((isCancelledError(error) && error.silent) ||
              this.dispatch({ type: 'error', error }),
            isCancelledError(error)) ||
              (null ==
                (_this$cache$config$on = (_this$cache$config =
                  this.cache.config).onError) ||
                _this$cache$config$on.call(_this$cache$config, error, this),
              null ==
                (_this$cache$config$on2 = (_this$cache$config2 =
                  this.cache.config).onSettled) ||
                _this$cache$config$on2.call(
                  _this$cache$config2,
                  this.state.data,
                  error,
                  this,
                ));
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = createRetryer({
              fn: context.fetchFn,
              abort:
                null == abortController
                  ? void 0
                  : abortController.abort.bind(abortController),
              onSuccess: (data) => {
                var _this$cache$config$on3,
                  _this$cache$config3,
                  _this$cache$config$on4,
                  _this$cache$config4;
                void 0 !== data
                  ? (this.setData(data),
                    null ==
                      (_this$cache$config$on3 = (_this$cache$config3 =
                        this.cache.config).onSuccess) ||
                      _this$cache$config$on3.call(
                        _this$cache$config3,
                        data,
                        this,
                      ),
                    null ==
                      (_this$cache$config$on4 = (_this$cache$config4 =
                        this.cache.config).onSettled) ||
                      _this$cache$config$on4.call(
                        _this$cache$config4,
                        data,
                        this.state.error,
                        this,
                      ),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1))
                  : onError(new Error(this.queryHash + ' data is undefined'));
              },
              onError,
              onFail: (failureCount, error) => {
                this.dispatch({ type: 'failed', failureCount, error });
              },
              onPause: () => {
                this.dispatch({ type: 'pause' });
              },
              onContinue: () => {
                this.dispatch({ type: 'continue' });
              },
              retry: context.options.retry,
              retryDelay: context.options.retryDelay,
              networkMode: context.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(action) {
          (this.state = ((state) => {
            var _action$meta, _action$dataUpdatedAt;
            switch (action.type) {
              case 'failed':
                return {
                  ...state,
                  fetchFailureCount: action.failureCount,
                  fetchFailureReason: action.error,
                };
              case 'pause':
                return { ...state, fetchStatus: 'paused' };
              case 'continue':
                return { ...state, fetchStatus: 'fetching' };
              case 'fetch':
                return {
                  ...state,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta:
                    null != (_action$meta = action.meta) ? _action$meta : null,
                  fetchStatus: canFetch(this.options.networkMode)
                    ? 'fetching'
                    : 'paused',
                  ...(!state.dataUpdatedAt && {
                    error: null,
                    status: 'loading',
                  }),
                };
              case 'success':
                return {
                  ...state,
                  data: action.data,
                  dataUpdateCount: state.dataUpdateCount + 1,
                  dataUpdatedAt:
                    null != (_action$dataUpdatedAt = action.dataUpdatedAt)
                      ? _action$dataUpdatedAt
                      : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: 'success',
                  ...(!action.manual && {
                    fetchStatus: 'idle',
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case 'error':
                const error = action.error;
                return isCancelledError(error) &&
                  error.revert &&
                  this.revertState
                  ? { ...this.revertState, fetchStatus: 'idle' }
                  : {
                      ...state,
                      error,
                      errorUpdateCount: state.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: state.fetchFailureCount + 1,
                      fetchFailureReason: error,
                      fetchStatus: 'idle',
                      status: 'error',
                    };
              case 'invalidate':
                return { ...state, isInvalidated: !0 };
              case 'setState':
                return { ...state, ...action.state };
            }
          })(this.state)),
            notifyManager.batch(() => {
              this.observers.forEach((observer) => {
                observer.onQueryUpdate(action);
              }),
                this.cache.notify({ query: this, type: 'updated', action });
            });
        }
      }
      class QueryCache extends Subscribable {
        constructor(config) {
          super(),
            (this.config = config || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
        build(client, options, state) {
          var _options$queryHash;
          const queryKey = options.queryKey,
            queryHash =
              null != (_options$queryHash = options.queryHash)
                ? _options$queryHash
                : hashQueryKeyByOptions(queryKey, options);
          let query = this.get(queryHash);
          return (
            query ||
              ((query = new Query({
                cache: this,
                logger: client.getLogger(),
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey),
              })),
              this.add(query)),
            query
          );
        }
        add(query) {
          this.queriesMap[query.queryHash] ||
            ((this.queriesMap[query.queryHash] = query),
            this.queries.push(query),
            this.notify({ type: 'added', query }));
        }
        remove(query) {
          const queryInMap = this.queriesMap[query.queryHash];
          queryInMap &&
            (query.destroy(),
            (this.queries = this.queries.filter((x) => x !== query)),
            queryInMap === query && delete this.queriesMap[query.queryHash],
            this.notify({ type: 'removed', query }));
        }
        clear() {
          notifyManager.batch(() => {
            this.queries.forEach((query) => {
              this.remove(query);
            });
          });
        }
        get(queryHash) {
          return this.queriesMap[queryHash];
        }
        getAll() {
          return this.queries;
        }
        find(arg1, arg2) {
          const [filters] = parseFilterArgs(arg1, arg2);
          return (
            void 0 === filters.exact && (filters.exact = !0),
            this.queries.find((query) => matchQuery(filters, query))
          );
        }
        findAll(arg1, arg2) {
          const [filters] = parseFilterArgs(arg1, arg2);
          return Object.keys(filters).length > 0
            ? this.queries.filter((query) => matchQuery(filters, query))
            : this.queries;
        }
        notify(event) {
          notifyManager.batch(() => {
            this.listeners.forEach(({ listener }) => {
              listener(event);
            });
          });
        }
        onFocus() {
          notifyManager.batch(() => {
            this.queries.forEach((query) => {
              query.onFocus();
            });
          });
        }
        onOnline() {
          notifyManager.batch(() => {
            this.queries.forEach((query) => {
              query.onOnline();
            });
          });
        }
      }
      class Mutation extends Removable {
        constructor(config) {
          super(),
            (this.defaultOptions = config.defaultOptions),
            (this.mutationId = config.mutationId),
            (this.mutationCache = config.mutationCache),
            (this.logger = config.logger || defaultLogger),
            (this.observers = []),
            (this.state = config.state || {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: 'idle',
              variables: void 0,
            }),
            this.setOptions(config.options),
            this.scheduleGc();
        }
        setOptions(options) {
          (this.options = { ...this.defaultOptions, ...options }),
            this.updateCacheTime(this.options.cacheTime);
        }
        get meta() {
          return this.options.meta;
        }
        setState(state) {
          this.dispatch({ type: 'setState', state });
        }
        addObserver(observer) {
          this.observers.includes(observer) ||
            (this.observers.push(observer),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: 'observerAdded',
              mutation: this,
              observer,
            }));
        }
        removeObserver(observer) {
          (this.observers = this.observers.filter((x) => x !== observer)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: 'observerRemoved',
              mutation: this,
              observer,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ('loading' === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          var _this$retryer$continu, _this$retryer;
          return null !=
            (_this$retryer$continu =
              null == (_this$retryer = this.retryer)
                ? void 0
                : _this$retryer.continue())
            ? _this$retryer$continu
            : this.execute();
        }
        async execute() {
          const executeMutation = () => {
              var _this$options$retry;
              return (
                (this.retryer = createRetryer({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject('No mutationFn found'),
                  onFail: (failureCount, error) => {
                    this.dispatch({ type: 'failed', failureCount, error });
                  },
                  onPause: () => {
                    this.dispatch({ type: 'pause' });
                  },
                  onContinue: () => {
                    this.dispatch({ type: 'continue' });
                  },
                  retry:
                    null != (_this$options$retry = this.options.retry)
                      ? _this$options$retry
                      : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            },
            restored = 'loading' === this.state.status;
          try {
            var _this$mutationCache$c3,
              _this$mutationCache$c4,
              _this$options$onSucce,
              _this$options2,
              _this$mutationCache$c5,
              _this$mutationCache$c6,
              _this$options$onSettl,
              _this$options3;
            if (!restored) {
              var _this$mutationCache$c,
                _this$mutationCache$c2,
                _this$options$onMutat,
                _this$options;
              this.dispatch({
                type: 'loading',
                variables: this.options.variables,
              }),
                await (null ==
                (_this$mutationCache$c = (_this$mutationCache$c2 =
                  this.mutationCache.config).onMutate)
                  ? void 0
                  : _this$mutationCache$c.call(
                      _this$mutationCache$c2,
                      this.state.variables,
                      this,
                    ));
              const context = await (null ==
              (_this$options$onMutat = (_this$options = this.options).onMutate)
                ? void 0
                : _this$options$onMutat.call(
                    _this$options,
                    this.state.variables,
                  ));
              context !== this.state.context &&
                this.dispatch({
                  type: 'loading',
                  context,
                  variables: this.state.variables,
                });
            }
            const data = await executeMutation();
            return (
              await (null ==
              (_this$mutationCache$c3 = (_this$mutationCache$c4 =
                this.mutationCache.config).onSuccess)
                ? void 0
                : _this$mutationCache$c3.call(
                    _this$mutationCache$c4,
                    data,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await (null ==
              (_this$options$onSucce = (_this$options2 = this.options)
                .onSuccess)
                ? void 0
                : _this$options$onSucce.call(
                    _this$options2,
                    data,
                    this.state.variables,
                    this.state.context,
                  )),
              await (null ==
              (_this$mutationCache$c5 = (_this$mutationCache$c6 =
                this.mutationCache.config).onSettled)
                ? void 0
                : _this$mutationCache$c5.call(
                    _this$mutationCache$c6,
                    data,
                    null,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await (null ==
              (_this$options$onSettl = (_this$options3 = this.options)
                .onSettled)
                ? void 0
                : _this$options$onSettl.call(
                    _this$options3,
                    data,
                    null,
                    this.state.variables,
                    this.state.context,
                  )),
              this.dispatch({ type: 'success', data }),
              data
            );
          } catch (error) {
            try {
              var _this$mutationCache$c7,
                _this$mutationCache$c8,
                _this$options$onError,
                _this$options4,
                _this$mutationCache$c9,
                _this$mutationCache$c10,
                _this$options$onSettl2,
                _this$options5;
              throw (
                (await (null ==
                (_this$mutationCache$c7 = (_this$mutationCache$c8 =
                  this.mutationCache.config).onError)
                  ? void 0
                  : _this$mutationCache$c7.call(
                      _this$mutationCache$c8,
                      error,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await (null ==
                (_this$options$onError = (_this$options4 = this.options)
                  .onError)
                  ? void 0
                  : _this$options$onError.call(
                      _this$options4,
                      error,
                      this.state.variables,
                      this.state.context,
                    )),
                await (null ==
                (_this$mutationCache$c9 = (_this$mutationCache$c10 =
                  this.mutationCache.config).onSettled)
                  ? void 0
                  : _this$mutationCache$c9.call(
                      _this$mutationCache$c10,
                      void 0,
                      error,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await (null ==
                (_this$options$onSettl2 = (_this$options5 = this.options)
                  .onSettled)
                  ? void 0
                  : _this$options$onSettl2.call(
                      _this$options5,
                      void 0,
                      error,
                      this.state.variables,
                      this.state.context,
                    )),
                error)
              );
            } finally {
              this.dispatch({ type: 'error', error });
            }
          }
        }
        dispatch(action) {
          (this.state = ((state) => {
            switch (action.type) {
              case 'failed':
                return {
                  ...state,
                  failureCount: action.failureCount,
                  failureReason: action.error,
                };
              case 'pause':
                return { ...state, isPaused: !0 };
              case 'continue':
                return { ...state, isPaused: !1 };
              case 'loading':
                return {
                  ...state,
                  context: action.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !canFetch(this.options.networkMode),
                  status: 'loading',
                  variables: action.variables,
                };
              case 'success':
                return {
                  ...state,
                  data: action.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: 'success',
                  isPaused: !1,
                };
              case 'error':
                return {
                  ...state,
                  data: void 0,
                  error: action.error,
                  failureCount: state.failureCount + 1,
                  failureReason: action.error,
                  isPaused: !1,
                  status: 'error',
                };
              case 'setState':
                return { ...state, ...action.state };
            }
          })(this.state)),
            notifyManager.batch(() => {
              this.observers.forEach((observer) => {
                observer.onMutationUpdate(action);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: 'updated',
                  action,
                });
            });
        }
      }
      class MutationCache extends Subscribable {
        constructor(config) {
          super(),
            (this.config = config || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
        build(client, options, state) {
          const mutation = new Mutation({
            mutationCache: this,
            logger: client.getLogger(),
            mutationId: ++this.mutationId,
            options: client.defaultMutationOptions(options),
            state,
            defaultOptions: options.mutationKey
              ? client.getMutationDefaults(options.mutationKey)
              : void 0,
          });
          return this.add(mutation), mutation;
        }
        add(mutation) {
          this.mutations.push(mutation),
            this.notify({ type: 'added', mutation });
        }
        remove(mutation) {
          (this.mutations = this.mutations.filter((x) => x !== mutation)),
            this.notify({ type: 'removed', mutation });
        }
        clear() {
          notifyManager.batch(() => {
            this.mutations.forEach((mutation) => {
              this.remove(mutation);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(filters) {
          return (
            void 0 === filters.exact && (filters.exact = !0),
            this.mutations.find((mutation) => matchMutation(filters, mutation))
          );
        }
        findAll(filters) {
          return this.mutations.filter((mutation) =>
            matchMutation(filters, mutation),
          );
        }
        notify(event) {
          notifyManager.batch(() => {
            this.listeners.forEach(({ listener }) => {
              listener(event);
            });
          });
        }
        resumePausedMutations() {
          var _this$resuming;
          return (
            (this.resuming = (
              null != (_this$resuming = this.resuming)
                ? _this$resuming
                : Promise.resolve()
            )
              .then(() => {
                const pausedMutations = this.mutations.filter(
                  (x) => x.state.isPaused,
                );
                return notifyManager.batch(() =>
                  pausedMutations.reduce(
                    (promise, mutation) =>
                      promise.then(() => mutation.continue().catch(noop)),
                    Promise.resolve(),
                  ),
                );
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
      }
      function infiniteQueryBehavior() {
        return {
          onFetch: (context) => {
            context.fetchFn = () => {
              var _context$fetchOptions,
                _context$fetchOptions2,
                _context$fetchOptions3,
                _context$fetchOptions4,
                _context$state$data,
                _context$state$data2;
              const refetchPage =
                  null == (_context$fetchOptions = context.fetchOptions) ||
                  null == (_context$fetchOptions2 = _context$fetchOptions.meta)
                    ? void 0
                    : _context$fetchOptions2.refetchPage,
                fetchMore =
                  null == (_context$fetchOptions3 = context.fetchOptions) ||
                  null == (_context$fetchOptions4 = _context$fetchOptions3.meta)
                    ? void 0
                    : _context$fetchOptions4.fetchMore,
                pageParam = null == fetchMore ? void 0 : fetchMore.pageParam,
                isFetchingNextPage =
                  'forward' ===
                  (null == fetchMore ? void 0 : fetchMore.direction),
                isFetchingPreviousPage =
                  'backward' ===
                  (null == fetchMore ? void 0 : fetchMore.direction),
                oldPages =
                  (null == (_context$state$data = context.state.data)
                    ? void 0
                    : _context$state$data.pages) || [],
                oldPageParams =
                  (null == (_context$state$data2 = context.state.data)
                    ? void 0
                    : _context$state$data2.pageParams) || [];
              let newPageParams = oldPageParams,
                cancelled = !1;
              const queryFn =
                  context.options.queryFn ||
                  (() =>
                    Promise.reject(
                      "Missing queryFn for queryKey '" +
                        context.options.queryHash +
                        "'",
                    )),
                buildNewPages = (pages, param, page, previous) => (
                  (newPageParams = previous
                    ? [param, ...newPageParams]
                    : [...newPageParams, param]),
                  previous ? [page, ...pages] : [...pages, page]
                ),
                fetchPage = (pages, manual, param, previous) => {
                  if (cancelled) return Promise.reject('Cancelled');
                  if (void 0 === param && !manual && pages.length)
                    return Promise.resolve(pages);
                  const queryFnContext = {
                    queryKey: context.queryKey,
                    pageParam: param,
                    meta: context.options.meta,
                  };
                  var object;
                  (object = queryFnContext),
                    Object.defineProperty(object, 'signal', {
                      enumerable: !0,
                      get: () => {
                        var _context$signal, _context$signal2;
                        return (
                          null != (_context$signal = context.signal) &&
                          _context$signal.aborted
                            ? (cancelled = !0)
                            : null == (_context$signal2 = context.signal) ||
                              _context$signal2.addEventListener('abort', () => {
                                cancelled = !0;
                              }),
                          context.signal
                        );
                      },
                    });
                  const queryFnResult = queryFn(queryFnContext);
                  return Promise.resolve(queryFnResult).then((page) =>
                    buildNewPages(pages, param, page, previous),
                  );
                };
              let promise;
              if (oldPages.length)
                if (isFetchingNextPage) {
                  const manual = void 0 !== pageParam,
                    param = manual
                      ? pageParam
                      : getNextPageParam(context.options, oldPages);
                  promise = fetchPage(oldPages, manual, param);
                } else if (isFetchingPreviousPage) {
                  const manual = void 0 !== pageParam,
                    param = manual
                      ? pageParam
                      : getPreviousPageParam(context.options, oldPages);
                  promise = fetchPage(oldPages, manual, param, !0);
                } else {
                  newPageParams = [];
                  const manual = void 0 === context.options.getNextPageParam;
                  promise =
                    !refetchPage ||
                    !oldPages[0] ||
                    refetchPage(oldPages[0], 0, oldPages)
                      ? fetchPage([], manual, oldPageParams[0])
                      : Promise.resolve(
                          buildNewPages([], oldPageParams[0], oldPages[0]),
                        );
                  for (let i = 1; i < oldPages.length; i++)
                    promise = promise.then((pages) => {
                      if (
                        !refetchPage ||
                        !oldPages[i] ||
                        refetchPage(oldPages[i], i, oldPages)
                      ) {
                        const param = manual
                          ? oldPageParams[i]
                          : getNextPageParam(context.options, pages);
                        return fetchPage(pages, manual, param);
                      }
                      return Promise.resolve(
                        buildNewPages(pages, oldPageParams[i], oldPages[i]),
                      );
                    });
                }
              else promise = fetchPage([]);
              return promise.then((pages) => ({
                pages,
                pageParams: newPageParams,
              }));
            };
          },
        };
      }
      function getNextPageParam(options, pages) {
        return null == options.getNextPageParam
          ? void 0
          : options.getNextPageParam(pages[pages.length - 1], pages);
      }
      function getPreviousPageParam(options, pages) {
        return null == options.getPreviousPageParam
          ? void 0
          : options.getPreviousPageParam(pages[0], pages);
      }
      class QueryObserver extends Subscribable {
        constructor(client, options) {
          super(),
            (this.client = client),
            (this.options = options),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(options);
        }
        bindMethods() {
          (this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.currentQuery.addObserver(this),
            shouldFetchOnMount(this.currentQuery, this.options) &&
              this.executeFetch(),
            this.updateTimers());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return shouldFetchOn(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect,
          );
        }
        shouldFetchOnWindowFocus() {
          return shouldFetchOn(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus,
          );
        }
        destroy() {
          (this.listeners = new Set()),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this);
        }
        setOptions(options, notifyOptions) {
          const prevOptions = this.options,
            prevQuery = this.currentQuery;
          if (
            ((this.options = this.client.defaultQueryOptions(options)),
            shallowEqualObjects(prevOptions, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  query: this.currentQuery,
                  observer: this,
                }),
            void 0 !== this.options.enabled &&
              'boolean' != typeof this.options.enabled)
          )
            throw new Error('Expected enabled to be a boolean');
          this.options.queryKey ||
            (this.options.queryKey = prevOptions.queryKey),
            this.updateQuery();
          const mounted = this.hasListeners();
          mounted &&
            shouldFetchOptionally(
              this.currentQuery,
              prevQuery,
              this.options,
              prevOptions,
            ) &&
            this.executeFetch(),
            this.updateResult(notifyOptions),
            !mounted ||
              (this.currentQuery === prevQuery &&
                this.options.enabled === prevOptions.enabled &&
                this.options.staleTime === prevOptions.staleTime) ||
              this.updateStaleTimeout();
          const nextRefetchInterval = this.computeRefetchInterval();
          !mounted ||
            (this.currentQuery === prevQuery &&
              this.options.enabled === prevOptions.enabled &&
              nextRefetchInterval === this.currentRefetchInterval) ||
            this.updateRefetchInterval(nextRefetchInterval);
        }
        getOptimisticResult(options) {
          const query = this.client.getQueryCache().build(this.client, options),
            result = this.createResult(query, options);
          return (
            (function shouldAssignObserverCurrentProperties(
              observer,
              optimisticResult,
              options,
            ) {
              if (options.keepPreviousData) return !1;
              if (void 0 !== options.placeholderData)
                return optimisticResult.isPlaceholderData;
              if (
                !shallowEqualObjects(
                  observer.getCurrentResult(),
                  optimisticResult,
                )
              )
                return !0;
              return !1;
            })(this, result, options) &&
              ((this.currentResult = result),
              (this.currentResultOptions = this.options),
              (this.currentResultState = this.currentQuery.state)),
            result
          );
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(result) {
          const trackedResult = {};
          return (
            Object.keys(result).forEach((key) => {
              Object.defineProperty(trackedResult, key, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(key), result[key]),
              });
            }),
            trackedResult
          );
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage, ...options } = {}) {
          return this.fetch({ ...options, meta: { refetchPage } });
        }
        fetchOptimistic(options) {
          const defaultedOptions = this.client.defaultQueryOptions(options),
            query = this.client
              .getQueryCache()
              .build(this.client, defaultedOptions);
          return (
            (query.isFetchingOptimistic = !0),
            query.fetch().then(() => this.createResult(query, defaultedOptions))
          );
        }
        fetch(fetchOptions) {
          var _fetchOptions$cancelR;
          return this.executeFetch({
            ...fetchOptions,
            cancelRefetch:
              null == (_fetchOptions$cancelR = fetchOptions.cancelRefetch) ||
              _fetchOptions$cancelR,
          }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(fetchOptions) {
          this.updateQuery();
          let promise = this.currentQuery.fetch(this.options, fetchOptions);
          return (
            (null != fetchOptions && fetchOptions.throwOnError) ||
              (promise = promise.catch(noop)),
            promise
          );
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            isServer ||
              this.currentResult.isStale ||
              !isValidTimeout(this.options.staleTime))
          )
            return;
          const timeout =
            timeUntilStale(
              this.currentResult.dataUpdatedAt,
              this.options.staleTime,
            ) + 1;
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult();
          }, timeout);
        }
        computeRefetchInterval() {
          var _this$options$refetch;
          return 'function' == typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery,
              )
            : null != (_this$options$refetch = this.options.refetchInterval) &&
                _this$options$refetch;
        }
        updateRefetchInterval(nextInterval) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = nextInterval),
            !isServer &&
              !1 !== this.options.enabled &&
              isValidTimeout(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground ||
                  focusManager.isFocused()) &&
                  this.executeFetch();
              }, this.currentRefetchInterval));
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0));
        }
        createResult(query, options) {
          const prevQuery = this.currentQuery,
            prevOptions = this.options,
            prevResult = this.currentResult,
            prevResultState = this.currentResultState,
            prevResultOptions = this.currentResultOptions,
            queryChange = query !== prevQuery,
            queryInitialState = queryChange
              ? query.state
              : this.currentQueryInitialState,
            prevQueryResult = queryChange
              ? this.currentResult
              : this.previousQueryResult,
            { state } = query;
          let data,
            { dataUpdatedAt, error, errorUpdatedAt, fetchStatus, status } =
              state,
            isPreviousData = !1,
            isPlaceholderData = !1;
          if (options._optimisticResults) {
            const mounted = this.hasListeners(),
              fetchOnMount = !mounted && shouldFetchOnMount(query, options),
              fetchOptionally =
                mounted &&
                shouldFetchOptionally(query, prevQuery, options, prevOptions);
            (fetchOnMount || fetchOptionally) &&
              ((fetchStatus = canFetch(query.options.networkMode)
                ? 'fetching'
                : 'paused'),
              dataUpdatedAt || (status = 'loading')),
              'isRestoring' === options._optimisticResults &&
                (fetchStatus = 'idle');
          }
          if (
            options.keepPreviousData &&
            !state.dataUpdatedAt &&
            null != prevQueryResult &&
            prevQueryResult.isSuccess &&
            'error' !== status
          )
            (data = prevQueryResult.data),
              (dataUpdatedAt = prevQueryResult.dataUpdatedAt),
              (status = prevQueryResult.status),
              (isPreviousData = !0);
          else if (options.select && void 0 !== state.data)
            if (
              prevResult &&
              state.data ===
                (null == prevResultState ? void 0 : prevResultState.data) &&
              options.select === this.selectFn
            )
              data = this.selectResult;
            else
              try {
                (this.selectFn = options.select),
                  (data = options.select(state.data)),
                  (data = replaceData(
                    null == prevResult ? void 0 : prevResult.data,
                    data,
                    options,
                  )),
                  (this.selectResult = data),
                  (this.selectError = null);
              } catch (selectError) {
                0, (this.selectError = selectError);
              }
          else data = state.data;
          if (
            void 0 !== options.placeholderData &&
            void 0 === data &&
            'loading' === status
          ) {
            let placeholderData;
            if (
              null != prevResult &&
              prevResult.isPlaceholderData &&
              options.placeholderData ===
                (null == prevResultOptions
                  ? void 0
                  : prevResultOptions.placeholderData)
            )
              placeholderData = prevResult.data;
            else if (
              ((placeholderData =
                'function' == typeof options.placeholderData
                  ? options.placeholderData()
                  : options.placeholderData),
              options.select && void 0 !== placeholderData)
            )
              try {
                (placeholderData = options.select(placeholderData)),
                  (this.selectError = null);
              } catch (selectError) {
                0, (this.selectError = selectError);
              }
            void 0 !== placeholderData &&
              ((status = 'success'),
              (data = replaceData(
                null == prevResult ? void 0 : prevResult.data,
                placeholderData,
                options,
              )),
              (isPlaceholderData = !0));
          }
          this.selectError &&
            ((error = this.selectError),
            (data = this.selectResult),
            (errorUpdatedAt = Date.now()),
            (status = 'error'));
          const isFetching = 'fetching' === fetchStatus,
            isLoading = 'loading' === status,
            isError = 'error' === status;
          return {
            status,
            fetchStatus,
            isLoading,
            isSuccess: 'success' === status,
            isError,
            isInitialLoading: isLoading && isFetching,
            data,
            dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: state.fetchFailureCount,
            failureReason: state.fetchFailureReason,
            errorUpdateCount: state.errorUpdateCount,
            isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
            isFetchedAfterMount:
              state.dataUpdateCount > queryInitialState.dataUpdateCount ||
              state.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isLoading,
            isLoadingError: isError && 0 === state.dataUpdatedAt,
            isPaused: 'paused' === fetchStatus,
            isPlaceholderData,
            isPreviousData,
            isRefetchError: isError && 0 !== state.dataUpdatedAt,
            isStale: isStale(query, options),
            refetch: this.refetch,
            remove: this.remove,
          };
        }
        updateResult(notifyOptions) {
          const prevResult = this.currentResult,
            nextResult = this.createResult(this.currentQuery, this.options);
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            shallowEqualObjects(nextResult, prevResult))
          )
            return;
          this.currentResult = nextResult;
          const defaultNotifyOptions = { cache: !0 };
          !1 !== (null == notifyOptions ? void 0 : notifyOptions.listeners) &&
            (() => {
              if (!prevResult) return !0;
              const { notifyOnChangeProps } = this.options,
                notifyOnChangePropsValue =
                  'function' == typeof notifyOnChangeProps
                    ? notifyOnChangeProps()
                    : notifyOnChangeProps;
              if (
                'all' === notifyOnChangePropsValue ||
                (!notifyOnChangePropsValue && !this.trackedProps.size)
              )
                return !0;
              const includedProps = new Set(
                null != notifyOnChangePropsValue
                  ? notifyOnChangePropsValue
                  : this.trackedProps,
              );
              return (
                this.options.useErrorBoundary && includedProps.add('error'),
                Object.keys(this.currentResult).some((key) => {
                  const typedKey = key;
                  return (
                    this.currentResult[typedKey] !== prevResult[typedKey] &&
                    includedProps.has(typedKey)
                  );
                })
              );
            })() &&
            (defaultNotifyOptions.listeners = !0),
            this.notify({ ...defaultNotifyOptions, ...notifyOptions });
        }
        updateQuery() {
          const query = this.client
            .getQueryCache()
            .build(this.client, this.options);
          if (query === this.currentQuery) return;
          const prevQuery = this.currentQuery;
          (this.currentQuery = query),
            (this.currentQueryInitialState = query.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == prevQuery || prevQuery.removeObserver(this),
              query.addObserver(this));
        }
        onQueryUpdate(action) {
          const notifyOptions = {};
          'success' === action.type
            ? (notifyOptions.onSuccess = !action.manual)
            : 'error' !== action.type ||
              isCancelledError(action.error) ||
              (notifyOptions.onError = !0),
            this.updateResult(notifyOptions),
            this.hasListeners() && this.updateTimers();
        }
        notify(notifyOptions) {
          notifyManager.batch(() => {
            var _this$options$onSucce,
              _this$options,
              _this$options$onSettl,
              _this$options2;
            if (notifyOptions.onSuccess)
              null ==
                (_this$options$onSucce = (_this$options = this.options)
                  .onSuccess) ||
                _this$options$onSucce.call(
                  _this$options,
                  this.currentResult.data,
                ),
                null ==
                  (_this$options$onSettl = (_this$options2 = this.options)
                    .onSettled) ||
                  _this$options$onSettl.call(
                    _this$options2,
                    this.currentResult.data,
                    null,
                  );
            else if (notifyOptions.onError) {
              var _this$options$onError,
                _this$options3,
                _this$options$onSettl2,
                _this$options4;
              null ==
                (_this$options$onError = (_this$options3 = this.options)
                  .onError) ||
                _this$options$onError.call(
                  _this$options3,
                  this.currentResult.error,
                ),
                null ==
                  (_this$options$onSettl2 = (_this$options4 = this.options)
                    .onSettled) ||
                  _this$options$onSettl2.call(
                    _this$options4,
                    void 0,
                    this.currentResult.error,
                  );
            }
            notifyOptions.listeners &&
              this.listeners.forEach(({ listener }) => {
                listener(this.currentResult);
              }),
              notifyOptions.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated',
                  });
          });
        }
      }
      function shouldFetchOnMount(query, options) {
        return (
          (function shouldLoadOnMount(query, options) {
            return !(
              !1 === options.enabled ||
              query.state.dataUpdatedAt ||
              ('error' === query.state.status && !1 === options.retryOnMount)
            );
          })(query, options) ||
          (query.state.dataUpdatedAt > 0 &&
            shouldFetchOn(query, options, options.refetchOnMount))
        );
      }
      function shouldFetchOn(query, options, field) {
        if (!1 !== options.enabled) {
          const value = 'function' == typeof field ? field(query) : field;
          return (
            'always' === value || (!1 !== value && isStale(query, options))
          );
        }
        return !1;
      }
      function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
        return (
          !1 !== options.enabled &&
          (query !== prevQuery || !1 === prevOptions.enabled) &&
          (!options.suspense || 'error' !== query.state.status) &&
          isStale(query, options)
        );
      }
      function isStale(query, options) {
        return query.isStaleByTime(options.staleTime);
      }
      var vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
        utils = __webpack_require__(
          './node_modules/jotai/esm/vanilla/utils.mjs',
        );
      const i = (0, vanilla.eU)(
          new (class QueryClient {
            constructor(config = {}) {
              (this.queryCache = config.queryCache || new QueryCache()),
                (this.mutationCache =
                  config.mutationCache || new MutationCache()),
                (this.logger = config.logger || defaultLogger),
                (this.defaultOptions = config.defaultOptions || {}),
                (this.queryDefaults = []),
                (this.mutationDefaults = []),
                (this.mountCount = 0);
            }
            mount() {
              this.mountCount++,
                1 === this.mountCount &&
                  ((this.unsubscribeFocus = focusManager.subscribe(() => {
                    focusManager.isFocused() &&
                      (this.resumePausedMutations(), this.queryCache.onFocus());
                  })),
                  (this.unsubscribeOnline = onlineManager.subscribe(() => {
                    onlineManager.isOnline() &&
                      (this.resumePausedMutations(),
                      this.queryCache.onOnline());
                  })));
            }
            unmount() {
              var _this$unsubscribeFocu, _this$unsubscribeOnli;
              this.mountCount--,
                0 === this.mountCount &&
                  (null == (_this$unsubscribeFocu = this.unsubscribeFocus) ||
                    _this$unsubscribeFocu.call(this),
                  (this.unsubscribeFocus = void 0),
                  null == (_this$unsubscribeOnli = this.unsubscribeOnline) ||
                    _this$unsubscribeOnli.call(this),
                  (this.unsubscribeOnline = void 0));
            }
            isFetching(arg1, arg2) {
              const [filters] = parseFilterArgs(arg1, arg2);
              return (
                (filters.fetchStatus = 'fetching'),
                this.queryCache.findAll(filters).length
              );
            }
            isMutating(filters) {
              return this.mutationCache.findAll({ ...filters, fetching: !0 })
                .length;
            }
            getQueryData(queryKey, filters) {
              var _this$queryCache$find;
              return null ==
                (_this$queryCache$find = this.queryCache.find(
                  queryKey,
                  filters,
                ))
                ? void 0
                : _this$queryCache$find.state.data;
            }
            ensureQueryData(arg1, arg2, arg3) {
              const parsedOptions = parseQueryArgs(arg1, arg2, arg3),
                cachedData = this.getQueryData(parsedOptions.queryKey);
              return cachedData
                ? Promise.resolve(cachedData)
                : this.fetchQuery(parsedOptions);
            }
            getQueriesData(queryKeyOrFilters) {
              return this.getQueryCache()
                .findAll(queryKeyOrFilters)
                .map(({ queryKey, state }) => [queryKey, state.data]);
            }
            setQueryData(queryKey, updater, options) {
              const query = this.queryCache.find(queryKey),
                data = (function functionalUpdate(updater, input) {
                  return 'function' == typeof updater
                    ? updater(input)
                    : updater;
                })(updater, null == query ? void 0 : query.state.data);
              if (void 0 === data) return;
              const parsedOptions = parseQueryArgs(queryKey),
                defaultedOptions = this.defaultQueryOptions(parsedOptions);
              return this.queryCache
                .build(this, defaultedOptions)
                .setData(data, { ...options, manual: !0 });
            }
            setQueriesData(queryKeyOrFilters, updater, options) {
              return notifyManager.batch(() =>
                this.getQueryCache()
                  .findAll(queryKeyOrFilters)
                  .map(({ queryKey }) => [
                    queryKey,
                    this.setQueryData(queryKey, updater, options),
                  ]),
              );
            }
            getQueryState(queryKey, filters) {
              var _this$queryCache$find2;
              return null ==
                (_this$queryCache$find2 = this.queryCache.find(
                  queryKey,
                  filters,
                ))
                ? void 0
                : _this$queryCache$find2.state;
            }
            removeQueries(arg1, arg2) {
              const [filters] = parseFilterArgs(arg1, arg2),
                queryCache = this.queryCache;
              notifyManager.batch(() => {
                queryCache.findAll(filters).forEach((query) => {
                  queryCache.remove(query);
                });
              });
            }
            resetQueries(arg1, arg2, arg3) {
              const [filters, options] = parseFilterArgs(arg1, arg2, arg3),
                queryCache = this.queryCache,
                refetchFilters = { type: 'active', ...filters };
              return notifyManager.batch(
                () => (
                  queryCache.findAll(filters).forEach((query) => {
                    query.reset();
                  }),
                  this.refetchQueries(refetchFilters, options)
                ),
              );
            }
            cancelQueries(arg1, arg2, arg3) {
              const [filters, cancelOptions = {}] = parseFilterArgs(
                arg1,
                arg2,
                arg3,
              );
              void 0 === cancelOptions.revert && (cancelOptions.revert = !0);
              const promises = notifyManager.batch(() =>
                this.queryCache
                  .findAll(filters)
                  .map((query) => query.cancel(cancelOptions)),
              );
              return Promise.all(promises).then(noop).catch(noop);
            }
            invalidateQueries(arg1, arg2, arg3) {
              const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
              return notifyManager.batch(() => {
                var _ref, _filters$refetchType;
                if (
                  (this.queryCache.findAll(filters).forEach((query) => {
                    query.invalidate();
                  }),
                  'none' === filters.refetchType)
                )
                  return Promise.resolve();
                const refetchFilters = {
                  ...filters,
                  type:
                    null !=
                    (_ref =
                      null != (_filters$refetchType = filters.refetchType)
                        ? _filters$refetchType
                        : filters.type)
                      ? _ref
                      : 'active',
                };
                return this.refetchQueries(refetchFilters, options);
              });
            }
            refetchQueries(arg1, arg2, arg3) {
              const [filters, options] = parseFilterArgs(arg1, arg2, arg3),
                promises = notifyManager.batch(() =>
                  this.queryCache
                    .findAll(filters)
                    .filter((query) => !query.isDisabled())
                    .map((query) => {
                      var _options$cancelRefetc;
                      return query.fetch(void 0, {
                        ...options,
                        cancelRefetch:
                          null ==
                            (_options$cancelRefetc =
                              null == options
                                ? void 0
                                : options.cancelRefetch) ||
                          _options$cancelRefetc,
                        meta: { refetchPage: filters.refetchPage },
                      });
                    }),
                );
              let promise = Promise.all(promises).then(noop);
              return (
                (null != options && options.throwOnError) ||
                  (promise = promise.catch(noop)),
                promise
              );
            }
            fetchQuery(arg1, arg2, arg3) {
              const parsedOptions = parseQueryArgs(arg1, arg2, arg3),
                defaultedOptions = this.defaultQueryOptions(parsedOptions);
              void 0 === defaultedOptions.retry &&
                (defaultedOptions.retry = !1);
              const query = this.queryCache.build(this, defaultedOptions);
              return query.isStaleByTime(defaultedOptions.staleTime)
                ? query.fetch(defaultedOptions)
                : Promise.resolve(query.state.data);
            }
            prefetchQuery(arg1, arg2, arg3) {
              return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
            }
            fetchInfiniteQuery(arg1, arg2, arg3) {
              const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
              return (
                (parsedOptions.behavior = infiniteQueryBehavior()),
                this.fetchQuery(parsedOptions)
              );
            }
            prefetchInfiniteQuery(arg1, arg2, arg3) {
              return this.fetchInfiniteQuery(arg1, arg2, arg3)
                .then(noop)
                .catch(noop);
            }
            resumePausedMutations() {
              return this.mutationCache.resumePausedMutations();
            }
            getQueryCache() {
              return this.queryCache;
            }
            getMutationCache() {
              return this.mutationCache;
            }
            getLogger() {
              return this.logger;
            }
            getDefaultOptions() {
              return this.defaultOptions;
            }
            setDefaultOptions(options) {
              this.defaultOptions = options;
            }
            setQueryDefaults(queryKey, options) {
              const result = this.queryDefaults.find(
                (x) => hashQueryKey(queryKey) === hashQueryKey(x.queryKey),
              );
              result
                ? (result.defaultOptions = options)
                : this.queryDefaults.push({
                    queryKey,
                    defaultOptions: options,
                  });
            }
            getQueryDefaults(queryKey) {
              if (!queryKey) return;
              const firstMatchingDefaults = this.queryDefaults.find((x) =>
                partialMatchKey(queryKey, x.queryKey),
              );
              return null == firstMatchingDefaults
                ? void 0
                : firstMatchingDefaults.defaultOptions;
            }
            setMutationDefaults(mutationKey, options) {
              const result = this.mutationDefaults.find(
                (x) =>
                  hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey),
              );
              result
                ? (result.defaultOptions = options)
                : this.mutationDefaults.push({
                    mutationKey,
                    defaultOptions: options,
                  });
            }
            getMutationDefaults(mutationKey) {
              if (!mutationKey) return;
              const firstMatchingDefaults = this.mutationDefaults.find((x) =>
                partialMatchKey(mutationKey, x.mutationKey),
              );
              return null == firstMatchingDefaults
                ? void 0
                : firstMatchingDefaults.defaultOptions;
            }
            defaultQueryOptions(options) {
              if (null != options && options._defaulted) return options;
              const defaultedOptions = {
                ...this.defaultOptions.queries,
                ...this.getQueryDefaults(
                  null == options ? void 0 : options.queryKey,
                ),
                ...options,
                _defaulted: !0,
              };
              return (
                !defaultedOptions.queryHash &&
                  defaultedOptions.queryKey &&
                  (defaultedOptions.queryHash = hashQueryKeyByOptions(
                    defaultedOptions.queryKey,
                    defaultedOptions,
                  )),
                void 0 === defaultedOptions.refetchOnReconnect &&
                  (defaultedOptions.refetchOnReconnect =
                    'always' !== defaultedOptions.networkMode),
                void 0 === defaultedOptions.useErrorBoundary &&
                  (defaultedOptions.useErrorBoundary =
                    !!defaultedOptions.suspense),
                defaultedOptions
              );
            }
            defaultMutationOptions(options) {
              return null != options && options._defaulted
                ? options
                : {
                    ...this.defaultOptions.mutations,
                    ...this.getMutationDefaults(
                      null == options ? void 0 : options.mutationKey,
                    ),
                    ...options,
                    _defaulted: !0,
                  };
            }
            clear() {
              this.queryCache.clear(), this.mutationCache.clear();
            }
          })(),
        ),
        u = (e, r, n, o) => {
          const i = (0, vanilla.eU)(() => new WeakMap()),
            u = (0, vanilla.eU)(0),
            a = Symbol(),
            v = (0, vanilla.eU)((t) => {
              t(u);
              const o = r(t),
                s = e(t),
                c = t(i);
              let v = c.get(o);
              return (
                v
                  ? ((v[a] = !0), v.setOptions(s), delete v[a])
                  : ((v = n(o, s)), c.set(o, v)),
                v
              );
            }),
            p = (0, vanilla.eU)((e) => {
              const t = e(v),
                r = {
                  subscribe: (e) => {
                    const r = (r) => {
                        const n = () => e.next(r);
                        t[a] ? Promise.resolve().then(n) : n();
                      },
                      n = t.subscribe(r);
                    return r(t.getCurrentResult()), { unsubscribe: n };
                  },
                };
              return (0, utils.zx)(() => r, {
                initialValue: t.getCurrentResult(),
              });
            }),
            d = (0, vanilla.eU)(
              (e) => {
                const t = e(p);
                return e(t);
              },
              (e, t, n) => {
                const s = e(v),
                  c = () => {
                    const n = r(e);
                    e(i).delete(n), t(u, (e) => e + 1);
                  };
                if ('refresh' !== n) return o(n, s, c);
                c();
              },
            );
          d.onMount = (e) => () => e('refresh');
          const b = (0, vanilla.eU)((r) => {
              e(r);
              const n = r(v),
                o = {
                  subscribe: (e) => {
                    const r = (r) => {
                        if (
                          (r.isSuccess && void 0 !== r.data) ||
                          (r.isError && !isCancelledError(r.error))
                        ) {
                          const t = () => e.next(r);
                          n[a] ? Promise.resolve().then(t) : t();
                        }
                      },
                      o = n.subscribe(r);
                    return r(n.getCurrentResult()), { unsubscribe: o };
                  },
                };
              return (0, utils.zx)(() => o);
            }),
            E = (e) => {
              if (e.error) throw e.error;
              return e.data;
            };
          return [
            (0, vanilla.eU)(
              (e) => {
                const t = e(b),
                  r = e(t);
                return r instanceof Promise ? r.then(E) : E(r);
              },
              (e, t, r) => t(d, r),
            ),
            d,
          ];
        };
      function a(e, t = (e) => e(i)) {
        return u(
          e,
          t,
          (e, t) => new QueryObserver(e, t),
          (e, t, r) => {
            if ('refetch' === e.type)
              return e.force ? (t.remove(), void r()) : t.refetch(e.options);
          },
        );
      }
    },
    './node_modules/jotai/esm/vanilla/utils.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Rq: () => loadable,
        cU: () => splitAtom,
        oA: () => unwrap,
        t_: () => atomWithDefault,
        zx: () => atomWithObservable,
      });
      var jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/jotai/esm/vanilla.mjs',
      );
      const RESET = Symbol('RESET');
      const getCached$1 = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k),
        cache1$2 = new WeakMap(),
        memo2$1 = (create, dep1, dep2) => {
          const cache2 = getCached$1(() => new WeakMap(), cache1$2, dep1);
          return getCached$1(create, cache2, dep2);
        },
        cacheKeyForEmptyKeyExtractor = {},
        isWritable = (atom2) => !!atom2.write,
        isFunction = (x) => 'function' == typeof x;
      function splitAtom(arrAtom, keyExtractor) {
        return memo2$1(
          () => {
            const mappingCache = new WeakMap(),
              getMapping = (arr, prev) => {
                let mapping = mappingCache.get(arr);
                if (mapping) return mapping;
                const prevMapping = prev && mappingCache.get(prev),
                  atomList = [],
                  keyList = [];
                return (
                  arr.forEach((item, index) => {
                    const key = keyExtractor ? keyExtractor(item) : index;
                    keyList[index] = key;
                    const cachedAtom =
                      prevMapping &&
                      prevMapping.atomList[prevMapping.keyList.indexOf(key)];
                    if (cachedAtom) return void (atomList[index] = cachedAtom);
                    const read = (get) => {
                      const prev2 = get(mappingAtom),
                        currArr = get(arrAtom),
                        index2 = getMapping(
                          currArr,
                          null == prev2 ? void 0 : prev2.arr,
                        ).keyList.indexOf(key);
                      if (index2 < 0 || index2 >= currArr.length) {
                        const prevItem =
                          arr[getMapping(arr).keyList.indexOf(key)];
                        if (prevItem) return prevItem;
                        throw new Error(
                          'splitAtom: index out of bounds for read',
                        );
                      }
                      return currArr[index2];
                    };
                    atomList[index] = isWritable(arrAtom)
                      ? (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                          read,
                          (get, set, update) => {
                            const prev2 = get(mappingAtom),
                              arr2 = get(arrAtom),
                              index2 = getMapping(
                                arr2,
                                null == prev2 ? void 0 : prev2.arr,
                              ).keyList.indexOf(key);
                            if (index2 < 0 || index2 >= arr2.length)
                              throw new Error(
                                'splitAtom: index out of bounds for write',
                              );
                            const nextItem = isFunction(update)
                              ? update(arr2[index2])
                              : update;
                            Object.is(arr2[index2], nextItem) ||
                              set(arrAtom, [
                                ...arr2.slice(0, index2),
                                nextItem,
                                ...arr2.slice(index2 + 1),
                              ]);
                          },
                        )
                      : (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                          read,
                        );
                  }),
                  (mapping =
                    prevMapping &&
                    prevMapping.keyList.length === keyList.length &&
                    prevMapping.keyList.every((x, i) => x === keyList[i])
                      ? prevMapping
                      : { arr, atomList, keyList }),
                  mappingCache.set(arr, mapping),
                  mapping
                );
              },
              mappingAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                (get) => {
                  const prev = get(mappingAtom),
                    arr = get(arrAtom);
                  return getMapping(arr, null == prev ? void 0 : prev.arr);
                },
              );
            (mappingAtom.debugPrivate = !0), (mappingAtom.init = void 0);
            const splittedAtom = isWritable(arrAtom)
              ? (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                  (get) => get(mappingAtom).atomList,
                  (get, set, action) => {
                    switch (action.type) {
                      case 'remove': {
                        const index = get(splittedAtom).indexOf(action.atom);
                        if (index >= 0) {
                          const arr = get(arrAtom);
                          set(arrAtom, [
                            ...arr.slice(0, index),
                            ...arr.slice(index + 1),
                          ]);
                        }
                        break;
                      }
                      case 'insert': {
                        const index = action.before
                          ? get(splittedAtom).indexOf(action.before)
                          : get(splittedAtom).length;
                        if (index >= 0) {
                          const arr = get(arrAtom);
                          set(arrAtom, [
                            ...arr.slice(0, index),
                            action.value,
                            ...arr.slice(index),
                          ]);
                        }
                        break;
                      }
                      case 'move': {
                        const index1 = get(splittedAtom).indexOf(action.atom),
                          index2 = action.before
                            ? get(splittedAtom).indexOf(action.before)
                            : get(splittedAtom).length;
                        if (index1 >= 0 && index2 >= 0) {
                          const arr = get(arrAtom);
                          set(
                            arrAtom,
                            index1 < index2
                              ? [
                                  ...arr.slice(0, index1),
                                  ...arr.slice(index1 + 1, index2),
                                  arr[index1],
                                  ...arr.slice(index2),
                                ]
                              : [
                                  ...arr.slice(0, index2),
                                  arr[index1],
                                  ...arr.slice(index2, index1),
                                  ...arr.slice(index1 + 1),
                                ],
                          );
                        }
                        break;
                      }
                    }
                  },
                )
              : (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                  (get) => get(mappingAtom).atomList,
                );
            return splittedAtom;
          },
          arrAtom,
          keyExtractor || cacheKeyForEmptyKeyExtractor,
        );
      }
      function atomWithDefault(getDefault) {
        const EMPTY = Symbol(),
          overwrittenAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
            EMPTY,
          );
        overwrittenAtom.debugPrivate = !0;
        const anAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
          (get, options) => {
            const overwritten = get(overwrittenAtom);
            return overwritten !== EMPTY
              ? overwritten
              : getDefault(get, options);
          },
          (get, set, update) => {
            if (update === RESET) set(overwrittenAtom, EMPTY);
            else if ('function' == typeof update) {
              const prevValue = get(anAtom);
              set(overwrittenAtom, update(prevValue));
            } else set(overwrittenAtom, update);
          },
        );
        return anAtom;
      }
      const isPromiseLike = (x) =>
        'function' == typeof (null == x ? void 0 : x.then);
      (function createJSONStorage(
        getStringStorage = () => {
          try {
            return window.localStorage;
          } catch (e) {
            return void ('undefined' != typeof window && console.warn(e));
          }
        },
        options,
      ) {
        let lastStr, lastValue;
        const storage = {
          getItem: (key, initialValue) => {
            var _a, _b;
            const parse = (str2) => {
                if (lastStr !== (str2 = str2 || '')) {
                  try {
                    lastValue = JSON.parse(
                      str2,
                      null == options ? void 0 : options.reviver,
                    );
                  } catch (e) {
                    return initialValue;
                  }
                  lastStr = str2;
                }
                return lastValue;
              },
              str =
                null !=
                (_b =
                  null == (_a = getStringStorage()) ? void 0 : _a.getItem(key))
                  ? _b
                  : null;
            return isPromiseLike(str) ? str.then(parse) : parse(str);
          },
          setItem: (key, newValue) => {
            var _a;
            return null == (_a = getStringStorage())
              ? void 0
              : _a.setItem(
                  key,
                  JSON.stringify(
                    newValue,
                    null == options ? void 0 : options.replacer,
                  ),
                );
          },
          removeItem: (key) => {
            var _a;
            return null == (_a = getStringStorage())
              ? void 0
              : _a.removeItem(key);
          },
        };
        return (
          'undefined' != typeof window &&
            'function' == typeof window.addEventListener &&
            window.Storage &&
            (storage.subscribe = (key, callback, initialValue) => {
              if (!(getStringStorage() instanceof window.Storage))
                return () => {};
              const storageEventCallback = (e) => {
                if (e.storageArea === getStringStorage() && e.key === key) {
                  let newValue;
                  try {
                    newValue = JSON.parse(e.newValue || '');
                  } catch (e2) {
                    newValue = initialValue;
                  }
                  callback(newValue);
                }
              };
              return (
                window.addEventListener('storage', storageEventCallback),
                () => {
                  window.removeEventListener('storage', storageEventCallback);
                }
              );
            }),
          storage
        );
      })();
      function atomWithObservable(getObservable, options) {
        const returnResultData = (result) => {
            if ('e' in result) throw result.e;
            return result.d;
          },
          observableResultAtom = (0,
          jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)((get) => {
            var _a;
            let observable = getObservable(get);
            const itself =
              null == (_a = observable[Symbol.observable])
                ? void 0
                : _a.call(observable);
            let resolve;
            itself && (observable = itself);
            const makePending = () =>
                new Promise((r) => {
                  resolve = r;
                }),
              initialResult =
                options && 'initialValue' in options
                  ? {
                      d:
                        'function' == typeof options.initialValue
                          ? options.initialValue()
                          : options.initialValue,
                    }
                  : makePending();
            let setResult, lastResult;
            const listener = (result) => {
              (lastResult = result),
                null == resolve || resolve(result),
                null == setResult || setResult(result);
            };
            let subscription, timer;
            const isNotMounted = () => !setResult,
              start = () => {
                subscription &&
                  (clearTimeout(timer), subscription.unsubscribe()),
                  (subscription = observable.subscribe({
                    next: (d) => listener({ d }),
                    error: (e) => listener({ e }),
                    complete: () => {},
                  })),
                  isNotMounted() &&
                    (null == options ? void 0 : options.unstable_timeout) &&
                    (timer = setTimeout(() => {
                      subscription &&
                        (subscription.unsubscribe(), (subscription = void 0));
                    }, options.unstable_timeout));
              };
            start();
            const resultAtom = (0,
            jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
              lastResult || initialResult,
            );
            return (
              (resultAtom.debugPrivate = !0),
              (resultAtom.onMount = (update) => (
                (setResult = update),
                lastResult && update(lastResult),
                subscription ? clearTimeout(timer) : start(),
                () => {
                  (setResult = void 0),
                    subscription &&
                      (subscription.unsubscribe(), (subscription = void 0));
                }
              )),
              [resultAtom, observable, makePending, start, isNotMounted]
            );
          });
        observableResultAtom.debugPrivate = !0;
        return (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
          (get) => {
            const [resultAtom] = get(observableResultAtom),
              result = get(resultAtom);
            return result instanceof Promise
              ? result.then(returnResultData)
              : returnResultData(result);
          },
          (get, set, data) => {
            const [resultAtom, observable, makePending, start, isNotMounted] =
              get(observableResultAtom);
            if (!('next' in observable))
              throw new Error('observable is not subject');
            isNotMounted() && (set(resultAtom, makePending()), start()),
              observable.next(data);
          },
        );
      }
      const cache1$1 = new WeakMap(),
        memo1 = (create, dep1) =>
          (cache1$1.has(dep1) ? cache1$1 : cache1$1.set(dep1, create())).get(
            dep1,
          ),
        isPromise$1 = (x) => x instanceof Promise,
        LOADING = { state: 'loading' };
      function loadable(anAtom) {
        return memo1(() => {
          const loadableCache = new WeakMap(),
            refreshAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(0);
          refreshAtom.debugPrivate = !0;
          const derivedAtom = (0,
          jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
            (get, { setSelf }) => {
              let value;
              get(refreshAtom);
              try {
                value = get(anAtom);
              } catch (error) {
                return { state: 'hasError', error };
              }
              if (!isPromise$1(value)) return { state: 'hasData', data: value };
              const promise = value,
                cached1 = loadableCache.get(promise);
              if (cached1) return cached1;
              'fulfilled' === promise.status
                ? loadableCache.set(promise, {
                    state: 'hasData',
                    data: promise.value,
                  })
                : 'rejected' === promise.status
                  ? loadableCache.set(promise, {
                      state: 'hasError',
                      error: promise.reason,
                    })
                  : promise
                      .then(
                        (data) => {
                          loadableCache.set(promise, {
                            state: 'hasData',
                            data,
                          });
                        },
                        (error) => {
                          loadableCache.set(promise, {
                            state: 'hasError',
                            error,
                          });
                        },
                      )
                      .finally(setSelf);
              const cached2 = loadableCache.get(promise);
              return cached2 || (loadableCache.set(promise, LOADING), LOADING);
            },
            (_get, set) => {
              set(refreshAtom, (c) => c + 1);
            },
          );
          return (
            (derivedAtom.debugPrivate = !0),
            (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)((get) =>
              get(derivedAtom),
            )
          );
        }, anAtom);
      }
      const getCached = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k),
        cache1 = new WeakMap(),
        memo2 = (create, dep1, dep2) => {
          const cache2 = getCached(() => new WeakMap(), cache1, dep1);
          return getCached(create, cache2, dep2);
        },
        isPromise = (x) => x instanceof Promise,
        defaultFallback = () => {};
      function unwrap(anAtom, fallback = defaultFallback) {
        return memo2(
          () => {
            const promiseErrorCache = new WeakMap(),
              promiseResultCache = new WeakMap(),
              refreshAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                0,
              );
            refreshAtom.debugPrivate = !0;
            const promiseAndValueAtom = (0,
            jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
              (get, { setSelf }) => {
                get(refreshAtom);
                const prev = get(promiseAndValueAtom),
                  promise = get(anAtom);
                if (!isPromise(promise)) return { v: promise };
                if (
                  (promise !== (null == prev ? void 0 : prev.p) &&
                    ('fulfilled' === promise.status
                      ? promiseResultCache.set(promise, promise.value)
                      : 'rejected' === promise.status
                        ? promiseErrorCache.set(promise, promise.reason)
                        : promise
                            .then(
                              (v) => promiseResultCache.set(promise, v),
                              (e) => promiseErrorCache.set(promise, e),
                            )
                            .finally(setSelf)),
                  promiseErrorCache.has(promise))
                )
                  throw promiseErrorCache.get(promise);
                return promiseResultCache.has(promise)
                  ? { p: promise, v: promiseResultCache.get(promise) }
                  : prev && 'v' in prev
                    ? { p: promise, f: fallback(prev.v), v: prev.v }
                    : { p: promise, f: fallback() };
              },
              (_get, set) => {
                set(refreshAtom, (c) => c + 1);
              },
            );
            return (
              (promiseAndValueAtom.init = void 0),
              (promiseAndValueAtom.debugPrivate = !0),
              (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
                (get) => {
                  const state = get(promiseAndValueAtom);
                  return 'f' in state ? state.f : state.v;
                },
                (_get, set, ...args) => set(anAtom, ...args),
              )
            );
          },
          anAtom,
          fallback,
        );
      }
    },
    './node_modules/rxjs/dist/esm5/internal/Subscriber.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Ms: () => SafeSubscriber,
        vU: () => Subscriber,
      });
      var tslib_es6 = __webpack_require__('./node_modules/tslib/tslib.es6.mjs'),
        isFunction = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        ),
        Subscription = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        ),
        config = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/config.js',
        ),
        timeoutProvider = {
          setTimeout: function (handler, timeout) {
            for (var args = [], _i = 2; _i < arguments.length; _i++)
              args[_i - 2] = arguments[_i];
            var delegate = timeoutProvider.delegate;
            return (null == delegate ? void 0 : delegate.setTimeout)
              ? delegate.setTimeout.apply(
                  delegate,
                  (0, tslib_es6.fX)(
                    [handler, timeout],
                    (0, tslib_es6.zs)(args),
                  ),
                )
              : setTimeout.apply(
                  void 0,
                  (0, tslib_es6.fX)(
                    [handler, timeout],
                    (0, tslib_es6.zs)(args),
                  ),
                );
          },
          clearTimeout: function (handle) {
            var delegate = timeoutProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.clearTimeout) ||
              clearTimeout
            )(handle);
          },
          delegate: void 0,
        };
      function noop() {}
      var COMPLETE_NOTIFICATION = createNotification('C', void 0, void 0);
      function createNotification(kind, value, error) {
        return { kind, value, error };
      }
      var errorContext = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/errorContext.js',
        ),
        Subscriber = (function (_super) {
          function Subscriber(destination) {
            var _this = _super.call(this) || this;
            return (
              (_this.isStopped = !1),
              destination
                ? ((_this.destination = destination),
                  (0, Subscription.Uv)(destination) && destination.add(_this))
                : (_this.destination = EMPTY_OBSERVER),
              _this
            );
          }
          return (
            (0, tslib_es6.C6)(Subscriber, _super),
            (Subscriber.create = function (next, error, complete) {
              return new SafeSubscriber(next, error, complete);
            }),
            (Subscriber.prototype.next = function (value) {
              this.isStopped
                ? handleStoppedNotification(
                    (function nextNotification(value) {
                      return createNotification('N', value, void 0);
                    })(value),
                    this,
                  )
                : this._next(value);
            }),
            (Subscriber.prototype.error = function (err) {
              this.isStopped
                ? handleStoppedNotification(
                    (function errorNotification(error) {
                      return createNotification('E', void 0, error);
                    })(err),
                    this,
                  )
                : ((this.isStopped = !0), this._error(err));
            }),
            (Subscriber.prototype.complete = function () {
              this.isStopped
                ? handleStoppedNotification(COMPLETE_NOTIFICATION, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (Subscriber.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                _super.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (Subscriber.prototype._next = function (value) {
              this.destination.next(value);
            }),
            (Subscriber.prototype._error = function (err) {
              try {
                this.destination.error(err);
              } finally {
                this.unsubscribe();
              }
            }),
            (Subscriber.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            Subscriber
          );
        })(Subscription.yU),
        _bind = Function.prototype.bind;
      function bind(fn, thisArg) {
        return _bind.call(fn, thisArg);
      }
      var ConsumerObserver = (function () {
          function ConsumerObserver(partialObserver) {
            this.partialObserver = partialObserver;
          }
          return (
            (ConsumerObserver.prototype.next = function (value) {
              var partialObserver = this.partialObserver;
              if (partialObserver.next)
                try {
                  partialObserver.next(value);
                } catch (error) {
                  handleUnhandledError(error);
                }
            }),
            (ConsumerObserver.prototype.error = function (err) {
              var partialObserver = this.partialObserver;
              if (partialObserver.error)
                try {
                  partialObserver.error(err);
                } catch (error) {
                  handleUnhandledError(error);
                }
              else handleUnhandledError(err);
            }),
            (ConsumerObserver.prototype.complete = function () {
              var partialObserver = this.partialObserver;
              if (partialObserver.complete)
                try {
                  partialObserver.complete();
                } catch (error) {
                  handleUnhandledError(error);
                }
            }),
            ConsumerObserver
          );
        })(),
        SafeSubscriber = (function (_super) {
          function SafeSubscriber(observerOrNext, error, complete) {
            var partialObserver,
              context_1,
              _this = _super.call(this) || this;
            (0, isFunction.T)(observerOrNext) || !observerOrNext
              ? (partialObserver = {
                  next: null != observerOrNext ? observerOrNext : void 0,
                  error: null != error ? error : void 0,
                  complete: null != complete ? complete : void 0,
                })
              : _this && config.$.useDeprecatedNextContext
                ? (((context_1 = Object.create(observerOrNext)).unsubscribe =
                    function () {
                      return _this.unsubscribe();
                    }),
                  (partialObserver = {
                    next:
                      observerOrNext.next &&
                      bind(observerOrNext.next, context_1),
                    error:
                      observerOrNext.error &&
                      bind(observerOrNext.error, context_1),
                    complete:
                      observerOrNext.complete &&
                      bind(observerOrNext.complete, context_1),
                  }))
                : (partialObserver = observerOrNext);
            return (
              (_this.destination = new ConsumerObserver(partialObserver)), _this
            );
          }
          return (0, tslib_es6.C6)(SafeSubscriber, _super), SafeSubscriber;
        })(Subscriber);
      function handleUnhandledError(error) {
        config.$.useDeprecatedSynchronousErrorHandling
          ? (0, errorContext.l)(error)
          : (function reportUnhandledError(err) {
              timeoutProvider.setTimeout(function () {
                var onUnhandledError = config.$.onUnhandledError;
                if (!onUnhandledError) throw err;
                onUnhandledError(err);
              });
            })(error);
      }
      function handleStoppedNotification(notification, subscriber) {
        var onStoppedNotification = config.$.onStoppedNotification;
        onStoppedNotification &&
          timeoutProvider.setTimeout(function () {
            return onStoppedNotification(notification, subscriber);
          });
      }
      var EMPTY_OBSERVER = {
        closed: !0,
        next: noop,
        error: function defaultErrorHandler(err) {
          throw err;
        },
        complete: noop,
      };
    },
    './node_modules/rxjs/dist/esm5/internal/Subscription.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        yU: () => Subscription,
        Uv: () => isSubscription,
      });
      var tslib_es6 = __webpack_require__('./node_modules/tslib/tslib.es6.mjs'),
        isFunction = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      var UnsubscriptionError = (function createErrorClass(createImpl) {
          var ctorFunc = createImpl(function (instance) {
            Error.call(instance), (instance.stack = new Error().stack);
          });
          return (
            (ctorFunc.prototype = Object.create(Error.prototype)),
            (ctorFunc.prototype.constructor = ctorFunc),
            ctorFunc
          );
        })(function (_super) {
          return function UnsubscriptionErrorImpl(errors) {
            _super(this),
              (this.message = errors
                ? errors.length +
                  ' errors occurred during unsubscription:\n' +
                  errors
                    .map(function (err, i) {
                      return i + 1 + ') ' + err.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = errors);
          };
        }),
        arrRemove = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js',
        ),
        Subscription = (function () {
          function Subscription(initialTeardown) {
            (this.initialTeardown = initialTeardown),
              (this.closed = !1),
              (this._parentage = null),
              (this._finalizers = null);
          }
          var empty;
          return (
            (Subscription.prototype.unsubscribe = function () {
              var e_1, _a, e_2, _b, errors;
              if (!this.closed) {
                this.closed = !0;
                var _parentage = this._parentage;
                if (_parentage)
                  if (((this._parentage = null), Array.isArray(_parentage)))
                    try {
                      for (
                        var _parentage_1 = (0, tslib_es6.Ju)(_parentage),
                          _parentage_1_1 = _parentage_1.next();
                        !_parentage_1_1.done;
                        _parentage_1_1 = _parentage_1.next()
                      ) {
                        _parentage_1_1.value.remove(this);
                      }
                    } catch (e_1_1) {
                      e_1 = { error: e_1_1 };
                    } finally {
                      try {
                        _parentage_1_1 &&
                          !_parentage_1_1.done &&
                          (_a = _parentage_1.return) &&
                          _a.call(_parentage_1);
                      } finally {
                        if (e_1) throw e_1.error;
                      }
                    }
                  else _parentage.remove(this);
                var initialFinalizer = this.initialTeardown;
                if ((0, isFunction.T)(initialFinalizer))
                  try {
                    initialFinalizer();
                  } catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                  }
                var _finalizers = this._finalizers;
                if (_finalizers) {
                  this._finalizers = null;
                  try {
                    for (
                      var _finalizers_1 = (0, tslib_es6.Ju)(_finalizers),
                        _finalizers_1_1 = _finalizers_1.next();
                      !_finalizers_1_1.done;
                      _finalizers_1_1 = _finalizers_1.next()
                    ) {
                      var finalizer = _finalizers_1_1.value;
                      try {
                        execFinalizer(finalizer);
                      } catch (err) {
                        (errors = null != errors ? errors : []),
                          err instanceof UnsubscriptionError
                            ? (errors = (0, tslib_es6.fX)(
                                (0, tslib_es6.fX)(
                                  [],
                                  (0, tslib_es6.zs)(errors),
                                ),
                                (0, tslib_es6.zs)(err.errors),
                              ))
                            : errors.push(err);
                      }
                    }
                  } catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                  } finally {
                    try {
                      _finalizers_1_1 &&
                        !_finalizers_1_1.done &&
                        (_b = _finalizers_1.return) &&
                        _b.call(_finalizers_1);
                    } finally {
                      if (e_2) throw e_2.error;
                    }
                  }
                }
                if (errors) throw new UnsubscriptionError(errors);
              }
            }),
            (Subscription.prototype.add = function (teardown) {
              var _a;
              if (teardown && teardown !== this)
                if (this.closed) execFinalizer(teardown);
                else {
                  if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                  }
                  (this._finalizers =
                    null !== (_a = this._finalizers) && void 0 !== _a
                      ? _a
                      : []).push(teardown);
                }
            }),
            (Subscription.prototype._hasParent = function (parent) {
              var _parentage = this._parentage;
              return (
                _parentage === parent ||
                (Array.isArray(_parentage) && _parentage.includes(parent))
              );
            }),
            (Subscription.prototype._addParent = function (parent) {
              var _parentage = this._parentage;
              this._parentage = Array.isArray(_parentage)
                ? (_parentage.push(parent), _parentage)
                : _parentage
                  ? [_parentage, parent]
                  : parent;
            }),
            (Subscription.prototype._removeParent = function (parent) {
              var _parentage = this._parentage;
              _parentage === parent
                ? (this._parentage = null)
                : Array.isArray(_parentage) &&
                  (0, arrRemove.o)(_parentage, parent);
            }),
            (Subscription.prototype.remove = function (teardown) {
              var _finalizers = this._finalizers;
              _finalizers && (0, arrRemove.o)(_finalizers, teardown),
                teardown instanceof Subscription &&
                  teardown._removeParent(this);
            }),
            (Subscription.EMPTY =
              (((empty = new Subscription()).closed = !0), empty)),
            Subscription
          );
        })();
      Subscription.EMPTY;
      function isSubscription(value) {
        return (
          value instanceof Subscription ||
          (value &&
            'closed' in value &&
            (0, isFunction.T)(value.remove) &&
            (0, isFunction.T)(value.add) &&
            (0, isFunction.T)(value.unsubscribe))
        );
      }
      function execFinalizer(finalizer) {
        (0, isFunction.T)(finalizer) ? finalizer() : finalizer.unsubscribe();
      }
    },
    './node_modules/rxjs/dist/esm5/internal/config.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => config });
      var config = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    './node_modules/rxjs/dist/esm5/internal/observable/interval.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Y: () => interval });
      var tslib_es6 = __webpack_require__('./node_modules/tslib/tslib.es6.mjs'),
        Subscription = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        ),
        Action = (function (_super) {
          function Action(scheduler, work) {
            return _super.call(this) || this;
          }
          return (
            (0, tslib_es6.C6)(Action, _super),
            (Action.prototype.schedule = function (state, delay) {
              return void 0 === delay && (delay = 0), this;
            }),
            Action
          );
        })(Subscription.yU),
        intervalProvider = {
          setInterval: function (handler, timeout) {
            for (var args = [], _i = 2; _i < arguments.length; _i++)
              args[_i - 2] = arguments[_i];
            var delegate = intervalProvider.delegate;
            return (null == delegate ? void 0 : delegate.setInterval)
              ? delegate.setInterval.apply(
                  delegate,
                  (0, tslib_es6.fX)(
                    [handler, timeout],
                    (0, tslib_es6.zs)(args),
                  ),
                )
              : setInterval.apply(
                  void 0,
                  (0, tslib_es6.fX)(
                    [handler, timeout],
                    (0, tslib_es6.zs)(args),
                  ),
                );
          },
          clearInterval: function (handle) {
            var delegate = intervalProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.clearInterval) ||
              clearInterval
            )(handle);
          },
          delegate: void 0,
        },
        arrRemove = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js',
        ),
        AsyncAction = (function (_super) {
          function AsyncAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            return (
              (_this.scheduler = scheduler),
              (_this.work = work),
              (_this.pending = !1),
              _this
            );
          }
          return (
            (0, tslib_es6.C6)(AsyncAction, _super),
            (AsyncAction.prototype.schedule = function (state, delay) {
              var _a;
              if ((void 0 === delay && (delay = 0), this.closed)) return this;
              this.state = state;
              var id = this.id,
                scheduler = this.scheduler;
              return (
                null != id &&
                  (this.id = this.recycleAsyncId(scheduler, id, delay)),
                (this.pending = !0),
                (this.delay = delay),
                (this.id =
                  null !== (_a = this.id) && void 0 !== _a
                    ? _a
                    : this.requestAsyncId(scheduler, this.id, delay)),
                this
              );
            }),
            (AsyncAction.prototype.requestAsyncId = function (
              scheduler,
              _id,
              delay,
            ) {
              return (
                void 0 === delay && (delay = 0),
                intervalProvider.setInterval(
                  scheduler.flush.bind(scheduler, this),
                  delay,
                )
              );
            }),
            (AsyncAction.prototype.recycleAsyncId = function (
              _scheduler,
              id,
              delay,
            ) {
              if (
                (void 0 === delay && (delay = 0),
                null != delay && this.delay === delay && !1 === this.pending)
              )
                return id;
              null != id && intervalProvider.clearInterval(id);
            }),
            (AsyncAction.prototype.execute = function (state, delay) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              var error = this._execute(state, delay);
              if (error) return error;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (AsyncAction.prototype._execute = function (state, _delay) {
              var errorValue,
                errored = !1;
              try {
                this.work(state);
              } catch (e) {
                (errored = !0),
                  (errorValue =
                    e || new Error('Scheduled action threw falsy error'));
              }
              if (errored) return this.unsubscribe(), errorValue;
            }),
            (AsyncAction.prototype.unsubscribe = function () {
              if (!this.closed) {
                var id = this.id,
                  scheduler = this.scheduler,
                  actions = scheduler.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, arrRemove.o)(actions, this),
                  null != id &&
                    (this.id = this.recycleAsyncId(scheduler, id, null)),
                  (this.delay = null),
                  _super.prototype.unsubscribe.call(this);
              }
            }),
            AsyncAction
          );
        })(Action),
        dateTimestampProvider = {
          now: function () {
            return (dateTimestampProvider.delegate || Date).now();
          },
          delegate: void 0,
        },
        Scheduler = (function () {
          function Scheduler(schedulerActionCtor, now) {
            void 0 === now && (now = Scheduler.now),
              (this.schedulerActionCtor = schedulerActionCtor),
              (this.now = now);
          }
          return (
            (Scheduler.prototype.schedule = function (work, delay, state) {
              return (
                void 0 === delay && (delay = 0),
                new this.schedulerActionCtor(this, work).schedule(state, delay)
              );
            }),
            (Scheduler.now = dateTimestampProvider.now),
            Scheduler
          );
        })(),
        asyncScheduler = new ((function (_super) {
          function AsyncScheduler(SchedulerAction, now) {
            void 0 === now && (now = Scheduler.now);
            var _this = _super.call(this, SchedulerAction, now) || this;
            return (_this.actions = []), (_this._active = !1), _this;
          }
          return (
            (0, tslib_es6.C6)(AsyncScheduler, _super),
            (AsyncScheduler.prototype.flush = function (action) {
              var actions = this.actions;
              if (this._active) actions.push(action);
              else {
                var error;
                this._active = !0;
                do {
                  if ((error = action.execute(action.state, action.delay)))
                    break;
                } while ((action = actions.shift()));
                if (((this._active = !1), error)) {
                  for (; (action = actions.shift()); ) action.unsubscribe();
                  throw error;
                }
              }
            }),
            AsyncScheduler
          );
        })(Scheduler))(AsyncAction),
        async_async = asyncScheduler,
        Subscriber = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/Subscriber.js',
        ),
        observable =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function identity(x) {
        return x;
      }
      function pipeFromArray(fns) {
        return 0 === fns.length
          ? identity
          : 1 === fns.length
            ? fns[0]
            : function piped(input) {
                return fns.reduce(function (prev, fn) {
                  return fn(prev);
                }, input);
              };
      }
      var config = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/config.js',
        ),
        isFunction = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        ),
        errorContext = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/util/errorContext.js',
        ),
        Observable = (function () {
          function Observable(subscribe) {
            subscribe && (this._subscribe = subscribe);
          }
          return (
            (Observable.prototype.lift = function (operator) {
              var observable = new Observable();
              return (
                (observable.source = this),
                (observable.operator = operator),
                observable
              );
            }),
            (Observable.prototype.subscribe = function (
              observerOrNext,
              error,
              complete,
            ) {
              var _this = this,
                subscriber = (function isSubscriber(value) {
                  return (
                    (value && value instanceof Subscriber.vU) ||
                    ((function isObserver(value) {
                      return (
                        value &&
                        (0, isFunction.T)(value.next) &&
                        (0, isFunction.T)(value.error) &&
                        (0, isFunction.T)(value.complete)
                      );
                    })(value) &&
                      (0, Subscription.Uv)(value))
                  );
                })(observerOrNext)
                  ? observerOrNext
                  : new Subscriber.Ms(observerOrNext, error, complete);
              return (
                (0, errorContext.Y)(function () {
                  var _a = _this,
                    operator = _a.operator,
                    source = _a.source;
                  subscriber.add(
                    operator
                      ? operator.call(subscriber, source)
                      : source
                        ? _this._subscribe(subscriber)
                        : _this._trySubscribe(subscriber),
                  );
                }),
                subscriber
              );
            }),
            (Observable.prototype._trySubscribe = function (sink) {
              try {
                return this._subscribe(sink);
              } catch (err) {
                sink.error(err);
              }
            }),
            (Observable.prototype.forEach = function (next, promiseCtor) {
              var _this = this;
              return new (promiseCtor = getPromiseCtor(promiseCtor))(function (
                resolve,
                reject,
              ) {
                var subscriber = new Subscriber.Ms({
                  next: function (value) {
                    try {
                      next(value);
                    } catch (err) {
                      reject(err), subscriber.unsubscribe();
                    }
                  },
                  error: reject,
                  complete: resolve,
                });
                _this.subscribe(subscriber);
              });
            }),
            (Observable.prototype._subscribe = function (subscriber) {
              var _a;
              return null === (_a = this.source) || void 0 === _a
                ? void 0
                : _a.subscribe(subscriber);
            }),
            (Observable.prototype[observable] = function () {
              return this;
            }),
            (Observable.prototype.pipe = function () {
              for (var operations = [], _i = 0; _i < arguments.length; _i++)
                operations[_i] = arguments[_i];
              return pipeFromArray(operations)(this);
            }),
            (Observable.prototype.toPromise = function (promiseCtor) {
              var _this = this;
              return new (promiseCtor = getPromiseCtor(promiseCtor))(function (
                resolve,
                reject,
              ) {
                var value;
                _this.subscribe(
                  function (x) {
                    return (value = x);
                  },
                  function (err) {
                    return reject(err);
                  },
                  function () {
                    return resolve(value);
                  },
                );
              });
            }),
            (Observable.create = function (subscribe) {
              return new Observable(subscribe);
            }),
            Observable
          );
        })();
      function getPromiseCtor(promiseCtor) {
        var _a;
        return null !==
          (_a = null != promiseCtor ? promiseCtor : config.$.Promise) &&
          void 0 !== _a
          ? _a
          : Promise;
      }
      function timer(dueTime, intervalOrScheduler, scheduler) {
        void 0 === dueTime && (dueTime = 0),
          void 0 === scheduler && (scheduler = async_async);
        var intervalDuration = -1;
        return (
          null != intervalOrScheduler &&
            (!(function isScheduler(value) {
              return value && (0, isFunction.T)(value.schedule);
            })(intervalOrScheduler)
              ? (intervalDuration = intervalOrScheduler)
              : (scheduler = intervalOrScheduler)),
          new Observable(function (subscriber) {
            var due = (function isValidDate(value) {
              return value instanceof Date && !isNaN(value);
            })(dueTime)
              ? +dueTime - scheduler.now()
              : dueTime;
            due < 0 && (due = 0);
            var n = 0;
            return scheduler.schedule(function () {
              subscriber.closed ||
                (subscriber.next(n++),
                0 <= intervalDuration
                  ? this.schedule(void 0, intervalDuration)
                  : subscriber.complete());
            }, due);
          })
        );
      }
      function interval(period, scheduler) {
        return (
          void 0 === period && (period = 0),
          void 0 === scheduler && (scheduler = asyncScheduler),
          period < 0 && (period = 0),
          timer(period, period, scheduler)
        );
      }
    },
    './node_modules/rxjs/dist/esm5/internal/operators/map.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => map });
      var isFunction = __webpack_require__(
        './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
      );
      function operate(init) {
        return function (source) {
          if (
            (function hasLift(source) {
              return (0, isFunction.T)(null == source ? void 0 : source.lift);
            })(source)
          )
            return source.lift(function (liftedSource) {
              try {
                return init(liftedSource, this);
              } catch (err) {
                this.error(err);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      var tslib_es6 = __webpack_require__('./node_modules/tslib/tslib.es6.mjs');
      var OperatorSubscriber = (function (_super) {
        function OperatorSubscriber(
          destination,
          onNext,
          onComplete,
          onError,
          onFinalize,
          shouldUnsubscribe,
        ) {
          var _this = _super.call(this, destination) || this;
          return (
            (_this.onFinalize = onFinalize),
            (_this.shouldUnsubscribe = shouldUnsubscribe),
            (_this._next = onNext
              ? function (value) {
                  try {
                    onNext(value);
                  } catch (err) {
                    destination.error(err);
                  }
                }
              : _super.prototype._next),
            (_this._error = onError
              ? function (err) {
                  try {
                    onError(err);
                  } catch (err) {
                    destination.error(err);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : _super.prototype._error),
            (_this._complete = onComplete
              ? function () {
                  try {
                    onComplete();
                  } catch (err) {
                    destination.error(err);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : _super.prototype._complete),
            _this
          );
        }
        return (
          (0, tslib_es6.C6)(OperatorSubscriber, _super),
          (OperatorSubscriber.prototype.unsubscribe = function () {
            var _a;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var closed_1 = this.closed;
              _super.prototype.unsubscribe.call(this),
                !closed_1 &&
                  (null === (_a = this.onFinalize) ||
                    void 0 === _a ||
                    _a.call(this));
            }
          }),
          OperatorSubscriber
        );
      })(
        __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/Subscriber.js',
        ).vU,
      );
      function map(project, thisArg) {
        return operate(function (source, subscriber) {
          var index = 0;
          source.subscribe(
            (function createOperatorSubscriber(
              destination,
              onNext,
              onComplete,
              onError,
              onFinalize,
            ) {
              return new OperatorSubscriber(
                destination,
                onNext,
                onComplete,
                onError,
                onFinalize,
              );
            })(subscriber, function (value) {
              subscriber.next(project.call(thisArg, value, index++));
            }),
          );
        });
      }
    },
    './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function arrRemove(arr, item) {
        if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
        }
      }
      __webpack_require__.d(__webpack_exports__, { o: () => arrRemove });
    },
    './node_modules/rxjs/dist/esm5/internal/util/errorContext.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Y: () => errorContext,
        l: () => captureError,
      });
      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/rxjs/dist/esm5/internal/config.js',
        ),
        context = null;
      function errorContext(cb) {
        if (
          _config__WEBPACK_IMPORTED_MODULE_0__.$
            .useDeprecatedSynchronousErrorHandling
        ) {
          var isRoot = !context;
          if (
            (isRoot && (context = { errorThrown: !1, error: null }),
            cb(),
            isRoot)
          ) {
            var _a = context,
              errorThrown = _a.errorThrown,
              error = _a.error;
            if (((context = null), errorThrown)) throw error;
          }
        } else cb();
      }
      function captureError(err) {
        _config__WEBPACK_IMPORTED_MODULE_0__.$
          .useDeprecatedSynchronousErrorHandling &&
          context &&
          ((context.errorThrown = !0), (context.error = err));
      }
    },
    './node_modules/rxjs/dist/esm5/internal/util/isFunction.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function isFunction(value) {
        return 'function' == typeof value;
      }
      __webpack_require__.d(__webpack_exports__, { T: () => isFunction });
    },
    './node_modules/tslib/tslib.es6.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        C6: () => __extends,
        Ju: () => __values,
        fX: () => __spreadArray,
        zs: () => __read,
      });
      var extendStatics = function (d, b) {
        return (
          (extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
            }),
          extendStatics(d, b)
        );
      };
      function __extends(d, b) {
        if ('function' != typeof b && null !== b)
          throw new TypeError(
            'Class extends value ' +
              String(b) +
              ' is not a constructor or null',
          );
        function __() {
          this.constructor = d;
        }
        extendStatics(d, b),
          (d.prototype =
            null === b
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __()));
      }
      Object.create;
      function __values(o) {
        var s = 'function' == typeof Symbol && Symbol.iterator,
          m = s && o[s],
          i = 0;
        if (m) return m.call(o);
        if (o && 'number' == typeof o.length)
          return {
            next: function () {
              return (
                o && i >= o.length && (o = void 0),
                { value: o && o[i++], done: !o }
              );
            },
          };
        throw new TypeError(
          s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }
      function __read(o, n) {
        var m = 'function' == typeof Symbol && o[Symbol.iterator];
        if (!m) return o;
        var r,
          e,
          i = m.call(o),
          ar = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            r && !r.done && (m = i.return) && m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }
      function __spreadArray(to, from, pack) {
        if (pack || 2 === arguments.length)
          for (var ar, i = 0, l = from.length; i < l; i++)
            (!ar && i in from) ||
              (ar || (ar = Array.prototype.slice.call(from, 0, i)),
              (ar[i] = from[i]));
        return to.concat(ar || Array.prototype.slice.call(from));
      }
      Object.create;
      'function' == typeof SuppressedError && SuppressedError;
    },
  },
]);
