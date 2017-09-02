import React from 'react'
import Nav from './components/Navbar/Nav'

class Layout extends React.Component {
  render () {
    return (
      <div className='page-layout'>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
