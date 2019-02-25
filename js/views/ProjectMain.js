import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'

class ProjectMain extends React.Component {
  render () {
    return (
      <div className='main-intro'>
        <div className='project-title-layout designer-intro' >
          <div className='main-intro-title'><div>Moving forward with design</div></div>
          <h4>I'm <b>Kylo Xue</b>, a product designer specializing in building seamless digital experiences. </h4>
        </div>
        <PortfolioLayout />
      </div>
    )
  }
}

export default ProjectMain
