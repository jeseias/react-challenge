import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
} from 'presentation/pages'
import { PageRoutes } from 'main/constants/page-routes'
import { 
  MakeCreateJournal, 
  MakeCreateJournalsEntry,
  MakeJournalEntries, 
  MakeJournalsList, 
  MakeSignUp,
  MakeSignIn 
} from 'main/factories/pages'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MakeJournalsList />}/>
      <Route path={PageRoutes.SignIn} element={<MakeSignIn />}/>
      <Route path={PageRoutes.SignUp} element={<MakeSignUp />}/>
      <Route path={`${PageRoutes.JournalsList}/:id`} element={<MakeJournalsList />} />
      <Route path={`${PageRoutes.Journals}/:id/create`} element={<MakeCreateJournal />}/>
      <Route path={`${PageRoutes.Journals}/:id/entries/:entryId`} element={<MakeJournalEntries />}/>
      <Route path={`journals/:id/entries/:entryId/create`} element={<MakeCreateJournalsEntry />}/>
    </Routes>
  )
}

export default Router