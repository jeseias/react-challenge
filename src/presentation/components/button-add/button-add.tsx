import { Button, ButtonProps, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AddSVG } from '../svgs'

type Props = {
  to: string
}

const ButtonAdd: React.FC<Props & ButtonProps> = ({ children, to,...rest }) => {
  return (
    <Link to={to}>
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
        <AddSVG aria-label="plus icon"/>
        <Text ml=".8rem" fontWeight="500" fontSize="1.4rem">{children}</Text>
      </Button>
    </Link>
  )
}

export default ButtonAdd