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

// Project link
import Project1 from './views/ProjectView/Project1'
import Project2 from './views/ProjectView/Project2'
import Project3 from './views/ProjectView/Project3'
import Project4 from './views/ProjectView/Project4'

// sass file
import '../sass/main.scss'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ProjectMain} />

      <Route path='ProjectMain' component={ProjectMain} />
      <Route path='arts' component={Arts} />
      <Route path='Photos' component={Photos} />
      <Route path='Contact' component={Contact} />

      <Route path='Project1' component={Project1} />
      <Route path='Project2' component={Project2} />
      <Route path='Project3' component={Project3} />
      <Route path='Project4' component={Project4} />
    </Route>
  </Router>
),
document.getElementById('app'))
