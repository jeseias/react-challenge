import axios from "axios";
import { HttpClient, HttpResponse, HttpRequest } from "data/protocols/http/http-client";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    await axios.request({
      url: data.url,
      data: data.body,
      headers: data.headers,
      method: data.method
    })
  }
}