import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Organizations from './pages/Organizations'
import Employees from './pages/Employees'

export const useRoutes = (isAuthenticated, isAdmin = false) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/orgs" exact>
        <Organizations/>
      </Route>
      <Route path="/employees" exact>
        <Employees/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}