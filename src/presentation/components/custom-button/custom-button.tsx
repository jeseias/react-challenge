import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

const CustomButton: React.FC<ButtonProps> = ({ children,  ...rest}) => {
  return (
    <Button 
      display="block"
      borderRadius="4rem" 
      bg="secondary.600" 
      minWidth="16.1rem" 
      fontSize="1.4rem"
      fontWeight="600"
      lineHeight="1.7rem"
      textAlign="center"
      border="2px solid#834825"
      color="white"
      h="4rem" 
      m="0 auto"
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CustomButton