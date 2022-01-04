import { Entry } from "domain/models/entry";
import { LoadEntries } from "domain/usecases/load-entries";
import { SaveEntry } from "domain/usecases/save-entry";
import * as faker from 'faker'

export const mockEntryModel = (): Entry => ({
  id: faker.datatype.uuid(),
  title: faker.datatype.string(),
  content: faker.random.words(),
  createdAt: faker.date.past().toLocaleDateString(),
})

export const mockSaveEntryParams = (): SaveEntry.Params => ({
  title: faker.datatype.string(),
  content: faker.random.words(),
  journalId: faker.datatype.uuid()
})

export const mockLoadEntriesModel = (): LoadEntries.Model => ({
  entries: [
    mockEntryModel(),
    mockEntryModel(),
  ]
})