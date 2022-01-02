import { RemoteSaveJournal } from "data/usecases/remote-save-journal/remote-save-journal";
import { SaveJournal } from "domain/usecases/save-journal";
import { makeApiUrl, makeAxiosHttpClient } from "main/http";

export const makeRemoteSaveJournal = (): SaveJournal => new RemoteSaveJournal(makeApiUrl('/journal/create'), makeAxiosHttpClient())