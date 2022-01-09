import { Box, Input, InputProps, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
  label: string
  register: any
}

const AuthInput: React.FC<Props & InputProps> = ({ label, register, ...rest }) => {
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
        color={isLabelVisible ? 'primary.600' : 'grey'}
        fontWeight={isLabelVisible ? '600' : 'normal'}
        fontFamily="Montserrat"
        lineHeight={isLabelVisible ? '1.97rem' : '1.463rem'}
      >
        {label}                                                                                                                                                                                                                                 
      </Text>
      <Input
        position="absolute"
        display="inline-block"
        zIndex={1}
        bottom="0"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        h="100%"
        fontSize="1.2rem"
        lineHeight="1.463rem"
        fontFamily="Montserrat"
        pt="1.8rem"
        border="none !Important"
        focusBorderColor="none"
        color="primary.600"
        onFocus={() => setIsLabelVisible(false)}
        bg="white"
        {...register}
        {...rest}
      />
    </Box>
  )
}

export default AuthInput