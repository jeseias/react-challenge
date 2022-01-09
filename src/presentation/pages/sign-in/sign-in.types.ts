import { Authentication } from 'domain/usecases'
import { LocalStorageAdapter } from 'infra/cache'

export type SignInProps = {
  authentication: Authentication
  storage: LocalStorageAdapter
}

export type SignInInputs = {
  username: string 
  password: string
}