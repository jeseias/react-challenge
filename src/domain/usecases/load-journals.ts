import { Journal } from "domain/models/journal";

export interface LoadJournals {
  load(): Promise<LoadJournals.Model>
}

export namespace LoadJournals {
  export type Model = Journal[]
}