'use strict';
(self.webpackChunkjotai_devtools = self.webpackChunkjotai_devtools || []).push([
  [398],
  {
    './node_modules/@mantine/core/esm/components/Button/Button.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      var react = __webpack_require__('./node_modules/react/index.js'),
        rem = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
        ),
        get_size = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs',
        ),
        create_vars_resolver = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs',
        ),
        use_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
        ),
        use_styles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        polymorphic_factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs',
        ),
        Loader = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Loader/Loader.mjs',
        ),
        Transition = __webpack_require__(
          './node_modules/@mantine/core/esm/components/Transition/Transition.mjs',
        ),
        UnstyledButton = __webpack_require__(
          './node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs',
        ),
        factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/factory.mjs',
        ),
        classes = {
          root: 'm-77c9d27d',
          inner: 'm-80f1301b',
          label: 'm-811560b9',
          section: 'm-a74036a',
          loader: 'm-a25b86ee',
          group: 'm-80d6d844',
        };
      const defaultProps = { orientation: 'horizontal' },
        varsResolver = (0, create_vars_resolver.V)((_, { borderWidth }) => ({
          group: { '--button-border-width': (0, rem.D)(borderWidth) },
        })),
        ButtonGroup = (0, factory.P)((_props, ref) => {
          const props = (0, use_props.Y)('ButtonGroup', defaultProps, _props),
            {
              className,
              style,
              classNames,
              styles,
              unstyled,
              orientation,
              vars,
              borderWidth,
              variant,
              mod,
              ...others
            } = (0, use_props.Y)('ButtonGroup', defaultProps, _props),
            getStyles = (0, use_styles.I)({
              name: 'ButtonGroup',
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
              rootSelector: 'group',
            });
          return react.createElement(Box.a, {
            ...getStyles('group'),
            ref,
            variant,
            mod: [{ 'data-orientation': orientation }, mod],
            role: 'group',
            ...others,
          });
        });
      (ButtonGroup.classes = classes),
        (ButtonGroup.displayName = '@mantine/core/ButtonGroup');
      const loaderTransition = {
          in: {
            opacity: 1,
            transform: `translate(-50%, calc(-50% + ${(0, rem.D)(1)}))`,
          },
          out: { opacity: 0, transform: 'translate(-50%, -200%)' },
          common: { transformOrigin: 'center' },
          transitionProperty: 'transform, opacity',
        },
        Button_defaultProps = {},
        Button_varsResolver = (0, create_vars_resolver.V)(
          (
            theme,
            { radius, color, gradient, variant, size, justify, autoContrast },
          ) => {
            const colors = theme.variantColorResolver({
              color: color || theme.primaryColor,
              theme,
              gradient,
              variant: variant || 'filled',
              autoContrast,
            });
            return {
              root: {
                '--button-justify': justify,
                '--button-height': (0, get_size.YC)(size, 'button-height'),
                '--button-padding-x': (0, get_size.YC)(
                  size,
                  'button-padding-x',
                ),
                '--button-fz': size?.includes('compact')
                  ? (0, get_size.ny)(size.replace('compact-', ''))
                  : (0, get_size.ny)(size),
                '--button-radius':
                  void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
                '--button-bg': color || variant ? colors.background : void 0,
                '--button-hover': color || variant ? colors.hover : void 0,
                '--button-color': colors.color,
                '--button-bd': color || variant ? colors.border : void 0,
                '--button-hover-color':
                  color || variant ? colors.hoverColor : void 0,
              },
            };
          },
        ),
        Button = (0, polymorphic_factory.v)((_props, ref) => {
          const props = (0, use_props.Y)('Button', Button_defaultProps, _props),
            {
              style,
              vars,
              className,
              color,
              disabled,
              children,
              leftSection,
              rightSection,
              fullWidth,
              variant,
              radius,
              loading,
              loaderProps,
              gradient,
              classNames,
              styles,
              unstyled,
              'data-disabled': dataDisabled,
              autoContrast,
              mod,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: 'Button',
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver: Button_varsResolver,
            }),
            hasLeftSection = !!leftSection,
            hasRightSection = !!rightSection;
          return react.createElement(
            UnstyledButton.N,
            {
              ref,
              ...getStyles('root', {
                active: !disabled && !loading && !dataDisabled,
              }),
              unstyled,
              variant,
              disabled: disabled || loading,
              mod: [
                {
                  disabled: disabled || dataDisabled,
                  loading,
                  block: fullWidth,
                  'with-left-section': hasLeftSection,
                  'with-right-section': hasRightSection,
                },
                mod,
              ],
              ...others,
            },
            react.createElement(
              Transition.e,
              {
                mounted: !!loading,
                transition: loaderTransition,
                duration: 150,
              },
              (transitionStyles) =>
                react.createElement(
                  Box.a,
                  {
                    component: 'span',
                    ...getStyles('loader', { style: transitionStyles }),
                    'aria-hidden': !0,
                  },
                  react.createElement(Loader.a, {
                    color: 'var(--button-color)',
                    size: 'calc(var(--button-height) / 1.8)',
                    ...loaderProps,
                  }),
                ),
            ),
            react.createElement(
              'span',
              { ...getStyles('inner') },
              leftSection &&
                react.createElement(
                  Box.a,
                  {
                    component: 'span',
                    ...getStyles('section'),
                    mod: { position: 'left' },
                  },
                  leftSection,
                ),
              react.createElement(
                Box.a,
                { component: 'span', mod: { loading }, ...getStyles('label') },
                children,
              ),
              rightSection &&
                react.createElement(
                  Box.a,
                  {
                    component: 'span',
                    ...getStyles('section'),
                    mod: { position: 'right' },
                  },
                  rightSection,
                ),
            ),
          );
        });
      (Button.classes = classes),
        (Button.displayName = '@mantine/core/Button'),
        (Button.Group = ButtonGroup);
    },
    './node_modules/@mantine/core/esm/components/Code/Code.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { C: () => Code });
      var react = __webpack_require__('./node_modules/react/index.js'),
        create_vars_resolver = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs',
        ),
        get_theme_color = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs',
        ),
        use_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
        ),
        use_styles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/factory.mjs',
        ),
        classes = { root: 'm-b183c0a2' };
      const defaultProps = {},
        varsResolver = (0, create_vars_resolver.V)((theme, { color }) => ({
          root: {
            '--code-bg': color ? (0, get_theme_color.r)(color, theme) : void 0,
          },
        })),
        Code = (0, factory.P)((_props, ref) => {
          const props = (0, use_props.Y)('Code', defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              color,
              block,
              variant,
              mod,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: 'Code',
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
            });
          return react.createElement(Box.a, {
            component: block ? 'pre' : 'code',
            variant,
            ref,
            mod: [{ block }, mod],
            ...getStyles('root'),
            ...others,
            dir: 'ltr',
          });
        });
      (Code.classes = classes), (Code.displayName = '@mantine/core/Code');
    },
    './node_modules/@mantine/core/esm/components/Loader/Loader.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { a: () => Loader });
      var react = __webpack_require__('./node_modules/react/index.js'),
        get_size = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs',
        ),
        create_vars_resolver = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs',
        ),
        get_theme_color = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs',
        ),
        use_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
        ),
        use_styles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/factory.mjs',
        ),
        clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
        classes = {
          root: 'm-5ae2e3c',
          barsLoader: 'm-7a2bd4cd',
          bar: 'm-870bb79',
          'bars-loader-animation': 'm-5d2b3b9d',
          dotsLoader: 'm-4e3f22d7',
          dot: 'm-870c4af',
          'loader-dots-animation': 'm-aac34a1',
          ovalLoader: 'm-b34414df',
          'oval-loader-animation': 'm-f8e89c4b',
        };
      const Bars = (0, react.forwardRef)(({ className, ...others }, ref) =>
          react.createElement(
            Box.a,
            {
              component: 'span',
              className: (0, clsx.A)(classes.barsLoader, className),
              ...others,
              ref,
            },
            react.createElement('span', { className: classes.bar }),
            react.createElement('span', { className: classes.bar }),
            react.createElement('span', { className: classes.bar }),
          ),
        ),
        Dots = (0, react.forwardRef)(({ className, ...others }, ref) =>
          react.createElement(
            Box.a,
            {
              component: 'span',
              className: (0, clsx.A)(classes.dotsLoader, className),
              ...others,
              ref,
            },
            react.createElement('span', { className: classes.dot }),
            react.createElement('span', { className: classes.dot }),
            react.createElement('span', { className: classes.dot }),
          ),
        ),
        defaultLoaders = {
          bars: Bars,
          oval: (0, react.forwardRef)(({ className, ...others }, ref) =>
            react.createElement(Box.a, {
              component: 'span',
              className: (0, clsx.A)(classes.ovalLoader, className),
              ...others,
              ref,
            }),
          ),
          dots: Dots,
        },
        defaultProps = { loaders: defaultLoaders, type: 'oval' },
        varsResolver = (0, create_vars_resolver.V)(
          (theme, { size, color }) => ({
            root: {
              '--loader-size': (0, get_size.YC)(size, 'loader-size'),
              '--loader-color': color
                ? (0, get_theme_color.r)(color, theme)
                : void 0,
            },
          }),
        ),
        Loader = (0, factory.P)((_props, ref) => {
          const props = (0, use_props.Y)('Loader', defaultProps, _props),
            {
              size,
              color,
              type,
              vars,
              className,
              style,
              classNames,
              styles,
              unstyled,
              loaders,
              variant,
              children,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: 'Loader',
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
            });
          return children
            ? react.createElement(
                Box.a,
                { ...getStyles('root'), ref, ...others },
                children,
              )
            : react.createElement(Box.a, {
                ...getStyles('root'),
                ref,
                component: loaders[type],
                variant,
                size,
                ...others,
              });
        });
      (Loader.defaultLoaders = defaultLoaders),
        (Loader.classes = classes),
        (Loader.displayName = '@mantine/core/Loader');
    },
    './node_modules/@mantine/core/esm/components/Text/Text.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { E: () => Text });
      var react = __webpack_require__('./node_modules/react/index.js'),
        get_size = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs',
        ),
        create_vars_resolver = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs',
        ),
        get_theme_color = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs',
        ),
        get_gradient = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs',
        ),
        use_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
        ),
        use_styles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        polymorphic_factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs',
        ),
        classes = { root: 'm-b6d8b162' };
      function getTextTruncate(truncate) {
        return 'start' === truncate
          ? 'start'
          : 'end' === truncate || truncate
            ? 'end'
            : void 0;
      }
      const defaultProps = { inherit: !1 },
        varsResolver = (0, create_vars_resolver.V)(
          (theme, { variant, lineClamp, gradient, size, color }) => ({
            root: {
              '--text-fz': (0, get_size.ny)(size),
              '--text-lh': (0, get_size.ks)(size),
              '--text-gradient':
                'gradient' === variant
                  ? (0, get_gradient.v)(gradient, theme)
                  : void 0,
              '--text-line-clamp':
                'number' == typeof lineClamp ? lineClamp.toString() : void 0,
              '--text-color': color
                ? (0, get_theme_color.r)(color, theme)
                : void 0,
            },
          }),
        ),
        Text = (0, polymorphic_factory.v)((_props, ref) => {
          const props = (0, use_props.Y)('Text', defaultProps, _props),
            {
              lineClamp,
              truncate,
              inline,
              inherit,
              gradient,
              span,
              __staticSelector,
              vars,
              className,
              style,
              classNames,
              styles,
              unstyled,
              variant,
              mod,
              size,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: ['Text', __staticSelector],
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
            });
          return react.createElement(Box.a, {
            ...getStyles('root', { focusable: !0 }),
            ref,
            component: span ? 'span' : 'p',
            variant,
            mod: [
              {
                'data-truncate': getTextTruncate(truncate),
                'data-line-clamp': 'number' == typeof lineClamp,
                'data-inline': inline,
                'data-inherit': inherit,
              },
              mod,
            ],
            size,
            ...others,
          });
        });
      (Text.classes = classes), (Text.displayName = '@mantine/core/Text');
    },
    './node_modules/@mantine/core/esm/components/Title/Title.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => Title });
      var react = __webpack_require__('./node_modules/react/index.js'),
        create_vars_resolver = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs',
        ),
        use_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
        ),
        use_styles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
        ),
        Box = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/Box.mjs',
        ),
        factory = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/factory.mjs',
        ),
        rem = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
        );
      const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
      var classes = { root: 'm-8a5d1357' };
      const defaultProps = { order: 1 },
        varsResolver = (0, create_vars_resolver.V)(
          (_, { order, size, lineClamp, textWrap }) => {
            const sizeVariables = (function getTitleSize(order, size) {
              const titleSize = void 0 !== size ? size : `h${order}`;
              return headings.includes(titleSize)
                ? {
                    fontSize: `var(--mantine-${titleSize}-font-size)`,
                    fontWeight: `var(--mantine-${titleSize}-font-weight)`,
                    lineHeight: `var(--mantine-${titleSize}-line-height)`,
                  }
                : {
                    fontSize: (0, rem.D)(titleSize),
                    fontWeight: `var(--mantine-h${order}-font-weight)`,
                    lineHeight: `var(--mantine-h${order}-line-height)`,
                  };
            })(order, size);
            return {
              root: {
                '--title-fw': sizeVariables.fontWeight,
                '--title-lh': sizeVariables.lineHeight,
                '--title-fz': sizeVariables.fontSize,
                '--title-line-clamp':
                  'number' == typeof lineClamp ? lineClamp.toString() : void 0,
                '--title-text-wrap': textWrap,
              },
            };
          },
        ),
        Title = (0, factory.P)((_props, ref) => {
          const props = (0, use_props.Y)('Title', defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              order,
              vars,
              size,
              variant,
              lineClamp,
              textWrap,
              mod,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: 'Title',
              props,
              classes,
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
            });
          return [1, 2, 3, 4, 5, 6].includes(order)
            ? react.createElement(Box.a, {
                ...getStyles('root'),
                component: `h${order}`,
                variant,
                ref,
                mod: [
                  { order, 'data-line-clamp': 'number' == typeof lineClamp },
                  mod,
                ],
                size,
                ...others,
              })
            : null;
        });
      (Title.classes = classes), (Title.displayName = '@mantine/core/Title');
    },
    './node_modules/@mantine/core/esm/components/Transition/Transition.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { e: () => Transition });
      var react = __webpack_require__('./node_modules/react/index.js'),
        rem = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
        );
      const popIn = (from) => ({
          in: { opacity: 1, transform: 'scale(1)' },
          out: {
            opacity: 0,
            transform: `scale(.9) translateY(${(0, rem.D)('bottom' === from ? 10 : -10)})`,
          },
          transitionProperty: 'transform, opacity',
        }),
        transitions = {
          fade: {
            in: { opacity: 1 },
            out: { opacity: 0 },
            transitionProperty: 'opacity',
          },
          scale: {
            in: { opacity: 1, transform: 'scale(1)' },
            out: { opacity: 0, transform: 'scale(0)' },
            common: { transformOrigin: 'top' },
            transitionProperty: 'transform, opacity',
          },
          'scale-y': {
            in: { opacity: 1, transform: 'scaleY(1)' },
            out: { opacity: 0, transform: 'scaleY(0)' },
            common: { transformOrigin: 'top' },
            transitionProperty: 'transform, opacity',
          },
          'scale-x': {
            in: { opacity: 1, transform: 'scaleX(1)' },
            out: { opacity: 0, transform: 'scaleX(0)' },
            common: { transformOrigin: 'left' },
            transitionProperty: 'transform, opacity',
          },
          'skew-up': {
            in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
            out: {
              opacity: 0,
              transform: `translateY(${(0, rem.D)(-20)}) skew(-10deg, -5deg)`,
            },
            common: { transformOrigin: 'top' },
            transitionProperty: 'transform, opacity',
          },
          'skew-down': {
            in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
            out: {
              opacity: 0,
              transform: `translateY(${(0, rem.D)(20)}) skew(-10deg, -5deg)`,
            },
            common: { transformOrigin: 'bottom' },
            transitionProperty: 'transform, opacity',
          },
          'rotate-left': {
            in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
            out: {
              opacity: 0,
              transform: `translateY(${(0, rem.D)(20)}) rotate(-5deg)`,
            },
            common: { transformOrigin: 'bottom' },
            transitionProperty: 'transform, opacity',
          },
          'rotate-right': {
            in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
            out: {
              opacity: 0,
              transform: `translateY(${(0, rem.D)(20)}) rotate(5deg)`,
            },
            common: { transformOrigin: 'top' },
            transitionProperty: 'transform, opacity',
          },
          'slide-down': {
            in: { opacity: 1, transform: 'translateY(0)' },
            out: { opacity: 0, transform: 'translateY(-100%)' },
            common: { transformOrigin: 'top' },
            transitionProperty: 'transform, opacity',
          },
          'slide-up': {
            in: { opacity: 1, transform: 'translateY(0)' },
            out: { opacity: 0, transform: 'translateY(100%)' },
            common: { transformOrigin: 'bottom' },
            transitionProperty: 'transform, opacity',
          },
          'slide-left': {
            in: { opacity: 1, transform: 'translateX(0)' },
            out: { opacity: 0, transform: 'translateX(100%)' },
            common: { transformOrigin: 'left' },
            transitionProperty: 'transform, opacity',
          },
          'slide-right': {
            in: { opacity: 1, transform: 'translateX(0)' },
            out: { opacity: 0, transform: 'translateX(-100%)' },
            common: { transformOrigin: 'right' },
            transitionProperty: 'transform, opacity',
          },
          pop: {
            ...popIn('bottom'),
            common: { transformOrigin: 'center center' },
          },
          'pop-bottom-left': {
            ...popIn('bottom'),
            common: { transformOrigin: 'bottom left' },
          },
          'pop-bottom-right': {
            ...popIn('bottom'),
            common: { transformOrigin: 'bottom right' },
          },
          'pop-top-left': {
            ...popIn('top'),
            common: { transformOrigin: 'top left' },
          },
          'pop-top-right': {
            ...popIn('top'),
            common: { transformOrigin: 'top right' },
          },
        },
        transitionStatuses = {
          entering: 'in',
          entered: 'in',
          exiting: 'out',
          exited: 'out',
          'pre-exiting': 'out',
          'pre-entering': 'out',
        };
      var react_dom = __webpack_require__('./node_modules/react-dom/index.js');
      function useMediaQuery(
        query,
        initialValue,
        { getInitialValueInEffect } = { getInitialValueInEffect: !0 },
      ) {
        const [matches, setMatches] = (0, react.useState)(
            getInitialValueInEffect
              ? initialValue
              : (function getInitialValue(query, initialValue) {
                  return 'boolean' == typeof initialValue
                    ? initialValue
                    : 'undefined' != typeof window &&
                        'matchMedia' in window &&
                        window.matchMedia(query).matches;
                })(query),
          ),
          queryRef = (0, react.useRef)();
        return (
          (0, react.useEffect)(() => {
            if ('matchMedia' in window)
              return (
                (queryRef.current = window.matchMedia(query)),
                setMatches(queryRef.current.matches),
                (function attachMediaListener(query, callback) {
                  try {
                    return (
                      query.addEventListener('change', callback),
                      () => query.removeEventListener('change', callback)
                    );
                  } catch (e) {
                    return (
                      query.addListener(callback),
                      () => query.removeListener(callback)
                    );
                  }
                })(queryRef.current, (event) => setMatches(event.matches))
              );
          }, [query]),
          matches
        );
      }
      var MantineThemeProvider = __webpack_require__(
        './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs',
      );
      function useTransition({
        duration,
        exitDuration,
        timingFunction,
        mounted,
        onEnter,
        onExit,
        onEntered,
        onExited,
      }) {
        const theme = (0, MantineThemeProvider.xd)(),
          shouldReduceMotion = (function useReducedMotion(
            initialValue,
            options,
          ) {
            return useMediaQuery(
              '(prefers-reduced-motion: reduce)',
              initialValue,
              options,
            );
          })(),
          reduceMotion = !!theme.respectReducedMotion && shouldReduceMotion,
          [transitionDuration, setTransitionDuration] = (0, react.useState)(
            reduceMotion ? 0 : duration,
          ),
          [transitionStatus, setStatus] = (0, react.useState)(
            mounted ? 'entered' : 'exited',
          ),
          timeoutRef = (0, react.useRef)(-1),
          rafRef = (0, react.useRef)(-1);
        return (
          (function useDidUpdate(fn, dependencies) {
            const mounted = (0, react.useRef)(!1);
            (0, react.useEffect)(
              () => () => {
                mounted.current = !1;
              },
              [],
            ),
              (0, react.useEffect)(() => {
                if (mounted.current) return fn();
                mounted.current = !0;
              }, dependencies);
          })(() => {
            ((shouldMount) => {
              const preHandler = shouldMount ? onEnter : onExit,
                handler = shouldMount ? onEntered : onExited;
              window.clearTimeout(timeoutRef.current);
              const newTransitionDuration = reduceMotion
                ? 0
                : shouldMount
                  ? duration
                  : exitDuration;
              setTransitionDuration(newTransitionDuration),
                0 === newTransitionDuration
                  ? ('function' == typeof preHandler && preHandler(),
                    'function' == typeof handler && handler(),
                    setStatus(shouldMount ? 'entered' : 'exited'))
                  : (rafRef.current = requestAnimationFrame(() => {
                      react_dom.flushSync(() => {
                        setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
                      }),
                        (rafRef.current = requestAnimationFrame(() => {
                          'function' == typeof preHandler && preHandler(),
                            setStatus(shouldMount ? 'entering' : 'exiting'),
                            (timeoutRef.current = window.setTimeout(() => {
                              'function' == typeof handler && handler(),
                                setStatus(shouldMount ? 'entered' : 'exited');
                            }, newTransitionDuration));
                        }));
                    }));
            })(mounted);
          }, [mounted]),
          (0, react.useEffect)(
            () => () => {
              window.clearTimeout(timeoutRef.current),
                cancelAnimationFrame(rafRef.current);
            },
            [],
          ),
          {
            transitionDuration,
            transitionStatus,
            transitionTimingFunction: timingFunction || 'ease',
          }
        );
      }
      function Transition({
        keepMounted,
        transition = 'fade',
        duration = 250,
        exitDuration = duration,
        mounted,
        children,
        timingFunction = 'ease',
        onExit,
        onEntered,
        onEnter,
        onExited,
      }) {
        const {
          transitionDuration,
          transitionStatus,
          transitionTimingFunction,
        } = useTransition({
          mounted,
          exitDuration,
          duration,
          timingFunction,
          onExit,
          onEntered,
          onEnter,
          onExited,
        });
        return 0 === transitionDuration
          ? mounted
            ? react.createElement(react.Fragment, null, children({}))
            : keepMounted
              ? children({ display: 'none' })
              : null
          : 'exited' === transitionStatus
            ? keepMounted
              ? children({ display: 'none' })
              : null
            : react.createElement(
                react.Fragment,
                null,
                children(
                  (function getTransitionStyles({
                    transition,
                    state,
                    duration,
                    timingFunction,
                  }) {
                    const shared = {
                      transitionDuration: `${duration}ms`,
                      transitionTimingFunction: timingFunction,
                    };
                    return 'string' == typeof transition
                      ? transition in transitions
                        ? {
                            transitionProperty:
                              transitions[transition].transitionProperty,
                            ...shared,
                            ...transitions[transition].common,
                            ...transitions[transition][
                              transitionStatuses[state]
                            ],
                          }
                        : {}
                      : {
                          transitionProperty: transition.transitionProperty,
                          ...shared,
                          ...transition.common,
                          ...transition[transitionStatuses[state]],
                        };
                  })({
                    transition,
                    duration: transitionDuration,
                    state: transitionStatus,
                    timingFunction: transitionTimingFunction,
                  }),
                ),
              );
      }
      Transition.displayName = '@mantine/core/Transition';
    },
    './node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { N: () => UnstyledButton });
        var react = __webpack_require__('./node_modules/react/index.js'),
          use_props = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs',
          ),
          use_styles = __webpack_require__(
            './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs',
          ),
          Box = __webpack_require__(
            './node_modules/@mantine/core/esm/core/Box/Box.mjs',
          ),
          polymorphic_factory = __webpack_require__(
            './node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs',
          ),
          classes = { root: 'm-87cf2631' };
        const defaultProps = { __staticSelector: 'UnstyledButton' },
          UnstyledButton = (0, polymorphic_factory.v)((_props, ref) => {
            const props = (0, use_props.Y)(
                'UnstyledButton',
                defaultProps,
                _props,
              ),
              {
                className,
                component = 'button',
                __staticSelector,
                unstyled,
                classNames,
                styles,
                style,
                ...others
              } = props,
              getStyles = (0, use_styles.I)({
                name: __staticSelector,
                props,
                classes,
                className,
                style,
                classNames,
                styles,
                unstyled,
              });
            return react.createElement(Box.a, {
              ...getStyles('root', { focusable: !0 }),
              component,
              ref,
              type: 'button' === component ? 'button' : void 0,
              ...others,
            });
          });
        (UnstyledButton.classes = classes),
          (UnstyledButton.displayName = '@mantine/core/UnstyledButton');
      },
    './node_modules/@mantine/core/esm/core/Box/Box.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { a: () => Box });
      var react = __webpack_require__('./node_modules/react/index.js'),
        clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs');
      var InlineStyles = __webpack_require__(
          './node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs',
        ),
        is_number_like = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs',
        ),
        MantineThemeProvider = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs',
        );
      function transformModKey(key) {
        return key.startsWith('data-') ? key : `data-${key}`;
      }
      function getBoxMod(mod) {
        return mod
          ? 'string' == typeof mod
            ? { [transformModKey(mod)]: !0 }
            : Array.isArray(mod)
              ? [...mod].reduce(
                  (acc, value) => ({ ...acc, ...getBoxMod(value) }),
                  {},
                )
              : (function getMod(props) {
                  return Object.keys(props).reduce((acc, key) => {
                    const value = props[key];
                    return (
                      void 0 === value ||
                        '' === value ||
                        !1 === value ||
                        null === value ||
                        (acc[transformModKey(key)] = props[key]),
                      acc
                    );
                  }, {});
                })(mod)
          : null;
      }
      function mergeStyles(styles, theme) {
        return Array.isArray(styles)
          ? [...styles].reduce(
              (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
              {},
            )
          : 'function' == typeof styles
            ? styles(theme)
            : null == styles
              ? {}
              : styles;
      }
      function getBoxStyle({ theme, style, vars, styleProps }) {
        return {
          ...mergeStyles(style, theme),
          ...mergeStyles(vars, theme),
          ...styleProps,
        };
      }
      var extract_style_props = __webpack_require__(
        './node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs',
      );
      const STYlE_PROPS_DATA = {
        m: { type: 'spacing', property: 'margin' },
        mt: { type: 'spacing', property: 'marginTop' },
        mb: { type: 'spacing', property: 'marginBottom' },
        ml: { type: 'spacing', property: 'marginLeft' },
        mr: { type: 'spacing', property: 'marginRight' },
        ms: { type: 'spacing', property: 'marginInlineStart' },
        me: { type: 'spacing', property: 'marginInlineEnd' },
        mx: { type: 'spacing', property: 'marginInline' },
        my: { type: 'spacing', property: 'marginBlock' },
        p: { type: 'spacing', property: 'padding' },
        pt: { type: 'spacing', property: 'paddingTop' },
        pb: { type: 'spacing', property: 'paddingBottom' },
        pl: { type: 'spacing', property: 'paddingLeft' },
        pr: { type: 'spacing', property: 'paddingRight' },
        ps: { type: 'spacing', property: 'paddingInlineStart' },
        pe: { type: 'spacing', property: 'paddingInlineEnd' },
        px: { type: 'spacing', property: 'paddingInline' },
        py: { type: 'spacing', property: 'paddingBlock' },
        bg: { type: 'color', property: 'background' },
        c: { type: 'textColor', property: 'color' },
        opacity: { type: 'identity', property: 'opacity' },
        ff: { type: 'fontFamily', property: 'fontFamily' },
        fz: { type: 'fontSize', property: 'fontSize' },
        fw: { type: 'identity', property: 'fontWeight' },
        lts: { type: 'size', property: 'letterSpacing' },
        ta: { type: 'identity', property: 'textAlign' },
        lh: { type: 'lineHeight', property: 'lineHeight' },
        fs: { type: 'identity', property: 'fontStyle' },
        tt: { type: 'identity', property: 'textTransform' },
        td: { type: 'identity', property: 'textDecoration' },
        w: { type: 'spacing', property: 'width' },
        miw: { type: 'spacing', property: 'minWidth' },
        maw: { type: 'spacing', property: 'maxWidth' },
        h: { type: 'spacing', property: 'height' },
        mih: { type: 'spacing', property: 'minHeight' },
        mah: { type: 'spacing', property: 'maxHeight' },
        bgsz: { type: 'size', property: 'backgroundSize' },
        bgp: { type: 'identity', property: 'backgroundPosition' },
        bgr: { type: 'identity', property: 'backgroundRepeat' },
        bga: { type: 'identity', property: 'backgroundAttachment' },
        pos: { type: 'identity', property: 'position' },
        top: { type: 'identity', property: 'top' },
        left: { type: 'size', property: 'left' },
        bottom: { type: 'size', property: 'bottom' },
        right: { type: 'size', property: 'right' },
        inset: { type: 'size', property: 'inset' },
        display: { type: 'identity', property: 'display' },
        flex: { type: 'identity', property: 'flex' },
      };
      var parse_style_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs',
        ),
        use_random_classname = __webpack_require__(
          './node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs',
        );
      const _Box = (0, react.forwardRef)(
        (
          {
            component,
            style,
            __vars,
            className,
            variant,
            mod,
            size,
            hiddenFrom,
            visibleFrom,
            lightHidden,
            darkHidden,
            renderRoot,
            ...others
          },
          ref,
        ) => {
          const theme = (0, MantineThemeProvider.xd)(),
            Element = component || 'div',
            { styleProps, rest } = (0, extract_style_props.j)(others),
            responsiveClassName = (0, use_random_classname.C)(),
            parsedStyleProps = (0, parse_style_props.X)({
              styleProps,
              theme,
              data: STYlE_PROPS_DATA,
            }),
            props = {
              ref,
              style: getBoxStyle({
                theme,
                style,
                vars: __vars,
                styleProps: parsedStyleProps.inlineStyles,
              }),
              className: (0, clsx.A)(className, {
                [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
                'mantine-light-hidden': lightHidden,
                'mantine-dark-hidden': darkHidden,
                [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
                [`mantine-visible-from-${visibleFrom}`]: visibleFrom,
              }),
              'data-variant': variant,
              'data-size': (0, is_number_like.t)(size)
                ? void 0
                : size || void 0,
              ...getBoxMod(mod),
              ...rest,
            };
          return react.createElement(
            react.Fragment,
            null,
            parsedStyleProps.hasResponsiveStyles &&
              react.createElement(InlineStyles.K, {
                selector: `.${responsiveClassName}`,
                styles: parsedStyleProps.styles,
                media: parsedStyleProps.media,
              }),
            'function' == typeof renderRoot
              ? renderRoot(props)
              : react.createElement(Element, { ...props }),
          );
        },
      );
      _Box.displayName = '@mantine/core/Box';
      const Box = _Box;
    },
    './node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          j: () => extractStyleProps,
        });
        var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs',
          );
        __webpack_require__('./node_modules/react/index.js');
        function extractStyleProps(others) {
          const {
            m,
            mx,
            my,
            mt,
            mb,
            ml,
            mr,
            me,
            ms,
            p,
            px,
            py,
            pt,
            pb,
            pl,
            pr,
            pe,
            ps,
            bg,
            c,
            opacity,
            ff,
            fz,
            fw,
            lts,
            ta,
            lh,
            fs,
            tt,
            td,
            w,
            miw,
            maw,
            h,
            mih,
            mah,
            bgsz,
            bgp,
            bgr,
            bga,
            pos,
            top,
            left,
            bottom,
            right,
            inset,
            display,
            flex,
            hiddenFrom,
            visibleFrom,
            lightHidden,
            darkHidden,
            ...rest
          } = others;
          return {
            styleProps: (0,
            _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_1__.J)(
              {
                m,
                mx,
                my,
                mt,
                mb,
                ml,
                mr,
                me,
                ms,
                p,
                px,
                py,
                pt,
                pb,
                pl,
                pr,
                pe,
                ps,
                bg,
                c,
                opacity,
                ff,
                fz,
                fw,
                lts,
                ta,
                lh,
                fs,
                tt,
                td,
                w,
                miw,
                maw,
                h,
                mih,
                mah,
                bgsz,
                bgp,
                bgr,
                bga,
                pos,
                top,
                left,
                bottom,
                right,
                inset,
                display,
                flex,
                hiddenFrom,
                visibleFrom,
                lightHidden,
                darkHidden,
              },
            ),
            rest,
          };
        }
      },
    './node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          X: () => parseStyleProps,
        });
        var keys = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/keys/keys.mjs',
          ),
          parse_theme_color =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs',
            ));
        function colorResolver(color, theme) {
          const parsedColor = (0, parse_theme_color.g)({ color, theme });
          return 'dimmed' === parsedColor.color
            ? 'var(--mantine-color-dimmed)'
            : 'bright' === parsedColor.color
              ? 'var(--mantine-color-bright)'
              : parsedColor.variable
                ? `var(${parsedColor.variable})`
                : parsedColor.color;
        }
        const values = {
          text: 'var(--mantine-font-family)',
          mono: 'var(--mantine-font-family-monospace)',
          heading: 'var(--mantine-font-family-headings)',
        };
        var rem = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
        );
        const resolvers = {
          color: colorResolver,
          textColor: function textColorResolver(color, theme) {
            const parsedColor = (0, parse_theme_color.g)({ color, theme });
            return parsedColor.isThemeColor && void 0 === parsedColor.shade
              ? `var(--mantine-color-${parsedColor.color}-text)`
              : colorResolver(color, theme);
          },
          fontSize: function fontSizeResolver(value, theme) {
            return 'string' == typeof value && value in theme.fontSizes
              ? `var(--mantine-font-size-${value})`
              : 'number' == typeof value || 'string' == typeof value
                ? (0, rem.D)(value)
                : value;
          },
          spacing: function spacingResolver(value, theme) {
            if ('number' == typeof value) return (0, rem.D)(value);
            if ('string' == typeof value) {
              const mod = value.replace('-', '');
              if (!(mod in theme.spacing)) return (0, rem.D)(value);
              const variable = `--mantine-spacing-${mod}`;
              return value.startsWith('-')
                ? `calc(var(${variable}) * -1)`
                : `var(${variable})`;
            }
            return value;
          },
          identity: function identityResolver(value) {
            return value;
          },
          size: function sizeResolver(value) {
            return 'number' == typeof value ? (0, rem.D)(value) : value;
          },
          lineHeight: function lineHeightResolver(value, theme) {
            return 'string' == typeof value && value in theme.lineHeights
              ? `var(--mantine-line-height-${value})`
              : value;
          },
          fontFamily: function fontFamilyResolver(fontFamily) {
            return 'string' == typeof fontFamily && fontFamily in values
              ? values[fontFamily]
              : fontFamily;
          },
        };
        function replaceMediaQuery(query) {
          return query.replace('(min-width: ', '').replace('em)', '');
        }
        function getBreakpointValue(value, breakpoint) {
          return 'object' == typeof value &&
            null !== value &&
            breakpoint in value
            ? value[breakpoint]
            : value;
        }
        function parseStyleProps({ styleProps, data, theme }) {
          return (function sortMediaQueries({ media, ...props }) {
            return {
              ...props,
              media: Object.keys(media)
                .sort(
                  (a, b) =>
                    Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b)),
                )
                .map((query) => ({ query, styles: media[query] })),
            };
          })(
            (0, keys.H)(styleProps).reduce(
              (acc, styleProp) => {
                if ('hiddenFrom' === styleProp || 'visibleFrom' === styleProp)
                  return acc;
                const propertyData = data[styleProp],
                  properties = Array.isArray(propertyData.property)
                    ? propertyData.property
                    : [propertyData.property],
                  baseValue = (function getBaseValue(value) {
                    return 'object' == typeof value && null !== value
                      ? 'base' in value
                        ? value.base
                        : void 0
                      : value;
                  })(styleProps[styleProp]);
                if (
                  !(function hasResponsiveStyles(styleProp) {
                    if ('object' != typeof styleProp || null === styleProp)
                      return !1;
                    const breakpoints = Object.keys(styleProp);
                    return (
                      1 !== breakpoints.length || 'base' !== breakpoints[0]
                    );
                  })(styleProps[styleProp])
                )
                  return (
                    properties.forEach((property) => {
                      acc.inlineStyles[property] = resolvers[propertyData.type](
                        baseValue,
                        theme,
                      );
                    }),
                    acc
                  );
                acc.hasResponsiveStyles = !0;
                const breakpoints = (function getBreakpointKeys(value) {
                  return 'object' == typeof value && null !== value
                    ? (0, keys.H)(value).filter((key) => 'base' !== key)
                    : [];
                })(styleProps[styleProp]);
                return (
                  properties.forEach((property) => {
                    baseValue &&
                      (acc.styles[property] = resolvers[propertyData.type](
                        baseValue,
                        theme,
                      )),
                      breakpoints.forEach((breakpoint) => {
                        const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
                        acc.media[bp] = {
                          ...acc.media[bp],
                          [property]: resolvers[propertyData.type](
                            getBreakpointValue(
                              styleProps[styleProp],
                              breakpoint,
                            ),
                            theme,
                          ),
                        };
                      });
                  }),
                  acc
                );
              },
              {
                hasResponsiveStyles: !1,
                styles: {},
                inlineStyles: {},
                media: {},
              },
            ),
          );
        }
      },
    './node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          C: () => useRandomClassName,
        });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        );
        function useRandomClassName() {
          return `__m__-${(0, react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/:/g, '')}`;
        }
      },
    './node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { K: () => InlineStyles });
      var react = __webpack_require__('./node_modules/react/index.js'),
        Mantine_context = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs',
        ),
        keys = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/keys/keys.mjs',
        );
      function cssObjectToString(css) {
        return (0, keys.H)(css)
          .reduce(
            (acc, rule) =>
              void 0 !== css[rule]
                ? `${acc}${(function camelToKebabCase(value) {
                    return value.replace(
                      /[A-Z]/g,
                      (letter) => `-${letter.toLowerCase()}`,
                    );
                  })(rule)}:${css[rule]};`
                : acc,
            '',
          )
          .trim();
      }
      function stylesToString({ selector, styles, media }) {
        const baseStyles = styles ? cssObjectToString(styles) : '',
          mediaQueryStyles = Array.isArray(media)
            ? media.map(
                (item) =>
                  `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`,
              )
            : [];
        return `${baseStyles ? `${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
      }
      function InlineStyles({ selector, styles, media }) {
        const nonce = (0, Mantine_context.WV)();
        return react.createElement('style', {
          'data-mantine-styles': 'inline',
          nonce: nonce?.(),
          dangerouslySetInnerHTML: {
            __html: stylesToString({ selector, styles, media }),
          },
        });
      }
    },
    './node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A$: () => MantineContext,
          AI: () => useMantineClassNamesPrefix,
          FI: () => useMantineIsHeadless,
          If: () => useMantineWithStaticClasses,
          OY: () => useMantineCssVariablesResolver,
          WV: () => useMantineStyleNonce,
        });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        );
        const MantineContext = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
        function useMantineContext() {
          const ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            MantineContext,
          );
          if (!ctx)
            throw new Error(
              '[@mantine/core] MantineProvider was not found in tree',
            );
          return ctx;
        }
        function useMantineCssVariablesResolver() {
          return useMantineContext().cssVariablesResolver;
        }
        function useMantineClassNamesPrefix() {
          return useMantineContext().classNamesPrefix;
        }
        function useMantineStyleNonce() {
          return useMantineContext().getStyleNonce;
        }
        function useMantineWithStaticClasses() {
          return useMantineContext().withStaticClasses;
        }
        function useMantineIsHeadless() {
          return useMantineContext().headless;
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          y: () => MantineProvider,
        });
        var react = __webpack_require__('./node_modules/react/index.js');
        function isMantineColorScheme(value) {
          return 'auto' === value || 'dark' === value || 'light' === value;
        }
        function localStorageColorSchemeManager({
          key = 'mantine-color-scheme-value',
        } = {}) {
          let handleStorageEvent;
          return {
            get: (defaultValue) => {
              if ('undefined' == typeof window) return defaultValue;
              try {
                const storedColorScheme = window.localStorage.getItem(key);
                return isMantineColorScheme(storedColorScheme)
                  ? storedColorScheme
                  : defaultValue;
              } catch {
                return defaultValue;
              }
            },
            set: (value) => {
              try {
                window.localStorage.setItem(key, value);
              } catch (error) {
                console.warn(
                  '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',
                  error,
                );
              }
            },
            subscribe: (onUpdate) => {
              (handleStorageEvent = (event) => {
                event.storageArea === window.localStorage &&
                  event.key === key &&
                  isMantineColorScheme(event.newValue) &&
                  onUpdate(event.newValue);
              }),
                window.addEventListener('storage', handleStorageEvent);
            },
            unsubscribe: () => {
              window.removeEventListener('storage', handleStorageEvent);
            },
            clear: () => {
              window.localStorage.removeItem(key);
            },
          };
        }
        var Mantine_context = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs',
          ),
          keys = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/keys/keys.mjs',
          ),
          px = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs',
          ),
          rem = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
          ),
          MantineThemeProvider = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs',
          );
        function MantineClasses() {
          const theme = (0, MantineThemeProvider.xd)(),
            nonce = (0, Mantine_context.WV)(),
            classes = (0, keys.H)(theme.breakpoints).reduce(
              (acc, breakpoint) => {
                const isPxBreakpoint =
                    theme.breakpoints[breakpoint].includes('px'),
                  pxValue = (0, px.px)(theme.breakpoints[breakpoint]);
                return `${acc}@media (max-width: ${isPxBreakpoint ? pxValue - 0.1 + 'px' : (0, rem.em)(pxValue - 0.1)}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${isPxBreakpoint ? `${pxValue}px` : (0, rem.em)(pxValue)}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
              },
              '',
            );
          return react.createElement('style', {
            'data-mantine-styles': 'classes',
            nonce: nonce?.(),
            dangerouslySetInnerHTML: { __html: classes },
          });
        }
        function cssVariablesObjectToString(variables) {
          return Object.entries(variables)
            .map(([name, value]) => `${name}: ${value};`)
            .join('');
        }
        function wrapWithSelector(selectors, code) {
          return (Array.isArray(selectors) ? selectors : [selectors]).reduce(
            (acc, selector) => `${selector}{${acc}}`,
            code,
          );
        }
        var deep_merge = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs',
          ),
          get_primary_shade = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs',
          ),
          rgba = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs',
          ),
          get_contrast_color = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs',
          );
        function assignSizeVariables(variables, sizes, name) {
          (0, keys.H)(sizes).forEach((size) =>
            Object.assign(variables, {
              [`--mantine-${name}-${size}`]: sizes[size],
            }),
          );
        }
        const defaultCssVariablesResolver = (theme) => {
          const darkPrimaryShade = (0, get_primary_shade.g)(theme, 'dark'),
            lightPrimaryShade = (0, get_primary_shade.g)(theme, 'light'),
            defaultRadius =
              theme.defaultRadius in theme.radius
                ? theme.radius[theme.defaultRadius]
                : (0, rem.D)(theme.defaultRadius),
            result = {
              variables: {
                '--mantine-scale': theme.scale.toString(),
                '--mantine-cursor-type': theme.cursorType,
                '--mantine-webkit-font-smoothing': theme.fontSmoothing
                  ? 'antialiased'
                  : 'unset',
                '--mantine-color-scheme': 'light dark',
                '--mantine-moz-font-smoothing': theme.fontSmoothing
                  ? 'grayscale'
                  : 'unset',
                '--mantine-color-white': theme.white,
                '--mantine-color-black': theme.black,
                '--mantine-line-height': theme.lineHeights.md,
                '--mantine-font-family': theme.fontFamily,
                '--mantine-font-family-monospace': theme.fontFamilyMonospace,
                '--mantine-font-family-headings': theme.headings.fontFamily,
                '--mantine-heading-font-weight': theme.headings.fontWeight,
                '--mantine-heading-text-wrap': theme.headings.textWrap,
                '--mantine-radius-default': defaultRadius,
                '--mantine-primary-color-filled': `var(--mantine-color-${theme.primaryColor}-filled)`,
                '--mantine-primary-color-filled-hover': `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
                '--mantine-primary-color-light': `var(--mantine-color-${theme.primaryColor}-light)`,
                '--mantine-primary-color-light-hover': `var(--mantine-color-${theme.primaryColor}-light-hover)`,
                '--mantine-primary-color-light-color': `var(--mantine-color-${theme.primaryColor}-light-color)`,
              },
              light: {
                '--mantine-primary-color-contrast': (0, get_contrast_color.g)(
                  theme,
                  'light',
                ),
                '--mantine-color-bright': 'var(--mantine-color-black)',
                '--mantine-color-text': theme.black,
                '--mantine-color-body': theme.white,
                '--mantine-color-error': 'var(--mantine-color-red-6)',
                '--mantine-color-placeholder': 'var(--mantine-color-gray-5)',
                '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
                '--mantine-color-default': 'var(--mantine-color-white)',
                '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
                '--mantine-color-default-color': 'var(--mantine-color-black)',
                '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
              },
              dark: {
                '--mantine-primary-color-contrast': (0, get_contrast_color.g)(
                  theme,
                  'dark',
                ),
                '--mantine-color-bright': 'var(--mantine-color-white)',
                '--mantine-color-text': 'var(--mantine-color-dark-0)',
                '--mantine-color-body': 'var(--mantine-color-dark-7)',
                '--mantine-color-error': 'var(--mantine-color-red-8)',
                '--mantine-color-placeholder': 'var(--mantine-color-dark-3)',
                '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-4)`,
                '--mantine-color-default': 'var(--mantine-color-dark-6)',
                '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
                '--mantine-color-default-color': 'var(--mantine-color-white)',
                '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
              },
            };
          assignSizeVariables(
            result.variables,
            theme.breakpoints,
            'breakpoint',
          ),
            assignSizeVariables(result.variables, theme.spacing, 'spacing'),
            assignSizeVariables(result.variables, theme.fontSizes, 'font-size'),
            assignSizeVariables(
              result.variables,
              theme.lineHeights,
              'line-height',
            ),
            assignSizeVariables(result.variables, theme.shadows, 'shadow'),
            assignSizeVariables(result.variables, theme.radius, 'radius'),
            theme.colors[theme.primaryColor].forEach((_, index) => {
              result.variables[`--mantine-primary-color-${index}`] =
                `var(--mantine-color-${theme.primaryColor}-${index})`;
            }),
            (0, keys.H)(theme.colors).forEach((color) => {
              theme.colors[color].forEach((shade, index) => {
                result.variables[`--mantine-color-${color}-${index}`] = shade;
              });
              const lightFilledHover = `var(--mantine-color-${color}-${9 === lightPrimaryShade ? 8 : lightPrimaryShade + 1})`,
                darkFilledHover = `var(--mantine-color-${color}-${9 === darkPrimaryShade ? 8 : darkPrimaryShade + 1})`;
              (result.light['--mantine-color-dimmed'] =
                'var(--mantine-color-gray-6)'),
                (result.light[`--mantine-color-${color}-text`] =
                  `var(--mantine-color-${color}-filled)`),
                (result.light[`--mantine-color-${color}-filled`] =
                  `var(--mantine-color-${color}-${lightPrimaryShade})`),
                (result.light[`--mantine-color-${color}-filled-hover`] =
                  lightFilledHover),
                (result.light[`--mantine-color-${color}-light`] = (0, rgba.B)(
                  theme.colors[color][lightPrimaryShade],
                  0.1,
                )),
                (result.light[`--mantine-color-${color}-light-hover`] = (0,
                rgba.B)(theme.colors[color][lightPrimaryShade], 0.12)),
                (result.light[`--mantine-color-${color}-light-color`] =
                  `var(--mantine-color-${color}-${lightPrimaryShade})`),
                (result.light[`--mantine-color-${color}-outline`] =
                  `var(--mantine-color-${color}-${lightPrimaryShade})`),
                (result.light[`--mantine-color-${color}-outline-hover`] = (0,
                rgba.B)(theme.colors[color][lightPrimaryShade], 0.05)),
                (result.dark['--mantine-color-dimmed'] =
                  'var(--mantine-color-dark-2)'),
                (result.dark[`--mantine-color-${color}-text`] =
                  `var(--mantine-color-${color}-4)`),
                (result.dark[`--mantine-color-${color}-filled`] =
                  `var(--mantine-color-${color}-${darkPrimaryShade})`),
                (result.dark[`--mantine-color-${color}-filled-hover`] =
                  darkFilledHover),
                (result.dark[`--mantine-color-${color}-light`] = (0, rgba.B)(
                  theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
                  0.15,
                )),
                (result.dark[`--mantine-color-${color}-light-hover`] = (0,
                rgba.B)(
                  theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
                  0.2,
                )),
                (result.dark[`--mantine-color-${color}-light-color`] =
                  `var(--mantine-color-${color}-${Math.max(darkPrimaryShade - 5, 0)})`),
                (result.dark[`--mantine-color-${color}-outline`] =
                  `var(--mantine-color-${color}-${Math.max(darkPrimaryShade - 4, 0)})`),
                (result.dark[`--mantine-color-${color}-outline-hover`] = (0,
                rgba.B)(
                  theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
                  0.05,
                ));
            });
          const headings = theme.headings.sizes;
          return (
            (0, keys.H)(headings).forEach((heading) => {
              (result.variables[`--mantine-${heading}-font-size`] =
                headings[heading].fontSize),
                (result.variables[`--mantine-${heading}-line-height`] =
                  headings[heading].lineHeight),
                (result.variables[`--mantine-${heading}-font-weight`] =
                  headings[heading].fontWeight || theme.headings.fontWeight);
            }),
            result
          );
        };
        var default_theme = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs',
        );
        const defaultCssVariables = defaultCssVariablesResolver(
          default_theme.S,
        );
        function MantineCssVariables({
          cssVariablesSelector,
          deduplicateCssVariables,
        }) {
          const theme = (0, MantineThemeProvider.xd)(),
            nonce = (0, Mantine_context.WV)(),
            mergedVariables = (function getMergedVariables({
              theme,
              generator,
            }) {
              const defaultResolver = defaultCssVariablesResolver(theme),
                providerGenerator = generator?.(theme);
              return providerGenerator
                ? (0, deep_merge.$)(defaultResolver, providerGenerator)
                : defaultResolver;
            })({ theme, generator: (0, Mantine_context.OY)() }),
            shouldCleanVariables =
              ':root' === cssVariablesSelector && deduplicateCssVariables,
            css = (function convertCssVariables(input, selector) {
              const sharedVariables = cssVariablesObjectToString(
                  input.variables,
                ),
                shared = sharedVariables
                  ? wrapWithSelector(selector, sharedVariables)
                  : '',
                dark = cssVariablesObjectToString(input.dark),
                darkForced = dark
                  ? wrapWithSelector(
                      `${selector}[data-mantine-color-scheme="dark"]`,
                      dark,
                    )
                  : '',
                light = cssVariablesObjectToString(input.light);
              return `${shared}${darkForced}${light ? wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : ''}`;
            })(
              shouldCleanVariables
                ? (function removeDefaultVariables(input) {
                    const cleaned = { variables: {}, light: {}, dark: {} };
                    return (
                      (0, keys.H)(input.variables).forEach((key) => {
                        defaultCssVariables.variables[key] !==
                          input.variables[key] &&
                          (cleaned.variables[key] = input.variables[key]);
                      }),
                      (0, keys.H)(input.light).forEach((key) => {
                        defaultCssVariables.light[key] !== input.light[key] &&
                          (cleaned.light[key] = input.light[key]);
                      }),
                      (0, keys.H)(input.dark).forEach((key) => {
                        defaultCssVariables.dark[key] !== input.dark[key] &&
                          (cleaned.dark[key] = input.dark[key]);
                      }),
                      cleaned
                    );
                  })(mergedVariables)
                : mergedVariables,
              cssVariablesSelector,
            );
          return css
            ? react.createElement('style', {
                'data-mantine-styles': !0,
                nonce: nonce?.(),
                dangerouslySetInnerHTML: {
                  __html: `${css}${shouldCleanVariables ? '' : ((selector = cssVariablesSelector), `\n  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }\n  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }\n`)}`,
                },
              })
            : null;
          var selector;
        }
        MantineCssVariables.displayName = '@mantine/CssVariables';
        var use_isomorphic_effect = __webpack_require__(
          './node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs',
        );
        function setColorSchemeAttribute(colorScheme, getRootElement) {
          const computedColorScheme =
            'auto' !== colorScheme
              ? colorScheme
              : window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
          getRootElement()?.setAttribute(
            'data-mantine-color-scheme',
            computedColorScheme,
          );
        }
        function MantineProvider({
          theme,
          children,
          getStyleNonce,
          withStaticClasses = !0,
          withGlobalClasses = !0,
          deduplicateCssVariables = !0,
          withCssVariables = !0,
          cssVariablesSelector = ':root',
          classNamesPrefix = 'mantine',
          colorSchemeManager = localStorageColorSchemeManager(),
          defaultColorScheme = 'light',
          getRootElement = () => document.documentElement,
          cssVariablesResolver,
          forceColorScheme,
        }) {
          const { colorScheme, setColorScheme, clearColorScheme } =
            (function useProviderColorScheme({
              manager,
              defaultColorScheme,
              getRootElement,
              forceColorScheme,
            }) {
              const media = (0, react.useRef)(),
                [value, setValue] = (0, react.useState)(() =>
                  manager.get(defaultColorScheme),
                ),
                colorSchemeValue = forceColorScheme || value,
                setColorScheme = (0, react.useCallback)(
                  (colorScheme) => {
                    forceColorScheme ||
                      (setColorSchemeAttribute(colorScheme, getRootElement),
                      setValue(colorScheme),
                      manager.set(colorScheme));
                  },
                  [manager.set, colorSchemeValue, forceColorScheme],
                ),
                clearColorScheme = (0, react.useCallback)(() => {
                  setValue(defaultColorScheme),
                    setColorSchemeAttribute(defaultColorScheme, getRootElement),
                    manager.clear();
                }, [manager.clear, defaultColorScheme]);
              return (
                (0, react.useEffect)(
                  () => (
                    manager.subscribe(setColorScheme), manager.unsubscribe
                  ),
                  [manager.subscribe, manager.unsubscribe],
                ),
                (0, use_isomorphic_effect.o)(() => {
                  setColorSchemeAttribute(
                    manager.get(defaultColorScheme),
                    getRootElement,
                  );
                }, []),
                (0, react.useEffect)(() => {
                  if (forceColorScheme)
                    return (
                      setColorSchemeAttribute(forceColorScheme, getRootElement),
                      () => {}
                    );
                  void 0 === forceColorScheme &&
                    setColorSchemeAttribute(value, getRootElement),
                    (media.current = window.matchMedia(
                      '(prefers-color-scheme: dark)',
                    ));
                  const listener = (event) => {
                    'auto' === value &&
                      setColorSchemeAttribute(
                        event.matches ? 'dark' : 'light',
                        getRootElement,
                      );
                  };
                  return (
                    media.current?.addEventListener('change', listener),
                    () => media.current?.removeEventListener('change', listener)
                  );
                }, [value, forceColorScheme]),
                {
                  colorScheme: colorSchemeValue,
                  setColorScheme,
                  clearColorScheme,
                }
              );
            })({
              defaultColorScheme,
              forceColorScheme,
              manager: colorSchemeManager,
              getRootElement,
            });
          return (
            (function useRespectReduceMotion({
              respectReducedMotion,
              getRootElement,
            }) {
              (0, use_isomorphic_effect.o)(() => {
                respectReducedMotion &&
                  getRootElement()?.setAttribute(
                    'data-respect-reduced-motion',
                    'true',
                  );
              }, [respectReducedMotion]);
            })({
              respectReducedMotion: theme?.respectReducedMotion || !1,
              getRootElement,
            }),
            react.createElement(
              Mantine_context.A$.Provider,
              {
                value: {
                  colorScheme,
                  setColorScheme,
                  clearColorScheme,
                  getRootElement,
                  classNamesPrefix,
                  getStyleNonce,
                  cssVariablesResolver,
                  cssVariablesSelector,
                  withStaticClasses,
                },
              },
              react.createElement(
                MantineThemeProvider.nW,
                { theme },
                withCssVariables &&
                  react.createElement(MantineCssVariables, {
                    cssVariablesSelector,
                    deduplicateCssVariables,
                  }),
                withGlobalClasses && react.createElement(MantineClasses, null),
                children,
              ),
            )
          );
        }
        !(function suppressNextjsWarning() {
          const originalError = console.error;
          console.error = (...args) => {
            (args.length > 1 &&
              'string' == typeof args[0] &&
              args[0]
                .toLowerCase()
                .includes('extra attributes from the server') &&
              'string' == typeof args[1] &&
              args[1].toLowerCase().includes('data-mantine-color-scheme')) ||
              originalError(...args);
          };
        })(),
          (MantineProvider.displayName = '@mantine/core/MantineProvider');
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          nW: () => MantineThemeProvider,
          xd: () => useMantineTheme,
        });
        var react = __webpack_require__('./node_modules/react/index.js'),
          default_theme = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs',
          ),
          deep_merge = __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs',
          );
        const INVALID_PRIMARY_COLOR_ERROR =
            '[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color',
          INVALID_PRIMARY_SHADE_ERROR =
            '[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }';
        function isValidPrimaryShade(shade) {
          return (
            !(shade < 0 || shade > 9) &&
            parseInt(shade.toString(), 10) === shade
          );
        }
        function validateMantineTheme(theme) {
          if (!(theme.primaryColor in theme.colors))
            throw new Error(INVALID_PRIMARY_COLOR_ERROR);
          if (
            !(
              'object' != typeof theme.primaryShade ||
              (isValidPrimaryShade(theme.primaryShade.dark) &&
                isValidPrimaryShade(theme.primaryShade.light))
            )
          )
            throw new Error(INVALID_PRIMARY_SHADE_ERROR);
          if (
            'number' == typeof theme.primaryShade &&
            !isValidPrimaryShade(theme.primaryShade)
          )
            throw new Error(INVALID_PRIMARY_SHADE_ERROR);
        }
        const MantineThemeContext = (0, react.createContext)(null),
          useSafeMantineTheme = () =>
            (0, react.useContext)(MantineThemeContext) || default_theme.S;
        function useMantineTheme() {
          const ctx = (0, react.useContext)(MantineThemeContext);
          if (!ctx)
            throw new Error(
              '@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app',
            );
          return ctx;
        }
        function MantineThemeProvider({ theme, children, inherit = !0 }) {
          const parentTheme = useSafeMantineTheme(),
            mergedTheme = (0, react.useMemo)(
              () =>
                (function mergeMantineTheme(currentTheme, themeOverride) {
                  if (!themeOverride)
                    return validateMantineTheme(currentTheme), currentTheme;
                  const result = (0, deep_merge.$)(currentTheme, themeOverride);
                  return (
                    themeOverride.fontFamily &&
                      !themeOverride.headings?.fontFamily &&
                      (result.headings.fontFamily = themeOverride.fontFamily),
                    validateMantineTheme(result),
                    result
                  );
                })(inherit ? parentTheme : default_theme.S, theme),
              [theme, parentTheme, inherit],
            );
          return react.createElement(
            MantineThemeContext.Provider,
            { value: mergedTheme },
            children,
          );
        }
        MantineThemeProvider.displayName = '@mantine/core/MantineThemeProvider';
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          g: () => getPrimaryContrastColor,
          w: () => getContrastColor,
        });
        var _get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs',
            ),
          _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs',
            );
        function getContrastColor({ color, theme, autoContrast }) {
          if (
            !('boolean' == typeof autoContrast
              ? autoContrast
              : theme.autoContrast)
          )
            return 'var(--mantine-color-white)';
          return (0,
          _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(
            { color: color || theme.primaryColor, theme },
          ).isLight
            ? 'var(--mantine-color-black)'
            : 'var(--mantine-color-white)';
        }
        function getPrimaryContrastColor(theme, colorScheme) {
          return getContrastColor({
            color:
              theme.colors[theme.primaryColor][
                (0,
                _get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(
                  theme,
                  colorScheme,
                )
              ],
            theme,
            autoContrast: null,
          });
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { v: () => getGradient });
        var _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs',
          );
        function getGradient(gradient, theme) {
          const merged = {
              from: gradient?.from || theme.defaultGradient.from,
              to: gradient?.to || theme.defaultGradient.to,
              deg: gradient?.deg || theme.defaultGradient.deg || 0,
            },
            fromColor = (0,
            _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(
              merged.from,
              theme,
            ),
            toColor = (0,
            _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(
              merged.to,
              theme,
            );
          return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function getPrimaryShade(theme, colorScheme) {
          return 'number' == typeof theme.primaryShade
            ? theme.primaryShade
            : 'dark' === colorScheme
              ? theme.primaryShade.dark
              : theme.primaryShade.light;
        }
        __webpack_require__.d(__webpack_exports__, {
          g: () => getPrimaryShade,
        });
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { r: () => getThemeColor });
        var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs',
          );
        function getThemeColor(color, theme) {
          const parsed = (0,
          _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(
            { color: color || theme.primaryColor, theme },
          );
          return parsed.variable ? `var(${parsed.variable})` : color;
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          g: () => parseThemeColor,
        });
        var get_primary_shade = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs',
          ),
          to_rgba = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs',
          );
        function gammaCorrect(c) {
          return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        }
        function luminance(color) {
          if (color.startsWith('oklch('))
            return (
              ((function getLightnessFromOklch(oklchColor) {
                const match = oklchColor.match(/oklch\((.*?)%\s/);
                return match ? parseFloat(match[1]) : null;
              })(color) || 0) / 100
            );
          const { r, g, b } = (0, to_rgba.K)(color),
            sG = g / 255,
            sB = b / 255;
          return (
            0.2126 * gammaCorrect(r / 255) +
            0.7152 * gammaCorrect(sG) +
            0.0722 * gammaCorrect(sB)
          );
        }
        function isLightColor(color, luminanceThreshold = 0.179) {
          return (
            !color.startsWith('var(') && luminance(color) > luminanceThreshold
          );
        }
        function parseThemeColor({ color, theme, colorScheme }) {
          if ('string' != typeof color)
            throw new Error(
              '[@mantine/core] Failed to parse color. Expected color to be a string, instead got ' +
                typeof color,
            );
          if ('bright' === color)
            return {
              color,
              value: 'dark' === colorScheme ? theme.white : theme.black,
              shade: void 0,
              isThemeColor: !1,
              isLight: isLightColor(
                'dark' === colorScheme ? theme.white : theme.black,
                theme.luminanceThreshold,
              ),
              variable: '--mantine-color-bright',
            };
          if ('dimmed' === color)
            return {
              color,
              value:
                'dark' === colorScheme
                  ? theme.colors.dark[2]
                  : theme.colors.gray[7],
              shade: void 0,
              isThemeColor: !1,
              isLight: isLightColor(
                'dark' === colorScheme
                  ? theme.colors.dark[2]
                  : theme.colors.gray[6],
                theme.luminanceThreshold,
              ),
              variable: '--mantine-color-dimmed',
            };
          if ('white' === color || 'black' === color)
            return {
              color,
              value: 'white' === color ? theme.white : theme.black,
              shade: void 0,
              isThemeColor: !1,
              isLight: isLightColor(
                'white' === color ? theme.white : theme.black,
                theme.luminanceThreshold,
              ),
              variable: `--mantine-color-${color}`,
            };
          const [_color, shade] = color.split('.'),
            colorShade = shade ? Number(shade) : void 0,
            isThemeColor = _color in theme.colors;
          if (isThemeColor) {
            const colorValue =
              void 0 !== colorShade
                ? theme.colors[_color][colorShade]
                : theme.colors[_color][
                    (0, get_primary_shade.g)(theme, colorScheme || 'light')
                  ];
            return {
              color: _color,
              value: colorValue,
              shade: colorShade,
              isThemeColor,
              isLight: isLightColor(colorValue, theme.luminanceThreshold),
              variable: shade
                ? `--mantine-color-${_color}-${colorShade}`
                : `--mantine-color-${_color}-filled`,
            };
          }
          return {
            color,
            value: color,
            isThemeColor,
            isLight: isLightColor(color, theme.luminanceThreshold),
            shade: colorShade,
            variable: void 0,
          };
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { B: () => rgba });
        var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs',
          );
        function rgba(color, alpha2) {
          if ('string' != typeof color || alpha2 > 1 || alpha2 < 0)
            return 'rgba(0, 0, 0, 1)';
          if (color.startsWith('var(')) {
            return `color-mix(in srgb, ${color}, transparent ${100 * (1 - alpha2)}%)`;
          }
          if (color.startsWith('oklch'))
            return color.includes('/')
              ? color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`)
              : color.replace(')', ` / ${alpha2})`);
          const { r, g, b } = (0,
          _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.K)(color);
          return `rgba(${r}, ${g}, ${b}, ${alpha2})`;
        }
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function toRgba(color) {
          return (function isHexColor(hex) {
            return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(hex);
          })(color)
            ? (function hexToRgba(color) {
                let hexString = color.replace('#', '');
                if (3 === hexString.length) {
                  const shorthandHex = hexString.split('');
                  hexString = [
                    shorthandHex[0],
                    shorthandHex[0],
                    shorthandHex[1],
                    shorthandHex[1],
                    shorthandHex[2],
                    shorthandHex[2],
                  ].join('');
                }
                if (8 === hexString.length) {
                  const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
                  return {
                    r: parseInt(hexString.slice(0, 2), 16),
                    g: parseInt(hexString.slice(2, 4), 16),
                    b: parseInt(hexString.slice(4, 6), 16),
                    a: alpha,
                  };
                }
                const parsed = parseInt(hexString, 16);
                return {
                  r: (parsed >> 16) & 255,
                  g: (parsed >> 8) & 255,
                  b: 255 & parsed,
                  a: 1,
                };
              })(color)
            : color.startsWith('rgb')
              ? (function rgbStringToRgba(color) {
                  const [r, g, b, a] = color
                    .replace(/[^0-9,./]/g, '')
                    .split(/[/,]/)
                    .map(Number);
                  return { r, g, b, a: a || 1 };
                })(color)
              : color.startsWith('hsl')
                ? (function hslStringToRgba(hslaString) {
                    const matches = hslaString.match(
                      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
                    );
                    if (!matches) return { r: 0, g: 0, b: 0, a: 1 };
                    const h = parseInt(matches[1], 10),
                      s = parseInt(matches[2], 10) / 100,
                      l = parseInt(matches[3], 10) / 100,
                      a = matches[5] ? parseFloat(matches[5]) : void 0,
                      chroma = (1 - Math.abs(2 * l - 1)) * s,
                      huePrime = h / 60,
                      x = chroma * (1 - Math.abs((huePrime % 2) - 1)),
                      m = l - chroma / 2;
                    let r, g, b;
                    return (
                      huePrime >= 0 && huePrime < 1
                        ? ((r = chroma), (g = x), (b = 0))
                        : huePrime >= 1 && huePrime < 2
                          ? ((r = x), (g = chroma), (b = 0))
                          : huePrime >= 2 && huePrime < 3
                            ? ((r = 0), (g = chroma), (b = x))
                            : huePrime >= 3 && huePrime < 4
                              ? ((r = 0), (g = x), (b = chroma))
                              : huePrime >= 4 && huePrime < 5
                                ? ((r = x), (g = 0), (b = chroma))
                                : ((r = chroma), (g = 0), (b = x)),
                      {
                        r: Math.round(255 * (r + m)),
                        g: Math.round(255 * (g + m)),
                        b: Math.round(255 * (b + m)),
                        a: a || 1,
                      }
                    );
                  })(color)
                : { r: 0, g: 0, b: 0, a: 1 };
        }
        __webpack_require__.d(__webpack_exports__, { K: () => toRgba });
      },
    './node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => DEFAULT_THEME });
      var rem = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
        ),
        to_rgba =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs',
          ));
      function darken(color, alpha) {
        if (color.startsWith('var('))
          return `color-mix(in srgb, ${color}, black ${100 * alpha}%)`;
        const { r, g, b, a } = (0, to_rgba.K)(color),
          f = 1 - alpha,
          dark = (input) => Math.round(input * f);
        return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
      }
      var get_gradient = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs',
        ),
        parse_theme_color = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs',
        ),
        rgba = __webpack_require__(
          './node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs',
        );
      const DEFAULT_FONT_FAMILY =
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        DEFAULT_THEME = {
          scale: 1,
          fontSmoothing: !0,
          focusRing: 'auto',
          white: '#fff',
          black: '#000',
          colors: {
            dark: [
              '#C9C9C9',
              '#b8b8b8',
              '#828282',
              '#696969',
              '#424242',
              '#3b3b3b',
              '#2e2e2e',
              '#242424',
              '#1f1f1f',
              '#141414',
            ],
            gray: [
              '#f8f9fa',
              '#f1f3f5',
              '#e9ecef',
              '#dee2e6',
              '#ced4da',
              '#adb5bd',
              '#868e96',
              '#495057',
              '#343a40',
              '#212529',
            ],
            red: [
              '#fff5f5',
              '#ffe3e3',
              '#ffc9c9',
              '#ffa8a8',
              '#ff8787',
              '#ff6b6b',
              '#fa5252',
              '#f03e3e',
              '#e03131',
              '#c92a2a',
            ],
            pink: [
              '#fff0f6',
              '#ffdeeb',
              '#fcc2d7',
              '#faa2c1',
              '#f783ac',
              '#f06595',
              '#e64980',
              '#d6336c',
              '#c2255c',
              '#a61e4d',
            ],
            grape: [
              '#f8f0fc',
              '#f3d9fa',
              '#eebefa',
              '#e599f7',
              '#da77f2',
              '#cc5de8',
              '#be4bdb',
              '#ae3ec9',
              '#9c36b5',
              '#862e9c',
            ],
            violet: [
              '#f3f0ff',
              '#e5dbff',
              '#d0bfff',
              '#b197fc',
              '#9775fa',
              '#845ef7',
              '#7950f2',
              '#7048e8',
              '#6741d9',
              '#5f3dc4',
            ],
            indigo: [
              '#edf2ff',
              '#dbe4ff',
              '#bac8ff',
              '#91a7ff',
              '#748ffc',
              '#5c7cfa',
              '#4c6ef5',
              '#4263eb',
              '#3b5bdb',
              '#364fc7',
            ],
            blue: [
              '#e7f5ff',
              '#d0ebff',
              '#a5d8ff',
              '#74c0fc',
              '#4dabf7',
              '#339af0',
              '#228be6',
              '#1c7ed6',
              '#1971c2',
              '#1864ab',
            ],
            cyan: [
              '#e3fafc',
              '#c5f6fa',
              '#99e9f2',
              '#66d9e8',
              '#3bc9db',
              '#22b8cf',
              '#15aabf',
              '#1098ad',
              '#0c8599',
              '#0b7285',
            ],
            teal: [
              '#e6fcf5',
              '#c3fae8',
              '#96f2d7',
              '#63e6be',
              '#38d9a9',
              '#20c997',
              '#12b886',
              '#0ca678',
              '#099268',
              '#087f5b',
            ],
            green: [
              '#ebfbee',
              '#d3f9d8',
              '#b2f2bb',
              '#8ce99a',
              '#69db7c',
              '#51cf66',
              '#40c057',
              '#37b24d',
              '#2f9e44',
              '#2b8a3e',
            ],
            lime: [
              '#f4fce3',
              '#e9fac8',
              '#d8f5a2',
              '#c0eb75',
              '#a9e34b',
              '#94d82d',
              '#82c91e',
              '#74b816',
              '#66a80f',
              '#5c940d',
            ],
            yellow: [
              '#fff9db',
              '#fff3bf',
              '#ffec99',
              '#ffe066',
              '#ffd43b',
              '#fcc419',
              '#fab005',
              '#f59f00',
              '#f08c00',
              '#e67700',
            ],
            orange: [
              '#fff4e6',
              '#ffe8cc',
              '#ffd8a8',
              '#ffc078',
              '#ffa94d',
              '#ff922b',
              '#fd7e14',
              '#f76707',
              '#e8590c',
              '#d9480f',
            ],
          },
          primaryShade: { light: 6, dark: 8 },
          primaryColor: 'blue',
          variantColorResolver: ({
            color,
            theme,
            variant,
            gradient,
            autoContrast,
          }) => {
            const parsed = (0, parse_theme_color.g)({ color, theme }),
              _autoContrast =
                'boolean' == typeof autoContrast
                  ? autoContrast
                  : theme.autoContrast;
            if ('filled' === variant) {
              const textColor =
                _autoContrast && parsed.isLight
                  ? 'var(--mantine-color-black)'
                  : 'var(--mantine-color-white)';
              return parsed.isThemeColor
                ? void 0 === parsed.shade
                  ? {
                      background: `var(--mantine-color-${color}-filled)`,
                      hover: `var(--mantine-color-${color}-filled-hover)`,
                      color: textColor,
                      border: `${(0, rem.D)(1)} solid transparent`,
                    }
                  : {
                      background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                      hover: `var(--mantine-color-${parsed.color}-${9 === parsed.shade ? 8 : parsed.shade + 1})`,
                      color: textColor,
                      border: `${(0, rem.D)(1)} solid transparent`,
                    }
                : {
                    background: color,
                    hover: darken(color, 0.1),
                    color: textColor,
                    border: `${(0, rem.D)(1)} solid transparent`,
                  };
            }
            if ('light' === variant) {
              if (parsed.isThemeColor) {
                if (void 0 === parsed.shade)
                  return {
                    background: `var(--mantine-color-${color}-light)`,
                    hover: `var(--mantine-color-${color}-light-hover)`,
                    color: `var(--mantine-color-${color}-light-color)`,
                    border: `${(0, rem.D)(1)} solid transparent`,
                  };
                const parsedColor = theme.colors[parsed.color][parsed.shade];
                return {
                  background: (0, rgba.B)(parsedColor, 0.1),
                  hover: (0, rgba.B)(parsedColor, 0.12),
                  color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
                  border: `${(0, rem.D)(1)} solid transparent`,
                };
              }
              return {
                background: (0, rgba.B)(color, 0.1),
                hover: (0, rgba.B)(color, 0.12),
                color,
                border: `${(0, rem.D)(1)} solid transparent`,
              };
            }
            if ('outline' === variant)
              return parsed.isThemeColor
                ? void 0 === parsed.shade
                  ? {
                      background: 'transparent',
                      hover: `var(--mantine-color-${color}-outline-hover)`,
                      color: `var(--mantine-color-${color}-outline)`,
                      border: `${(0, rem.D)(1)} solid var(--mantine-color-${color}-outline)`,
                    }
                  : {
                      background: 'transparent',
                      hover: (0, rgba.B)(
                        theme.colors[parsed.color][parsed.shade],
                        0.05,
                      ),
                      color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                      border: `${(0, rem.D)(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`,
                    }
                : {
                    background: 'transparent',
                    hover: (0, rgba.B)(color, 0.05),
                    color,
                    border: `${(0, rem.D)(1)} solid ${color}`,
                  };
            if ('subtle' === variant) {
              if (parsed.isThemeColor) {
                if (void 0 === parsed.shade)
                  return {
                    background: 'transparent',
                    hover: `var(--mantine-color-${color}-light-hover)`,
                    color: `var(--mantine-color-${color}-light-color)`,
                    border: `${(0, rem.D)(1)} solid transparent`,
                  };
                const parsedColor = theme.colors[parsed.color][parsed.shade];
                return {
                  background: 'transparent',
                  hover: (0, rgba.B)(parsedColor, 0.12),
                  color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
                  border: `${(0, rem.D)(1)} solid transparent`,
                };
              }
              return {
                background: 'transparent',
                hover: (0, rgba.B)(color, 0.12),
                color,
                border: `${(0, rem.D)(1)} solid transparent`,
              };
            }
            return 'transparent' === variant
              ? parsed.isThemeColor
                ? void 0 === parsed.shade
                  ? {
                      background: 'transparent',
                      hover: 'transparent',
                      color: `var(--mantine-color-${color}-light-color)`,
                      border: `${(0, rem.D)(1)} solid transparent`,
                    }
                  : {
                      background: 'transparent',
                      hover: 'transparent',
                      color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
                      border: `${(0, rem.D)(1)} solid transparent`,
                    }
                : {
                    background: 'transparent',
                    hover: 'transparent',
                    color,
                    border: `${(0, rem.D)(1)} solid transparent`,
                  }
              : 'white' === variant
                ? parsed.isThemeColor
                  ? void 0 === parsed.shade
                    ? {
                        background: 'var(--mantine-color-white)',
                        hover: darken(theme.white, 0.01),
                        color: `var(--mantine-color-${color}-filled)`,
                        border: `${(0, rem.D)(1)} solid transparent`,
                      }
                    : {
                        background: 'var(--mantine-color-white)',
                        hover: darken(theme.white, 0.01),
                        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
                        border: `${(0, rem.D)(1)} solid transparent`,
                      }
                  : {
                      background: 'var(--mantine-color-white)',
                      hover: darken(theme.white, 0.01),
                      color,
                      border: `${(0, rem.D)(1)} solid transparent`,
                    }
                : 'gradient' === variant
                  ? {
                      background: (0, get_gradient.v)(gradient, theme),
                      hover: (0, get_gradient.v)(gradient, theme),
                      color: 'var(--mantine-color-white)',
                      border: 'none',
                    }
                  : 'default' === variant
                    ? {
                        background: 'var(--mantine-color-default)',
                        hover: 'var(--mantine-color-default-hover)',
                        color: 'var(--mantine-color-default-color)',
                        border: `${(0, rem.D)(1)} solid var(--mantine-color-default-border)`,
                      }
                    : {};
          },
          autoContrast: !1,
          luminanceThreshold: 0.3,
          fontFamily: DEFAULT_FONT_FAMILY,
          fontFamilyMonospace:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
          respectReducedMotion: !1,
          cursorType: 'default',
          defaultGradient: { from: 'blue', to: 'cyan', deg: 45 },
          defaultRadius: 'sm',
          activeClassName: 'mantine-active',
          focusClassName: '',
          headings: {
            fontFamily: DEFAULT_FONT_FAMILY,
            fontWeight: '700',
            textWrap: 'wrap',
            sizes: {
              h1: { fontSize: (0, rem.D)(34), lineHeight: '1.3' },
              h2: { fontSize: (0, rem.D)(26), lineHeight: '1.35' },
              h3: { fontSize: (0, rem.D)(22), lineHeight: '1.4' },
              h4: { fontSize: (0, rem.D)(18), lineHeight: '1.45' },
              h5: { fontSize: (0, rem.D)(16), lineHeight: '1.5' },
              h6: { fontSize: (0, rem.D)(14), lineHeight: '1.5' },
            },
          },
          fontSizes: {
            xs: (0, rem.D)(12),
            sm: (0, rem.D)(14),
            md: (0, rem.D)(16),
            lg: (0, rem.D)(18),
            xl: (0, rem.D)(20),
          },
          lineHeights: {
            xs: '1.4',
            sm: '1.45',
            md: '1.55',
            lg: '1.6',
            xl: '1.65',
          },
          radius: {
            xs: (0, rem.D)(2),
            sm: (0, rem.D)(4),
            md: (0, rem.D)(8),
            lg: (0, rem.D)(16),
            xl: (0, rem.D)(32),
          },
          spacing: {
            xs: (0, rem.D)(10),
            sm: (0, rem.D)(12),
            md: (0, rem.D)(16),
            lg: (0, rem.D)(20),
            xl: (0, rem.D)(32),
          },
          breakpoints: {
            xs: '36em',
            sm: '48em',
            md: '62em',
            lg: '75em',
            xl: '88em',
          },
          shadows: {
            xs: `0 ${(0, rem.D)(1)} ${(0, rem.D)(3)} rgba(0, 0, 0, 0.05), 0 ${(0, rem.D)(1)} ${(0, rem.D)(2)} rgba(0, 0, 0, 0.1)`,
            sm: `0 ${(0, rem.D)(1)} ${(0, rem.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, rem.D)(10)} ${(0, rem.D)(15)} ${(0, rem.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0, rem.D)(7)} ${(0, rem.D)(7)} ${(0, rem.D)(-5)}`,
            md: `0 ${(0, rem.D)(1)} ${(0, rem.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, rem.D)(20)} ${(0, rem.D)(25)} ${(0, rem.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0, rem.D)(10)} ${(0, rem.D)(10)} ${(0, rem.D)(-5)}`,
            lg: `0 ${(0, rem.D)(1)} ${(0, rem.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, rem.D)(28)} ${(0, rem.D)(23)} ${(0, rem.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0, rem.D)(12)} ${(0, rem.D)(12)} ${(0, rem.D)(-7)}`,
            xl: `0 ${(0, rem.D)(1)} ${(0, rem.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, rem.D)(36)} ${(0, rem.D)(28)} ${(0, rem.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0, rem.D)(17)} ${(0, rem.D)(17)} ${(0, rem.D)(-7)}`,
          },
          other: {},
          components: {},
        };
    },
    './node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Y: () => useProps });
        var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs',
            ),
          _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs',
            ));
        function useProps(component, defaultProps, props) {
          const theme = (0,
            _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_1__.xd)(),
            contextPropsPayload = theme.components[component]?.defaultProps;
          return {
            ...defaultProps,
            ...('function' == typeof contextPropsPayload
              ? contextPropsPayload(theme)
              : contextPropsPayload),
            ...(0,
            _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_2__.J)(
              props,
            ),
          };
        }
      },
    './node_modules/@mantine/core/esm/core/factory/factory.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        D: () => identity,
        P: () => factory,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      function identity(value) {
        return value;
      }
      function factory(ui) {
        const Component = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          ui,
        );
        return (Component.extend = identity), Component;
      }
    },
    './node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        v: () => polymorphicFactory,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _factory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@mantine/core/esm/core/factory/factory.mjs',
        );
      function polymorphicFactory(ui) {
        const Component = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          ui,
        );
        return (
          (Component.extend = _factory_mjs__WEBPACK_IMPORTED_MODULE_1__.D),
          Component
        );
      }
    },
    './node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function createVarsResolver(resolver) {
          return resolver;
        }
        __webpack_require__.d(__webpack_exports__, {
          V: () => createVarsResolver,
        });
      },
    './node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { I: () => useStyles });
        __webpack_require__('./node_modules/react/index.js');
        var Mantine_context = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs',
          ),
          MantineThemeProvider = __webpack_require__(
            './node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs',
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs');
        const FOCUS_CLASS_NAMES = {
          always: 'mantine-focus-always',
          auto: 'mantine-focus-auto',
          never: 'mantine-focus-never',
        };
        const EMPTY_CLASS_NAMES = {};
        function resolveClassNames({ theme, classNames, props, stylesCtx }) {
          return (function mergeClassNames(objects) {
            const merged = {};
            return (
              objects.forEach((obj) => {
                Object.entries(obj).forEach(([key, value]) => {
                  merged[key]
                    ? (merged[key] = (0, clsx.A)(merged[key], value))
                    : (merged[key] = value);
                });
              }),
              merged
            );
          })(
            (Array.isArray(classNames) ? classNames : [classNames]).map(
              (item) =>
                'function' == typeof item
                  ? item(theme, props, stylesCtx)
                  : item || EMPTY_CLASS_NAMES,
            ),
          );
        }
        function getClassName({
          theme,
          options,
          themeName,
          selector,
          classNamesPrefix,
          classNames,
          classes,
          unstyled,
          className,
          rootSelector,
          props,
          stylesCtx,
          withStaticClasses,
          headless,
        }) {
          return (0, clsx.A)(
            (function getGlobalClassNames({ theme, options, unstyled }) {
              return (0, clsx.A)(
                options?.focusable &&
                  !unstyled &&
                  (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
                options?.active && !unstyled && theme.activeClassName,
              );
            })({ theme, options, unstyled: unstyled || headless }),
            (function getThemeClassNames({
              themeName,
              theme,
              selector,
              props,
              stylesCtx,
            }) {
              return themeName.map(
                (n) =>
                  resolveClassNames({
                    theme,
                    classNames: theme.components[n]?.classNames,
                    props,
                    stylesCtx,
                  })?.[selector],
              );
            })({ theme, themeName, selector, props, stylesCtx }),
            (function getVariantClassName({
              options,
              classes,
              selector,
              unstyled,
            }) {
              return options?.variant && !unstyled
                ? classes[`${selector}--${options.variant}`]
                : void 0;
            })({ options, classes, selector, unstyled }),
            (function getResolvedClassNames({
              selector,
              stylesCtx,
              theme,
              classNames,
              props,
            }) {
              return resolveClassNames({ theme, classNames, props, stylesCtx })[
                selector
              ];
            })({ selector, stylesCtx, theme, classNames, props }),
            (function getOptionsClassNames({
              selector,
              stylesCtx,
              options,
              props,
              theme,
            }) {
              return resolveClassNames({
                theme,
                classNames: options?.classNames,
                props: options?.props || props,
                stylesCtx,
              })[selector];
            })({ selector, stylesCtx, options, props, theme }),
            (function getRootClassName({ rootSelector, selector, className }) {
              return rootSelector === selector ? className : void 0;
            })({ rootSelector, selector, className }),
            (function getSelectorClassName({ selector, classes, unstyled }) {
              return unstyled ? void 0 : classes[selector];
            })({ selector, classes, unstyled: unstyled || headless }),
            withStaticClasses &&
              !headless &&
              (function getStaticClassNames({
                themeName,
                classNamesPrefix,
                selector,
                withStaticClass,
              }) {
                return !1 === withStaticClass
                  ? []
                  : themeName.map(
                      (n) => `${classNamesPrefix}-${n}-${selector}`,
                    );
              })({
                themeName,
                classNamesPrefix,
                selector,
                withStaticClass: options?.withStaticClass,
              }),
            options?.className,
          );
        }
        function resolveStyles({ theme, styles, props, stylesCtx }) {
          return (Array.isArray(styles) ? styles : [styles]).reduce(
            (acc, style) =>
              'function' == typeof style
                ? { ...acc, ...style(theme, props, stylesCtx) }
                : { ...acc, ...style },
            {},
          );
        }
        function getThemeStyles({
          theme,
          themeName,
          props,
          stylesCtx,
          selector,
        }) {
          return themeName
            .map(
              (n) =>
                resolveStyles({
                  theme,
                  styles: theme.components[n]?.styles,
                  props,
                  stylesCtx,
                })[selector],
            )
            .reduce((acc, val) => ({ ...acc, ...val }), {});
        }
        function resolveStyle({ style, theme }) {
          return Array.isArray(style)
            ? [...style].reduce(
                (acc, item) => ({
                  ...acc,
                  ...resolveStyle({ style: item, theme }),
                }),
                {},
              )
            : 'function' == typeof style
              ? style(theme)
              : null == style
                ? {}
                : style;
        }
        var filter_props = __webpack_require__(
          './node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs',
        );
        function resolveVars({
          vars,
          varsResolver,
          theme,
          props,
          stylesCtx,
          selector,
          themeName,
          headless,
        }) {
          return (function mergeVars(vars) {
            return vars.reduce(
              (acc, current) => (
                current &&
                  Object.keys(current).forEach((key) => {
                    acc[key] = {
                      ...acc[key],
                      ...(0, filter_props.J)(current[key]),
                    };
                  }),
                acc
              ),
              {},
            );
          })([
            headless ? {} : varsResolver?.(theme, props, stylesCtx),
            ...themeName.map((name) =>
              theme.components?.[name]?.vars?.(theme, props, stylesCtx),
            ),
            vars?.(theme, props, stylesCtx),
          ])?.[selector];
        }
        function getStyle({
          theme,
          themeName,
          selector,
          options,
          props,
          stylesCtx,
          rootSelector,
          styles,
          style,
          vars,
          varsResolver,
          headless,
        }) {
          return {
            ...getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
            ...resolveStyles({ theme, styles, props, stylesCtx })[selector],
            ...resolveStyles({
              theme,
              styles: options?.styles,
              props: options?.props || props,
              stylesCtx,
            })[selector],
            ...resolveVars({
              theme,
              props,
              stylesCtx,
              vars,
              varsResolver,
              selector,
              themeName,
              headless,
            }),
            ...(rootSelector === selector
              ? resolveStyle({ style, theme })
              : null),
            ...resolveStyle({ style: options?.style, theme }),
          };
        }
        function useStyles({
          name,
          classes,
          props,
          stylesCtx,
          className,
          style,
          rootSelector = 'root',
          unstyled,
          classNames,
          styles,
          vars,
          varsResolver,
        }) {
          const theme = (0, MantineThemeProvider.xd)(),
            classNamesPrefix = (0, Mantine_context.AI)(),
            withStaticClasses = (0, Mantine_context.If)(),
            headless = (0, Mantine_context.FI)(),
            themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
          return (selector, options) => ({
            className: getClassName({
              theme,
              options,
              themeName,
              selector,
              classNamesPrefix,
              classNames,
              classes,
              unstyled,
              className,
              rootSelector,
              props,
              stylesCtx,
              withStaticClasses,
              headless,
            }),
            style: getStyle({
              theme,
              themeName,
              selector,
              options,
              props,
              stylesCtx,
              rootSelector,
              styles,
              style,
              vars,
              varsResolver,
              headless,
            }),
          });
        }
      },
    './node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function isObject(item) {
        return item && 'object' == typeof item && !Array.isArray(item);
      }
      function deepMerge(target, source) {
        const result = { ...target },
          _source = source;
        return (
          isObject(target) &&
            isObject(source) &&
            Object.keys(source).forEach((key) => {
              isObject(_source[key])
                ? (result[key] =
                    key in target
                      ? deepMerge(result[key], _source[key])
                      : _source[key])
                : (result[key] = _source[key]);
            }),
          result
        );
      }
      __webpack_require__.d(__webpack_exports__, { $: () => deepMerge });
    },
    './node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function filterProps(props) {
          return Object.keys(props).reduce(
            (acc, key) => (
              void 0 !== props[key] && (acc[key] = props[key]), acc
            ),
            {},
          );
        }
        __webpack_require__.d(__webpack_exports__, { J: () => filterProps });
      },
    './node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        GY: () => getSpacing,
        YC: () => getSize,
        ks: () => getLineHeight,
        nJ: () => getRadius,
        ny: () => getFontSize,
      });
      var _is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs',
          ),
        _units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs',
          );
      function getSize(size, prefix = 'size', convertToRem = !0) {
        if (void 0 !== size)
          return (0,
          _is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(
            size,
          )
            ? convertToRem
              ? (0, _units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.D)(
                  size,
                )
              : size
            : `var(--${prefix}-${size})`;
      }
      function getSpacing(size) {
        return getSize(size, 'mantine-spacing');
      }
      function getRadius(size) {
        return void 0 === size
          ? 'var(--mantine-radius-default)'
          : getSize(size, 'mantine-radius');
      }
      function getFontSize(size) {
        return getSize(size, 'mantine-font-size');
      }
      function getLineHeight(size) {
        return getSize(size, 'mantine-line-height', !1);
      }
    },
    './node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function isNumberLike(value) {
          return (
            'number' == typeof value ||
            ('string' == typeof value &&
              (!!(
                value.startsWith('calc(') ||
                value.startsWith('var(') ||
                (value.includes(' ') && '' !== value.trim())
              ) ||
                /[0-9]/.test(value.trim().replace('-', '')[0])))
          );
        }
        __webpack_require__.d(__webpack_exports__, { t: () => isNumberLike });
      },
    './node_modules/@mantine/core/esm/core/utils/keys/keys.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function keys(object) {
        return Object.keys(object);
      }
      __webpack_require__.d(__webpack_exports__, { H: () => keys });
    },
    './node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function px(value) {
        const transformedValue = (function getTransformedScaledValue(value) {
          return 'string' == typeof value &&
            value.includes('var(--mantine-scale)')
            ? value
                .match(/^calc\((.*?)\)$/)?.[1]
                .split('*')[0]
                .trim()
            : value;
        })(value);
        return 'number' == typeof transformedValue
          ? transformedValue
          : 'string' == typeof transformedValue
            ? transformedValue.includes('calc') ||
              transformedValue.includes('var')
              ? transformedValue
              : transformedValue.includes('px')
                ? Number(transformedValue.replace('px', ''))
                : transformedValue.includes('rem')
                  ? 16 * Number(transformedValue.replace('rem', ''))
                  : transformedValue.includes('em')
                    ? 16 * Number(transformedValue.replace('em', ''))
                    : Number(transformedValue)
            : NaN;
      }
      __webpack_require__.d(__webpack_exports__, { px: () => px });
    },
    './node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function scaleRem(remValue) {
        return `calc(${remValue} * var(--mantine-scale))`;
      }
      function createConverter(units, { shouldScale = !1 } = {}) {
        return function converter(value) {
          if (0 === value || '0' === value) return `0${units}`;
          if ('number' == typeof value) {
            const val = `${value / 16}${units}`;
            return shouldScale ? scaleRem(val) : val;
          }
          if ('string' == typeof value) {
            if (
              value.startsWith('calc(') ||
              value.startsWith('var(') ||
              value.startsWith('clamp(')
            )
              return value;
            if (value.includes(' '))
              return value
                .split(' ')
                .map((val) => converter(val))
                .join(' ');
            if (value.includes(units))
              return shouldScale ? scaleRem(value) : value;
            const replaced = value.replace('px', '');
            if (!Number.isNaN(Number(replaced))) {
              const val = `${Number(replaced) / 16}${units}`;
              return shouldScale ? scaleRem(val) : val;
            }
          }
          return value;
        };
      }
      __webpack_require__.d(__webpack_exports__, {
        D: () => rem,
        em: () => em,
      });
      const rem = createConverter('rem', { shouldScale: !0 }),
        em = createConverter('em');
    },
    './node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          o: () => useIsomorphicEffect,
        });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        );
        const useIsomorphicEffect =
          'undefined' != typeof document
            ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
            : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
      },
    './node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => useTimeout });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      function useTimeout(callback, delay, options = { autoInvoke: !1 }) {
        const timeoutRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
          start = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (...callbackParams) => {
              timeoutRef.current ||
                (timeoutRef.current = window.setTimeout(() => {
                  callback(callbackParams), (timeoutRef.current = null);
                }, delay));
            },
            [delay],
          ),
          clear = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            timeoutRef.current &&
              (window.clearTimeout(timeoutRef.current),
              (timeoutRef.current = null));
          }, []);
        return (
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
            () => (options.autoInvoke && start(), clear),
            [clear, start],
          ),
          { start, clear }
        );
      }
    },
    './node_modules/clsx/dist/clsx.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      function r(e) {
        var t,
          f,
          n = '';
        if ('string' == typeof e || 'number' == typeof e) n += e;
        else if ('object' == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
              e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
          } else for (f in e) e[f] && (n && (n += ' '), (n += f));
        return n;
      }
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = function clsx() {
        for (var e, t, f = 0, n = '', o = arguments.length; f < o; f++)
          (e = arguments[f]) && (t = r(e)) && (n && (n += ' '), (n += t));
        return n;
      };
    },
  },
]);
