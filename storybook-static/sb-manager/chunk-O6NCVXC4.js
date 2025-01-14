import {
  Addon_TypesEnum,
  AlertIcon,
  ArrowLeftIcon,
  Badge,
  BottomBarIcon,
  BottomBarToggleIcon,
  Button,
  CheckIcon,
  ChevronDownIcon,
  CircleIcon,
  CloseAltIcon,
  CloseIcon,
  CogIcon,
  CollapseIcon,
  DocumentIcon,
  EmptyTabContent,
  ErrorFormatter,
  ExpandAltIcon,
  ExpandIcon,
  EyeCloseIcon,
  EyeIcon,
  FORCE_REMOUNT,
  Form,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  IconButton,
  Icons,
  InfoIcon,
  LightningIcon,
  Link2,
  Link22,
  LinkIcon,
  Loader,
  Location,
  LocationProvider,
  LockIcon,
  ManagerConsumer,
  ManagerProvider,
  Match,
  MenuIcon,
  PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS,
  ProviderDoesNotExtendBaseProviderError,
  Route2,
  SET_CURRENT_STORY,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  SearchIcon,
  Separator,
  ShareAltIcon,
  SidebarAltIcon,
  Spaced,
  StorybookIcon,
  StorybookLogo,
  SyncIcon,
  TabBar,
  TabButton,
  Tabs,
  TimeIcon,
  TooltipLinkList,
  TrashIcon,
  WandIcon,
  WithTooltip,
  Zoom,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  addons,
  eventToShortcut,
  getStoryHref,
  merge_default,
  require_isObject,
  require_isSymbol,
  require_lib,
  require_root,
  require_store2,
  shortcutMatchesShortcut,
  shortcutToHumanString,
  typesX,
  useNavigate2,
  useStorybookApi,
  useStorybookState,
} from './chunk-RHK3WMPG.js';
import { ScrollArea, _extends } from './chunk-TZAR34JC.js';
import {
  Global,
  ThemeProvider,
  createGlobal,
  ensure,
  keyframes,
  logger,
  newStyled,
  require_react,
  require_react_dom,
  scope,
  useTheme,
  withTheme,
} from './chunk-UOBNU442.js';
import { __commonJS, __toESM, require_memoizerific } from './chunk-XP3HGWTR.js';
var require_client = __commonJS({
  '../../node_modules/react-dom/client.js'(exports) {
    'use strict';
    var m2 = require_react_dom();
    (i3 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (exports.createRoot = function (c2, o2) {
        i3.usingClientEntryPoint = !0;
        try {
          return m2.createRoot(c2, o2);
        } finally {
          i3.usingClientEntryPoint = !1;
        }
      }),
      (exports.hydrateRoot = function (c2, h2, o2) {
        i3.usingClientEntryPoint = !0;
        try {
          return m2.hydrateRoot(c2, h2, o2);
        } finally {
          i3.usingClientEntryPoint = !1;
        }
      });
    var i3;
  },
});
var require_react_is_development = __commonJS({
  '../../node_modules/react-is/cjs/react-is.development.js'(exports) {
    'use strict';
    (function () {
      'use strict';
      var hasSymbol = typeof Symbol == 'function' && Symbol.for,
        REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 60103,
        REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106,
        REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 60107,
        REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.strict_mode')
          : 60108,
        REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 60114,
        REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 60109,
        REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 60110,
        REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for('react.async_mode')
          : 60111,
        REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.concurrent_mode')
          : 60111,
        REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for('react.forward_ref')
          : 60112,
        REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 60113,
        REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for('react.suspense_list')
          : 60120,
        REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115,
        REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116,
        REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121,
        REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for('react.fundamental')
          : 60117,
        REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for('react.responder')
          : 60118,
        REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
      function isValidElementType(type) {
        return (
          typeof type == 'string' ||
          typeof type == 'function' ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type == 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }
      function typeOf(object) {
        if (typeof object == 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE,
        ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
        ContextConsumer = REACT_CONTEXT_TYPE,
        ContextProvider = REACT_PROVIDER_TYPE,
        Element2 = REACT_ELEMENT_TYPE,
        ForwardRef = REACT_FORWARD_REF_TYPE,
        Fragment9 = REACT_FRAGMENT_TYPE,
        Lazy = REACT_LAZY_TYPE,
        Memo = REACT_MEMO_TYPE,
        Portal = REACT_PORTAL_TYPE,
        Profiler = REACT_PROFILER_TYPE,
        StrictMode = REACT_STRICT_MODE_TYPE,
        Suspense = REACT_SUSPENSE_TYPE,
        hasWarnedAboutDeprecatedIsAsyncMode = !1;
      function isAsyncMode(object) {
        return (
          hasWarnedAboutDeprecatedIsAsyncMode ||
            ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
            console.warn(
              'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
            )),
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object == 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      (exports.AsyncMode = AsyncMode),
        (exports.ConcurrentMode = ConcurrentMode),
        (exports.ContextConsumer = ContextConsumer),
        (exports.ContextProvider = ContextProvider),
        (exports.Element = Element2),
        (exports.ForwardRef = ForwardRef),
        (exports.Fragment = Fragment9),
        (exports.Lazy = Lazy),
        (exports.Memo = Memo),
        (exports.Portal = Portal),
        (exports.Profiler = Profiler),
        (exports.StrictMode = StrictMode),
        (exports.Suspense = Suspense),
        (exports.isAsyncMode = isAsyncMode),
        (exports.isConcurrentMode = isConcurrentMode),
        (exports.isContextConsumer = isContextConsumer),
        (exports.isContextProvider = isContextProvider),
        (exports.isElement = isElement),
        (exports.isForwardRef = isForwardRef2),
        (exports.isFragment = isFragment),
        (exports.isLazy = isLazy),
        (exports.isMemo = isMemo),
        (exports.isPortal = isPortal),
        (exports.isProfiler = isProfiler),
        (exports.isStrictMode = isStrictMode),
        (exports.isSuspense = isSuspense),
        (exports.isValidElementType = isValidElementType),
        (exports.typeOf = typeOf);
    })();
  },
});
var require_react_is = __commonJS({
  '../../node_modules/react-is/index.js'(exports, module) {
    'use strict';
    module.exports = require_react_is_development();
  },
});
var require_object_assign = __commonJS({
  '../../node_modules/object-assign/index.js'(exports, module) {
    'use strict';
    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val == null)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined',
        );
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) return !1;
        var test1 = new String('abc');
        if (((test1[5] = 'de'), Object.getOwnPropertyNames(test1)[0] === '5'))
          return !1;
        for (var test2 = {}, i3 = 0; i3 < 10; i3++)
          test2['_' + String.fromCharCode(i3)] = i3;
        var order2 = Object.getOwnPropertyNames(test2).map(function (n3) {
          return test2[n3];
        });
        if (order2.join('') !== '0123456789') return !1;
        var test3 = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          }),
          Object.keys(Object.assign({}, test3)).join('') ===
            'abcdefghijklmnopqrst'
        );
      } catch {
        return !1;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          for (
            var from, to = toObject(target), symbols, s2 = 1;
            s2 < arguments.length;
            s2++
          ) {
            from = Object(arguments[s2]);
            for (var key in from)
              hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i3 = 0; i3 < symbols.length; i3++)
                propIsEnumerable.call(from, symbols[i3]) &&
                  (to[symbols[i3]] = from[symbols[i3]]);
            }
          }
          return to;
        };
  },
});
var require_ReactPropTypesSecret = __commonJS({
  '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(exports, module) {
    'use strict';
    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    module.exports = ReactPropTypesSecret;
  },
});
var require_has = __commonJS({
  '../../node_modules/prop-types/lib/has.js'(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  },
});
var require_checkPropTypes = __commonJS({
  '../../node_modules/prop-types/checkPropTypes.js'(exports, module) {
    'use strict';
    var printWarning = function () {};
    (ReactPropTypesSecret = require_ReactPropTypesSecret()),
      (loggedTypeFailures = {}),
      (has = require_has()),
      (printWarning = function (text) {
        var message = 'Warning: ' + text;
        typeof console < 'u' && console.error(message);
        try {
          throw new Error(message);
        } catch {}
      });
    var ReactPropTypesSecret, loggedTypeFailures, has;
    function checkPropTypes(
      typeSpecs,
      values,
      location,
      componentName,
      getStack,
    ) {
      for (var typeSpecName in typeSpecs)
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] != 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
              );
              throw ((err.name = 'Invariant Violation'), err);
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            );
          } catch (ex) {
            error = ex;
          }
          if (
            (error &&
              !(error instanceof Error) &&
              printWarning(
                (componentName || 'React class') +
                  ': type specification of ' +
                  location +
                  ' `' +
                  typeSpecName +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof error +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              ),
            error instanceof Error && !(error.message in loggedTypeFailures))
          ) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : '';
            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack ?? ''),
            );
          }
        }
    }
    checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    };
    module.exports = checkPropTypes;
  },
});
var require_factoryWithTypeCheckers = __commonJS({
  '../../node_modules/prop-types/factoryWithTypeCheckers.js'(exports, module) {
    'use strict';
    var ReactIs = require_react_is(),
      assign = require_object_assign(),
      ReactPropTypesSecret = require_ReactPropTypesSecret(),
      has = require_has(),
      checkPropTypes = require_checkPropTypes(),
      printWarning = function () {};
    printWarning = function (text) {
      var message = 'Warning: ' + text;
      typeof console < 'u' && console.error(message);
      try {
        throw new Error(message);
      } catch {}
    };
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol == 'function' && Symbol.iterator,
        FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn =
          maybeIterable &&
          ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn == 'function') return iteratorFn;
      }
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
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker,
        };
      function is(x2, y2) {
        return x2 === y2
          ? x2 !== 0 || 1 / x2 === 1 / y2
          : x2 !== x2 && y2 !== y2;
      }
      function PropTypeError(message, data) {
        (this.message = message),
          (this.data = data && typeof data == 'object' ? data : {}),
          (this.stack = '');
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {},
          manualPropTypeWarningCount = 0;
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
            secret !== ReactPropTypesSecret)
          ) {
            if (throwOnDirectAccess) {
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((err.name = 'Invariant Violation'), err);
            } else if (typeof console < 'u') {
              var cacheKey = componentName + ':' + propName;
              !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3 &&
                (printWarning(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    propFullName +
                    '` prop on `' +
                    componentName +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                ),
                (manualPropTypeCallCache[cacheKey] = !0),
                manualPropTypeWarningCount++);
            }
          }
          return props[propName] == null
            ? isRequired
              ? props[propName] === null
                ? new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required ' +
                      ('in `' + componentName + '`, but its value is `null`.'),
                  )
                : new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' +
                        componentName +
                        '`, but its value is `undefined`.'),
                  )
              : null
            : validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, !1);
        return (
          (chainedCheckType.isRequired = checkType.bind(null, !0)),
          chainedCheckType
        );
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  preciseType +
                  '` supplied to `' +
                  componentName +
                  '`, expected ') +
                ('`' + expectedType + '`.'),
              { expectedType },
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (typeof typeChecker != 'function')
            return new PropTypeError(
              'Property `' +
                propFullName +
                '` of component `' +
                componentName +
                '` has invalid PropType notation inside arrayOf.',
            );
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected an array.'),
            );
          }
          for (var i3 = 0; i3 < propValue.length; i3++) {
            var error = typeChecker(
              propValue,
              i3,
              componentName,
              location,
              propFullName + '[' + i3 + ']',
              ReactPropTypesSecret,
            );
            if (error instanceof Error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected a single ReactElement.'),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected a single ReactElement type.'),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS,
              actualClassName = getClassName(props[propName]);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  actualClassName +
                  '` supplied to `' +
                  componentName +
                  '`, expected ') +
                ('instance of `' + expectedClassName + '`.'),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues))
          return (
            arguments.length > 1
              ? printWarning(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
                )
              : printWarning(
                  'Invalid argument supplied to oneOf, expected an array.',
                ),
            emptyFunctionThatReturnsNull
          );
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          for (
            var propValue = props[propName], i3 = 0;
            i3 < expectedValues.length;
            i3++
          )
            if (is(propValue, expectedValues[i3])) return null;
          var valuesString = JSON.stringify(
            expectedValues,
            function (key, value) {
              var type = getPreciseType(value);
              return type === 'symbol' ? String(value) : value;
            },
          );
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of value `' +
              String(propValue) +
              '` ' +
              ('supplied to `' +
                componentName +
                '`, expected one of ' +
                valuesString +
                '.'),
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (typeof typeChecker != 'function')
            return new PropTypeError(
              'Property `' +
                propFullName +
                '` of component `' +
                componentName +
                '` has invalid PropType notation inside objectOf.',
            );
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== 'object')
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected an object.'),
            );
          for (var key in propValue)
            if (has(propValue, key)) {
              var error = typeChecker(
                propValue,
                key,
                componentName,
                location,
                propFullName + '.' + key,
                ReactPropTypesSecret,
              );
              if (error instanceof Error) return error;
            }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers))
          return (
            printWarning(
              'Invalid argument supplied to oneOfType, expected an instance of array.',
            ),
            emptyFunctionThatReturnsNull
          );
        for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
          var checker = arrayOfTypeCheckers[i3];
          if (typeof checker != 'function')
            return (
              printWarning(
                'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                  getPostfixForTypeWarning(checker) +
                  ' at index ' +
                  i3 +
                  '.',
              ),
              emptyFunctionThatReturnsNull
            );
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          for (
            var expectedTypes = [], i4 = 0;
            i4 < arrayOfTypeCheckers.length;
            i4++
          ) {
            var checker2 = arrayOfTypeCheckers[i4],
              checkerResult = checker2(
                props,
                propName,
                componentName,
                location,
                propFullName,
                ReactPropTypesSecret,
              );
            if (checkerResult == null) return null;
            checkerResult.data &&
              has(checkerResult.data, 'expectedType') &&
              expectedTypes.push(checkerResult.data.expectedType);
          }
          var expectedTypesMessage =
            expectedTypes.length > 0
              ? ', expected one of type [' + expectedTypes.join(', ') + ']'
              : '';
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`' + expectedTypesMessage + '.'),
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
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
                  '` supplied to ' +
                  ('`' + componentName + '`, expected a ReactNode.'),
              );
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(
        componentName,
        location,
        propFullName,
        key,
        type,
      ) {
        return new PropTypeError(
          (componentName || 'React class') +
            ': ' +
            location +
            ' type `' +
            propFullName +
            '.' +
            key +
            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
            type +
            '`.',
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== 'object')
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type `' +
                propType +
                '` ' +
                ('supplied to `' + componentName + '`, expected `object`.'),
            );
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker != 'function')
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker),
              );
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret,
            );
            if (error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== 'object')
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type `' +
                propType +
                '` ' +
                ('supplied to `' + componentName + '`, expected `object`.'),
            );
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker != 'function')
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker),
              );
            if (!checker)
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` key `' +
                  key +
                  '` supplied to `' +
                  componentName +
                  '`.\nBad object: ' +
                  JSON.stringify(props[propName], null, '  ') +
                  `
Valid keys: ` +
                  JSON.stringify(Object.keys(shapeTypes), null, '  '),
              );
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret,
            );
            if (error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
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
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (propValue === null || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue),
                step;
              if (iteratorFn !== propValue.entries) {
                for (; !(step = iterator.next()).done; )
                  if (!isNode(step.value)) return !1;
              } else
                for (; !(step = iterator.next()).done; ) {
                  var entry = step.value;
                  if (entry && !isNode(entry[1])) return !1;
                }
            } else return !1;
            return !0;
          default:
            return !1;
        }
      }
      function isSymbol(propType, propValue) {
        return propType === 'symbol'
          ? !0
          : propValue
            ? propValue['@@toStringTag'] === 'Symbol' ||
              (typeof Symbol == 'function' && propValue instanceof Symbol)
            : !1;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue)
          ? 'array'
          : propValue instanceof RegExp
            ? 'object'
            : isSymbol(propType, propValue)
              ? 'symbol'
              : propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue > 'u' || propValue === null) return '' + propValue;
        var propType = getPropType(propValue);
        if (propType === 'object') {
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
      function getClassName(propValue) {
        return !propValue.constructor || !propValue.constructor.name
          ? ANONYMOUS
          : propValue.constructor.name;
      }
      return (
        (ReactPropTypes.checkPropTypes = checkPropTypes),
        (ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache),
        (ReactPropTypes.PropTypes = ReactPropTypes),
        ReactPropTypes
      );
    };
  },
});
var require_prop_types = __commonJS({
  '../../node_modules/prop-types/index.js'(exports, module) {
    (ReactIs = require_react_is()),
      (throwOnDirectAccess = !0),
      (module.exports = require_factoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess,
      ));
    var ReactIs, throwOnDirectAccess;
  },
});
var require_react_fast_compare = __commonJS({
  '../../node_modules/react-fast-compare/index.js'(exports, module) {
    var hasElementType = typeof Element < 'u',
      hasMap = typeof Map == 'function',
      hasSet = typeof Set == 'function',
      hasArrayBuffer = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2) return !0;
      if (a2 && b2 && typeof a2 == 'object' && typeof b2 == 'object') {
        if (a2.constructor !== b2.constructor) return !1;
        var length, i3, keys;
        if (Array.isArray(a2)) {
          if (((length = a2.length), length != b2.length)) return !1;
          for (i3 = length; i3-- !== 0; ) if (!equal(a2[i3], b2[i3])) return !1;
          return !0;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size) return !1;
          for (it = a2.entries(); !(i3 = it.next()).done; )
            if (!b2.has(i3.value[0])) return !1;
          for (it = a2.entries(); !(i3 = it.next()).done; )
            if (!equal(i3.value[1], b2.get(i3.value[0]))) return !1;
          return !0;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size) return !1;
          for (it = a2.entries(); !(i3 = it.next()).done; )
            if (!b2.has(i3.value[0])) return !1;
          return !0;
        }
        if (
          hasArrayBuffer &&
          ArrayBuffer.isView(a2) &&
          ArrayBuffer.isView(b2)
        ) {
          if (((length = a2.length), length != b2.length)) return !1;
          for (i3 = length; i3-- !== 0; ) if (a2[i3] !== b2[i3]) return !1;
          return !0;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (
          a2.valueOf !== Object.prototype.valueOf &&
          typeof a2.valueOf == 'function' &&
          typeof b2.valueOf == 'function'
        )
          return a2.valueOf() === b2.valueOf();
        if (
          a2.toString !== Object.prototype.toString &&
          typeof a2.toString == 'function' &&
          typeof b2.toString == 'function'
        )
          return a2.toString() === b2.toString();
        if (
          ((keys = Object.keys(a2)),
          (length = keys.length),
          length !== Object.keys(b2).length)
        )
          return !1;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3])) return !1;
        if (hasElementType && a2 instanceof Element) return !1;
        for (i3 = length; i3-- !== 0; )
          if (
            !(
              (keys[i3] === '_owner' ||
                keys[i3] === '__v' ||
                keys[i3] === '__o') &&
              a2.$$typeof
            ) &&
            !equal(a2[keys[i3]], b2[keys[i3]])
          )
            return !1;
        return !0;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function (a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || '').match(/stack|recursion/i))
          return (
            console.warn('react-fast-compare cannot handle circular refs'), !1
          );
        throw error;
      }
    };
  },
});
var require_browser = __commonJS({
  '../../node_modules/invariant/browser.js'(exports, module) {
    'use strict';
    var invariant = function (condition, format2, a2, b2, c2, d2, e3, f2) {
      if (format2 === void 0)
        throw new Error('invariant requires an error message argument');
      if (!condition) {
        var error;
        if (format2 === void 0)
          error = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
          );
        else {
          var args = [a2, b2, c2, d2, e3, f2],
            argIndex = 0;
          (error = new Error(
            format2.replace(/%s/g, function () {
              return args[argIndex++];
            }),
          )),
            (error.name = 'Invariant Violation');
        }
        throw ((error.framesToPop = 1), error);
      }
    };
    module.exports = invariant;
  },
});
var require_shallowequal = __commonJS({
  '../../node_modules/shallowequal/index.js'(exports, module) {
    module.exports = function (objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) return !!ret;
      if (objA === objB) return !0;
      if (typeof objA != 'object' || !objA || typeof objB != 'object' || !objB)
        return !1;
      var keysA = Object.keys(objA),
        keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return !1;
      for (
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB),
          idx = 0;
        idx < keysA.length;
        idx++
      ) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) return !1;
        var valueA = objA[key],
          valueB = objB[key];
        if (
          ((ret = compare
            ? compare.call(compareContext, valueA, valueB, key)
            : void 0),
          ret === !1 || (ret === void 0 && valueA !== valueB))
        )
          return !1;
      }
      return !0;
    };
  },
});
var require_now = __commonJS({
  '../../node_modules/lodash/now.js'(exports, module) {
    var root = require_root(),
      now = function () {
        return root.Date.now();
      };
    module.exports = now;
  },
});
var require_trimmedEndIndex = __commonJS({
  '../../node_modules/lodash/_trimmedEndIndex.js'(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      for (
        var index = string.length;
        index-- && reWhitespace.test(string.charAt(index));

      );
      return index;
    }
    module.exports = trimmedEndIndex;
  },
});
var require_baseTrim = __commonJS({
  '../../node_modules/lodash/_baseTrim.js'(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex(),
      reTrimStart = /^\s+/;
    function baseTrim(string) {
      return (
        string &&
        string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      );
    }
    module.exports = baseTrim;
  },
});
var require_toNumber = __commonJS({
  '../../node_modules/lodash/toNumber.js'(exports, module) {
    var baseTrim = require_baseTrim(),
      isObject = require_isObject(),
      isSymbol = require_isSymbol(),
      NAN = NaN,
      reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
      reIsBinary = /^0b[01]+$/i,
      reIsOctal = /^0o[0-7]+$/i,
      freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == 'number') return value;
      if (isSymbol(value)) return NAN;
      if (isObject(value)) {
        var other =
          typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }
      if (typeof value != 'string') return value === 0 ? value : +value;
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
          ? NAN
          : +value;
    }
    module.exports = toNumber;
  },
});
var require_debounce = __commonJS({
  '../../node_modules/lodash/debounce.js'(exports, module) {
    var isObject = require_isObject(),
      now = require_now(),
      toNumber = require_toNumber(),
      FUNC_ERROR_TEXT = 'Expected a function',
      nativeMax = Math.max,
      nativeMin = Math.min;
    function debounce3(func, wait, options2) {
      var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = !1,
        maxing = !1,
        trailing = !0;
      if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
      (wait = toNumber(wait) || 0),
        isObject(options2) &&
          ((leading = !!options2.leading),
          (maxing = 'maxWait' in options2),
          (maxWait = maxing
            ? nativeMax(toNumber(options2.maxWait) || 0, wait)
            : maxWait),
          (trailing = 'trailing' in options2 ? !!options2.trailing : trailing));
      function invokeFunc(time) {
        var args = lastArgs,
          thisArg = lastThis;
        return (
          (lastArgs = lastThis = void 0),
          (lastInvokeTime = time),
          (result = func.apply(thisArg, args)),
          result
        );
      }
      function leadingEdge(time) {
        return (
          (lastInvokeTime = time),
          (timerId = setTimeout(timerExpired, wait)),
          leading ? invokeFunc(time) : result
        );
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;
        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;
        return (
          lastCallTime === void 0 ||
          timeSinceLastCall >= wait ||
          timeSinceLastCall < 0 ||
          (maxing && timeSinceLastInvoke >= maxWait)
        );
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        return (
          (timerId = void 0),
          trailing && lastArgs
            ? invokeFunc(time)
            : ((lastArgs = lastThis = void 0), result)
        );
      }
      function cancel() {
        timerId !== void 0 && clearTimeout(timerId),
          (lastInvokeTime = 0),
          (lastArgs = lastCallTime = lastThis = timerId = void 0);
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(),
          isInvoking = shouldInvoke(time);
        if (
          ((lastArgs = arguments),
          (lastThis = this),
          (lastCallTime = time),
          isInvoking)
        ) {
          if (timerId === void 0) return leadingEdge(lastCallTime);
          if (maxing)
            return (
              clearTimeout(timerId),
              (timerId = setTimeout(timerExpired, wait)),
              invokeFunc(lastCallTime)
            );
        }
        return (
          timerId === void 0 && (timerId = setTimeout(timerExpired, wait)),
          result
        );
      }
      return (debounced.cancel = cancel), (debounced.flush = flush), debounced;
    }
    module.exports = debounce3;
  },
});
var require_throttle = __commonJS({
  '../../node_modules/lodash/throttle.js'(exports, module) {
    var debounce3 = require_debounce(),
      isObject = require_isObject(),
      FUNC_ERROR_TEXT = 'Expected a function';
    function throttle2(func, wait, options2) {
      var leading = !0,
        trailing = !0;
      if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
      return (
        isObject(options2) &&
          ((leading = 'leading' in options2 ? !!options2.leading : leading),
          (trailing = 'trailing' in options2 ? !!options2.trailing : trailing)),
        debounce3(func, wait, { leading, maxWait: wait, trailing })
      );
    }
    module.exports = throttle2;
  },
});
var require_react_is_development2 = __commonJS({
  '../../node_modules/downshift/node_modules/react-is/cjs/react-is.development.js'(
    exports,
  ) {
    'use strict';
    (function () {
      'use strict';
      var REACT_ELEMENT_TYPE = 60103,
        REACT_PORTAL_TYPE = 60106,
        REACT_FRAGMENT_TYPE = 60107,
        REACT_STRICT_MODE_TYPE = 60108,
        REACT_PROFILER_TYPE = 60114,
        REACT_PROVIDER_TYPE = 60109,
        REACT_CONTEXT_TYPE = 60110,
        REACT_FORWARD_REF_TYPE = 60112,
        REACT_SUSPENSE_TYPE = 60113,
        REACT_SUSPENSE_LIST_TYPE = 60120,
        REACT_MEMO_TYPE = 60115,
        REACT_LAZY_TYPE = 60116,
        REACT_BLOCK_TYPE = 60121,
        REACT_SERVER_BLOCK_TYPE = 60122,
        REACT_FUNDAMENTAL_TYPE = 60117,
        REACT_SCOPE_TYPE = 60119,
        REACT_OPAQUE_ID_TYPE = 60128,
        REACT_DEBUG_TRACING_MODE_TYPE = 60129,
        REACT_OFFSCREEN_TYPE = 60130,
        REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol == 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        (REACT_ELEMENT_TYPE = symbolFor('react.element')),
          (REACT_PORTAL_TYPE = symbolFor('react.portal')),
          (REACT_FRAGMENT_TYPE = symbolFor('react.fragment')),
          (REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode')),
          (REACT_PROFILER_TYPE = symbolFor('react.profiler')),
          (REACT_PROVIDER_TYPE = symbolFor('react.provider')),
          (REACT_CONTEXT_TYPE = symbolFor('react.context')),
          (REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref')),
          (REACT_SUSPENSE_TYPE = symbolFor('react.suspense')),
          (REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list')),
          (REACT_MEMO_TYPE = symbolFor('react.memo')),
          (REACT_LAZY_TYPE = symbolFor('react.lazy')),
          (REACT_BLOCK_TYPE = symbolFor('react.block')),
          (REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block')),
          (REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental')),
          (REACT_SCOPE_TYPE = symbolFor('react.scope')),
          (REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id')),
          (REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode')),
          (REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen')),
          (REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden'));
      }
      var enableScopeAPI = !1;
      function isValidElementType(type) {
        return !!(
          typeof type == 'string' ||
          typeof type == 'function' ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_DEBUG_TRACING_MODE_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          type === REACT_LEGACY_HIDDEN_TYPE ||
          enableScopeAPI ||
          (typeof type == 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE ||
              type[0] === REACT_SERVER_BLOCK_TYPE))
        );
      }
      function typeOf(object) {
        if (typeof object == 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var ContextConsumer = REACT_CONTEXT_TYPE,
        ContextProvider = REACT_PROVIDER_TYPE,
        Element2 = REACT_ELEMENT_TYPE,
        ForwardRef = REACT_FORWARD_REF_TYPE,
        Fragment9 = REACT_FRAGMENT_TYPE,
        Lazy = REACT_LAZY_TYPE,
        Memo = REACT_MEMO_TYPE,
        Portal = REACT_PORTAL_TYPE,
        Profiler = REACT_PROFILER_TYPE,
        StrictMode = REACT_STRICT_MODE_TYPE,
        Suspense = REACT_SUSPENSE_TYPE,
        hasWarnedAboutDeprecatedIsAsyncMode = !1,
        hasWarnedAboutDeprecatedIsConcurrentMode = !1;
      function isAsyncMode(object) {
        return (
          hasWarnedAboutDeprecatedIsAsyncMode ||
            ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
            console.warn(
              'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
            )),
          !1
        );
      }
      function isConcurrentMode(object) {
        return (
          hasWarnedAboutDeprecatedIsConcurrentMode ||
            ((hasWarnedAboutDeprecatedIsConcurrentMode = !0),
            console.warn(
              'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
            )),
          !1
        );
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object == 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      (exports.ContextConsumer = ContextConsumer),
        (exports.ContextProvider = ContextProvider),
        (exports.Element = Element2),
        (exports.ForwardRef = ForwardRef),
        (exports.Fragment = Fragment9),
        (exports.Lazy = Lazy),
        (exports.Memo = Memo),
        (exports.Portal = Portal),
        (exports.Profiler = Profiler),
        (exports.StrictMode = StrictMode),
        (exports.Suspense = Suspense),
        (exports.isAsyncMode = isAsyncMode),
        (exports.isConcurrentMode = isConcurrentMode),
        (exports.isContextConsumer = isContextConsumer),
        (exports.isContextProvider = isContextProvider),
        (exports.isElement = isElement),
        (exports.isForwardRef = isForwardRef2),
        (exports.isFragment = isFragment),
        (exports.isLazy = isLazy),
        (exports.isMemo = isMemo),
        (exports.isPortal = isPortal),
        (exports.isProfiler = isProfiler),
        (exports.isStrictMode = isStrictMode),
        (exports.isSuspense = isSuspense),
        (exports.isValidElementType = isValidElementType),
        (exports.typeOf = typeOf);
    })();
  },
});
var require_react_is2 = __commonJS({
  '../../node_modules/downshift/node_modules/react-is/index.js'(
    exports,
    module,
  ) {
    'use strict';
    module.exports = require_react_is_development2();
  },
});
var require_fuse = __commonJS({
  '../../node_modules/fuse.js/dist/fuse.js'(exports, module) {
    (function (e3, t3) {
      typeof exports == 'object' && typeof module == 'object'
        ? (module.exports = t3())
        : typeof define == 'function' && define.amd
          ? define('Fuse', [], t3)
          : typeof exports == 'object'
            ? (exports.Fuse = t3())
            : (e3.Fuse = t3());
    })(exports, function () {
      return (function (e3) {
        var t3 = {};
        function r3(n3) {
          if (t3[n3]) return t3[n3].exports;
          var o2 = (t3[n3] = { i: n3, l: !1, exports: {} });
          return (
            e3[n3].call(o2.exports, o2, o2.exports, r3), (o2.l = !0), o2.exports
          );
        }
        return (
          (r3.m = e3),
          (r3.c = t3),
          (r3.d = function (e4, t4, n3) {
            r3.o(e4, t4) ||
              Object.defineProperty(e4, t4, { enumerable: !0, get: n3 });
          }),
          (r3.r = function (e4) {
            typeof Symbol < 'u' &&
              Symbol.toStringTag &&
              Object.defineProperty(e4, Symbol.toStringTag, {
                value: 'Module',
              }),
              Object.defineProperty(e4, '__esModule', { value: !0 });
          }),
          (r3.t = function (e4, t4) {
            if (
              (1 & t4 && (e4 = r3(e4)),
              8 & t4 ||
                (4 & t4 && typeof e4 == 'object' && e4 && e4.__esModule))
            )
              return e4;
            var n3 = Object.create(null);
            if (
              (r3.r(n3),
              Object.defineProperty(n3, 'default', {
                enumerable: !0,
                value: e4,
              }),
              2 & t4 && typeof e4 != 'string')
            )
              for (var o2 in e4)
                r3.d(
                  n3,
                  o2,
                  function (t5) {
                    return e4[t5];
                  }.bind(null, o2),
                );
            return n3;
          }),
          (r3.n = function (e4) {
            var t4 =
              e4 && e4.__esModule
                ? function () {
                    return e4.default;
                  }
                : function () {
                    return e4;
                  };
            return r3.d(t4, 'a', t4), t4;
          }),
          (r3.o = function (e4, t4) {
            return Object.prototype.hasOwnProperty.call(e4, t4);
          }),
          (r3.p = ''),
          r3((r3.s = 0))
        );
      })([
        function (e3, t3, r3) {
          function n3(e4) {
            return (n3 =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (e5) {
                    return typeof e5;
                  }
                : function (e5) {
                    return e5 &&
                      typeof Symbol == 'function' &&
                      e5.constructor === Symbol &&
                      e5 !== Symbol.prototype
                      ? 'symbol'
                      : typeof e5;
                  })(e4);
          }
          function o2(e4, t4) {
            for (var r4 = 0; r4 < t4.length; r4++) {
              var n4 = t4[r4];
              (n4.enumerable = n4.enumerable || !1),
                (n4.configurable = !0),
                'value' in n4 && (n4.writable = !0),
                Object.defineProperty(e4, n4.key, n4);
            }
          }
          var i3 = r3(1),
            a2 = r3(7),
            s2 = a2.get,
            c2 = (a2.deepValue, a2.isArray),
            h2 = (function () {
              function e4(t5, r5) {
                var n4 = r5.location,
                  o3 = n4 === void 0 ? 0 : n4,
                  i4 = r5.distance,
                  a4 = i4 === void 0 ? 100 : i4,
                  c3 = r5.threshold,
                  h3 = c3 === void 0 ? 0.6 : c3,
                  l2 = r5.maxPatternLength,
                  u2 = l2 === void 0 ? 32 : l2,
                  f2 = r5.caseSensitive,
                  v2 = f2 !== void 0 && f2,
                  p2 = r5.tokenSeparator,
                  d2 = p2 === void 0 ? / +/g : p2,
                  g2 = r5.findAllMatches,
                  y2 = g2 !== void 0 && g2,
                  m2 = r5.minMatchCharLength,
                  k2 = m2 === void 0 ? 1 : m2,
                  b2 = r5.id,
                  S2 = b2 === void 0 ? null : b2,
                  x2 = r5.keys,
                  M2 = x2 === void 0 ? [] : x2,
                  _2 = r5.shouldSort,
                  w2 = _2 === void 0 || _2,
                  L2 = r5.getFn,
                  A2 = L2 === void 0 ? s2 : L2,
                  O2 = r5.sortFn,
                  C2 =
                    O2 === void 0
                      ? function (e5, t6) {
                          return e5.score - t6.score;
                        }
                      : O2,
                  j2 = r5.tokenize,
                  P2 = j2 !== void 0 && j2,
                  I2 = r5.matchAllTokens,
                  F2 = I2 !== void 0 && I2,
                  T2 = r5.includeMatches,
                  N2 = T2 !== void 0 && T2,
                  z2 = r5.includeScore,
                  E2 = z2 !== void 0 && z2,
                  W2 = r5.verbose,
                  K2 = W2 !== void 0 && W2;
                (function (e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e4),
                  (this.options = {
                    location: o3,
                    distance: a4,
                    threshold: h3,
                    maxPatternLength: u2,
                    isCaseSensitive: v2,
                    tokenSeparator: d2,
                    findAllMatches: y2,
                    minMatchCharLength: k2,
                    id: S2,
                    keys: M2,
                    includeMatches: N2,
                    includeScore: E2,
                    shouldSort: w2,
                    getFn: A2,
                    sortFn: C2,
                    verbose: K2,
                    tokenize: P2,
                    matchAllTokens: F2,
                  }),
                  this.setCollection(t5),
                  this._processKeys(M2);
              }
              var t4, r4, a3;
              return (
                (t4 = e4),
                (r4 = [
                  {
                    key: 'setCollection',
                    value: function (e5) {
                      return (this.list = e5), e5;
                    },
                  },
                  {
                    key: '_processKeys',
                    value: function (e5) {
                      if (
                        ((this._keyWeights = {}),
                        (this._keyNames = []),
                        e5.length && typeof e5[0] == 'string')
                      )
                        for (var t5 = 0, r5 = e5.length; t5 < r5; t5 += 1) {
                          var n4 = e5[t5];
                          (this._keyWeights[n4] = 1), this._keyNames.push(n4);
                        }
                      else {
                        for (
                          var o3 = null,
                            i4 = null,
                            a4 = 0,
                            s3 = 0,
                            c3 = e5.length;
                          s3 < c3;
                          s3 += 1
                        ) {
                          var h3 = e5[s3];
                          if (!h3.hasOwnProperty('name'))
                            throw new Error(
                              'Missing "name" property in key object',
                            );
                          var l2 = h3.name;
                          if (
                            (this._keyNames.push(l2),
                            !h3.hasOwnProperty('weight'))
                          )
                            throw new Error(
                              'Missing "weight" property in key object',
                            );
                          var u2 = h3.weight;
                          if (u2 < 0 || u2 > 1)
                            throw new Error(
                              '"weight" property in key must bein the range of [0, 1)',
                            );
                          (i4 = i4 == null ? u2 : Math.max(i4, u2)),
                            (o3 = o3 == null ? u2 : Math.min(o3, u2)),
                            (this._keyWeights[l2] = u2),
                            (a4 += u2);
                        }
                        if (a4 > 1)
                          throw new Error('Total of weights cannot exceed 1');
                      }
                    },
                  },
                  {
                    key: 'search',
                    value: function (e5) {
                      var t5 =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : { limit: !1 };
                      this._log(
                        `---------
Search pattern: "`.concat(e5, '"'),
                      );
                      var r5 = this._prepareSearchers(e5),
                        n4 = r5.tokenSearchers,
                        o3 = r5.fullSearcher,
                        i4 = this._search(n4, o3);
                      return (
                        this._computeScore(i4),
                        this.options.shouldSort && this._sort(i4),
                        t5.limit &&
                          typeof t5.limit == 'number' &&
                          (i4 = i4.slice(0, t5.limit)),
                        this._format(i4)
                      );
                    },
                  },
                  {
                    key: '_prepareSearchers',
                    value: function () {
                      var e5 =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : '',
                        t5 = [];
                      if (this.options.tokenize)
                        for (
                          var r5 = e5.split(this.options.tokenSeparator),
                            n4 = 0,
                            o3 = r5.length;
                          n4 < o3;
                          n4 += 1
                        )
                          t5.push(new i3(r5[n4], this.options));
                      return {
                        tokenSearchers: t5,
                        fullSearcher: new i3(e5, this.options),
                      };
                    },
                  },
                  {
                    key: '_search',
                    value: function () {
                      var e5 =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : [],
                        t5 = arguments.length > 1 ? arguments[1] : void 0,
                        r5 = this.list,
                        n4 = {},
                        o3 = [];
                      if (typeof r5[0] == 'string') {
                        for (var i4 = 0, a4 = r5.length; i4 < a4; i4 += 1)
                          this._analyze(
                            { key: '', value: r5[i4], record: i4, index: i4 },
                            {
                              resultMap: n4,
                              results: o3,
                              tokenSearchers: e5,
                              fullSearcher: t5,
                            },
                          );
                        return o3;
                      }
                      for (var s3 = 0, c3 = r5.length; s3 < c3; s3 += 1)
                        for (
                          var h3 = r5[s3], l2 = 0, u2 = this._keyNames.length;
                          l2 < u2;
                          l2 += 1
                        ) {
                          var f2 = this._keyNames[l2];
                          this._analyze(
                            {
                              key: f2,
                              value: this.options.getFn(h3, f2),
                              record: h3,
                              index: s3,
                            },
                            {
                              resultMap: n4,
                              results: o3,
                              tokenSearchers: e5,
                              fullSearcher: t5,
                            },
                          );
                        }
                      return o3;
                    },
                  },
                  {
                    key: '_analyze',
                    value: function (e5, t5) {
                      var r5 = this,
                        n4 = e5.key,
                        o3 = e5.arrayIndex,
                        i4 = o3 === void 0 ? -1 : o3,
                        a4 = e5.value,
                        s3 = e5.record,
                        h3 = e5.index,
                        l2 = t5.tokenSearchers,
                        u2 = l2 === void 0 ? [] : l2,
                        f2 = t5.fullSearcher,
                        v2 = t5.resultMap,
                        p2 = v2 === void 0 ? {} : v2,
                        d2 = t5.results,
                        g2 = d2 === void 0 ? [] : d2;
                      (function e6(t6, o4, i5, a5) {
                        if (o4 != null) {
                          if (typeof o4 == 'string') {
                            var s4 = !1,
                              h4 = -1,
                              l3 = 0;
                            r5._log(
                              `
Key: `.concat(n4 === '' ? '--' : n4),
                            );
                            var v3 = f2.search(o4);
                            if (
                              (r5._log(
                                'Full text: "'
                                  .concat(o4, '", score: ')
                                  .concat(v3.score),
                              ),
                              r5.options.tokenize)
                            ) {
                              for (
                                var d3 = o4.split(r5.options.tokenSeparator),
                                  y2 = d3.length,
                                  m2 = [],
                                  k2 = 0,
                                  b2 = u2.length;
                                k2 < b2;
                                k2 += 1
                              ) {
                                var S2 = u2[k2];
                                r5._log(
                                  `
Pattern: "`.concat(S2.pattern, '"'),
                                );
                                for (var x2 = !1, M2 = 0; M2 < y2; M2 += 1) {
                                  var _2 = d3[M2],
                                    w2 = S2.search(_2),
                                    L2 = {};
                                  w2.isMatch
                                    ? ((L2[_2] = w2.score),
                                      (s4 = !0),
                                      (x2 = !0),
                                      m2.push(w2.score))
                                    : ((L2[_2] = 1),
                                      r5.options.matchAllTokens || m2.push(1)),
                                    r5._log(
                                      'Token: "'
                                        .concat(_2, '", score: ')
                                        .concat(L2[_2]),
                                    );
                                }
                                x2 && (l3 += 1);
                              }
                              h4 = m2[0];
                              for (var A2 = m2.length, O2 = 1; O2 < A2; O2 += 1)
                                h4 += m2[O2];
                              (h4 /= A2), r5._log('Token score average:', h4);
                            }
                            var C2 = v3.score;
                            h4 > -1 && (C2 = (C2 + h4) / 2),
                              r5._log('Score average:', C2);
                            var j2 =
                              !r5.options.tokenize ||
                              !r5.options.matchAllTokens ||
                              l3 >= u2.length;
                            if (
                              (r5._log(
                                `
Check Matches: `.concat(j2),
                              ),
                              (s4 || v3.isMatch) && j2)
                            ) {
                              var P2 = {
                                key: n4,
                                arrayIndex: t6,
                                value: o4,
                                score: C2,
                              };
                              r5.options.includeMatches &&
                                (P2.matchedIndices = v3.matchedIndices);
                              var I2 = p2[a5];
                              I2
                                ? I2.output.push(P2)
                                : ((p2[a5] = { item: i5, output: [P2] }),
                                  g2.push(p2[a5]));
                            }
                          } else if (c2(o4))
                            for (var F2 = 0, T2 = o4.length; F2 < T2; F2 += 1)
                              e6(F2, o4[F2], i5, a5);
                        }
                      })(i4, a4, s3, h3);
                    },
                  },
                  {
                    key: '_computeScore',
                    value: function (e5) {
                      this._log(`

Computing score:
`);
                      for (
                        var t5 = this._keyWeights,
                          r5 = !!Object.keys(t5).length,
                          n4 = 0,
                          o3 = e5.length;
                        n4 < o3;
                        n4 += 1
                      ) {
                        for (
                          var i4 = e5[n4],
                            a4 = i4.output,
                            s3 = a4.length,
                            c3 = 1,
                            h3 = 0;
                          h3 < s3;
                          h3 += 1
                        ) {
                          var l2 = a4[h3],
                            u2 = l2.key,
                            f2 = r5 ? t5[u2] : 1,
                            v2 =
                              l2.score === 0 && t5 && t5[u2] > 0
                                ? Number.EPSILON
                                : l2.score;
                          c3 *= Math.pow(v2, f2);
                        }
                        (i4.score = c3), this._log(i4);
                      }
                    },
                  },
                  {
                    key: '_sort',
                    value: function (e5) {
                      this._log(`

Sorting....`),
                        e5.sort(this.options.sortFn);
                    },
                  },
                  {
                    key: '_format',
                    value: function (e5) {
                      var t5 = [];
                      if (this.options.verbose) {
                        var r5 = [];
                        this._log(
                          `

Output:

`,
                          JSON.stringify(
                            e5,
                            function (e6, t6) {
                              if (n3(t6) === 'object' && t6 !== null) {
                                if (r5.indexOf(t6) !== -1) return;
                                r5.push(t6);
                              }
                              return t6;
                            },
                            2,
                          ),
                        ),
                          (r5 = null);
                      }
                      var o3 = [];
                      this.options.includeMatches &&
                        o3.push(function (e6, t6) {
                          var r6 = e6.output;
                          t6.matches = [];
                          for (var n4 = 0, o4 = r6.length; n4 < o4; n4 += 1) {
                            var i5 = r6[n4];
                            if (i5.matchedIndices.length !== 0) {
                              var a5 = {
                                indices: i5.matchedIndices,
                                value: i5.value,
                              };
                              i5.key && (a5.key = i5.key),
                                i5.hasOwnProperty('arrayIndex') &&
                                  i5.arrayIndex > -1 &&
                                  (a5.arrayIndex = i5.arrayIndex),
                                t6.matches.push(a5);
                            }
                          }
                        }),
                        this.options.includeScore &&
                          o3.push(function (e6, t6) {
                            t6.score = e6.score;
                          });
                      for (var i4 = 0, a4 = e5.length; i4 < a4; i4 += 1) {
                        var s3 = e5[i4];
                        if (
                          (this.options.id &&
                            (s3.item = this.options.getFn(
                              s3.item,
                              this.options.id,
                            )[0]),
                          o3.length)
                        ) {
                          for (
                            var c3 = { item: s3.item }, h3 = 0, l2 = o3.length;
                            h3 < l2;
                            h3 += 1
                          )
                            o3[h3](s3, c3);
                          t5.push(c3);
                        } else t5.push(s3.item);
                      }
                      return t5;
                    },
                  },
                  {
                    key: '_log',
                    value: function () {
                      var e5;
                      this.options.verbose &&
                        (e5 = console).log.apply(e5, arguments);
                    },
                  },
                ]) && o2(t4.prototype, r4),
                a3 && o2(t4, a3),
                e4
              );
            })();
          e3.exports = h2;
        },
        function (e3, t3, r3) {
          function n3(e4, t4) {
            for (var r4 = 0; r4 < t4.length; r4++) {
              var n4 = t4[r4];
              (n4.enumerable = n4.enumerable || !1),
                (n4.configurable = !0),
                'value' in n4 && (n4.writable = !0),
                Object.defineProperty(e4, n4.key, n4);
            }
          }
          var o2 = r3(2),
            i3 = r3(3),
            a2 = r3(6),
            s2 = (function () {
              function e4(t5, r5) {
                var n4 = r5.location,
                  o3 = n4 === void 0 ? 0 : n4,
                  i4 = r5.distance,
                  s4 = i4 === void 0 ? 100 : i4,
                  c2 = r5.threshold,
                  h2 = c2 === void 0 ? 0.6 : c2,
                  l2 = r5.maxPatternLength,
                  u2 = l2 === void 0 ? 32 : l2,
                  f2 = r5.isCaseSensitive,
                  v2 = f2 !== void 0 && f2,
                  p2 = r5.tokenSeparator,
                  d2 = p2 === void 0 ? / +/g : p2,
                  g2 = r5.findAllMatches,
                  y2 = g2 !== void 0 && g2,
                  m2 = r5.minMatchCharLength,
                  k2 = m2 === void 0 ? 1 : m2,
                  b2 = r5.includeMatches,
                  S2 = b2 !== void 0 && b2;
                (function (e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e4),
                  (this.options = {
                    location: o3,
                    distance: s4,
                    threshold: h2,
                    maxPatternLength: u2,
                    isCaseSensitive: v2,
                    tokenSeparator: d2,
                    findAllMatches: y2,
                    includeMatches: S2,
                    minMatchCharLength: k2,
                  }),
                  (this.pattern = v2 ? t5 : t5.toLowerCase()),
                  this.pattern.length <= u2 &&
                    (this.patternAlphabet = a2(this.pattern));
              }
              var t4, r4, s3;
              return (
                (t4 = e4),
                (r4 = [
                  {
                    key: 'search',
                    value: function (e5) {
                      var t5 = this.options,
                        r5 = t5.isCaseSensitive,
                        n4 = t5.includeMatches;
                      if (
                        (r5 || (e5 = e5.toLowerCase()), this.pattern === e5)
                      ) {
                        var a3 = { isMatch: !0, score: 0 };
                        return (
                          n4 && (a3.matchedIndices = [[0, e5.length - 1]]), a3
                        );
                      }
                      var s4 = this.options,
                        c2 = s4.maxPatternLength,
                        h2 = s4.tokenSeparator;
                      if (this.pattern.length > c2)
                        return o2(e5, this.pattern, h2);
                      var l2 = this.options,
                        u2 = l2.location,
                        f2 = l2.distance,
                        v2 = l2.threshold,
                        p2 = l2.findAllMatches,
                        d2 = l2.minMatchCharLength;
                      return i3(e5, this.pattern, this.patternAlphabet, {
                        location: u2,
                        distance: f2,
                        threshold: v2,
                        findAllMatches: p2,
                        minMatchCharLength: d2,
                        includeMatches: n4,
                      });
                    },
                  },
                ]) && n3(t4.prototype, r4),
                s3 && n3(t4, s3),
                e4
              );
            })();
          e3.exports = s2;
        },
        function (e3, t3) {
          var r3 = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
          e3.exports = function (e4, t4) {
            var n3 =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : / +/g,
              o2 = new RegExp(t4.replace(r3, '\\$&').replace(n3, '|')),
              i3 = e4.match(o2),
              a2 = !!i3,
              s2 = [];
            if (a2)
              for (var c2 = 0, h2 = i3.length; c2 < h2; c2 += 1) {
                var l2 = i3[c2];
                s2.push([e4.indexOf(l2), l2.length - 1]);
              }
            return { score: a2 ? 0.5 : 1, isMatch: a2, matchedIndices: s2 };
          };
        },
        function (e3, t3, r3) {
          var n3 = r3(4),
            o2 = r3(5);
          e3.exports = function (e4, t4, r4, i3) {
            for (
              var a2 = i3.location,
                s2 = a2 === void 0 ? 0 : a2,
                c2 = i3.distance,
                h2 = c2 === void 0 ? 100 : c2,
                l2 = i3.threshold,
                u2 = l2 === void 0 ? 0.6 : l2,
                f2 = i3.findAllMatches,
                v2 = f2 !== void 0 && f2,
                p2 = i3.minMatchCharLength,
                d2 = p2 === void 0 ? 1 : p2,
                g2 = i3.includeMatches,
                y2 = g2 !== void 0 && g2,
                m2 = s2,
                k2 = e4.length,
                b2 = u2,
                S2 = e4.indexOf(t4, m2),
                x2 = t4.length,
                M2 = [],
                _2 = 0;
              _2 < k2;
              _2 += 1
            )
              M2[_2] = 0;
            if (S2 !== -1) {
              var w2 = n3(t4, {
                errors: 0,
                currentLocation: S2,
                expectedLocation: m2,
                distance: h2,
              });
              if (
                ((b2 = Math.min(w2, b2)),
                (S2 = e4.lastIndexOf(t4, m2 + x2)) !== -1)
              ) {
                var L2 = n3(t4, {
                  errors: 0,
                  currentLocation: S2,
                  expectedLocation: m2,
                  distance: h2,
                });
                b2 = Math.min(L2, b2);
              }
            }
            S2 = -1;
            for (
              var A2 = [],
                O2 = 1,
                C2 = x2 + k2,
                j2 = 1 << (x2 <= 31 ? x2 - 1 : 30),
                P2 = 0;
              P2 < x2;
              P2 += 1
            ) {
              for (var I2 = 0, F2 = C2; I2 < F2; )
                n3(t4, {
                  errors: P2,
                  currentLocation: m2 + F2,
                  expectedLocation: m2,
                  distance: h2,
                }) <= b2
                  ? (I2 = F2)
                  : (C2 = F2),
                  (F2 = Math.floor((C2 - I2) / 2 + I2));
              C2 = F2;
              var T2 = Math.max(1, m2 - F2 + 1),
                N2 = v2 ? k2 : Math.min(m2 + F2, k2) + x2,
                z2 = Array(N2 + 2);
              z2[N2 + 1] = (1 << P2) - 1;
              for (var E2 = N2; E2 >= T2; E2 -= 1) {
                var W2 = E2 - 1,
                  K2 = r4[e4.charAt(W2)];
                if (
                  (K2 && (M2[W2] = 1),
                  (z2[E2] = ((z2[E2 + 1] << 1) | 1) & K2),
                  P2 !== 0 &&
                    (z2[E2] |= ((A2[E2 + 1] | A2[E2]) << 1) | 1 | A2[E2 + 1]),
                  z2[E2] & j2 &&
                    (O2 = n3(t4, {
                      errors: P2,
                      currentLocation: W2,
                      expectedLocation: m2,
                      distance: h2,
                    })) <= b2)
                ) {
                  if (((b2 = O2), (S2 = W2) <= m2)) break;
                  T2 = Math.max(1, 2 * m2 - S2);
                }
              }
              if (
                n3(t4, {
                  errors: P2 + 1,
                  currentLocation: m2,
                  expectedLocation: m2,
                  distance: h2,
                }) > b2
              )
                break;
              A2 = z2;
            }
            var $ = { isMatch: S2 >= 0, score: O2 === 0 ? 0.001 : O2 };
            return y2 && ($.matchedIndices = o2(M2, d2)), $;
          };
        },
        function (e3, t3) {
          e3.exports = function (e4, t4) {
            var r3 = t4.errors,
              n3 = r3 === void 0 ? 0 : r3,
              o2 = t4.currentLocation,
              i3 = o2 === void 0 ? 0 : o2,
              a2 = t4.expectedLocation,
              s2 = a2 === void 0 ? 0 : a2,
              c2 = t4.distance,
              h2 = c2 === void 0 ? 100 : c2,
              l2 = n3 / e4.length,
              u2 = Math.abs(s2 - i3);
            return h2 ? l2 + u2 / h2 : u2 ? 1 : l2;
          };
        },
        function (e3, t3) {
          e3.exports = function () {
            for (
              var e4 =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
                t4 =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 1,
                r3 = [],
                n3 = -1,
                o2 = -1,
                i3 = 0,
                a2 = e4.length;
              i3 < a2;
              i3 += 1
            ) {
              var s2 = e4[i3];
              s2 && n3 === -1
                ? (n3 = i3)
                : s2 ||
                  n3 === -1 ||
                  ((o2 = i3 - 1) - n3 + 1 >= t4 && r3.push([n3, o2]),
                  (n3 = -1));
            }
            return e4[i3 - 1] && i3 - n3 >= t4 && r3.push([n3, i3 - 1]), r3;
          };
        },
        function (e3, t3) {
          e3.exports = function (e4) {
            for (var t4 = {}, r3 = e4.length, n3 = 0; n3 < r3; n3 += 1)
              t4[e4.charAt(n3)] = 0;
            for (var o2 = 0; o2 < r3; o2 += 1)
              t4[e4.charAt(o2)] |= 1 << (r3 - o2 - 1);
            return t4;
          };
        },
        function (e3, t3) {
          var r3 = function (e4) {
              return Array.isArray
                ? Array.isArray(e4)
                : Object.prototype.toString.call(e4) === '[object Array]';
            },
            n3 = function (e4) {
              return e4 == null
                ? ''
                : (function (e5) {
                    if (typeof e5 == 'string') return e5;
                    var t4 = e5 + '';
                    return t4 == '0' && 1 / e5 == -1 / 0 ? '-0' : t4;
                  })(e4);
            },
            o2 = function (e4) {
              return typeof e4 == 'string';
            },
            i3 = function (e4) {
              return typeof e4 == 'number';
            };
          e3.exports = {
            get: function (e4, t4) {
              var a2 = [];
              return (
                (function e5(t5, s2) {
                  if (s2) {
                    var c2 = s2.indexOf('.'),
                      h2 = s2,
                      l2 = null;
                    c2 !== -1 &&
                      ((h2 = s2.slice(0, c2)), (l2 = s2.slice(c2 + 1)));
                    var u2 = t5[h2];
                    if (u2 != null)
                      if (l2 || (!o2(u2) && !i3(u2)))
                        if (r3(u2))
                          for (var f2 = 0, v2 = u2.length; f2 < v2; f2 += 1)
                            e5(u2[f2], l2);
                        else l2 && e5(u2, l2);
                      else a2.push(n3(u2));
                  } else a2.push(t5);
                })(e4, t4),
                a2
              );
            },
            isArray: r3,
            isString: o2,
            isNum: i3,
            toString: n3,
          };
        },
      ]);
    });
  },
});
var require_toggle_selection = __commonJS({
  '../../node_modules/toggle-selection/index.js'(exports, module) {
    module.exports = function () {
      var selection = document.getSelection();
      if (!selection.rangeCount) return function () {};
      for (
        var active = document.activeElement, ranges = [], i3 = 0;
        i3 < selection.rangeCount;
        i3++
      )
        ranges.push(selection.getRangeAt(i3));
      switch (active.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      return (
        selection.removeAllRanges(),
        function () {
          selection.type === 'Caret' && selection.removeAllRanges(),
            selection.rangeCount ||
              ranges.forEach(function (range) {
                selection.addRange(range);
              }),
            active && active.focus();
        }
      );
    };
  },
});
var require_copy_to_clipboard = __commonJS({
  '../../node_modules/copy-to-clipboard/index.js'(exports, module) {
    'use strict';
    var deselectCurrent = require_toggle_selection(),
      clipboardToIE11Formatting = {
        'text/plain': 'Text',
        'text/html': 'Url',
        default: 'Text',
      },
      defaultMessage = 'Copy to clipboard: #{key}, Enter';
    function format2(message) {
      var copyKey =
        (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options2) {
      var debug,
        message,
        reselectPrevious,
        range,
        selection,
        mark,
        success = !1;
      options2 || (options2 = {}), (debug = options2.debug || !1);
      try {
        (reselectPrevious = deselectCurrent()),
          (range = document.createRange()),
          (selection = document.getSelection()),
          (mark = document.createElement('span')),
          (mark.textContent = text),
          (mark.ariaHidden = 'true'),
          (mark.style.all = 'unset'),
          (mark.style.position = 'fixed'),
          (mark.style.top = 0),
          (mark.style.clip = 'rect(0, 0, 0, 0)'),
          (mark.style.whiteSpace = 'pre'),
          (mark.style.webkitUserSelect = 'text'),
          (mark.style.MozUserSelect = 'text'),
          (mark.style.msUserSelect = 'text'),
          (mark.style.userSelect = 'text'),
          mark.addEventListener('copy', function (e3) {
            if ((e3.stopPropagation(), options2.format))
              if ((e3.preventDefault(), typeof e3.clipboardData > 'u')) {
                debug && console.warn('unable to use e.clipboardData'),
                  debug && console.warn('trying IE specific stuff'),
                  window.clipboardData.clearData();
                var format3 =
                  clipboardToIE11Formatting[options2.format] ||
                  clipboardToIE11Formatting.default;
                window.clipboardData.setData(format3, text);
              } else
                e3.clipboardData.clearData(),
                  e3.clipboardData.setData(options2.format, text);
            options2.onCopy &&
              (e3.preventDefault(), options2.onCopy(e3.clipboardData));
          }),
          document.body.appendChild(mark),
          range.selectNodeContents(mark),
          selection.addRange(range);
        var successful = document.execCommand('copy');
        if (!successful) throw new Error('copy command was unsuccessful');
        success = !0;
      } catch (err) {
        debug && console.error('unable to copy using execCommand: ', err),
          debug && console.warn('trying IE specific stuff');
        try {
          window.clipboardData.setData(options2.format || 'text', text),
            options2.onCopy && options2.onCopy(window.clipboardData),
            (success = !0);
        } catch (err2) {
          debug && console.error('unable to copy using clipboardData: ', err2),
            debug && console.error('falling back to prompt'),
            (message = format2(
              'message' in options2 ? options2.message : defaultMessage,
            )),
            window.prompt(message, text);
        }
      } finally {
        selection &&
          (typeof selection.removeRange == 'function'
            ? selection.removeRange(range)
            : selection.removeAllRanges()),
          mark && document.body.removeChild(mark),
          reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  },
});
var import_client = __toESM(require_client()),
  import_react62 = __toESM(require_react());
var import_react = __toESM(require_react()),
  import_prop_types = __toESM(require_prop_types()),
  import_react_fast_compare = __toESM(require_react_fast_compare()),
  import_invariant = __toESM(require_browser()),
  import_shallowequal = __toESM(require_shallowequal());
function a() {
  return (
    (a =
      Object.assign ||
      function (t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3];
          for (var n3 in r3)
            Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
        }
        return t3;
      }),
    a.apply(this, arguments)
  );
}
function s(t3, e3) {
  (t3.prototype = Object.create(e3.prototype)),
    (t3.prototype.constructor = t3),
    c(t3, e3);
}
function c(t3, e3) {
  return (
    (c =
      Object.setPrototypeOf ||
      function (t4, e4) {
        return (t4.__proto__ = e4), t4;
      }),
    c(t3, e3)
  );
}
function u(t3, e3) {
  if (t3 == null) return {};
  var r3,
    n3,
    i3 = {},
    o2 = Object.keys(t3);
  for (n3 = 0; n3 < o2.length; n3++)
    e3.indexOf((r3 = o2[n3])) >= 0 || (i3[r3] = t3[r3]);
  return i3;
}
var l = {
    BASE: 'base',
    BODY: 'body',
    HEAD: 'head',
    HTML: 'html',
    LINK: 'link',
    META: 'meta',
    NOSCRIPT: 'noscript',
    SCRIPT: 'script',
    STYLE: 'style',
    TITLE: 'title',
    FRAGMENT: 'Symbol(react.fragment)',
  },
  p = { rel: ['amphtml', 'canonical', 'alternate'] },
  f = { type: ['application/ld+json'] },
  d = {
    charset: '',
    name: ['robots', 'description'],
    property: [
      'og:type',
      'og:title',
      'og:url',
      'og:image',
      'og:image:alt',
      'og:description',
      'twitter:url',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:image:alt',
      'twitter:card',
      'twitter:site',
    ],
  },
  h = Object.keys(l).map(function (t3) {
    return l[t3];
  }),
  m = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  y = Object.keys(m).reduce(function (t3, e3) {
    return (t3[m[e3]] = e3), t3;
  }, {}),
  T = function (t3, e3) {
    for (var r3 = t3.length - 1; r3 >= 0; r3 -= 1) {
      var n3 = t3[r3];
      if (Object.prototype.hasOwnProperty.call(n3, e3)) return n3[e3];
    }
    return null;
  },
  g = function (t3) {
    var e3 = T(t3, l.TITLE),
      r3 = T(t3, 'titleTemplate');
    if ((Array.isArray(e3) && (e3 = e3.join('')), r3 && e3))
      return r3.replace(/%s/g, function () {
        return e3;
      });
    var n3 = T(t3, 'defaultTitle');
    return e3 || n3 || void 0;
  },
  b = function (t3) {
    return T(t3, 'onChangeClientState') || function () {};
  },
  v = function (t3, e3) {
    return e3
      .filter(function (e4) {
        return e4[t3] !== void 0;
      })
      .map(function (e4) {
        return e4[t3];
      })
      .reduce(function (t4, e4) {
        return a({}, t4, e4);
      }, {});
  },
  A = function (t3, e3) {
    return e3
      .filter(function (t4) {
        return t4[l.BASE] !== void 0;
      })
      .map(function (t4) {
        return t4[l.BASE];
      })
      .reverse()
      .reduce(function (e4, r3) {
        if (!e4.length)
          for (var n3 = Object.keys(r3), i3 = 0; i3 < n3.length; i3 += 1) {
            var o2 = n3[i3].toLowerCase();
            if (t3.indexOf(o2) !== -1 && r3[o2]) return e4.concat(r3);
          }
        return e4;
      }, []);
  },
  C = function (t3, e3, r3) {
    var n3 = {};
    return r3
      .filter(function (e4) {
        return (
          !!Array.isArray(e4[t3]) ||
          (e4[t3] !== void 0 &&
            console &&
            typeof console.warn == 'function' &&
            console.warn(
              'Helmet: ' +
                t3 +
                ' should be of type "Array". Instead found type "' +
                typeof e4[t3] +
                '"',
            ),
          !1)
        );
      })
      .map(function (e4) {
        return e4[t3];
      })
      .reverse()
      .reduce(function (t4, r4) {
        var i3 = {};
        r4.filter(function (t5) {
          for (var r5, o3 = Object.keys(t5), a2 = 0; a2 < o3.length; a2 += 1) {
            var s3 = o3[a2],
              c3 = s3.toLowerCase();
            e3.indexOf(c3) === -1 ||
              (r5 === 'rel' && t5[r5].toLowerCase() === 'canonical') ||
              (c3 === 'rel' && t5[c3].toLowerCase() === 'stylesheet') ||
              (r5 = c3),
              e3.indexOf(s3) === -1 ||
                (s3 !== 'innerHTML' && s3 !== 'cssText' && s3 !== 'itemprop') ||
                (r5 = s3);
          }
          if (!r5 || !t5[r5]) return !1;
          var u3 = t5[r5].toLowerCase();
          return (
            n3[r5] || (n3[r5] = {}),
            i3[r5] || (i3[r5] = {}),
            !n3[r5][u3] && ((i3[r5][u3] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (e4) {
            return t4.push(e4);
          });
        for (var o2 = Object.keys(i3), s2 = 0; s2 < o2.length; s2 += 1) {
          var c2 = o2[s2],
            u2 = a({}, n3[c2], i3[c2]);
          n3[c2] = u2;
        }
        return t4;
      }, [])
      .reverse();
  },
  O = function (t3, e3) {
    if (Array.isArray(t3) && t3.length) {
      for (var r3 = 0; r3 < t3.length; r3 += 1) if (t3[r3][e3]) return !0;
    }
    return !1;
  },
  S = function (t3) {
    return Array.isArray(t3) ? t3.join('') : t3;
  },
  E = function (t3, e3) {
    return Array.isArray(t3)
      ? t3.reduce(
          function (t4, r3) {
            return (
              (function (t5, e4) {
                for (var r4 = Object.keys(t5), n3 = 0; n3 < r4.length; n3 += 1)
                  if (e4[r4[n3]] && e4[r4[n3]].includes(t5[r4[n3]])) return !0;
                return !1;
              })(r3, e3)
                ? t4.priority.push(r3)
                : t4.default.push(r3),
              t4
            );
          },
          { priority: [], default: [] },
        )
      : { default: t3 };
  },
  I = function (t3, e3) {
    var r3;
    return a({}, t3, (((r3 = {})[e3] = void 0), r3));
  },
  P = [l.NOSCRIPT, l.SCRIPT, l.STYLE],
  w = function (t3, e3) {
    return (
      e3 === void 0 && (e3 = !0),
      e3 === !1
        ? String(t3)
        : String(t3)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
    );
  },
  x = function (t3) {
    return Object.keys(t3).reduce(function (e3, r3) {
      var n3 = t3[r3] !== void 0 ? r3 + '="' + t3[r3] + '"' : '' + r3;
      return e3 ? e3 + ' ' + n3 : n3;
    }, '');
  },
  L = function (t3, e3) {
    return (
      e3 === void 0 && (e3 = {}),
      Object.keys(t3).reduce(function (e4, r3) {
        return (e4[m[r3] || r3] = t3[r3]), e4;
      }, e3)
    );
  },
  j = function (e3, r3) {
    return r3.map(function (r4, n3) {
      var i3,
        o2 = (((i3 = { key: n3 })['data-rh'] = !0), i3);
      return (
        Object.keys(r4).forEach(function (t3) {
          var e4 = m[t3] || t3;
          e4 === 'innerHTML' || e4 === 'cssText'
            ? (o2.dangerouslySetInnerHTML = {
                __html: r4.innerHTML || r4.cssText,
              })
            : (o2[e4] = r4[t3]);
        }),
        import_react.default.createElement(e3, o2)
      );
    });
  },
  M = function (e3, r3, n3) {
    switch (e3) {
      case l.TITLE:
        return {
          toComponent: function () {
            return (
              (n4 = r3.titleAttributes),
              ((i3 = { key: (e4 = r3.title) })['data-rh'] = !0),
              (o2 = L(n4, i3)),
              [import_react.default.createElement(l.TITLE, o2, e4)]
            );
            var e4, n4, i3, o2;
          },
          toString: function () {
            return (function (t3, e4, r4, n4) {
              var i3 = x(r4),
                o2 = S(e4);
              return i3
                ? '<' +
                    t3 +
                    ' data-rh="true" ' +
                    i3 +
                    '>' +
                    w(o2, n4) +
                    '</' +
                    t3 +
                    '>'
                : '<' + t3 + ' data-rh="true">' + w(o2, n4) + '</' + t3 + '>';
            })(e3, r3.title, r3.titleAttributes, n3);
          },
        };
      case 'bodyAttributes':
      case 'htmlAttributes':
        return {
          toComponent: function () {
            return L(r3);
          },
          toString: function () {
            return x(r3);
          },
        };
      default:
        return {
          toComponent: function () {
            return j(e3, r3);
          },
          toString: function () {
            return (function (t3, e4, r4) {
              return e4.reduce(function (e5, n4) {
                var i3 = Object.keys(n4)
                    .filter(function (t4) {
                      return !(t4 === 'innerHTML' || t4 === 'cssText');
                    })
                    .reduce(function (t4, e6) {
                      var i4 =
                        n4[e6] === void 0
                          ? e6
                          : e6 + '="' + w(n4[e6], r4) + '"';
                      return t4 ? t4 + ' ' + i4 : i4;
                    }, ''),
                  o2 = n4.innerHTML || n4.cssText || '',
                  a2 = P.indexOf(t3) === -1;
                return (
                  e5 +
                  '<' +
                  t3 +
                  ' data-rh="true" ' +
                  i3 +
                  (a2 ? '/>' : '>' + o2 + '</' + t3 + '>')
                );
              }, '');
            })(e3, r3, n3);
          },
        };
    }
  },
  k = function (t3) {
    var e3 = t3.baseTag,
      r3 = t3.bodyAttributes,
      n3 = t3.encode,
      i3 = t3.htmlAttributes,
      o2 = t3.noscriptTags,
      a2 = t3.styleTags,
      s2 = t3.title,
      c2 = s2 === void 0 ? '' : s2,
      u2 = t3.titleAttributes,
      h2 = t3.linkTags,
      m2 = t3.metaTags,
      y2 = t3.scriptTags,
      T2 = {
        toComponent: function () {},
        toString: function () {
          return '';
        },
      };
    if (t3.prioritizeSeoTags) {
      var g2 = (function (t4) {
        var e4 = t4.linkTags,
          r4 = t4.scriptTags,
          n4 = t4.encode,
          i4 = E(t4.metaTags, d),
          o3 = E(e4, p),
          a3 = E(r4, f);
        return {
          priorityMethods: {
            toComponent: function () {
              return [].concat(
                j(l.META, i4.priority),
                j(l.LINK, o3.priority),
                j(l.SCRIPT, a3.priority),
              );
            },
            toString: function () {
              return (
                M(l.META, i4.priority, n4) +
                ' ' +
                M(l.LINK, o3.priority, n4) +
                ' ' +
                M(l.SCRIPT, a3.priority, n4)
              );
            },
          },
          metaTags: i4.default,
          linkTags: o3.default,
          scriptTags: a3.default,
        };
      })(t3);
      (T2 = g2.priorityMethods),
        (h2 = g2.linkTags),
        (m2 = g2.metaTags),
        (y2 = g2.scriptTags);
    }
    return {
      priority: T2,
      base: M(l.BASE, e3, n3),
      bodyAttributes: M('bodyAttributes', r3, n3),
      htmlAttributes: M('htmlAttributes', i3, n3),
      link: M(l.LINK, h2, n3),
      meta: M(l.META, m2, n3),
      noscript: M(l.NOSCRIPT, o2, n3),
      script: M(l.SCRIPT, y2, n3),
      style: M(l.STYLE, a2, n3),
      title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n3),
    };
  },
  H = [],
  N = function (t3, e3) {
    var r3 = this;
    e3 === void 0 && (e3 = typeof document < 'u'),
      (this.instances = []),
      (this.value = {
        setHelmet: function (t4) {
          r3.context.helmet = t4;
        },
        helmetInstances: {
          get: function () {
            return r3.canUseDOM ? H : r3.instances;
          },
          add: function (t4) {
            (r3.canUseDOM ? H : r3.instances).push(t4);
          },
          remove: function (t4) {
            var e4 = (r3.canUseDOM ? H : r3.instances).indexOf(t4);
            (r3.canUseDOM ? H : r3.instances).splice(e4, 1);
          },
        },
      }),
      (this.context = t3),
      (this.canUseDOM = e3),
      e3 ||
        (t3.helmet = k({
          baseTag: [],
          bodyAttributes: {},
          encodeSpecialCharacters: !0,
          htmlAttributes: {},
          linkTags: [],
          metaTags: [],
          noscriptTags: [],
          scriptTags: [],
          styleTags: [],
          title: '',
          titleAttributes: {},
        }));
  },
  R = import_react.default.createContext({}),
  D = import_prop_types.default.shape({
    setHelmet: import_prop_types.default.func,
    helmetInstances: import_prop_types.default.shape({
      get: import_prop_types.default.func,
      add: import_prop_types.default.func,
      remove: import_prop_types.default.func,
    }),
  }),
  U = typeof document < 'u',
  q = (function (e3) {
    function r3(t3) {
      var n3;
      return (
        ((n3 = e3.call(this, t3) || this).helmetData = new N(
          n3.props.context,
          r3.canUseDOM,
        )),
        n3
      );
    }
    return (
      s(r3, e3),
      (r3.prototype.render = function () {
        return import_react.default.createElement(
          R.Provider,
          { value: this.helmetData.value },
          this.props.children,
        );
      }),
      r3
    );
  })(import_react.Component);
(q.canUseDOM = U),
  (q.propTypes = {
    context: import_prop_types.default.shape({
      helmet: import_prop_types.default.shape(),
    }),
    children: import_prop_types.default.node.isRequired,
  }),
  (q.defaultProps = { context: {} }),
  (q.displayName = 'HelmetProvider');
var Y = function (t3, e3) {
    var r3,
      n3 = document.head || document.querySelector(l.HEAD),
      i3 = n3.querySelectorAll(t3 + '[data-rh]'),
      o2 = [].slice.call(i3),
      a2 = [];
    return (
      e3 &&
        e3.length &&
        e3.forEach(function (e4) {
          var n4 = document.createElement(t3);
          for (var i4 in e4)
            Object.prototype.hasOwnProperty.call(e4, i4) &&
              (i4 === 'innerHTML'
                ? (n4.innerHTML = e4.innerHTML)
                : i4 === 'cssText'
                  ? n4.styleSheet
                    ? (n4.styleSheet.cssText = e4.cssText)
                    : n4.appendChild(document.createTextNode(e4.cssText))
                  : n4.setAttribute(i4, e4[i4] === void 0 ? '' : e4[i4]));
          n4.setAttribute('data-rh', 'true'),
            o2.some(function (t4, e5) {
              return (r3 = e5), n4.isEqualNode(t4);
            })
              ? o2.splice(r3, 1)
              : a2.push(n4);
        }),
      o2.forEach(function (t4) {
        return t4.parentNode.removeChild(t4);
      }),
      a2.forEach(function (t4) {
        return n3.appendChild(t4);
      }),
      { oldTags: o2, newTags: a2 }
    );
  },
  B = function (t3, e3) {
    var r3 = document.getElementsByTagName(t3)[0];
    if (r3) {
      for (
        var n3 = r3.getAttribute('data-rh'),
          i3 = n3 ? n3.split(',') : [],
          o2 = [].concat(i3),
          a2 = Object.keys(e3),
          s2 = 0;
        s2 < a2.length;
        s2 += 1
      ) {
        var c2 = a2[s2],
          u2 = e3[c2] || '';
        r3.getAttribute(c2) !== u2 && r3.setAttribute(c2, u2),
          i3.indexOf(c2) === -1 && i3.push(c2);
        var l2 = o2.indexOf(c2);
        l2 !== -1 && o2.splice(l2, 1);
      }
      for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1) r3.removeAttribute(o2[p2]);
      i3.length === o2.length
        ? r3.removeAttribute('data-rh')
        : r3.getAttribute('data-rh') !== a2.join(',') &&
          r3.setAttribute('data-rh', a2.join(','));
    }
  },
  K = function (t3, e3) {
    var r3 = t3.baseTag,
      n3 = t3.htmlAttributes,
      i3 = t3.linkTags,
      o2 = t3.metaTags,
      a2 = t3.noscriptTags,
      s2 = t3.onChangeClientState,
      c2 = t3.scriptTags,
      u2 = t3.styleTags,
      p2 = t3.title,
      f2 = t3.titleAttributes;
    B(l.BODY, t3.bodyAttributes),
      B(l.HTML, n3),
      (function (t4, e4) {
        t4 !== void 0 && document.title !== t4 && (document.title = S(t4)),
          B(l.TITLE, e4);
      })(p2, f2);
    var d2 = {
        baseTag: Y(l.BASE, r3),
        linkTags: Y(l.LINK, i3),
        metaTags: Y(l.META, o2),
        noscriptTags: Y(l.NOSCRIPT, a2),
        scriptTags: Y(l.SCRIPT, c2),
        styleTags: Y(l.STYLE, u2),
      },
      h2 = {},
      m2 = {};
    Object.keys(d2).forEach(function (t4) {
      var e4 = d2[t4],
        r4 = e4.newTags,
        n4 = e4.oldTags;
      r4.length && (h2[t4] = r4), n4.length && (m2[t4] = d2[t4].oldTags);
    }),
      e3 && e3(),
      s2(t3, h2, m2);
  },
  _ = null,
  z = (function (t3) {
    function e3() {
      for (
        var e4, r4 = arguments.length, n3 = new Array(r4), i3 = 0;
        i3 < r4;
        i3++
      )
        n3[i3] = arguments[i3];
      return (
        ((e4 = t3.call.apply(t3, [this].concat(n3)) || this).rendered = !1), e4
      );
    }
    s(e3, t3);
    var r3 = e3.prototype;
    return (
      (r3.shouldComponentUpdate = function (t4) {
        return !(0, import_shallowequal.default)(t4, this.props);
      }),
      (r3.componentDidUpdate = function () {
        this.emitChange();
      }),
      (r3.componentWillUnmount = function () {
        this.props.context.helmetInstances.remove(this), this.emitChange();
      }),
      (r3.emitChange = function () {
        var t4,
          e4,
          r4 = this.props.context,
          n3 = r4.setHelmet,
          i3 = null,
          o2 =
            ((t4 = r4.helmetInstances.get().map(function (t5) {
              var e5 = a({}, t5.props);
              return delete e5.context, e5;
            })),
            {
              baseTag: A(['href'], t4),
              bodyAttributes: v('bodyAttributes', t4),
              defer: T(t4, 'defer'),
              encode: T(t4, 'encodeSpecialCharacters'),
              htmlAttributes: v('htmlAttributes', t4),
              linkTags: C(l.LINK, ['rel', 'href'], t4),
              metaTags: C(
                l.META,
                ['name', 'charset', 'http-equiv', 'property', 'itemprop'],
                t4,
              ),
              noscriptTags: C(l.NOSCRIPT, ['innerHTML'], t4),
              onChangeClientState: b(t4),
              scriptTags: C(l.SCRIPT, ['src', 'innerHTML'], t4),
              styleTags: C(l.STYLE, ['cssText'], t4),
              title: g(t4),
              titleAttributes: v('titleAttributes', t4),
              prioritizeSeoTags: O(t4, 'prioritizeSeoTags'),
            });
        q.canUseDOM
          ? ((e4 = o2),
            _ && cancelAnimationFrame(_),
            e4.defer
              ? (_ = requestAnimationFrame(function () {
                  K(e4, function () {
                    _ = null;
                  });
                }))
              : (K(e4), (_ = null)))
          : k && (i3 = k(o2)),
          n3(i3);
      }),
      (r3.init = function () {
        this.rendered ||
          ((this.rendered = !0),
          this.props.context.helmetInstances.add(this),
          this.emitChange());
      }),
      (r3.render = function () {
        return this.init(), null;
      }),
      e3
    );
  })(import_react.Component);
(z.propTypes = { context: D.isRequired }), (z.displayName = 'HelmetDispatcher');
var F = ['children'],
  G = ['children'],
  W = (function (e3) {
    function r3() {
      return e3.apply(this, arguments) || this;
    }
    s(r3, e3);
    var o2 = r3.prototype;
    return (
      (o2.shouldComponentUpdate = function (t3) {
        return !(0, import_react_fast_compare.default)(
          I(this.props, 'helmetData'),
          I(t3, 'helmetData'),
        );
      }),
      (o2.mapNestedChildrenToProps = function (t3, e4) {
        if (!e4) return null;
        switch (t3.type) {
          case l.SCRIPT:
          case l.NOSCRIPT:
            return { innerHTML: e4 };
          case l.STYLE:
            return { cssText: e4 };
          default:
            throw new Error(
              '<' +
                t3.type +
                ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
            );
        }
      }),
      (o2.flattenArrayTypeChildren = function (t3) {
        var e4,
          r4 = t3.child,
          n3 = t3.arrayTypeChildren;
        return a(
          {},
          n3,
          (((e4 = {})[r4.type] = [].concat(n3[r4.type] || [], [
            a(
              {},
              t3.newChildProps,
              this.mapNestedChildrenToProps(r4, t3.nestedChildren),
            ),
          ])),
          e4),
        );
      }),
      (o2.mapObjectTypeChildren = function (t3) {
        var e4,
          r4,
          n3 = t3.child,
          i3 = t3.newProps,
          o3 = t3.newChildProps,
          s2 = t3.nestedChildren;
        switch (n3.type) {
          case l.TITLE:
            return a(
              {},
              i3,
              (((e4 = {})[n3.type] = s2), (e4.titleAttributes = a({}, o3)), e4),
            );
          case l.BODY:
            return a({}, i3, { bodyAttributes: a({}, o3) });
          case l.HTML:
            return a({}, i3, { htmlAttributes: a({}, o3) });
          default:
            return a({}, i3, (((r4 = {})[n3.type] = a({}, o3)), r4));
        }
      }),
      (o2.mapArrayTypeChildrenToProps = function (t3, e4) {
        var r4 = a({}, e4);
        return (
          Object.keys(t3).forEach(function (e5) {
            var n3;
            r4 = a({}, r4, (((n3 = {})[e5] = t3[e5]), n3));
          }),
          r4
        );
      }),
      (o2.warnOnInvalidChildren = function (t3, e4) {
        return (
          (0, import_invariant.default)(
            h.some(function (e5) {
              return t3.type === e5;
            }),
            typeof t3.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : 'Only elements types ' +
                  h.join(', ') +
                  ' are allowed. Helmet does not support rendering <' +
                  t3.type +
                  '> elements. Refer to our API for more information.',
          ),
          (0, import_invariant.default)(
            !e4 ||
              typeof e4 == 'string' ||
              (Array.isArray(e4) &&
                !e4.some(function (t4) {
                  return typeof t4 != 'string';
                })),
            'Helmet expects a string as a child of <' +
              t3.type +
              '>. Did you forget to wrap your children in braces? ( <' +
              t3.type +
              '>{``}</' +
              t3.type +
              '> ) Refer to our API for more information.',
          ),
          !0
        );
      }),
      (o2.mapChildrenToProps = function (e4, r4) {
        var n3 = this,
          i3 = {};
        return (
          import_react.default.Children.forEach(e4, function (t3) {
            if (t3 && t3.props) {
              var e5 = t3.props,
                o3 = e5.children,
                a2 = u(e5, F),
                s2 = Object.keys(a2).reduce(function (t4, e6) {
                  return (t4[y[e6] || e6] = a2[e6]), t4;
                }, {}),
                c2 = t3.type;
              switch (
                (typeof c2 == 'symbol'
                  ? (c2 = c2.toString())
                  : n3.warnOnInvalidChildren(t3, o3),
                c2)
              ) {
                case l.FRAGMENT:
                  r4 = n3.mapChildrenToProps(o3, r4);
                  break;
                case l.LINK:
                case l.META:
                case l.NOSCRIPT:
                case l.SCRIPT:
                case l.STYLE:
                  i3 = n3.flattenArrayTypeChildren({
                    child: t3,
                    arrayTypeChildren: i3,
                    newChildProps: s2,
                    nestedChildren: o3,
                  });
                  break;
                default:
                  r4 = n3.mapObjectTypeChildren({
                    child: t3,
                    newProps: r4,
                    newChildProps: s2,
                    nestedChildren: o3,
                  });
              }
            }
          }),
          this.mapArrayTypeChildrenToProps(i3, r4)
        );
      }),
      (o2.render = function () {
        var e4 = this.props,
          r4 = e4.children,
          n3 = u(e4, G),
          i3 = a({}, n3),
          o3 = n3.helmetData;
        return (
          r4 && (i3 = this.mapChildrenToProps(r4, i3)),
          !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)),
          o3
            ? import_react.default.createElement(
                z,
                a({}, i3, { context: o3.value, helmetData: void 0 }),
              )
            : import_react.default.createElement(
                R.Consumer,
                null,
                function (e5) {
                  return import_react.default.createElement(
                    z,
                    a({}, i3, { context: e5 }),
                  );
                },
              )
        );
      }),
      r3
    );
  })(import_react.Component);
(W.propTypes = {
  base: import_prop_types.default.object,
  bodyAttributes: import_prop_types.default.object,
  children: import_prop_types.default.oneOfType([
    import_prop_types.default.arrayOf(import_prop_types.default.node),
    import_prop_types.default.node,
  ]),
  defaultTitle: import_prop_types.default.string,
  defer: import_prop_types.default.bool,
  encodeSpecialCharacters: import_prop_types.default.bool,
  htmlAttributes: import_prop_types.default.object,
  link: import_prop_types.default.arrayOf(import_prop_types.default.object),
  meta: import_prop_types.default.arrayOf(import_prop_types.default.object),
  noscript: import_prop_types.default.arrayOf(import_prop_types.default.object),
  onChangeClientState: import_prop_types.default.func,
  script: import_prop_types.default.arrayOf(import_prop_types.default.object),
  style: import_prop_types.default.arrayOf(import_prop_types.default.object),
  title: import_prop_types.default.string,
  titleAttributes: import_prop_types.default.object,
  titleTemplate: import_prop_types.default.string,
  prioritizeSeoTags: import_prop_types.default.bool,
  helmetData: import_prop_types.default.object,
}),
  (W.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1,
  }),
  (W.displayName = 'Helmet');
var import_react53 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var StorybookLogoStyled = newStyled(StorybookLogo)(({ theme }) => ({
    width: 'auto',
    height: '22px !important',
    display: 'block',
    color:
      theme.base === 'light' ? theme.color.defaultText : theme.color.lightest,
  })),
  Img = newStyled.img({
    display: 'block',
    maxWidth: '150px',
    maxHeight: '100px',
  }),
  LogoLink = newStyled.a(({ theme }) => ({
    display: 'inline-block',
    height: '100%',
    margin: '-3px -4px',
    padding: '2px 3px',
    border: '1px solid transparent',
    borderRadius: 3,
    color: 'inherit',
    textDecoration: 'none',
    '&:focus': { outline: 0, borderColor: theme.color.secondary },
  })),
  Brand = withTheme(({ theme }) => {
    let { title = 'Storybook', url = './', image, target } = theme.brand,
      targetValue = target || (url === './' ? '' : '_blank');
    if (image === null)
      return title === null
        ? null
        : url
          ? import_react2.default.createElement(LogoLink, {
              href: url,
              target: targetValue,
              dangerouslySetInnerHTML: { __html: title },
            })
          : import_react2.default.createElement('div', {
              dangerouslySetInnerHTML: { __html: title },
            });
    let logo = image
      ? import_react2.default.createElement(Img, { src: image, alt: title })
      : import_react2.default.createElement(StorybookLogoStyled, {
          alt: title,
        });
    return url
      ? import_react2.default.createElement(
          LogoLink,
          { title, href: url, target: targetValue },
          logo,
        )
      : import_react2.default.createElement('div', null, logo);
  });
var import_react5 = __toESM(require_react());
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return self;
}
function _setPrototypeOf(o2, p2) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o3, p3) {
          return (o3.__proto__ = p3), o3;
        }),
    _setPrototypeOf(o2, p2)
  );
}
function _inheritsLoose(subClass, superClass) {
  (subClass.prototype = Object.create(superClass.prototype)),
    (subClass.prototype.constructor = subClass),
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o3) {
          return o3.__proto__ || Object.getPrototypeOf(o3);
        }),
    _getPrototypeOf(o2)
  );
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf('[native code]') !== -1;
  } catch {
    return typeof fn == 'function';
  }
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _construct(Parent, args, Class) {
  return (
    _isNativeReflectConstruct()
      ? (_construct = Reflect.construct.bind())
      : (_construct = function (Parent2, args2, Class2) {
          var a2 = [null];
          a2.push.apply(a2, args2);
          var Constructor = Function.bind.apply(Parent2, a2),
            instance = new Constructor();
          return (
            Class2 && _setPrototypeOf(instance, Class2.prototype), instance
          );
        }),
    _construct.apply(null, arguments)
  );
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map == 'function' ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function (Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (typeof _cache < 'u') {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper3);
      }
      function Wrapper3() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper3.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper3,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper3, Class2)
      );
    }),
    _wrapNativeSuper(Class)
  );
}
var ERRORS = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function format() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    args[_key] = arguments[_key];
  var a2 = args[0],
    b2 = [],
    c2;
  for (c2 = 1; c2 < args.length; c2 += 1) b2.push(args[c2]);
  return (
    b2.forEach(function (d2) {
      a2 = a2.replace(/%[a-z]/, d2);
    }),
    a2
  );
}
var PolishedError = (function (_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (
      var _this,
        _len2 = arguments.length,
        args = new Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1;
      _key2 < _len2;
      _key2++
    )
      args[_key2 - 1] = arguments[_key2];
    return (
      (_this =
        _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) ||
        this),
      _assertThisInitialized(_this)
    );
  }
  return PolishedError2;
})(_wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + ',' + colorToInt(green) + ',' + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if ((convert === void 0 && (convert = convertToInt), saturation === 0))
    return convert(lightness, lightness, lightness);
  var huePrime = (((hue % 360) + 360) % 360) / 60,
    chroma = (1 - Math.abs(2 * lightness - 1)) * saturation,
    secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1)),
    red = 0,
    green = 0,
    blue = 0;
  huePrime >= 0 && huePrime < 1
    ? ((red = chroma), (green = secondComponent))
    : huePrime >= 1 && huePrime < 2
      ? ((red = secondComponent), (green = chroma))
      : huePrime >= 2 && huePrime < 3
        ? ((green = chroma), (blue = secondComponent))
        : huePrime >= 3 && huePrime < 4
          ? ((green = secondComponent), (blue = chroma))
          : huePrime >= 4 && huePrime < 5
            ? ((red = secondComponent), (blue = chroma))
            : huePrime >= 5 &&
              huePrime < 6 &&
              ((red = chroma), (blue = secondComponent));
  var lightnessModification = lightness - chroma / 2,
    finalRed = red + lightnessModification,
    finalGreen = green + lightnessModification,
    finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function nameToHex(color) {
  if (typeof color != 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName]
    ? '#' + namedColorMap[normalizedColorName]
    : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/,
  hexRgbaRegex = /^#[a-fA-F0-9]{8}$/,
  reducedHexRegex = /^#[a-fA-F0-9]{3}$/,
  reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/,
  rgbRegex =
    /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rgbaRegex =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hslRegex =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  hslaRegex =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color != 'string') throw new PolishedError(3);
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex))
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
    };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat(
      (
        parseInt('' + normalizedColor[7] + normalizedColor[8], 16) / 255
      ).toFixed(2),
    );
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
      alpha,
    };
  }
  if (normalizedColor.match(reducedHexRegex))
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
    };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat(
      (
        parseInt('' + normalizedColor[4] + normalizedColor[4], 16) / 255
      ).toFixed(2),
    );
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha,
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched)
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10),
    };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha:
        parseFloat('' + rgbaMatched[4]) > 1
          ? parseFloat('' + rgbaMatched[4]) / 100
          : parseFloat('' + rgbaMatched[4]),
    };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10),
      saturation = parseInt('' + hslMatched[2], 10) / 100,
      lightness = parseInt('' + hslMatched[3], 10) / 100,
      rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')',
      hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched)
      throw new PolishedError(4, normalizedColor, rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10),
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10),
      _saturation = parseInt('' + hslaMatched[2], 10) / 100,
      _lightness = parseInt('' + hslaMatched[3], 10) / 100,
      _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')',
      _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched)
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha:
        parseFloat('' + hslaMatched[4]) > 1
          ? parseFloat('' + hslaMatched[4]) / 100
          : parseFloat('' + hslaMatched[4]),
    };
  }
  throw new PolishedError(5);
}
var reduceHexValue = function (value) {
    return value.length === 7 &&
      value[1] === value[2] &&
      value[3] === value[4] &&
      value[5] === value[6]
      ? '#' + value[1] + value[3] + value[5]
      : value;
  },
  reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
function rgb(value, green, blue) {
  if (
    typeof value == 'number' &&
    typeof green == 'number' &&
    typeof blue == 'number'
  )
    return reduceHexValue$1(
      '#' + numberToHex(value) + numberToHex(green) + numberToHex(blue),
    );
  if (typeof value == 'object' && green === void 0 && blue === void 0)
    return reduceHexValue$1(
      '#' +
        numberToHex(value.red) +
        numberToHex(value.green) +
        numberToHex(value.blue),
    );
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == 'string' && typeof secondValue == 'number') {
    var rgbValue = parseToRgb(firstValue);
    return (
      'rgba(' +
      rgbValue.red +
      ',' +
      rgbValue.green +
      ',' +
      rgbValue.blue +
      ',' +
      secondValue +
      ')'
    );
  } else {
    if (
      typeof firstValue == 'number' &&
      typeof secondValue == 'number' &&
      typeof thirdValue == 'number' &&
      typeof fourthValue == 'number'
    )
      return fourthValue >= 1
        ? rgb(firstValue, secondValue, thirdValue)
        : 'rgba(' +
            firstValue +
            ',' +
            secondValue +
            ',' +
            thirdValue +
            ',' +
            fourthValue +
            ')';
    if (
      typeof firstValue == 'object' &&
      secondValue === void 0 &&
      thirdValue === void 0 &&
      fourthValue === void 0
    )
      return firstValue.alpha >= 1
        ? rgb(firstValue.red, firstValue.green, firstValue.blue)
        : 'rgba(' +
            firstValue.red +
            ',' +
            firstValue.green +
            ',' +
            firstValue.blue +
            ',' +
            firstValue.alpha +
            ')';
  }
  throw new PolishedError(7);
}
function curried(f2, length, acc) {
  return function () {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length
      ? f2.apply(this, combined)
      : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color),
    alpha = typeof parsedColor.alpha == 'number' ? parsedColor.alpha : 1,
    colorWithAlpha = _extends({}, parsedColor, {
      alpha: guard(
        0,
        1,
        +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100,
      ),
    });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize),
  curriedTransparentize$1 = curriedTransparentize;
var import_react4 = __toESM(require_react());
var import_react3 = __toESM(require_react());
function useMediaQuery(query) {
  let getMatches = (queryMatch) =>
      typeof window < 'u' ? window.matchMedia(queryMatch).matches : !1,
    [matches, setMatches] = (0, import_react3.useState)(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  return (
    (0, import_react3.useEffect)(() => {
      let matchMedia = window.matchMedia(query);
      return (
        handleChange(),
        matchMedia.addEventListener('change', handleChange),
        () => {
          matchMedia.removeEventListener('change', handleChange);
        }
      );
    }, [query]),
    matches
  );
}
var MEDIA_DESKTOP_BREAKPOINT = '@media (min-width: 600px)';
var LayoutContext = (0, import_react4.createContext)({
    isMobileMenuOpen: !1,
    setMobileMenuOpen: () => {},
    isMobileAboutOpen: !1,
    setMobileAboutOpen: () => {},
    isMobilePanelOpen: !1,
    setMobilePanelOpen: () => {},
    isDesktop: !1,
    isMobile: !1,
  }),
  LayoutProvider = ({ children }) => {
    let [isMobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(!1),
      [isMobileAboutOpen, setMobileAboutOpen] = (0, import_react4.useState)(!1),
      [isMobilePanelOpen, setMobilePanelOpen] = (0, import_react4.useState)(!1),
      isDesktop = useMediaQuery(`(min-width: ${600}px)`),
      isMobile = !isDesktop,
      contextValue = (0, import_react4.useMemo)(
        () => ({
          isMobileMenuOpen,
          setMobileMenuOpen,
          isMobileAboutOpen,
          setMobileAboutOpen,
          isMobilePanelOpen,
          setMobilePanelOpen,
          isDesktop,
          isMobile,
        }),
        [
          isMobileMenuOpen,
          setMobileMenuOpen,
          isMobileAboutOpen,
          setMobileAboutOpen,
          isMobilePanelOpen,
          setMobilePanelOpen,
          isDesktop,
          isMobile,
        ],
      );
    return import_react4.default.createElement(
      LayoutContext.Provider,
      { value: contextValue },
      children,
    );
  },
  useLayout = () => (0, import_react4.useContext)(LayoutContext);
var SidebarIconButton = newStyled(IconButton)(({ highlighted, theme }) => ({
    position: 'relative',
    overflow: 'visible',
    marginTop: 0,
    zIndex: 1,
    ...(highlighted && {
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: 6,
        right: 6,
        width: 5,
        height: 5,
        zIndex: 2,
        borderRadius: '50%',
        background: theme.background.app,
        border: `1px solid ${theme.background.app}`,
        boxShadow: `0 0 0 2px ${theme.background.app}`,
      },
      '&:after': {
        background: theme.color.positive,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: `0 0 0 2px ${theme.background.app}`,
      },
      '&:hover:after, &:focus-visible:after': {
        boxShadow: `0 0 0 2px ${curriedTransparentize$1(0.88, theme.color.secondary)}`,
      },
    }),
  })),
  MenuButtonGroup = newStyled.div({ display: 'flex', gap: 4 }),
  SidebarMenuList = ({ menu, onHide }) => {
    let links = (0, import_react5.useMemo)(
      () =>
        menu.map(({ onClick, ...rest }) => ({
          ...rest,
          onClick: (event, item) => {
            onClick && onClick(event, item), onHide();
          },
        })),
      [menu, onHide],
    );
    return import_react5.default.createElement(TooltipLinkList, { links });
  },
  SidebarMenu = ({ menu, isHighlighted, onClick }) => {
    let [isTooltipVisible, setIsTooltipVisible] = (0, import_react5.useState)(
        !1,
      ),
      { isMobile, setMobileMenuOpen } = useLayout();
    return isMobile
      ? import_react5.default.createElement(
          MenuButtonGroup,
          null,
          import_react5.default.createElement(
            SidebarIconButton,
            {
              title: 'About Storybook',
              'aria-label': 'About Storybook',
              highlighted: isHighlighted,
              active: !1,
              onClick,
            },
            import_react5.default.createElement(CogIcon, null),
          ),
          import_react5.default.createElement(
            IconButton,
            {
              title: 'Close menu',
              'aria-label': 'Close menu',
              onClick: () => setMobileMenuOpen(!1),
            },
            import_react5.default.createElement(CloseIcon, null),
          ),
        )
      : import_react5.default.createElement(
          WithTooltip,
          {
            placement: 'top',
            closeOnOutsideClick: !0,
            tooltip: ({ onHide }) =>
              import_react5.default.createElement(SidebarMenuList, {
                onHide,
                menu,
              }),
            onVisibleChange: setIsTooltipVisible,
          },
          import_react5.default.createElement(
            SidebarIconButton,
            {
              title: 'Shortcuts',
              'aria-label': 'Shortcuts',
              highlighted: isHighlighted,
              active: isTooltipVisible,
            },
            import_react5.default.createElement(CogIcon, null),
          ),
        );
  };
var BrandArea = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    fontWeight: theme.typography.weight.bold,
    color: theme.color.defaultText,
    marginRight: 20,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    minHeight: 22,
    '& > * > *': { maxWidth: '100%' },
    '& > *': {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      flex: '1 1 auto',
    },
  })),
  HeadingWrapper = newStyled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: 42,
    paddingLeft: 8,
  }),
  SkipToCanvasLink = newStyled(Button)(({ theme }) => ({
    display: 'none',
    '@media (min-width: 600px)': {
      display: 'block',
      position: 'absolute',
      fontSize: theme.typography.size.s1,
      zIndex: 3,
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
      opacity: 0,
      transition: 'opacity 150ms ease-out',
      '&:focus': {
        width: '100%',
        height: 'inherit',
        padding: '10px 15px',
        margin: 0,
        clip: 'unset',
        overflow: 'unset',
        opacity: 1,
      },
    },
  })),
  Heading = ({
    menuHighlighted = !1,
    menu,
    skipLinkHref,
    extra,
    isLoading,
    onMenuClick,
    ...props
  }) =>
    import_react6.default.createElement(
      HeadingWrapper,
      { ...props },
      skipLinkHref &&
        import_react6.default.createElement(
          SkipToCanvasLink,
          { asChild: !0 },
          import_react6.default.createElement(
            'a',
            { href: skipLinkHref, tabIndex: 0 },
            'Skip to canvas',
          ),
        ),
      import_react6.default.createElement(
        BrandArea,
        null,
        import_react6.default.createElement(Brand, null),
      ),
      isLoading
        ? null
        : extra.map(({ id, render: Render }) =>
            import_react6.default.createElement(Render, { key: id }),
          ),
      import_react6.default.createElement(SidebarMenu, {
        menu,
        isHighlighted: menuHighlighted,
        onClick: onMenuClick,
      }),
    );
var import_react19 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var LOADER_SEQUENCE = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3],
  Loadingitem = newStyled.div(
    {
      cursor: 'progress',
      fontSize: 13,
      height: '16px',
      marginTop: 4,
      marginBottom: 4,
      alignItems: 'center',
      overflow: 'hidden',
    },
    ({ depth = 0 }) => ({ marginLeft: depth * 15, maxWidth: 85 - depth * 5 }),
    ({ theme }) => theme.animation.inlineGlow,
    ({ theme }) => ({ background: theme.appBorderColor }),
  ),
  Contained = newStyled.div({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  }),
  Loader2 = ({ size }) => {
    let repeats = Math.ceil(size / LOADER_SEQUENCE.length),
      sequence = Array.from(Array(repeats))
        .fill(LOADER_SEQUENCE)
        .flat()
        .slice(0, size);
    return import_react7.default.createElement(
      import_react7.Fragment,
      null,
      sequence.map((depth, index) =>
        import_react7.default.createElement(Loadingitem, { depth, key: index }),
      ),
    );
  };
var { window: globalWindow } = scope,
  TextStyle = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    lineHeight: '20px',
    margin: 0,
  })),
  Text = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    lineHeight: '20px',
    margin: 0,
    code: { fontSize: theme.typography.size.s1 },
    ul: { paddingLeft: 20, marginTop: 8, marginBottom: 8 },
  })),
  ErrorDisplay = newStyled.pre(
    {
      width: 420,
      boxSizing: 'border-box',
      borderRadius: 8,
      overflow: 'auto',
      whiteSpace: 'pre',
    },
    ({ theme }) => ({ color: theme.color.dark }),
  ),
  AuthBlock = ({ loginUrl, id }) => {
    let [isAuthAttempted, setAuthAttempted] = (0, import_react8.useState)(!1),
      refresh = (0, import_react8.useCallback)(() => {
        globalWindow.document.location.reload();
      }, []),
      open = (0, import_react8.useCallback)((e3) => {
        e3.preventDefault();
        let childWindow = globalWindow.open(
            loginUrl,
            `storybook_auth_${id}`,
            'resizable,scrollbars',
          ),
          timer = setInterval(() => {
            childWindow
              ? childWindow.closed &&
                (clearInterval(timer), setAuthAttempted(!0))
              : (logger.error('unable to access loginUrl window'),
                clearInterval(timer));
          }, 1e3);
      }, []);
    return import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        Spaced,
        null,
        isAuthAttempted
          ? import_react8.default.createElement(
              import_react8.Fragment,
              null,
              import_react8.default.createElement(
                Text,
                null,
                'Authentication on ',
                import_react8.default.createElement('strong', null, loginUrl),
                ' concluded. Refresh the page to fetch this Storybook.',
              ),
              import_react8.default.createElement(
                'div',
                null,
                import_react8.default.createElement(
                  Button,
                  { small: !0, gray: !0, onClick: refresh },
                  import_react8.default.createElement(SyncIcon, null),
                  'Refresh now',
                ),
              ),
            )
          : import_react8.default.createElement(
              import_react8.Fragment,
              null,
              import_react8.default.createElement(
                Text,
                null,
                'Sign in to browse this Storybook.',
              ),
              import_react8.default.createElement(
                'div',
                null,
                import_react8.default.createElement(
                  Button,
                  { small: !0, gray: !0, onClick: open },
                  import_react8.default.createElement(LockIcon, null),
                  'Sign in',
                ),
              ),
            ),
      ),
    );
  },
  ErrorBlock = ({ error }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        Spaced,
        null,
        import_react8.default.createElement(
          TextStyle,
          null,
          'Oh no! Something went wrong loading this Storybook.',
          import_react8.default.createElement('br', null),
          import_react8.default.createElement(
            WithTooltip,
            {
              tooltip: import_react8.default.createElement(
                ErrorDisplay,
                null,
                import_react8.default.createElement(ErrorFormatter, { error }),
              ),
            },
            import_react8.default.createElement(
              Link22,
              { isButton: !0 },
              'View error ',
              import_react8.default.createElement(ChevronDownIcon, null),
            ),
          ),
          ' ',
          import_react8.default.createElement(
            Link22,
            {
              withArrow: !0,
              href: 'https://storybook.js.org/docs',
              cancel: !1,
              target: '_blank',
            },
            'View docs',
          ),
        ),
      ),
    ),
  FlexSpaced = newStyled(Spaced)({ display: 'flex' }),
  WideSpaced = newStyled(Spaced)({ flex: 1 }),
  EmptyBlock = ({ isMain }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        FlexSpaced,
        { col: 1 },
        import_react8.default.createElement(
          WideSpaced,
          null,
          import_react8.default.createElement(
            Text,
            null,
            isMain
              ? import_react8.default.createElement(
                  import_react8.default.Fragment,
                  null,
                  'Oh no! Your Storybook is empty. Possible reasons why:',
                  import_react8.default.createElement(
                    'ul',
                    null,
                    import_react8.default.createElement(
                      'li',
                      null,
                      'The glob specified in ',
                      import_react8.default.createElement(
                        'code',
                        null,
                        'main.js',
                      ),
                      " isn't correct.",
                    ),
                    import_react8.default.createElement(
                      'li',
                      null,
                      'No stories are defined in your story files.',
                    ),
                    import_react8.default.createElement(
                      'li',
                      null,
                      "You're using filter-functions, and all stories are filtered away.",
                    ),
                  ),
                  ' ',
                )
              : import_react8.default.createElement(
                  import_react8.default.Fragment,
                  null,
                  "This composed storybook is empty, maybe you're using filter-functions, and all stories are filtered away.",
                ),
          ),
        ),
      ),
    ),
  LoaderBlock = ({ isMain }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(Loader2, { size: isMain ? 17 : 5 }),
    );
var import_react9 = __toESM(require_react());
var { document: document2, window: globalWindow2 } = scope,
  IndicatorPlacement = newStyled.aside(({ theme }) => ({
    height: 16,
    display: 'flex',
    alignItems: 'center',
    '& > * + *': { marginLeft: theme.layoutMargin },
  })),
  IndicatorClickTarget = newStyled.button(({ theme }) => ({
    height: 20,
    width: 20,
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    outline: 'none',
    border: '1px solid transparent',
    borderRadius: '100%',
    cursor: 'pointer',
    color:
      theme.base === 'light'
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    '&:hover': { color: theme.barSelectedColor },
    '&:focus': {
      color: theme.barSelectedColor,
      borderColor: theme.color.secondary,
    },
    svg: {
      height: 10,
      width: 10,
      transition: 'all 150ms ease-out',
      color: 'inherit',
    },
  })),
  MessageTitle = newStyled.span(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
  })),
  Message = newStyled.a(({ theme }) => ({
    textDecoration: 'none',
    lineHeight: '16px',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: theme.color.defaultText,
    '&:not(:last-child)': { borderBottom: `1px solid ${theme.appBorderColor}` },
    '&:hover': {
      background: theme.background.hoverable,
      color: theme.color.darker,
    },
    '&:link': { color: theme.color.darker },
    '&:active': { color: theme.color.darker },
    '&:focus': { color: theme.color.darker },
    '& > *': { flex: 1 },
    '& > svg': {
      marginTop: 3,
      width: 16,
      height: 16,
      marginRight: 10,
      flex: 'unset',
    },
  })),
  MessageWrapper = newStyled.div({
    width: 280,
    boxSizing: 'border-box',
    borderRadius: 8,
    overflow: 'hidden',
  }),
  Version = newStyled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.size.s1,
    fontWeight: theme.typography.weight.regular,
    color:
      theme.base === 'light'
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    '& > * + *': { marginLeft: 4 },
    svg: { height: 10, width: 10 },
  })),
  CurrentVersion = ({ url, versions }) => {
    let currentVersionId = (0, import_react9.useMemo)(() => {
      let c2 = Object.entries(versions).find(([k2, v2]) => v2 === url);
      return c2 && c2[0] ? c2[0] : 'current';
    }, [url, versions]);
    return import_react9.default.createElement(
      Version,
      null,
      import_react9.default.createElement('span', null, currentVersionId),
      import_react9.default.createElement(ChevronDownIcon, null),
    );
  },
  RefIndicator = import_react9.default.memo(
    (0, import_react9.forwardRef)(({ state, ...ref }, forwardedRef) => {
      let api = useStorybookApi(),
        list = (0, import_react9.useMemo)(
          () => Object.values(ref.index || {}),
          [ref.index],
        ),
        componentCount = (0, import_react9.useMemo)(
          () => list.filter((v2) => v2.type === 'component').length,
          [list],
        ),
        leafCount = (0, import_react9.useMemo)(
          () =>
            list.filter((v2) => v2.type === 'docs' || v2.type === 'story')
              .length,
          [list],
        );
      return import_react9.default.createElement(
        IndicatorPlacement,
        { ref: forwardedRef },
        import_react9.default.createElement(
          WithTooltip,
          {
            placement: 'bottom-start',
            trigger: 'click',
            closeOnOutsideClick: !0,
            tooltip: import_react9.default.createElement(
              MessageWrapper,
              null,
              import_react9.default.createElement(
                Spaced,
                { row: 0 },
                state === 'loading' &&
                  import_react9.default.createElement(LoadingMessage, {
                    url: ref.url,
                  }),
                (state === 'error' || state === 'empty') &&
                  import_react9.default.createElement(ErrorOccurredMessage, {
                    url: ref.url,
                  }),
                state === 'ready' &&
                  import_react9.default.createElement(ReadyMessage, {
                    url: ref.url,
                    componentCount,
                    leafCount,
                  }),
                state === 'auth' &&
                  import_react9.default.createElement(LoginRequiredMessage, {
                    ...ref,
                  }),
                ref.type === 'auto-inject' &&
                  state !== 'error' &&
                  import_react9.default.createElement(
                    PerformanceDegradedMessage,
                    null,
                  ),
                state !== 'loading' &&
                  import_react9.default.createElement(ReadDocsMessage, null),
              ),
            ),
          },
          import_react9.default.createElement(
            IndicatorClickTarget,
            {
              'data-action': 'toggle-indicator',
              'aria-label': 'toggle indicator',
            },
            import_react9.default.createElement(GlobeIcon, null),
          ),
        ),
        ref.versions && Object.keys(ref.versions).length
          ? import_react9.default.createElement(
              WithTooltip,
              {
                placement: 'bottom-start',
                trigger: 'click',
                closeOnOutsideClick: !0,
                tooltip: (tooltip) =>
                  import_react9.default.createElement(TooltipLinkList, {
                    links: Object.entries(ref.versions).map(([id, href]) => ({
                      icon: href === ref.url ? 'check' : void 0,
                      id,
                      title: id,
                      href,
                      onClick: (event, item) => {
                        event.preventDefault(),
                          api.changeRefVersion(ref.id, item.href),
                          tooltip.onHide();
                      },
                    })),
                  }),
              },
              import_react9.default.createElement(CurrentVersion, {
                url: ref.url,
                versions: ref.versions,
              }),
            )
          : null,
      );
    }),
  ),
  ReadyMessage = ({ url, componentCount, leafCount }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, '/index.html'), target: '_blank' },
      import_react9.default.createElement(GlobeIcon, {
        color: theme.color.secondary,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          'View external Storybook',
        ),
        import_react9.default.createElement(
          'div',
          null,
          'Explore ',
          componentCount,
          ' components and ',
          leafCount,
          ' stories in a new browser tab.',
        ),
      ),
    );
  },
  LoginRequiredMessage = ({ loginUrl, id }) => {
    let theme = useTheme(),
      open = (0, import_react9.useCallback)((e3) => {
        e3.preventDefault();
        let childWindow = globalWindow2.open(
            loginUrl,
            `storybook_auth_${id}`,
            'resizable,scrollbars',
          ),
          timer = setInterval(() => {
            childWindow
              ? childWindow.closed &&
                (clearInterval(timer), document2.location.reload())
              : clearInterval(timer);
          }, 1e3);
      }, []);
    return import_react9.default.createElement(
      Message,
      { onClick: open },
      import_react9.default.createElement(LockIcon, {
        color: theme.color.gold,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          'Log in required',
        ),
        import_react9.default.createElement(
          'div',
          null,
          "You need to authenticate to view this Storybook's components.",
        ),
      ),
    );
  },
  ReadDocsMessage = () => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      {
        href: 'https://storybook.js.org/docs/react/sharing/storybook-composition',
        target: '_blank',
      },
      import_react9.default.createElement(DocumentIcon, {
        color: theme.color.green,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          'Read Composition docs',
        ),
        import_react9.default.createElement(
          'div',
          null,
          'Learn how to combine multiple Storybooks into one.',
        ),
      ),
    );
  },
  ErrorOccurredMessage = ({ url }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, '/index.html'), target: '_blank' },
      import_react9.default.createElement(AlertIcon, {
        color: theme.color.negative,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          'Something went wrong',
        ),
        import_react9.default.createElement(
          'div',
          null,
          "This external Storybook didn't load. Debug it in a new tab now.",
        ),
      ),
    );
  },
  LoadingMessage = ({ url }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, '/index.html'), target: '_blank' },
      import_react9.default.createElement(TimeIcon, {
        color: theme.color.secondary,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(MessageTitle, null, 'Please wait'),
        import_react9.default.createElement(
          'div',
          null,
          'This Storybook is loading.',
        ),
      ),
    );
  },
  PerformanceDegradedMessage = () => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      {
        href: 'https://storybook.js.org/docs/react/sharing/storybook-composition#improve-your-storybook-composition',
        target: '_blank',
      },
      import_react9.default.createElement(LightningIcon, {
        color: theme.color.gold,
      }),
      import_react9.default.createElement(
        'div',
        null,
        import_react9.default.createElement(MessageTitle, null, 'Reduce lag'),
        import_react9.default.createElement(
          'div',
          null,
          'Learn how to speed up Composition performance.',
        ),
      ),
    );
  };
var import_react15 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react10 = __toESM(require_react()),
  Svg = newStyled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`,
  GROUP_ID = 'icon--group',
  COMPONENT_ID = 'icon--component',
  DOCUMENT_ID = 'icon--document',
  STORY_ID = 'icon--story',
  IconSymbols = () =>
    import_react10.default.createElement(
      Svg,
      { 'data-chromatic': 'ignore' },
      import_react10.default.createElement(
        'symbol',
        { id: GROUP_ID },
        import_react10.default.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z',
          fill: 'currentColor',
        }),
      ),
      import_react10.default.createElement(
        'symbol',
        { id: COMPONENT_ID },
        import_react10.default.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z',
          fill: 'currentColor',
        }),
      ),
      import_react10.default.createElement(
        'symbol',
        { id: DOCUMENT_ID },
        import_react10.default.createElement('path', {
          d: 'M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z',
          fill: 'currentColor',
        }),
        import_react10.default.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z',
          fill: 'currentColor',
        }),
      ),
      import_react10.default.createElement(
        'symbol',
        { id: STORY_ID },
        import_react10.default.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z',
          fill: 'currentColor',
        }),
      ),
    ),
  UseSymbol = ({ type }) =>
    type === 'group'
      ? import_react10.default.createElement('use', {
          xlinkHref: `#${GROUP_ID}`,
        })
      : type === 'component'
        ? import_react10.default.createElement('use', {
            xlinkHref: `#${COMPONENT_ID}`,
          })
        : type === 'document'
          ? import_react10.default.createElement('use', {
              xlinkHref: `#${DOCUMENT_ID}`,
            })
          : type === 'story'
            ? import_react10.default.createElement('use', {
                xlinkHref: `#${STORY_ID}`,
              })
            : null;
var import_react11 = __toESM(require_react());
var CollapseIconWrapper = newStyled.div(({ theme, isExpanded }) => ({
    width: 8,
    height: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: curriedTransparentize$1(0.4, theme.textMutedColor),
    transform: isExpanded ? 'rotateZ(90deg)' : 'none',
    transition: 'transform .1s ease-out',
  })),
  CollapseIcon2 = ({ isExpanded }) =>
    import_react11.default.createElement(
      CollapseIconWrapper,
      { isExpanded },
      import_react11.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '8',
          height: '8',
          fill: 'none',
        },
        import_react11.default.createElement('path', {
          fill: '#73828C',
          fillRule: 'evenodd',
          d: 'M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z',
          clipRule: 'evenodd',
        }),
      ),
    );
var TypeIcon = newStyled.svg(({ theme, type }) => ({
    width: 14,
    height: 14,
    flex: '0 0 auto',
    color:
      type === 'group'
        ? theme.base === 'dark'
          ? theme.color.primary
          : theme.color.ultraviolet
        : type === 'component'
          ? theme.color.secondary
          : type === 'document'
            ? theme.base === 'dark'
              ? theme.color.gold
              : '#ff8300'
            : type === 'story'
              ? theme.color.seafoam
              : 'currentColor',
  })),
  BranchNode = newStyled.button(({ theme, depth = 0, isExpandable = !1 }) => ({
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'start',
    textAlign: 'left',
    paddingLeft: `${(isExpandable ? 8 : 22) + depth * 18}px`,
    color: 'inherit',
    fontSize: `${theme.typography.size.s2}px`,
    background: 'transparent',
    minHeight: 28,
    borderRadius: 4,
    gap: 6,
    paddingTop: 5,
    paddingBottom: 4,
    '&:hover, &:focus': {
      background: curriedTransparentize$1(0.93, theme.color.secondary),
      outline: 'none',
    },
  })),
  LeafNode = newStyled.a(({ theme, depth = 0 }) => ({
    cursor: 'pointer',
    color: 'inherit',
    display: 'flex',
    gap: 6,
    flex: 1,
    alignItems: 'start',
    paddingLeft: `${22 + depth * 18}px`,
    paddingTop: 5,
    paddingBottom: 4,
    fontSize: `${theme.typography.size.s2}px`,
    textDecoration: 'none',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  })),
  RootNode = newStyled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 4,
    fontSize: `${theme.typography.size.s1 - 1}px`,
    fontWeight: theme.typography.weight.bold,
    lineHeight: '16px',
    minHeight: 28,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: theme.textMutedColor,
  })),
  Wrapper = newStyled.div({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  }),
  GroupNode = import_react12.default.memo(function ({
    children,
    isExpanded = !1,
    isExpandable = !1,
    ...props
  }) {
    return import_react12.default.createElement(
      BranchNode,
      { isExpandable, tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        isExpandable &&
          import_react12.default.createElement(CollapseIcon2, { isExpanded }),
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: '0 0 14 14', width: '14', height: '14', type: 'group' },
          import_react12.default.createElement(UseSymbol, { type: 'group' }),
        ),
      ),
      children,
    );
  }),
  ComponentNode = import_react12.default.memo(function ({
    theme,
    children,
    isExpanded,
    isExpandable,
    isSelected,
    ...props
  }) {
    return import_react12.default.createElement(
      BranchNode,
      { isExpandable, tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        isExpandable &&
          import_react12.default.createElement(CollapseIcon2, { isExpanded }),
        import_react12.default.createElement(
          TypeIcon,
          {
            viewBox: '0 0 14 14',
            width: '12',
            height: '12',
            type: 'component',
          },
          import_react12.default.createElement(UseSymbol, {
            type: 'component',
          }),
        ),
      ),
      children,
    );
  }),
  DocumentNode = import_react12.default.memo(function ({
    theme,
    children,
    docsMode,
    ...props
  }) {
    return import_react12.default.createElement(
      LeafNode,
      { tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: '0 0 14 14', width: '12', height: '12', type: 'document' },
          import_react12.default.createElement(UseSymbol, { type: 'document' }),
        ),
      ),
      children,
    );
  }),
  StoryNode = import_react12.default.memo(function ({
    theme,
    children,
    ...props
  }) {
    return import_react12.default.createElement(
      LeafNode,
      { tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: '0 0 14 14', width: '12', height: '12', type: 'story' },
          import_react12.default.createElement(UseSymbol, { type: 'story' }),
        ),
      ),
      children,
    );
  });
var import_throttle = __toESM(require_throttle()),
  import_react13 = __toESM(require_react());
var codeToKeyMap = {
    Space: ' ',
    Slash: '/',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    ArrowDown: 'ArrowDown',
    Escape: 'Escape',
    Enter: 'Enter',
  },
  allFalse = { alt: !1, ctrl: !1, meta: !1, shift: !1 },
  matchesModifiers = (modifiers, event) => {
    let { alt, ctrl, meta, shift } = modifiers === !1 ? allFalse : modifiers;
    return !(
      (typeof alt == 'boolean' && alt !== event.altKey) ||
      (typeof ctrl == 'boolean' && ctrl !== event.ctrlKey) ||
      (typeof meta == 'boolean' && meta !== event.metaKey) ||
      (typeof shift == 'boolean' && shift !== event.shiftKey)
    );
  },
  matchesKeyCode = (code, event) =>
    event.code ? event.code === code : event.key === codeToKeyMap[code];
var import_memoizerific = __toESM(require_memoizerific());
var { document: document3, window: globalWindow3 } = scope,
  createId = (itemId, refId) =>
    !refId || refId === DEFAULT_REF_ID ? itemId : `${refId}_${itemId}`,
  getLink = (item, refId) =>
    `${document3.location.pathname}?path=/${item.type}/${createId(item.id, refId)}`;
var get = (0, import_memoizerific.default)(1e3)((id, dataset) => dataset[id]),
  getParent = (0, import_memoizerific.default)(1e3)((id, dataset) => {
    let item = get(id, dataset);
    return item && item.type !== 'root' ? get(item.parent, dataset) : void 0;
  }),
  getParents = (0, import_memoizerific.default)(1e3)((id, dataset) => {
    let parent = getParent(id, dataset);
    return parent ? [parent, ...getParents(parent.id, dataset)] : [];
  }),
  getAncestorIds = (0, import_memoizerific.default)(1e3)((data, id) =>
    getParents(id, data).map((item) => item.id),
  ),
  getDescendantIds = (0, import_memoizerific.default)(1e3)(
    (data, id, skipLeafs) => {
      let entry = data[id];
      return (
        entry.type === 'story' || entry.type === 'docs' ? [] : entry.children
      ).reduce((acc, childId) => {
        let child = data[childId];
        return (
          !child ||
            (skipLeafs && (child.type === 'story' || child.type === 'docs')) ||
            acc.push(childId, ...getDescendantIds(data, childId, skipLeafs)),
          acc
        );
      }, []);
    },
  );
function getPath(item, ref) {
  let parent =
    item.type !== 'root' && item.parent ? ref.index[item.parent] : null;
  return parent
    ? [...getPath(parent, ref), parent.name]
    : ref.id === DEFAULT_REF_ID
      ? []
      : [ref.title || ref.id];
}
var searchItem = (item, ref) => ({
  ...item,
  refId: ref.id,
  path: getPath(item, ref),
});
function cycle(array, index, delta) {
  let next = index + (delta % array.length);
  return (
    next < 0 && (next = array.length + next),
    next >= array.length && (next -= array.length),
    next
  );
}
var scrollIntoView = (element, center = !1) => {
    if (!element) return;
    let { top, bottom } = element.getBoundingClientRect();
    (top >= 0 &&
      bottom <=
        (globalWindow3.innerHeight ||
          document3.documentElement.clientHeight)) ||
      element.scrollIntoView({ block: center ? 'center' : 'nearest' });
  },
  getStateType = (isLoading, isAuthRequired, isError, isEmpty) => {
    switch (!0) {
      case isAuthRequired:
        return 'auth';
      case isError:
        return 'error';
      case isLoading:
        return 'loading';
      case isEmpty:
        return 'empty';
      default:
        return 'ready';
    }
  },
  isAncestor = (element, maybeAncestor) =>
    !element || !maybeAncestor
      ? !1
      : element === maybeAncestor
        ? !0
        : isAncestor(element.parentElement, maybeAncestor),
  removeNoiseFromName = (storyName) => storyName.replaceAll(/(\s|-|_)/gi, ''),
  isStoryHoistable = (storyName, componentName) =>
    removeNoiseFromName(storyName) === removeNoiseFromName(componentName);
var { document: document4 } = scope,
  initializeExpanded = ({
    refId,
    data,
    initialExpanded,
    highlightedRef,
    rootIds,
  }) => {
    let highlightedAncestors =
      highlightedRef.current?.refId === refId
        ? getAncestorIds(data, highlightedRef.current?.itemId)
        : [];
    return [...rootIds, ...highlightedAncestors].reduce(
      (acc, id) =>
        Object.assign(acc, {
          [id]: id in initialExpanded ? initialExpanded[id] : !0,
        }),
      {},
    );
  },
  noop = () => {},
  useExpanded = ({
    containerRef,
    isBrowsing,
    refId,
    data,
    initialExpanded,
    rootIds,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId,
  }) => {
    let api = useStorybookApi(),
      [expanded, setExpanded] = (0, import_react13.useReducer)(
        (state, { ids, value }) =>
          ids.reduce((acc, id) => Object.assign(acc, { [id]: value }), {
            ...state,
          }),
        { refId, data, highlightedRef, rootIds, initialExpanded },
        initializeExpanded,
      ),
      getElementByDataItemId = (0, import_react13.useCallback)(
        (id) => containerRef.current?.querySelector(`[data-item-id="${id}"]`),
        [containerRef],
      ),
      highlightElement = (0, import_react13.useCallback)(
        (element) => {
          setHighlightedItemId(element.getAttribute('data-item-id')),
            scrollIntoView(element);
        },
        [setHighlightedItemId],
      ),
      updateExpanded = (0, import_react13.useCallback)(
        ({ ids, value }) => {
          if ((setExpanded({ ids, value }), ids.length === 1)) {
            let element = containerRef.current?.querySelector(
              `[data-item-id="${ids[0]}"][data-ref-id="${refId}"]`,
            );
            element && highlightElement(element);
          }
        },
        [containerRef, highlightElement, refId],
      );
    (0, import_react13.useEffect)(() => {
      setExpanded({ ids: getAncestorIds(data, selectedStoryId), value: !0 });
    }, [data, selectedStoryId]);
    let collapseAll = (0, import_react13.useCallback)(() => {
        let ids = Object.keys(data).filter((id) => !rootIds.includes(id));
        setExpanded({ ids, value: !1 });
      }, [data, rootIds]),
      expandAll = (0, import_react13.useCallback)(() => {
        setExpanded({ ids: Object.keys(data), value: !0 });
      }, [data]);
    return (
      (0, import_react13.useEffect)(
        () =>
          api
            ? (api.on(STORIES_COLLAPSE_ALL, collapseAll),
              api.on(STORIES_EXPAND_ALL, expandAll),
              () => {
                api.off(STORIES_COLLAPSE_ALL, collapseAll),
                  api.off(STORIES_EXPAND_ALL, expandAll);
              })
            : noop,
        [api, collapseAll, expandAll],
      ),
      (0, import_react13.useEffect)(() => {
        let menuElement = document4.getElementById('storybook-explorer-menu'),
          navigateTree = (0, import_throttle.default)((event) => {
            let highlightedItemId =
              highlightedRef.current?.refId === refId &&
              highlightedRef.current?.itemId;
            if (
              !isBrowsing ||
              !containerRef.current ||
              !highlightedItemId ||
              event.repeat ||
              !matchesModifiers(!1, event)
            )
              return;
            let isEnter = matchesKeyCode('Enter', event),
              isSpace = matchesKeyCode('Space', event),
              isArrowLeft = matchesKeyCode('ArrowLeft', event),
              isArrowRight = matchesKeyCode('ArrowRight', event);
            if (!(isEnter || isSpace || isArrowLeft || isArrowRight)) return;
            let highlightedElement = getElementByDataItemId(highlightedItemId);
            if (
              !highlightedElement ||
              highlightedElement.getAttribute('data-ref-id') !== refId
            )
              return;
            let target = event.target;
            if (
              !isAncestor(menuElement, target) &&
              !isAncestor(target, menuElement)
            )
              return;
            if (target.hasAttribute('data-action')) {
              if (isEnter || isSpace) return;
              target.blur();
            }
            let type = highlightedElement.getAttribute('data-nodetype');
            (isEnter || isSpace) &&
              ['component', 'story', 'document'].includes(type) &&
              onSelectStoryId(highlightedItemId);
            let isExpanded = highlightedElement.getAttribute('aria-expanded');
            if (isArrowLeft) {
              if (isExpanded === 'true') {
                setExpanded({ ids: [highlightedItemId], value: !1 });
                return;
              }
              let parentId = highlightedElement.getAttribute('data-parent-id'),
                parentElement = parentId && getElementByDataItemId(parentId);
              if (
                parentElement &&
                parentElement.getAttribute('data-highlightable') === 'true'
              ) {
                highlightElement(parentElement);
                return;
              }
              setExpanded({
                ids: getDescendantIds(data, highlightedItemId, !0),
                value: !1,
              });
              return;
            }
            isArrowRight &&
              (isExpanded === 'false'
                ? updateExpanded({ ids: [highlightedItemId], value: !0 })
                : isExpanded === 'true' &&
                  updateExpanded({
                    ids: getDescendantIds(data, highlightedItemId, !0),
                    value: !0,
                  }));
          }, 60);
        return (
          document4.addEventListener('keydown', navigateTree),
          () => document4.removeEventListener('keydown', navigateTree)
        );
      }, [
        containerRef,
        isBrowsing,
        refId,
        data,
        highlightedRef,
        setHighlightedItemId,
        onSelectStoryId,
      ]),
      [expanded, updateExpanded]
    );
  };
var import_react14 = __toESM(require_react());
var SmallIcons = newStyled(CircleIcon)({ '&&&': { width: 6, height: 6 } }),
  LoadingIcons = newStyled(SmallIcons)(
    ({ theme: { animation, color, base } }) => ({
      animation: `${animation.glow} 1.5s ease-in-out infinite`,
      color: base === 'light' ? color.mediumdark : color.darker,
    }),
  ),
  statusPriority = ['unknown', 'pending', 'success', 'warn', 'error'],
  statusMapping = {
    unknown: [null, null],
    pending: [
      import_react14.default.createElement(LoadingIcons, { key: 'icon' }),
      'currentColor',
    ],
    success: [
      import_react14.default.createElement(SmallIcons, {
        key: 'icon',
        style: { color: 'green' },
      }),
      'currentColor',
    ],
    warn: [
      import_react14.default.createElement(SmallIcons, {
        key: 'icon',
        style: { color: 'orange' },
      }),
      '#A15C20',
    ],
    error: [
      import_react14.default.createElement(SmallIcons, {
        key: 'icon',
        style: { color: 'red' },
      }),
      'brown',
    ],
  },
  getHighestStatus = (statuses) =>
    statusPriority.reduce(
      (acc, status) => (statuses.includes(status) ? status : acc),
      'unknown',
    );
function getGroupStatus(collapsedData, status) {
  return Object.values(collapsedData).reduce((acc, item) => {
    if (item.type === 'group' || item.type === 'component') {
      let leafs = getDescendantIds(collapsedData, item.id, !1)
          .map((id) => collapsedData[id])
          .filter((i3) => i3.type === 'story'),
        combinedStatus = getHighestStatus(
          leafs
            .flatMap((story) => Object.values(status?.[story.id] || {}))
            .map((s2) => s2.status),
        );
      combinedStatus && (acc[item.id] = combinedStatus);
    }
    return acc;
  }, {});
}
var Container = newStyled.div((props) => ({
    marginTop: props.hasOrphans ? 20 : 0,
    marginBottom: 20,
  })),
  Action = newStyled.button(({ theme, height, width }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width || 20,
    height: height || 20,
    boxSizing: 'border-box',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
    outline: 0,
    lineHeight: 'normal',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: '100%',
    cursor: 'pointer',
    transition: 'all 150ms ease-out',
    color:
      theme.base === 'light'
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    '&:hover': { color: theme.color.secondary },
    '&:focus': {
      color: theme.color.secondary,
      borderColor: theme.color.secondary,
      '&:not(:focus-visible)': { borderColor: 'transparent' },
    },
    svg: { width: 10, height: 10 },
  })),
  CollapseButton = newStyled.button(({ theme }) => ({
    all: 'unset',
    display: 'flex',
    padding: '0px 8px',
    borderRadius: 4,
    transition: 'color 150ms, box-shadow 150ms',
    gap: 6,
    alignItems: 'center',
    cursor: 'pointer',
    height: 28,
    '&:hover, &:focus': {
      outline: 'none',
      background: curriedTransparentize$1(0.93, theme.color.secondary),
    },
  })),
  LeafNodeStyleWrapper = newStyled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    color: theme.color.defaultText,
    background: 'transparent',
    minHeight: 28,
    borderRadius: 4,
    '&:hover, &:focus': {
      outline: 'none',
      background: curriedTransparentize$1(0.93, theme.color.secondary),
    },
    '&[data-selected="true"]': {
      color: theme.color.lightest,
      background: theme.color.secondary,
      fontWeight: theme.typography.weight.bold,
      '&:hover, &:focus': { background: theme.color.secondary },
      svg: { color: theme.color.lightest },
    },
    a: { color: 'currentColor' },
  })),
  SkipToContentLink = newStyled(Button)(({ theme }) => ({
    display: 'none',
    '@media (min-width: 600px)': {
      display: 'block',
      fontSize: '10px',
      overflow: 'hidden',
      width: 1,
      height: '20px',
      boxSizing: 'border-box',
      opacity: 0,
      padding: 0,
      '&:focus': {
        opacity: 1,
        padding: '5px 10px',
        background: 'white',
        color: theme.color.secondary,
        width: 'auto',
      },
    },
  })),
  Node = import_react15.default.memo(function ({
    item,
    status,
    refId,
    docsMode,
    isOrphan,
    isDisplayed,
    isSelected,
    isFullyExpanded,
    color,
    setFullyExpanded,
    isExpanded,
    setExpanded,
    onSelectStoryId,
    api,
  }) {
    let { isDesktop, isMobile, setMobileMenuOpen } = useLayout();
    if (!isDisplayed) return null;
    let id = createId(item.id, refId);
    if (item.type === 'story' || item.type === 'docs') {
      let LeafNode2 = item.type === 'docs' ? DocumentNode : StoryNode,
        statusValue = getHighestStatus(
          Object.values(status || {}).map((s2) => s2.status),
        ),
        [icon, textColor] = statusMapping[statusValue];
      return import_react15.default.createElement(
        LeafNodeStyleWrapper,
        {
          'data-selected': isSelected,
          'data-ref-id': refId,
          'data-item-id': item.id,
          'data-parent-id': item.parent,
          'data-nodetype': item.type === 'docs' ? 'document' : 'story',
          'data-highlightable': isDisplayed,
          className: 'sidebar-item',
        },
        import_react15.default.createElement(
          LeafNode2,
          {
            style: isSelected ? {} : { color: textColor },
            key: id,
            href: getLink(item, refId),
            id,
            depth: isOrphan ? item.depth : item.depth - 1,
            onClick: (event) => {
              event.preventDefault(),
                onSelectStoryId(item.id),
                isMobile && setMobileMenuOpen(!1);
            },
            ...(item.type === 'docs' && { docsMode }),
          },
          item.renderLabel?.(item) || item.name,
        ),
        isSelected &&
          import_react15.default.createElement(
            SkipToContentLink,
            { asChild: !0 },
            import_react15.default.createElement(
              'a',
              { href: '#storybook-preview-wrapper' },
              'Skip to canvas',
            ),
          ),
        icon
          ? import_react15.default.createElement(
              WithTooltip,
              {
                placement: 'top',
                style: { display: 'flex' },
                tooltip: () =>
                  import_react15.default.createElement(TooltipLinkList, {
                    links: Object.entries(status || {}).map(([k2, v2]) => ({
                      id: k2,
                      title: v2.title,
                      description: v2.description,
                      right: statusMapping[v2.status][0],
                    })),
                  }),
                closeOnOutsideClick: !0,
              },
              import_react15.default.createElement(
                Action,
                { type: 'button', height: 22 },
                icon,
              ),
            )
          : null,
      );
    }
    if (item.type === 'root')
      return import_react15.default.createElement(
        RootNode,
        {
          key: id,
          id,
          className: 'sidebar-subheading',
          'data-ref-id': refId,
          'data-item-id': item.id,
          'data-nodetype': 'root',
        },
        import_react15.default.createElement(
          CollapseButton,
          {
            type: 'button',
            'data-action': 'collapse-root',
            onClick: (event) => {
              event.preventDefault(),
                setExpanded({ ids: [item.id], value: !isExpanded });
            },
            'aria-expanded': isExpanded,
          },
          import_react15.default.createElement(CollapseIcon2, { isExpanded }),
          item.renderLabel?.(item) || item.name,
        ),
        isExpanded &&
          import_react15.default.createElement(
            IconButton,
            {
              className: 'sidebar-subheading-action',
              'aria-label': isFullyExpanded ? 'Expand' : 'Collapse',
              'data-action': 'expand-all',
              'data-expanded': isFullyExpanded,
              onClick: (event) => {
                event.preventDefault(), setFullyExpanded();
              },
            },
            isFullyExpanded
              ? import_react15.default.createElement(CollapseIcon, null)
              : import_react15.default.createElement(ExpandAltIcon, null),
          ),
      );
    if (item.type === 'component' || item.type === 'group') {
      let BranchNode2 = item.type === 'component' ? ComponentNode : GroupNode;
      return import_react15.default.createElement(
        BranchNode2,
        {
          key: id,
          id,
          style: color ? { color } : {},
          className: 'sidebar-item',
          'data-ref-id': refId,
          'data-item-id': item.id,
          'data-parent-id': item.parent,
          'data-nodetype': item.type === 'component' ? 'component' : 'group',
          'data-highlightable': isDisplayed,
          'aria-controls': item.children && item.children[0],
          'aria-expanded': isExpanded,
          depth: isOrphan ? item.depth : item.depth - 1,
          isComponent: item.type === 'component',
          isExpandable: item.children && item.children.length > 0,
          isExpanded,
          onClick: (event) => {
            event.preventDefault(),
              setExpanded({ ids: [item.id], value: !isExpanded }),
              item.type === 'component' &&
                !isExpanded &&
                isDesktop &&
                onSelectStoryId(item.id);
          },
          onMouseEnter: () => {
            item.type === 'component' &&
              api.emit(PRELOAD_ENTRIES, {
                ids: [item.children[0]],
                options: { target: refId },
              });
          },
        },
        item.renderLabel?.(item) || item.name,
      );
    }
    return null;
  }),
  Root = import_react15.default.memo(function ({
    setExpanded,
    isFullyExpanded,
    expandableDescendants,
    ...props
  }) {
    let setFullyExpanded = (0, import_react15.useCallback)(
      () =>
        setExpanded({ ids: expandableDescendants, value: !isFullyExpanded }),
      [setExpanded, isFullyExpanded, expandableDescendants],
    );
    return import_react15.default.createElement(Node, {
      ...props,
      setExpanded,
      isFullyExpanded,
      setFullyExpanded,
    });
  }),
  Tree = import_react15.default.memo(function ({
    isBrowsing,
    isMain,
    refId,
    data,
    status,
    docsMode,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId,
  }) {
    let containerRef = (0, import_react15.useRef)(null),
      api = useStorybookApi(),
      [rootIds, orphanIds, initialExpanded] = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).reduce(
            (acc, id) => {
              let item = data[id];
              return (
                item.type === 'root'
                  ? acc[0].push(id)
                  : item.parent || acc[1].push(id),
                item.type === 'root' &&
                  item.startCollapsed &&
                  (acc[2][id] = !1),
                acc
              );
            },
            [[], [], {}],
          ),
        [data],
      ),
      { expandableDescendants } = (0, import_react15.useMemo)(
        () =>
          [...orphanIds, ...rootIds].reduce(
            (acc, nodeId) => (
              (acc.expandableDescendants[nodeId] = getDescendantIds(
                data,
                nodeId,
                !1,
              ).filter((d2) => !['story', 'docs'].includes(data[d2].type))),
              acc
            ),
            { orphansFirst: [], expandableDescendants: {} },
          ),
        [data, rootIds, orphanIds],
      ),
      singleStoryComponentIds = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).filter((id) => {
            let entry = data[id];
            if (entry.type !== 'component') return !1;
            let { children = [], name } = entry;
            if (children.length !== 1) return !1;
            let onlyChild = data[children[0]];
            return onlyChild.type === 'docs'
              ? !0
              : onlyChild.type === 'story'
                ? isStoryHoistable(onlyChild.name, name)
                : !1;
          }),
        [data],
      ),
      collapsedItems = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).filter(
            (id) => !singleStoryComponentIds.includes(id),
          ),
        [singleStoryComponentIds],
      ),
      collapsedData = (0, import_react15.useMemo)(
        () =>
          singleStoryComponentIds.reduce(
            (acc, id) => {
              let { children, parent, name } = data[id],
                [childId] = children;
              if (parent) {
                let siblings = [...data[parent].children];
                (siblings[siblings.indexOf(id)] = childId),
                  (acc[parent] = { ...data[parent], children: siblings });
              }
              return (
                (acc[childId] = {
                  ...data[childId],
                  name,
                  parent,
                  depth: data[childId].depth - 1,
                }),
                acc
              );
            },
            { ...data },
          ),
        [data],
      ),
      ancestry = (0, import_react15.useMemo)(
        () =>
          collapsedItems.reduce(
            (acc, id) =>
              Object.assign(acc, { [id]: getAncestorIds(collapsedData, id) }),
            {},
          ),
        [collapsedItems, collapsedData],
      ),
      [expanded, setExpanded] = useExpanded({
        containerRef,
        isBrowsing,
        refId,
        data: collapsedData,
        initialExpanded,
        rootIds,
        highlightedRef,
        setHighlightedItemId,
        selectedStoryId,
        onSelectStoryId,
      }),
      groupStatus = (0, import_react15.useMemo)(
        () => getGroupStatus(collapsedData, status),
        [collapsedData, status],
      ),
      treeItems = (0, import_react15.useMemo)(
        () =>
          collapsedItems.map((itemId) => {
            let item = collapsedData[itemId],
              id = createId(itemId, refId);
            if (item.type === 'root') {
              let descendants = expandableDescendants[item.id],
                isFullyExpanded = descendants.every((d2) => expanded[d2]);
              return import_react15.default.createElement(Root, {
                key: id,
                item,
                refId,
                isOrphan: !1,
                isDisplayed: !0,
                isSelected: selectedStoryId === itemId,
                isExpanded: !!expanded[itemId],
                setExpanded,
                isFullyExpanded,
                expandableDescendants: descendants,
                onSelectStoryId,
              });
            }
            let isDisplayed =
                !item.parent || ancestry[itemId].every((a2) => expanded[a2]),
              color = groupStatus[itemId]
                ? statusMapping[groupStatus[itemId]][1]
                : null;
            return import_react15.default.createElement(Node, {
              api,
              key: id,
              item,
              status: status?.[itemId],
              refId,
              color,
              docsMode,
              isOrphan: orphanIds.some(
                (oid) => itemId === oid || itemId.startsWith(`${oid}-`),
              ),
              isDisplayed,
              isSelected: selectedStoryId === itemId,
              isExpanded: !!expanded[itemId],
              setExpanded,
              onSelectStoryId,
            });
          }),
        [
          ancestry,
          api,
          collapsedData,
          collapsedItems,
          docsMode,
          expandableDescendants,
          expanded,
          groupStatus,
          onSelectStoryId,
          orphanIds,
          refId,
          selectedStoryId,
          setExpanded,
          status,
        ],
      );
    return import_react15.default.createElement(
      Container,
      { ref: containerRef, hasOrphans: isMain && orphanIds.length > 0 },
      import_react15.default.createElement(IconSymbols, null),
      treeItems,
    );
  });
var Wrapper2 = newStyled.div(({ isMain }) => ({
    position: 'relative',
    marginTop: isMain ? void 0 : 0,
  })),
  RefHead = newStyled.div(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
    fontSize: theme.typography.size.s2,
    textDecoration: 'none',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'transparent',
    width: '100%',
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderTop: `1px solid ${theme.appBorderColor}`,
    color:
      theme.base === 'light'
        ? theme.color.defaultText
        : curriedTransparentize$1(0.2, theme.color.defaultText),
  })),
  RefTitle = newStyled.div({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flex: 1,
    overflow: 'hidden',
    marginLeft: 2,
  }),
  CollapseButton2 = newStyled.button(({ theme }) => ({
    all: 'unset',
    display: 'flex',
    padding: '0px 8px',
    gap: 6,
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:focus': {
      borderColor: theme.color.secondary,
      'span:first-of-type': { borderLeftColor: theme.color.secondary },
    },
  })),
  Ref = import_react16.default.memo(function (props) {
    let { docsOptions } = useStorybookState(),
      api = useStorybookApi(),
      {
        index,
        id: refId,
        title = refId,
        isLoading: isLoadingMain,
        isBrowsing,
        selectedStoryId,
        highlightedRef,
        setHighlighted,
        loginUrl,
        type,
        expanded = !0,
        indexError,
        previewInitialized,
      } = props,
      length = (0, import_react16.useMemo)(
        () => (index ? Object.keys(index).length : 0),
        [index],
      ),
      indicatorRef = (0, import_react16.useRef)(null),
      isMain = refId === DEFAULT_REF_ID,
      isLoading =
        isLoadingMain ||
        (type === 'auto-inject' && !previewInitialized) ||
        type === 'server-checked' ||
        type === 'unknown',
      state = getStateType(
        isLoading,
        !!loginUrl && length === 0,
        !!indexError,
        !isLoading && length === 0,
      ),
      [isExpanded, setExpanded] = (0, import_react16.useState)(expanded);
    (0, import_react16.useEffect)(() => {
      index && selectedStoryId && index[selectedStoryId] && setExpanded(!0);
    }, [setExpanded, index, selectedStoryId]);
    let handleClick = (0, import_react16.useCallback)(
        () => setExpanded((value) => !value),
        [setExpanded],
      ),
      setHighlightedItemId = (0, import_react16.useCallback)(
        (itemId) => setHighlighted({ itemId, refId }),
        [setHighlighted],
      ),
      onSelectStoryId = (0, import_react16.useCallback)(
        (storyId) =>
          api && api.selectStory(storyId, void 0, { ref: !isMain && refId }),
        [api, isMain, refId],
      );
    return import_react16.default.createElement(
      import_react16.default.Fragment,
      null,
      isMain ||
        import_react16.default.createElement(
          RefHead,
          {
            'aria-label': `${isExpanded ? 'Hide' : 'Show'} ${title} stories`,
            'aria-expanded': isExpanded,
          },
          import_react16.default.createElement(
            CollapseButton2,
            { 'data-action': 'collapse-ref', onClick: handleClick },
            import_react16.default.createElement(CollapseIcon2, { isExpanded }),
            import_react16.default.createElement(RefTitle, { title }, title),
          ),
          import_react16.default.createElement(RefIndicator, {
            ...props,
            state,
            ref: indicatorRef,
          }),
        ),
      isExpanded &&
        import_react16.default.createElement(
          Wrapper2,
          { 'data-title': title, isMain },
          state === 'auth' &&
            import_react16.default.createElement(AuthBlock, {
              id: refId,
              loginUrl,
            }),
          state === 'error' &&
            import_react16.default.createElement(ErrorBlock, {
              error: indexError,
            }),
          state === 'loading' &&
            import_react16.default.createElement(LoaderBlock, { isMain }),
          state === 'empty' &&
            import_react16.default.createElement(EmptyBlock, { isMain }),
          state === 'ready' &&
            import_react16.default.createElement(Tree, {
              status: props.status,
              isBrowsing,
              isMain,
              refId,
              data: index,
              docsMode: docsOptions.docsMode,
              selectedStoryId,
              onSelectStoryId,
              highlightedRef,
              setHighlightedItemId,
            }),
        ),
    );
  });
var import_react17 = __toESM(require_react());
var { document: document5, window: globalWindow4 } = scope,
  fromSelection = (selection) =>
    selection ? { itemId: selection.storyId, refId: selection.refId } : null,
  useHighlighted = ({
    containerRef,
    isLoading,
    isBrowsing,
    dataset,
    selected,
  }) => {
    let initialHighlight = fromSelection(selected),
      highlightedRef = (0, import_react17.useRef)(initialHighlight),
      [highlighted, setHighlighted] = (0, import_react17.useState)(
        initialHighlight,
      ),
      api = useStorybookApi(),
      updateHighlighted = (0, import_react17.useCallback)(
        (highlight) => {
          (highlightedRef.current = highlight), setHighlighted(highlight);
        },
        [highlightedRef],
      ),
      highlightElement = (0, import_react17.useCallback)(
        (element, center = !1) => {
          let itemId = element.getAttribute('data-item-id'),
            refId = element.getAttribute('data-ref-id');
          !itemId ||
            !refId ||
            (updateHighlighted({ itemId, refId }),
            scrollIntoView(element, center));
        },
        [updateHighlighted],
      );
    return (
      (0, import_react17.useEffect)(() => {
        let highlight = fromSelection(selected);
        if ((updateHighlighted(highlight), highlight)) {
          let { itemId, refId } = highlight;
          setTimeout(() => {
            scrollIntoView(
              containerRef.current?.querySelector(
                `[data-item-id="${itemId}"][data-ref-id="${refId}"]`,
              ),
              !0,
            );
          }, 0);
        }
      }, [dataset, highlightedRef, containerRef, selected]),
      (0, import_react17.useEffect)(() => {
        let menuElement = document5.getElementById('storybook-explorer-menu'),
          lastRequestId,
          navigateTree = (event) => {
            if (
              isLoading ||
              !isBrowsing ||
              !containerRef.current ||
              !matchesModifiers(!1, event)
            )
              return;
            let isArrowUp = matchesKeyCode('ArrowUp', event),
              isArrowDown = matchesKeyCode('ArrowDown', event);
            if (!(isArrowUp || isArrowDown)) return;
            let requestId = globalWindow4.requestAnimationFrame(() => {
              globalWindow4.cancelAnimationFrame(lastRequestId),
                (lastRequestId = requestId);
              let target = event.target;
              if (
                !isAncestor(menuElement, target) &&
                !isAncestor(target, menuElement)
              )
                return;
              target.hasAttribute('data-action') && target.blur();
              let highlightable = Array.from(
                  containerRef.current.querySelectorAll(
                    '[data-highlightable=true]',
                  ),
                ),
                currentIndex = highlightable.findIndex(
                  (el) =>
                    el.getAttribute('data-item-id') ===
                      highlightedRef.current?.itemId &&
                    el.getAttribute('data-ref-id') ===
                      highlightedRef.current?.refId,
                ),
                nextIndex = cycle(
                  highlightable,
                  currentIndex,
                  isArrowUp ? -1 : 1,
                ),
                didRunAround = isArrowUp
                  ? nextIndex === highlightable.length - 1
                  : nextIndex === 0;
              if (
                (highlightElement(highlightable[nextIndex], didRunAround),
                highlightable[nextIndex].getAttribute('data-nodetype') ===
                  'component')
              ) {
                let { itemId, refId } = highlightedRef.current,
                  item = api.resolveStory(
                    itemId,
                    refId === 'storybook_internal' ? void 0 : refId,
                  );
                item.type === 'component' &&
                  api.emit(PRELOAD_ENTRIES, {
                    ids: [item.children[0]],
                    options: { target: refId },
                  });
              }
            });
          };
        return (
          document5.addEventListener('keydown', navigateTree),
          () => document5.removeEventListener('keydown', navigateTree)
        );
      }, [isLoading, isBrowsing, highlightedRef, highlightElement]),
      [highlighted, updateHighlighted, highlightedRef]
    );
  };
var import_react18 = __toESM(require_react());
var HighlightStyles = ({ refId, itemId }) =>
  import_react18.default.createElement(Global, {
    styles: ({ color }) => {
      let background = curriedTransparentize$1(0.85, color.secondary);
      return {
        [`[data-ref-id="${refId}"][data-item-id="${itemId}"]:not([data-selected="true"])`]:
          {
            '&[data-nodetype="component"], &[data-nodetype="group"]': {
              background,
              '&:hover, &:focus': { background },
            },
            '&[data-nodetype="story"], &[data-nodetype="document"]': {
              color: color.defaultText,
              background,
              '&:hover, &:focus': { background },
            },
          },
      };
    },
  });
var Explorer = import_react19.default.memo(function ({
  isLoading,
  isBrowsing,
  dataset,
  selected,
}) {
  let containerRef = (0, import_react19.useRef)(null),
    [highlighted, setHighlighted, highlightedRef] = useHighlighted({
      containerRef,
      isLoading,
      isBrowsing,
      dataset,
      selected,
    });
  return import_react19.default.createElement(
    'div',
    {
      ref: containerRef,
      id: 'storybook-explorer-tree',
      'data-highlighted-ref-id': highlighted?.refId,
      'data-highlighted-item-id': highlighted?.itemId,
    },
    highlighted &&
      import_react19.default.createElement(HighlightStyles, { ...highlighted }),
    dataset.entries.map(([refId, ref]) =>
      import_react19.default.createElement(Ref, {
        ...ref,
        key: refId,
        isLoading,
        isBrowsing,
        selectedStoryId: selected?.refId === ref.id ? selected.storyId : null,
        highlightedRef,
        setHighlighted,
      }),
    ),
  );
});
var import_prop_types2 = __toESM(require_prop_types()),
  import_react20 = __toESM(require_react()),
  import_react_is = __toESM(require_react_is2());
function t2(t3) {
  return typeof t3 == 'object' && t3 != null && t3.nodeType === 1;
}
function e2(t3, e3) {
  return (!e3 || t3 !== 'hidden') && t3 !== 'visible' && t3 !== 'clip';
}
function n2(t3, n3) {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    var r3 = getComputedStyle(t3, null);
    return (
      e2(r3.overflowY, n3) ||
      e2(r3.overflowX, n3) ||
      (function (t4) {
        var e3 = (function (t5) {
          if (!t5.ownerDocument || !t5.ownerDocument.defaultView) return null;
          try {
            return t5.ownerDocument.defaultView.frameElement;
          } catch {
            return null;
          }
        })(t4);
        return (
          !!e3 &&
          (e3.clientHeight < t4.scrollHeight || e3.clientWidth < t4.scrollWidth)
        );
      })(t3)
    );
  }
  return !1;
}
function r2(t3, e3, n3, r3, i3, o2, l2, d2) {
  return (o2 < t3 && l2 > e3) || (o2 > t3 && l2 < e3)
    ? 0
    : (o2 <= t3 && d2 <= n3) || (l2 >= e3 && d2 >= n3)
      ? o2 - t3 - r3
      : (l2 > e3 && d2 < n3) || (o2 < t3 && d2 > n3)
        ? l2 - e3 + i3
        : 0;
}
var i2 = function (e3, i3) {
  var o2 = window,
    l2 = i3.scrollMode,
    d2 = i3.block,
    f2 = i3.inline,
    h2 = i3.boundary,
    u2 = i3.skipOverflowHiddenElements,
    s2 =
      typeof h2 == 'function'
        ? h2
        : function (t3) {
            return t3 !== h2;
          };
  if (!t2(e3)) throw new TypeError('Invalid target');
  for (
    var a2,
      c2,
      g2 = document.scrollingElement || document.documentElement,
      p2 = [],
      m2 = e3;
    t2(m2) && s2(m2);

  ) {
    if (
      (m2 =
        (c2 = (a2 = m2).parentElement) == null
          ? a2.getRootNode().host || null
          : c2) === g2
    ) {
      p2.push(m2);
      break;
    }
    (m2 != null &&
      m2 === document.body &&
      n2(m2) &&
      !n2(document.documentElement)) ||
      (m2 != null && n2(m2, u2) && p2.push(m2));
  }
  for (
    var w2 = o2.visualViewport ? o2.visualViewport.width : innerWidth,
      v2 = o2.visualViewport ? o2.visualViewport.height : innerHeight,
      W2 = window.scrollX || pageXOffset,
      H2 = window.scrollY || pageYOffset,
      b2 = e3.getBoundingClientRect(),
      y2 = b2.height,
      E2 = b2.width,
      M2 = b2.top,
      V = b2.right,
      x2 = b2.bottom,
      I2 = b2.left,
      C2 =
        d2 === 'start' || d2 === 'nearest'
          ? M2
          : d2 === 'end'
            ? x2
            : M2 + y2 / 2,
      R2 = f2 === 'center' ? I2 + E2 / 2 : f2 === 'end' ? V : I2,
      T2 = [],
      k2 = 0;
    k2 < p2.length;
    k2++
  ) {
    var B2 = p2[k2],
      D2 = B2.getBoundingClientRect(),
      O2 = D2.height,
      X = D2.width,
      Y2 = D2.top,
      L2 = D2.right,
      S2 = D2.bottom,
      j2 = D2.left;
    if (
      l2 === 'if-needed' &&
      M2 >= 0 &&
      I2 >= 0 &&
      x2 <= v2 &&
      V <= w2 &&
      M2 >= Y2 &&
      x2 <= S2 &&
      I2 >= j2 &&
      V <= L2
    )
      return T2;
    var N2 = getComputedStyle(B2),
      q2 = parseInt(N2.borderLeftWidth, 10),
      z2 = parseInt(N2.borderTopWidth, 10),
      A2 = parseInt(N2.borderRightWidth, 10),
      F2 = parseInt(N2.borderBottomWidth, 10),
      G2 = 0,
      J = 0,
      K2 = 'offsetWidth' in B2 ? B2.offsetWidth - B2.clientWidth - q2 - A2 : 0,
      P2 =
        'offsetHeight' in B2 ? B2.offsetHeight - B2.clientHeight - z2 - F2 : 0,
      Q =
        'offsetWidth' in B2
          ? B2.offsetWidth === 0
            ? 0
            : X / B2.offsetWidth
          : 0,
      U2 =
        'offsetHeight' in B2
          ? B2.offsetHeight === 0
            ? 0
            : O2 / B2.offsetHeight
          : 0;
    if (g2 === B2)
      (G2 =
        d2 === 'start'
          ? C2
          : d2 === 'end'
            ? C2 - v2
            : d2 === 'nearest'
              ? r2(H2, H2 + v2, v2, z2, F2, H2 + C2, H2 + C2 + y2, y2)
              : C2 - v2 / 2),
        (J =
          f2 === 'start'
            ? R2
            : f2 === 'center'
              ? R2 - w2 / 2
              : f2 === 'end'
                ? R2 - w2
                : r2(W2, W2 + w2, w2, q2, A2, W2 + R2, W2 + R2 + E2, E2)),
        (G2 = Math.max(0, G2 + H2)),
        (J = Math.max(0, J + W2));
    else {
      (G2 =
        d2 === 'start'
          ? C2 - Y2 - z2
          : d2 === 'end'
            ? C2 - S2 + F2 + P2
            : d2 === 'nearest'
              ? r2(Y2, S2, O2, z2, F2 + P2, C2, C2 + y2, y2)
              : C2 - (Y2 + O2 / 2) + P2 / 2),
        (J =
          f2 === 'start'
            ? R2 - j2 - q2
            : f2 === 'center'
              ? R2 - (j2 + X / 2) + K2 / 2
              : f2 === 'end'
                ? R2 - L2 + A2 + K2
                : r2(j2, L2, X, q2, A2 + K2, R2, R2 + E2, E2));
      var Z = B2.scrollLeft,
        $ = B2.scrollTop;
      (C2 +=
        $ -
        (G2 = Math.max(
          0,
          Math.min($ + G2 / U2, B2.scrollHeight - O2 / U2 + P2),
        ))),
        (R2 +=
          Z -
          (J = Math.max(0, Math.min(Z + J / Q, B2.scrollWidth - X / Q + K2))));
    }
    T2.push({ el: B2, top: G2, left: J });
  }
  return T2;
};
var __assign = function () {
  return (
    (__assign =
      Object.assign ||
      function (t3) {
        for (var s2, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
          s2 = arguments[i3];
          for (var p2 in s2)
            Object.prototype.hasOwnProperty.call(s2, p2) && (t3[p2] = s2[p2]);
        }
        return t3;
      }),
    __assign.apply(this, arguments)
  );
};
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb == 'function' ? cb : noop2;
}
function noop2() {}
function scrollIntoView2(node, menuNode) {
  if (!node) return;
  i2(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed',
  }).forEach((_ref) => {
    let { el, top, left } = _ref;
    (el.scrollTop = top), (el.scrollLeft = left);
  });
}
function isOrContainsNode(parent, child, environment) {
  return (
    parent === child ||
    (child instanceof environment.Node &&
      parent.contains &&
      parent.contains(child))
  );
}
function debounce(fn, time) {
  let timeoutId;
  function cancel() {
    timeoutId && clearTimeout(timeoutId);
  }
  function wrapper() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    )
      args[_key] = arguments[_key];
    cancel(),
      (timeoutId = setTimeout(() => {
        (timeoutId = null), fn(...args);
      }, time));
  }
  return (wrapper.cancel = cancel), wrapper;
}
function callAllEventHandlers() {
  for (
    var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  )
    fns[_key2] = arguments[_key2];
  return function (event) {
    for (
      var _len3 = arguments.length,
        args = new Array(_len3 > 1 ? _len3 - 1 : 0),
        _key3 = 1;
      _key3 < _len3;
      _key3++
    )
      args[_key3 - 1] = arguments[_key3];
    return fns.some(
      (fn) => (
        fn && fn(event, ...args),
        event.preventDownshiftDefault ||
          (event.hasOwnProperty('nativeEvent') &&
            event.nativeEvent.preventDownshiftDefault)
      ),
    );
  };
}
function handleRefs() {
  for (
    var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0;
    _key4 < _len4;
    _key4++
  )
    refs[_key4] = arguments[_key4];
  return (node) => {
    refs.forEach((ref) => {
      typeof ref == 'function' ? ref(node) : ref && (ref.current = node);
    });
  };
}
function generateId() {
  return String(idCounter++);
}
function getA11yStatusMessage$1(_ref2) {
  let { isOpen, resultCount, previousResultCount } = _ref2;
  return isOpen
    ? resultCount
      ? resultCount !== previousResultCount
        ? `${resultCount} result${resultCount === 1 ? ' is' : 's are'} available, use up and down arrow keys to navigate. Press Enter key to select.`
        : ''
      : 'No results are available.'
    : '';
}
function unwrapArray(arg, defaultValue) {
  return (
    (arg = Array.isArray(arg) ? arg[0] : arg),
    !arg && defaultValue ? defaultValue : arg
  );
}
function isDOMElement(element) {
  return typeof element.type == 'string';
}
function getElementProps(element) {
  return element.props;
}
function requiredProp(fnName, propName) {
  console.error(`The property "${propName}" is required in "${fnName}"`);
}
var stateKeys = [
  'highlightedIndex',
  'inputValue',
  'isOpen',
  'selectedItem',
  'type',
];
function pickState(state) {
  state === void 0 && (state = {});
  let result = {};
  return (
    stateKeys.forEach((k2) => {
      state.hasOwnProperty(k2) && (result[k2] = state[k2]);
    }),
    result
  );
}
function getState(state, props) {
  return Object.keys(state).reduce(
    (prevState, key) => (
      (prevState[key] = isControlledProp(props, key) ? props[key] : state[key]),
      prevState
    ),
    {},
  );
}
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
function normalizeArrowKey(event) {
  let { key, keyCode } = event;
  return keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0
    ? `Arrow${key}`
    : key;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function getNextWrappingIndex(
  moveAmount,
  baseIndex,
  itemCount,
  getItemNodeFromIndex,
  circular,
) {
  if ((circular === void 0 && (circular = !0), itemCount === 0)) return -1;
  let itemsLastIndex = itemCount - 1;
  (typeof baseIndex != 'number' || baseIndex < 0 || baseIndex >= itemCount) &&
    (baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1);
  let newIndex = baseIndex + moveAmount;
  newIndex < 0
    ? (newIndex = circular ? itemsLastIndex : 0)
    : newIndex > itemsLastIndex && (newIndex = circular ? 0 : itemsLastIndex);
  let nonDisabledNewIndex = getNextNonDisabledIndex(
    moveAmount,
    newIndex,
    itemCount,
    getItemNodeFromIndex,
    circular,
  );
  return nonDisabledNewIndex === -1
    ? baseIndex >= itemCount
      ? -1
      : baseIndex
    : nonDisabledNewIndex;
}
function getNextNonDisabledIndex(
  moveAmount,
  baseIndex,
  itemCount,
  getItemNodeFromIndex,
  circular,
) {
  let currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute('disabled'))
    return baseIndex;
  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++)
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) return index;
  } else
    for (let index = baseIndex - 1; index >= 0; index--)
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) return index;
  return circular
    ? moveAmount > 0
      ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, !1)
      : getNextNonDisabledIndex(
          -1,
          itemCount - 1,
          itemCount,
          getItemNodeFromIndex,
          !1,
        )
    : -1;
}
function targetWithinDownshift(
  target,
  downshiftElements,
  environment,
  checkActiveElement,
) {
  return (
    checkActiveElement === void 0 && (checkActiveElement = !0),
    downshiftElements.some(
      (contextNode) =>
        contextNode &&
        (isOrContainsNode(contextNode, target, environment) ||
          (checkActiveElement &&
            isOrContainsNode(
              contextNode,
              environment.document.activeElement,
              environment,
            ))),
    )
  );
}
var validateControlledUnchanged = noop2;
validateControlledUnchanged = (state, prevProps, nextProps) => {
  let warningDescription =
    'This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props';
  Object.keys(state).forEach((propKey) => {
    prevProps[propKey] !== void 0 && nextProps[propKey] === void 0
      ? console.error(
          `downshift: A component has changed the controlled prop "${propKey}" to be uncontrolled. ${warningDescription}`,
        )
      : prevProps[propKey] === void 0 &&
        nextProps[propKey] !== void 0 &&
        console.error(
          `downshift: A component has changed the uncontrolled prop "${propKey}" to be controlled. ${warningDescription}`,
        );
  });
};
var cleanupStatus = debounce((documentProp) => {
  getStatusDiv(documentProp).textContent = '';
}, 500);
function setStatus(status, documentProp) {
  let div = getStatusDiv(documentProp);
  status && ((div.textContent = status), cleanupStatus(documentProp));
}
function getStatusDiv(documentProp) {
  documentProp === void 0 && (documentProp = document);
  let statusDiv = documentProp.getElementById('a11y-status-message');
  return (
    statusDiv ||
    ((statusDiv = documentProp.createElement('div')),
    statusDiv.setAttribute('id', 'a11y-status-message'),
    statusDiv.setAttribute('role', 'status'),
    statusDiv.setAttribute('aria-live', 'polite'),
    statusDiv.setAttribute('aria-relevant', 'additions text'),
    Object.assign(statusDiv.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px',
    }),
    documentProp.body.appendChild(statusDiv),
    statusDiv)
  );
}
var unknown = '__autocomplete_unknown__',
  mouseUp = '__autocomplete_mouseup__',
  itemMouseEnter = '__autocomplete_item_mouseenter__',
  keyDownArrowUp = '__autocomplete_keydown_arrow_up__',
  keyDownArrowDown = '__autocomplete_keydown_arrow_down__',
  keyDownEscape = '__autocomplete_keydown_escape__',
  keyDownEnter = '__autocomplete_keydown_enter__',
  keyDownHome = '__autocomplete_keydown_home__',
  keyDownEnd = '__autocomplete_keydown_end__',
  clickItem = '__autocomplete_click_item__',
  blurInput = '__autocomplete_blur_input__',
  changeInput = '__autocomplete_change_input__',
  keyDownSpaceButton = '__autocomplete_keydown_space_button__',
  clickButton = '__autocomplete_click_button__',
  blurButton = '__autocomplete_blur_button__',
  controlledPropUpdatedSelectedItem =
    '__autocomplete_controlled_prop_updated_selected_item__',
  touchEnd = '__autocomplete_touchend__',
  stateChangeTypes$3 = Object.freeze({
    __proto__: null,
    unknown,
    mouseUp,
    itemMouseEnter,
    keyDownArrowUp,
    keyDownArrowDown,
    keyDownEscape,
    keyDownEnter,
    keyDownHome,
    keyDownEnd,
    clickItem,
    blurInput,
    changeInput,
    keyDownSpaceButton,
    clickButton,
    blurButton,
    controlledPropUpdatedSelectedItem,
    touchEnd,
  }),
  Downshift = (() => {
    class Downshift2 extends import_react20.Component {
      constructor(_props) {
        var _this;
        super(_props),
          (_this = this),
          (this.id = this.props.id || `downshift-${generateId()}`),
          (this.menuId = this.props.menuId || `${this.id}-menu`),
          (this.labelId = this.props.labelId || `${this.id}-label`),
          (this.inputId = this.props.inputId || `${this.id}-input`),
          (this.getItemId =
            this.props.getItemId || ((index) => `${this.id}-item-${index}`)),
          (this.input = null),
          (this.items = []),
          (this.itemCount = null),
          (this.previousResultCount = 0),
          (this.timeoutIds = []),
          (this.internalSetTimeout = (fn, time) => {
            let id = setTimeout(() => {
              (this.timeoutIds = this.timeoutIds.filter((i3) => i3 !== id)),
                fn();
            }, time);
            this.timeoutIds.push(id);
          }),
          (this.setItemCount = (count) => {
            this.itemCount = count;
          }),
          (this.unsetItemCount = () => {
            this.itemCount = null;
          }),
          (this.setHighlightedIndex = function (
            highlightedIndex,
            otherStateToSet,
          ) {
            highlightedIndex === void 0 &&
              (highlightedIndex = _this.props.defaultHighlightedIndex),
              otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState({ highlightedIndex, ...otherStateToSet });
          }),
          (this.clearSelection = (cb) => {
            this.internalSetState(
              {
                selectedItem: null,
                inputValue: '',
                highlightedIndex: this.props.defaultHighlightedIndex,
                isOpen: this.props.defaultIsOpen,
              },
              cb,
            );
          }),
          (this.selectItem = (item, otherStateToSet, cb) => {
            (otherStateToSet = pickState(otherStateToSet)),
              this.internalSetState(
                {
                  isOpen: this.props.defaultIsOpen,
                  highlightedIndex: this.props.defaultHighlightedIndex,
                  selectedItem: item,
                  inputValue: this.props.itemToString(item),
                  ...otherStateToSet,
                },
                cb,
              );
          }),
          (this.selectItemAtIndex = (itemIndex, otherStateToSet, cb) => {
            let item = this.items[itemIndex];
            item != null && this.selectItem(item, otherStateToSet, cb);
          }),
          (this.selectHighlightedItem = (otherStateToSet, cb) =>
            this.selectItemAtIndex(
              this.getState().highlightedIndex,
              otherStateToSet,
              cb,
            )),
          (this.internalSetState = (stateToSet, cb) => {
            let isItemSelected,
              onChangeArg,
              onStateChangeArg = {},
              isStateToSetFunction = typeof stateToSet == 'function';
            return (
              !isStateToSetFunction &&
                stateToSet.hasOwnProperty('inputValue') &&
                this.props.onInputValueChange(stateToSet.inputValue, {
                  ...this.getStateAndHelpers(),
                  ...stateToSet,
                }),
              this.setState(
                (state) => {
                  state = this.getState(state);
                  let newStateToSet = isStateToSetFunction
                    ? stateToSet(state)
                    : stateToSet;
                  (newStateToSet = this.props.stateReducer(
                    state,
                    newStateToSet,
                  )),
                    (isItemSelected =
                      newStateToSet.hasOwnProperty('selectedItem'));
                  let nextState = {};
                  return (
                    isItemSelected &&
                      newStateToSet.selectedItem !== state.selectedItem &&
                      (onChangeArg = newStateToSet.selectedItem),
                    (newStateToSet.type = newStateToSet.type || unknown),
                    Object.keys(newStateToSet).forEach((key) => {
                      state[key] !== newStateToSet[key] &&
                        (onStateChangeArg[key] = newStateToSet[key]),
                        key !== 'type' &&
                          (newStateToSet[key],
                          isControlledProp(this.props, key) ||
                            (nextState[key] = newStateToSet[key]));
                    }),
                    isStateToSetFunction &&
                      newStateToSet.hasOwnProperty('inputValue') &&
                      this.props.onInputValueChange(newStateToSet.inputValue, {
                        ...this.getStateAndHelpers(),
                        ...newStateToSet,
                      }),
                    nextState
                  );
                },
                () => {
                  cbToCb(cb)(),
                    Object.keys(onStateChangeArg).length > 1 &&
                      this.props.onStateChange(
                        onStateChangeArg,
                        this.getStateAndHelpers(),
                      ),
                    isItemSelected &&
                      this.props.onSelect(
                        stateToSet.selectedItem,
                        this.getStateAndHelpers(),
                      ),
                    onChangeArg !== void 0 &&
                      this.props.onChange(
                        onChangeArg,
                        this.getStateAndHelpers(),
                      ),
                    this.props.onUserAction(
                      onStateChangeArg,
                      this.getStateAndHelpers(),
                    );
                },
              )
            );
          }),
          (this.rootRef = (node) => (this._rootNode = node)),
          (this.getRootProps = function (_temp, _temp2) {
            let {
                refKey = 'ref',
                ref,
                ...rest
              } = _temp === void 0 ? {} : _temp,
              { suppressRefError = !1 } = _temp2 === void 0 ? {} : _temp2;
            (_this.getRootProps.called = !0),
              (_this.getRootProps.refKey = refKey),
              (_this.getRootProps.suppressRefError = suppressRefError);
            let { isOpen } = _this.getState();
            return {
              [refKey]: handleRefs(ref, _this.rootRef),
              role: 'combobox',
              'aria-expanded': isOpen,
              'aria-haspopup': 'listbox',
              'aria-owns': isOpen ? _this.menuId : null,
              'aria-labelledby': _this.labelId,
              ...rest,
            };
          }),
          (this.keyDownHandlers = {
            ArrowDown(event) {
              if ((event.preventDefault(), this.getState().isOpen)) {
                let amount = event.shiftKey ? 5 : 1;
                this.moveHighlightedIndex(amount, { type: keyDownArrowDown });
              } else
                this.internalSetState(
                  { isOpen: !0, type: keyDownArrowDown },
                  () => {
                    let itemCount = this.getItemCount();
                    if (itemCount > 0) {
                      let { highlightedIndex } = this.getState(),
                        nextHighlightedIndex = getNextWrappingIndex(
                          1,
                          highlightedIndex,
                          itemCount,
                          (index) => this.getItemNodeFromIndex(index),
                        );
                      this.setHighlightedIndex(nextHighlightedIndex, {
                        type: keyDownArrowDown,
                      });
                    }
                  },
                );
            },
            ArrowUp(event) {
              if ((event.preventDefault(), this.getState().isOpen)) {
                let amount = event.shiftKey ? -5 : -1;
                this.moveHighlightedIndex(amount, { type: keyDownArrowUp });
              } else
                this.internalSetState(
                  { isOpen: !0, type: keyDownArrowUp },
                  () => {
                    let itemCount = this.getItemCount();
                    if (itemCount > 0) {
                      let { highlightedIndex } = this.getState(),
                        nextHighlightedIndex = getNextWrappingIndex(
                          -1,
                          highlightedIndex,
                          itemCount,
                          (index) => this.getItemNodeFromIndex(index),
                        );
                      this.setHighlightedIndex(nextHighlightedIndex, {
                        type: keyDownArrowUp,
                      });
                    }
                  },
                );
            },
            Enter(event) {
              if (event.which === 229) return;
              let { isOpen, highlightedIndex } = this.getState();
              if (isOpen && highlightedIndex != null) {
                event.preventDefault();
                let item = this.items[highlightedIndex],
                  itemNode = this.getItemNodeFromIndex(highlightedIndex);
                if (
                  item == null ||
                  (itemNode && itemNode.hasAttribute('disabled'))
                )
                  return;
                this.selectHighlightedItem({ type: keyDownEnter });
              }
            },
            Escape(event) {
              event.preventDefault(),
                this.reset({
                  type: keyDownEscape,
                  ...(!this.state.isOpen && {
                    selectedItem: null,
                    inputValue: '',
                  }),
                });
            },
          }),
          (this.buttonKeyDownHandlers = {
            ...this.keyDownHandlers,
            ' '(event) {
              event.preventDefault(),
                this.toggleMenu({ type: keyDownSpaceButton });
            },
          }),
          (this.inputKeyDownHandlers = {
            ...this.keyDownHandlers,
            Home(event) {
              let { isOpen } = this.getState();
              if (!isOpen) return;
              event.preventDefault();
              let itemCount = this.getItemCount();
              if (itemCount <= 0 || !isOpen) return;
              let newHighlightedIndex = getNextNonDisabledIndex(
                1,
                0,
                itemCount,
                (index) => this.getItemNodeFromIndex(index),
                !1,
              );
              this.setHighlightedIndex(newHighlightedIndex, {
                type: keyDownHome,
              });
            },
            End(event) {
              let { isOpen } = this.getState();
              if (!isOpen) return;
              event.preventDefault();
              let itemCount = this.getItemCount();
              if (itemCount <= 0 || !isOpen) return;
              let newHighlightedIndex = getNextNonDisabledIndex(
                -1,
                itemCount - 1,
                itemCount,
                (index) => this.getItemNodeFromIndex(index),
                !1,
              );
              this.setHighlightedIndex(newHighlightedIndex, {
                type: keyDownEnd,
              });
            },
          }),
          (this.getToggleButtonProps = function (_temp3) {
            let { onClick, onPress, onKeyDown, onKeyUp, onBlur, ...rest } =
                _temp3 === void 0 ? {} : _temp3,
              { isOpen } = _this.getState(),
              enabledEventHandlers = {
                onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
                onKeyDown: callAllEventHandlers(
                  onKeyDown,
                  _this.buttonHandleKeyDown,
                ),
                onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
                onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur),
              },
              eventHandlers = rest.disabled ? {} : enabledEventHandlers;
            return {
              type: 'button',
              role: 'button',
              'aria-label': isOpen ? 'close menu' : 'open menu',
              'aria-haspopup': !0,
              'data-toggle': !0,
              ...eventHandlers,
              ...rest,
            };
          }),
          (this.buttonHandleKeyUp = (event) => {
            event.preventDefault();
          }),
          (this.buttonHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            this.buttonKeyDownHandlers[key] &&
              this.buttonKeyDownHandlers[key].call(this, event);
          }),
          (this.buttonHandleClick = (event) => {
            event.preventDefault(),
              this.props.environment.document.activeElement ===
                this.props.environment.document.body && event.target.focus(),
              this.internalSetTimeout(() =>
                this.toggleMenu({ type: clickButton }),
              );
          }),
          (this.buttonHandleBlur = (event) => {
            let blurTarget = event.target;
            this.internalSetTimeout(() => {
              !this.isMouseDown &&
                (this.props.environment.document.activeElement == null ||
                  this.props.environment.document.activeElement.id !==
                    this.inputId) &&
                this.props.environment.document.activeElement !== blurTarget &&
                this.reset({ type: blurButton });
            });
          }),
          (this.getLabelProps = (props) => ({
            htmlFor: this.inputId,
            id: this.labelId,
            ...props,
          })),
          (this.getInputProps = function (_temp4) {
            let {
                onKeyDown,
                onBlur,
                onChange,
                onInput,
                onChangeText,
                ...rest
              } = _temp4 === void 0 ? {} : _temp4,
              onChangeKey,
              eventHandlers = {};
            onChangeKey = 'onChange';
            let { inputValue, isOpen, highlightedIndex } = _this.getState();
            return (
              rest.disabled ||
                (eventHandlers = {
                  [onChangeKey]: callAllEventHandlers(
                    onChange,
                    onInput,
                    _this.inputHandleChange,
                  ),
                  onKeyDown: callAllEventHandlers(
                    onKeyDown,
                    _this.inputHandleKeyDown,
                  ),
                  onBlur: callAllEventHandlers(onBlur, _this.inputHandleBlur),
                }),
              {
                'aria-autocomplete': 'list',
                'aria-activedescendant':
                  isOpen &&
                  typeof highlightedIndex == 'number' &&
                  highlightedIndex >= 0
                    ? _this.getItemId(highlightedIndex)
                    : null,
                'aria-controls': isOpen ? _this.menuId : null,
                'aria-labelledby': _this.labelId,
                autoComplete: 'off',
                value: inputValue,
                id: _this.inputId,
                ...eventHandlers,
                ...rest,
              }
            );
          }),
          (this.inputHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key &&
              this.inputKeyDownHandlers[key] &&
              this.inputKeyDownHandlers[key].call(this, event);
          }),
          (this.inputHandleChange = (event) => {
            this.internalSetState({
              type: changeInput,
              isOpen: !0,
              inputValue: event.target.value,
              highlightedIndex: this.props.defaultHighlightedIndex,
            });
          }),
          (this.inputHandleBlur = () => {
            this.internalSetTimeout(() => {
              let downshiftButtonIsActive =
                this.props.environment.document &&
                !!this.props.environment.document.activeElement &&
                !!this.props.environment.document.activeElement.dataset &&
                this.props.environment.document.activeElement.dataset.toggle &&
                this._rootNode &&
                this._rootNode.contains(
                  this.props.environment.document.activeElement,
                );
              !this.isMouseDown &&
                !downshiftButtonIsActive &&
                this.reset({ type: blurInput });
            });
          }),
          (this.menuRef = (node) => {
            this._menuNode = node;
          }),
          (this.getMenuProps = function (_temp5, _temp6) {
            let {
                refKey = 'ref',
                ref,
                ...props
              } = _temp5 === void 0 ? {} : _temp5,
              { suppressRefError = !1 } = _temp6 === void 0 ? {} : _temp6;
            return (
              (_this.getMenuProps.called = !0),
              (_this.getMenuProps.refKey = refKey),
              (_this.getMenuProps.suppressRefError = suppressRefError),
              {
                [refKey]: handleRefs(ref, _this.menuRef),
                role: 'listbox',
                'aria-labelledby':
                  props && props['aria-label'] ? null : _this.labelId,
                id: _this.menuId,
                ...props,
              }
            );
          }),
          (this.getItemProps = function (_temp7) {
            let {
              onMouseMove,
              onMouseDown,
              onClick,
              onPress,
              index,
              item = requiredProp('getItemProps', 'item'),
              ...rest
            } = _temp7 === void 0 ? {} : _temp7;
            index === void 0
              ? (_this.items.push(item), (index = _this.items.indexOf(item)))
              : (_this.items[index] = item);
            let onSelectKey = 'onClick',
              customClickHandler = onClick,
              enabledEventHandlers = {
                onMouseMove: callAllEventHandlers(onMouseMove, () => {
                  index !== _this.getState().highlightedIndex &&
                    (_this.setHighlightedIndex(index, { type: itemMouseEnter }),
                    (_this.avoidScrolling = !0),
                    _this.internalSetTimeout(
                      () => (_this.avoidScrolling = !1),
                      250,
                    ));
                }),
                onMouseDown: callAllEventHandlers(onMouseDown, (event) => {
                  event.preventDefault();
                }),
                [onSelectKey]: callAllEventHandlers(customClickHandler, () => {
                  _this.selectItemAtIndex(index, { type: clickItem });
                }),
              },
              eventHandlers = rest.disabled
                ? { onMouseDown: enabledEventHandlers.onMouseDown }
                : enabledEventHandlers;
            return {
              id: _this.getItemId(index),
              role: 'option',
              'aria-selected': _this.getState().highlightedIndex === index,
              ...eventHandlers,
              ...rest,
            };
          }),
          (this.clearItems = () => {
            this.items = [];
          }),
          (this.reset = function (otherStateToSet, cb) {
            otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState((_ref) => {
                let { selectedItem } = _ref;
                return {
                  isOpen: _this.props.defaultIsOpen,
                  highlightedIndex: _this.props.defaultHighlightedIndex,
                  inputValue: _this.props.itemToString(selectedItem),
                  ...otherStateToSet,
                };
              }, cb);
          }),
          (this.toggleMenu = function (otherStateToSet, cb) {
            otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState(
                (_ref2) => {
                  let { isOpen } = _ref2;
                  return {
                    isOpen: !isOpen,
                    ...(isOpen && {
                      highlightedIndex: _this.props.defaultHighlightedIndex,
                    }),
                    ...otherStateToSet,
                  };
                },
                () => {
                  let { isOpen, highlightedIndex } = _this.getState();
                  isOpen &&
                    _this.getItemCount() > 0 &&
                    typeof highlightedIndex == 'number' &&
                    _this.setHighlightedIndex(
                      highlightedIndex,
                      otherStateToSet,
                    ),
                    cbToCb(cb)();
                },
              );
          }),
          (this.openMenu = (cb) => {
            this.internalSetState({ isOpen: !0 }, cb);
          }),
          (this.closeMenu = (cb) => {
            this.internalSetState({ isOpen: !1 }, cb);
          }),
          (this.updateStatus = debounce(() => {
            let state = this.getState(),
              item = this.items[state.highlightedIndex],
              resultCount = this.getItemCount(),
              status = this.props.getA11yStatusMessage({
                itemToString: this.props.itemToString,
                previousResultCount: this.previousResultCount,
                resultCount,
                highlightedItem: item,
                ...state,
              });
            (this.previousResultCount = resultCount),
              setStatus(status, this.props.environment.document);
          }, 200));
        let {
            defaultHighlightedIndex,
            initialHighlightedIndex:
              _highlightedIndex = defaultHighlightedIndex,
            defaultIsOpen,
            initialIsOpen: _isOpen = defaultIsOpen,
            initialInputValue: _inputValue = '',
            initialSelectedItem: _selectedItem = null,
          } = this.props,
          _state = this.getState({
            highlightedIndex: _highlightedIndex,
            isOpen: _isOpen,
            inputValue: _inputValue,
            selectedItem: _selectedItem,
          });
        _state.selectedItem != null &&
          this.props.initialInputValue === void 0 &&
          (_state.inputValue = this.props.itemToString(_state.selectedItem)),
          (this.state = _state);
      }
      internalClearTimeouts() {
        this.timeoutIds.forEach((id) => {
          clearTimeout(id);
        }),
          (this.timeoutIds = []);
      }
      getState(stateToMerge) {
        return (
          stateToMerge === void 0 && (stateToMerge = this.state),
          getState(stateToMerge, this.props)
        );
      }
      getItemCount() {
        let itemCount = this.items.length;
        return (
          this.itemCount != null
            ? (itemCount = this.itemCount)
            : this.props.itemCount !== void 0 &&
              (itemCount = this.props.itemCount),
          itemCount
        );
      }
      getItemNodeFromIndex(index) {
        return this.props.environment.document.getElementById(
          this.getItemId(index),
        );
      }
      scrollHighlightedItemIntoView() {
        {
          let node = this.getItemNodeFromIndex(
            this.getState().highlightedIndex,
          );
          this.props.scrollIntoView(node, this._menuNode);
        }
      }
      moveHighlightedIndex(amount, otherStateToSet) {
        let itemCount = this.getItemCount(),
          { highlightedIndex } = this.getState();
        if (itemCount > 0) {
          let nextHighlightedIndex = getNextWrappingIndex(
            amount,
            highlightedIndex,
            itemCount,
            (index) => this.getItemNodeFromIndex(index),
          );
          this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
        }
      }
      getStateAndHelpers() {
        let { highlightedIndex, inputValue, selectedItem, isOpen } =
            this.getState(),
          { itemToString: itemToString2 } = this.props,
          { id } = this,
          {
            getRootProps,
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            getInputProps,
            getItemProps,
            openMenu,
            closeMenu,
            toggleMenu,
            selectItem,
            selectItemAtIndex,
            selectHighlightedItem,
            setHighlightedIndex,
            clearSelection,
            clearItems,
            reset,
            setItemCount,
            unsetItemCount,
            internalSetState: setState,
          } = this;
        return {
          getRootProps,
          getToggleButtonProps,
          getLabelProps,
          getMenuProps,
          getInputProps,
          getItemProps,
          reset,
          openMenu,
          closeMenu,
          toggleMenu,
          selectItem,
          selectItemAtIndex,
          selectHighlightedItem,
          setHighlightedIndex,
          clearSelection,
          clearItems,
          setItemCount,
          unsetItemCount,
          setState,
          itemToString: itemToString2,
          id,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        };
      }
      componentDidMount() {
        this.getMenuProps.called &&
          !this.getMenuProps.suppressRefError &&
          validateGetMenuPropsCalledCorrectly(
            this._menuNode,
            this.getMenuProps,
          );
        {
          let onMouseDown = () => {
              this.isMouseDown = !0;
            },
            onMouseUp = (event) => {
              (this.isMouseDown = !1),
                !targetWithinDownshift(
                  event.target,
                  [this._rootNode, this._menuNode],
                  this.props.environment,
                ) &&
                  this.getState().isOpen &&
                  this.reset({ type: mouseUp }, () =>
                    this.props.onOuterClick(this.getStateAndHelpers()),
                  );
            },
            onTouchStart = () => {
              this.isTouchMove = !1;
            },
            onTouchMove = () => {
              this.isTouchMove = !0;
            },
            onTouchEnd = (event) => {
              let contextWithinDownshift = targetWithinDownshift(
                event.target,
                [this._rootNode, this._menuNode],
                this.props.environment,
                !1,
              );
              !this.isTouchMove &&
                !contextWithinDownshift &&
                this.getState().isOpen &&
                this.reset({ type: touchEnd }, () =>
                  this.props.onOuterClick(this.getStateAndHelpers()),
                );
            },
            { environment } = this.props;
          environment.addEventListener('mousedown', onMouseDown),
            environment.addEventListener('mouseup', onMouseUp),
            environment.addEventListener('touchstart', onTouchStart),
            environment.addEventListener('touchmove', onTouchMove),
            environment.addEventListener('touchend', onTouchEnd),
            (this.cleanup = () => {
              this.internalClearTimeouts(),
                this.updateStatus.cancel(),
                environment.removeEventListener('mousedown', onMouseDown),
                environment.removeEventListener('mouseup', onMouseUp),
                environment.removeEventListener('touchstart', onTouchStart),
                environment.removeEventListener('touchmove', onTouchMove),
                environment.removeEventListener('touchend', onTouchEnd);
            });
        }
      }
      shouldScroll(prevState, prevProps) {
        let { highlightedIndex: currentHighlightedIndex } =
            this.props.highlightedIndex === void 0
              ? this.getState()
              : this.props,
          { highlightedIndex: prevHighlightedIndex } =
            prevProps.highlightedIndex === void 0 ? prevState : prevProps;
        return (
          (currentHighlightedIndex &&
            this.getState().isOpen &&
            !prevState.isOpen) ||
          currentHighlightedIndex !== prevHighlightedIndex
        );
      }
      componentDidUpdate(prevProps, prevState) {
        validateControlledUnchanged(this.state, prevProps, this.props),
          this.getMenuProps.called &&
            !this.getMenuProps.suppressRefError &&
            validateGetMenuPropsCalledCorrectly(
              this._menuNode,
              this.getMenuProps,
            ),
          isControlledProp(this.props, 'selectedItem') &&
            this.props.selectedItemChanged(
              prevProps.selectedItem,
              this.props.selectedItem,
            ) &&
            this.internalSetState({
              type: controlledPropUpdatedSelectedItem,
              inputValue: this.props.itemToString(this.props.selectedItem),
            }),
          !this.avoidScrolling &&
            this.shouldScroll(prevState, prevProps) &&
            this.scrollHighlightedItemIntoView(),
          this.updateStatus();
      }
      componentWillUnmount() {
        this.cleanup();
      }
      render() {
        let children = unwrapArray(this.props.children, noop2);
        this.clearItems(),
          (this.getRootProps.called = !1),
          (this.getRootProps.refKey = void 0),
          (this.getRootProps.suppressRefError = void 0),
          (this.getMenuProps.called = !1),
          (this.getMenuProps.refKey = void 0),
          (this.getMenuProps.suppressRefError = void 0),
          (this.getLabelProps.called = !1),
          (this.getInputProps.called = !1);
        let element = unwrapArray(children(this.getStateAndHelpers()));
        if (!element) return null;
        if (this.getRootProps.called || this.props.suppressRefError)
          return (
            !this.getRootProps.suppressRefError &&
              !this.props.suppressRefError &&
              validateGetRootPropsCalledCorrectly(element, this.getRootProps),
            element
          );
        if (isDOMElement(element))
          return (0, import_react20.cloneElement)(
            element,
            this.getRootProps(getElementProps(element)),
          );
        throw new Error(
          'downshift: If you return a non-DOM element, you must apply the getRootProps function',
        );
      }
    }
    return (
      (Downshift2.defaultProps = {
        defaultHighlightedIndex: null,
        defaultIsOpen: !1,
        getA11yStatusMessage: getA11yStatusMessage$1,
        itemToString: (i3) =>
          i3 == null
            ? ''
            : (isPlainObject(i3) &&
                !i3.hasOwnProperty('toString') &&
                console.warn(
                  'downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.',
                  'The object that was passed:',
                  i3,
                ),
              String(i3)),
        onStateChange: noop2,
        onInputValueChange: noop2,
        onUserAction: noop2,
        onChange: noop2,
        onSelect: noop2,
        onOuterClick: noop2,
        selectedItemChanged: (prevItem, item) => prevItem !== item,
        environment: typeof window > 'u' ? {} : window,
        stateReducer: (state, stateToSet) => stateToSet,
        suppressRefError: !1,
        scrollIntoView: scrollIntoView2,
      }),
      (Downshift2.stateChangeTypes = stateChangeTypes$3),
      Downshift2
    );
  })();
Downshift.propTypes = {
  children: import_prop_types2.default.func,
  defaultHighlightedIndex: import_prop_types2.default.number,
  defaultIsOpen: import_prop_types2.default.bool,
  initialHighlightedIndex: import_prop_types2.default.number,
  initialSelectedItem: import_prop_types2.default.any,
  initialInputValue: import_prop_types2.default.string,
  initialIsOpen: import_prop_types2.default.bool,
  getA11yStatusMessage: import_prop_types2.default.func,
  itemToString: import_prop_types2.default.func,
  onChange: import_prop_types2.default.func,
  onSelect: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onInputValueChange: import_prop_types2.default.func,
  onUserAction: import_prop_types2.default.func,
  onOuterClick: import_prop_types2.default.func,
  selectedItemChanged: import_prop_types2.default.func,
  stateReducer: import_prop_types2.default.func,
  itemCount: import_prop_types2.default.number,
  id: import_prop_types2.default.string,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any,
    }),
  }),
  suppressRefError: import_prop_types2.default.bool,
  scrollIntoView: import_prop_types2.default.func,
  selectedItem: import_prop_types2.default.any,
  isOpen: import_prop_types2.default.bool,
  inputValue: import_prop_types2.default.string,
  highlightedIndex: import_prop_types2.default.number,
  labelId: import_prop_types2.default.string,
  inputId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
};
var Downshift$1 = Downshift;
function validateGetMenuPropsCalledCorrectly(node, _ref3) {
  let { refKey } = _ref3;
  node ||
    console.error(
      `downshift: The ref prop "${refKey}" from getMenuProps was not applied correctly on your menu element.`,
    );
}
function validateGetRootPropsCalledCorrectly(element, _ref4) {
  let { refKey } = _ref4,
    refKeySpecified = refKey !== 'ref',
    isComposite = !isDOMElement(element);
  isComposite && !refKeySpecified && !(0, import_react_is.isForwardRef)(element)
    ? console.error(
        'downshift: You returned a non-DOM element. You must specify a refKey in getRootProps',
      )
    : !isComposite &&
      refKeySpecified &&
      console.error(
        `downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "${refKey}"`,
      ),
    !(0, import_react_is.isForwardRef)(element) &&
      !getElementProps(element)[refKey] &&
      console.error(
        `downshift: You must apply the ref prop "${refKey}" from getRootProps onto your root element.`,
      );
}
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: '',
};
function callOnChangeProps(action, state, newState) {
  let { props, type } = action,
    changes = {};
  Object.keys(state).forEach((key) => {
    invokeOnChangeHandler(key, action, state, newState),
      newState[key] !== state[key] && (changes[key] = newState[key]);
  }),
    props.onStateChange &&
      Object.keys(changes).length &&
      props.onStateChange({ type, ...changes });
}
function invokeOnChangeHandler(key, action, state, newState) {
  let { props, type } = action,
    handler = `on${capitalizeString(key)}Change`;
  props[handler] &&
    newState[key] !== void 0 &&
    newState[key] !== state[key] &&
    props[handler]({ type, ...newState });
}
function stateReducer(s2, a2) {
  return a2.changes;
}
function getA11ySelectionMessage(selectionParameters) {
  let { selectedItem, itemToString: itemToStringLocal } = selectionParameters;
  return selectedItem
    ? `${itemToStringLocal(selectedItem)} has been selected.`
    : '';
}
var updateA11yStatus = debounce((getA11yMessage, document10) => {
    setStatus(getA11yMessage(), document10);
  }, 200),
  useIsomorphicLayoutEffect =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
      ? import_react20.useLayoutEffect
      : import_react20.useEffect;
function useElementIds(_ref) {
  let {
    id = `downshift-${generateId()}`,
    labelId,
    menuId,
    getItemId,
    toggleButtonId,
    inputId,
  } = _ref;
  return (0, import_react20.useRef)({
    labelId: labelId || `${id}-label`,
    menuId: menuId || `${id}-menu`,
    getItemId: getItemId || ((index) => `${id}-item-${index}`),
    toggleButtonId: toggleButtonId || `${id}-toggle-button`,
    inputId: inputId || `${id}-input`,
  }).current;
}
function getItemIndex(index, item, items) {
  return index !== void 0
    ? index
    : items.length === 0
      ? -1
      : items.indexOf(item);
}
function itemToString(item) {
  return item ? String(item) : '';
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
function useLatestRef(val) {
  let ref = (0, import_react20.useRef)(val);
  return (ref.current = val), ref;
}
function useEnhancedReducer(reducer, initialState, props) {
  let prevStateRef = (0, import_react20.useRef)(),
    actionRef = (0, import_react20.useRef)(),
    enhancedReducer = (0, import_react20.useCallback)(
      (state2, action2) => {
        (actionRef.current = action2),
          (state2 = getState(state2, action2.props));
        let changes = reducer(state2, action2);
        return action2.props.stateReducer(state2, { ...action2, changes });
      },
      [reducer],
    ),
    [state, dispatch] = (0, import_react20.useReducer)(
      enhancedReducer,
      initialState,
    ),
    propsRef = useLatestRef(props),
    dispatchWithProps = (0, import_react20.useCallback)(
      (action2) => dispatch({ props: propsRef.current, ...action2 }),
      [propsRef],
    ),
    action = actionRef.current;
  return (
    (0, import_react20.useEffect)(() => {
      action &&
        prevStateRef.current &&
        prevStateRef.current !== state &&
        callOnChangeProps(
          action,
          getState(prevStateRef.current, action.props),
          state,
        ),
        (prevStateRef.current = state);
    }, [state, props, action]),
    [state, dispatchWithProps]
  );
}
function useControlledReducer$1(reducer, initialState, props) {
  let [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  return [getState(state, props), dispatch];
}
var defaultProps$3 = {
  itemToString,
  stateReducer,
  getA11ySelectionMessage,
  scrollIntoView: scrollIntoView2,
  circularNavigation: !1,
  environment: typeof window > 'u' ? {} : window,
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  defaultStateValues2 === void 0 &&
    (defaultStateValues2 = dropdownDefaultStateValues);
  let defaultValue = props[`default${capitalizeString(propKey)}`];
  return defaultValue !== void 0 ? defaultValue : defaultStateValues2[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues2) {
  defaultStateValues2 === void 0 &&
    (defaultStateValues2 = dropdownDefaultStateValues);
  let value = props[propKey];
  if (value !== void 0) return value;
  let initialValue = props[`initial${capitalizeString(propKey)}`];
  return initialValue !== void 0
    ? initialValue
    : getDefaultValue$1(props, propKey, defaultStateValues2);
}
function getInitialState$2(props) {
  let selectedItem = getInitialValue$1(props, 'selectedItem'),
    isOpen = getInitialValue$1(props, 'isOpen'),
    highlightedIndex = getInitialValue$1(props, 'highlightedIndex'),
    inputValue = getInitialValue$1(props, 'inputValue');
  return {
    highlightedIndex:
      highlightedIndex < 0 && selectedItem && isOpen
        ? props.items.indexOf(selectedItem)
        : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  let { items, initialHighlightedIndex, defaultHighlightedIndex } = props,
    { selectedItem, highlightedIndex } = state;
  return items.length === 0
    ? -1
    : initialHighlightedIndex !== void 0 &&
        highlightedIndex === initialHighlightedIndex
      ? initialHighlightedIndex
      : defaultHighlightedIndex !== void 0
        ? defaultHighlightedIndex
        : selectedItem
          ? offset === 0
            ? items.indexOf(selectedItem)
            : getNextWrappingIndex(
                offset,
                items.indexOf(selectedItem),
                items.length,
                getItemNodeFromIndex,
                !1,
              )
          : offset === 0
            ? -1
            : offset < 0
              ? items.length - 1
              : 0;
}
function useMouseAndTouchTracker(
  isOpen,
  downshiftElementRefs,
  environment,
  handleBlur,
) {
  let mouseAndTouchTrackersRef = (0, import_react20.useRef)({
    isMouseDown: !1,
    isTouchMove: !1,
  });
  return (
    (0, import_react20.useEffect)(() => {
      let onMouseDown = () => {
          mouseAndTouchTrackersRef.current.isMouseDown = !0;
        },
        onMouseUp = (event) => {
          (mouseAndTouchTrackersRef.current.isMouseDown = !1),
            isOpen &&
              !targetWithinDownshift(
                event.target,
                downshiftElementRefs.map((ref) => ref.current),
                environment,
              ) &&
              handleBlur();
        },
        onTouchStart = () => {
          mouseAndTouchTrackersRef.current.isTouchMove = !1;
        },
        onTouchMove = () => {
          mouseAndTouchTrackersRef.current.isTouchMove = !0;
        },
        onTouchEnd = (event) => {
          isOpen &&
            !mouseAndTouchTrackersRef.current.isTouchMove &&
            !targetWithinDownshift(
              event.target,
              downshiftElementRefs.map((ref) => ref.current),
              environment,
              !1,
            ) &&
            handleBlur();
        };
      return (
        environment.addEventListener('mousedown', onMouseDown),
        environment.addEventListener('mouseup', onMouseUp),
        environment.addEventListener('touchstart', onTouchStart),
        environment.addEventListener('touchmove', onTouchMove),
        environment.addEventListener('touchend', onTouchEnd),
        function () {
          environment.removeEventListener('mousedown', onMouseDown),
            environment.removeEventListener('mouseup', onMouseUp),
            environment.removeEventListener('touchstart', onTouchStart),
            environment.removeEventListener('touchmove', onTouchMove),
            environment.removeEventListener('touchend', onTouchEnd);
        }
      );
    }, [isOpen, environment]),
    mouseAndTouchTrackersRef
  );
}
var useGetterPropsCalledChecker = () => noop2;
useGetterPropsCalledChecker = function () {
  let isInitialMountRef = (0, import_react20.useRef)(!0);
  for (
    var _len = arguments.length, propKeys = new Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    propKeys[_key] = arguments[_key];
  let getterPropsCalledRef = (0, import_react20.useRef)(
    propKeys.reduce((acc, propKey) => ((acc[propKey] = {}), acc), {}),
  );
  return (
    (0, import_react20.useEffect)(() => {
      Object.keys(getterPropsCalledRef.current).forEach((propKey) => {
        let propCallInfo = getterPropsCalledRef.current[propKey];
        if (isInitialMountRef.current && !Object.keys(propCallInfo).length) {
          console.error(
            `downshift: You forgot to call the ${propKey} getter function on your component / element.`,
          );
          return;
        }
        let { suppressRefError, refKey, elementRef } = propCallInfo;
        (!elementRef || !elementRef.current) &&
          !suppressRefError &&
          console.error(
            `downshift: The ref prop "${refKey}" from ${propKey} was not applied correctly on your element.`,
          );
      }),
        (isInitialMountRef.current = !1);
    }),
    (0, import_react20.useCallback)(
      (propKey, suppressRefError, refKey, elementRef) => {
        getterPropsCalledRef.current[propKey] = {
          suppressRefError,
          refKey,
          elementRef,
        };
      },
      [],
    )
  );
};
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  let { isInitialMount, highlightedIndex, items, environment, ...rest } = _ref2;
  (0, import_react20.useEffect)(() => {
    isInitialMount ||
      updateA11yStatus(
        () =>
          getA11yMessage({
            highlightedIndex,
            highlightedItem: items[highlightedIndex],
            resultCount: items.length,
            ...rest,
          }),
        environment.document,
      );
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  let {
      highlightedIndex,
      isOpen,
      itemRefs,
      getItemNodeFromIndex,
      menuElement,
      scrollIntoView: scrollIntoViewProp,
    } = _ref3,
    shouldScrollRef = (0, import_react20.useRef)(!0);
  return (
    useIsomorphicLayoutEffect(() => {
      highlightedIndex < 0 ||
        !isOpen ||
        !Object.keys(itemRefs.current).length ||
        (shouldScrollRef.current === !1
          ? (shouldScrollRef.current = !0)
          : scrollIntoViewProp(
              getItemNodeFromIndex(highlightedIndex),
              menuElement,
            ));
    }, [highlightedIndex]),
    shouldScrollRef
  );
}
var useControlPropsValidator = noop2;
useControlPropsValidator = (_ref4) => {
  let { isInitialMount, props, state } = _ref4,
    prevPropsRef = (0, import_react20.useRef)(props);
  (0, import_react20.useEffect)(() => {
    isInitialMount ||
      (validateControlledUnchanged(state, prevPropsRef.current, props),
      (prevPropsRef.current = props));
  }, [state, props, isInitialMount]);
};
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  let { type, props } = action,
    changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = { highlightedIndex: action.disabled ? -1 : action.index };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = { highlightedIndex: -1 };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen
          ? -1
          : getHighlightedIndexOnOpen(props, state, 0),
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: !0,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0),
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = { isOpen: !1 };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = { highlightedIndex: action.highlightedIndex };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = { inputValue: action.inputValue };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        isOpen: getDefaultValue$1(props, 'isOpen'),
        selectedItem: getDefaultValue$1(props, 'selectedItem'),
        inputValue: getDefaultValue$1(props, 'inputValue'),
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }
  return { ...state, ...changes };
}
function getItemIndexByCharacterKey(_a) {
  for (
    var keysSoFar = _a.keysSoFar,
      highlightedIndex = _a.highlightedIndex,
      items = _a.items,
      itemToString2 = _a.itemToString,
      getItemNodeFromIndex = _a.getItemNodeFromIndex,
      lowerCasedKeysSoFar = keysSoFar.toLowerCase(),
      index = 0;
    index < items.length;
    index++
  ) {
    var offsetIndex = (index + highlightedIndex + 1) % items.length,
      item = items[offsetIndex];
    if (
      item !== void 0 &&
      itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar)
    ) {
      var element = getItemNodeFromIndex(offsetIndex);
      if (!element?.hasAttribute('disabled')) return offsetIndex;
    }
  }
  return highlightedIndex;
}
var propTypes$2 = {
  items: import_prop_types2.default.array.isRequired,
  itemToString: import_prop_types2.default.func,
  getA11yStatusMessage: import_prop_types2.default.func,
  getA11ySelectionMessage: import_prop_types2.default.func,
  circularNavigation: import_prop_types2.default.bool,
  highlightedIndex: import_prop_types2.default.number,
  defaultHighlightedIndex: import_prop_types2.default.number,
  initialHighlightedIndex: import_prop_types2.default.number,
  isOpen: import_prop_types2.default.bool,
  defaultIsOpen: import_prop_types2.default.bool,
  initialIsOpen: import_prop_types2.default.bool,
  selectedItem: import_prop_types2.default.any,
  initialSelectedItem: import_prop_types2.default.any,
  defaultSelectedItem: import_prop_types2.default.any,
  id: import_prop_types2.default.string,
  labelId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
  toggleButtonId: import_prop_types2.default.string,
  stateReducer: import_prop_types2.default.func,
  onSelectedItemChange: import_prop_types2.default.func,
  onHighlightedIndexChange: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onIsOpenChange: import_prop_types2.default.func,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any,
    }),
  }),
};
function getA11yStatusMessage(_a) {
  var isOpen = _a.isOpen,
    resultCount = _a.resultCount,
    previousResultCount = _a.previousResultCount;
  return isOpen
    ? resultCount
      ? resultCount !== previousResultCount
        ? ''
            .concat(resultCount, ' result')
            .concat(
              resultCount === 1 ? ' is' : 's are',
              ' available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.',
            )
        : ''
      : 'No results are available.'
    : '';
}
var defaultProps$2 = __assign(__assign({}, defaultProps$3), {
    getA11yStatusMessage,
  }),
  validatePropTypes$2 = noop2;
validatePropTypes$2 = function (options2, caller) {
  import_prop_types2.default.checkPropTypes(
    propTypes$2,
    options2,
    'prop',
    caller.name,
  );
};
var MenuKeyDownArrowDown = '__menu_keydown_arrow_down__',
  MenuKeyDownArrowUp = '__menu_keydown_arrow_up__',
  MenuKeyDownEscape = '__menu_keydown_escape__',
  MenuKeyDownHome = '__menu_keydown_home__',
  MenuKeyDownEnd = '__menu_keydown_end__',
  MenuKeyDownEnter = '__menu_keydown_enter__',
  MenuKeyDownSpaceButton = '__menu_keydown_space_button__',
  MenuKeyDownCharacter = '__menu_keydown_character__',
  MenuBlur = '__menu_blur__',
  MenuMouseLeave$1 = '__menu_mouse_leave__',
  ItemMouseMove$1 = '__item_mouse_move__',
  ItemClick$1 = '__item_click__',
  ToggleButtonClick$1 = '__togglebutton_click__',
  ToggleButtonKeyDownArrowDown = '__togglebutton_keydown_arrow_down__',
  ToggleButtonKeyDownArrowUp = '__togglebutton_keydown_arrow_up__',
  ToggleButtonKeyDownCharacter = '__togglebutton_keydown_character__',
  FunctionToggleMenu$1 = '__function_toggle_menu__',
  FunctionOpenMenu$1 = '__function_open_menu__',
  FunctionCloseMenu$1 = '__function_close_menu__',
  FunctionSetHighlightedIndex$1 = '__function_set_highlighted_index__',
  FunctionSelectItem$1 = '__function_select_item__',
  FunctionSetInputValue$1 = '__function_set_input_value__',
  FunctionReset$2 = '__function_reset__',
  stateChangeTypes$2 = Object.freeze({
    __proto__: null,
    MenuKeyDownArrowDown,
    MenuKeyDownArrowUp,
    MenuKeyDownEscape,
    MenuKeyDownHome,
    MenuKeyDownEnd,
    MenuKeyDownEnter,
    MenuKeyDownSpaceButton,
    MenuKeyDownCharacter,
    MenuBlur,
    MenuMouseLeave: MenuMouseLeave$1,
    ItemMouseMove: ItemMouseMove$1,
    ItemClick: ItemClick$1,
    ToggleButtonClick: ToggleButtonClick$1,
    ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownCharacter,
    FunctionToggleMenu: FunctionToggleMenu$1,
    FunctionOpenMenu: FunctionOpenMenu$1,
    FunctionCloseMenu: FunctionCloseMenu$1,
    FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
    FunctionSelectItem: FunctionSelectItem$1,
    FunctionSetInputValue: FunctionSetInputValue$1,
    FunctionReset: FunctionReset$2,
  });
function downshiftSelectReducer(state, action) {
  let { type, props, shiftKey } = action,
    changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        let lowercasedKey = action.key,
          inputValue = `${state.inputValue}${lowercasedKey}`,
          itemIndex = getItemIndexByCharacterKey({
            keysSoFar: inputValue,
            highlightedIndex: state.selectedItem
              ? props.items.indexOf(state.selectedItem)
              : -1,
            items: props.items,
            itemToString: props.itemToString,
            getItemNodeFromIndex: action.getItemNodeFromIndex,
          });
        changes = {
          inputValue,
          ...(itemIndex >= 0 && { selectedItem: props.items[itemIndex] }),
        };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(
          props,
          state,
          1,
          action.getItemNodeFromIndex,
        ),
        isOpen: !0,
      };
      break;
    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(
          props,
          state,
          -1,
          action.getItemNodeFromIndex,
        ),
        isOpen: !0,
      };
      break;
    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        ...(state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
        }),
      };
      break;
    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(
          1,
          0,
          props.items.length,
          action.getItemNodeFromIndex,
          !1,
        ),
      };
      break;
    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(
          -1,
          props.items.length - 1,
          props.items.length,
          action.getItemNodeFromIndex,
          !1,
        ),
      };
      break;
    case MenuKeyDownEscape:
      changes = { isOpen: !1, highlightedIndex: -1 };
      break;
    case MenuBlur:
      changes = { isOpen: !1, highlightedIndex: -1 };
      break;
    case MenuKeyDownCharacter:
      {
        let lowercasedKey = action.key,
          inputValue = `${state.inputValue}${lowercasedKey}`,
          highlightedIndex = getItemIndexByCharacterKey({
            keysSoFar: inputValue,
            highlightedIndex: state.highlightedIndex,
            items: props.items,
            itemToString: props.itemToString,
            getItemNodeFromIndex: action.getItemNodeFromIndex,
          });
        changes = {
          inputValue,
          ...(highlightedIndex >= 0 && { highlightedIndex }),
        };
      }
      break;
    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(
          shiftKey ? 5 : 1,
          state.highlightedIndex,
          props.items.length,
          action.getItemNodeFromIndex,
          props.circularNavigation,
        ),
      };
      break;
    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(
          shiftKey ? -5 : -1,
          state.highlightedIndex,
          props.items.length,
          action.getItemNodeFromIndex,
          props.circularNavigation,
        ),
      };
      break;
    case FunctionSelectItem$1:
      changes = { selectedItem: action.selectedItem };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return { ...state, ...changes };
}
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes$2(userProps, useSelect);
  let props = { ...defaultProps$2, ...userProps },
    {
      items,
      scrollIntoView: scrollIntoView3,
      environment,
      initialIsOpen,
      defaultIsOpen,
      itemToString: itemToString2,
      getA11ySelectionMessage: getA11ySelectionMessage2,
      getA11yStatusMessage: getA11yStatusMessage2,
    } = props,
    initialState = getInitialState$2(props),
    [state, dispatch] = useControlledReducer$1(
      downshiftSelectReducer,
      initialState,
      props,
    ),
    { isOpen, highlightedIndex, selectedItem, inputValue } = state,
    toggleButtonRef = (0, import_react20.useRef)(null),
    menuRef = (0, import_react20.useRef)(null),
    itemRefs = (0, import_react20.useRef)({}),
    shouldBlurRef = (0, import_react20.useRef)(!0),
    clearTimeoutRef = (0, import_react20.useRef)(null),
    elementIds = useElementIds(props),
    previousResultCountRef = (0, import_react20.useRef)(),
    isInitialMountRef = (0, import_react20.useRef)(!0),
    latest = useLatestRef({ state, props }),
    getItemNodeFromIndex = (0, import_react20.useCallback)(
      (index) => itemRefs.current[elementIds.getItemId(index)],
      [elementIds],
    );
  useA11yMessageSetter(
    getA11yStatusMessage2,
    [isOpen, highlightedIndex, inputValue, items],
    {
      isInitialMount: isInitialMountRef.current,
      previousResultCount: previousResultCountRef.current,
      items,
      environment,
      itemToString: itemToString2,
      ...state,
    },
  ),
    useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
      isInitialMount: isInitialMountRef.current,
      previousResultCount: previousResultCountRef.current,
      items,
      environment,
      itemToString: itemToString2,
      ...state,
    });
  let shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex,
  });
  (0, import_react20.useEffect)(
    () => (
      (clearTimeoutRef.current = debounce((outerDispatch) => {
        outerDispatch({ type: FunctionSetInputValue$1, inputValue: '' });
      }, 500)),
      () => {
        clearTimeoutRef.current.cancel();
      }
    ),
    [],
  ),
    (0, import_react20.useEffect)(() => {
      inputValue && clearTimeoutRef.current(dispatch);
    }, [dispatch, inputValue]),
    useControlPropsValidator({
      isInitialMount: isInitialMountRef.current,
      props,
      state,
    }),
    (0, import_react20.useEffect)(() => {
      if (isInitialMountRef.current) {
        (initialIsOpen || defaultIsOpen || isOpen) &&
          menuRef.current &&
          menuRef.current.focus();
        return;
      }
      if (isOpen) {
        menuRef.current && menuRef.current.focus();
        return;
      }
      environment.document.activeElement === menuRef.current &&
        toggleButtonRef.current &&
        ((shouldBlurRef.current = !1), toggleButtonRef.current.focus());
    }, [isOpen]),
    (0, import_react20.useEffect)(() => {
      isInitialMountRef.current ||
        (previousResultCountRef.current = items.length);
    });
  let mouseAndTouchTrackersRef = useMouseAndTouchTracker(
      isOpen,
      [menuRef, toggleButtonRef],
      environment,
      () => {
        dispatch({ type: MenuBlur });
      },
    ),
    setGetterPropCallInfo = useGetterPropsCalledChecker(
      'getMenuProps',
      'getToggleButtonProps',
    );
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = !1;
  }, []),
    (0, import_react20.useEffect)(() => {
      isOpen || (itemRefs.current = {});
    }, [isOpen]);
  let toggleButtonKeyDownHandlers = (0, import_react20.useMemo)(
      () => ({
        ArrowDown(event) {
          event.preventDefault(),
            dispatch({
              type: ToggleButtonKeyDownArrowDown,
              getItemNodeFromIndex,
              shiftKey: event.shiftKey,
            });
        },
        ArrowUp(event) {
          event.preventDefault(),
            dispatch({
              type: ToggleButtonKeyDownArrowUp,
              getItemNodeFromIndex,
              shiftKey: event.shiftKey,
            });
        },
      }),
      [dispatch, getItemNodeFromIndex],
    ),
    menuKeyDownHandlers = (0, import_react20.useMemo)(
      () => ({
        ArrowDown(event) {
          event.preventDefault(),
            dispatch({
              type: MenuKeyDownArrowDown,
              getItemNodeFromIndex,
              shiftKey: event.shiftKey,
            });
        },
        ArrowUp(event) {
          event.preventDefault(),
            dispatch({
              type: MenuKeyDownArrowUp,
              getItemNodeFromIndex,
              shiftKey: event.shiftKey,
            });
        },
        Home(event) {
          event.preventDefault(),
            dispatch({ type: MenuKeyDownHome, getItemNodeFromIndex });
        },
        End(event) {
          event.preventDefault(),
            dispatch({ type: MenuKeyDownEnd, getItemNodeFromIndex });
        },
        Escape() {
          dispatch({ type: MenuKeyDownEscape });
        },
        Enter(event) {
          event.preventDefault(), dispatch({ type: MenuKeyDownEnter });
        },
        ' '(event) {
          event.preventDefault(), dispatch({ type: MenuKeyDownSpaceButton });
        },
      }),
      [dispatch, getItemNodeFromIndex],
    ),
    toggleMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionToggleMenu$1 });
    }, [dispatch]),
    closeMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionCloseMenu$1 });
    }, [dispatch]),
    openMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionOpenMenu$1 });
    }, [dispatch]),
    setHighlightedIndex = (0, import_react20.useCallback)(
      (newHighlightedIndex) => {
        dispatch({
          type: FunctionSetHighlightedIndex$1,
          highlightedIndex: newHighlightedIndex,
        });
      },
      [dispatch],
    ),
    selectItem = (0, import_react20.useCallback)(
      (newSelectedItem) => {
        dispatch({ type: FunctionSelectItem$1, selectedItem: newSelectedItem });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionReset$2 });
    }, [dispatch]),
    setInputValue = (0, import_react20.useCallback)(
      (newInputValue) => {
        dispatch({ type: FunctionSetInputValue$1, inputValue: newInputValue });
      },
      [dispatch],
    ),
    getLabelProps = (0, import_react20.useCallback)(
      (labelProps) => ({
        id: elementIds.labelId,
        htmlFor: elementIds.toggleButtonId,
        ...labelProps,
      }),
      [elementIds],
    ),
    getMenuProps = (0, import_react20.useCallback)(
      function (_temp, _temp2) {
        let {
            onMouseLeave,
            refKey = 'ref',
            onKeyDown,
            onBlur,
            ref,
            ...rest
          } = _temp === void 0 ? {} : _temp,
          { suppressRefError = !1 } = _temp2 === void 0 ? {} : _temp2,
          latestState = latest.current.state,
          menuHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key && menuKeyDownHandlers[key]
              ? menuKeyDownHandlers[key](event)
              : isAcceptedCharacterKey(key) &&
                dispatch({
                  type: MenuKeyDownCharacter,
                  key,
                  getItemNodeFromIndex,
                });
          },
          menuHandleBlur = () => {
            if (shouldBlurRef.current === !1) {
              shouldBlurRef.current = !0;
              return;
            }
            !mouseAndTouchTrackersRef.current.isMouseDown &&
              dispatch({ type: MenuBlur });
          },
          menuHandleMouseLeave = () => {
            dispatch({ type: MenuMouseLeave$1 });
          };
        return (
          setGetterPropCallInfo(
            'getMenuProps',
            suppressRefError,
            refKey,
            menuRef,
          ),
          {
            [refKey]: handleRefs(ref, (menuNode) => {
              menuRef.current = menuNode;
            }),
            id: elementIds.menuId,
            role: 'listbox',
            'aria-labelledby': elementIds.labelId,
            tabIndex: -1,
            ...(latestState.isOpen &&
              latestState.highlightedIndex > -1 && {
                'aria-activedescendant': elementIds.getItemId(
                  latestState.highlightedIndex,
                ),
              }),
            onMouseLeave: callAllEventHandlers(
              onMouseLeave,
              menuHandleMouseLeave,
            ),
            onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
            onBlur: callAllEventHandlers(onBlur, menuHandleBlur),
            ...rest,
          }
        );
      },
      [
        dispatch,
        latest,
        menuKeyDownHandlers,
        mouseAndTouchTrackersRef,
        setGetterPropCallInfo,
        elementIds,
        getItemNodeFromIndex,
      ],
    ),
    getToggleButtonProps = (0, import_react20.useCallback)(
      function (_temp3, _temp4) {
        let {
            onClick,
            onKeyDown,
            refKey = 'ref',
            ref,
            ...rest
          } = _temp3 === void 0 ? {} : _temp3,
          { suppressRefError = !1 } = _temp4 === void 0 ? {} : _temp4,
          toggleButtonHandleClick = () => {
            dispatch({ type: ToggleButtonClick$1 });
          },
          toggleButtonHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key && toggleButtonKeyDownHandlers[key]
              ? toggleButtonKeyDownHandlers[key](event)
              : isAcceptedCharacterKey(key) &&
                dispatch({
                  type: ToggleButtonKeyDownCharacter,
                  key,
                  getItemNodeFromIndex,
                });
          },
          toggleProps = {
            [refKey]: handleRefs(ref, (toggleButtonNode) => {
              toggleButtonRef.current = toggleButtonNode;
            }),
            id: elementIds.toggleButtonId,
            'aria-haspopup': 'listbox',
            'aria-expanded': latest.current.state.isOpen,
            'aria-labelledby': `${elementIds.labelId} ${elementIds.toggleButtonId}`,
            ...rest,
          };
        return (
          rest.disabled ||
            ((toggleProps.onClick = callAllEventHandlers(
              onClick,
              toggleButtonHandleClick,
            )),
            (toggleProps.onKeyDown = callAllEventHandlers(
              onKeyDown,
              toggleButtonHandleKeyDown,
            ))),
          setGetterPropCallInfo(
            'getToggleButtonProps',
            suppressRefError,
            refKey,
            toggleButtonRef,
          ),
          toggleProps
        );
      },
      [
        dispatch,
        latest,
        toggleButtonKeyDownHandlers,
        setGetterPropCallInfo,
        elementIds,
        getItemNodeFromIndex,
      ],
    ),
    getItemProps = (0, import_react20.useCallback)(
      function (_temp5) {
        let {
            item,
            index,
            onMouseMove,
            onClick,
            refKey = 'ref',
            ref,
            disabled,
            ...rest
          } = _temp5 === void 0 ? {} : _temp5,
          { state: latestState, props: latestProps } = latest.current,
          itemHandleMouseMove = () => {
            index !== latestState.highlightedIndex &&
              ((shouldScrollRef.current = !1),
              dispatch({ type: ItemMouseMove$1, index, disabled }));
          },
          itemHandleClick = () => {
            dispatch({ type: ItemClick$1, index });
          },
          itemIndex = getItemIndex(index, item, latestProps.items);
        if (itemIndex < 0)
          throw new Error('Pass either item or item index in getItemProps!');
        let itemProps = {
          disabled,
          role: 'option',
          'aria-selected': `${itemIndex === latestState.highlightedIndex}`,
          id: elementIds.getItemId(itemIndex),
          [refKey]: handleRefs(ref, (itemNode) => {
            itemNode &&
              (itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode);
          }),
          ...rest,
        };
        return (
          disabled ||
            (itemProps.onClick = callAllEventHandlers(
              onClick,
              itemHandleClick,
            )),
          (itemProps.onMouseMove = callAllEventHandlers(
            onMouseMove,
            itemHandleMouseMove,
          )),
          itemProps
        );
      },
      [dispatch, latest, shouldScrollRef, elementIds],
    );
  return {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
var InputKeyDownArrowDown = '__input_keydown_arrow_down__',
  InputKeyDownArrowUp = '__input_keydown_arrow_up__',
  InputKeyDownEscape = '__input_keydown_escape__',
  InputKeyDownHome = '__input_keydown_home__',
  InputKeyDownEnd = '__input_keydown_end__',
  InputKeyDownEnter = '__input_keydown_enter__',
  InputChange = '__input_change__',
  InputBlur = '__input_blur__',
  MenuMouseLeave = '__menu_mouse_leave__',
  ItemMouseMove = '__item_mouse_move__',
  ItemClick = '__item_click__',
  ToggleButtonClick = '__togglebutton_click__',
  FunctionToggleMenu = '__function_toggle_menu__',
  FunctionOpenMenu = '__function_open_menu__',
  FunctionCloseMenu = '__function_close_menu__',
  FunctionSetHighlightedIndex = '__function_set_highlighted_index__',
  FunctionSelectItem = '__function_select_item__',
  FunctionSetInputValue = '__function_set_input_value__',
  FunctionReset$1 = '__function_reset__',
  ControlledPropUpdatedSelectedItem =
    '__controlled_prop_updated_selected_item__',
  stateChangeTypes$1 = Object.freeze({
    __proto__: null,
    InputKeyDownArrowDown,
    InputKeyDownArrowUp,
    InputKeyDownEscape,
    InputKeyDownHome,
    InputKeyDownEnd,
    InputKeyDownEnter,
    InputChange,
    InputBlur,
    MenuMouseLeave,
    ItemMouseMove,
    ItemClick,
    ToggleButtonClick,
    FunctionToggleMenu,
    FunctionOpenMenu,
    FunctionCloseMenu,
    FunctionSetHighlightedIndex,
    FunctionSelectItem,
    FunctionSetInputValue,
    FunctionReset: FunctionReset$1,
    ControlledPropUpdatedSelectedItem,
  });
function getInitialState$1(props) {
  let initialState = getInitialState$2(props),
    { selectedItem } = initialState,
    { inputValue } = initialState;
  return (
    inputValue === '' &&
      selectedItem &&
      props.defaultInputValue === void 0 &&
      props.initialInputValue === void 0 &&
      props.inputValue === void 0 &&
      (inputValue = props.itemToString(selectedItem)),
    { ...initialState, inputValue }
  );
}
var propTypes$1 = {
  items: import_prop_types2.default.array.isRequired,
  itemToString: import_prop_types2.default.func,
  getA11yStatusMessage: import_prop_types2.default.func,
  getA11ySelectionMessage: import_prop_types2.default.func,
  circularNavigation: import_prop_types2.default.bool,
  highlightedIndex: import_prop_types2.default.number,
  defaultHighlightedIndex: import_prop_types2.default.number,
  initialHighlightedIndex: import_prop_types2.default.number,
  isOpen: import_prop_types2.default.bool,
  defaultIsOpen: import_prop_types2.default.bool,
  initialIsOpen: import_prop_types2.default.bool,
  selectedItem: import_prop_types2.default.any,
  initialSelectedItem: import_prop_types2.default.any,
  defaultSelectedItem: import_prop_types2.default.any,
  inputValue: import_prop_types2.default.string,
  defaultInputValue: import_prop_types2.default.string,
  initialInputValue: import_prop_types2.default.string,
  id: import_prop_types2.default.string,
  labelId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
  inputId: import_prop_types2.default.string,
  toggleButtonId: import_prop_types2.default.string,
  stateReducer: import_prop_types2.default.func,
  onSelectedItemChange: import_prop_types2.default.func,
  onHighlightedIndexChange: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onIsOpenChange: import_prop_types2.default.func,
  onInputValueChange: import_prop_types2.default.func,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func,
    removeEventListener: import_prop_types2.default.func,
    document: import_prop_types2.default.shape({
      getElementById: import_prop_types2.default.func,
      activeElement: import_prop_types2.default.any,
      body: import_prop_types2.default.any,
    }),
  }),
};
function useControlledReducer(reducer, initialState, props) {
  let previousSelectedItemRef = (0, import_react20.useRef)(),
    [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  return (
    (0, import_react20.useEffect)(() => {
      isControlledProp(props, 'selectedItem') &&
        (previousSelectedItemRef.current !== props.selectedItem &&
          dispatch({
            type: ControlledPropUpdatedSelectedItem,
            inputValue: props.itemToString(props.selectedItem),
          }),
        (previousSelectedItemRef.current =
          state.selectedItem === previousSelectedItemRef.current
            ? props.selectedItem
            : state.selectedItem));
    }),
    [getState(state, props), dispatch]
  );
}
var validatePropTypes$1 = noop2;
validatePropTypes$1 = (options2, caller) => {
  import_prop_types2.default.checkPropTypes(
    propTypes$1,
    options2,
    'prop',
    caller.name,
  );
};
var defaultProps$1 = {
  ...defaultProps$3,
  getA11yStatusMessage: getA11yStatusMessage$1,
  circularNavigation: !0,
};
function downshiftUseComboboxReducer(state, action) {
  let { type, props, shiftKey } = action,
    changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index]),
      };
      break;
    case InputKeyDownArrowDown:
      state.isOpen
        ? (changes = {
            highlightedIndex: getNextWrappingIndex(
              shiftKey ? 5 : 1,
              state.highlightedIndex,
              props.items.length,
              action.getItemNodeFromIndex,
              props.circularNavigation,
            ),
          })
        : (changes = {
            highlightedIndex: getHighlightedIndexOnOpen(
              props,
              state,
              1,
              action.getItemNodeFromIndex,
            ),
            isOpen: props.items.length >= 0,
          });
      break;
    case InputKeyDownArrowUp:
      state.isOpen
        ? (changes = {
            highlightedIndex: getNextWrappingIndex(
              shiftKey ? -5 : -1,
              state.highlightedIndex,
              props.items.length,
              action.getItemNodeFromIndex,
              props.circularNavigation,
            ),
          })
        : (changes = {
            highlightedIndex: getHighlightedIndexOnOpen(
              props,
              state,
              -1,
              action.getItemNodeFromIndex,
            ),
            isOpen: props.items.length >= 0,
          });
      break;
    case InputKeyDownEnter:
      changes = {
        ...(state.isOpen &&
          state.highlightedIndex >= 0 && {
            selectedItem: props.items[state.highlightedIndex],
            isOpen: getDefaultValue$1(props, 'isOpen'),
            highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
            inputValue: props.itemToString(props.items[state.highlightedIndex]),
          }),
      };
      break;
    case InputKeyDownEscape:
      changes = {
        isOpen: !1,
        highlightedIndex: -1,
        ...(!state.isOpen && { selectedItem: null, inputValue: '' }),
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(
          1,
          0,
          props.items.length,
          action.getItemNodeFromIndex,
          !1,
        ),
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(
          -1,
          props.items.length - 1,
          props.items.length,
          action.getItemNodeFromIndex,
          !1,
        ),
      };
      break;
    case InputBlur:
      changes = {
        isOpen: !1,
        highlightedIndex: -1,
        ...(state.highlightedIndex >= 0 &&
          action.selectItem && {
            selectedItem: props.items[state.highlightedIndex],
            inputValue: props.itemToString(props.items[state.highlightedIndex]),
          }),
      };
      break;
    case InputChange:
      changes = {
        isOpen: !0,
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        inputValue: action.inputValue,
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem),
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = { inputValue: action.inputValue };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return { ...state, ...changes };
}
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes$1(userProps, useCombobox);
  let props = { ...defaultProps$1, ...userProps },
    {
      initialIsOpen,
      defaultIsOpen,
      items,
      scrollIntoView: scrollIntoView3,
      environment,
      getA11yStatusMessage: getA11yStatusMessage2,
      getA11ySelectionMessage: getA11ySelectionMessage2,
      itemToString: itemToString2,
    } = props,
    initialState = getInitialState$1(props),
    [state, dispatch] = useControlledReducer(
      downshiftUseComboboxReducer,
      initialState,
      props,
    ),
    { isOpen, highlightedIndex, selectedItem, inputValue } = state,
    menuRef = (0, import_react20.useRef)(null),
    itemRefs = (0, import_react20.useRef)({}),
    inputRef = (0, import_react20.useRef)(null),
    toggleButtonRef = (0, import_react20.useRef)(null),
    comboboxRef = (0, import_react20.useRef)(null),
    isInitialMountRef = (0, import_react20.useRef)(!0),
    elementIds = useElementIds(props),
    previousResultCountRef = (0, import_react20.useRef)(),
    latest = useLatestRef({ state, props }),
    getItemNodeFromIndex = (0, import_react20.useCallback)(
      (index) => itemRefs.current[elementIds.getItemId(index)],
      [elementIds],
    );
  useA11yMessageSetter(
    getA11yStatusMessage2,
    [isOpen, highlightedIndex, inputValue, items],
    {
      isInitialMount: isInitialMountRef.current,
      previousResultCount: previousResultCountRef.current,
      items,
      environment,
      itemToString: itemToString2,
      ...state,
    },
  ),
    useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
      isInitialMount: isInitialMountRef.current,
      previousResultCount: previousResultCountRef.current,
      items,
      environment,
      itemToString: itemToString2,
      ...state,
    });
  let shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex,
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state,
  }),
    (0, import_react20.useEffect)(() => {
      (initialIsOpen || defaultIsOpen || isOpen) &&
        inputRef.current &&
        inputRef.current.focus();
    }, []),
    (0, import_react20.useEffect)(() => {
      isInitialMountRef.current ||
        (previousResultCountRef.current = items.length);
    });
  let mouseAndTouchTrackersRef = useMouseAndTouchTracker(
      isOpen,
      [comboboxRef, menuRef, toggleButtonRef],
      environment,
      () => {
        dispatch({ type: InputBlur, selectItem: !1 });
      },
    ),
    setGetterPropCallInfo = useGetterPropsCalledChecker(
      'getInputProps',
      'getComboboxProps',
      'getMenuProps',
    );
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = !1;
  }, []),
    (0, import_react20.useEffect)(() => {
      isOpen || (itemRefs.current = {});
    }, [isOpen]);
  let inputKeyDownHandlers = (0, import_react20.useMemo)(
      () => ({
        ArrowDown(event) {
          event.preventDefault(),
            dispatch({
              type: InputKeyDownArrowDown,
              shiftKey: event.shiftKey,
              getItemNodeFromIndex,
            });
        },
        ArrowUp(event) {
          event.preventDefault(),
            dispatch({
              type: InputKeyDownArrowUp,
              shiftKey: event.shiftKey,
              getItemNodeFromIndex,
            });
        },
        Home(event) {
          latest.current.state.isOpen &&
            (event.preventDefault(),
            dispatch({ type: InputKeyDownHome, getItemNodeFromIndex }));
        },
        End(event) {
          latest.current.state.isOpen &&
            (event.preventDefault(),
            dispatch({ type: InputKeyDownEnd, getItemNodeFromIndex }));
        },
        Escape(event) {
          let latestState = latest.current.state;
          (latestState.isOpen ||
            latestState.inputValue ||
            latestState.selectedItem ||
            latestState.highlightedIndex > -1) &&
            (event.preventDefault(), dispatch({ type: InputKeyDownEscape }));
        },
        Enter(event) {
          let latestState = latest.current.state;
          !latestState.isOpen ||
            latestState.highlightedIndex < 0 ||
            event.which === 229 ||
            (event.preventDefault(),
            dispatch({ type: InputKeyDownEnter, getItemNodeFromIndex }));
        },
      }),
      [dispatch, latest, getItemNodeFromIndex],
    ),
    getLabelProps = (0, import_react20.useCallback)(
      (labelProps) => ({
        id: elementIds.labelId,
        htmlFor: elementIds.inputId,
        ...labelProps,
      }),
      [elementIds],
    ),
    getMenuProps = (0, import_react20.useCallback)(
      function (_temp, _temp2) {
        let {
            onMouseLeave,
            refKey = 'ref',
            ref,
            ...rest
          } = _temp === void 0 ? {} : _temp,
          { suppressRefError = !1 } = _temp2 === void 0 ? {} : _temp2;
        return (
          setGetterPropCallInfo(
            'getMenuProps',
            suppressRefError,
            refKey,
            menuRef,
          ),
          {
            [refKey]: handleRefs(ref, (menuNode) => {
              menuRef.current = menuNode;
            }),
            id: elementIds.menuId,
            role: 'listbox',
            'aria-labelledby': elementIds.labelId,
            onMouseLeave: callAllEventHandlers(onMouseLeave, () => {
              dispatch({ type: MenuMouseLeave });
            }),
            ...rest,
          }
        );
      },
      [dispatch, setGetterPropCallInfo, elementIds],
    ),
    getItemProps = (0, import_react20.useCallback)(
      function (_temp3) {
        let {
            item,
            index,
            refKey = 'ref',
            ref,
            onMouseMove,
            onMouseDown,
            onClick,
            onPress,
            disabled,
            ...rest
          } = _temp3 === void 0 ? {} : _temp3,
          { props: latestProps, state: latestState } = latest.current,
          itemIndex = getItemIndex(index, item, latestProps.items);
        if (itemIndex < 0)
          throw new Error('Pass either item or item index in getItemProps!');
        let onSelectKey = 'onClick',
          customClickHandler = onClick,
          itemHandleMouseMove = () => {
            index !== latestState.highlightedIndex &&
              ((shouldScrollRef.current = !1),
              dispatch({ type: ItemMouseMove, index, disabled }));
          },
          itemHandleClick = () => {
            dispatch({ type: ItemClick, index });
          },
          itemHandleMouseDown = (e3) => e3.preventDefault();
        return {
          [refKey]: handleRefs(ref, (itemNode) => {
            itemNode &&
              (itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode);
          }),
          disabled,
          role: 'option',
          'aria-selected': `${itemIndex === latestState.highlightedIndex}`,
          id: elementIds.getItemId(itemIndex),
          ...(!disabled && {
            [onSelectKey]: callAllEventHandlers(
              customClickHandler,
              itemHandleClick,
            ),
          }),
          onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
          onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown),
          ...rest,
        };
      },
      [dispatch, latest, shouldScrollRef, elementIds],
    ),
    getToggleButtonProps = (0, import_react20.useCallback)(
      function (_temp4) {
        let {
            onClick,
            onPress,
            refKey = 'ref',
            ref,
            ...rest
          } = _temp4 === void 0 ? {} : _temp4,
          toggleButtonHandleClick = () => {
            dispatch({ type: ToggleButtonClick }),
              !latest.current.state.isOpen &&
                inputRef.current &&
                inputRef.current.focus();
          };
        return {
          [refKey]: handleRefs(ref, (toggleButtonNode) => {
            toggleButtonRef.current = toggleButtonNode;
          }),
          id: elementIds.toggleButtonId,
          tabIndex: -1,
          ...(!rest.disabled && {
            onClick: callAllEventHandlers(onClick, toggleButtonHandleClick),
          }),
          ...rest,
        };
      },
      [dispatch, latest, elementIds],
    ),
    getInputProps = (0, import_react20.useCallback)(
      function (_temp5, _temp6) {
        let {
            onKeyDown,
            onChange,
            onInput,
            onBlur,
            onChangeText,
            refKey = 'ref',
            ref,
            ...rest
          } = _temp5 === void 0 ? {} : _temp5,
          { suppressRefError = !1 } = _temp6 === void 0 ? {} : _temp6;
        setGetterPropCallInfo(
          'getInputProps',
          suppressRefError,
          refKey,
          inputRef,
        );
        let latestState = latest.current.state,
          inputHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key &&
              inputKeyDownHandlers[key] &&
              inputKeyDownHandlers[key](event);
          },
          inputHandleChange = (event) => {
            dispatch({ type: InputChange, inputValue: event.target.value });
          },
          inputHandleBlur = () => {
            latestState.isOpen &&
              !mouseAndTouchTrackersRef.current.isMouseDown &&
              dispatch({ type: InputBlur, selectItem: !0 });
          },
          onChangeKey = 'onChange',
          eventHandlers = {};
        return (
          rest.disabled ||
            (eventHandlers = {
              [onChangeKey]: callAllEventHandlers(
                onChange,
                onInput,
                inputHandleChange,
              ),
              onKeyDown: callAllEventHandlers(onKeyDown, inputHandleKeyDown),
              onBlur: callAllEventHandlers(onBlur, inputHandleBlur),
            }),
          {
            [refKey]: handleRefs(ref, (inputNode) => {
              inputRef.current = inputNode;
            }),
            id: elementIds.inputId,
            'aria-autocomplete': 'list',
            'aria-controls': elementIds.menuId,
            ...(latestState.isOpen &&
              latestState.highlightedIndex > -1 && {
                'aria-activedescendant': elementIds.getItemId(
                  latestState.highlightedIndex,
                ),
              }),
            'aria-labelledby': elementIds.labelId,
            autoComplete: 'off',
            value: latestState.inputValue,
            ...eventHandlers,
            ...rest,
          }
        );
      },
      [
        dispatch,
        inputKeyDownHandlers,
        latest,
        mouseAndTouchTrackersRef,
        setGetterPropCallInfo,
        elementIds,
      ],
    ),
    getComboboxProps = (0, import_react20.useCallback)(
      function (_temp7, _temp8) {
        let { refKey = 'ref', ref, ...rest } = _temp7 === void 0 ? {} : _temp7,
          { suppressRefError = !1 } = _temp8 === void 0 ? {} : _temp8;
        return (
          setGetterPropCallInfo(
            'getComboboxProps',
            suppressRefError,
            refKey,
            comboboxRef,
          ),
          {
            [refKey]: handleRefs(ref, (comboboxNode) => {
              comboboxRef.current = comboboxNode;
            }),
            role: 'combobox',
            'aria-haspopup': 'listbox',
            'aria-owns': elementIds.menuId,
            'aria-expanded': latest.current.state.isOpen,
            ...rest,
          }
        );
      },
      [latest, setGetterPropCallInfo, elementIds],
    ),
    toggleMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionToggleMenu });
    }, [dispatch]),
    closeMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionCloseMenu });
    }, [dispatch]),
    openMenu = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionOpenMenu });
    }, [dispatch]),
    setHighlightedIndex = (0, import_react20.useCallback)(
      (newHighlightedIndex) => {
        dispatch({
          type: FunctionSetHighlightedIndex,
          highlightedIndex: newHighlightedIndex,
        });
      },
      [dispatch],
    ),
    selectItem = (0, import_react20.useCallback)(
      (newSelectedItem) => {
        dispatch({ type: FunctionSelectItem, selectedItem: newSelectedItem });
      },
      [dispatch],
    ),
    setInputValue = (0, import_react20.useCallback)(
      (newInputValue) => {
        dispatch({ type: FunctionSetInputValue, inputValue: newInputValue });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionReset$1 });
    }, [dispatch]);
  return {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getToggleButtonProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
var defaultStateValues = { activeIndex: -1, selectedItems: [] };
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState(props) {
  let activeIndex = getInitialValue(props, 'activeIndex'),
    selectedItems = getInitialValue(props, 'selectedItems');
  return { activeIndex, selectedItems };
}
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey)
    return !1;
  let element = event.target;
  return !(
    element instanceof HTMLInputElement &&
    element.value !== '' &&
    (element.selectionStart !== 0 || element.selectionEnd !== 0)
  );
}
function getA11yRemovalMessage(selectionParameters) {
  let { removedSelectedItem, itemToString: itemToStringLocal } =
    selectionParameters;
  return `${itemToStringLocal(removedSelectedItem)} has been removed.`;
}
var propTypes = {
    selectedItems: import_prop_types2.default.array,
    initialSelectedItems: import_prop_types2.default.array,
    defaultSelectedItems: import_prop_types2.default.array,
    itemToString: import_prop_types2.default.func,
    getA11yRemovalMessage: import_prop_types2.default.func,
    stateReducer: import_prop_types2.default.func,
    activeIndex: import_prop_types2.default.number,
    initialActiveIndex: import_prop_types2.default.number,
    defaultActiveIndex: import_prop_types2.default.number,
    onActiveIndexChange: import_prop_types2.default.func,
    onSelectedItemsChange: import_prop_types2.default.func,
    keyNavigationNext: import_prop_types2.default.string,
    keyNavigationPrevious: import_prop_types2.default.string,
    environment: import_prop_types2.default.shape({
      addEventListener: import_prop_types2.default.func,
      removeEventListener: import_prop_types2.default.func,
      document: import_prop_types2.default.shape({
        getElementById: import_prop_types2.default.func,
        activeElement: import_prop_types2.default.any,
        body: import_prop_types2.default.any,
      }),
    }),
  },
  defaultProps = {
    itemToString: defaultProps$3.itemToString,
    stateReducer: defaultProps$3.stateReducer,
    environment: defaultProps$3.environment,
    getA11yRemovalMessage,
    keyNavigationNext: 'ArrowRight',
    keyNavigationPrevious: 'ArrowLeft',
  },
  validatePropTypes = noop2;
validatePropTypes = (options2, caller) => {
  import_prop_types2.default.checkPropTypes(
    propTypes,
    options2,
    'prop',
    caller.name,
  );
};
var SelectedItemClick = '__selected_item_click__',
  SelectedItemKeyDownDelete = '__selected_item_keydown_delete__',
  SelectedItemKeyDownBackspace = '__selected_item_keydown_backspace__',
  SelectedItemKeyDownNavigationNext =
    '__selected_item_keydown_navigation_next__',
  SelectedItemKeyDownNavigationPrevious =
    '__selected_item_keydown_navigation_previous__',
  DropdownKeyDownNavigationPrevious =
    '__dropdown_keydown_navigation_previous__',
  DropdownKeyDownBackspace = '__dropdown_keydown_backspace__',
  DropdownClick = '__dropdown_click__',
  FunctionAddSelectedItem = '__function_add_selected_item__',
  FunctionRemoveSelectedItem = '__function_remove_selected_item__',
  FunctionSetSelectedItems = '__function_set_selected_items__',
  FunctionSetActiveIndex = '__function_set_active_index__',
  FunctionReset = '__function_reset__',
  stateChangeTypes = Object.freeze({
    __proto__: null,
    SelectedItemClick,
    SelectedItemKeyDownDelete,
    SelectedItemKeyDownBackspace,
    SelectedItemKeyDownNavigationNext,
    SelectedItemKeyDownNavigationPrevious,
    DropdownKeyDownNavigationPrevious,
    DropdownKeyDownBackspace,
    DropdownClick,
    FunctionAddSelectedItem,
    FunctionRemoveSelectedItem,
    FunctionSetSelectedItems,
    FunctionSetActiveIndex,
    FunctionReset,
  });
function downshiftMultipleSelectionReducer(state, action) {
  let { type, index, props, selectedItem } = action,
    { activeIndex, selectedItems } = state,
    changes;
  switch (type) {
    case SelectedItemClick:
      changes = { activeIndex: index };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = { activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1 };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex:
          activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1,
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      let newActiveIndex = activeIndex;
      selectedItems.length === 1
        ? (newActiveIndex = -1)
        : activeIndex === selectedItems.length - 1 &&
          (newActiveIndex = selectedItems.length - 2),
        (changes = {
          selectedItems: [
            ...selectedItems.slice(0, activeIndex),
            ...selectedItems.slice(activeIndex + 1),
          ],
          activeIndex: newActiveIndex,
        });
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = { activeIndex: selectedItems.length - 1 };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1),
      };
      break;
    case FunctionAddSelectedItem:
      changes = { selectedItems: [...selectedItems, selectedItem] };
      break;
    case DropdownClick:
      changes = { activeIndex: -1 };
      break;
    case FunctionRemoveSelectedItem: {
      let newActiveIndex = activeIndex,
        selectedItemIndex = selectedItems.indexOf(selectedItem);
      selectedItemIndex >= 0 &&
        (selectedItems.length === 1
          ? (newActiveIndex = -1)
          : selectedItemIndex === selectedItems.length - 1 &&
            (newActiveIndex = selectedItems.length - 2),
        (changes = {
          selectedItems: [
            ...selectedItems.slice(0, selectedItemIndex),
            ...selectedItems.slice(selectedItemIndex + 1),
          ],
          activeIndex: newActiveIndex,
        }));
      break;
    }
    case FunctionSetSelectedItems: {
      let { selectedItems: newSelectedItems } = action;
      changes = { selectedItems: newSelectedItems };
      break;
    }
    case FunctionSetActiveIndex: {
      let { activeIndex: newActiveIndex } = action;
      changes = { activeIndex: newActiveIndex };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, 'activeIndex'),
        selectedItems: getDefaultValue(props, 'selectedItems'),
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }
  return { ...state, ...changes };
}
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes(userProps, useMultipleSelection);
  let props = { ...defaultProps, ...userProps },
    {
      getA11yRemovalMessage: getA11yRemovalMessage2,
      itemToString: itemToString2,
      environment,
      keyNavigationNext,
      keyNavigationPrevious,
    } = props,
    [state, dispatch] = useControlledReducer$1(
      downshiftMultipleSelectionReducer,
      getInitialState(props),
      props,
    ),
    { activeIndex, selectedItems } = state,
    isInitialMountRef = (0, import_react20.useRef)(!0),
    dropdownRef = (0, import_react20.useRef)(null),
    previousSelectedItemsRef = (0, import_react20.useRef)(selectedItems),
    selectedItemRefs = (0, import_react20.useRef)();
  selectedItemRefs.current = [];
  let latest = useLatestRef({ state, props });
  (0, import_react20.useEffect)(() => {
    if (!isInitialMountRef.current) {
      if (selectedItems.length < previousSelectedItemsRef.current.length) {
        let removedSelectedItem = previousSelectedItemsRef.current.find(
          (item) => selectedItems.indexOf(item) < 0,
        );
        setStatus(
          getA11yRemovalMessage2({
            itemToString: itemToString2,
            resultCount: selectedItems.length,
            removedSelectedItem,
            activeIndex,
            activeSelectedItem: selectedItems[activeIndex],
          }),
          environment.document,
        );
      }
      previousSelectedItemsRef.current = selectedItems;
    }
  }, [selectedItems.length]),
    (0, import_react20.useEffect)(() => {
      isInitialMountRef.current ||
        (activeIndex === -1 && dropdownRef.current
          ? dropdownRef.current.focus()
          : selectedItemRefs.current[activeIndex] &&
            selectedItemRefs.current[activeIndex].focus());
    }, [activeIndex]),
    useControlPropsValidator({
      isInitialMount: isInitialMountRef.current,
      props,
      state,
    });
  let setGetterPropCallInfo = useGetterPropsCalledChecker('getDropdownProps');
  (0, import_react20.useEffect)(() => {
    isInitialMountRef.current = !1;
  }, []);
  let selectedItemKeyDownHandlers = (0, import_react20.useMemo)(
      () => ({
        [keyNavigationPrevious]() {
          dispatch({ type: SelectedItemKeyDownNavigationPrevious });
        },
        [keyNavigationNext]() {
          dispatch({ type: SelectedItemKeyDownNavigationNext });
        },
        Delete() {
          dispatch({ type: SelectedItemKeyDownDelete });
        },
        Backspace() {
          dispatch({ type: SelectedItemKeyDownBackspace });
        },
      }),
      [dispatch, keyNavigationNext, keyNavigationPrevious],
    ),
    dropdownKeyDownHandlers = (0, import_react20.useMemo)(
      () => ({
        [keyNavigationPrevious](event) {
          isKeyDownOperationPermitted(event) &&
            dispatch({ type: DropdownKeyDownNavigationPrevious });
        },
        Backspace(event) {
          isKeyDownOperationPermitted(event) &&
            dispatch({ type: DropdownKeyDownBackspace });
        },
      }),
      [dispatch, keyNavigationPrevious],
    ),
    getSelectedItemProps = (0, import_react20.useCallback)(
      function (_temp) {
        let {
            refKey = 'ref',
            ref,
            onClick,
            onKeyDown,
            selectedItem,
            index,
            ...rest
          } = _temp === void 0 ? {} : _temp,
          { state: latestState } = latest.current;
        if (getItemIndex(index, selectedItem, latestState.selectedItems) < 0)
          throw new Error(
            'Pass either selectedItem or index in getSelectedItemProps!',
          );
        let selectedItemHandleClick = () => {
            dispatch({ type: SelectedItemClick, index });
          },
          selectedItemHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key &&
              selectedItemKeyDownHandlers[key] &&
              selectedItemKeyDownHandlers[key](event);
          };
        return {
          [refKey]: handleRefs(ref, (selectedItemNode) => {
            selectedItemNode && selectedItemRefs.current.push(selectedItemNode);
          }),
          tabIndex: index === latestState.activeIndex ? 0 : -1,
          onClick: callAllEventHandlers(onClick, selectedItemHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown),
          ...rest,
        };
      },
      [dispatch, latest, selectedItemKeyDownHandlers],
    ),
    getDropdownProps = (0, import_react20.useCallback)(
      function (_temp2, _temp3) {
        let {
            refKey = 'ref',
            ref,
            onKeyDown,
            onClick,
            preventKeyAction = !1,
            ...rest
          } = _temp2 === void 0 ? {} : _temp2,
          { suppressRefError = !1 } = _temp3 === void 0 ? {} : _temp3;
        setGetterPropCallInfo(
          'getDropdownProps',
          suppressRefError,
          refKey,
          dropdownRef,
        );
        let dropdownHandleKeyDown = (event) => {
            let key = normalizeArrowKey(event);
            key &&
              dropdownKeyDownHandlers[key] &&
              dropdownKeyDownHandlers[key](event);
          },
          dropdownHandleClick = () => {
            dispatch({ type: DropdownClick });
          };
        return {
          [refKey]: handleRefs(ref, (dropdownNode) => {
            dropdownNode && (dropdownRef.current = dropdownNode);
          }),
          ...(!preventKeyAction && {
            onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
            onClick: callAllEventHandlers(onClick, dropdownHandleClick),
          }),
          ...rest,
        };
      },
      [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo],
    ),
    addSelectedItem = (0, import_react20.useCallback)(
      (selectedItem) => {
        dispatch({ type: FunctionAddSelectedItem, selectedItem });
      },
      [dispatch],
    ),
    removeSelectedItem = (0, import_react20.useCallback)(
      (selectedItem) => {
        dispatch({ type: FunctionRemoveSelectedItem, selectedItem });
      },
      [dispatch],
    ),
    setSelectedItems = (0, import_react20.useCallback)(
      (newSelectedItems) => {
        dispatch({
          type: FunctionSetSelectedItems,
          selectedItems: newSelectedItems,
        });
      },
      [dispatch],
    ),
    setActiveIndex = (0, import_react20.useCallback)(
      (newActiveIndex) => {
        dispatch({ type: FunctionSetActiveIndex, activeIndex: newActiveIndex });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(() => {
      dispatch({ type: FunctionReset });
    }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex,
  };
}
var import_fuse = __toESM(require_fuse());
var import_react21 = __toESM(require_react());
function isExpandType(x2) {
  return !!(x2 && x2.showAll);
}
function isSearchResult(x2) {
  return !!(x2 && x2.item);
}
var { document: document6 } = scope,
  DEFAULT_MAX_SEARCH_RESULTS = 50,
  options = {
    shouldSort: !0,
    tokenize: !0,
    findAllMatches: !0,
    includeScore: !0,
    includeMatches: !0,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      { name: 'name', weight: 0.7 },
      { name: 'path', weight: 0.3 },
    ],
  },
  ScreenReaderLabel = newStyled.label({
    position: 'absolute',
    left: -1e4,
    top: 'auto',
    width: 1,
    height: 1,
    overflow: 'hidden',
  }),
  SearchIconWrapper = newStyled.div(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 8,
    zIndex: 1,
    pointerEvents: 'none',
    color: theme.textMutedColor,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  })),
  SearchField = newStyled.div({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  }),
  Input = newStyled.input(({ theme }) => ({
    appearance: 'none',
    height: 32,
    paddingLeft: 28,
    paddingRight: 28,
    border: `1px solid ${theme.appBorderColor}`,
    background: 'transparent',
    borderRadius: 4,
    fontSize: `${theme.typography.size.s1 + 1}px`,
    fontFamily: 'inherit',
    transition: 'all 150ms',
    color: theme.color.defaultText,
    width: '100%',
    '&:focus, &:active': {
      outline: 0,
      borderColor: theme.color.secondary,
      background: theme.background.app,
    },
    '&::placeholder': { color: theme.textMutedColor, opacity: 1 },
    '&:valid ~ code, &:focus ~ code': { display: 'none' },
    '&:invalid ~ svg': { display: 'none' },
    '&:valid ~ svg': { display: 'block' },
    '&::-ms-clear': { display: 'none' },
    '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      { display: 'none' },
  })),
  FocusKey = newStyled.code(({ theme }) => ({
    position: 'absolute',
    top: 8,
    right: 9,
    height: 16,
    zIndex: 1,
    lineHeight: '16px',
    textAlign: 'center',
    fontSize: '11px',
    color: theme.base === 'light' ? theme.color.dark : theme.textMutedColor,
    userSelect: 'none',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  })),
  FocusKeyCmd = newStyled.span({ fontSize: '14px' }),
  ClearIcon = newStyled.div(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 8,
    zIndex: 1,
    color: theme.textMutedColor,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  })),
  FocusContainer = newStyled.div({ outline: 0 }),
  Search = import_react21.default.memo(function ({
    children,
    dataset,
    enableShortcuts = !0,
    getLastViewed,
    initialQuery = '',
  }) {
    let api = useStorybookApi(),
      inputRef = (0, import_react21.useRef)(null),
      [inputPlaceholder, setPlaceholder] = (0, import_react21.useState)(
        'Find components',
      ),
      [allComponents, showAllComponents] = (0, import_react21.useState)(!1),
      searchShortcut = api
        ? shortcutToHumanString(api.getShortcutKeys().search)
        : '/',
      selectStory = (0, import_react21.useCallback)(
        (id, refId) => {
          api &&
            api.selectStory(id, void 0, {
              ref: refId !== DEFAULT_REF_ID && refId,
            }),
            inputRef.current.blur(),
            showAllComponents(!1);
        },
        [api, inputRef, showAllComponents, DEFAULT_REF_ID],
      ),
      makeFuse = (0, import_react21.useCallback)(() => {
        let list = dataset.entries.reduce((acc, [refId, { index, status }]) => {
          let groupStatus = getGroupStatus(index || {}, status);
          return (
            index &&
              acc.push(
                ...Object.values(index).map((item) => {
                  let statusValue =
                    status && status[item.id]
                      ? getHighestStatus(
                          Object.values(status[item.id] || {}).map(
                            (s2) => s2.status,
                          ),
                        )
                      : null;
                  return {
                    ...searchItem(item, dataset.hash[refId]),
                    status: statusValue || groupStatus[item.id] || null,
                  };
                }),
              ),
            acc
          );
        }, []);
        return new import_fuse.default(list, options);
      }, [dataset]),
      getResults = (0, import_react21.useCallback)(
        (input) => {
          let fuse = makeFuse();
          if (!input) return [];
          let results = [],
            resultIds = new Set(),
            distinctResults = fuse
              .search(input)
              .filter(({ item }) =>
                !(
                  item.type === 'component' ||
                  item.type === 'docs' ||
                  item.type === 'story'
                ) || resultIds.has(item.parent)
                  ? !1
                  : (resultIds.add(item.id), !0),
              );
          return (
            distinctResults.length &&
              ((results = distinctResults.slice(
                0,
                allComponents ? 1e3 : DEFAULT_MAX_SEARCH_RESULTS,
              )),
              distinctResults.length > DEFAULT_MAX_SEARCH_RESULTS &&
                !allComponents &&
                results.push({
                  showAll: () => showAllComponents(!0),
                  totalCount: distinctResults.length,
                  moreCount:
                    distinctResults.length - DEFAULT_MAX_SEARCH_RESULTS,
                })),
            results
          );
        },
        [allComponents, makeFuse],
      ),
      stateReducer2 = (0, import_react21.useCallback)(
        (state, changes) => {
          switch (changes.type) {
            case Downshift$1.stateChangeTypes.blurInput:
              return {
                ...changes,
                inputValue: state.inputValue,
                isOpen: state.inputValue && !state.selectedItem,
                selectedItem: null,
              };
            case Downshift$1.stateChangeTypes.mouseUp:
              return {};
            case Downshift$1.stateChangeTypes.keyDownEscape:
              return state.inputValue
                ? { ...changes, inputValue: '', isOpen: !0, selectedItem: null }
                : (inputRef.current.blur(),
                  { ...changes, isOpen: !1, selectedItem: null });
            case Downshift$1.stateChangeTypes.clickItem:
            case Downshift$1.stateChangeTypes.keyDownEnter: {
              if (isSearchResult(changes.selectedItem)) {
                let { id, refId } = changes.selectedItem.item;
                return (
                  selectStory(id, refId),
                  { ...changes, inputValue: state.inputValue, isOpen: !1 }
                );
              }
              return isExpandType(changes.selectedItem)
                ? (changes.selectedItem.showAll(), {})
                : changes;
            }
            case Downshift$1.stateChangeTypes.changeInput:
              return showAllComponents(!1), changes;
            default:
              return changes;
          }
        },
        [inputRef, selectStory, showAllComponents],
      ),
      { isMobile } = useLayout();
    return import_react21.default.createElement(
      Downshift$1,
      {
        initialInputValue: initialQuery,
        stateReducer: stateReducer2,
        itemToString: (result) => result?.item?.name || '',
        scrollIntoView: (e3) => scrollIntoView(e3),
      },
      ({
        isOpen,
        openMenu,
        closeMenu,
        inputValue,
        clearSelection,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getRootProps,
        highlightedIndex,
      }) => {
        let input = inputValue ? inputValue.trim() : '',
          results = input ? getResults(input) : [],
          lastViewed = !input && getLastViewed();
        lastViewed &&
          lastViewed.length &&
          (results = lastViewed.reduce((acc, { storyId, refId }) => {
            let data = dataset.hash[refId];
            if (data && data.index && data.index[storyId]) {
              let story = data.index[storyId],
                item =
                  story.type === 'story' ? data.index[story.parent] : story;
              acc.some(
                (res) => res.item.refId === refId && res.item.id === item.id,
              ) ||
                acc.push({
                  item: searchItem(item, dataset.hash[refId]),
                  matches: [],
                  score: 0,
                });
            }
            return acc;
          }, []));
        let inputId = 'storybook-explorer-searchfield',
          inputProps = getInputProps({
            id: inputId,
            ref: inputRef,
            required: !0,
            type: 'search',
            placeholder: inputPlaceholder,
            onFocus: () => {
              openMenu(), setPlaceholder('Type to find...');
            },
            onBlur: () => setPlaceholder('Find components'),
          }),
          labelProps = getLabelProps({ htmlFor: inputId });
        return import_react21.default.createElement(
          import_react21.default.Fragment,
          null,
          import_react21.default.createElement(
            ScreenReaderLabel,
            { ...labelProps },
            'Search for components',
          ),
          import_react21.default.createElement(
            SearchField,
            {
              ...getRootProps({ refKey: '' }, { suppressRefError: !0 }),
              className: 'search-field',
            },
            import_react21.default.createElement(
              SearchIconWrapper,
              null,
              import_react21.default.createElement(SearchIcon, null),
            ),
            import_react21.default.createElement(Input, { ...inputProps }),
            !isMobile &&
              enableShortcuts &&
              !isOpen &&
              import_react21.default.createElement(
                FocusKey,
                null,
                searchShortcut === '\u2318 K'
                  ? import_react21.default.createElement(
                      import_react21.default.Fragment,
                      null,
                      import_react21.default.createElement(
                        FocusKeyCmd,
                        null,
                        '\u2318',
                      ),
                      'K',
                    )
                  : searchShortcut,
              ),
            isOpen &&
              import_react21.default.createElement(
                ClearIcon,
                { onClick: () => clearSelection() },
                import_react21.default.createElement(CloseIcon, null),
              ),
          ),
          import_react21.default.createElement(
            FocusContainer,
            { tabIndex: 0, id: 'storybook-explorer-menu' },
            children({
              query: input,
              results,
              isBrowsing:
                !isOpen && document6.activeElement !== inputRef.current,
              closeMenu,
              getMenuProps,
              getItemProps,
              highlightedIndex,
            }),
          ),
        );
      },
    );
  });
var import_react22 = __toESM(require_react());
var { document: document7 } = scope,
  ResultsList = newStyled.ol({ listStyle: 'none', margin: 0, padding: 0 }),
  ResultRow = newStyled.li(({ theme, isHighlighted }) => ({
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'start',
    textAlign: 'left',
    color: 'inherit',
    fontSize: `${theme.typography.size.s2}px`,
    background: isHighlighted ? theme.background.hoverable : 'transparent',
    minHeight: 28,
    borderRadius: 4,
    gap: 6,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 8,
    '&:hover, &:focus': {
      background: curriedTransparentize$1(0.93, theme.color.secondary),
      outline: 'none',
    },
  })),
  IconWrapper = newStyled.div({ marginTop: 2 }),
  ResultRowContent = newStyled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
  })),
  NoResults = newStyled.div(({ theme }) => ({
    marginTop: 20,
    textAlign: 'center',
    fontSize: `${theme.typography.size.s2}px`,
    lineHeight: '18px',
    color: theme.color.defaultText,
    small: {
      color: theme.barTextColor,
      fontSize: `${theme.typography.size.s1}px`,
    },
  })),
  Mark = newStyled.mark(({ theme }) => ({
    background: 'transparent',
    color: theme.color.secondary,
  })),
  MoreWrapper = newStyled.div({ marginTop: 8 }),
  RecentlyOpenedTitle = newStyled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: `${theme.typography.size.s1 - 1}px`,
    fontWeight: theme.typography.weight.bold,
    minHeight: 28,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: theme.textMutedColor,
    marginTop: 16,
    marginBottom: 4,
    alignItems: 'center',
    '.search-result-recentlyOpened-clear': { visibility: 'hidden' },
    '&:hover': {
      '.search-result-recentlyOpened-clear': { visibility: 'visible' },
    },
  })),
  Highlight = import_react22.default.memo(function ({ children, match }) {
    if (!match) return children;
    let { value, indices } = match,
      { nodes: result } = indices.reduce(
        ({ cursor, nodes }, [start, end], index, { length }) => (
          nodes.push(
            import_react22.default.createElement(
              'span',
              { key: `${index}-1` },
              value.slice(cursor, start),
            ),
          ),
          nodes.push(
            import_react22.default.createElement(
              Mark,
              { key: `${index}-2` },
              value.slice(start, end + 1),
            ),
          ),
          index === length - 1 &&
            nodes.push(
              import_react22.default.createElement(
                'span',
                { key: `${index}-3` },
                value.slice(end + 1),
              ),
            ),
          { cursor: end + 1, nodes }
        ),
        { cursor: 0, nodes: [] },
      );
    return import_react22.default.createElement('span', null, result);
  }),
  Title = newStyled.div(({ theme }) => ({
    display: 'grid',
    justifyContent: 'start',
    gridAutoColumns: 'auto',
    gridAutoFlow: 'column',
    color: theme.textMutedColor,
    '& > span': {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })),
  Path = newStyled.div(({ theme }) => ({
    display: 'grid',
    justifyContent: 'start',
    gridAutoColumns: 'auto',
    gridAutoFlow: 'column',
    color: theme.textMutedColor,
    fontSize: `${theme.typography.size.s1 - 1}px`,
    '& > span': {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& > span + span': { '&:before': { content: "' / '" } },
  })),
  Result = import_react22.default.memo(function ({
    item,
    matches,
    icon,
    onClick,
    ...props
  }) {
    let click = (0, import_react22.useCallback)(
        (event) => {
          event.preventDefault(), onClick(event);
        },
        [onClick],
      ),
      api = useStorybookApi();
    (0, import_react22.useEffect)(() => {
      api &&
        props.isHighlighted &&
        item.type === 'component' &&
        api.emit(
          PRELOAD_ENTRIES,
          { ids: [item.children[0]] },
          { options: { target: item.refId } },
        );
    }, [props.isHighlighted, item]);
    let nameMatch = matches.find((match) => match.key === 'name'),
      pathMatches = matches.filter((match) => match.key === 'path'),
      [i3] = item.status ? statusMapping[item.status] : [];
    return import_react22.default.createElement(
      ResultRow,
      { ...props, onClick: click },
      import_react22.default.createElement(
        IconWrapper,
        null,
        item.type === 'component' &&
          import_react22.default.createElement(
            TypeIcon,
            {
              viewBox: '0 0 14 14',
              width: '14',
              height: '14',
              type: 'component',
            },
            import_react22.default.createElement(UseSymbol, {
              type: 'component',
            }),
          ),
        item.type === 'story' &&
          import_react22.default.createElement(
            TypeIcon,
            { viewBox: '0 0 14 14', width: '14', height: '14', type: 'story' },
            import_react22.default.createElement(UseSymbol, { type: 'story' }),
          ),
        !(item.type === 'component' || item.type === 'story') &&
          import_react22.default.createElement(
            TypeIcon,
            {
              viewBox: '0 0 14 14',
              width: '14',
              height: '14',
              type: 'document',
            },
            import_react22.default.createElement(UseSymbol, {
              type: 'document',
            }),
          ),
      ),
      import_react22.default.createElement(
        ResultRowContent,
        { className: 'search-result-item--label' },
        import_react22.default.createElement(
          Title,
          null,
          import_react22.default.createElement(
            Highlight,
            { match: nameMatch },
            item.name,
          ),
        ),
        import_react22.default.createElement(
          Path,
          null,
          item.path.map((group, index) =>
            import_react22.default.createElement(
              'span',
              { key: index },
              import_react22.default.createElement(
                Highlight,
                {
                  match: pathMatches.find(
                    (match) => match.arrayIndex === index,
                  ),
                },
                group,
              ),
            ),
          ),
        ),
      ),
      item.status ? i3 : null,
    );
  }),
  SearchResults = import_react22.default.memo(function ({
    query,
    results,
    closeMenu,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    isLoading = !1,
    enableShortcuts = !0,
    clearLastViewed,
  }) {
    let api = useStorybookApi();
    (0, import_react22.useEffect)(() => {
      let handleEscape = (event) => {
        if (
          !(!enableShortcuts || isLoading || event.repeat) &&
          matchesModifiers(!1, event) &&
          matchesKeyCode('Escape', event)
        ) {
          if (event.target?.id === 'storybook-explorer-searchfield') return;
          event.preventDefault(), closeMenu();
        }
      };
      return (
        document7.addEventListener('keydown', handleEscape),
        () => document7.removeEventListener('keydown', handleEscape)
      );
    }, [closeMenu, enableShortcuts, isLoading]);
    let mouseOverHandler = (0, import_react22.useCallback)((event) => {
        if (!api) return;
        let currentTarget = event.currentTarget,
          storyId = currentTarget.getAttribute('data-id'),
          refId = currentTarget.getAttribute('data-refid'),
          item = api.resolveStory(
            storyId,
            refId === 'storybook_internal' ? void 0 : refId,
          );
        item?.type === 'component' &&
          api.emit(PRELOAD_ENTRIES, {
            ids: [item.isLeaf ? item.id : item.children[0]],
            options: { target: refId },
          });
      }, []),
      handleClearLastViewed = () => {
        clearLastViewed(), closeMenu();
      };
    return import_react22.default.createElement(
      ResultsList,
      { ...getMenuProps() },
      results.length > 0 &&
        !query &&
        import_react22.default.createElement(
          RecentlyOpenedTitle,
          { className: 'search-result-recentlyOpened' },
          'Recently opened',
          import_react22.default.createElement(
            IconButton,
            {
              className: 'search-result-recentlyOpened-clear',
              onClick: handleClearLastViewed,
            },
            import_react22.default.createElement(TrashIcon, null),
          ),
        ),
      results.length === 0 &&
        query &&
        import_react22.default.createElement(
          'li',
          null,
          import_react22.default.createElement(
            NoResults,
            null,
            import_react22.default.createElement(
              'strong',
              null,
              'No components found',
            ),
            import_react22.default.createElement('br', null),
            import_react22.default.createElement(
              'small',
              null,
              'Find components by name or path.',
            ),
          ),
        ),
      results.map((result, index) => {
        if (isExpandType(result))
          return import_react22.default.createElement(
            MoreWrapper,
            { key: 'search-result-expand' },
            import_react22.default.createElement(
              Button,
              {
                ...result,
                ...getItemProps({ key: index, index, item: result }),
                size: 'small',
              },
              'Show ',
              result.moreCount,
              ' more results',
            ),
          );
        let { item } = result,
          key = `${item.refId}::${item.id}`;
        return import_react22.default.createElement(Result, {
          key: item.id,
          ...result,
          ...getItemProps({ key, index, item: result }),
          isHighlighted: highlightedIndex === index,
          'data-id': result.item.id,
          'data-refid': result.item.refId,
          onMouseOver: mouseOverHandler,
          className: 'search-result-item',
        });
      }),
    );
  });
var import_debounce = __toESM(require_debounce()),
  import_react23 = __toESM(require_react()),
  import_store2 = __toESM(require_store2()),
  save = (0, import_debounce.default)(
    (value) => import_store2.default.set('lastViewedStoryIds', value),
    1e3,
  ),
  useLastViewed = (selection) => {
    let initialLastViewedStoryIds = (0, import_react23.useMemo)(() => {
        let items = import_store2.default.get('lastViewedStoryIds');
        return !items || !Array.isArray(items)
          ? []
          : items.some(
                (item) => typeof item == 'object' && item.storyId && item.refId,
              )
            ? items
            : [];
      }, [import_store2.default]),
      lastViewedRef = (0, import_react23.useRef)(initialLastViewedStoryIds),
      updateLastViewed = (0, import_react23.useCallback)(
        (story) => {
          let items = lastViewedRef.current,
            index = items.findIndex(
              ({ storyId, refId }) =>
                storyId === story.storyId && refId === story.refId,
            );
          index !== 0 &&
            (index === -1
              ? (lastViewedRef.current = [story, ...items])
              : (lastViewedRef.current = [
                  story,
                  ...items.slice(0, index),
                  ...items.slice(index + 1),
                ]),
            save(lastViewedRef.current));
        },
        [lastViewedRef],
      );
    return (
      (0, import_react23.useEffect)(() => {
        selection && updateLastViewed(selection);
      }, [selection]),
      {
        getLastViewed: (0, import_react23.useCallback)(
          () => lastViewedRef.current,
          [lastViewedRef],
        ),
        clearLastViewed: (0, import_react23.useCallback)(() => {
          (lastViewedRef.current = lastViewedRef.current.slice(0, 1)),
            save(lastViewedRef.current);
        }, [lastViewedRef]),
      }
    );
  };
var DEFAULT_REF_ID = 'storybook_internal',
  Container2 = newStyled.nav(({ theme }) => ({
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: theme.background.content,
    [MEDIA_DESKTOP_BREAKPOINT]: { background: theme.background.app },
  })),
  Top = newStyled(Spaced)({
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 20,
    paddingTop: 16,
    flex: 1,
  }),
  Bottom = newStyled.div(({ theme }) => ({
    borderTop: `1px solid ${theme.appBorderColor}`,
    padding: theme.layoutMargin / 2,
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.layoutMargin / 2,
    backgroundColor: theme.barBg,
    '&:empty': { display: 'none' },
  })),
  Swap = import_react24.default.memo(function ({ children, condition }) {
    let [a2, b2] = import_react24.default.Children.toArray(children);
    return import_react24.default.createElement(
      import_react24.default.Fragment,
      null,
      import_react24.default.createElement(
        'div',
        { style: { display: condition ? 'block' : 'none' } },
        a2,
      ),
      import_react24.default.createElement(
        'div',
        { style: { display: condition ? 'none' : 'block' } },
        b2,
      ),
    );
  }),
  useCombination = (index, indexError, previewInitialized, status, refs) => {
    let hash = (0, import_react24.useMemo)(
      () => ({
        [DEFAULT_REF_ID]: {
          index,
          indexError,
          previewInitialized,
          status,
          title: null,
          id: DEFAULT_REF_ID,
          url: 'iframe.html',
        },
        ...refs,
      }),
      [refs, index, indexError, previewInitialized, status],
    );
    return (0, import_react24.useMemo)(
      () => ({ hash, entries: Object.entries(hash) }),
      [hash],
    );
  },
  Sidebar = import_react24.default.memo(function ({
    storyId = null,
    refId = DEFAULT_REF_ID,
    index,
    indexError,
    status,
    previewInitialized,
    menu,
    extra,
    bottom = [],
    menuHighlighted = !1,
    enableShortcuts = !0,
    refs = {},
    onMenuClick,
  }) {
    let selected = (0, import_react24.useMemo)(
        () => storyId && { storyId, refId },
        [storyId, refId],
      ),
      dataset = useCombination(
        index,
        indexError,
        previewInitialized,
        status,
        refs,
      ),
      isLoading = !index && !indexError,
      lastViewedProps = useLastViewed(selected);
    return import_react24.default.createElement(
      Container2,
      { className: 'container sidebar-container' },
      import_react24.default.createElement(
        ScrollArea,
        { vertical: !0, offset: 3, scrollbarSize: 6 },
        import_react24.default.createElement(
          Top,
          { row: 1.6 },
          import_react24.default.createElement(Heading, {
            className: 'sidebar-header',
            menuHighlighted,
            menu,
            extra,
            skipLinkHref: '#storybook-preview-wrapper',
            isLoading,
            onMenuClick,
          }),
          import_react24.default.createElement(
            Search,
            { dataset, enableShortcuts, ...lastViewedProps },
            ({
              query,
              results,
              isBrowsing,
              closeMenu,
              getMenuProps,
              getItemProps,
              highlightedIndex,
            }) =>
              import_react24.default.createElement(
                Swap,
                { condition: isBrowsing },
                import_react24.default.createElement(Explorer, {
                  dataset,
                  selected,
                  isLoading,
                  isBrowsing,
                }),
                import_react24.default.createElement(SearchResults, {
                  query,
                  results,
                  closeMenu,
                  getMenuProps,
                  getItemProps,
                  highlightedIndex,
                  enableShortcuts,
                  isLoading,
                  clearLastViewed: lastViewedProps.clearLastViewed,
                }),
              ),
          ),
        ),
      ),
      isLoading
        ? null
        : import_react24.default.createElement(
            Bottom,
            { className: 'sb-bar' },
            bottom.map(({ id, render: Render }) =>
              import_react24.default.createElement(Render, { key: id }),
            ),
          ),
    );
  });
var import_react25 = __toESM(require_react());
var focusableUIElements = {
    storySearchField: 'storybook-explorer-searchfield',
    storyListMenu: 'storybook-explorer-menu',
    storyPanelRoot: 'storybook-panel-root',
  },
  Key = newStyled.span(({ theme }) => ({
    display: 'inline-block',
    height: 16,
    lineHeight: '16px',
    textAlign: 'center',
    fontSize: '11px',
    background:
      theme.base === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
    color: theme.base === 'light' ? theme.color.dark : theme.textMutedColor,
    borderRadius: 2,
    userSelect: 'none',
    pointerEvents: 'none',
    padding: '0 6px',
  })),
  KeyChild = newStyled.code(
    ({ theme }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`,
  ),
  Shortcut = ({ keys }) =>
    import_react25.default.createElement(
      import_react25.default.Fragment,
      null,
      import_react25.default.createElement(
        Key,
        null,
        keys.map((key, index) =>
          import_react25.default.createElement(
            KeyChild,
            { key },
            shortcutToHumanString([key]),
          ),
        ),
      ),
    ),
  useMenu = (
    state,
    api,
    showToolbar,
    isFullscreen,
    isPanelShown,
    isNavShown,
    enableShortcuts,
  ) => {
    let theme = useTheme(),
      shortcutKeys = api.getShortcutKeys(),
      about = (0, import_react25.useMemo)(
        () => ({
          id: 'about',
          title: 'About your Storybook',
          onClick: () => api.changeSettingsTab('about'),
          icon: import_react25.default.createElement(InfoIcon, null),
        }),
        [api],
      ),
      documentation = (0, import_react25.useMemo)(
        () => ({
          id: 'documentation',
          title: 'Documentation',
          href: api.getDocsUrl({ versioned: !0, renderer: !0 }),
          icon: import_react25.default.createElement(ShareAltIcon, null),
        }),
        [api],
      ),
      whatsNewNotificationsEnabled =
        state.whatsNewData?.status === 'SUCCESS' &&
        !state.disableWhatsNewNotifications,
      isWhatsNewUnread = api.isWhatsNewUnread(),
      whatsNew = (0, import_react25.useMemo)(
        () => ({
          id: 'whats-new',
          title: "What's new?",
          onClick: () => api.changeSettingsTab('whats-new'),
          right:
            whatsNewNotificationsEnabled &&
            isWhatsNewUnread &&
            import_react25.default.createElement(
              Badge,
              { status: 'positive' },
              'Check it out',
            ),
          icon: import_react25.default.createElement(WandIcon, null),
        }),
        [api, whatsNewNotificationsEnabled, isWhatsNewUnread],
      ),
      shortcuts = (0, import_react25.useMemo)(
        () => ({
          id: 'shortcuts',
          title: 'Keyboard shortcuts',
          onClick: () => api.changeSettingsTab('shortcuts'),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.shortcutsPage,
              })
            : null,
          style: { borderBottom: `4px solid ${theme.appBorderColor}` },
        }),
        [
          api,
          enableShortcuts,
          shortcutKeys.shortcutsPage,
          theme.appBorderColor,
        ],
      ),
      sidebarToggle = (0, import_react25.useMemo)(
        () => ({
          id: 'S',
          title: 'Show sidebar',
          onClick: () => api.toggleNav(),
          active: isNavShown,
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.toggleNav,
              })
            : null,
          icon: isNavShown
            ? import_react25.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isNavShown],
      ),
      toolbarToogle = (0, import_react25.useMemo)(
        () => ({
          id: 'T',
          title: 'Show toolbar',
          onClick: () => api.toggleToolbar(),
          active: showToolbar,
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.toolbar,
              })
            : null,
          icon: showToolbar
            ? import_react25.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, showToolbar],
      ),
      addonsToggle = (0, import_react25.useMemo)(
        () => ({
          id: 'A',
          title: 'Show addons',
          onClick: () => api.togglePanel(),
          active: isPanelShown,
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.togglePanel,
              })
            : null,
          icon: isPanelShown
            ? import_react25.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isPanelShown],
      ),
      addonsOrientationToggle = (0, import_react25.useMemo)(
        () => ({
          id: 'D',
          title: 'Change addons orientation',
          onClick: () => api.togglePanelPosition(),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.panelPosition,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      fullscreenToggle = (0, import_react25.useMemo)(
        () => ({
          id: 'F',
          title: 'Go full screen',
          onClick: () => api.toggleFullscreen(),
          active: isFullscreen,
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.fullScreen,
              })
            : null,
          icon: isFullscreen
            ? import_react25.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isFullscreen],
      ),
      searchToggle = (0, import_react25.useMemo)(
        () => ({
          id: '/',
          title: 'Search',
          onClick: () =>
            api.focusOnUIElement(focusableUIElements.storySearchField),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.search,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      up = (0, import_react25.useMemo)(
        () => ({
          id: 'up',
          title: 'Previous component',
          onClick: () => api.jumpToComponent(-1),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.prevComponent,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      down = (0, import_react25.useMemo)(
        () => ({
          id: 'down',
          title: 'Next component',
          onClick: () => api.jumpToComponent(1),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.nextComponent,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      prev = (0, import_react25.useMemo)(
        () => ({
          id: 'prev',
          title: 'Previous story',
          onClick: () => api.jumpToStory(-1),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.prevStory,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      next = (0, import_react25.useMemo)(
        () => ({
          id: 'next',
          title: 'Next story',
          onClick: () => api.jumpToStory(1),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.nextStory,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      collapse = (0, import_react25.useMemo)(
        () => ({
          id: 'collapse',
          title: 'Collapse all',
          onClick: () => api.collapseAll(),
          right: enableShortcuts
            ? import_react25.default.createElement(Shortcut, {
                keys: shortcutKeys.collapseAll,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      getAddonsShortcuts = (0, import_react25.useCallback)(() => {
        let addonsShortcuts = api.getAddonsShortcuts(),
          keys = shortcutKeys;
        return Object.entries(addonsShortcuts)
          .filter(([_2, { showInMenu }]) => showInMenu)
          .map(([actionName, { label, action }]) => ({
            id: actionName,
            title: label,
            onClick: () => action(),
            right: enableShortcuts
              ? import_react25.default.createElement(Shortcut, {
                  keys: keys[actionName],
                })
              : null,
          }));
      }, [api, enableShortcuts, shortcutKeys]);
    return (0, import_react25.useMemo)(
      () => [
        about,
        ...(state.whatsNewData?.status === 'SUCCESS' ? [whatsNew] : []),
        documentation,
        shortcuts,
        sidebarToggle,
        toolbarToogle,
        addonsToggle,
        addonsOrientationToggle,
        fullscreenToggle,
        searchToggle,
        up,
        down,
        prev,
        next,
        collapse,
        ...getAddonsShortcuts(),
      ],
      [
        about,
        state,
        whatsNew,
        documentation,
        shortcuts,
        sidebarToggle,
        toolbarToogle,
        addonsToggle,
        addonsOrientationToggle,
        fullscreenToggle,
        searchToggle,
        up,
        down,
        prev,
        next,
        collapse,
        getAddonsShortcuts,
      ],
    );
  };
var Sidebar3 = import_react26.default.memo(function ({ onMenuClick }) {
    return import_react26.default.createElement(
      ManagerConsumer,
      {
        filter: ({ state, api }) => {
          let {
              ui: { name, url, enableShortcuts },
              viewMode,
              storyId,
              refId,
              layout: { showToolbar },
              index,
              status,
              indexError,
              previewInitialized,
              refs,
            } = state,
            menu = useMenu(
              state,
              api,
              showToolbar,
              api.getIsFullscreen(),
              api.getIsPanelShown(),
              api.getIsNavShown(),
              enableShortcuts,
            ),
            whatsNewNotificationsEnabled =
              state.whatsNewData?.status === 'SUCCESS' &&
              !state.disableWhatsNewNotifications,
            bottomItems = api.getElements(
              Addon_TypesEnum.experimental_SIDEBAR_BOTTOM,
            ),
            topItems = api.getElements(
              Addon_TypesEnum.experimental_SIDEBAR_TOP,
            ),
            bottom = (0, import_react26.useMemo)(
              () => Object.values(bottomItems),
              [Object.keys(bottomItems).join('')],
            ),
            top = (0, import_react26.useMemo)(
              () => Object.values(topItems),
              [Object.keys(topItems).join('')],
            );
          return {
            title: name,
            url,
            index,
            indexError,
            status,
            previewInitialized,
            refs,
            storyId,
            refId,
            viewMode,
            menu,
            menuHighlighted:
              whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
            enableShortcuts,
            bottom,
            extra: top,
          };
        },
      },
      (fromState) =>
        import_react26.default.createElement(Sidebar, {
          ...fromState,
          onMenuClick,
        }),
    );
  }),
  Sidebar_default = Sidebar3;
var import_react38 = __toESM(require_react()),
  import_memoizerific2 = __toESM(require_memoizerific());
var import_react36 = __toESM(require_react());
var PreviewContainer = newStyled.main({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }),
  FrameWrap = newStyled.div({
    overflow: 'auto',
    width: '100%',
    zIndex: 3,
    background: 'transparent',
    flex: 1,
  }),
  CanvasWrap = newStyled.div(
    {
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      overflow: 'auto',
      gridTemplateColumns: '100%',
      gridTemplateRows: '100%',
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    ({ show }) => ({ display: show ? 'grid' : 'none' }),
  ),
  UnstyledLink = newStyled(Link2)({
    color: 'inherit',
    textDecoration: 'inherit',
    display: 'inline-block',
  }),
  DesktopOnly = newStyled.span({
    '@media (max-width: 599px)': { display: 'none' },
  }),
  IframeWrapper = newStyled.div(({ theme }) => ({
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    position: 'relative',
    width: '100%',
    height: '100%',
  })),
  LoaderWrapper = newStyled.div(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: theme.background.preview,
    zIndex: 1,
  }));
var import_react27 = __toESM(require_react());
var initialZoom = 1,
  Context = (0, import_react27.createContext)({
    value: initialZoom,
    set: (v2) => {},
  }),
  ZoomProvider = class extends import_react27.Component {
    constructor() {
      super(...arguments);
      this.state = { value: initialZoom };
      this.set = (value) => this.setState({ value });
    }
    render() {
      let { children, shouldScale } = this.props,
        { set } = this,
        { value } = this.state;
      return import_react27.default.createElement(
        Context.Provider,
        { value: { value: shouldScale ? value : initialZoom, set } },
        children,
      );
    }
  },
  { Consumer: ZoomConsumer } = Context,
  Zoom2 = (0, import_react27.memo)(function ({ zoomIn, zoomOut, reset }) {
    return import_react27.default.createElement(
      import_react27.default.Fragment,
      null,
      import_react27.default.createElement(
        IconButton,
        { key: 'zoomin', onClick: zoomIn, title: 'Zoom in' },
        import_react27.default.createElement(ZoomIcon, null),
      ),
      import_react27.default.createElement(
        IconButton,
        { key: 'zoomout', onClick: zoomOut, title: 'Zoom out' },
        import_react27.default.createElement(ZoomOutIcon, null),
      ),
      import_react27.default.createElement(
        IconButton,
        { key: 'zoomreset', onClick: reset, title: 'Reset zoom' },
        import_react27.default.createElement(ZoomResetIcon, null),
      ),
    );
  });
var ZoomWrapper = (0, import_react27.memo)(function ({ set, value }) {
  let zoomIn = (0, import_react27.useCallback)(
      (e3) => {
        e3.preventDefault(), set(0.8 * value);
      },
      [set, value],
    ),
    zoomOut = (0, import_react27.useCallback)(
      (e3) => {
        e3.preventDefault(), set(1.25 * value);
      },
      [set, value],
    ),
    reset = (0, import_react27.useCallback)(
      (e3) => {
        e3.preventDefault(), set(initialZoom);
      },
      [set, initialZoom],
    );
  return import_react27.default.createElement(Zoom2, {
    key: 'zoom',
    zoomIn,
    zoomOut,
    reset,
  });
});
function ZoomToolRenderer() {
  return import_react27.default.createElement(
    import_react27.default.Fragment,
    null,
    import_react27.default.createElement(ZoomConsumer, null, ({ set, value }) =>
      import_react27.default.createElement(ZoomWrapper, { set, value }),
    ),
    import_react27.default.createElement(Separator, null),
  );
}
var zoomTool = {
  title: 'zoom',
  id: 'zoom',
  type: typesX.TOOL,
  match: ({ viewMode, tabId }) => viewMode === 'story' && !tabId,
  render: ZoomToolRenderer,
};
var import_react28 = __toESM(require_react());
var ApplyWrappers = ({ wrappers, id, storyId, children }) =>
    import_react28.default.createElement(
      import_react28.Fragment,
      null,
      wrappers.reduceRight(
        (acc, wrapper, index) =>
          import_react28.default.createElement(wrapper.render, {
            index,
            children: acc,
            id,
            storyId,
          }),
        children,
      ),
    ),
  defaultWrappers = [
    {
      id: 'iframe-wrapper',
      type: Addon_TypesEnum.PREVIEW,
      render: (p2) =>
        import_react28.default.createElement(
          IframeWrapper,
          { id: 'storybook-preview-wrapper' },
          p2.children,
        ),
    },
  ];
var import_react33 = __toESM(require_react());
var import_react29 = __toESM(require_react()),
  import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
var { PREVIEW_URL, document: document8 } = scope,
  copyMapper = ({ state }) => {
    let { storyId, refId, refs } = state,
      { location } = document8,
      ref = refs[refId],
      baseUrl = `${location.origin}${location.pathname}`;
    return (
      baseUrl.endsWith('/') || (baseUrl += '/'),
      {
        refId,
        baseUrl: ref
          ? `${ref.url}/iframe.html`
          : PREVIEW_URL || `${baseUrl}iframe.html`,
        storyId,
        queryParams: state.customQueryParams,
      }
    );
  },
  copyTool = {
    title: 'copy',
    id: 'copy',
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === 'story' && !tabId,
    render: () =>
      import_react29.default.createElement(
        ManagerConsumer,
        { filter: copyMapper },
        ({ baseUrl, storyId, queryParams }) =>
          storyId
            ? import_react29.default.createElement(
                IconButton,
                {
                  key: 'copy',
                  onClick: () =>
                    (0, import_copy_to_clipboard.default)(
                      getStoryHref(baseUrl, storyId, queryParams),
                    ),
                  title: 'Copy canvas link',
                },
                import_react29.default.createElement(LinkIcon, null),
              )
            : null,
      ),
  };
var import_react30 = __toESM(require_react());
var { PREVIEW_URL: PREVIEW_URL2 } = scope,
  ejectMapper = ({ state }) => {
    let { storyId, refId, refs } = state,
      ref = refs[refId];
    return {
      refId,
      baseUrl: ref ? `${ref.url}/iframe.html` : PREVIEW_URL2 || 'iframe.html',
      storyId,
      queryParams: state.customQueryParams,
    };
  },
  ejectTool = {
    title: 'eject',
    id: 'eject',
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === 'story' && !tabId,
    render: () =>
      import_react30.default.createElement(
        ManagerConsumer,
        { filter: ejectMapper },
        ({ baseUrl, storyId, queryParams }) =>
          storyId
            ? import_react30.default.createElement(
                IconButton,
                { key: 'opener', asChild: !0 },
                import_react30.default.createElement(
                  'a',
                  {
                    href: getStoryHref(baseUrl, storyId, queryParams),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Open canvas in new tab',
                  },
                  import_react30.default.createElement(ShareAltIcon, null),
                ),
              )
            : null,
      ),
  };
var import_react31 = __toESM(require_react());
var menuMapper = ({ api, state }) => ({
    isVisible: api.getIsPanelShown(),
    singleStory: state.singleStory,
    panelPosition: state.layout.panelPosition,
    toggle: () => api.togglePanel(),
  }),
  addonsTool = {
    title: 'addons',
    id: 'addons',
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === 'story' && !tabId,
    render: () =>
      import_react31.default.createElement(
        ManagerConsumer,
        { filter: menuMapper },
        ({ isVisible, toggle, singleStory, panelPosition }) =>
          !singleStory &&
          !isVisible &&
          import_react31.default.createElement(
            import_react31.default.Fragment,
            null,
            import_react31.default.createElement(
              IconButton,
              {
                'aria-label': 'Show addons',
                key: 'addons',
                onClick: toggle,
                title: 'Show addons',
              },
              panelPosition === 'bottom'
                ? import_react31.default.createElement(BottomBarIcon, null)
                : import_react31.default.createElement(SidebarAltIcon, null),
            ),
          ),
      ),
  };
var import_react32 = __toESM(require_react());
var StyledAnimatedIconButton = newStyled(IconButton)(
    ({ theme, animating, disabled }) => ({
      opacity: disabled ? 0.5 : 1,
      svg: {
        animation: animating && `${theme.animation.rotate360} 1000ms ease-out`,
      },
    }),
  ),
  menuMapper2 = ({ api, state }) => {
    let { storyId } = state;
    return {
      storyId,
      remount: () => api.emit(FORCE_REMOUNT, { storyId: state.storyId }),
      api,
    };
  },
  remountTool = {
    title: 'remount',
    id: 'remount',
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === 'story' && !tabId,
    render: () =>
      import_react32.default.createElement(
        ManagerConsumer,
        { filter: menuMapper2 },
        ({ remount, storyId, api }) => {
          let [isAnimating, setIsAnimating] = (0, import_react32.useState)(!1),
            remountComponent = () => {
              storyId && remount();
            };
          return (
            api.on(FORCE_REMOUNT, () => {
              setIsAnimating(!0);
            }),
            import_react32.default.createElement(
              StyledAnimatedIconButton,
              {
                key: 'remount',
                title: 'Remount component',
                onClick: remountComponent,
                onAnimationEnd: () => setIsAnimating(!1),
                animating: isAnimating,
                disabled: !storyId,
              },
              import_react32.default.createElement(SyncIcon, null),
            )
          );
        },
      ),
  };
var fullScreenMapper = ({ api, state }) => ({
    toggle: api.toggleFullscreen,
    isFullscreen: api.getIsFullscreen(),
    shortcut: shortcutToHumanString(api.getShortcutKeys().fullScreen),
    hasPanel: Object.keys(api.getElements(Addon_TypesEnum.PANEL)).length > 0,
    singleStory: state.singleStory,
  }),
  fullScreenTool = {
    title: 'fullscreen',
    id: 'fullscreen',
    type: typesX.TOOL,
    match: (p2) => ['story', 'docs'].includes(p2.viewMode),
    render: () => {
      let { isMobile } = useLayout();
      return isMobile
        ? null
        : import_react33.default.createElement(
            ManagerConsumer,
            { filter: fullScreenMapper },
            ({ toggle, isFullscreen, shortcut, hasPanel, singleStory }) =>
              (!singleStory || (singleStory && hasPanel)) &&
              import_react33.default.createElement(
                IconButton,
                {
                  key: 'full',
                  onClick: toggle,
                  title: `${isFullscreen ? 'Exit full screen' : 'Go full screen'} [${shortcut}]`,
                  'aria-label': isFullscreen
                    ? 'Exit full screen'
                    : 'Go full screen',
                },
                isFullscreen
                  ? import_react33.default.createElement(CloseIcon, null)
                  : import_react33.default.createElement(ExpandIcon, null),
              ),
          );
    },
  };
var ToolbarComp = import_react33.default.memo(function ({
    isShown,
    tools,
    toolsExtra,
    tabs,
    tabId,
    api,
  }) {
    return tabs || tools || toolsExtra
      ? import_react33.default.createElement(
          Toolbar,
          {
            className: 'sb-bar',
            key: 'toolbar',
            shown: isShown,
            'data-test-id': 'sb-preview-toolbar',
          },
          import_react33.default.createElement(
            ToolbarInner,
            null,
            import_react33.default.createElement(
              ToolbarLeft,
              null,
              tabs.length > 1
                ? import_react33.default.createElement(
                    import_react33.Fragment,
                    null,
                    import_react33.default.createElement(
                      TabBar,
                      { key: 'tabs' },
                      tabs.map((tab, index) =>
                        import_react33.default.createElement(
                          TabButton,
                          {
                            disabled: tab.disabled,
                            active:
                              tab.id === tabId ||
                              (tab.id === 'canvas' && !tabId),
                            onClick: () => {
                              api.applyQueryParams({
                                tab: tab.id === 'canvas' ? void 0 : tab.id,
                              });
                            },
                            key: tab.id || `tab-${index}`,
                          },
                          tab.title,
                        ),
                      ),
                    ),
                    import_react33.default.createElement(Separator, null),
                  )
                : null,
              import_react33.default.createElement(Tools, {
                key: 'left',
                list: tools,
              }),
            ),
            import_react33.default.createElement(
              ToolbarRight,
              null,
              import_react33.default.createElement(Tools, {
                key: 'right',
                list: toolsExtra,
              }),
            ),
          ),
        )
      : null;
  }),
  Tools = import_react33.default.memo(function ({ list }) {
    return import_react33.default.createElement(
      import_react33.default.Fragment,
      null,
      list
        .filter(Boolean)
        .map(({ render: Render, id, ...t3 }, index) =>
          import_react33.default.createElement(Render, {
            key: id || t3.key || `f-${index}`,
          }),
        ),
    );
  });
function toolbarItemHasBeenExcluded(item, entry) {
  let parameters =
      entry?.type === 'story' && entry?.prepared ? entry?.parameters : {},
    toolbarItemsFromStoryParameters =
      'toolbar' in parameters ? parameters.toolbar : void 0,
    { toolbar: toolbarItemsFromAddonsConfig } = addons.getConfig(),
    toolbarItems = merge_default(
      toolbarItemsFromAddonsConfig,
      toolbarItemsFromStoryParameters,
    );
  return toolbarItems ? !!toolbarItems[item?.id]?.hidden : !1;
}
function filterToolsSide(tools, entry, viewMode, location, path, tabId) {
  let filter = (item) =>
    item &&
    (!item.match ||
      item.match({
        storyId: entry?.id,
        refId: entry?.refId,
        viewMode,
        location,
        path,
        tabId,
      })) &&
    !toolbarItemHasBeenExcluded(item, entry);
  return tools.filter(filter);
}
var Toolbar = newStyled.div(({ theme, shown }) => ({
    position: 'relative',
    color: theme.barTextColor,
    width: '100%',
    height: 40,
    flexShrink: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
    marginTop: shown ? 0 : -40,
    boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
    background: theme.barBg,
    zIndex: 4,
  })),
  ToolbarInner = newStyled.div({
    position: 'absolute',
    width: 'calc(100% - 20px)',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexShrink: 0,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  }),
  ToolbarLeft = newStyled.div({
    display: 'flex',
    whiteSpace: 'nowrap',
    flexBasis: 'auto',
    gap: 6,
    alignItems: 'center',
  }),
  ToolbarRight = newStyled(ToolbarLeft)({ marginLeft: 30 });
var import_react35 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var StyledIframe = newStyled.iframe(({ theme }) => ({
  backgroundColor: theme.background.preview,
  display: 'block',
  boxSizing: 'content-box',
  height: '100%',
  width: '100%',
  border: '0 none',
  transition: 'background-position 0s, visibility 0s',
  backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px',
  margin: 'auto',
  boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)',
}));
function IFrame(props) {
  let { active, id, title, src, allowFullScreen, scale, ...rest } = props,
    iFrameRef = import_react34.default.useRef(null);
  return import_react34.default.createElement(
    Zoom.IFrame,
    { scale, active, iFrameRef },
    import_react34.default.createElement(StyledIframe, {
      'data-is-storybook': active ? 'true' : 'false',
      onLoad: (e3) => e3.currentTarget.setAttribute('data-is-loaded', 'true'),
      id,
      title,
      src,
      allow: 'clipboard-write;',
      allowFullScreen,
      ref: iFrameRef,
      ...rest,
    }),
  );
}
var import_qs = __toESM(require_lib()),
  stringifyQueryParams = (queryParams) =>
    import_qs.default
      .stringify(queryParams, { addQueryPrefix: !0, encode: !1 })
      .replace(/^\?/, '&');
var getActive = (refId, refs) =>
    refId && refs[refId]
      ? `storybook-ref-${refId}`
      : 'storybook-preview-iframe',
  SkipToSidebarLink = newStyled(Button)(({ theme }) => ({
    display: 'none',
    '@media (min-width: 600px)': {
      position: 'absolute',
      display: 'block',
      top: 10,
      right: 15,
      padding: '10px 15px',
      fontSize: theme.typography.size.s1,
      transform: 'translateY(-100px)',
      '&:focus': { transform: 'translateY(0)', zIndex: 1 },
    },
  })),
  whenSidebarIsVisible = ({ api, state }) => ({
    isFullscreen: api.getIsFullscreen(),
    isNavShown: api.getIsNavShown(),
    selectedStoryId: state.storyId,
  }),
  styles = {
    '#root [data-is-storybook="false"]': { display: 'none' },
    '#root [data-is-storybook="true"]': { display: 'block' },
  },
  FramesRenderer = ({
    refs,
    scale,
    viewMode = 'story',
    refId,
    queryParams = {},
    baseUrl,
    storyId = '*',
  }) => {
    let version = refs[refId]?.version,
      stringifiedQueryParams = stringifyQueryParams({
        ...queryParams,
        ...(version && { version }),
      }),
      active = getActive(refId, refs),
      { current: frames } = (0, import_react35.useRef)({}),
      refsToLoad = Object.values(refs).filter(
        (ref) => ref.type === 'auto-inject' || ref.id === refId,
        {},
      );
    return (
      frames['storybook-preview-iframe'] ||
        (frames['storybook-preview-iframe'] = getStoryHref(baseUrl, storyId, {
          ...queryParams,
          ...(version && { version }),
          viewMode,
        })),
      refsToLoad.forEach((ref) => {
        let id = `storybook-ref-${ref.id}`,
          existingUrl = frames[id]?.split('/iframe.html')[0];
        if (!existingUrl || ref.url !== existingUrl) {
          let newUrl = `${ref.url}/iframe.html?id=${storyId}&viewMode=${viewMode}&refId=${ref.id}${stringifiedQueryParams}`;
          frames[id] = newUrl;
        }
      }),
      import_react35.default.createElement(
        import_react35.Fragment,
        null,
        import_react35.default.createElement(Global, { styles }),
        import_react35.default.createElement(
          ManagerConsumer,
          { filter: whenSidebarIsVisible },
          ({ isFullscreen, isNavShown, selectedStoryId }) =>
            isFullscreen || !isNavShown || !selectedStoryId
              ? null
              : import_react35.default.createElement(
                  SkipToSidebarLink,
                  { asChild: !0 },
                  import_react35.default.createElement(
                    'a',
                    {
                      href: `#${selectedStoryId}`,
                      tabIndex: 0,
                      title: 'Skip to sidebar',
                    },
                    'Skip to sidebar',
                  ),
                ),
        ),
        Object.entries(frames).map(([id, src]) =>
          import_react35.default.createElement(
            import_react35.Fragment,
            { key: id },
            import_react35.default.createElement(IFrame, {
              active: id === active,
              key: id,
              id,
              title: id,
              src,
              allowFullScreen: !0,
              scale,
            }),
          ),
        ),
      )
    );
  };
var canvasMapper = ({ state, api }) => ({
    storyId: state.storyId,
    refId: state.refId,
    viewMode: state.viewMode,
    customCanvas: api.renderPreview,
    queryParams: state.customQueryParams,
    getElements: api.getElements,
    entry: api.getData(state.storyId, state.refId),
    previewInitialized: state.previewInitialized,
    refs: state.refs,
  }),
  createCanvasTab = () => ({
    id: 'canvas',
    type: typesX.TAB,
    title: 'Canvas',
    route: ({ storyId, refId }) =>
      refId ? `/story/${refId}_${storyId}` : `/story/${storyId}`,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => null,
  }),
  Preview = import_react36.default.memo(function (props) {
    let {
        api,
        id: previewId,
        options: options2,
        viewMode,
        storyId,
        entry = void 0,
        description,
        baseUrl,
        withLoader = !0,
        tools,
        toolsExtra,
        tabs,
        wrappers,
        tabId,
      } = props,
      tabContent = tabs.find((tab) => tab.id === tabId)?.render,
      shouldScale = viewMode === 'story',
      { showToolbar } = options2,
      previousStoryId = (0, import_react36.useRef)(storyId);
    return (
      (0, import_react36.useEffect)(() => {
        if (entry && viewMode) {
          if (storyId === previousStoryId.current) return;
          if (
            ((previousStoryId.current = storyId), viewMode.match(/docs|story/))
          ) {
            let { refId, id } = entry;
            api.emit(SET_CURRENT_STORY, {
              storyId: id,
              viewMode,
              options: { target: refId },
            });
          }
        }
      }, [entry, viewMode, storyId, api]),
      import_react36.default.createElement(
        import_react36.Fragment,
        null,
        previewId === 'main' &&
          import_react36.default.createElement(
            W,
            { key: 'description' },
            import_react36.default.createElement('title', null, description),
          ),
        import_react36.default.createElement(
          ZoomProvider,
          { shouldScale },
          import_react36.default.createElement(
            PreviewContainer,
            null,
            import_react36.default.createElement(ToolbarComp, {
              key: 'tools',
              isShown: showToolbar,
              tabId,
              tabs,
              tools,
              toolsExtra,
              api,
            }),
            import_react36.default.createElement(
              FrameWrap,
              { key: 'frame' },
              tabContent &&
                import_react36.default.createElement(
                  IframeWrapper,
                  null,
                  tabContent({ active: !0 }),
                ),
              import_react36.default.createElement(
                CanvasWrap,
                { show: !tabId },
                import_react36.default.createElement(Canvas, {
                  withLoader,
                  baseUrl,
                  wrappers,
                }),
              ),
            ),
          ),
        ),
      )
    );
  });
var Canvas = ({ baseUrl, withLoader, wrappers }) =>
  import_react36.default.createElement(
    ManagerConsumer,
    { filter: canvasMapper },
    ({
      entry,
      refs,
      customCanvas,
      storyId,
      refId,
      viewMode,
      queryParams,
      previewInitialized,
    }) => {
      let id = 'canvas',
        [progress, setProgress] = (0, import_react36.useState)(void 0);
      (0, import_react36.useEffect)(() => {
        if (scope.CONFIG_TYPE === 'DEVELOPMENT')
          try {
            addons.getChannel().on(PREVIEW_BUILDER_PROGRESS, (options2) => {
              setProgress(options2);
            });
          } catch {}
      }, []);
      let refLoading = !!refs[refId] && !refs[refId].previewInitialized,
        isBuilding = !(progress?.value === 1 || progress === void 0),
        rootLoading = !refId && (!previewInitialized || isBuilding),
        isLoading = (entry && refLoading) || rootLoading;
      return import_react36.default.createElement(
        ZoomConsumer,
        null,
        ({ value: scale }) =>
          import_react36.default.createElement(
            import_react36.default.Fragment,
            null,
            withLoader &&
              isLoading &&
              import_react36.default.createElement(
                LoaderWrapper,
                null,
                import_react36.default.createElement(Loader, {
                  id: 'preview-loader',
                  role: 'progressbar',
                  progress,
                }),
              ),
            import_react36.default.createElement(
              ApplyWrappers,
              { id, storyId, viewMode, wrappers },
              customCanvas
                ? customCanvas(
                    storyId,
                    viewMode,
                    id,
                    baseUrl,
                    scale,
                    queryParams,
                  )
                : import_react36.default.createElement(FramesRenderer, {
                    baseUrl,
                    refs,
                    scale,
                    entry,
                    viewMode,
                    refId,
                    queryParams,
                    storyId,
                  }),
            ),
          ),
      );
    },
  );
function filterTabs(panels, parameters) {
  let { previewTabs } = addons.getConfig(),
    parametersTabs = parameters ? parameters.previewTabs : void 0;
  if (previewTabs || parametersTabs) {
    let tabs = merge_default(previewTabs, parametersTabs),
      arrTabs = Object.keys(tabs).map((key, index) => ({
        index,
        ...(typeof tabs[key] == 'string' ? { title: tabs[key] } : tabs[key]),
        id: key,
      }));
    return panels
      .filter((panel) => {
        let t3 = arrTabs.find((tab) => tab.id === panel.id);
        return t3 === void 0 || t3.id === 'canvas' || !t3.hidden;
      })
      .map((panel, index) => ({ ...panel, index }))
      .sort((p1, p2) => {
        let tab_1 = arrTabs.find((tab) => tab.id === p1.id),
          index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index,
          tab_2 = arrTabs.find((tab) => tab.id === p2.id),
          index_2 = tab_2 ? tab_2.index : arrTabs.length + p2.index;
        return index_1 - index_2;
      })
      .map((panel) => {
        let t3 = arrTabs.find((tab) => tab.id === panel.id);
        return t3
          ? {
              ...panel,
              title: t3.title || panel.title,
              disabled: t3.disabled,
              hidden: t3.hidden,
            }
          : panel;
      });
  }
  return panels;
}
var import_react37 = __toESM(require_react());
var menuMapper3 = ({ api, state }) => ({
    isVisible: api.getIsNavShown(),
    singleStory: state.singleStory,
    toggle: () => api.toggleNav(),
  }),
  menuTool = {
    title: 'menu',
    id: 'menu',
    type: typesX.TOOL,
    match: ({ viewMode }) => ['story', 'docs'].includes(viewMode),
    render: () =>
      import_react37.default.createElement(
        ManagerConsumer,
        { filter: menuMapper3 },
        ({ isVisible, toggle, singleStory }) =>
          !singleStory &&
          !isVisible &&
          import_react37.default.createElement(
            import_react37.default.Fragment,
            null,
            import_react37.default.createElement(
              IconButton,
              {
                'aria-label': 'Show sidebar',
                key: 'menu',
                onClick: toggle,
                title: 'Show sidebar',
              },
              import_react37.default.createElement(MenuIcon, null),
            ),
            import_react37.default.createElement(Separator, null),
          ),
      ),
  };
var defaultTabs = [createCanvasTab()],
  defaultTools = [menuTool, remountTool, zoomTool],
  defaultToolsExtra = [addonsTool, fullScreenTool, ejectTool, copyTool],
  emptyTabsList = [],
  memoizedTabs = (0, import_memoizerific2.default)(1)(
    (_2, tabElements, parameters, showTabs) =>
      showTabs
        ? filterTabs(
            [...defaultTabs, ...Object.values(tabElements)],
            parameters,
          )
        : emptyTabsList,
  ),
  memoizedTools = (0, import_memoizerific2.default)(1)(
    (_2, toolElements, filterProps) =>
      filterToolsSide(
        [...defaultTools, ...Object.values(toolElements)],
        ...filterProps,
      ),
  ),
  memoizedExtra = (0, import_memoizerific2.default)(1)(
    (_2, extraElements, filterProps) =>
      filterToolsSide(
        [...defaultToolsExtra, ...Object.values(extraElements)],
        ...filterProps,
      ),
  ),
  memoizedWrapper = (0, import_memoizerific2.default)(1)(
    (_2, previewElements) => [
      ...defaultWrappers,
      ...Object.values(previewElements),
    ],
  ),
  { PREVIEW_URL: PREVIEW_URL3 } = scope,
  splitTitleAddExtraSpace = (input) =>
    input.split('/').join(' / ').replace(/\s\s/, ' '),
  getDescription = (item) => {
    if (item?.type === 'story' || item?.type === 'docs') {
      let { title, name } = item;
      return title && name
        ? splitTitleAddExtraSpace(`${title} - ${name} \u22C5 Storybook`)
        : 'Storybook';
    }
    return item?.name ? `${item.name} \u22C5 Storybook` : 'Storybook';
  },
  mapper = ({ api, state }) => {
    let {
        layout,
        location,
        customQueryParams,
        storyId,
        refs,
        viewMode,
        path,
        refId,
      } = state,
      entry = api.getData(storyId, refId),
      tabsList = Object.values(api.getElements(Addon_TypesEnum.TAB)),
      wrapperList = Object.values(api.getElements(Addon_TypesEnum.PREVIEW)),
      toolsList = Object.values(api.getElements(Addon_TypesEnum.TOOL)),
      toolsExtraList = Object.values(
        api.getElements(Addon_TypesEnum.TOOLEXTRA),
      ),
      tabId = api.getQueryParam('tab'),
      tools = memoizedTools(
        toolsList.length,
        api.getElements(Addon_TypesEnum.TOOL),
        [entry, viewMode, location, path, tabId],
      ),
      toolsExtra = memoizedExtra(
        toolsExtraList.length,
        api.getElements(Addon_TypesEnum.TOOLEXTRA),
        [entry, viewMode, location, path, tabId],
      );
    return {
      api,
      entry,
      options: layout,
      description: getDescription(entry),
      viewMode,
      refs,
      storyId,
      baseUrl: PREVIEW_URL3 || 'iframe.html',
      queryParams: customQueryParams,
      tools,
      toolsExtra,
      tabs: memoizedTabs(
        tabsList.length,
        api.getElements(Addon_TypesEnum.TAB),
        entry ? entry.parameters : void 0,
        layout.showTabs,
      ),
      wrappers: memoizedWrapper(
        wrapperList.length,
        api.getElements(Addon_TypesEnum.PREVIEW),
      ),
      tabId,
    };
  },
  PreviewConnected = import_react38.default.memo(function (props) {
    return import_react38.default.createElement(
      ManagerConsumer,
      { filter: mapper },
      (fromState) =>
        import_react38.default.createElement(Preview, {
          ...props,
          ...fromState,
        }),
    );
  }),
  Preview_default = PreviewConnected;
var import_react40 = __toESM(require_react()),
  import_memoizerific3 = __toESM(require_memoizerific());
var import_react39 = __toESM(require_react());
var SafeTab = class extends import_react39.Component {
    constructor(props) {
      super(props), (this.state = { hasError: !1 });
    }
    componentDidCatch(error, info) {
      this.setState({ hasError: !0 }), console.error(error, info);
    }
    render() {
      let { hasError } = this.state,
        { children } = this.props;
      return hasError
        ? import_react39.default.createElement(
            'h1',
            null,
            'Something went wrong.',
          )
        : children;
    }
  },
  AddonPanel = import_react39.default.memo(
    ({
      panels,
      shortcuts,
      actions,
      selectedPanel = null,
      panelPosition = 'right',
      absolute = !0,
    }) => {
      let { isDesktop, setMobilePanelOpen } = useLayout();
      return import_react39.default.createElement(
        Tabs,
        {
          absolute,
          ...(selectedPanel ? { selected: selectedPanel } : {}),
          menuName: 'Addons',
          actions,
          showToolsWhenEmpty: !0,
          emptyState: import_react39.default.createElement(EmptyTabContent, {
            title: 'Storybook add-ons',
            description: import_react39.default.createElement(
              import_react39.default.Fragment,
              null,
              'Integrate your tools with Storybook to connect workflows and unlock advanced features.',
            ),
            footer: import_react39.default.createElement(
              Link22,
              {
                href: 'https://storybook.js.org/integrations',
                target: '_blank',
                withArrow: !0,
              },
              import_react39.default.createElement(DocumentIcon, null),
              ' Explore integrations catalog',
            ),
          }),
          tools: import_react39.default.createElement(
            Actions,
            null,
            isDesktop
              ? import_react39.default.createElement(
                  import_react39.default.Fragment,
                  null,
                  import_react39.default.createElement(
                    IconButton,
                    {
                      key: 'position',
                      onClick: actions.togglePosition,
                      title: `Change addon orientation [${shortcutToHumanString(shortcuts.panelPosition)}]`,
                    },
                    panelPosition === 'bottom'
                      ? import_react39.default.createElement(
                          SidebarAltIcon,
                          null,
                        )
                      : import_react39.default.createElement(
                          BottomBarIcon,
                          null,
                        ),
                  ),
                  import_react39.default.createElement(
                    IconButton,
                    {
                      key: 'visibility',
                      onClick: actions.toggleVisibility,
                      title: `Hide addons [${shortcutToHumanString(shortcuts.togglePanel)}]`,
                    },
                    import_react39.default.createElement(CloseIcon, null),
                  ),
                )
              : import_react39.default.createElement(
                  IconButton,
                  {
                    onClick: () => setMobilePanelOpen(!1),
                    title: 'Close addon panel',
                  },
                  import_react39.default.createElement(CloseIcon, null),
                ),
          ),
          id: 'storybook-panel-root',
        },
        Object.entries(panels).map(([k2, v2]) =>
          import_react39.default.createElement(
            SafeTab,
            {
              key: k2,
              id: k2,
              title:
                typeof v2.title == 'function'
                  ? import_react39.default.createElement(v2.title, null)
                  : v2.title,
            },
            v2.render,
          ),
        ),
      );
    },
  );
AddonPanel.displayName = 'AddonPanel';
var Actions = newStyled.div({ display: 'flex', alignItems: 'center', gap: 6 });
var createPanelActions = (0, import_memoizerific3.default)(1)((api) => ({
    onSelect: (panel) => api.setSelectedPanel(panel),
    toggleVisibility: () => api.togglePanel(),
    togglePosition: () => api.togglePanelPosition(),
  })),
  getPanels = (api) => {
    let allPanels = api.getElements(Addon_TypesEnum.PANEL),
      story = api.getCurrentStoryData();
    if (!allPanels || !story || story.type !== 'story') return allPanels;
    let { parameters } = story,
      filteredPanels = {};
    return (
      Object.entries(allPanels).forEach(([id, panel]) => {
        let { paramKey } = panel;
        (paramKey &&
          parameters &&
          parameters[paramKey] &&
          parameters[paramKey].disable) ||
          (filteredPanels[id] = panel);
      }),
      filteredPanels
    );
  },
  mapper2 = ({ state, api }) => ({
    panels: getPanels(api),
    selectedPanel: api.getSelectedPanel(),
    panelPosition: state.layout.panelPosition,
    actions: createPanelActions(api),
    shortcuts: api.getShortcutKeys(),
  }),
  Panel = (props) =>
    import_react40.default.createElement(
      ManagerConsumer,
      { filter: mapper2 },
      (customProps) =>
        import_react40.default.createElement(AddonPanel, {
          ...props,
          ...customProps,
        }),
    ),
  Panel_default = Panel;
var import_react52 = __toESM(require_react());
var import_react41 = __toESM(require_react()),
  SNAP_THRESHOLD_PX = 30,
  SIDEBAR_MIN_WIDTH_PX = 240,
  RIGHT_PANEL_MIN_WIDTH_PX = 270,
  MIN_WIDTH_STIFFNESS = 0.9;
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function interpolate(relativeValue, min, max) {
  return min + (max - min) * relativeValue;
}
function useDragging({ setState, isPanelShown, isDesktop }) {
  let panelResizerRef = (0, import_react41.useRef)(null),
    sidebarResizerRef = (0, import_react41.useRef)(null);
  return (
    (0, import_react41.useEffect)(() => {
      let panelResizer = panelResizerRef.current,
        sidebarResizer = sidebarResizerRef.current,
        previewIframe = document.querySelector('#storybook-preview-iframe'),
        draggedElement = null,
        onDragStart = (e3) => {
          e3.preventDefault(),
            setState((state) => ({ ...state, isDragging: !0 })),
            e3.currentTarget === panelResizer
              ? (draggedElement = panelResizer)
              : e3.currentTarget === sidebarResizer &&
                (draggedElement = sidebarResizer),
            window.addEventListener('mousemove', onDrag),
            window.addEventListener('mouseup', onDragEnd),
            previewIframe && (previewIframe.style.pointerEvents = 'none');
        },
        onDragEnd = (e3) => {
          setState((state) =>
            draggedElement === sidebarResizer &&
            state.navSize < SIDEBAR_MIN_WIDTH_PX &&
            state.navSize > 0
              ? { ...state, isDragging: !1, navSize: SIDEBAR_MIN_WIDTH_PX }
              : draggedElement === panelResizer &&
                  state.panelPosition === 'right' &&
                  state.rightPanelWidth < RIGHT_PANEL_MIN_WIDTH_PX &&
                  state.rightPanelWidth > 0
                ? {
                    ...state,
                    isDragging: !1,
                    rightPanelWidth: RIGHT_PANEL_MIN_WIDTH_PX,
                  }
                : { ...state, isDragging: !1 },
          ),
            window.removeEventListener('mousemove', onDrag),
            window.removeEventListener('mouseup', onDragEnd),
            previewIframe?.removeAttribute('style'),
            (draggedElement = null);
        },
        onDrag = (e3) => {
          if (e3.buttons === 0) {
            onDragEnd(e3);
            return;
          }
          setState((state) => {
            if (draggedElement === sidebarResizer) {
              let sidebarDragX = e3.clientX;
              return sidebarDragX === state.navSize
                ? state
                : sidebarDragX <= SNAP_THRESHOLD_PX
                  ? { ...state, navSize: 0 }
                  : sidebarDragX <= SIDEBAR_MIN_WIDTH_PX
                    ? {
                        ...state,
                        navSize: interpolate(
                          MIN_WIDTH_STIFFNESS,
                          sidebarDragX,
                          SIDEBAR_MIN_WIDTH_PX,
                        ),
                      }
                    : {
                        ...state,
                        navSize: clamp(sidebarDragX, 0, e3.view.innerWidth),
                      };
            }
            if (draggedElement === panelResizer) {
              let sizeAxisState =
                  state.panelPosition === 'bottom'
                    ? 'bottomPanelHeight'
                    : 'rightPanelWidth',
                panelDragSize =
                  state.panelPosition === 'bottom'
                    ? e3.view.innerHeight - e3.clientY
                    : e3.view.innerWidth - e3.clientX;
              if (panelDragSize === state[sizeAxisState]) return state;
              if (panelDragSize <= SNAP_THRESHOLD_PX)
                return { ...state, [sizeAxisState]: 0 };
              if (
                state.panelPosition === 'right' &&
                panelDragSize <= RIGHT_PANEL_MIN_WIDTH_PX
              )
                return {
                  ...state,
                  [sizeAxisState]: interpolate(
                    MIN_WIDTH_STIFFNESS,
                    panelDragSize,
                    RIGHT_PANEL_MIN_WIDTH_PX,
                  ),
                };
              let sizeAxisMax =
                state.panelPosition === 'bottom'
                  ? e3.view.innerHeight
                  : e3.view.innerWidth;
              return {
                ...state,
                [sizeAxisState]: clamp(panelDragSize, 0, sizeAxisMax),
              };
            }
            return state;
          });
        };
      return (
        panelResizer?.addEventListener('mousedown', onDragStart),
        sidebarResizer?.addEventListener('mousedown', onDragStart),
        () => {
          panelResizer?.removeEventListener('mousedown', onDragStart),
            sidebarResizer?.removeEventListener('mousedown', onDragStart),
            previewIframe?.removeAttribute('style');
        }
      );
    }, [isPanelShown, isDesktop, setState]),
    { panelResizerRef, sidebarResizerRef }
  );
}
var import_react48 = __toESM(require_react());
var import_react46 = __toESM(require_react());
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {},
    sourceKeys = Object.keys(source),
    key,
    i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++)
    (key = sourceKeys[i3]),
      !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var import_prop_types4 = __toESM(require_prop_types()),
  import_react43 = __toESM(require_react()),
  import_react_dom = __toESM(require_react_dom());
var config_default = { disabled: !1 };
var import_prop_types3 = __toESM(require_prop_types()),
  timeoutsShape = import_prop_types3.default.oneOfType([
    import_prop_types3.default.number,
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.number,
      exit: import_prop_types3.default.number,
      appear: import_prop_types3.default.number,
    }).isRequired,
  ]),
  classNamesShape = import_prop_types3.default.oneOfType([
    import_prop_types3.default.string,
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.string,
      exit: import_prop_types3.default.string,
      active: import_prop_types3.default.string,
    }),
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.string,
      enterDone: import_prop_types3.default.string,
      enterActive: import_prop_types3.default.string,
      exit: import_prop_types3.default.string,
      exitDone: import_prop_types3.default.string,
      exitActive: import_prop_types3.default.string,
    }),
  ]);
var import_react42 = __toESM(require_react()),
  TransitionGroupContext_default = import_react42.default.createContext(null);
var forceReflow = function (node) {
  return node.scrollTop;
};
var UNMOUNTED = 'unmounted',
  EXITED = 'exited',
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
  Transition = (function (_React$Component) {
    _inheritsLoose(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context,
        appear =
          parentGroup && !parentGroup.isMounting ? props.enter : props.appear,
        initialStatus;
      return (
        (_this.appearStatus = null),
        props.in
          ? appear
            ? ((initialStatus = EXITED), (_this.appearStatus = ENTERING))
            : (initialStatus = ENTERED)
          : props.unmountOnExit || props.mountOnEnter
            ? (initialStatus = UNMOUNTED)
            : (initialStatus = EXITED),
        (_this.state = { status: initialStatus }),
        (_this.nextCallback = null),
        _this
      );
    }
    Transition2.getDerivedStateFromProps = function (_ref, prevState) {
      var nextIn = _ref.in;
      return nextIn && prevState.status === UNMOUNTED
        ? { status: EXITED }
        : null;
    };
    var _proto = Transition2.prototype;
    return (
      (_proto.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (_proto.componentDidUpdate = function (prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          this.props.in
            ? status !== ENTERING &&
              status !== ENTERED &&
              (nextStatus = ENTERING)
            : (status === ENTERING || status === ENTERED) &&
              (nextStatus = EXITING);
        }
        this.updateStatus(!1, nextStatus);
      }),
      (_proto.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (_proto.getTimeouts = function () {
        var timeout2 = this.props.timeout,
          exit,
          enter,
          appear;
        return (
          (exit = enter = appear = timeout2),
          timeout2 != null &&
            typeof timeout2 != 'number' &&
            ((exit = timeout2.exit),
            (enter = timeout2.enter),
            (appear = timeout2.appear !== void 0 ? timeout2.appear : enter)),
          { exit, enter, appear }
        );
      }),
      (_proto.updateStatus = function (mounting, nextStatus) {
        if ((mounting === void 0 && (mounting = !1), nextStatus !== null))
          if ((this.cancelNextCallback(), nextStatus === ENTERING)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var node = this.props.nodeRef
                ? this.props.nodeRef.current
                : import_react_dom.default.findDOMNode(this);
              node && forceReflow(node);
            }
            this.performEnter(mounting);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === EXITED &&
            this.setState({ status: UNMOUNTED });
      }),
      (_proto.performEnter = function (mounting) {
        var _this2 = this,
          enter = this.props.enter,
          appearing = this.context ? this.context.isMounting : mounting,
          _ref2 = this.props.nodeRef
            ? [appearing]
            : [import_react_dom.default.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1],
          timeouts = this.getTimeouts(),
          enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if ((!mounting && !enter) || config_default.disabled) {
          this.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }
        this.props.onEnter(maybeNode, maybeAppearing),
          this.safeSetState({ status: ENTERING }, function () {
            _this2.props.onEntering(maybeNode, maybeAppearing),
              _this2.onTransitionEnd(enterTimeout, function () {
                _this2.safeSetState({ status: ENTERED }, function () {
                  _this2.props.onEntered(maybeNode, maybeAppearing);
                });
              });
          });
      }),
      (_proto.performExit = function () {
        var _this3 = this,
          exit = this.props.exit,
          timeouts = this.getTimeouts(),
          maybeNode = this.props.nodeRef
            ? void 0
            : import_react_dom.default.findDOMNode(this);
        if (!exit || config_default.disabled) {
          this.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(maybeNode);
          });
          return;
        }
        this.props.onExit(maybeNode),
          this.safeSetState({ status: EXITING }, function () {
            _this3.props.onExiting(maybeNode),
              _this3.onTransitionEnd(timeouts.exit, function () {
                _this3.safeSetState({ status: EXITED }, function () {
                  _this3.props.onExited(maybeNode);
                });
              });
          });
      }),
      (_proto.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (_proto.safeSetState = function (nextState, callback) {
        (callback = this.setNextCallback(callback)),
          this.setState(nextState, callback);
      }),
      (_proto.setNextCallback = function (callback) {
        var _this4 = this,
          active = !0;
        return (
          (this.nextCallback = function (event) {
            active &&
              ((active = !1), (_this4.nextCallback = null), callback(event));
          }),
          (this.nextCallback.cancel = function () {
            active = !1;
          }),
          this.nextCallback
        );
      }),
      (_proto.onTransitionEnd = function (timeout2, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef
            ? this.props.nodeRef.current
            : import_react_dom.default.findDOMNode(this),
          doesNotHaveTimeoutOrListener =
            timeout2 == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef
              ? [this.nextCallback]
              : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];
          this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        timeout2 != null && setTimeout(this.nextCallback, timeout2);
      }),
      (_proto.render = function () {
        var status = this.state.status;
        if (status === UNMOUNTED) return null;
        var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = _objectWithoutPropertiesLoose(_this$props, [
            'children',
            'in',
            'mountOnEnter',
            'unmountOnExit',
            'appear',
            'enter',
            'exit',
            'timeout',
            'addEndListener',
            'onEnter',
            'onEntering',
            'onEntered',
            'onExit',
            'onExiting',
            'onExited',
            'nodeRef',
          ]);
        return import_react43.default.createElement(
          TransitionGroupContext_default.Provider,
          { value: null },
          typeof children == 'function'
            ? children(status, childProps)
            : import_react43.default.cloneElement(
                import_react43.default.Children.only(children),
                childProps,
              ),
        );
      }),
      Transition2
    );
  })(import_react43.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {
  nodeRef: import_prop_types4.default.shape({
    current:
      typeof Element > 'u'
        ? import_prop_types4.default.any
        : function (
            propValue,
            key,
            componentName,
            location,
            propFullName,
            secret,
          ) {
            var value = propValue[key];
            return import_prop_types4.default.instanceOf(
              value && 'ownerDocument' in value
                ? value.ownerDocument.defaultView.Element
                : Element,
            )(propValue, key, componentName, location, propFullName, secret);
          },
  }),
  children: import_prop_types4.default.oneOfType([
    import_prop_types4.default.func.isRequired,
    import_prop_types4.default.element.isRequired,
  ]).isRequired,
  in: import_prop_types4.default.bool,
  mountOnEnter: import_prop_types4.default.bool,
  unmountOnExit: import_prop_types4.default.bool,
  appear: import_prop_types4.default.bool,
  enter: import_prop_types4.default.bool,
  exit: import_prop_types4.default.bool,
  timeout: function (props) {
    var pt = timeoutsShape;
    props.addEndListener || (pt = pt.isRequired);
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    )
      args[_key - 1] = arguments[_key];
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types4.default.func,
  onEnter: import_prop_types4.default.func,
  onEntering: import_prop_types4.default.func,
  onEntered: import_prop_types4.default.func,
  onExit: import_prop_types4.default.func,
  onExiting: import_prop_types4.default.func,
  onExited: import_prop_types4.default.func,
};
function noop3() {}
Transition.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: noop3,
  onEntering: noop3,
  onEntered: noop3,
  onExit: noop3,
  onExiting: noop3,
  onExited: noop3,
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;
var import_react45 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var UpgradeBlock = ({ onNavigateToWhatsNew }) => {
    let api = useStorybookApi(),
      [activeTab, setActiveTab] = (0, import_react44.useState)('npm');
    return import_react44.default.createElement(
      Container3,
      null,
      import_react44.default.createElement(
        'strong',
        null,
        'You are on Storybook ',
        api.getCurrentVersion().version,
      ),
      import_react44.default.createElement(
        'p',
        null,
        'Run the following script to check for updates and upgrade to the latest version.',
      ),
      import_react44.default.createElement(
        Tabs2,
        null,
        import_react44.default.createElement(
          ButtonTab,
          { active: activeTab === 'npm', onClick: () => setActiveTab('npm') },
          'npm',
        ),
        import_react44.default.createElement(
          ButtonTab,
          { active: activeTab === 'pnpm', onClick: () => setActiveTab('pnpm') },
          'pnpm',
        ),
      ),
      import_react44.default.createElement(
        Code,
        null,
        activeTab === 'npm'
          ? 'npx storybook@latest upgrade'
          : 'pnpm dlx storybook@latest upgrade',
      ),
      onNavigateToWhatsNew &&
        import_react44.default.createElement(
          Link22,
          { onClick: onNavigateToWhatsNew },
          "See what's new in Storybook",
        ),
    );
  },
  Container3 = newStyled.div(({ theme }) => ({
    border: '1px solid',
    borderRadius: 5,
    padding: 20,
    marginTop: 0,
    borderColor: theme.appBorderColor,
    fontSize: theme.typography.size.s2,
    width: '100%',
    [MEDIA_DESKTOP_BREAKPOINT]: { maxWidth: 400 },
  })),
  Tabs2 = newStyled.div({ display: 'flex', gap: 2 }),
  Code = newStyled.pre(({ theme }) => ({
    background:
      theme.base === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.appBorderColor,
    fontSize: theme.typography.size.s2 - 1,
    margin: '4px 0 16px',
  })),
  ButtonTab = newStyled.button(({ theme, active }) => ({
    all: 'unset',
    alignItems: 'center',
    gap: 10,
    color: theme.color.defaultText,
    fontSize: theme.typography.size.s2 - 1,
    borderBottom: '2px solid transparent',
    borderBottomColor: active ? theme.color.secondary : 'none',
    padding: '0 10px 5px',
    marginBottom: '5px',
    cursor: 'pointer',
  }));
var MobileAbout = () => {
    let { isMobileAboutOpen, setMobileAboutOpen } = useLayout(),
      aboutRef = (0, import_react45.useRef)(null);
    return import_react45.default.createElement(
      Transition_default,
      {
        nodeRef: aboutRef,
        in: isMobileAboutOpen,
        timeout: 300,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
      },
      (state) =>
        import_react45.default.createElement(
          Container4,
          { ref: aboutRef, state, transitionDuration: 300 },
          import_react45.default.createElement(
            Button2,
            {
              onClick: () => setMobileAboutOpen(!1),
              title: 'Close about section',
            },
            import_react45.default.createElement(ArrowLeftIcon, null),
            'Back',
          ),
          import_react45.default.createElement(
            LinkContainer,
            null,
            import_react45.default.createElement(
              LinkLine,
              {
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              import_react45.default.createElement(
                LinkLeft,
                null,
                import_react45.default.createElement(GithubIcon, null),
                import_react45.default.createElement('span', null, 'Github'),
              ),
              import_react45.default.createElement(ShareAltIcon, { width: 12 }),
            ),
            import_react45.default.createElement(
              LinkLine,
              {
                href: 'https://storybook.js.org/docs/react/get-started/install/',
                target: '_blank',
              },
              import_react45.default.createElement(
                LinkLeft,
                null,
                import_react45.default.createElement(StorybookIcon, null),
                import_react45.default.createElement(
                  'span',
                  null,
                  'Documentation',
                ),
              ),
              import_react45.default.createElement(ShareAltIcon, { width: 12 }),
            ),
          ),
          import_react45.default.createElement(UpgradeBlock, null),
          import_react45.default.createElement(
            BottomText,
            null,
            'Open source software maintained by',
            ' ',
            import_react45.default.createElement(
              Link22,
              { href: 'https://chromatic.com', target: '_blank' },
              'Chromatic',
            ),
            ' ',
            'and the',
            ' ',
            import_react45.default.createElement(
              Link22,
              {
                href: 'https://github.com/storybookjs/storybook/graphs/contributors',
              },
              'Storybook Community',
            ),
          ),
        ),
    );
  },
  Container4 = newStyled.div(({ theme, state, transitionDuration }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${transitionDuration}ms ease-in-out`,
    overflow: 'scroll',
    padding: '25px 10px 10px',
    color: theme.color.defaultText,
    background: theme.background.content,
    opacity: `${(() => {
      switch (state) {
        case 'entering':
        case 'entered':
          return 1;
        case 'exiting':
        case 'exited':
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (state) {
        case 'entering':
        case 'entered':
          return 'translateX(0)';
        case 'exiting':
        case 'exited':
          return 'translateX(20px)';
        default:
          return 'translateX(0)';
      }
    })()}`,
  })),
  LinkContainer = newStyled.div({ marginTop: 20, marginBottom: 20 }),
  LinkLine = newStyled.a(({ theme }) => ({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.typography.size.s2 - 1,
    height: 52,
    borderBottom: `1px solid ${theme.appBorderColor}`,
    cursor: 'pointer',
    padding: '0 10px',
    '&:last-child': { borderBottom: 'none' },
  })),
  LinkLeft = newStyled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.size.s2 - 1,
    height: 40,
    gap: 5,
  })),
  BottomText = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2 - 1,
    marginTop: 30,
  })),
  Button2 = newStyled.button(({ theme }) => ({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: 'currentColor',
    fontSize: theme.typography.size.s2 - 1,
    padding: '0 10px',
  }));
var MobileMenuDrawer = ({ children }) => {
    let containerRef = (0, import_react46.useRef)(null),
      sidebarRef = (0, import_react46.useRef)(null),
      overlayRef = (0, import_react46.useRef)(null),
      {
        isMobileMenuOpen,
        setMobileMenuOpen,
        isMobileAboutOpen,
        setMobileAboutOpen,
      } = useLayout();
    return import_react46.default.createElement(
      import_react46.default.Fragment,
      null,
      import_react46.default.createElement(
        Transition_default,
        {
          nodeRef: containerRef,
          in: isMobileMenuOpen,
          timeout: 300,
          mountOnEnter: !0,
          unmountOnExit: !0,
          onExited: () => setMobileAboutOpen(!1),
        },
        (state) =>
          import_react46.default.createElement(
            Container5,
            { ref: containerRef, state },
            import_react46.default.createElement(
              Transition_default,
              { nodeRef: sidebarRef, in: !isMobileAboutOpen, timeout: 300 },
              (sidebarState) =>
                import_react46.default.createElement(
                  SidebarContainer,
                  { ref: sidebarRef, state: sidebarState },
                  children,
                ),
            ),
            import_react46.default.createElement(MobileAbout, null),
          ),
      ),
      import_react46.default.createElement(
        Transition_default,
        {
          nodeRef: overlayRef,
          in: isMobileMenuOpen,
          timeout: 300,
          mountOnEnter: !0,
          unmountOnExit: !0,
        },
        (state) =>
          import_react46.default.createElement(Overlay, {
            ref: overlayRef,
            state,
            onClick: () => setMobileMenuOpen(!1),
            'aria-label': 'Close navigation menu',
          }),
      ),
    );
  },
  Container5 = newStyled.div(({ theme, state }) => ({
    position: 'fixed',
    boxSizing: 'border-box',
    width: '100%',
    background: theme.background.content,
    height: '80%',
    bottom: 0,
    left: 0,
    zIndex: 11,
    borderRadius: '10px 10px 0 0',
    transition: `all ${300}ms ease-in-out`,
    overflow: 'hidden',
    transform: `${state === 'entering' || state === 'entered' ? 'translateY(0)' : state === 'exiting' || state === 'exited' ? 'translateY(100%)' : 'translateY(0)'}`,
  })),
  SidebarContainer = newStyled.div(({ theme, state }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    transition: `all ${300}ms ease-in-out`,
    overflow: 'hidden',
    opacity: `${state === 'entered' || state === 'entering' ? 1 : state === 'exiting' || state === 'exited' ? 0 : 1}`,
    transform: `${(() => {
      switch (state) {
        case 'entering':
        case 'entered':
          return 'translateX(0)';
        case 'exiting':
        case 'exited':
          return 'translateX(-20px)';
        default:
          return 'translateX(0)';
      }
    })()}`,
  })),
  Overlay = newStyled.div(({ state }) => ({
    position: 'fixed',
    boxSizing: 'border-box',
    background: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    transition: `all ${300}ms ease-in-out`,
    cursor: 'pointer',
    opacity: `${(() => {
      switch (state) {
        case 'entering':
        case 'entered':
          return 1;
        case 'exiting':
        case 'exited':
          return 0;
        default:
          return 0;
      }
    })()}`,
    '&:hover': { background: 'rgba(0, 0, 0, 0.6)' },
  }));
var import_react47 = __toESM(require_react());
var Container6 = newStyled.div(({ theme }) => ({
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    background: theme.background.content,
    height: '42vh',
    zIndex: 11,
    overflow: 'hidden',
  })),
  MobileAddonsDrawer = ({ children }) =>
    import_react47.default.createElement(Container6, null, children);
var useFullStoryName = () => {
    let { index } = useStorybookState(),
      currentStory = useStorybookApi().getCurrentStoryData();
    if (!currentStory) return '';
    let fullStoryName =
        currentStory.renderLabel?.(currentStory) || currentStory.name,
      node = index[currentStory.id];
    for (
      ;
      'parent' in node &&
      node.parent &&
      index[node.parent] &&
      fullStoryName.length < 24;

    )
      (node = index[node.parent]),
        (fullStoryName = `${node.renderLabel?.(node) || node.name}/${fullStoryName}`);
    return fullStoryName;
  },
  MobileNavigation = ({ menu, panel, showPanel }) => {
    let {
        isMobileMenuOpen,
        isMobilePanelOpen,
        setMobileMenuOpen,
        setMobilePanelOpen,
      } = useLayout(),
      fullStoryName = useFullStoryName();
    return import_react48.default.createElement(
      Container7,
      null,
      import_react48.default.createElement(MobileMenuDrawer, null, menu),
      isMobilePanelOpen
        ? import_react48.default.createElement(MobileAddonsDrawer, null, panel)
        : import_react48.default.createElement(
            Nav,
            { className: 'sb-bar' },
            import_react48.default.createElement(
              Button3,
              {
                onClick: () => setMobileMenuOpen(!isMobileMenuOpen),
                title: 'Open navigation menu',
              },
              import_react48.default.createElement(MenuIcon, null),
              import_react48.default.createElement(Text2, null, fullStoryName),
            ),
            showPanel &&
              import_react48.default.createElement(
                IconButton,
                {
                  onClick: () => setMobilePanelOpen(!0),
                  title: 'Open addon panel',
                },
                import_react48.default.createElement(BottomBarToggleIcon, null),
              ),
          ),
    );
  },
  Container7 = newStyled.div(({ theme }) => ({
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    background: theme.barBg,
    borderTop: `1px solid ${theme.appBorderColor}`,
  })),
  Nav = newStyled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    padding: '0 6px',
  }),
  Button3 = newStyled.button(({ theme }) => ({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: theme.barTextColor,
    fontSize: `${theme.typography.size.s2 - 1}px`,
    padding: '0 7px',
    fontWeight: theme.typography.weight.bold,
    WebkitLineClamp: 1,
    '> svg': { width: 14, height: 14, flexShrink: 0 },
  })),
  Text2 = newStyled.p({
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  });
var import_react51 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_react49 = __toESM(require_react());
var Notification = newStyled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    padding: 15,
    width: 280,
    borderRadius: 4,
    alignItems: 'center',
    background:
      theme.base === 'light'
        ? 'hsla(203, 50%, 20%, .97)'
        : 'hsla(203, 30%, 95%, .97)',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)',
    color: theme.color.inverseText,
    textDecoration: 'none',
  })),
  NotificationWithInteractiveStates = newStyled(Notification)(() => ({
    transition: 'all 150ms ease-out',
    transform: 'translate3d(0, 0, 0)',
    '&:hover': {
      transform: 'translate3d(0, -3px, 0)',
      boxShadow:
        '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)',
    },
    '&:active': {
      transform: 'translate3d(0, 0, 0)',
      boxShadow:
        '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)',
    },
    '&:focus': {
      boxShadow:
        '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)',
    },
  })),
  NotificationLink = NotificationWithInteractiveStates.withComponent(Link2),
  NotificationIconWrapper = newStyled.div(() => ({
    display: 'flex',
    marginRight: 10,
    alignItems: 'center',
    svg: { width: 16, height: 16 },
  })),
  NotificationTextWrapper = newStyled.div(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color:
      theme.base === 'dark' ? theme.color.mediumdark : theme.color.mediumlight,
  })),
  Headline = newStyled.div(({ theme, hasIcon }) => ({
    height: '100%',
    width: hasIcon ? 205 : 230,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: theme.typography.size.s1,
    lineHeight: '16px',
    fontWeight: theme.typography.weight.bold,
  })),
  SubHeadline = newStyled.div(({ theme }) => ({
    color: curriedTransparentize$1(0.25, theme.color.inverseText),
    fontSize: theme.typography.size.s1 - 1,
    lineHeight: '14px',
    marginTop: 2,
  })),
  ItemContent = ({ icon, content: { headline, subHeadline } }) => {
    let theme = useTheme(),
      defaultColor =
        theme.base === 'dark'
          ? theme.color.mediumdark
          : theme.color.mediumlight;
    return import_react49.default.createElement(
      import_react49.default.Fragment,
      null,
      !icon ||
        import_react49.default.createElement(
          NotificationIconWrapper,
          null,
          import_react49.default.isValidElement(icon)
            ? icon
            : typeof icon == 'object' &&
                'name' in icon &&
                import_react49.default.createElement(Icons, {
                  icon: icon.name,
                  color: icon.color || defaultColor,
                }),
        ),
      import_react49.default.createElement(
        NotificationTextWrapper,
        null,
        import_react49.default.createElement(
          Headline,
          { title: headline, hasIcon: !!icon },
          headline,
        ),
        subHeadline &&
          import_react49.default.createElement(SubHeadline, null, subHeadline),
      ),
    );
  },
  DismissButtonWrapper = newStyled(IconButton)(({ theme }) => ({
    alignSelf: 'center',
    marginTop: 0,
    color: theme.base === 'light' ? 'rgba(255,255,255,0.7)' : ' #999999',
  })),
  DismissNotificationItem = ({ onDismiss }) =>
    import_react49.default.createElement(
      DismissButtonWrapper,
      {
        title: 'Dismiss notification',
        onClick: (e3) => {
          e3.preventDefault(), onDismiss();
        },
      },
      import_react49.default.createElement(CloseAltIcon, { size: 12 }),
    ),
  NotificationItemSpacer = newStyled.div({ height: 48 }),
  NotificationItem = ({
    notification: { content, link, onClear, id, icon },
    onDismissNotification,
  }) => {
    let dismissNotificationItem = () => {
      onDismissNotification(id), onClear && onClear({ dismissed: !0 });
    };
    return link
      ? import_react49.default.createElement(
          NotificationLink,
          { to: link },
          import_react49.default.createElement(ItemContent, { icon, content }),
          import_react49.default.createElement(DismissNotificationItem, {
            onDismiss: dismissNotificationItem,
          }),
        )
      : import_react49.default.createElement(
          Notification,
          null,
          import_react49.default.createElement(ItemContent, { icon, content }),
          import_react49.default.createElement(DismissNotificationItem, {
            onDismiss: dismissNotificationItem,
          }),
        );
  },
  NotificationItem_default = NotificationItem;
var NotificationList = ({ notifications, clearNotification }) =>
    import_react50.default.createElement(
      List,
      null,
      notifications &&
        notifications.map((notification) =>
          import_react50.default.createElement(NotificationItem_default, {
            key: notification.id,
            onDismissNotification: (id) => clearNotification(id),
            notification,
          }),
        ),
    ),
  List = newStyled.div({
    zIndex: 200,
    position: 'fixed',
    left: 20,
    bottom: 60,
    [MEDIA_DESKTOP_BREAKPOINT]: { bottom: 20 },
    '> * + *': { marginTop: 10 },
    '&:empty': { display: 'none' },
  });
var mapper3 = ({ state, api }) => ({
    notifications: state.notifications,
    clearNotification: api.clearNotification,
  }),
  Notifications = (props) =>
    import_react51.default.createElement(
      ManagerConsumer,
      { filter: mapper3 },
      (fromState) =>
        import_react51.default.createElement(NotificationList, {
          ...props,
          ...fromState,
        }),
    );
var MINIMUM_CONTENT_WIDTH_PX = 100,
  layoutStateIsEqual = (state, other) =>
    state.navSize === other.navSize &&
    state.bottomPanelHeight === other.bottomPanelHeight &&
    state.rightPanelWidth === other.rightPanelWidth &&
    state.panelPosition === other.panelPosition,
  useLayoutSyncingState = ({
    managerLayoutState,
    setManagerLayoutState,
    isDesktop,
    hasTab,
  }) => {
    let prevManagerLayoutStateRef =
        import_react52.default.useRef(managerLayoutState),
      [internalDraggingSizeState, setInternalDraggingSizeState] = (0,
      import_react52.useState)({ ...managerLayoutState, isDragging: !1 });
    (0, import_react52.useEffect)(() => {
      internalDraggingSizeState.isDragging ||
        layoutStateIsEqual(
          managerLayoutState,
          prevManagerLayoutStateRef.current,
        ) ||
        ((prevManagerLayoutStateRef.current = managerLayoutState),
        setInternalDraggingSizeState((state) => ({
          ...state,
          ...managerLayoutState,
        })));
    }, [
      internalDraggingSizeState.isDragging,
      managerLayoutState,
      setInternalDraggingSizeState,
    ]),
      (0, import_react52.useLayoutEffect)(() => {
        if (
          internalDraggingSizeState.isDragging ||
          layoutStateIsEqual(
            prevManagerLayoutStateRef.current,
            internalDraggingSizeState,
          )
        )
          return;
        let nextState = {
          navSize: internalDraggingSizeState.navSize,
          bottomPanelHeight: internalDraggingSizeState.bottomPanelHeight,
          rightPanelWidth: internalDraggingSizeState.rightPanelWidth,
        };
        (prevManagerLayoutStateRef.current = {
          ...prevManagerLayoutStateRef.current,
          ...nextState,
        }),
          setManagerLayoutState(nextState);
      }, [internalDraggingSizeState, setManagerLayoutState]);
    let isPagesShown =
        managerLayoutState.viewMode !== 'story' &&
        managerLayoutState.viewMode !== 'docs',
      isPanelShown = managerLayoutState.viewMode === 'story' && !hasTab,
      { panelResizerRef, sidebarResizerRef } = useDragging({
        setState: setInternalDraggingSizeState,
        isPanelShown,
        isDesktop,
      }),
      { navSize, rightPanelWidth, bottomPanelHeight } =
        internalDraggingSizeState.isDragging
          ? internalDraggingSizeState
          : managerLayoutState;
    return {
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      panelPosition: managerLayoutState.panelPosition,
      panelResizerRef,
      sidebarResizerRef,
      showPages: isPagesShown,
      showPanel: isPanelShown,
      isDragging: internalDraggingSizeState.isDragging,
    };
  },
  Layout = ({
    managerLayoutState,
    setManagerLayoutState,
    hasTab,
    ...slots
  }) => {
    let { isDesktop, isMobile } = useLayout(),
      {
        navSize,
        rightPanelWidth,
        bottomPanelHeight,
        panelPosition,
        panelResizerRef,
        sidebarResizerRef,
        showPages,
        showPanel,
        isDragging,
      } = useLayoutSyncingState({
        managerLayoutState,
        setManagerLayoutState,
        isDesktop,
        hasTab,
      });
    return import_react52.default.createElement(
      LayoutContainer,
      {
        navSize,
        rightPanelWidth,
        bottomPanelHeight,
        panelPosition: managerLayoutState.panelPosition,
        isDragging,
        viewMode: managerLayoutState.viewMode,
        showPanel,
      },
      import_react52.default.createElement(Notifications, null),
      showPages &&
        import_react52.default.createElement(
          PagesContainer,
          null,
          slots.slotPages,
        ),
      import_react52.default.createElement(
        Match,
        { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 },
        ({ match }) =>
          import_react52.default.createElement(
            ContentContainer,
            { shown: !!match },
            slots.slotMain,
          ),
      ),
      isDesktop &&
        import_react52.default.createElement(
          import_react52.default.Fragment,
          null,
          import_react52.default.createElement(
            SidebarContainer2,
            null,
            import_react52.default.createElement(Drag, {
              ref: sidebarResizerRef,
            }),
            slots.slotSidebar,
          ),
          showPanel &&
            import_react52.default.createElement(
              PanelContainer,
              { position: panelPosition },
              import_react52.default.createElement(Drag, {
                orientation:
                  panelPosition === 'bottom' ? 'horizontal' : 'vertical',
                position: panelPosition === 'bottom' ? 'left' : 'right',
                ref: panelResizerRef,
              }),
              slots.slotPanel,
            ),
        ),
      isMobile &&
        import_react52.default.createElement(MobileNavigation, {
          menu: slots.slotSidebar,
          panel: slots.slotPanel,
          showPanel,
        }),
    );
  },
  LayoutContainer = newStyled.div(
    ({
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      viewMode,
      panelPosition,
      showPanel,
    }) => ({
      width: '100%',
      height: ['100vh', '100dvh'],
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      [MEDIA_DESKTOP_BREAKPOINT]: {
        display: 'grid',
        gap: 0,
        gridTemplateColumns: `minmax(0, ${navSize}px) minmax(${MINIMUM_CONTENT_WIDTH_PX}px, 1fr) minmax(0, ${rightPanelWidth}px)`,
        gridTemplateRows: `1fr minmax(0, ${bottomPanelHeight}px)`,
        gridTemplateAreas:
          viewMode === 'docs' || !showPanel
            ? `"sidebar content content"
                  "sidebar content content"`
            : panelPosition === 'right'
              ? `"sidebar content panel"
                  "sidebar content panel"`
              : `"sidebar content content"
                "sidebar panel   panel"`,
      },
    }),
  ),
  SidebarContainer2 = newStyled.div(({ theme }) => ({
    backgroundColor: theme.background.app,
    gridArea: 'sidebar',
    position: 'relative',
    borderRight: `1px solid ${theme.color.border}`,
  })),
  ContentContainer = newStyled.div(({ theme, shown }) => ({
    flex: 1,
    position: 'relative',
    backgroundColor: theme.background.content,
    display: shown ? 'grid' : 'none',
    overflow: 'auto',
    [MEDIA_DESKTOP_BREAKPOINT]: { flex: 'auto', gridArea: 'content' },
  })),
  PagesContainer = newStyled.div(({ theme }) => ({
    gridRowStart: 'sidebar-start',
    gridRowEnd: '-1',
    gridColumnStart: 'sidebar-end',
    gridColumnEnd: '-1',
    backgroundColor: theme.background.content,
    zIndex: 1,
  })),
  PanelContainer = newStyled.div(({ theme, position }) => ({
    gridArea: 'panel',
    position: 'relative',
    backgroundColor: theme.background.content,
    borderTop: position === 'bottom' ? `1px solid ${theme.color.border}` : null,
    borderLeft: position === 'right' ? `1px solid ${theme.color.border}` : null,
  })),
  Drag = newStyled.div(
    ({ theme }) => ({
      position: 'absolute',
      opacity: 0,
      transition: 'opacity 0.2s ease-in-out',
      zIndex: 100,
      '&:after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.color.secondary,
      },
      '&:hover': { opacity: 1 },
    }),
    ({ orientation = 'vertical', position = 'left' }) =>
      orientation === 'vertical'
        ? {
            width: position === 'left' ? 10 : 13,
            height: '100%',
            top: 0,
            right: position === 'left' ? '-7px' : null,
            left: position === 'right' ? '-7px' : null,
            '&:after': {
              width: 1,
              height: '100%',
              marginLeft: position === 'left' ? 3 : 6,
            },
            '&:hover': { cursor: 'col-resize' },
          }
        : {
            width: '100%',
            height: '13px',
            top: '-7px',
            left: 0,
            '&:after': { width: '100%', height: 1, marginTop: 6 },
            '&:hover': { cursor: 'row-resize' },
          },
  );
var App = ({ managerLayoutState, setManagerLayoutState, pages, hasTab }) => {
  let { setMobileAboutOpen } = useLayout();
  return import_react53.default.createElement(
    import_react53.default.Fragment,
    null,
    import_react53.default.createElement(Global, { styles: createGlobal }),
    import_react53.default.createElement(Layout, {
      hasTab,
      managerLayoutState,
      setManagerLayoutState,
      slotMain: import_react53.default.createElement(Preview_default, {
        id: 'main',
        withLoader: !0,
      }),
      slotSidebar: import_react53.default.createElement(Sidebar_default, {
        onMenuClick: () => setMobileAboutOpen((state) => !state),
      }),
      slotPanel: import_react53.default.createElement(Panel_default, null),
      slotPages: pages.map(({ id, render: Content2 }) =>
        import_react53.default.createElement(Content2, { key: id }),
      ),
    }),
  );
};
var Provider = class {
  getElements(_type) {
    throw new Error('Provider.getElements() is not implemented!');
  }
  handleAPI(_api) {
    throw new Error('Provider.handleAPI() is not implemented!');
  }
  getConfig() {
    return console.error('Provider.getConfig() is not implemented!'), {};
  }
};
var import_react61 = __toESM(require_react());
var import_react55 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var Container8 = newStyled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
  }),
  Header = newStyled.header({
    marginBottom: 32,
    alignItems: 'center',
    display: 'flex',
    '> svg': { height: 48, width: 'auto', marginRight: 8 },
  }),
  Footer = newStyled.div(({ theme }) => ({
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.base === 'light' ? theme.color.dark : theme.color.lightest,
    fontWeight: theme.typography.weight.regular,
    fontSize: theme.typography.size.s2,
  })),
  Actions2 = newStyled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 24,
    gap: 16,
  }),
  StyledLink = newStyled(Link22)(({ theme }) => ({
    '&&': {
      fontWeight: theme.typography.weight.bold,
      color: theme.base === 'light' ? theme.color.dark : theme.color.light,
    },
    '&:hover': {
      color:
        theme.base === 'light' ? theme.color.darkest : theme.color.lightest,
    },
  })),
  AboutScreen = ({ onNavigateToWhatsNew }) =>
    import_react54.default.createElement(
      Container8,
      null,
      import_react54.default.createElement(
        Header,
        null,
        import_react54.default.createElement(StorybookLogo, {
          alt: 'Storybook',
        }),
      ),
      import_react54.default.createElement(UpgradeBlock, {
        onNavigateToWhatsNew,
      }),
      import_react54.default.createElement(
        Footer,
        null,
        import_react54.default.createElement(
          Actions2,
          null,
          import_react54.default.createElement(
            Button,
            { asChild: !0 },
            import_react54.default.createElement(
              'a',
              { href: 'https://github.com/storybookjs/storybook' },
              import_react54.default.createElement(GithubIcon, null),
              'GitHub',
            ),
          ),
          import_react54.default.createElement(
            Button,
            { asChild: !0 },
            import_react54.default.createElement(
              'a',
              { href: 'https://storybook.js.org/docs' },
              import_react54.default.createElement(DocumentIcon, {
                style: { display: 'inline', marginRight: 5 },
              }),
              'Documentation',
            ),
          ),
        ),
        import_react54.default.createElement(
          'div',
          null,
          'Open source software maintained by',
          ' ',
          import_react54.default.createElement(
            StyledLink,
            { href: 'https://www.chromatic.com/' },
            'Chromatic',
          ),
          ' and the',
          ' ',
          import_react54.default.createElement(
            StyledLink,
            {
              href: 'https://github.com/storybookjs/storybook/graphs/contributors',
            },
            'Storybook Community',
          ),
        ),
      ),
    );
var NotificationClearer = class extends import_react55.Component {
    componentDidMount() {
      let { api, notificationId } = this.props;
      api.clearNotification(notificationId);
    }
    render() {
      let { children } = this.props;
      return children;
    }
  },
  AboutPage = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      onNavigateToWhatsNew = (0, import_react55.useCallback)(() => {
        api.changeSettingsTab('whats-new');
      }, [api]);
    return import_react55.default.createElement(
      NotificationClearer,
      { api, notificationId: 'update' },
      import_react55.default.createElement(AboutScreen, {
        onNavigateToWhatsNew:
          state.whatsNewData?.status === 'SUCCESS'
            ? onNavigateToWhatsNew
            : void 0,
      }),
    );
  };
var import_react58 = __toESM(require_react());
var import_react57 = __toESM(require_react());
var import_react56 = __toESM(require_react());
var Footer2 = newStyled.div(({ theme }) => ({
    display: 'flex',
    paddingTop: 20,
    marginTop: 20,
    borderTop: `1px solid ${theme.appBorderColor}`,
    fontWeight: theme.typography.weight.bold,
    '& > * + *': { marginLeft: 20 },
  })),
  SettingsFooter = (props) =>
    import_react56.default.createElement(
      Footer2,
      { ...props },
      import_react56.default.createElement(
        Link22,
        {
          secondary: !0,
          href: 'https://storybook.js.org',
          cancel: !1,
          target: '_blank',
        },
        'Docs',
      ),
      import_react56.default.createElement(
        Link22,
        {
          secondary: !0,
          href: 'https://github.com/storybookjs/storybook',
          cancel: !1,
          target: '_blank',
        },
        'GitHub',
      ),
      import_react56.default.createElement(
        Link22,
        {
          secondary: !0,
          href: 'https://storybook.js.org/community#support',
          cancel: !1,
          target: '_blank',
        },
        'Support',
      ),
    ),
  SettingsFooter_default = SettingsFooter;
var Header2 = newStyled.header(({ theme }) => ({
    marginBottom: 20,
    fontSize: theme.typography.size.m3,
    fontWeight: theme.typography.weight.bold,
    alignItems: 'center',
    display: 'flex',
  })),
  HeaderItem = newStyled.div(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
  })),
  GridHeaderRow = newStyled.div({
    alignSelf: 'flex-end',
    display: 'grid',
    margin: '10px 0',
    gridTemplateColumns: '1fr 1fr 12px',
    '& > *:last-of-type': {
      gridColumn: '2 / 2',
      justifySelf: 'flex-end',
      gridRow: '1',
    },
  }),
  Row = newStyled.div(({ theme }) => ({
    padding: '6px 0',
    borderTop: `1px solid ${theme.appBorderColor}`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 0px',
  })),
  GridWrapper = newStyled.div({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: 'minmax(auto, auto)',
    marginBottom: 20,
  }),
  Description = newStyled.div({ alignSelf: 'center' }),
  TextInput = newStyled(Form.Input)(
    ({ valid, theme }) =>
      valid === 'error'
        ? { animation: `${theme.animation.jiggle} 700ms ease-out` }
        : {},
    {
      display: 'flex',
      width: 80,
      flexDirection: 'column',
      justifySelf: 'flex-end',
      paddingLeft: 4,
      paddingRight: 4,
      textAlign: 'center',
    },
  ),
  Fade = keyframes`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`,
  SuccessIcon = newStyled(CheckIcon)(
    ({ valid, theme }) =>
      valid === 'valid'
        ? { color: theme.color.positive, animation: `${Fade} 2s ease forwards` }
        : { opacity: 0 },
    {
      alignSelf: 'center',
      display: 'flex',
      marginLeft: 10,
      height: 14,
      width: 14,
    },
  ),
  Container9 = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    padding: '3rem 20px',
    maxWidth: 600,
    margin: '0 auto',
  })),
  shortcutLabels = {
    fullScreen: 'Go full screen',
    togglePanel: 'Toggle addons',
    panelPosition: 'Toggle addons orientation',
    toggleNav: 'Toggle sidebar',
    toolbar: 'Toggle canvas toolbar',
    search: 'Focus search',
    focusNav: 'Focus sidebar',
    focusIframe: 'Focus canvas',
    focusPanel: 'Focus addons',
    prevComponent: 'Previous component',
    nextComponent: 'Next component',
    prevStory: 'Previous story',
    nextStory: 'Next story',
    shortcutsPage: 'Go to shortcuts page',
    aboutPage: 'Go to about page',
    collapseAll: 'Collapse all items on sidebar',
    expandAll: 'Expand all items on sidebar',
    remount: 'Remount component',
  },
  fixedShortcuts = ['escape'];
function toShortcutState(shortcutKeys) {
  return Object.entries(shortcutKeys).reduce(
    (acc, [feature, shortcut]) =>
      fixedShortcuts.includes(feature)
        ? acc
        : { ...acc, [feature]: { shortcut, error: !1 } },
    {},
  );
}
var ShortcutsScreen = class extends import_react57.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = (e3) => {
      let { activeFeature, shortcutKeys } = this.state;
      if (e3.key === 'Backspace') return this.restoreDefault();
      let shortcut = eventToShortcut(e3);
      if (!shortcut) return !1;
      let error = !!Object.entries(shortcutKeys).find(
        ([feature, { shortcut: existingShortcut }]) =>
          feature !== activeFeature &&
          existingShortcut &&
          shortcutMatchesShortcut(shortcut, existingShortcut),
      );
      return this.setState({
        shortcutKeys: { ...shortcutKeys, [activeFeature]: { shortcut, error } },
      });
    };
    this.onFocus = (focusedInput) => () => {
      let { shortcutKeys } = this.state;
      this.setState({
        activeFeature: focusedInput,
        shortcutKeys: {
          ...shortcutKeys,
          [focusedInput]: { shortcut: null, error: !1 },
        },
      });
    };
    this.onBlur = async () => {
      let { shortcutKeys, activeFeature } = this.state;
      if (shortcutKeys[activeFeature]) {
        let { shortcut, error } = shortcutKeys[activeFeature];
        return !shortcut || error ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    };
    this.saveShortcut = async () => {
      let { activeFeature, shortcutKeys } = this.state,
        { setShortcut } = this.props;
      await setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut),
        this.setState({ successField: activeFeature });
    };
    this.restoreDefaults = async () => {
      let { restoreAllDefaultShortcuts } = this.props,
        defaultShortcuts = await restoreAllDefaultShortcuts();
      return this.setState({ shortcutKeys: toShortcutState(defaultShortcuts) });
    };
    this.restoreDefault = async () => {
      let { activeFeature, shortcutKeys } = this.state,
        { restoreDefaultShortcut } = this.props,
        defaultShortcut = await restoreDefaultShortcut(activeFeature);
      return this.setState({
        shortcutKeys: {
          ...shortcutKeys,
          ...toShortcutState({ [activeFeature]: defaultShortcut }),
        },
      });
    };
    this.displaySuccessMessage = (activeElement) => {
      let { successField, shortcutKeys } = this.state;
      return activeElement === successField &&
        shortcutKeys[activeElement].error === !1
        ? 'valid'
        : void 0;
    };
    this.displayError = (activeElement) => {
      let { activeFeature, shortcutKeys } = this.state;
      return activeElement === activeFeature &&
        shortcutKeys[activeElement].error === !0
        ? 'error'
        : void 0;
    };
    this.renderKeyInput = () => {
      let { shortcutKeys, addonsShortcutLabels } = this.state;
      return Object.entries(shortcutKeys).map(([feature, { shortcut }]) =>
        import_react57.default.createElement(
          Row,
          { key: feature },
          import_react57.default.createElement(
            Description,
            null,
            shortcutLabels[feature] || addonsShortcutLabels[feature],
          ),
          import_react57.default.createElement(TextInput, {
            spellCheck: 'false',
            valid: this.displayError(feature),
            className: 'modalInput',
            onBlur: this.onBlur,
            onFocus: this.onFocus(feature),
            onKeyDown: this.onKeyDown,
            value: shortcut ? shortcutToHumanString(shortcut) : '',
            placeholder: 'Type keys',
            readOnly: !0,
          }),
          import_react57.default.createElement(SuccessIcon, {
            valid: this.displaySuccessMessage(feature),
          }),
        ),
      );
    };
    this.renderKeyForm = () =>
      import_react57.default.createElement(
        GridWrapper,
        null,
        import_react57.default.createElement(
          GridHeaderRow,
          null,
          import_react57.default.createElement(HeaderItem, null, 'Commands'),
          import_react57.default.createElement(HeaderItem, null, 'Shortcut'),
        ),
        this.renderKeyInput(),
      );
    this.state = {
      activeFeature: void 0,
      successField: void 0,
      shortcutKeys: toShortcutState(props.shortcutKeys),
      addonsShortcutLabels: props.addonsShortcutLabels,
    };
  }
  render() {
    let layout = this.renderKeyForm();
    return import_react57.default.createElement(
      Container9,
      null,
      import_react57.default.createElement(Header2, null, 'Keyboard shortcuts'),
      layout,
      import_react57.default.createElement(
        Button,
        {
          variant: 'outline',
          size: 'small',
          id: 'restoreDefaultsHotkeys',
          onClick: this.restoreDefaults,
        },
        'Restore defaults',
      ),
      import_react57.default.createElement(SettingsFooter_default, null),
    );
  }
};
var ShortcutsPage = () =>
  import_react58.default.createElement(
    ManagerConsumer,
    null,
    ({
      api: {
        getShortcutKeys,
        getAddonsShortcutLabels,
        setShortcut,
        restoreDefaultShortcut,
        restoreAllDefaultShortcuts,
      },
    }) =>
      import_react58.default.createElement(ShortcutsScreen, {
        shortcutKeys: getShortcutKeys(),
        addonsShortcutLabels: getAddonsShortcutLabels(),
        setShortcut,
        restoreDefaultShortcut,
        restoreAllDefaultShortcuts,
      }),
  );
var import_react60 = __toESM(require_react());
var import_react59 = __toESM(require_react());
var Centered = newStyled.div({
    top: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)',
    width: '100%',
    textAlign: 'center',
  }),
  LoaderWrapper2 = newStyled.div({ position: 'relative', height: '32px' }),
  Message2 = newStyled.div(({ theme }) => ({
    paddingTop: '12px',
    color: theme.textMutedColor,
    maxWidth: '295px',
    margin: '0 auto',
    fontSize: `${theme.typography.size.s1}px`,
    lineHeight: '16px',
  })),
  Container10 = newStyled.div(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    bottom: '40px',
    background: theme.background.bar,
    fontSize: '13px',
    borderTop: '1px solid',
    borderColor: theme.appBorderColor,
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  })),
  WhatsNewFooter = ({
    isNotificationsEnabled,
    onToggleNotifications,
    onCopyLink,
  }) => {
    let theme = useTheme(),
      [copyText, setCopyText] = (0, import_react59.useState)('Copy Link'),
      copyLink = () => {
        onCopyLink(),
          setCopyText('Copied!'),
          setTimeout(() => setCopyText('Copy Link'), 4e3);
      };
    return import_react59.default.createElement(
      Container10,
      null,
      import_react59.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center', gap: 10 } },
        import_react59.default.createElement(HeartIcon, {
          color: theme.color.mediumdark,
        }),
        import_react59.default.createElement(
          'div',
          null,
          'Share this with your team.',
        ),
        import_react59.default.createElement(
          Button,
          { onClick: copyLink, size: 'small', variant: 'ghost' },
          copyText,
        ),
      ),
      isNotificationsEnabled
        ? import_react59.default.createElement(
            Button,
            { size: 'small', variant: 'ghost', onClick: onToggleNotifications },
            import_react59.default.createElement(EyeCloseIcon, null),
            'Hide notifications',
          )
        : import_react59.default.createElement(
            Button,
            { size: 'small', variant: 'ghost', onClick: onToggleNotifications },
            import_react59.default.createElement(EyeIcon, null),
            'Show notifications',
          ),
    );
  },
  Iframe = newStyled.iframe(
    {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 0,
      margin: 0,
      padding: 0,
      width: '100%',
      height: 'calc(100% - 80px)',
      background: 'white',
    },
    ({ isLoaded }) => ({ visibility: isLoaded ? 'visible' : 'hidden' }),
  ),
  AlertIcon2 = newStyled((props) =>
    import_react59.default.createElement(AlertIcon, { ...props }),
  )(({ theme }) => ({
    color: theme.textMutedColor,
    width: 32,
    height: 32,
    margin: '0 auto',
  })),
  WhatsNewLoader = () =>
    import_react59.default.createElement(
      Centered,
      null,
      import_react59.default.createElement(
        LoaderWrapper2,
        null,
        import_react59.default.createElement(Loader, null),
      ),
      import_react59.default.createElement(Message2, null, 'Loading...'),
    ),
  MaxWaitTimeMessaging = () =>
    import_react59.default.createElement(
      Centered,
      null,
      import_react59.default.createElement(AlertIcon2, null),
      import_react59.default.createElement(
        Message2,
        null,
        "The page couldn't be loaded. Check your internet connection and try again.",
      ),
    ),
  PureWhatsNewScreen = ({
    didHitMaxWaitTime,
    isLoaded,
    onLoad,
    url,
    onCopyLink,
    onToggleNotifications,
    isNotificationsEnabled,
  }) =>
    import_react59.default.createElement(
      import_react59.Fragment,
      null,
      !isLoaded &&
        !didHitMaxWaitTime &&
        import_react59.default.createElement(WhatsNewLoader, null),
      didHitMaxWaitTime
        ? import_react59.default.createElement(MaxWaitTimeMessaging, null)
        : import_react59.default.createElement(
            import_react59.default.Fragment,
            null,
            import_react59.default.createElement(Iframe, {
              isLoaded,
              onLoad,
              src: url,
              title: "What's new?",
            }),
            import_react59.default.createElement(WhatsNewFooter, {
              isNotificationsEnabled,
              onToggleNotifications,
              onCopyLink,
            }),
          ),
    ),
  MAX_WAIT_TIME = 1e4,
  WhatsNewScreen = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      { whatsNewData } = state,
      [isLoaded, setLoaded] = (0, import_react59.useState)(!1),
      [didHitMaxWaitTime, setDidHitMaxWaitTime] = (0, import_react59.useState)(
        !1,
      );
    if (
      ((0, import_react59.useEffect)(() => {
        let timer = setTimeout(
          () => !isLoaded && setDidHitMaxWaitTime(!0),
          MAX_WAIT_TIME,
        );
        return () => clearTimeout(timer);
      }, [isLoaded]),
      whatsNewData?.status !== 'SUCCESS')
    )
      return null;
    let isNotificationsEnabled = !whatsNewData.disableWhatsNewNotifications;
    return import_react59.default.createElement(PureWhatsNewScreen, {
      didHitMaxWaitTime,
      isLoaded,
      onLoad: () => {
        api.whatsNewHasBeenRead(), setLoaded(!0);
      },
      url: whatsNewData.url,
      isNotificationsEnabled,
      onCopyLink: () => {
        navigator.clipboard?.writeText(
          whatsNewData.blogUrl ?? whatsNewData.url,
        );
      },
      onToggleNotifications: () => {
        isNotificationsEnabled
          ? scope.confirm(
              'All update notifications will no longer be shown. Are you sure?',
            ) && api.toggleWhatsNewNotifications()
          : api.toggleWhatsNewNotifications();
      },
    });
  };
var WhatsNewPage = () =>
  import_react60.default.createElement(WhatsNewScreen, null);
var { document: document9 } = scope,
  Header3 = newStyled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
    background: theme.barBg,
    paddingRight: 8,
  })),
  TabBarButton = import_react61.default.memo(function ({
    changeTab,
    id,
    title,
  }) {
    return import_react61.default.createElement(Location, null, ({ path }) => {
      let active = path.includes(`settings/${id}`);
      return import_react61.default.createElement(
        TabButton,
        {
          id: `tabbutton-${id}`,
          className: ['tabbutton']
            .concat(active ? ['tabbutton-active'] : [])
            .join(' '),
          type: 'button',
          key: 'id',
          active,
          onClick: () => changeTab(id),
          role: 'tab',
        },
        title,
      );
    });
  }),
  Content = newStyled(ScrollArea)(({ theme }) => ({
    background: theme.background.content,
  })),
  Pages = ({ changeTab, onClose, enableShortcuts = !0, enableWhatsNew }) => (
    import_react61.default.useEffect(() => {
      let handleEscape = (event) => {
        !enableShortcuts ||
          event.repeat ||
          (matchesModifiers(!1, event) &&
            matchesKeyCode('Escape', event) &&
            (event.preventDefault(), onClose()));
      };
      return (
        document9.addEventListener('keydown', handleEscape),
        () => document9.removeEventListener('keydown', handleEscape)
      );
    }, [enableShortcuts, onClose]),
    import_react61.default.createElement(
      import_react61.Fragment,
      null,
      import_react61.default.createElement(
        Header3,
        { className: 'sb-bar' },
        import_react61.default.createElement(
          TabBar,
          { role: 'tablist' },
          import_react61.default.createElement(TabBarButton, {
            id: 'about',
            title: 'About',
            changeTab,
          }),
          enableWhatsNew &&
            import_react61.default.createElement(TabBarButton, {
              id: 'whats-new',
              title: "What's new?",
              changeTab,
            }),
          import_react61.default.createElement(TabBarButton, {
            id: 'shortcuts',
            title: 'Keyboard shortcuts',
            changeTab,
          }),
        ),
        import_react61.default.createElement(
          IconButton,
          {
            onClick: (e3) => (e3.preventDefault(), onClose()),
            title: 'Close settings page',
          },
          import_react61.default.createElement(CloseIcon, null),
        ),
      ),
      import_react61.default.createElement(
        Content,
        { vertical: !0, horizontal: !1 },
        import_react61.default.createElement(
          Route2,
          { path: 'about' },
          import_react61.default.createElement(AboutPage, { key: 'about' }),
        ),
        import_react61.default.createElement(
          Route2,
          { path: 'whats-new' },
          import_react61.default.createElement(WhatsNewPage, {
            key: 'whats-new',
          }),
        ),
        import_react61.default.createElement(
          Route2,
          { path: 'shortcuts' },
          import_react61.default.createElement(ShortcutsPage, {
            key: 'shortcuts',
          }),
        ),
      ),
    )
  ),
  SettingsPages = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      changeTab = (tab) => api.changeSettingsTab(tab);
    return import_react61.default.createElement(Pages, {
      enableWhatsNew: state.whatsNewData?.status === 'SUCCESS',
      enableShortcuts: state.ui.enableShortcuts,
      changeTab,
      onClose: api.closeSettings,
    });
  },
  settingsPageAddon = {
    id: 'settings',
    url: '/settings/',
    title: 'Settings',
    type: typesX.experimental_PAGE,
    render: () =>
      import_react61.default.createElement(
        Route2,
        { path: '/settings/', startsWith: !0 },
        import_react61.default.createElement(SettingsPages, null),
      ),
  };
ThemeProvider.displayName = 'ThemeProvider';
q.displayName = 'HelmetProvider';
var Root3 = ({ provider }) =>
    import_react62.default.createElement(
      q,
      { key: 'helmet.Provider' },
      import_react62.default.createElement(
        LocationProvider,
        { key: 'location.provider' },
        import_react62.default.createElement(Main, { provider }),
      ),
    ),
  Main = ({ provider }) => {
    let navigate = useNavigate2();
    return import_react62.default.createElement(
      Location,
      { key: 'location.consumer' },
      (locationData) =>
        import_react62.default.createElement(
          ManagerProvider,
          {
            key: 'manager',
            provider,
            ...locationData,
            navigate,
            docsOptions: scope?.DOCS_OPTIONS || {},
          },
          (combo) => {
            let { state, api } = combo,
              setManagerLayoutState = (0, import_react62.useCallback)(
                (sizes) => {
                  api.setSizes(sizes);
                },
                [api],
              ),
              pages = (0, import_react62.useMemo)(
                () => [
                  settingsPageAddon,
                  ...Object.values(api.getElements(typesX.experimental_PAGE)),
                ],
                [Object.keys(api.getElements(typesX.experimental_PAGE)).join()],
              );
            return import_react62.default.createElement(
              ThemeProvider,
              { key: 'theme.provider', theme: ensure(state.theme) },
              import_react62.default.createElement(
                LayoutProvider,
                null,
                import_react62.default.createElement(App, {
                  key: 'app',
                  pages,
                  managerLayoutState: {
                    ...state.layout,
                    viewMode: state.viewMode,
                  },
                  hasTab: !!api.getQueryParam('tab'),
                  setManagerLayoutState,
                }),
              ),
            );
          },
        ),
    );
  };
function renderStorybookUI(domNode, provider) {
  if (!(provider instanceof Provider))
    throw new ProviderDoesNotExtendBaseProviderError();
  (0, import_client.createRoot)(domNode).render(
    import_react62.default.createElement(Root3, { key: 'root', provider }),
  );
}
export { Provider, Root3 as Root, renderStorybookUI };
