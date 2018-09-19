import React from 'react'
import {Link} from 'react-router'
import Cycnav from '../../views/ProjectView/Cycnav'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {title, link, pitch, headerImage, category} = this.props

    return (
      <div className='single-proj-container' style={{backgroundColor: Cycnav.style.color}}>
        <Link to={link}><div className='projectItem'>
          <img src={headerImage} />
          <div className='projectTitle'>
            <h3>{title}</h3>
            <h4>{pitch}</h4>
            <p>{category}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }
}
