import { ChakraProvider } from "@chakra-ui/react"
import Router from "main/routes/router"
import { Background } from "presentation/components"
import { AuthProvider } from "presentation/modules/contexts/auth-context"
import { theme } from "presentation/styles/global-styles"
import React from "react"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Background>
            <Router />
          </Background>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App