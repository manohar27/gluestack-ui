export interface IColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export const config = {
  aliases: {
    // colors
    bg: {
      property: 'backgroundColor',
      scale: 'color',
    },
    bgColor: {
      property: 'backgroundColor',
      scale: 'color',
    },
    color: {
      property: 'color',
      scale: 'color',
    },

    // dimension
    h: {
      property: 'height',
      scale: 'spacing',
    },
    w: {
      property: 'width',
      scale: 'spacing',
    },

    // padding
    p: {
      property: 'padding',
      scale: 'spacing',
    },
    px: {
      property: 'paddingHorizontal',
      scale: 'spacing',
    },
    py: {
      property: 'paddingVertical',
      scale: 'spacing',
    },
    pt: {
      property: 'paddingTop',
      scale: 'spacing',
    },
    pb: {
      property: 'paddingBottom',
      scale: 'spacing',
    },
    pr: {
      property: 'paddingRight',
      scale: 'spacing',
    },
    pl: {
      property: 'paddingLeft',
      scale: 'spacing',
    },

    // margin
    m: {
      property: 'margin',
      scale: 'spacing',
    },
    mx: {
      property: 'marginHorizontal',
      scale: 'spacing',
    },
    my: {
      property: 'marginVertical',
      scale: 'spacing',
    },
    mt: {
      property: 'marginTop',
      scale: 'spacing',
    },
    mb: {
      property: 'marginBottom',
      scale: 'spacing',
    },
    mr: {
      property: 'marginRight',
      scale: 'spacing',
    },
    ml: {
      property: 'marginLeft',
      scale: 'spacing',
    },

    // Borders
    borderWidth: {
      property: 'borderWidth',
      scale: 'borderWidths',
    },

    borderRadius: {
      property: 'borderRadius',
      scale: 'radii',
    },

    rounded: {
      property: 'borderRadius',
      scale: 'radii',
    },

    // Typography
    letterSpacing: {
      property: 'letterSpacing',
      scale: 'letterSpacings',
    },
    lineHeight: {
      property: 'lineHeight',
      scale: 'lineHeights',
    },
    fontWeight: {
      property: 'fontWeight',
      scale: 'fontWeights',
    },
    fontFamily: {
      property: 'fontFamily',
      scale: 'fonts',
    },
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
  },

  tokens: {
    color: {
      white: '#FFFFFF',
      black: '#000000',
      lightText: '#FFFFFF',
      darkText: '#000000',
      rose: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337',
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
      purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      lightBlue: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      darkBlue: {
        50: '#dbf4ff',
        100: '#addbff',
        200: '#7cc2ff',
        300: '#4aa9ff',
        400: '#1a91ff',
        500: '#0077e6',
        600: '#005db4',
        700: '#004282',
        800: '#002851',
        900: '#000e21',
      },
      cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
      emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
      },
      yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      warmGray: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
      trueGray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      coolGray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      blueGray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      dark: {
        50: '#18181b',
        100: '#27272a',
        200: '#3f3f46',
        300: '#52525b',
        400: '#71717a',
        500: '#a1a1aa',
        600: '#d4d4d8',
        700: '#e4e4e7',
        800: '#f4f4f5',
        900: '#fafafa',
      },
      text: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      // Derived colors
      danger: {} as IColorHues,
      error: {} as IColorHues,
      success: {} as IColorHues,
      warning: {} as IColorHues,
      muted: {} as IColorHues,
      primary: {} as IColorHues,
      info: {} as IColorHues,
      secondary: {} as IColorHues,
      light: {} as IColorHues,
      tertiary: {} as IColorHues,
    },
    spacing: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    letterSpacings: {
      'xs': '-0.05em',
      'sm': '-0.025em',
      'md': 0,
      'lg': '0.025em',
      'xl': '0.05em',
      '2xl': '0.1em',
    },
    lineHeights: {
      '2xs': '1em',
      'xs': '1.125em',
      'sm': '1.25em',
      'md': '1.375em',
      'lg': '1.5em',
      'xl': '1.75em',
      '2xl': '2em',
      '3xl': '2.5em',
      '4xl': '3em',
      '5xl': '4em',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extraBlack: 950,
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },

    platforms: ['web', 'android', 'ios'],
  },
};

config.tokens.color.danger = config.tokens.color.rose;
config.tokens.color.error = config.tokens.color.red;
config.tokens.color.success = config.tokens.color.green;
config.tokens.color.warning = config.tokens.color.orange;
config.tokens.color.muted = config.tokens.color.trueGray;
config.tokens.color.primary = config.tokens.color.cyan;
config.tokens.color.secondary = config.tokens.color.pink;
config.tokens.color.tertiary = config.tokens.color.emerald;
config.tokens.color.info = config.tokens.color.lightBlue;
config.tokens.color.light = config.tokens.color.warmGray;
