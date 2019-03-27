import React from 'react'
import PortfolioItem from './PortfolioItem'
import PlayStore from '../../stores/PlayStore'
import { Link, Element, animateScroll as scroll } from "react-scroll";

class PlayLayout extends React.Component {
  render () {
    const playComponents = PlayStore.map((each) => {
      return <PortfolioItem key={each.id} {...each} />
    })
    return (
      <div>
        <div className='main-intro-play-container'> <div className='main-intro-play-title'><Link activeClass='active' to='play' smooth={true} offset={-70} duration={300} ><h3>Play</h3></Link></div> <span>Sometimes I get to tinker around with interesting projects that not just stretch my skill set to another realm, but also allow me to work my imagination to the broad extent. </span></div>
        <Element name='play' ><div className='projectPanel'>
          {playComponents}
        </div></Element>
      </div>
    )
  }
}

export default PlayLayout
