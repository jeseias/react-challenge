import { RemoteLoadJournals } from "data/usecases/remote-load-journals/remote-load-journals";
import { LoadJournals } from "domain/usecases/load-journals";
import { PageRoutes } from "main/constants/page-routes";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteLoadJournals = (): LoadJournals => 
  new RemoteLoadJournals(makeApiUrl(PageRoutes.JournalsList), makeAxiosHttpClient())