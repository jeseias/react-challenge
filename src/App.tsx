import { ChakraProvider } from "@chakra-ui/react"
import Router from "main/routes/router"
import { Background } from "presentation/components"
import { theme } from "presentation/styles/global-styles"
import React from "react"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Background>
          <Router />
        </Background>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App