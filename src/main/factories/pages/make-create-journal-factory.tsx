import { CreateJournal } from 'presentation/pages'
import React from 'react'
import { makeRemoteSaveJournal } from '../usecases'

export const MakeCreateJournal: React.FC = () => {
  return <CreateJournal 
    saveJournal={makeRemoteSaveJournal()} 
  />
}