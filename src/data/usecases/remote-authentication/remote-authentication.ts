import { HttpClient } from 'data/protocols/http/http-client';
import { Authentication } from 'domain/usecases/authentication'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
  }
  
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}