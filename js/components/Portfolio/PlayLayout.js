import React from 'react'
import PortfolioItem from './PortfolioItem'
import PlayStore from '../../stores/PlayStore'

class PlayLayout extends React.Component {
  render () {
    const playComponents = PlayStore.map((each) => {
      return <PortfolioItem key={each.id} {...each} />
    })
    return (
      <div>
        <h3>Passion Project</h3>
        <div className='projectPanel'>
          {playComponents}
        </div>
      </div>
    )
  }
}

export default PlayLayout
