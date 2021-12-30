import { Box, Input, InputProps, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
  label: string
}

const CustomInput: React.FC<Props & InputProps> = ({ label, ...rest }) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true)

  return (
    <Box 
      border="1px solid rgba(157, 164, 166, 0.07)" 
      borderRadius=".4rem" 
      position="relative"
      overflow="hidden"
      bg="white" 
      h="4rem" 
      p="0"
    >
      <Text
        position="absolute"
        zIndex={10}
        transition="all ease-in-out .25s"
        top={isLabelVisible ? '1.1rem' : '.4rem'}
        left={isLabelVisible ? '1.276rem' : '.7rem'}
        fontSize={isLabelVisible ? '1.2rem' : '.9rem'}
        color={isLabelVisible ? 'secondary.500' : 'grey'}
        fontWeight={isLabelVisible ? '600' : 'normal'}
      >
        {label}                                                                                                                                                                                                                                 
      </Text>
      <Input
        position="absolute"
        zIndex={1}
        bottom="0"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        h="80%"
        fontSize="1.2rem"
        p="2rem 1.2rem 1.2rem auto"
        border="none !Important"
        outline="none !Important"
        onFocus={() => setIsLabelVisible(false)}
        bg="transparent"
        {...rest}
      />
    </Box>
  )
}

export default CustomInput