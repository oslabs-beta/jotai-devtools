try {
  (() => {
    var Te = Object.create;
    var q = Object.defineProperty;
    var Re = Object.getOwnPropertyDescriptor;
    var ve = Object.getOwnPropertyNames;
    var he = Object.getPrototypeOf,
      ge = Object.prototype.hasOwnProperty;
    var Y = (t, e) => () => (t && (e = t((t = 0))), e);
    var be = (t, e) => () => (
      e || t((e = { exports: {} }).exports, e), e.exports
    );
    var Ae = (t, e, r, o) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let n of ve(e))
          !ge.call(t, n) &&
            n !== r &&
            q(t, n, {
              get: () => e[n],
              enumerable: !(o = Re(e, n)) || o.enumerable,
            });
      return t;
    };
    var Ce = (t, e, r) => (
      (r = t != null ? Te(he(t)) : {}),
      Ae(
        e || !t || !t.__esModule
          ? q(r, 'default', { value: t, enumerable: !0 })
          : r,
        t,
      )
    );
    var a = Y(() => {});
    var c = Y(() => {});
    var i = Y(() => {});
    var oe = be((ta, re) => {
      'use strict';
      a();
      c();
      i();
      re.exports = function t(e, r) {
        if (e === r) return !0;
        if (e && r && typeof e == 'object' && typeof r == 'object') {
          if (e.constructor !== r.constructor) return !1;
          var o, n, l;
          if (Array.isArray(e)) {
            if (((o = e.length), o != r.length)) return !1;
            for (n = o; n-- !== 0; ) if (!t(e[n], r[n])) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === r.source && e.flags === r.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === r.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === r.toString();
          if (
            ((l = Object.keys(e)), (o = l.length), o !== Object.keys(r).length)
          )
            return !1;
          for (n = o; n-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(r, l[n])) return !1;
          for (n = o; n-- !== 0; ) {
            var s = l[n];
            if (!t(e[s], r[s])) return !1;
          }
          return !0;
        }
        return e !== e && r !== r;
      };
    });
    a();
    c();
    i();
    a();
    c();
    i();
    a();
    c();
    i();
    var Ze = __STORYBOOK_ADDONS__,
      { addons: I, types: $, mockChannel: et } = __STORYBOOK_ADDONS__;
    a();
    c();
    i();
    var at = __STORYBOOK_THEMING__,
      {
        CacheProvider: ct,
        ClassNames: it,
        Global: lt,
        ThemeProvider: ut,
        background: st,
        color: ft,
        convert: mt,
        create: pt,
        createCache: Et,
        createGlobal: dt,
        createReset: _t,
        css: St,
        darken: yt,
        ensure: Ot,
        ignoreSsrWarning: Tt,
        isPropValid: Rt,
        jsx: vt,
        keyframes: ht,
        lighten: gt,
        styled: bt,
        themes: A,
        typography: At,
        useTheme: Ct,
        withTheme: Pt,
      } = __STORYBOOK_THEMING__;
    a();
    c();
    i();
    var It = __REACT__,
      {
        Children: Lt,
        Component: Mt,
        Fragment: xt,
        Profiler: Ht,
        PureComponent: jt,
        StrictMode: Yt,
        Suspense: Bt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gt,
        cloneElement: Wt,
        createContext: Ut,
        createElement: u,
        createFactory: Kt,
        createRef: Ft,
        forwardRef: zt,
        isValidElement: Vt,
        lazy: Xt,
        memo: qt,
        useCallback: L,
        useContext: $t,
        useDebugValue: Jt,
        useEffect: C,
        useImperativeHandle: Qt,
        useLayoutEffect: Zt,
        useMemo: J,
        useReducer: er,
        useRef: tr,
        useState: Q,
        version: rr,
      } = __REACT__;
    a();
    c();
    i();
    a();
    c();
    i();
    var Z = (() => {
      let t;
      return (
        typeof window < 'u'
          ? (t = window)
          : typeof globalThis < 'u'
            ? (t = globalThis)
            : typeof window < 'u'
              ? (t = window)
              : typeof self < 'u'
                ? (t = self)
                : (t = {}),
        t
      );
    })();
    a();
    c();
    i();
    var sr = __STORYBOOK_COMPONENTS__,
      {
        A: fr,
        ActionBar: mr,
        AddonPanel: pr,
        Badge: Er,
        Bar: dr,
        Blockquote: _r,
        Button: Sr,
        ClipboardCode: yr,
        Code: Or,
        DL: Tr,
        Div: Rr,
        DocumentWrapper: vr,
        ErrorFormatter: hr,
        FlexBar: gr,
        Form: br,
        H1: Ar,
        H2: Cr,
        H3: Pr,
        H4: Dr,
        H5: Nr,
        H6: kr,
        HR: wr,
        IconButton: ee,
        IconButtonSkeleton: Ir,
        Icons: Lr,
        Img: Mr,
        LI: xr,
        Link: Hr,
        ListItem: jr,
        Loader: Yr,
        OL: Br,
        P: Gr,
        Placeholder: Wr,
        Pre: Ur,
        ResetWrapper: Kr,
        ScrollArea: Fr,
        Separator: zr,
        Spaced: Vr,
        Span: Xr,
        StorybookIcon: qr,
        StorybookLogo: $r,
        Symbols: Jr,
        SyntaxHighlighter: Qr,
        TT: Zr,
        TabBar: eo,
        TabButton: to,
        TabWrapper: ro,
        Table: oo,
        Tabs: no,
        TabsState: ao,
        TooltipLinkList: co,
        TooltipMessage: io,
        TooltipNote: lo,
        UL: uo,
        WithTooltip: so,
        WithTooltipPure: fo,
        Zoom: mo,
        codeCommon: po,
        components: Eo,
        createCopyToClipboardFunction: _o,
        getStoryHref: So,
        icons: yo,
        interleaveSeparators: Oo,
        nameSpaceClassNames: To,
        resetComponents: Ro,
        withReset: vo,
      } = __STORYBOOK_COMPONENTS__;
    a();
    c();
    i();
    var Co = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: Po,
        CONFIG_ERROR: Do,
        CURRENT_STORY_WAS_SET: No,
        DOCS_PREPARED: ko,
        DOCS_RENDERED: B,
        FORCE_REMOUNT: wo,
        FORCE_RE_RENDER: Io,
        GLOBALS_UPDATED: Lo,
        IGNORED_EXCEPTION: Mo,
        NAVIGATE_URL: xo,
        PLAY_FUNCTION_THREW_EXCEPTION: Ho,
        PRELOAD_ENTRIES: jo,
        PREVIEW_BUILDER_PROGRESS: Yo,
        PREVIEW_KEYDOWN: Bo,
        REGISTER_SUBSCRIPTION: Go,
        REQUEST_WHATS_NEW_DATA: Wo,
        RESET_STORY_ARGS: Uo,
        RESULT_WHATS_NEW_DATA: Ko,
        SELECT_STORY: Fo,
        SET_CONFIG: zo,
        SET_CURRENT_STORY: Vo,
        SET_GLOBALS: Xo,
        SET_INDEX: qo,
        SET_STORIES: G,
        SET_WHATS_NEW_CACHE: $o,
        SHARED_STATE_CHANGED: Jo,
        SHARED_STATE_SET: Qo,
        STORIES_COLLAPSE_ALL: Zo,
        STORIES_EXPAND_ALL: en,
        STORY_ARGS_UPDATED: tn,
        STORY_CHANGED: W,
        STORY_ERRORED: rn,
        STORY_INDEX_INVALIDATED: on,
        STORY_MISSING: nn,
        STORY_PREPARED: an,
        STORY_RENDERED: cn,
        STORY_RENDER_PHASE_CHANGED: ln,
        STORY_SPECIFIED: un,
        STORY_THREW_EXCEPTION: sn,
        STORY_UNCHANGED: fn,
        TELEMETRY_ERROR: mn,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: pn,
        UPDATE_GLOBALS: En,
        UPDATE_QUERY_PARAMS: dn,
        UPDATE_STORY_ARGS: _n,
      } = __STORYBOOK_CORE_EVENTS__;
    a();
    c();
    i();
    var Rn = __STORYBOOK_API__,
      {
        ActiveTabs: vn,
        Consumer: hn,
        ManagerContext: gn,
        Provider: bn,
        addons: An,
        combineParameters: Cn,
        controlOrMetaKey: Pn,
        controlOrMetaSymbol: Dn,
        eventMatchesShortcut: Nn,
        eventToShortcut: kn,
        isMacLike: wn,
        isShortcutTaken: In,
        keyToSymbol: Ln,
        merge: Mn,
        mockChannel: xn,
        optionOrAltSymbol: Hn,
        shortcutMatchesShortcut: jn,
        shortcutToHumanString: Yn,
        types: Bn,
        useAddonState: Gn,
        useArgTypes: Wn,
        useArgs: Un,
        useChannel: Kn,
        useGlobalTypes: Fn,
        useGlobals: zn,
        useParameter: te,
        useSharedState: Vn,
        useStoryPrepared: Xn,
        useStorybookApi: qn,
        useStorybookState: $n,
      } = __STORYBOOK_API__;
    var z = Ce(oe());
    a();
    c();
    i();
    var ne = 'DARK_MODE',
      U = 'UPDATE_DARK_MODE';
    a();
    c();
    i();
    function ae() {
      return u(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          version: '1.1',
          viewBox: '0 0 129 129',
          enableBackground: 'new 0 0 129 129',
          style: { fill: 'currentColor' },
        },
        u(
          'g',
          null,
          u('path', {
            d: 'm64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z',
          }),
          u('path', {
            d: 'm68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z',
          }),
          u('path', {
            d: 'm60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z',
          }),
          u('path', {
            d: 'm96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z',
          }),
          u('path', {
            d: 'm23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z',
          }),
          u('path', {
            d: 'm122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z',
          }),
          u('path', {
            d: 'm10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z',
          }),
          u('path', {
            d: 'm102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z',
          }),
          u('path', {
            d: 'm38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z',
          }),
        ),
      );
    }
    a();
    c();
    i();
    function ce() {
      return u(
        'svg',
        {
          version: '1.1',
          id: 'Capa_1',
          x: '0px',
          y: '0px',
          viewBox: '0 0 438.277 438.277',
          style: { fill: 'currentColor', height: 13 },
        },
        u('path', {
          d: 'M428.756,300.104c-0.664-3.81-2.334-7.047-4.996-9.713c-5.9-5.903-12.752-7.142-20.554-3.716   c-20.937,9.708-42.641,14.558-65.097,14.558c-28.171,0-54.152-6.94-77.943-20.838c-23.791-13.894-42.631-32.736-56.525-56.53   c-13.899-23.793-20.844-49.773-20.844-77.945c0-21.888,4.333-42.683,12.991-62.384c8.66-19.7,21.176-36.973,37.543-51.82   c6.283-5.898,7.713-12.752,4.287-20.557c-3.236-7.801-9.041-11.511-17.415-11.132c-29.121,1.141-56.72,7.664-82.797,19.556   C111.33,31.478,88.917,47.13,70.168,66.548c-18.747,19.414-33.595,42.399-44.54,68.95c-10.942,26.553-16.416,54.39-16.416,83.511   c0,29.694,5.806,58.054,17.416,85.082c11.613,27.028,27.218,50.344,46.824,69.949c19.604,19.599,42.92,35.207,69.951,46.822   c27.028,11.607,55.384,17.415,85.075,17.415c42.64,0,81.987-11.563,118.054-34.69c36.069-23.124,63.05-54.006,80.944-92.645   C429,307.519,429.427,303.906,428.756,300.104z M306.565,384.168c-24.646,11.711-50.676,17.562-78.087,17.562   c-24.743,0-48.39-4.853-70.947-14.558c-22.554-9.705-41.971-22.695-58.246-38.972c-16.271-16.272-29.259-35.686-38.97-58.241   c-9.707-22.556-14.561-46.203-14.561-70.948c0-40.922,12.135-77.466,36.403-109.636c24.266-32.165,55.531-53.959,93.788-65.379   c-19.795,31.405-29.694,65.379-29.694,101.926c0,34.644,8.564,66.715,25.697,96.223c17.128,29.499,40.446,52.811,69.95,69.948   c29.499,17.129,61.565,25.694,96.211,25.694c10.656,0,21.129-0.855,31.408-2.57C352.199,356.155,331.21,372.472,306.565,384.168z',
        }),
      );
    }
    function D(t) {
      '@babel/helpers - typeof';
      return (
        (D =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        D(t)
      );
    }
    var Pe = ['current', 'stylePreview'],
      K;
    function De(t, e) {
      if (t == null) return {};
      var r = Ne(t, e),
        o,
        n;
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(t);
        for (n = 0; n < l.length; n++)
          (o = l[n]),
            !(e.indexOf(o) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, o) &&
              (r[o] = t[o]);
      }
      return r;
    }
    function Ne(t, e) {
      if (t == null) return {};
      var r = {},
        o = Object.keys(t),
        n,
        l;
      for (l = 0; l < o.length; l++)
        (n = o[l]), !(e.indexOf(n) >= 0) && (r[n] = t[n]);
      return r;
    }
    function ke(t, e) {
      return Le(t) || Ie(t, e) || le(t, e) || we();
    }
    function we() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Ie(t, e) {
      var r =
        t == null
          ? null
          : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
      if (r != null) {
        var o,
          n,
          l,
          s,
          _ = [],
          y = !0,
          R = !1;
        try {
          if (((l = (r = r.call(t)).next), e === 0)) {
            if (Object(r) !== r) return;
            y = !1;
          } else
            for (
              ;
              !(y = (o = l.call(r)).done) && (_.push(o.value), _.length !== e);
              y = !0
            );
        } catch (f) {
          (R = !0), (n = f);
        } finally {
          try {
            if (!y && r.return != null && ((s = r.return()), Object(s) !== s))
              return;
          } finally {
            if (R) throw n;
          }
        }
        return _;
      }
    }
    function Le(t) {
      if (Array.isArray(t)) return t;
    }
    function ie(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function O(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? ie(Object(r), !0).forEach(function (o) {
              Me(t, o, r[o]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ie(Object(r)).forEach(function (o) {
                Object.defineProperty(
                  t,
                  o,
                  Object.getOwnPropertyDescriptor(r, o),
                );
              });
      }
      return t;
    }
    function Me(t, e, r) {
      return (
        (e = xe(e)),
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function xe(t) {
      var e = He(t, 'string');
      return D(e) === 'symbol' ? e : String(e);
    }
    function He(t, e) {
      if (D(t) !== 'object' || t === null) return t;
      var r = t[Symbol.toPrimitive];
      if (r !== void 0) {
        var o = r.call(t, e || 'default');
        if (D(o) !== 'object') return o;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (e === 'string' ? String : Number)(t);
    }
    function x(t) {
      return Be(t) || Ye(t) || le(t) || je();
    }
    function je() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function le(t, e) {
      if (t) {
        if (typeof t == 'string') return F(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name),
          r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (
          r === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return F(t, e);
      }
    }
    function Ye(t) {
      if (
        (typeof Symbol < 'u' && t[Symbol.iterator] != null) ||
        t['@@iterator'] != null
      )
        return Array.from(t);
    }
    function Be(t) {
      if (Array.isArray(t)) return F(t);
    }
    function F(t, e) {
      (e == null || e > t.length) && (e = t.length);
      for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
      return o;
    }
    var ue = Z,
      se = ue.document,
      j = ue.window;
    var fe = 'sb-addon-themes-3',
      b =
        (K = j.matchMedia) === null || K === void 0
          ? void 0
          : K.call(j, '(prefers-color-scheme: dark)'),
      V = {
        classTarget: 'body',
        dark: A.dark,
        darkClass: ['dark'],
        light: A.light,
        lightClass: ['light'],
        stylePreview: !1,
        userHasExplicitlySetTheTheme: !1,
      },
      P = function (e) {
        j.localStorage.setItem(fe, JSON.stringify(e));
      },
      me = function (e, r) {
        var o = r.current,
          n = r.darkClass,
          l = n === void 0 ? V.darkClass : n,
          s = r.lightClass,
          _ = s === void 0 ? V.lightClass : s;
        if (o === 'dark') {
          var y, R;
          (y = e.classList).remove.apply(y, x(H(_))),
            (R = e.classList).add.apply(R, x(H(l)));
        } else {
          var f, g;
          (f = e.classList).remove.apply(f, x(H(l))),
            (g = e.classList).add.apply(g, x(H(_)));
        }
      },
      H = function (e) {
        var r = [];
        return r.concat(e).map(function (o) {
          return o;
        });
      },
      Ge = function (e) {
        var r,
          o = se.getElementById('storybook-preview-iframe');
        if (o) {
          var n =
              o.contentDocument ||
              ((r = o.contentWindow) === null || r === void 0
                ? void 0
                : r.document),
            l = n?.querySelector(e.classTarget);
          l && me(l, e);
        }
      },
      pe = function (e) {
        var r = se.querySelector(e.classTarget);
        r && me(r, e);
      },
      T = function () {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          r = j.localStorage.getItem(fe);
        if (typeof r == 'string') {
          var o = JSON.parse(r);
          return (
            e &&
              (e.dark &&
                !(0, z.default)(o.dark, e.dark) &&
                ((o.dark = e.dark), P(o)),
              e.light &&
                !(0, z.default)(o.light, e.light) &&
                ((o.light = e.light), P(o))),
            o
          );
        }
        return O(O({}, V), e);
      };
    pe(T());
    function We(t) {
      var e = t.api,
        r = Q(b.matches),
        o = ke(r, 2),
        n = o[0],
        l = o[1],
        s = te('darkMode', {}),
        _ = s.current,
        y = s.stylePreview,
        R = De(s, Pe),
        f = e.getChannel(),
        g = J(
          function () {
            return T(R).userHasExplicitlySetTheTheme;
          },
          [R],
        ),
        k = L(
          function (m) {
            var S = T();
            e.setOptions({ theme: S[m] }),
              l(m === 'dark'),
              e.getChannel().emit(ne, m === 'dark'),
              pe(S),
              y && Ge(S);
          },
          [e, y],
        ),
        h = L(
          function (m) {
            var S = T(),
              w = m || (S.current === 'dark' ? 'light' : 'dark');
            P(O(O({}, S), {}, { current: w })), k(w);
          },
          [k],
        );
      function X(m) {
        g || _ || h(m.matches ? 'dark' : 'light');
      }
      var v = L(
          function () {
            var m = T(),
              S = m.current,
              w = S === void 0 ? 'light' : S;
            k(w);
          },
          [k],
        ),
        Oe = function () {
          h();
          var S = T();
          P(O(O({}, S), {}, { userHasExplicitlySetTheTheme: !0 }));
        };
      return (
        C(
          function () {
            var m = T();
            P(O(O(O({}, m), s), {}, { current: m.current || s.current })), v();
          },
          [s, v],
        ),
        C(function () {
          return (
            f.on(W, v),
            f.on(G, v),
            f.on(B, v),
            b.addListener(X),
            function () {
              f.removeListener(W, v),
                f.removeListener(G, v),
                f.removeListener(B, v),
                b.removeListener(X);
            }
          );
        }),
        C(function () {
          return (
            f.on(U, h),
            function () {
              f.removeListener(U, h);
            }
          );
        }),
        C(
          function () {
            g || (_ ? h(_) : b.matches && h('dark'));
          },
          [_, h, g],
        ),
        u(
          ee,
          {
            key: 'dark-mode',
            title: n
              ? 'Change theme to light mode'
              : 'Change theme to dark mode',
            onClick: Oe,
          },
          n ? u(ae, null) : u(ce, null),
        )
      );
    }
    var Ee = We;
    function N(t) {
      '@babel/helpers - typeof';
      return (
        (N =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        N(t)
      );
    }
    function de(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function _e(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? de(Object(r), !0).forEach(function (o) {
              Ue(t, o, r[o]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : de(Object(r)).forEach(function (o) {
                Object.defineProperty(
                  t,
                  o,
                  Object.getOwnPropertyDescriptor(r, o),
                );
              });
      }
      return t;
    }
    function Ue(t, e, r) {
      return (
        (e = Ke(e)),
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Ke(t) {
      var e = Fe(t, 'string');
      return N(e) === 'symbol' ? e : String(e);
    }
    function Fe(t, e) {
      if (N(t) !== 'object' || t === null) return t;
      var r = t[Symbol.toPrimitive];
      if (r !== void 0) {
        var o = r.call(t, e || 'default');
        if (N(o) !== 'object') return o;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (e === 'string' ? String : Number)(t);
    }
    var ye = T(),
      Se = ye.current || (b.matches && 'dark') || 'light';
    I.setConfig({ theme: _e(_e({}, A[Se]), ye[Se]) });
    I.register('storybook/dark-mode', function (t) {
      I.add('storybook/dark-mode', {
        title: 'dark mode',
        type: $.TOOL,
        match: function (r) {
          var o = r.viewMode;
          return o === 'story' || o === 'docs';
        },
        render: function () {
          return u(Ee, { api: t });
        },
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}