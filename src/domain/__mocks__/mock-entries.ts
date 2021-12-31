import { Entry } from "domain/models/entry";
import { LoadEntries } from "domain/usecases/load-entries";
import * as faker from 'faker'

export const mockEntryModel = (): Entry => ({
  id: faker.datatype.uuid(),
  title: faker.datatype.string(),
  content: faker.random.words(),
  createdAt: faker.date.past().toLocaleDateString(),
})

export const mockLoadEntriesModel = (): LoadEntries.Model => ([
  mockEntryModel(),
  mockEntryModel()
])