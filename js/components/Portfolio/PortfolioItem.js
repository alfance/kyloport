import React from 'react'
import {Link} from 'react-router'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {title, link, intro, headerImage, field} = this.props

    return (
      <div className='single-proj-container'>
        <Link to={link}><div className='projectItem'>
          <img src={headerImage} />
          <div className='projectTitle'>
            <h3>{title}</h3>
            <h4>{intro}</h4>
            <p>{field}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }
}
