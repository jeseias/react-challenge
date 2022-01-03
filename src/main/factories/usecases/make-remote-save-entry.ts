import { RemoteSaveEntry } from "data/usecases/remote-save-entry/remote-save-entry";
import { SaveEntry } from "domain/usecases/save-entry";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteSaveEntry = (id: string): SaveEntry => 
  new RemoteSaveEntry(makeApiUrl(`/journals/posts/${id}/create`), makeAxiosHttpClient())