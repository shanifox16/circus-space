import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardContainer from './dashboard/DashboardContainer'
import CourseShowContainer from './course/CourseShowContainer'
import SummaryForm from './summary/SummaryForm'
import SummaryShowContainer from './summary/SummaryShowContainer'

export const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/courses/:id" component={CourseShowContainer} />
          <Route exact path="/individual_classes/:id/class_summaries/new" component={SummaryForm} />
          <Route exact path="/class_summaries/:id" component={SummaryShowContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
