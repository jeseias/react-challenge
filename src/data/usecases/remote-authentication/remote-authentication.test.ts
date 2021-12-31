import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteAuthentication } from "./remote-authentication";
import * as faker from 'faker'
import { Authentication } from "domain/usecases/authentication";

const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

type SutTypes = {
  sut: RemoteAuthentication
  httpClientSpy: HttpClientSpy<Authentication.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<Authentication.Model>()
  const sut = new RemoteAuthentication(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const requestSpy = jest.spyOn(httpClientSpy, 'request')
    const params = mockAuthenticationParams()
    await sut.auth(params)
    expect(requestSpy).toHaveBeenCalledWith({
      url,
      method: 'post',
      body: params
    })
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(params)
  })

  // it('Should return AddAccount.Model if HttpClient returns 200', async () => {
  //   const {sut,httpClientSpy} = makeSut()
  //   const httpResult = mockAddAccountModel()
  //   httpClientSpy.response = {
  //     statusCode: HttpStatusCode.ok,
  //     body: httpResult
  //   }
  //   const account = await sut.add(mockAddAccountParams())
  //   expect(account).toEqual(httpResult)
  // })

  // it('Should throw UserAlreadyExistsError if HttpClient returns 400', async () => {
  //   const {sut, httpClientSpy} = makeSut()
  //   httpClientSpy.response = {
  //     statusCode: HttpStatusCode.badRequest,
  //   }
  //   const promise = sut.add(mockAddAccountParams())
  //   await expect(promise).rejects.toThrow(new UserAlreadyExistsError())
  // })

  // it('Should throw UnexpectedError if HttpClient returns unknown status', async () => {
  //   const {sut, httpClientSpy} = makeSut()
  //   httpClientSpy.response = {
  //     statusCode: HttpStatusCode.unauthorized
  //   }
  //   const promise = sut.add(mockAddAccountParams())
  //   await expect(promise).rejects.toThrow()
  // })
});