import { useAuth } from 'presentation/modules/hooks'
import { JournalsList } from 'presentation/pages'
import React from 'react'
import { makeRemoteLoadJournals } from '../usecases/make-remote-load-journals'

export const MakeJournalsList: React.FC = () => {
  const { account } = useAuth()
  return <JournalsList loadJournals={makeRemoteLoadJournals(account?.user.id)} />
}