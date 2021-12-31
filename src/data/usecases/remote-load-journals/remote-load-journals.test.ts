import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteLoadJournals } from "./remote-load-journals";
import * as faker from 'faker'
import { LoadJournals } from "domain/usecases/load-journals";
import { mockJournal } from '../../../domain/__mocks__/mock-journal'
import { HttpStatusCode } from "data/protocols/http/http-client";


const mockLoadJournalsModel = (): LoadJournals.Model => ([
  mockJournal(),
  mockJournal(),
])

type SutTypes = {
  sut: RemoteLoadJournals
  httpClientSpy: HttpClientSpy<LoadJournals.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadJournals.Model>()
  const sut = new RemoteLoadJournals(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}
describe('RemoteLoadJournals', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should returns RemoteLoadJournals.Model if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockLoadJournalsModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const journals = await sut.load()
    expect(journals).toEqual(httpResult)
  })

  // it('Should throw UserDoesNotExistsError if HttpClient returns 400', async () => {
  //   const {sut, httpClientSpy} = makeSut()
  //   httpClientSpy.response = {
  //     statusCode: HttpStatusCode.badRequest
  //   }
  //   const promise = sut.save(mockLoadJournalsParams())
  //   await expect(promise).rejects.toThrow(new UserDoesNotExistsError())
  // })

  // it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
  //   const {sut, httpClientSpy} = makeSut()
  //   httpClientSpy.response = {
  //     statusCode: HttpStatusCode.serverError
  //   }
  //   const promise = sut.save(mockLoadJournalsParams())
  //   await expect(promise).rejects.toThrow()
  // })
});