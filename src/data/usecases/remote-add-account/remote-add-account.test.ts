import { HttpClient } from "data/protocols/http/http-client";
import { HttpClientSpy } from "data/protocols/http/__mocks__/mock-http";
import { RemoteAddAccount } from "./remote-add-account";
import * as faker from 'faker'

const makeFakeAddUser = (): RemoteAddAccount.Param => ({
  email: faker.internet.email(),
  username: faker.name.findName(),
  password: faker.internet.password()
})

type SutTypes = {
  sut: RemoteAddAccount
  httpClientSpy: HttpClient
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
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
  })
});