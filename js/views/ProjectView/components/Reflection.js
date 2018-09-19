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
    return (
      <div className='project-reflections'>
        {this.getReflection(this.props.content)}
      </div>
    )
  }
}
