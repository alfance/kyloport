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
        <p>KX</p>
        {navComponents}
        <i className='linkedin1' />
        <i className='mail' />
        <i className='twitter1' />
      </div>
    )
  }
}
