import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'
import { AddAccount } from 'domain/usecases/add-account'
import { useForm, SubmitHandler } from  'react-hook-form'

type Props = {
  addAccount: AddAccount
}

type Inputs = {
  username: string
  email: string
  password: string
};

const SignUp: React.FC<Props> = ({ addAccount }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await addAccount.add({
        email: data.email,
        username: data.username,
        password: data.password
      })
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
              <Box mb="2.9rem">
                <AuthInput label="Define a username" register={register('username')} />
              </Box>
              <Box mb="2.9rem">
                <AuthInput label="Email (optional)" register={register('email')} />
              </Box>
              <AuthInput label="Set your password" register={register('password')} />
          </Box> 
          <Flex justifyContent="center" mt="4rem">
            <CustomButton type="submit">Sign In</CustomButton>
          </Flex>
        </form>
      </Box>
    </Box>
  )
}

export default SignUp