import React from 'react'

export default class Reflection extends React.Component {
  render () {
      const {title, reflections} = this.props.content

      const subjectList = reflections.subject.map((each, index) => {
         return (
         <div>
             <b>{each}</b><br />
             {reflections.learn[index]} <p />
         </div>)
      })


    return (
      <div>
        <h3>{title}</h3>
        {subjectList}
      </div>
    )
  }
}
