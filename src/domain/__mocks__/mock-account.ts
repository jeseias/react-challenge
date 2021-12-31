import { AccountModel } from "domain/models/account";
import * as faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  token: faker.datatype.uuid(),
  user: {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    journalIds: faker.random.arrayElements(['2', '21', '43']),
  }
}) 