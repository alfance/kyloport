import React from 'react'
import PortfolioLayout from '../components/Portfolio/PortfolioLayout'

class ProjectMain extends React.Component {
  render () {
    return (
      <div className='main-content'>
        <div className='main-intro'>
          <h1> Hello, Kylo Xue here. </h1>
          <p>Nulla pharetra augue magna, et egestas nulla pellentesque tempor. Duis mattis pulvinar ultrices. Proin sit amet ultricies neque, iaculis iaculis lorem.</p>
        </div>
        <PortfolioLayout />
      </div>
    )
  }
}

export default ProjectMain
