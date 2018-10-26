import ReactDOM from 'react-dom'
import React from 'react'

// the react router with all the routes
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import all the pages that has routes

// the layout. not a real page. just layout
import Layout from './Layout'

// main page
import ProjectMain from './views/ProjectMain'
import Arts from './views/Arts'
import Photos from './views/Photos'
import Contact from './views/Contact'
import Resume from './views/Resume'

// Project link
import Briovr from './views/ProjectView/Briovr'
import Cycnav from './views/ProjectView/Cycnav'
import Fairtrade from './views/ProjectView/Fairtrade'
import Project4 from './views/ProjectView/Project4'

// sass file
import '../sass/main.scss'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ProjectMain} />

      <Route path='ProjectMain' component={ProjectMain} />
      <Route path='arts' component={Arts} />
      <Route path='Photos' component={Photos} />
      <Route path='Resume' component={Resume} />
      <Route path='Contact' component={Contact} />

      <Route path='briovr' component={Briovr} />
      <Route path='cycnav' component={Cycnav} />
      <Route path='fairtrade' component={Fairtrade} />
      <Route path='Project4' component={Project4} />
    </Route>
  </Router>
),
document.getElementById('app'))
