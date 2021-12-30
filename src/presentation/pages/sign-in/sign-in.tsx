import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'

const SignIn: React.FC = () => {
  return (
    <Box pt={["22.4rem"]}>
      <Box maxWidth="37.5rem" width="100%" m="0 auto" p="0 2.7rem 0 2.9rem">
        <LogoSVG width="20.524rem" height="4.3rem" />
        <Flex p="8.528rem 0 4rem 0" justifyContent="space-between" alignItems="baseline">
          <AuthTitle>Sign In</AuthTitle>
          <LinkText to={PageRoutes.SignUp} bold tiny>Sign up</LinkText> 
        </Flex>
        <Box>
          <form>
            <Box mb="2.9rem">
              <AuthInput label="Your username" />
            </Box>
            <AuthInput label="Your password" />
          </form>
        </Box>
        <Flex justifyContent="flex-end" mt="1.2rem">
          <LinkText to={PageRoutes.ForgotPassword} tiny>Forgot Password?</LinkText> 
        </Flex>
        <Flex justifyContent="center" mt="4rem">
          <CustomButton>Sign In</CustomButton>
        </Flex>
      </Box>
    </Box>
  )
}

export default SignIn