import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'

class ProjectMain extends React.Component {
  render () {
    return (
      <div>
        <div className='main-intro'>
            <div className='project-title-layout designer-intro' >
          <h1> Hello, Kylo Xue here. </h1>
          <p>I'm a product designer with a background in digital media. <br />
          UX / UI  <br />
      I am also in the progress to progressively expand my T zone into Interaction design and front-end deveopment.
            </p>
          </div>
        </div>
        <PortfolioLayout />
      </div>
    )
  }
}

export default ProjectMain
