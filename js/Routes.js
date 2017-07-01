import React from 'react'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import all the pages that has routes

// general layout
import Layout from './Layout'

// main projects
import ProjectMain from './views/ProjectMain'

// photos and drawings
import Arts from './views/Arts'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={ProjectMain} />
            <Route path='arts' component={Arts} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App
