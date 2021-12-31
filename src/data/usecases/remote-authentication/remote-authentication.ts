import { HttpClient, HttpStatusCode } from 'data/protocols/http/http-client';
import { InvalidCredentialsError } from 'domain/errors/invalid-credentials-error';
import { UnexpectedError } from 'domain/errors/unexpected-error';
import { Authentication } from 'domain/usecases/authentication'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as Authentication.Model
      case HttpStatusCode.badRequest: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
  
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}