import { CreateJournal } from 'presentation/pages'
import React from 'react'
import { makeRemoteSaveJournal } from '../usecases/make-remote-save-journal'

export const MakeCreateJournal: React.FC = () => {
  return <CreateJournal  saveJournal={makeRemoteSaveJournal()} />
}