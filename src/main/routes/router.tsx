import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  SignIn, 
  JournalsList, 
  CreateJournal, 
  JournalPosts, 
  CreateJournalsPost 
} from 'presentation/pages'
import { PageRoutes } from 'main/constants/page-routes'
import { MakeSignUp } from 'main/factories/pages'

const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route index element={<JournalsList />}/>
      <Route path={PageRoutes.SignIn} element={<SignIn />}/>
      <Route path={PageRoutes.SignUp} element={<MakeSignUp />}/>
      <Route path={PageRoutes.JournalsList} element={<JournalsList />} />
      <Route path={PageRoutes.CreateJournal} element={<CreateJournal />}/>
      <Route path={`${PageRoutes.JournalsPost}/:id`} element={<JournalPosts />}/>
      <Route path={`${PageRoutes.JournalsPost}/:id/create`} element={<CreateJournalsPost />}/>
    </Routes>
  )
}

export default Router