import { extendTheme } from '@chakra-ui/react'

export const globalStyles = {
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    fontSize: '62.5%',
    '@media screen and (max-width: 75.5em)': {
      fontSize: '56.25%'
    },
    '@media screen and (max-width: 56.25em)': {
      fontSize: '50%'
    }
  },
  'body, button, input': {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif'
  }
}

export const theme = extendTheme({
  colors: {
    light: '#F8E5D6',
    primary: {
      500: '#804627',
      600: '#834825',
    },
    secondary: {
      500: '#6E3421',
      600: '#6E3421'
    },
    dark: '#020202',
    grey: '#736D6B'
  },
  styles: {
    global: globalStyles
  }
})
