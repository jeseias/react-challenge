import { HttpClient, HttpStatusCode } from "data/protocols/http";
import { FailInLoadError, UnexpectedError  } from "domain/errors";
import { LoadEntries } from "domain/usecases";

export class RemoteLoadEntries implements LoadEntries {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadEntries.Model>,
  ){}

  async load(): Promise<RemoteLoadEntries.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as RemoteLoadEntries.Model
      case HttpStatusCode.badRequest: throw new FailInLoadError('entries')
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadEntries {
  export type Model = LoadEntries.Model
}