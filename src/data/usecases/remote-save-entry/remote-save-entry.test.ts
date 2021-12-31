import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { SaveEntry } from "domain/usecases/save-entry";
import { RemoteSaveEntry } from "./remote-save-entry";
import * as faker from 'faker'
import { mockEntryModel, mockSaveEntryParams } from "domain/__mocks__/mock-entries";
import { HttpStatusCode } from "data/protocols/http/http-client";
import { FailInToSave } from "domain/errors";

type SutTypes = {
  sut: RemoteSaveEntry
  httpClientSpy: HttpClientSpy<SaveEntry.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<SaveEntry.Model>()
  const sut = new RemoteSaveEntry(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}
describe('RemoteSaveEntry', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    const params = mockSaveEntryParams()
    await sut.save(params)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(params)
  })

  it('Should returns RemoteSaveEntry.Model if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockEntryModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const journal = await sut.save(mockSaveEntryParams())
    expect(journal).toEqual(httpResult)
  })

  it('Should throw FailInToSave if HttpClient returns 400', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.save(mockSaveEntryParams())
    await expect(promise).rejects.toThrow(new FailInToSave('entry'))
  })

  it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.save(mockSaveEntryParams())
    await expect(promise).rejects.toThrow()
  })
});