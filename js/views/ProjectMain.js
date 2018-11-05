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
          <p>As a problem solver and storyteller, I embrace and practice the principles of user-centred design and human-computer interaction. I have delivered projects in mobile & web app, IOT, game, and 3D app with the focus on seamless & delighted user journey.</p>
          <p>When I am not designing, I enjoy spending time polish my skills in <i className='icon-image' /> painting, <i className='icon-present' /> photography, <i className='icon-desktop' /> front-end programming, and building <i className='icon-gear2' /> arduino toys. </p>
      </div>
        <PortfolioLayout />
      </div>
    )
  }
}

export default ProjectMain
