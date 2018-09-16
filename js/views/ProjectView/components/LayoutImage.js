import React from 'react'

export default class LayoutImage extends React.Component {
  render () {
      const {title, img, video, label, content} = this.props.content

      let listContent = {}
      let listLabel = {}

      if(content.constructor === Array){
        listContent = content.map(list => {
            return (
              <li key={list}>{list}</li>
            )
          })
      } else {
          listContent = <p>{content}</p>
      }

      // checkout the label, some of the label is undefine so render a null obj.
      if (typeof label === 'undefined') {
          listLabel = null
      }else if (label.constructor === Array){
        listLabel = label.map(each => {
            return (
              <li key={each}>{each}</li>
            )
          })
      } else {
          listLabel = <p>{label}</p>
      }

    return (
      <div>
          <h3>{title}</h3>
          {listContent}
          <img src={img} />
          {listLabel}
      </div>
    )
  }
}
