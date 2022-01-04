import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteLoadEntries } from "./remote-load-entries";
import * as faker from 'faker'
import { LoadEntries } from "domain/usecases/load-entries";
import { HttpStatusCode } from "data/protocols/http/http-client";
import { mockLoadEntriesModel } from "domain/__mocks__/mock-entries";
import { FailInLoadError } from "domain/errors";

type SutTypes = {
  sut: RemoteLoadEntries
  httpClientSpy: HttpClientSpy<LoadEntries.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadEntries.Model>()
  const sut = new RemoteLoadEntries(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadEntries', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response = { statusCode: HttpStatusCode.ok }
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should returns RemoteLoadEntries.Model if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockLoadEntriesModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const journals = await sut.load()
    expect(journals).toEqual(httpResult)
  })

  it('Should throw FailInLoadError if HttpClient returns 400', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new FailInLoadError('entries'))
  })

  it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
});