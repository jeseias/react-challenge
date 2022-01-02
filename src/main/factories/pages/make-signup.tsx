import { SignUp } from 'presentation/pages'
import React from 'react'
import { makeRemoteAddAccount } from '../usecases/make-remote-add-account'

export const makeSignUp: React.FC = () => {
  return <SignUp  addAccount={makeRemoteAddAccount()} />
}