import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardContainer from './dashboard/DashboardContainer'
import CourseShowContainer from './course/CourseShowContainer'

export const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/courses/:id" component={CourseShowContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
