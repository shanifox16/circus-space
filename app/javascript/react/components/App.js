import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardContainer from './dashboard/DashboardContainer'

export const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
