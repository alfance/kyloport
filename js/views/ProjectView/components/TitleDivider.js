import React from 'react'
export default class TitleDivider extends React.Component {
  render () {
    const {title} = this.props.content
    const {color, textonColor} = this.props.style

    const divStyle = {
      color: color
    }
    return (
        <div className='project-component-title' >
            <h2 style={divStyle}> {title}</h2>
            <div className='project-title-hr' style={divStyle} />
      </div>
    )
  }
}
