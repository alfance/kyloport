import React from 'react'

export default class Reflection extends React.Component {
  render () {
      const {title, reflections} = this.props.content
      console.log('reflections:::', this.props.content.reflections[0].subject)
    return (
      <div>
        <h3>{title}</h3>
          {reflections.map(each => {
              <p>each.subject</p>
          })}
      </div>
    )
  }
}
