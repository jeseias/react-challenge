import { Box } from '@chakra-ui/react'
import React from 'react'
import { OwlSVG } from '../svgs'

const Background: React.FC = ({ children }) => {
  return (
    <Box bg="light.500" w="100vw" minHeight="100vh" position="relative">
      <Box position="fixed" w="100vw" minHeight="100vh" p="4.2rem 0 0 0" zIndex={1}>
        <OwlSVG />
      </Box>
      <Box position="relative" zIndex={10} w="100%" maxWidth={['37.4rem']} m="0 auto" h="100%">
        {children}
      </Box>
    </Box>
  )
}

export default Background