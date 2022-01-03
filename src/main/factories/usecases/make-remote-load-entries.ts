import { RemoteLoadEntries } from "data/usecases/remote-load-entries/remote-load-entries";
import { LoadEntries } from "domain/usecases/load-entries";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteLoadEntries = (id: string): LoadEntries => new RemoteLoadEntries(makeApiUrl(`/journals/post/${id}`), makeAxiosHttpClient())