import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { Link, To } from 'react-router-dom'

type Props = {
  to: To 
  linkState?:any
  bold?: boolean 
  tiny?: boolean
}

const LinkText: React.FC<Props & TextProps> = ({ children, to, linkState, bold, tiny, ...rest }) => {
  return (
    <Link to={to} state={linkState}>
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