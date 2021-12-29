import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default App