import ReactDOM from 'react-dom'
import React from 'react'

// the react router with all the routes
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// import all the pages that has routes

// the layout. not a real page. just layout
import Layout from './Layout'

// main page
import ProjectMain from './views/ProjectMain'
import Contact from './views/Contact'
import Play from './views/Play'
import About from './views/About'

// Project link
import Briovr from './views/ProjectView/Briovr'
import Cycnav from './views/ProjectView/Cycnav'
import Fairtrade from './views/ProjectView/Fairtrade'
import Foguang from './views/ProjectView/Foguang'

import CityBeats from './views/ProjectView/CityBeats'
// sass file
import '../sass/main.scss'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ProjectMain} />

      <Route path='ProjectMain' component={ProjectMain} />
      <Route path='About' component={About} />
      <Route path='Play' component={Play} />
      <Route path='Contact' component={Contact} />

      <Route path='briovr' component={Briovr} />
      <Route path='cycnav' component={Cycnav} />
      <Route path='fairtrade' component={Fairtrade} />
      <Route path='foguang' component={Foguang} />

      <Route path='citybeats' component={CityBeats} />
    </Route>
  </Router>
),
document.getElementById('app'))
