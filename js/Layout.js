import React from 'react'
import Nav from './components/Navbar/Nav'
import {Helmet} from 'react-helmet'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>Kylo Xue Portfolio</title>
        </Helmet>
        <Nav />
        <div className='page-container'>{this.props.children}</div>
        <div className='gradient-bg' />
      </div>
    )
  }
}

export default Layout
