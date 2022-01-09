import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { SignUpProps, SignUpInputs } from './sign-up.types'
 
const SignUp = ({ addAccount }: SignUpProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpInputs>()

  const navigate = useNavigate()

  const handleAddAccount: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      const account = await addAccount.add({
        email: data.email,
        username: data.password,
        password: data.password
      })

      if (account && account.token && account.user.username) {
        navigate(PageRoutes.SignIn)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box pt={["22.4rem"]}>
      <Box maxWidth="37.5rem" width="100%" m="0 auto" p="0 2.7rem 0 2.9rem">
        <LogoSVG width="20.524rem" height="4.3rem" />
        <Flex p="8.528rem 0 4rem 0" justifyContent="space-between" alignItems="baseline">
          <AuthTitle>Sign Up</AuthTitle>
          <LinkText to={PageRoutes.SignIn} bold tiny>Already have an account</LinkText> 
        </Flex>
        <form onSubmit={handleSubmit(handleAddAccount)}>
          <Box>
            <Box mb="2.9rem">
              <AuthInput
                label={errors.username?.message ?? "Define a username" }
                register={{...register('username', {
                  required: 'Username is required'
                })}}
                data-testid="username-input"
              />
            </Box>
            <Box mb="2.9rem">
              <AuthInput 
                label="Set your password" 
                type="password" 
                register={{...register('password', {
                  required: 'Password is required' 
                })}}
                data-testid="password-input" 
              />
            </Box>
            <AuthInput 
              label="Email (optional)" 
              register={{...register('email')}}
              data-testid="email-input" 
            />
          </Box> 
          <Flex justifyContent="center" mt="4rem">
            <CustomButton type="submit">Sign Up</CustomButton>
          </Flex>
        </form>
      </Box>
    </Box>
  )
}

export default SignUp