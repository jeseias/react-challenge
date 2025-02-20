import { mockAddAccountModel, mockAddAccountParams } from "domain/__mocks__/mock-add-account";
import { UserAlreadyExistsError } from "domain/errors"; 
import { HttpClientSpy } from 'data/protocols/http/__mocks__/mock-http'
import { HttpStatusCode } from "data/protocols/http";
import { RemoteAddAccount } from './remote-add-account'
import * as faker from 'faker'

type SutTypes = {
  sut: RemoteAddAccount
  httpClientSpy: HttpClientSpy<RemoteAddAccount.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteAddAccount.Model>()
  const sut = new RemoteAddAccount(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteAddAccount', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const user = mockAddAccountParams()
    await sut.add(user) 
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(user)
  })

  it('Should return AddAccount.Model if HttpClient returns 201', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockAddAccountModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.created,
      body: httpResult
    }
    const account = await sut.add(mockAddAccountParams())
    expect(account).toEqual(httpResult)
  })

  it('Should throw UserAlreadyExistsError if HttpClient returns 400', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UserAlreadyExistsError())
  })

  it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow()
  })
});