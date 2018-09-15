import React from 'react'

export default class LayoutText extends React.Component {
  render () {
      const {title, content} = this.props.content
      if(content.constructor === Array){
          content.map(each => {
                     <p key={each}> {each}</p>
          })
      } else {
          <p>{content}</p>
      }
    return (
      <div>
          <h3>{title}</h3>
          {content}
      </div>
    )
  }
}
