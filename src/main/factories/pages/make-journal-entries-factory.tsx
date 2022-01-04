import { JournalEntries } from 'presentation/pages'
import React from 'react'
import { useParams } from 'react-router-dom'
import { makeRemoteLoadEntries } from '../usecases/make-remote-load-entries'

export const MakeJournalEntries: React.FC = () => {
  const { entryId }  = useParams()
  return <JournalEntries loadEntries={makeRemoteLoadEntries(entryId as string)} />
}