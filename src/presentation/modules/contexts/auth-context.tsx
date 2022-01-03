import { AccountModel } from 'domain/models/account'
import { PageRoutes } from 'main/constants/page-routes'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

export const REACT_CHALLENGE_ACCOUNT = 'react_challenge_account'

type Props = {
  isLoggedIn: boolean
  account: AccountModel
}

export const AuthContext = React.createContext<Props>({
  account: null as any,
  isLoggedIn: false
})

export const AuthProvider: React.FC = (props) => {
  const [isLogged, setIsLogged] = useState(true)
  const navigate = useNavigate()

  function getUser (): AccountModel {
    const account = JSON.parse(localStorage.getItem(`${REACT_CHALLENGE_ACCOUNT}account`) as string)
    return account
  }

  useEffect(() => {
    const account = getUser()
    setIsLogged(!!account)
    if (!account) {
      navigate(PageRoutes.SignIn)
    }
  }, [])

  const value = useMemo(() => ({
    isLoggedIn: isLogged,
  } as Props), [isLogged])

  return ( 
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}