try {
  (() => {
    var o = __REACT__,
      {
        Children: Sr,
        Component: br,
        Fragment: G,
        Profiler: yr,
        PureComponent: se,
        StrictMode: Tr,
        Suspense: _r,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Or,
        cloneElement: U,
        createContext: ue,
        createElement: h,
        createFactory: vr,
        createRef: de,
        forwardRef: Cr,
        isValidElement: me,
        lazy: Ar,
        memo: xr,
        startTransition: kr,
        unstable_act: Dr,
        useCallback: v,
        useContext: pe,
        useDebugValue: wr,
        useDeferredValue: Nr,
        useEffect: P,
        useId: Lr,
        useImperativeHandle: Hr,
        useInsertionEffect: Pr,
        useLayoutEffect: ge,
        useMemo: $,
        useReducer: Br,
        useRef: F,
        useState: D,
        useSyncExternalStore: Mr,
        useTransition: Gr,
        version: Ur,
      } = __REACT__;
    var jr = __STORYBOOK_API__,
      {
        ActiveTabs: Yr,
        Consumer: zr,
        ManagerContext: Vr,
        Provider: Kr,
        addons: W,
        combineParameters: qr,
        controlOrMetaKey: Xr,
        controlOrMetaSymbol: Qr,
        eventMatchesShortcut: Zr,
        eventToShortcut: Jr,
        isMacLike: eo,
        isShortcutTaken: to,
        keyToSymbol: no,
        merge: ro,
        mockChannel: oo,
        optionOrAltSymbol: ao,
        shortcutMatchesShortcut: io,
        shortcutToHumanString: co,
        types: K,
        useAddonState: q,
        useArgTypes: lo,
        useArgs: so,
        useChannel: X,
        useGlobalTypes: uo,
        useGlobals: mo,
        useParameter: he,
        useSharedState: po,
        useStoryPrepared: go,
        useStorybookApi: Q,
        useStorybookState: Ie,
      } = __STORYBOOK_API__;
    var Ro = __STORYBOOK_COMPONENTS__,
      {
        A: So,
        ActionBar: Z,
        AddonPanel: bo,
        Badge: J,
        Bar: yo,
        Blockquote: To,
        Button: _o,
        ClipboardCode: Oo,
        Code: vo,
        DL: Co,
        Div: Ao,
        DocumentWrapper: xo,
        EmptyTabContent: fe,
        ErrorFormatter: ko,
        FlexBar: Do,
        Form: wo,
        H1: No,
        H2: Lo,
        H3: Ho,
        H4: Po,
        H5: Bo,
        H6: Mo,
        HR: Go,
        IconButton: Ee,
        IconButtonSkeleton: Uo,
        Icons: $o,
        Img: Fo,
        LI: Wo,
        Link: jo,
        ListItem: Yo,
        Loader: zo,
        OL: Vo,
        P: Ko,
        Placeholder: qo,
        Pre: Xo,
        ResetWrapper: Qo,
        ScrollArea: Re,
        Separator: Zo,
        Spaced: Se,
        Span: Jo,
        StorybookIcon: ea,
        StorybookLogo: ta,
        Symbols: na,
        SyntaxHighlighter: ra,
        TT: oa,
        TabBar: aa,
        TabButton: ia,
        TabWrapper: ca,
        Table: la,
        Tabs: sa,
        TabsState: ua,
        TooltipLinkList: be,
        TooltipMessage: da,
        TooltipNote: ma,
        UL: pa,
        WithTooltip: ye,
        WithTooltipPure: ga,
        Zoom: ha,
        codeCommon: Ia,
        components: fa,
        createCopyToClipboardFunction: Ea,
        getStoryHref: Ra,
        icons: Sa,
        interleaveSeparators: ba,
        nameSpaceClassNames: ya,
        resetComponents: Ta,
        withReset: _a,
      } = __STORYBOOK_COMPONENTS__;
    var xa = __STORYBOOK_THEMING__,
      {
        CacheProvider: ka,
        ClassNames: Da,
        Global: Te,
        ThemeProvider: wa,
        background: Na,
        color: La,
        convert: j,
        create: Ha,
        createCache: Pa,
        createGlobal: Ba,
        createReset: Ma,
        css: Ga,
        darken: Ua,
        ensure: $a,
        ignoreSsrWarning: Fa,
        isPropValid: Wa,
        jsx: ja,
        keyframes: Ya,
        lighten: za,
        styled: l,
        themes: Y,
        typography: Va,
        useTheme: Ka,
        withTheme: qa,
      } = __STORYBOOK_THEMING__;
    var ei = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ti,
        AccessibilityIcon: _e,
        AddIcon: ni,
        AdminIcon: ri,
        AlertAltIcon: oi,
        AlertIcon: ai,
        AlignLeftIcon: ii,
        AlignRightIcon: ci,
        AppleIcon: li,
        ArrowDownIcon: si,
        ArrowLeftIcon: ui,
        ArrowRightIcon: di,
        ArrowSolidDownIcon: mi,
        ArrowSolidLeftIcon: pi,
        ArrowSolidRightIcon: gi,
        ArrowSolidUpIcon: hi,
        ArrowUpIcon: Ii,
        AzureDevOpsIcon: fi,
        BackIcon: Ei,
        BasketIcon: Ri,
        BatchAcceptIcon: Si,
        BatchDenyIcon: bi,
        BeakerIcon: yi,
        BellIcon: Ti,
        BitbucketIcon: _i,
        BoldIcon: Oi,
        BookIcon: vi,
        BookmarkHollowIcon: Ci,
        BookmarkIcon: Ai,
        BottomBarIcon: xi,
        BottomBarToggleIcon: ki,
        BoxIcon: Di,
        BranchIcon: wi,
        BrowserIcon: Ni,
        ButtonIcon: Li,
        CPUIcon: Hi,
        CalendarIcon: Pi,
        CameraIcon: Bi,
        CategoryIcon: Mi,
        CertificateIcon: Gi,
        ChangedIcon: Ui,
        ChatIcon: $i,
        CheckIcon: Oe,
        ChevronDownIcon: Fi,
        ChevronLeftIcon: Wi,
        ChevronRightIcon: ji,
        ChevronSmallDownIcon: ve,
        ChevronSmallLeftIcon: Yi,
        ChevronSmallRightIcon: zi,
        ChevronSmallUpIcon: Vi,
        ChevronUpIcon: Ki,
        ChromaticIcon: qi,
        ChromeIcon: Xi,
        CircleHollowIcon: Qi,
        CircleIcon: Zi,
        ClearIcon: Ji,
        CloseAltIcon: ec,
        CloseIcon: tc,
        CloudHollowIcon: nc,
        CloudIcon: rc,
        CogIcon: oc,
        CollapseIcon: ac,
        CommandIcon: ic,
        CommentAddIcon: cc,
        CommentIcon: lc,
        CommentsIcon: sc,
        CommitIcon: uc,
        CompassIcon: dc,
        ComponentDrivenIcon: mc,
        ComponentIcon: pc,
        ContrastIcon: gc,
        ControlsIcon: hc,
        CopyIcon: Ic,
        CreditIcon: fc,
        CrossIcon: Ec,
        DashboardIcon: Rc,
        DatabaseIcon: Sc,
        DeleteIcon: bc,
        DiamondIcon: yc,
        DirectionIcon: Tc,
        DiscordIcon: _c,
        DocChartIcon: Oc,
        DocListIcon: vc,
        DocumentIcon: Cc,
        DownloadIcon: Ac,
        DragIcon: xc,
        EditIcon: kc,
        EllipsisIcon: Dc,
        EmailIcon: wc,
        ExpandAltIcon: Nc,
        ExpandIcon: Lc,
        EyeCloseIcon: Hc,
        EyeIcon: Pc,
        FaceHappyIcon: Bc,
        FaceNeutralIcon: Mc,
        FaceSadIcon: Gc,
        FacebookIcon: Uc,
        FailedIcon: $c,
        FastForwardIcon: Fc,
        FigmaIcon: Wc,
        FilterIcon: jc,
        FlagIcon: Yc,
        FolderIcon: zc,
        FormIcon: Vc,
        GDriveIcon: Kc,
        GithubIcon: qc,
        GitlabIcon: Xc,
        GlobeIcon: Qc,
        GoogleIcon: Zc,
        GraphBarIcon: Jc,
        GraphLineIcon: el,
        GraphqlIcon: tl,
        GridAltIcon: nl,
        GridIcon: rl,
        GrowIcon: ol,
        HeartHollowIcon: al,
        HeartIcon: il,
        HomeIcon: cl,
        HourglassIcon: ll,
        InfoIcon: sl,
        ItalicIcon: ul,
        JumpToIcon: dl,
        KeyIcon: ml,
        LightningIcon: pl,
        LightningOffIcon: gl,
        LinkBrokenIcon: hl,
        LinkIcon: Il,
        LinkedinIcon: fl,
        LinuxIcon: El,
        ListOrderedIcon: Rl,
        ListUnorderedIcon: Sl,
        LocationIcon: bl,
        LockIcon: yl,
        MarkdownIcon: Tl,
        MarkupIcon: _l,
        MediumIcon: Ol,
        MemoryIcon: vl,
        MenuIcon: Cl,
        MergeIcon: Al,
        MirrorIcon: xl,
        MobileIcon: kl,
        MoonIcon: Dl,
        NutIcon: wl,
        OutboxIcon: Nl,
        OutlineIcon: Ll,
        PaintBrushIcon: Hl,
        PaperClipIcon: Pl,
        ParagraphIcon: Bl,
        PassedIcon: Ml,
        PhoneIcon: Gl,
        PhotoDragIcon: Ul,
        PhotoIcon: $l,
        PinAltIcon: Fl,
        PinIcon: Wl,
        PlayBackIcon: jl,
        PlayIcon: Yl,
        PlayNextIcon: zl,
        PlusIcon: Vl,
        PointerDefaultIcon: Kl,
        PointerHandIcon: ql,
        PowerIcon: Xl,
        PrintIcon: Ql,
        ProceedIcon: Zl,
        ProfileIcon: Jl,
        PullRequestIcon: es,
        QuestionIcon: ts,
        RSSIcon: ns,
        RedirectIcon: rs,
        ReduxIcon: os,
        RefreshIcon: as,
        ReplyIcon: is,
        RepoIcon: cs,
        RequestChangeIcon: ls,
        RewindIcon: ss,
        RulerIcon: us,
        SearchIcon: ds,
        ShareAltIcon: ms,
        ShareIcon: ps,
        ShieldIcon: gs,
        SideBySideIcon: hs,
        SidebarAltIcon: Is,
        SidebarAltToggleIcon: fs,
        SidebarIcon: Es,
        SidebarToggleIcon: Rs,
        SpeakerIcon: Ss,
        StackedIcon: bs,
        StarHollowIcon: ys,
        StarIcon: Ts,
        StickerIcon: _s,
        StopAltIcon: Os,
        StopIcon: vs,
        StorybookIcon: Cs,
        StructureIcon: As,
        SubtractIcon: xs,
        SunIcon: ks,
        SupportIcon: Ds,
        SwitchAltIcon: ws,
        SyncIcon: Ce,
        TabletIcon: Ns,
        ThumbsUpIcon: Ls,
        TimeIcon: Hs,
        TimerIcon: Ps,
        TransferIcon: Bs,
        TrashIcon: Ms,
        TwitterIcon: Gs,
        TypeIcon: Us,
        UbuntuIcon: $s,
        UndoIcon: Fs,
        UnfoldIcon: Ws,
        UnlockIcon: js,
        UnpinIcon: Ys,
        UploadIcon: zs,
        UserAddIcon: Vs,
        UserAltIcon: Ks,
        UserIcon: qs,
        UsersIcon: Xs,
        VSCodeIcon: Qs,
        VerifiedIcon: Zs,
        VideoIcon: Js,
        WandIcon: eu,
        WatchIcon: tu,
        WindowsIcon: nu,
        WrenchIcon: ru,
        YoutubeIcon: ou,
        ZoomIcon: au,
        ZoomOutIcon: iu,
        ZoomResetIcon: cu,
        iconList: lu,
      } = __STORYBOOK_ICONS__;
    var pu = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: gu,
        createPortal: hu,
        createRoot: Iu,
        findDOMNode: Ae,
        flushSync: fu,
        hydrate: Eu,
        hydrateRoot: Ru,
        render: Su,
        unmountComponentAtNode: bu,
        unstable_batchedUpdates: yu,
        unstable_renderSubtreeIntoContainer: Tu,
        version: _u,
      } = __REACT_DOM__;
    var xu = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: ku,
        CHANNEL_WS_DISCONNECT: Du,
        CONFIG_ERROR: wu,
        CURRENT_STORY_WAS_SET: Nu,
        DOCS_PREPARED: Lu,
        DOCS_RENDERED: Hu,
        FORCE_REMOUNT: Pu,
        FORCE_RE_RENDER: Bu,
        GLOBALS_UPDATED: Mu,
        NAVIGATE_URL: Gu,
        PLAY_FUNCTION_THREW_EXCEPTION: Uu,
        PRELOAD_ENTRIES: $u,
        PREVIEW_BUILDER_PROGRESS: Fu,
        PREVIEW_KEYDOWN: Wu,
        REGISTER_SUBSCRIPTION: ju,
        REQUEST_WHATS_NEW_DATA: Yu,
        RESET_STORY_ARGS: zu,
        RESULT_WHATS_NEW_DATA: Vu,
        SELECT_STORY: Ku,
        SET_CONFIG: qu,
        SET_CURRENT_STORY: Xu,
        SET_GLOBALS: Qu,
        SET_INDEX: Zu,
        SET_STORIES: Ju,
        SET_WHATS_NEW_CACHE: ed,
        SHARED_STATE_CHANGED: td,
        SHARED_STATE_SET: nd,
        STORIES_COLLAPSE_ALL: rd,
        STORIES_EXPAND_ALL: od,
        STORY_ARGS_UPDATED: ad,
        STORY_CHANGED: xe,
        STORY_ERRORED: id,
        STORY_INDEX_INVALIDATED: cd,
        STORY_MISSING: ld,
        STORY_PREPARED: sd,
        STORY_RENDERED: ke,
        STORY_RENDER_PHASE_CHANGED: ud,
        STORY_SPECIFIED: dd,
        STORY_THREW_EXCEPTION: md,
        STORY_UNCHANGED: pd,
        TELEMETRY_ERROR: gd,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: hd,
        UNHANDLED_ERRORS_WHILE_PLAYING: Id,
        UPDATE_GLOBALS: fd,
        UPDATE_QUERY_PARAMS: Ed,
        UPDATE_STORY_ARGS: Rd,
      } = __STORYBOOK_CORE_EVENTS__;
    var De = 'storybook/highlight',
      we = `${De}/add`,
      _d = `${De}/reset`;
    var k = 'storybook/a11y',
      Ne = `${k}/panel`,
      nt = 'a11y',
      rt = `${k}/result`,
      ot = `${k}/request`,
      at = `${k}/running`,
      it = `${k}/error`,
      ct = `${k}/manual`,
      M = { RESULT: rt, REQUEST: ot, RUNNING: at, ERROR: it, MANUAL: ct },
      lt = (e) =>
        h(
          'svg',
          { ...e },
          h(
            'defs',
            null,
            h(
              'filter',
              { id: 'protanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'protanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'deuteranopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'deuteranomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'tritanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'tritanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
            h(
              'filter',
              { id: 'achromatopsia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0',
              }),
            ),
          ),
        ),
      st = 'storybook-preview-iframe',
      ut = [
        { name: 'blurred vision', percentage: 22.9 },
        { name: 'deuteranomaly', percentage: 2.7 },
        { name: 'deuteranopia', percentage: 0.56 },
        { name: 'protanomaly', percentage: 0.66 },
        { name: 'protanopia', percentage: 0.59 },
        { name: 'tritanomaly', percentage: 0.01 },
        { name: 'tritanopia', percentage: 0.016 },
        { name: 'achromatopsia', percentage: 1e-4 },
        { name: 'grayscale' },
      ],
      We = (e) =>
        e
          ? e === 'blurred vision'
            ? 'blur(2px)'
            : e === 'grayscale'
              ? 'grayscale(100%)'
              : `url('#${e}')`
          : 'none',
      dt = l.div(() => ({
        '&, & svg': { position: 'absolute', width: 0, height: 0 },
      })),
      mt = l.span(
        {
          background:
            'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
        },
        ({ filter: e }) => ({ filter: We(e) }),
        ({ theme: e }) => ({
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        }),
      ),
      pt = l.span({ display: 'flex', flexDirection: 'column' }),
      gt = l.span({ textTransform: 'capitalize' }),
      ht = l.span(({ theme: e }) => ({
        fontSize: 11,
        color: e.textMutedColor,
      })),
      It = (e, n) => [
        ...(e !== null
          ? [
              {
                id: 'reset',
                title: 'Reset color filter',
                onClick: () => {
                  n(null);
                },
                right: void 0,
                active: !1,
              },
            ]
          : []),
        ...ut.map((r) => {
          let t =
            r.percentage !== void 0 ? `${r.percentage}% of users` : void 0;
          return {
            id: r.name,
            title: o.createElement(
              pt,
              null,
              o.createElement(gt, null, r.name),
              t && o.createElement(ht, null, t),
            ),
            onClick: () => {
              n(r);
            },
            right: o.createElement(mt, { filter: r.name }),
            active: e === r,
          };
        }),
      ],
      ft = () => {
        let [e, n] = D(null);
        return o.createElement(
          o.Fragment,
          null,
          e &&
            o.createElement(Te, {
              styles: { [`#${st}`]: { filter: We(e.name) } },
            }),
          o.createElement(
            ye,
            {
              placement: 'top',
              tooltip: ({ onHide: r }) => {
                let t = It(e, (a) => {
                  n(a), r();
                });
                return o.createElement(be, { links: t });
              },
              closeOnOutsideClick: !0,
              onDoubleClick: () => n(null),
            },
            o.createElement(
              Ee,
              { key: 'filter', active: !!e, title: 'Vision simulator' },
              o.createElement(_e, null),
            ),
          ),
          o.createElement(dt, null, o.createElement(lt, null)),
        );
      },
      Et = l.div({ padding: 12, marginBottom: 10 }),
      Rt = l.p({ margin: '0 0 12px' }),
      St = l.a({
        marginTop: 12,
        textDecoration: 'underline',
        color: 'inherit',
        display: 'block',
      }),
      bt = ({ item: e }) =>
        o.createElement(
          Et,
          null,
          o.createElement(Rt, null, e.description),
          o.createElement(
            St,
            { href: e.helpUrl, target: '_blank' },
            'More info...',
          ),
        ),
      ne = function (e, n) {
        return (
          (ne =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, t) {
                r.__proto__ = t;
              }) ||
            function (r, t) {
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
            }),
          ne(e, n)
        );
      };
    function yt(e, n) {
      if (typeof n != 'function' && n !== null)
        throw new TypeError(
          'Class extends value ' + String(n) + ' is not a constructor or null',
        );
      ne(e, n);
      function r() {
        this.constructor = e;
      }
      e.prototype =
        n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
    }
    var re = function () {
      return (
        (re =
          Object.assign ||
          function (e) {
            for (var n, r = 1, t = arguments.length; r < t; r++) {
              n = arguments[r];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }),
        re.apply(this, arguments)
      );
    };
    function Tt(e, n) {
      var r = {};
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
          n.indexOf(t) < 0 &&
          (r[t] = e[t]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++)
          n.indexOf(t[a]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, t[a]) &&
            (r[t[a]] = e[t[a]]);
      return r;
    }
    var z =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u' || typeof window < 'u'
          ? window
          : typeof self < 'u'
            ? self
            : {};
    function _t(e) {
      var n = typeof e;
      return e != null && (n == 'object' || n == 'function');
    }
    var ae = _t,
      Ot = typeof z == 'object' && z && z.Object === Object && z,
      vt = Ot,
      Ct = vt,
      At = typeof self == 'object' && self && self.Object === Object && self,
      xt = Ct || At || Function('return this')(),
      je = xt,
      kt = je,
      Dt = function () {
        return kt.Date.now();
      },
      wt = Dt,
      Nt = /\s/;
    function Lt(e) {
      for (var n = e.length; n-- && Nt.test(e.charAt(n)); );
      return n;
    }
    var Ht = Lt,
      Pt = Ht,
      Bt = /^\s+/;
    function Mt(e) {
      return e && e.slice(0, Pt(e) + 1).replace(Bt, '');
    }
    var Gt = Mt,
      Ut = je,
      $t = Ut.Symbol,
      Ye = $t,
      Le = Ye,
      ze = Object.prototype,
      Ft = ze.hasOwnProperty,
      Wt = ze.toString,
      B = Le ? Le.toStringTag : void 0;
    function jt(e) {
      var n = Ft.call(e, B),
        r = e[B];
      try {
        e[B] = void 0;
        var t = !0;
      } catch {}
      var a = Wt.call(e);
      return t && (n ? (e[B] = r) : delete e[B]), a;
    }
    var Yt = jt,
      zt = Object.prototype,
      Vt = zt.toString;
    function Kt(e) {
      return Vt.call(e);
    }
    var qt = Kt,
      He = Ye,
      Xt = Yt,
      Qt = qt,
      Zt = '[object Null]',
      Jt = '[object Undefined]',
      Pe = He ? He.toStringTag : void 0;
    function en(e) {
      return e == null
        ? e === void 0
          ? Jt
          : Zt
        : Pe && Pe in Object(e)
          ? Xt(e)
          : Qt(e);
    }
    var tn = en;
    function nn(e) {
      return e != null && typeof e == 'object';
    }
    var rn = nn,
      on = tn,
      an = rn,
      cn = '[object Symbol]';
    function ln(e) {
      return typeof e == 'symbol' || (an(e) && on(e) == cn);
    }
    var sn = ln,
      un = Gt,
      Be = ae,
      dn = sn,
      Me = NaN,
      mn = /^[-+]0x[0-9a-f]+$/i,
      pn = /^0b[01]+$/i,
      gn = /^0o[0-7]+$/i,
      hn = parseInt;
    function In(e) {
      if (typeof e == 'number') return e;
      if (dn(e)) return Me;
      if (Be(e)) {
        var n = typeof e.valueOf == 'function' ? e.valueOf() : e;
        e = Be(n) ? n + '' : n;
      }
      if (typeof e != 'string') return e === 0 ? e : +e;
      e = un(e);
      var r = pn.test(e);
      return r || gn.test(e) ? hn(e.slice(2), r ? 2 : 8) : mn.test(e) ? Me : +e;
    }
    var fn = In,
      En = ae,
      ee = wt,
      Ge = fn,
      Rn = 'Expected a function',
      Sn = Math.max,
      bn = Math.min;
    function yn(e, n, r) {
      var t,
        a,
        u,
        s,
        i,
        m,
        p = 0,
        d = !1,
        g = !1,
        c = !0;
      if (typeof e != 'function') throw new TypeError(Rn);
      (n = Ge(n) || 0),
        En(r) &&
          ((d = !!r.leading),
          (g = 'maxWait' in r),
          (u = g ? Sn(Ge(r.maxWait) || 0, n) : u),
          (c = 'trailing' in r ? !!r.trailing : c));
      function E(f) {
        var _ = t,
          O = a;
        return (t = a = void 0), (p = f), (s = e.apply(O, _)), s;
      }
      function b(f) {
        return (p = f), (i = setTimeout(I, n)), d ? E(f) : s;
      }
      function y(f) {
        var _ = f - m,
          O = f - p,
          H = n - _;
        return g ? bn(H, u - O) : H;
      }
      function R(f) {
        var _ = f - m,
          O = f - p;
        return m === void 0 || _ >= n || _ < 0 || (g && O >= u);
      }
      function I() {
        var f = ee();
        if (R(f)) return S(f);
        i = setTimeout(I, y(f));
      }
      function S(f) {
        return (i = void 0), c && t ? E(f) : ((t = a = void 0), s);
      }
      function T() {
        i !== void 0 && clearTimeout(i), (p = 0), (t = m = a = i = void 0);
      }
      function L() {
        return i === void 0 ? s : S(ee());
      }
      function N() {
        var f = ee(),
          _ = R(f);
        if (((t = arguments), (a = this), (m = f), _)) {
          if (i === void 0) return b(m);
          if (g) return clearTimeout(i), (i = setTimeout(I, n)), E(m);
        }
        return i === void 0 && (i = setTimeout(I, n)), s;
      }
      return (N.cancel = T), (N.flush = L), N;
    }
    var Ve = yn,
      Tn = Ve,
      _n = ae,
      On = 'Expected a function';
    function vn(e, n, r) {
      var t = !0,
        a = !0;
      if (typeof e != 'function') throw new TypeError(On);
      return (
        _n(r) &&
          ((t = 'leading' in r ? !!r.leading : t),
          (a = 'trailing' in r ? !!r.trailing : a)),
        Tn(e, n, { leading: t, maxWait: n, trailing: a })
      );
    }
    var Cn = vn,
      Ke = function (e, n, r, t) {
        switch (n) {
          case 'debounce':
            return Ve(e, r, t);
          case 'throttle':
            return Cn(e, r, t);
          default:
            return e;
        }
      },
      oe = function (e) {
        return typeof e == 'function';
      },
      w = function () {
        return typeof window > 'u';
      },
      Ue = function (e) {
        return e instanceof Element || e instanceof HTMLDocument;
      },
      qe = function (e, n, r, t) {
        return function (a) {
          var u = a.width,
            s = a.height;
          n(function (i) {
            return (i.width === u && i.height === s) ||
              (i.width === u && !t) ||
              (i.height === s && !r)
              ? i
              : (e && oe(e) && e(u, s), { width: u, height: s });
          });
        };
      };
    (function (e) {
      yt(n, e);
      function n(r) {
        var t = e.call(this, r) || this;
        (t.cancelHandler = function () {
          t.resizeHandler &&
            t.resizeHandler.cancel &&
            (t.resizeHandler.cancel(), (t.resizeHandler = null));
        }),
          (t.attachObserver = function () {
            var p = t.props,
              d = p.targetRef,
              g = p.observerOptions;
            if (!w()) {
              d && d.current && (t.targetRef.current = d.current);
              var c = t.getElement();
              c &&
                ((t.observableElement && t.observableElement === c) ||
                  ((t.observableElement = c), t.resizeObserver.observe(c, g)));
            }
          }),
          (t.getElement = function () {
            var p = t.props,
              d = p.querySelector,
              g = p.targetDomEl;
            if (w()) return null;
            if (d) return document.querySelector(d);
            if (g && Ue(g)) return g;
            if (t.targetRef && Ue(t.targetRef.current))
              return t.targetRef.current;
            var c = Ae(t);
            if (!c) return null;
            var E = t.getRenderType();
            switch (E) {
              case 'renderProp':
                return c;
              case 'childFunction':
                return c;
              case 'child':
                return c;
              case 'childArray':
                return c;
              default:
                return c.parentElement;
            }
          }),
          (t.createResizeHandler = function (p) {
            var d = t.props,
              g = d.handleWidth,
              c = g === void 0 ? !0 : g,
              E = d.handleHeight,
              b = E === void 0 ? !0 : E,
              y = d.onResize;
            if (!(!c && !b)) {
              var R = qe(y, t.setState.bind(t), c, b);
              p.forEach(function (I) {
                var S = (I && I.contentRect) || {},
                  T = S.width,
                  L = S.height,
                  N = !t.skipOnMount && !w();
                N && R({ width: T, height: L }), (t.skipOnMount = !1);
              });
            }
          }),
          (t.getRenderType = function () {
            var p = t.props,
              d = p.render,
              g = p.children;
            return oe(d)
              ? 'renderProp'
              : oe(g)
                ? 'childFunction'
                : me(g)
                  ? 'child'
                  : Array.isArray(g)
                    ? 'childArray'
                    : 'parent';
          });
        var a = r.skipOnMount,
          u = r.refreshMode,
          s = r.refreshRate,
          i = s === void 0 ? 1e3 : s,
          m = r.refreshOptions;
        return (
          (t.state = { width: void 0, height: void 0 }),
          (t.skipOnMount = a),
          (t.targetRef = de()),
          (t.observableElement = null),
          w() ||
            ((t.resizeHandler = Ke(t.createResizeHandler, u, i, m)),
            (t.resizeObserver = new window.ResizeObserver(t.resizeHandler))),
          t
        );
      }
      return (
        (n.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (n.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (n.prototype.componentWillUnmount = function () {
          w() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler());
        }),
        (n.prototype.render = function () {
          var r = this.props,
            t = r.render,
            a = r.children,
            u = r.nodeType,
            s = u === void 0 ? 'div' : u,
            i = this.state,
            m = i.width,
            p = i.height,
            d = { width: m, height: p, targetRef: this.targetRef },
            g = this.getRenderType(),
            c;
          switch (g) {
            case 'renderProp':
              return t && t(d);
            case 'childFunction':
              return (c = a), c(d);
            case 'child':
              if (((c = a), c.type && typeof c.type == 'string')) {
                d.targetRef;
                var E = Tt(d, ['targetRef']);
                return U(c, E);
              }
              return U(c, d);
            case 'childArray':
              return (
                (c = a),
                c.map(function (b) {
                  return !!b && U(b, d);
                })
              );
            default:
              return h(s, null);
          }
        }),
        n
      );
    })(se);
    var An = w() ? P : ge;
    function Xe(e) {
      e === void 0 && (e = {});
      var n = e.skipOnMount,
        r = n === void 0 ? !1 : n,
        t = e.refreshMode,
        a = e.refreshRate,
        u = a === void 0 ? 1e3 : a,
        s = e.refreshOptions,
        i = e.handleWidth,
        m = i === void 0 ? !0 : i,
        p = e.handleHeight,
        d = p === void 0 ? !0 : p,
        g = e.targetRef,
        c = e.observerOptions,
        E = e.onResize,
        b = F(r),
        y = F(null),
        R = g ?? y,
        I = F(),
        S = D({ width: void 0, height: void 0 }),
        T = S[0],
        L = S[1];
      return (
        An(
          function () {
            if (!w()) {
              var N = qe(E, L, m, d),
                f = function (O) {
                  (!m && !d) ||
                    O.forEach(function (H) {
                      var le = (H && H.contentRect) || {},
                        Ze = le.width,
                        Je = le.height,
                        et = !b.current && !w();
                      et && N({ width: Ze, height: Je }), (b.current = !1);
                    });
                };
              I.current = Ke(f, t, u, s);
              var _ = new window.ResizeObserver(I.current);
              return (
                R.current && _.observe(R.current, c),
                function () {
                  _.disconnect();
                  var O = I.current;
                  O && O.cancel && O.cancel();
                }
              );
            }
          },
          [t, u, s, m, d, E, c, R.current],
        ),
        re({ ref: R }, T)
      );
    }
    var xn = l.div({
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 4,
        paddingRight: 4,
        paddingTop: 4,
        fontWeight: 400,
      }),
      kn = l.div(({ elementWidth: e }) => ({
        flexDirection: e > 407 ? 'row' : 'inherit',
        marginBottom: e > 407 ? 6 : 12,
        display: e > 407 ? 'flex' : 'block',
      })),
      Dn = l(J)({
        padding: '2px 8px',
        marginBottom: 3,
        minWidth: 65,
        maxWidth: 'fit-content',
        width: '100%',
        textAlign: 'center',
      }),
      wn = l.div({ paddingLeft: 6, paddingRight: 23 }),
      Nn = (e) => e.charAt(0).toUpperCase().concat(e.slice(1)),
      Ln = ({ rule: e }) => {
        let { ref: n, width: r } = Xe({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          t = null;
        switch (e.impact) {
          case 'critical':
            t = 'critical';
            break;
          case 'serious':
            t = 'negative';
            break;
          case 'moderate':
            t = 'warning';
            break;
          case 'minor':
            t = 'neutral';
            break;
        }
        return o.createElement(
          kn,
          { ref: n, elementWidth: r || 0 },
          o.createElement(Dn, { status: t }, Nn(e.impact)),
          o.createElement(wn, null, e.message),
        );
      },
      Hn = ({ rules: e }) =>
        o.createElement(
          xn,
          null,
          e.map((n, r) => o.createElement(Ln, { rule: n, key: r })),
        ),
      Pn = [
        j(Y.light).color.negative,
        j(Y.light).color.positive,
        j(Y.light).color.warning,
      ],
      Qe = ue({
        results: { passes: [], incomplete: [], violations: [] },
        setResults: () => {},
        highlighted: [],
        toggleHighlight: () => {},
        clearHighlights: () => {},
        tab: 0,
        setTab: () => {},
      }),
      $e = { passes: [], incomplete: [], violations: [] },
      Bn = ({ active: e, ...n }) => {
        let [r, t] = q(k, $e),
          [a, u] = D(0),
          [s, i] = D([]),
          m = Q(),
          p = m.getCurrentStoryData(),
          d = v((R, I) => {
            i((S) => (I ? [...S, ...R] : S.filter((T) => !R.includes(T))));
          }, []),
          g = (R) => {
            y(M.REQUEST, R, m.getParameters(R, 'a11y'));
          },
          c = v(() => i([]), []),
          E = v((R) => {
            c(), u(R);
          }, []),
          b = v(() => {
            u(0), t($e);
          }, []),
          y = X({ [ke]: g, [xe]: b });
        return (
          P(() => {
            y(we, { elements: s, color: Pn[a] });
          }, [s, a]),
          P(() => {
            e && p?.type === 'story' ? g(p.id) : c();
          }, [e, c, y, p]),
          e
            ? h(Qe.Provider, {
                value: {
                  results: r,
                  setResults: t,
                  highlighted: s,
                  toggleHighlight: d,
                  clearHighlights: c,
                  tab: a,
                  setTab: E,
                },
                ...n,
              })
            : null
        );
      },
      ie = () => pe(Qe),
      Mn = l.input(({ disabled: e }) => ({
        cursor: e ? 'not-allowed' : 'pointer',
      }));
    function Fe(e, n) {
      let r = e.filter((t) => n.includes(t.target[0])).length;
      return r === 0 ? 1 : r === e.length ? 0 : 2;
    }
    var Gn = ({ toggleId: e, elementsToHighlight: n = [] }) => {
        let { toggleHighlight: r, highlighted: t } = ie(),
          a = o.useRef(null),
          [u, s] = o.useState(Fe(n, t));
        o.useEffect(() => {
          let m = Fe(n, t);
          a.current && (a.current.indeterminate = m === 2), s(m);
        }, [n, t]);
        let i = o.useCallback(() => {
          r(
            n.map((m) => m.target[0]),
            u !== 0,
          );
        }, [n, u, r]);
        return o.createElement(Mn, {
          ref: a,
          id: e,
          type: 'checkbox',
          'aria-label': 'Highlight result',
          disabled: !n.length,
          onChange: i,
          checked: u === 0,
        });
      },
      ce = Gn,
      Un = l.li({ fontWeight: 600 }),
      $n = l.span(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        width: '100%',
        display: 'flex',
        paddingBottom: 6,
        marginBottom: 6,
        justifyContent: 'space-between',
      })),
      Fn = l.span({
        fontWeight: 'normal',
        alignSelf: 'center',
        paddingRight: 15,
        input: { margin: 0, display: 'block' },
      }),
      Wn = ({ element: e, type: n }) => {
        let { any: r, all: t, none: a } = e,
          u = [...r, ...t, ...a],
          s = `${n}-${e.target[0]}`;
        return o.createElement(
          Un,
          null,
          o.createElement(
            $n,
            null,
            e.target[0],
            o.createElement(
              Fn,
              null,
              o.createElement(ce, { toggleId: s, elementsToHighlight: [e] }),
            ),
          ),
          o.createElement(Hn, { rules: u }),
        );
      },
      jn = ({ elements: e, type: n }) =>
        o.createElement(
          'ol',
          null,
          e.map((r, t) => o.createElement(Wn, { element: r, key: t, type: n })),
        ),
      Yn = l.div({ display: 'flex', flexWrap: 'wrap', margin: '12px 0' }),
      zn = l.div(({ theme: e }) => ({
        margin: '0 6px',
        padding: 5,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
      })),
      Vn = ({ tags: e }) =>
        o.createElement(
          Yn,
          null,
          e.map((n) => o.createElement(zn, { key: n }, n)),
        ),
      Kn = l.div(({ theme: e }) => ({
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:hover': { background: e.background.hoverable },
      })),
      qn = l(ve)({
        marginRight: 10,
        transition: 'transform 0.1s ease-in-out',
        verticalAlign: 'inherit',
      }),
      Xn = l.div(({ theme: e }) => ({
        padding: e.layoutMargin,
        paddingLeft: e.layoutMargin - 3,
        lineHeight: '20px',
        background: 'none',
        color: 'inherit',
        textAlign: 'left',
        cursor: 'pointer',
        borderLeft: '3px solid transparent',
        width: '100%',
        '&:focus': {
          outline: '0 none',
          borderLeft: `3px solid ${e.color.secondary}`,
        },
      })),
      Qn = l.span({
        fontWeight: 'normal',
        float: 'right',
        marginRight: 15,
        alignSelf: 'center',
        input: { margin: 0, display: 'block' },
      }),
      Zn = (e) => {
        let [n, r] = D(!1),
          { item: t, type: a } = e,
          u = `${a}-${t.id}`;
        return o.createElement(
          G,
          null,
          o.createElement(
            Kn,
            null,
            o.createElement(
              Xn,
              { onClick: () => r(!n), role: 'button' },
              o.createElement(qn, {
                style: { transform: `rotate(${n ? 0 : -90}deg)` },
              }),
              t.help,
            ),
            o.createElement(
              Qn,
              null,
              o.createElement(ce, {
                toggleId: u,
                elementsToHighlight: t.nodes,
              }),
            ),
          ),
          n
            ? o.createElement(
                G,
                null,
                o.createElement(bt, { item: t, key: 'info' }),
                o.createElement(jn, {
                  elements: t.nodes,
                  type: a,
                  key: 'elements',
                }),
                o.createElement(Vn, { tags: t.tags, key: 'tags' }),
              )
            : null,
        );
      },
      te = ({ items: e, empty: n, type: r }) =>
        o.createElement(
          G,
          null,
          e && e.length
            ? e.map((t) =>
                o.createElement(Zn, { item: t, key: `${r}:${t.id}`, type: r }),
              )
            : o.createElement(fe, { title: n }),
        ),
      Jn = l.div({ width: '100%', position: 'relative', minHeight: '100%' }),
      er = l.label(({ theme: e }) => ({
        cursor: 'pointer',
        userSelect: 'none',
        color: e.color.dark,
      })),
      tr = l.div(({ elementWidth: e, theme: n }) => ({
        cursor: 'pointer',
        fontSize: 13,
        lineHeight: '20px',
        padding: e > 450 ? '10px 15px 10px 0' : '10px 0px 10px 15px',
        height: '40px',
        border: 'none',
        marginTop: e > 450 ? -40 : 0,
        float: e > 450 ? 'right' : 'left',
        display: 'flex',
        alignItems: 'center',
        width: e > 450 ? 'auto' : '100%',
        borderBottom: e > 450 ? 'none' : `1px solid ${n.appBorderColor}`,
        input: {
          marginLeft: 10,
          marginRight: 0,
          marginTop: -1,
          marginBottom: 0,
        },
      })),
      nr = l.button(
        ({ theme: e }) => ({
          textDecoration: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          fontWeight: e.typography.weight.bold,
          fontSize: e.typography.size.s2 - 1,
          lineHeight: 1,
          height: 40,
          border: 'none',
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          background: 'transparent',
          '&:focus': {
            outline: '0 none',
            borderBottom: `3px solid ${e.color.secondary}`,
          },
        }),
        ({ active: e, theme: n }) =>
          e
            ? { opacity: 1, borderBottom: `3px solid ${n.color.secondary}` }
            : {},
      ),
      rr = l.div({}),
      or = l.div(({ theme: e }) => ({
        boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
        background: e.background.app,
        display: 'flex',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
      }));
    function ar(e) {
      return e.reduce((n, r) => n.concat(r.nodes), []);
    }
    var ir = ({ tabs: e }) => {
        let { ref: n, width: r } = Xe({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          { tab: t, setTab: a } = ie(),
          u = v(
            (i) => {
              a(parseInt(i.currentTarget.getAttribute('data-index') || '', 10));
            },
            [a],
          ),
          s = `${e[t].type}-global-checkbox`;
        return h(
          Jn,
          { ref: n },
          h(
            or,
            null,
            h(
              rr,
              null,
              e.map((i, m) =>
                h(
                  nr,
                  { key: m, 'data-index': m, active: t === m, onClick: u },
                  i.label,
                ),
              ),
            ),
          ),
          e[t].items.length > 0
            ? h(
                tr,
                { elementWidth: r || 0 },
                h(er, { htmlFor: s }, 'Highlight results'),
                h(ce, { toggleId: s, elementsToHighlight: ar(e[t].items) }),
              )
            : null,
          e[t].panel,
        );
      },
      cr = l(Ce)({ marginRight: 4 }),
      lr = l(cr)(({ theme: e }) => ({
        animation: `${e.animation.rotate360} 1s linear infinite;`,
      })),
      sr = l.span(({ theme: e }) => ({ color: e.color.positiveText })),
      ur = l.span(({ theme: e }) => ({ color: e.color.negativeText })),
      dr = l.span(({ theme: e }) => ({ color: e.color.warningText })),
      V = l.span({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }),
      mr = () => {
        let { manual: e } = he('a11y', { manual: !1 }),
          [n, r] = D(e ? 'manual' : 'initial'),
          [t, a] = o.useState(void 0),
          { setResults: u, results: s } = ie(),
          { storyId: i } = Ie(),
          m = Q();
        o.useEffect(() => {
          r(e ? 'manual' : 'initial');
        }, [e]);
        let p = (I) => {
            r('ran'),
              u(I),
              setTimeout(() => {
                n === 'ran' && r('ready');
              }, 900);
          },
          d = v(() => {
            r('running');
          }, []),
          g = v((I) => {
            r('error'), a(I);
          }, []),
          c = X({ [M.RUNNING]: d, [M.RESULT]: p, [M.ERROR]: g }),
          E = v(() => {
            r('running'), c(M.MANUAL, i, m.getParameters(i, 'a11y'));
          }, [i]),
          b = $(() => [{ title: 'Run test', onClick: E }], [E]),
          y = $(
            () => [
              {
                title:
                  n === 'ready'
                    ? 'Rerun tests'
                    : o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(Oe, null),
                        ' Tests completed',
                      ),
                onClick: E,
              },
            ],
            [n, E],
          ),
          R = $(() => {
            let { passes: I, incomplete: S, violations: T } = s;
            return [
              {
                label: o.createElement(ur, null, T.length, ' Violations'),
                panel: o.createElement(te, {
                  items: T,
                  type: 0,
                  empty: 'No accessibility violations found.',
                }),
                items: T,
                type: 0,
              },
              {
                label: o.createElement(sr, null, I.length, ' Passes'),
                panel: o.createElement(te, {
                  items: I,
                  type: 1,
                  empty: 'No accessibility checks passed.',
                }),
                items: I,
                type: 1,
              },
              {
                label: o.createElement(dr, null, S.length, ' Incomplete'),
                panel: o.createElement(te, {
                  items: S,
                  type: 2,
                  empty: 'No accessibility checks incomplete.',
                }),
                items: S,
                type: 2,
              },
            ];
          }, [s]);
        return o.createElement(
          o.Fragment,
          null,
          n === 'initial' && o.createElement(V, null, 'Initializing...'),
          n === 'manual' &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(V, null, 'Manually run the accessibility scan.'),
              o.createElement(Z, { key: 'actionbar', actionItems: b }),
            ),
          n === 'running' &&
            o.createElement(
              V,
              null,
              o.createElement(lr, { size: 12 }),
              ' Please wait while the accessibility scan is running ...',
            ),
          (n === 'ready' || n === 'ran') &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                Re,
                { vertical: !0, horizontal: !0 },
                o.createElement(ir, { key: 'tabs', tabs: R }),
              ),
              o.createElement(Z, { key: 'actionbar', actionItems: y }),
            ),
          n === 'error' &&
            o.createElement(
              V,
              null,
              'The accessibility scan encountered an error.',
              o.createElement('br', null),
              typeof t == 'string' ? t : JSON.stringify(t),
            ),
        );
      },
      pr = () => {
        let [e] = q(k),
          n = e?.violations?.length || 0,
          r = e?.incomplete?.length || 0,
          t = n + r;
        return o.createElement(
          'div',
          null,
          o.createElement(
            Se,
            { col: 1 },
            o.createElement(
              'span',
              { style: { display: 'inline-block', verticalAlign: 'middle' } },
              'Accessibility',
            ),
            t === 0 ? '' : o.createElement(J, { status: 'neutral' }, t),
          ),
        );
      };
    W.register(k, (e) => {
      W.add(Ne, {
        title: '',
        type: K.TOOL,
        match: ({ viewMode: n, tabId: r }) => n === 'story' && !r,
        render: () => o.createElement(ft, null),
      }),
        W.add(Ne, {
          title: pr,
          type: K.PANEL,
          render: ({ active: n = !0 }) =>
            o.createElement(Bn, { active: n }, o.createElement(mr, null)),
          paramKey: nt,
        });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
