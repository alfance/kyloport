import React from 'react'
import NavbarStore from '../../stores/NavbarStore'
import NavItem from './NavItem'
import { Link } from 'react-router'

const logo = '../../../assets/images/kx_logo.svg'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      navitems: NavbarStore.getAll()
    }
  }

  render () {
    const {navitems} = this.state
    const navComponents = navitems.map((each) => {
      return <NavItem key={each.id} {...each} />
    })
    return (
      <div className='nav'>
        <div className='nav-content'>
          <Link to='projectmain'><img className='nav-logo' src={logo} /></Link>
          {navComponents}
          <a href='mailto:jiao_xue@hotmail.com'><i className='icon-mail' /></a>
          <a target='_blank' href='https://www.linkedin.com/in/kyloxue/'><i className='icon-linkedin1' /></a>
          <a target='_blank' href='https://twitter.com/alfancelric'><i className='icon-twitter1' /></a>
        </div>
      </div>
    )
  }
}
