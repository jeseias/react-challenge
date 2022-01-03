import { Authentication } from "domain/usecases/authentication"
import { mockAccountModel } from "./mock-account"
import * as faker from 'faker'

export const mockAuthenticationParams = (): Authentication.Params => ({
  username: faker.internet.userName(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()