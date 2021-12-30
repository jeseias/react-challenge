import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import {SignIn, SignUp} from 'presentation/pages'
import { PageRoutes } from 'main/constants/page-routes'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PageRoutes.SignIn} element={<SignIn />}/>
      <Route path={PageRoutes.SignUp} element={<SignUp />}/>
    </Routes>
  )
}

export default Router