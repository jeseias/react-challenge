import { RemoteAuthentication } from "data/usecases/remote-authentication/remote-authentication";
import { Authentication } from "domain/usecases/authentication";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteAuthentication = (): Authentication => 
  new RemoteAuthentication(makeApiUrl('/auth/login'), makeAxiosHttpClient())