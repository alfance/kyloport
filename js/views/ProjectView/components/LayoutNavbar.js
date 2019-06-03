import React from 'react'
import LayoutHelper from './LayoutHelper'
import classnames from 'classnames'

export default class LayoutNavbar extends React.Component {
  constructor () {
    super()
    this.state = {
      verticalPosition: 'top'
    }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll () {
    const fadeCutoff = 400
    const scrolly = window.scrollY
    const {verticalPosition} = this.state

    const position = scrolly < fadeCutoff ? 'top' : 'bottom'
    if (position === verticalPosition) return
    this.setState({verticalPosition: position})
  }

  getNavClass () {
    const {verticalPosition} = this.state
    const isGrey = verticalPosition === 'top'
    return classnames('project-navbar', {'nav-show': isGrey})
  }

  render () {
    const {color} = this.props.style
    const divStyle = {
      color: color
    }
    const className = this.getNavClass()
    return (
      <div className={className} style={divStyle}>
        {LayoutHelper.linkElement('Define')}
        {LayoutHelper.linkElement('Research')}
        {LayoutHelper.linkElement('Solution')}
        {LayoutHelper.linkElement('Design')}
        {LayoutHelper.linkElement('Result')}
      </div>)
  }
}
