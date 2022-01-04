import { Journal, UserModel } from "domain/models"

export interface SaveJournal {
  save(params: SaveJournal.Params): Promise<SaveJournal.Model>
}

export namespace SaveJournal {
  export type Params = {
    title: string;
    userId: string;
    type: 'private' | 'public';
  }

  export type Model = {
    journal: Journal 
    user: UserModel
  }
}