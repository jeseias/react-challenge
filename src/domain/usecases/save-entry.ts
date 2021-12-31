import { Entry } from "domain/models/entry"

export interface SaveEntry {
  save(params: SaveEntry.Params): Promise<SaveEntry.Model>
}

export namespace SaveEntry {
  export type Params = {
    title: string;
    content: string;
    journalId?: string;
  }

  export type Model = Entry
}