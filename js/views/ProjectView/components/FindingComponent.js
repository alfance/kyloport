import React from 'react'

export default class FindingComponent extends React.Component {
  render () {
      const {subtitle, content} = this.props.content
    return (
      <div className='finding-div'><b>{subtitle} </b> {content}</div>
    )
  }
}
