import { HttpClient, HttpStatusCode } from "data/protocols/http/http-client";
import { UnexpectedError } from "domain/errors/unexpected-error";
import { UserAlreadyExistsError } from "domain/errors/user-already-exists-error";
import { AddAccount } from "domain/usecases/add-account";

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddAccount.Model>
  ){}

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as AddAccount.Model
      case HttpStatusCode.badRequest: throw new UserAlreadyExistsError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
  export type Param = AddAccount.Params
}
