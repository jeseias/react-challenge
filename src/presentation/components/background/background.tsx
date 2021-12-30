import { Box } from '@chakra-ui/react'
import React from 'react'
import { OwlSVG } from '../svgs'

const Background: React.FC = ({ children }) => {
  return (
    <Box bg="light" w="100vw" h="100vh" position="relative">
      <Box position="absolute" w="100vw" h="100vh" p="4.2rem 0 0 0" zIndex={1}>
        <OwlSVG />
      </Box>
      <Box position="relative" zIndex={10} w="100vw" h="100vh">
        {children}
      </Box>
    </Box>
  )
}

export default Background