import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'
import { Authentication } from 'domain/usecases'
import { LocalStorageAdapter } from 'infra/cache'
import { REACT_CHALLENGE_ACCOUNT } from 'presentation/modules/contexts/auth-context'
import { useNavigate } from 'react-router-dom'

type Props = {
  authentication: Authentication
  storage: LocalStorageAdapter
}

const SignIn = ({ authentication, storage }: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleAuthentication = async () => {
    try {
      const account = await authentication.auth({
        username, 
        password
      })
      if (account.token) {
        storage.set(REACT_CHALLENGE_ACCOUNT, account)
        navigate(`${PageRoutes.JournalsList}/${account.user.id}`)
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
        <Box>
          <Box mb="2.9rem">
            <AuthInput 
              label="Your username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              data-testid="username-input"
            />
          </Box>
          <AuthInput
           label="Your password" 
           type="password" 
           value={password} 
           onChange={e => setPassword(e.target.value)} 
           data-testid="password-input"
          />
        </Box>
        <Flex justifyContent="flex-end" mt="1.2rem">
          <LinkText to={PageRoutes.ForgotPassword} tiny>Forgot Password?</LinkText> 
        </Flex>
        <Flex justifyContent="center" mt="4rem">
          <CustomButton onClick={handleAuthentication}>Sign In</CustomButton>
        </Flex>
      </Box>
    </Box>
  )
}

export default SignIn