import React from 'react'

export default class ProjectTitle extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.content}</p>
        <ul>
          {this.props.content.list.map(list => {
            return (
              <li key={list}>{list}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
