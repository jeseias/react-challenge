import { RemoteAddAccount } from "data/usecases/remote-add-account/remote-add-account";
import { AddAccount } from "domain/usecases/add-account";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteAddAccount = (): AddAccount => new RemoteAddAccount(makeApiUrl('/auth/signup'), makeAxiosHttpClient())