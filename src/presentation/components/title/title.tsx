import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

const Title: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text 
      fontSize={['2.4rem']} 
      fontWeight="bold"
      fontStyle="normal"
      lineHeight="2.8rem"
      fontFamily="Abhaya Libre"
      color="black" 
      {...rest}
    >
      {children}
    </Text>
  )
}

export default Title