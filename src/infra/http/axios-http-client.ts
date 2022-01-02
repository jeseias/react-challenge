import axios, { AxiosResponse } from "axios";
import { HttpClient, HttpResponse, HttpRequest } from "data/protocols/http/http-client";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        data: data.body,
        headers: data.headers,
        method: data.method
      })
    } catch (error) {
      axiosResponse = (error as any).response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}