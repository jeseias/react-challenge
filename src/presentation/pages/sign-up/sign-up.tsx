import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'

const SignUp: React.FC = () => {
  return (
    <Box pt={["22.4rem"]}>
      <Box maxWidth="37.5rem" width="100%" m="0 auto" p="0 2.7rem 0 2.9rem">
        <LogoSVG width="20.524rem" height="4.3rem" />
        <Flex p="8.528rem 0 4rem 0" justifyContent="space-between" alignItems="baseline">
          <AuthTitle>Sign Up</AuthTitle>
          <LinkText to={PageRoutes.SignIn} bold tiny>Already have an account</LinkText> 
        </Flex>
        <Box>
          <form>
            <Box mb="2.9rem">
              <AuthInput label="Define a username" />
            </Box>
            <Box mb="2.9rem">
              <AuthInput label="Email (optional)" />
            </Box>
            <AuthInput label="Set your password" />
          </form>
        </Box> 
        <Flex justifyContent="center" mt="4rem">
          <CustomButton>Sign In</CustomButton>
        </Flex>
      </Box>
    </Box>
  )
}

export default SignUp