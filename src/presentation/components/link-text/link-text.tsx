import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string 
  bold?: boolean 
  tiny?: boolean
}

const LinkText: React.FC<Props & TextProps> = ({ children, to, bold, tiny, ...rest }) => {
  return (
    <Link to={to}>
      <Text 
        textDecoration="underline" 
        fontFamily="Montserrat"
        lineHeight="1.5rem"
        fontWeight={bold ? '600' : 'normal'} 
        color="secondary.500"
        fontSize={tiny ? '1.2rem' : '1.4rem'}
        cursor="pointer"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

export default LinkText