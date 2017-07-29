import React from 'react'
import {Link} from 'react-router'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, title, link} = this.props
    return (
      <div className='projectItem'>
        <Link to={link}><p>{title}</p></Link>
      </div>
    )
  }

}
