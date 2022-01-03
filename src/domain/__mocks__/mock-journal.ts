import { Journal } from "domain/models/journal"
import { LoadJournals } from "domain/usecases/load-journals"
import { SaveJournal } from "domain/usecases/save-journal"
import * as faker from 'faker'
import { mockUserModel } from "./mock-account"

export const mockJournal = (): Journal => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private']),
  id: faker.datatype.uuid(),
  userId: faker.datatype.uuid(),
  entryIds: faker.random.arrayElements(['1','2','3']),
  createdAt: faker.date.past().toLocaleDateString(),
})

export const mockSaveJournalParams = (): SaveJournal.Params => ({
  title: faker.datatype.string(),
  userId: faker.datatype.uuid(),
  type: faker.random.arrayElement(['public', 'private'])
})

export const mockSaveJournalModel = (): SaveJournal.Model => ({
  journal: mockJournal(),
  user: mockUserModel()
})

export const mockLoadJournalsModel = (): LoadJournals.Model => ({
  journals: [
    mockJournal(),
    mockJournal(),
  ]
})
