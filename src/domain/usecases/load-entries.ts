import { Entry } from "domain/models/entry";

export interface LoadEntries {
  load(): Promise<LoadEntries.Model>
}

export namespace LoadEntries {
  export type Model = Entry[]
}