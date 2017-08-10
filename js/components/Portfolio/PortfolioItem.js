import React from 'react'
import {Link} from 'react-router'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, title, link} = this.props
    return (
      <div>
        <Link to={link}><div className='projectItem'>
          <p>{title}</p>
        </div>
        </Link>
      </div>
    )
  }

}
