import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'presentation/styles/global-styles'

export const __render = (Component: React.FC) => {
  return render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Component />
      </ChakraProvider>
    </BrowserRouter>
  )
}