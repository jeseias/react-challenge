import { AccountModel } from 'domain/models/account'
import { PageRoutes } from 'main/constants/page-routes'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

export const REACT_CHALLENGE_ACCOUNT = 'react_challenge_account'

type Props = {
  isLoggedIn: boolean
  account: AccountModel
  updateAccount: (account: AccountModel) => void 
}

export const AuthContext = React.createContext<Props>({
  account: null as any,
  isLoggedIn: false,
  updateAccount: () => {}
})

export const AuthProvider: React.FC = (props) => {
  const [isLogged, setIsLogged] = useState(true)
  const [account, setAccount] = useState<AccountModel | null>(null)
  const navigate = useNavigate()

  const getUser = (): AccountModel => {
    const account = JSON.parse(localStorage.getItem(REACT_CHALLENGE_ACCOUNT) as string)
    return account
  }

  const updateAccount = (account: AccountModel): void => {
    setAccount(account)
    localStorage.setItem(REACT_CHALLENGE_ACCOUNT, JSON.stringify(account))
  }

  useEffect(() => {
    const account = getUser()
    setIsLogged(!!account)
    if (!account) {
      return navigate(PageRoutes.SignIn)
    }
    setAccount(account)
  }, [])

  const value = useMemo(() => ({
    isLoggedIn: isLogged,
    account,
    updateAccount 
  } as Props), [isLogged, account])

  return ( 
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}