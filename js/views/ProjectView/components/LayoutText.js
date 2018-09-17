import React from 'react'

export default class LayoutText extends React.Component {
  render () {
      const {title, content, className} = this.props.content
      let listContent = {}

      if(content.constructor === Array){
        listContent = content.map(list => {
            return (
              <li className={className} key={list}>{list}</li>
            )
          })
      } else {
          listContent = <p>{content}</p>
      }

    return (
      <div>
          <h3>{title}</h3>
          {listContent}
      </div>
    )
  }
}
