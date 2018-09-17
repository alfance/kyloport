import React from 'react'

export default class FindingComponent extends React.Component {
  render () {
      const {subtitle, content} = this.props.content
      const {color} =this.props.style

      const divStyle = {
      color: 'white',
      backgroundColor: color
};
    return (
      <div className='finding-div' style={divStyle}><b>{subtitle} </b> {content}</div>
    )
  }
}
