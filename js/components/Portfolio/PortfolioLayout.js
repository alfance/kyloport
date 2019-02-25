import React from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioStore from '../../stores/PortfolioStore'

class PortfolioLayout extends React.Component {
  render () {
    const portfolioComponents = PortfolioStore.map((each) => {
      return <PortfolioItem key={each.id} {...each} />
    })
    return (
      <div>
        <h4> Projects </h4>
        <div className='projectPanel'>
          {portfolioComponents}
        </div>
      </div>
    )
  }
}

export default PortfolioLayout
