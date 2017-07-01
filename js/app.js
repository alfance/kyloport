import ReactDOM from 'react-dom'
import React from 'react'

// the react router with all the routes
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import all the pages that has routes

// the layout. not a real page. just layout
import Layout from './Layout'

// main page
import ProjectMain from './views/ProjectMain'

// photos and arts
import Arts from './views/Arts'

// sass file
import '../sass/main.scss'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ProjectMain} />
      <Route path='arts' component={Arts} />
    </Route>
  </Router>
),
document.getElementById('app'))
