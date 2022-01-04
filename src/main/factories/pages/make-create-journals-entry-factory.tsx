import { CreateJournalsEntry } from 'presentation/pages'
import React from 'react'
import { useParams } from 'react-router-dom'
import { makeRemoteSaveEntry } from '../usecases/make-remote-save-entry'

export const MakeCreateJournalsEntry: React.FC = () => {
  const { entryId }  = useParams()
  return <CreateJournalsEntry saveEntry={makeRemoteSaveEntry(entryId as string)} />
}