import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import SignIn from 'presentation/pages/sign-in/sign-in'
import { PageRoutes } from 'main/constants/page-routes'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PageRoutes.SignIn} element={<SignIn />}/>
    </Routes>
  )
}

export default Router