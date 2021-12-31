import { RemoteAddAccount } from 'data/usecases/remote-add-account/remote-add-account'
import { AccountModel } from 'domain/models/account'
import * as faker from 'faker'
import { mockAccountModel } from './mock-account'

export const mockAddAccountParams = (): RemoteAddAccount.Param => ({
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password()
})

export const mockAddAccountModel = (): AccountModel => mockAccountModel()