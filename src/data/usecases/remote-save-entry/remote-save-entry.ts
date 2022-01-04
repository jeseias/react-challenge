import { HttpClient, HttpStatusCode } from "data/protocols/http";
import { FailInToSave, UnexpectedError } from "domain/errors";
import { SaveEntry } from "domain/usecases";

export class RemoteSaveEntry implements SaveEntry {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteSaveEntry.Model>,
  ){}

  async save(params: RemoteSaveEntry.Params): Promise<RemoteSaveEntry.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body as RemoteSaveEntry.Model
      case HttpStatusCode.badRequest: throw new FailInToSave('entry')
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteSaveEntry {
  export type Params = SaveEntry.Params
  export type Model = SaveEntry.Model
}