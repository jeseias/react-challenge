import { extendTheme } from '@chakra-ui/react'

export const globalStyles = {
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    fontSize: '62.5%',
  },
  'body, button, input': {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif'
  }
}

export const theme = extendTheme({
  colors: {
    light: {
      400: '#FAF2EC',
      500: '#F8E5D6'
    },
    primary: {
      500: '#804627',
      600: '#834825',
    },
    secondary: {
      500: '#6E3421',
    },
    lightWhite: 'rgba(255, 255, 255, 0.42)',
    dark: {
      500: '#333438'
    },
    grey: '#736D6B'
  },
  styles: {
    global: globalStyles
  }
})
