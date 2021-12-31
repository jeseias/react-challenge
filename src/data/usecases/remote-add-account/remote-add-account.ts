import { HttpClient } from "data/protocols/http/http-client";
import { AddAccount } from "domain/usecases/add-account";

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddAccount.Model>
  ){}

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
  export type Param = AddAccount.Params
}
