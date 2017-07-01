import React from 'react'
import Content from './components/Content'
import Nav from './components/Navbar/Nav'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Content />
      </div>
    )
  }
}

export default Layout
