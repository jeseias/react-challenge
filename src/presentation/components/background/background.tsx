import { Box } from '@chakra-ui/react'
import React from 'react'

const Background: React.FC = ({ children }) => {
  return (
    <Box bg="light" w="100vw" h="100vh">
      {children}
    </Box>
  )
}

export default Background