import React from 'react'
import { SignUp } from '../../../presentation/pages'
import { makeRemoteAddAccount } from '../usecases/make-remote-add-account'

export const MakeSignUp: React.FC = () => {
  return <SignUp addAccount={makeRemoteAddAccount()}/>
}