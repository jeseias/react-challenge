import React from 'react'
import { Input,  InputProps, Textarea, TextareaProps } from '@chakra-ui/react'

type Props = {
  textArea?: boolean
  register?: any,
}

const TextField: React.FC<Props & InputProps & TextareaProps> = ({ textArea, register,...rest }) => {
  return (
    <>
      {textArea ? 
        <Textarea
          aria-label="textarea"
          display="block"
          bg="rgba(255, 255, 255, 0.12)"
          border=" 1px solid rgba(157, 164, 166, 0.07"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          color="secondary.600"
          {...register}
          {...rest}
        />
      : (
        <Input 
          aria-label="input"
          bg="rgba(255, 255, 255, 0.12)"
          border=" 1px solid rgba(157, 164, 166, 0.07"
          borderRadius=".4rem"
          h="4rem"
          fontSize="1.2rem"
          fontWeight="600"
          lineHeight="15px"
          color="secondary.600"
          {...register}
          {...rest}
        />
      )}
    </>
  )
}

export default TextField