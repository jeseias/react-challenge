import { AccountModel } from 'domain/models/account'
import { PageRoutes } from 'main/constants/page-routes'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate  } from 'react-router-dom'

export const REACT_CHALLENGE_ACCOUNT = 'react_challenge_account'

type Props = {
  account: AccountModel
}

export const AuthContext = React.createContext<Props>({
  account: null as any,
})

export const AuthProvider: React.FC = (props) => {
  const [account, setAccount] = useState<AccountModel | null>(null)
  const navigate = useNavigate()

  const getUser = (): AccountModel => {
    const account = JSON.parse(localStorage.getItem(REACT_CHALLENGE_ACCOUNT) as string)
    return account
  }

  useEffect(() => {
    const account = getUser()
    if (!account || !account.user.username) {
      return navigate(PageRoutes.SignIn)
    }
    setAccount(account)
  }, [])

  const value = useMemo(() => ({
    account
  } as Props), [account])

  return ( 
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}