import { makeLocalStorageAdapter } from 'main/cache'
import { SignUp } from 'presentation/pages'
import React from 'react'
import { makeRemoteAddAccount } from '../usecases'

export const MakeSignUp: React.FC = () => {
  return <SignUp  addAccount={makeRemoteAddAccount()} storage={makeLocalStorageAdapter()} />
}