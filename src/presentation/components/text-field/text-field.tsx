import React from 'react'
import { Input,  InputProps, Textarea, TextareaProps } from '@chakra-ui/react'

type Props = {
  textArea?: boolean
}

const TextField: React.FC<Props & InputProps & TextareaProps> = ({ textArea, ...rest }) => {
  return (
    <>
      {textArea ? 
        <Textarea
          display="block"
          bg="rgba(255, 255, 255, 0.12)"
          border=" 1px solid rgba(157, 164, 166, 0.07"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          color="secondary.600"
          {...rest}
        />
      : (
        <Input 
          bg="rgba(255, 255, 255, 0.12)"
          border=" 1px solid rgba(157, 164, 166, 0.07"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          color="secondary.600"
          {...rest}
        />
      )}
    </>
  )
}

export default TextField