import { Journal } from "domain/models";

export interface LoadJournals {
  load(): Promise<LoadJournals.Model>
}

export namespace LoadJournals {
  export type Model = { journals: Journal[] }
}