import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'

class ProjectMain extends React.Component {
  render () {
    return (
      <div className='main-intro'>
        <div className='project-title-layout designer-intro' >
          <h1>Hi, I am Kylo Xue </h1>
          <hr className='main-hr' />
          <h4>I'm an experience & interaction designer who loves building digital products. </h4>
          <h4>As a problem solver and storyteller, I believe and embrace the principles of user-centred design and human-computer interaction. Over the past 4 years, I have delivered projects in mobile & web app, IOT, game, and 3D with the focus of delighted user journey.</h4>
          <p>When I am not designing, I enjoy spending time pave my path </p>
          <p />
        </div>
        <PortfolioLayout />
      </div>
    )
  }
}

export default ProjectMain
