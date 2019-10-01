import React from 'react'

export default class Reflection extends React.Component {
  getReflection (array) {
    return array.map((each, index) => {
      return (
        <div key={each.subject}>
          <p><b>{each.subject}</b><br />
            {each.learn}</p>
        </div>)
    })
  }
  render () {
    const {title} = this.props.content
    return (
      <div className='project-reflections'>
        <h3>Reflections</h3>
        {this.getReflection(this.props.content)}
      </div>
    )
  }
}
