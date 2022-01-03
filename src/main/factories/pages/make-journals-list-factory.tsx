import { JournalsList } from 'presentation/pages'
import React from 'react'
import { makeRemoteLoadJournals } from '../usecases/make-remote-load-journals'

export const MakeJournalsList: React.FC = () => {
  return <JournalsList loadJournals={makeRemoteLoadJournals()} />
}