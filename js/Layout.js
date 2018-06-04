import React from 'react'
import Nav from './components/Navbar/Nav'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='page-container'>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
