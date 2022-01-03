import { makeLocalStorageAdapter } from 'main/cache'
import { SignIn } from 'presentation/pages'
import React from 'react'
import { makeRemoteAuthentication } from '../usecases/make-remote-authentication'

export const MakeSignIn: React.FC = () => {
  return <SignIn  
    authentication={makeRemoteAuthentication()} 
    storage={makeLocalStorageAdapter()} 
  />
}