import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  SignIn, 
  JournalsList, 
} from 'presentation/pages'
import { PageRoutes } from 'main/constants/page-routes'
import { MakeCreateJournal, MakeSignUp } from 'main/factories/pages'
import { MakeJournalEntries } from 'main/factories/pages/make-journal-entries-factory'
import { MakeCreateJournalsEntry } from 'main/factories/pages/make-create-journals-entry-factory'

const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route index element={<JournalsList />}/>
      <Route path={PageRoutes.SignIn} element={<SignIn />}/>
      <Route path={PageRoutes.SignUp} element={<MakeSignUp />}/>
      <Route path={PageRoutes.JournalsList} element={<JournalsList />} />
      <Route path={PageRoutes.CreateJournal} element={<MakeCreateJournal />}/>
      <Route path={`${PageRoutes.JournalsPost}/:id`} element={<MakeJournalEntries />}/>
      <Route path={`${PageRoutes.JournalsPost}/:id/create`} element={<MakeCreateJournalsEntry />}/>
    </Routes>
  )
}

export default Router