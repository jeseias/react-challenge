import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { SaveJournal } from "domain/usecases/save-journal";
import { RemoteSaveJournal } from "./remote-save-journal";
import * as faker from 'faker'
import { HttpStatusCode } from "data/protocols/http/http-client";
import { UserDoesNotExistsError } from "domain/errors";

const mockSaveJournalParams = (): RemoteSaveJournal.Params => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private'])
})

const mockSaveJournalModel = (): RemoteSaveJournal.Model => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private']),
  id: faker.datatype.uuid(),
  userId: faker.datatype.uuid(),
  entryIds: faker.random.arrayElements(['1','2','3']),
  createdAt: faker.date.past().toLocaleDateString(),
})

type SutTypes = {
  sut: RemoteSaveJournal
  httpClientSpy: HttpClientSpy<SaveJournal.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<SaveJournal.Model>()
  const sut = new RemoteSaveJournal(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}
describe('RemoteSaveJournal', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    const params = mockSaveJournalParams()
    await sut.save(params)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(params)
  })

  it('Should returns RemoteSaveJournal.Model if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockSaveJournalModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const journal = await sut.save(mockSaveJournalParams())
    expect(journal).toEqual(httpResult)
  })

  it('Should throws UserDoesNotExistsError if HttpClient returns 400', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.save(mockSaveJournalParams())
    await expect(promise).rejects.toThrow(new UserDoesNotExistsError())
  })
});