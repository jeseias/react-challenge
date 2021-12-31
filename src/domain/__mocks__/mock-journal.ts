import { SaveJournal } from "domain/usecases/save-journal"
import * as faker from 'faker'

export const mockSaveJournalParams = (): SaveJournal.Params => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private'])
})

export const mockSaveJournalModel = (): SaveJournal.Model => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private']),
  id: faker.datatype.uuid(),
  userId: faker.datatype.uuid(),
  entryIds: faker.random.arrayElements(['1','2','3']),
  createdAt: faker.date.past().toLocaleDateString(),
})
