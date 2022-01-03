import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

const AuthTitle: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text 
      color="secondary.500" 
      fontSize={['3.2rem']} 
      fontStyle="normal" 
      fontFamily="Montserrat"
      lineHeight="3.001rem"
      {...rest}
    >
      {children}
    </Text>
  )
}

export default AuthTitle