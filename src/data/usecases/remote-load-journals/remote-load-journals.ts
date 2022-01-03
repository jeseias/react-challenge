import { HttpClient, HttpStatusCode } from "data/protocols/http/http-client";
import { UnexpectedError, FailInLoadError  } from "domain/errors";
import { LoadJournals } from "domain/usecases/load-journals";

export class RemoteLoadJournals implements LoadJournals {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadJournals.Model>,
  ){}

  async load(): Promise<RemoteLoadJournals.Model> {
    console.log('REMOTELOADJOURNALS')
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    console.log('REMOTELOADJOURNALS URL::::', this.url)

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as RemoteLoadJournals.Model
      case HttpStatusCode.badRequest: throw new FailInLoadError('journals')
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadJournals {
  export type Model = LoadJournals.Model
}