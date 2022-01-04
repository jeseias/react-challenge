import { Entry } from "domain/models";

export interface LoadEntries {
  load(): Promise<LoadEntries.Model>
}

export namespace LoadEntries {
  export type Model = {entries: Entry[]}
}