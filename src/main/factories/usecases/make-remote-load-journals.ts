import { RemoteLoadJournals } from "data/usecases/remote-load-journals/remote-load-journals";
import { LoadJournals } from "domain/usecases/load-journals";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteLoadJournals = (id?: string): LoadJournals => 
  new RemoteLoadJournals(makeApiUrl(`/journals/${id}`), makeAxiosHttpClient())