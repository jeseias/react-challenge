import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'
import { REACT_CHALLENGE_ACCOUNT } from 'presentation/modules/contexts/auth-context'

import { SignInProps, SignInInputs } from './sign-in.types'

const SignIn = ({ authentication, storage }: SignInProps) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<SignInInputs>()

  const handleAuthentication: SubmitHandler<SignInInputs> = async (data) => {
    try {
      const account = await authentication.auth({
        username: data.username,
        password: data.password
      })
      if (account.token && !account.user.username) {
        storage.set(REACT_CHALLENGE_ACCOUNT, account)
        navigate(`${PageRoutes.Journals}/${account.user.id}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box pt={["22.4rem"]}>
      <Box maxWidth="37.5rem" width="100%" m="0 auto" p="0 2.7rem 0 2.9rem">
        <LogoSVG width="20.524rem" height="4.3rem" />
        <Flex p="8.528rem 0 4rem 0" justifyContent="space-between" alignItems="baseline">
          <AuthTitle>Sign In</AuthTitle>
          <LinkText to={PageRoutes.SignUp} bold tiny>Sign up</LinkText> 
        </Flex>
        <form onSubmit={handleSubmit(handleAuthentication)}>
          <Box>
            <Box mb="2.9rem">
              <AuthInput 
                label={errors.username?.message ?? "Your username" }
                register={{...register('username', {
                  required: 'Username is required',
                })}}
                data-testid="username-input"
              />
            </Box>
            <AuthInput
              label={errors.password?.message ?? "Your password" }
              type="password" 
              register={{...register('password', {
                required: 'Password is required',
              })}}
              data-testid="password-input"
            />
          </Box>
          <Flex justifyContent="flex-end" mt="1.2rem">
            <LinkText to={PageRoutes.ForgotPassword} tiny>Forgot Password?</LinkText> 
          </Flex>
          <Flex justifyContent="center" mt="4rem">
            <CustomButton type="submit">Sign In</CustomButton>
          </Flex>
        </form>
      </Box>
    </Box>
  )
}

export default SignIn