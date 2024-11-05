export const defaultTheme = {
  fonts: {
    primary: '"Roboto", sans-serif',
    secondary: '"Baloo 2", sans-serif'
  },
  colors: {
    white: '#FFFFFF',
    yellow: {
      300: '#F1E9C9',
      500: '#DBAC2C',
      700: '#C47F17'
    },
    purple: {
      300: '#EBE5F9',
      500: '#8047F8',
      700: '#4B2995'
    },
    base: {
      100: '#F3F2F2',
      200: '#EDEDED',
      300: '#E6E5E5',
      400: '#D7D5D5',
      500: '#8D8686',
      600: '#574F4D',
      700: '#403937',
      800: '#272221'
    },
    background: '#FAFAFA'
  },
  sizes: {
    '2xxlg': '4.8rem',
    xxxlg: '3.2rem',
    xxlg: '2.4rem',
    xlg: '2rem',
    lg: '1.8rem',
    md: '1.6rem',
    sm: '1.4rem',
    xsm: '1.2rem',
    xxsm: '1rem'
  }
} as const
