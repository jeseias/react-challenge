import { AccountModel } from "domain/models/account";
import { UserModel } from "domain/models/user";
import * as faker from 'faker'

export const mockUserModel = (): UserModel => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  journalIds: faker.random.arrayElements(['2', '21', '43']),
})

export const mockAccountModel = (): AccountModel => ({
  token: faker.datatype.uuid(),
  user: mockUserModel()
}) 