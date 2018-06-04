import React from 'react'
import {Link} from 'react-router'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, title, link, pitch, headerImage} = this.props

    return (
      <div>
        <Link to={link}><div className='projectItem'>
          <img src={headerImage} />
          <div className='projectTitle'>
            <h3>{title}</h3>
            <p>{pitch}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }

}
