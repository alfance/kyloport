import React from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

export default class PortfolioItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {title, link, intro, field, color, logo, className} = this.props
    const portfolioStyle = {
      backgroundColor: color,
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className={classNames('single-proj-container', className)} >
        <Link to={link}><div className='projectItem' style={portfolioStyle}>
          <img className='projectLogo' src={logo} />
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
