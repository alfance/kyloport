import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'
import PlayLayout from '../components/Portfolio/PlayLayout'

class ProjectMain extends React.Component {
  render () {
    return (
      <div className='main-intro'>
        <div className='project-title-layout designer-intro' >
          <div className='main-intro-title'><h1>Hi, I am Kylo Xue</h1>a product designer specializing in building user-centric digital experiences.
          </div>
          <div className='main-intro-images'>
            <img src='../../assets/images/general/step2.svg' />
          </div>
        </div>
        <PortfolioLayout />
        <PlayLayout />
      </div>
    )
  }
}

export default ProjectMain
