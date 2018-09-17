import React from 'react'
import {Link} from 'react-router'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, title, link, pitch, headerImage, category} = this.props

    return (
      <div className='single-proj-container'>
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
