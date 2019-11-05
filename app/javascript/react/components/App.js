import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardContainer from './dashboard/DashboardContainer'
import CourseIndexContainer from './course/CourseIndexContainer'
import CourseShowContainer from './course/CourseShowContainer'
import SummaryForm from './summary/SummaryForm'
import SummaryShowContainer from './summary/SummaryShowContainer'
import VideoIndexContainer from './videos/VideoIndexContainer'
import VideoShowContainer from './videos/VideoShowContainer'
import VideoForm from './videos/VideoForm'
import UserVideoIndexContainer from './videos/UserVideoIndexContainer'
import CreateEventContainer from './event/CreateEventContainer'

export const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/courses" component={CourseIndexContainer} />
          <Route exact path="/courses/:id" component={CourseShowContainer} />
          <Route exact path="/individual_classes/:id/class_summaries/new" component={SummaryForm} />
          <Route exact path="/class_summaries/:id" component={SummaryShowContainer} />
          <Route exact path="/personal_videos" component={VideoIndexContainer} />
          <Route exact path="/personal_videos/new" component={VideoForm} />
          <Route exact path="/personal_videos/:id" component={VideoShowContainer} />
          <Route exact path="/users/:id/personal_videos" component={UserVideoIndexContainer} />
          <Route exact path="/events/new" component={CreateEventContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
