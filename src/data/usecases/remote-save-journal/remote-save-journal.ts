import { HttpClient, HttpStatusCode } from "data/protocols/http/http-client";
import { UserDoesNotExistsError } from "domain/errors";
import { SaveJournal } from "domain/usecases/save-journal";

export class RemoteSaveJournal implements SaveJournal {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteSaveJournal.Model>,
  ){}

  async save(params: RemoteSaveJournal.Params): Promise<RemoteSaveJournal.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as RemoteSaveJournal.Model
      case HttpStatusCode.badRequest: throw new UserDoesNotExistsError()
    }
  }
}

export namespace RemoteSaveJournal {
  export type Params = SaveJournal.Params
  export type Model = SaveJournal.Model
}