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
          aria-label="textarea"
          display="block"
          border=" 1px solid rgba(157, 164, 166, 0.07)"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          bg="lightWhite"
          color="primary.500"
          focusBorderColor="none"
          {...rest}
        />
      : (
        <Input 
          aria-label="input"
          border=" 1px solid rgba(157, 164, 166, 0.07)"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          bg="lightWhite"
          color="primary.500"
          focusBorderColor="none"
          {...rest}
        />
      )}
    </>
  )
}

export default TextField