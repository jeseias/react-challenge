import { Journal } from "domain/models/journal"

export interface SaveJournal {
  save(params: SaveJournal.Params): Promise<SaveJournal.Model>
}

export namespace SaveJournal {
  export type Params = {
    title: string;
    type: 'private' | 'public';
  }

  export type Model = Journal
}