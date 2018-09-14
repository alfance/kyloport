import React from 'react'

export default class Problem extends React.Component {
  render () {
      const {title, content, list} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <ul>
          {list.map(list => {
            return (
              <li key={list}>{list}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
