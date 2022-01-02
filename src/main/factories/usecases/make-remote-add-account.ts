import { RemoteAddAccount } from "data/usecases/remote-add-account/remote-add-account";
import { AddAccount } from "domain/usecases/add-account";
import { AxiosHttpClient } from "infra/http/axios-http-client";
import { makeApiUrl } from "../http/make-api-url";

export const makeRemoteAddAccount = (): AddAccount => 
  new RemoteAddAccount(makeApiUrl('/auth/signup'), new AxiosHttpClient())