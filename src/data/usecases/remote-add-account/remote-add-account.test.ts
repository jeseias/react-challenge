import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteAddAccount } from "./remote-add-account";
import * as faker from 'faker'
import { HttpStatusCode } from "data/protocols/http/http-client";
import { UserAlreadyExistsError } from "domain/errors/user-already-exists-error";

const makeFakeAddUser = (): RemoteAddAccount.Param => ({
  email: faker.internet.email(),
  username: faker.name.findName(),
  password: faker.internet.password()
})

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
    const requestSpy = jest.spyOn(httpClientSpy, 'request')
    const user = makeFakeAddUser()
    await sut.add(user)
    expect(requestSpy).toHaveBeenCalledWith({
      url,
      method: 'post',
      body: user
    })
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(user)
  })

  it('Should return 400 if user already exists', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.add(makeFakeAddUser())
    await expect(promise).rejects.toThrow(new UserAlreadyExistsError())
  })
});