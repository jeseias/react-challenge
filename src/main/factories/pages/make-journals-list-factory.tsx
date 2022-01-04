import { JournalsList } from 'presentation/pages'
import React from 'react'
import { useParams } from 'react-router-dom'
import { makeRemoteLoadJournals } from '../usecases/make-remote-load-journals'

export const MakeJournalsList: React.FC = () => {
  const { userId } = useParams()
  return <JournalsList loadJournals={makeRemoteLoadJournals(userId)} />
}