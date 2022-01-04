import { mockSaveJournalModel, mockSaveJournalParams } from "domain/__mocks__/mock-journal";
import { SaveJournal } from "domain/usecases";
import { UserDoesNotExistsError } from "domain/errors";
import { HttpStatusCode } from "data/protocols/http/http-client";
import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteSaveJournal } from "./remote-save-journal";
import * as faker from 'faker'

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
    const { sut, httpClientSpy } = makeSut(url)
    const params = mockSaveJournalParams()
    await sut.save(params)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.created
    }
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(params)
  })

  it('Should returns RemoteSaveJournal.Model if HttpClient returns 201', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockSaveJournalModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.created,
      body: httpResult
    }
    const journal = await sut.save(mockSaveJournalParams())
    expect(journal).toEqual(httpResult)
  })

  it('Should throw UserDoesNotExistsError if HttpClient returns 400', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.save(mockSaveJournalParams())
    await expect(promise).rejects.toThrow(new UserDoesNotExistsError())
  })

  it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.save(mockSaveJournalParams())
    await expect(promise).rejects.toThrow()
  })
});