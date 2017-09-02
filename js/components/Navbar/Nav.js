import React from 'react'
import NavbarStore from '../../stores/NavbarStore'
import NavItem from './NavItem'

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
          <p>KX</p>
          {navComponents}
          <a href='mailto:jiao_xue@hotmail.com'><i className='mail' /></a>
          <a target='_blank' href='https://www.linkedin.com/in/kyloxue/'><i className='linkedin1' /></a>
          <a target='_blank' href='https://twitter.com/kyloxue'><i className='twitter1' /></a>
        </div>
      </div>
    )
  }
}
