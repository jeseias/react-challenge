import { Button, ButtonProps, Text } from '@chakra-ui/react'
import React from 'react'
import { AddSVG } from '../svgs'

const ButtonAdd: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button 
      h="4rem" 
      borderRadius="2.4rem" 
      border="1px solid"
      borderColor="secondary.600" 
      display="flex" 
      p="1.2rem 1.3rem" 
      bg="transparent"
      color="secondary.600"
      {...rest}
    > 
      <AddSVG />
      <Text ml=".8rem" fontWeight="500" fontSize="1.4rem">{children}</Text>
    </Button>
  )
}

export default ButtonAdd