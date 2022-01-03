import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { LinkText, LogoSVG, AuthTitle, CustomButton, AuthInput } from 'presentation/components'
import { PageRoutes } from 'main/constants/page-routes'
import { AddAccount } from 'domain/usecases/add-account'
import { LocalStorageAdapter } from 'infra/cache'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'presentation/modules/hooks'

type Props = {
  addAccount: AddAccount
  storage: LocalStorageAdapter
}

const SignUp: React.FC<Props> = ({ addAccount }: Props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { updateAccount } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const account = await addAccount.add({
        email: email,
        username: username,
        password: password
      })

      if (account) {
        updateAccount(account)
        navigate(PageRoutes.JournalsList)
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
        <Box>
            <Box mb="2.9rem">
              <AuthInput
                label="Define a username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                data-testid="username-input"
              />
            </Box>
            <Box mb="2.9rem">
              <AuthInput 
                label="Set your password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                data-testid="password-input" 
              />
            </Box>
            <AuthInput 
              label="Email (optional)" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              data-testid="email-input" 
            />
        </Box> 
        <Flex justifyContent="center" mt="4rem">
          <CustomButton onClick={handleSubmit}>Sign In</CustomButton>
        </Flex>
      </Box>
    </Box>
  )
}

export default SignUp