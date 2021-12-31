import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { SaveJournal } from "domain/usecases/save-journal";
import { RemoteSaveJournal } from "./remote-save-journal";
import * as faker from 'faker'

const mockSaveJournalParams = (): RemoteSaveJournal.Params => ({
  title: faker.datatype.string(),
  type: faker.random.arrayElement(['public', 'private'])
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
});