import { AddAccount } from 'domain/usecases/add-account'
import { LocalStorageAdapter } from 'infra/cache'

export type SignUpProps = {
  addAccount: AddAccount
  storage: LocalStorageAdapter
}

export type SignUpInputs = {
  email?: string
  username: string 
  password: string
}
