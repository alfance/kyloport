import React from 'react'

export default class LayoutImage extends React.Component {
  render () {
      const {title, img, video, label, content} = this.props.content

      let listContent = {}
      let listLabel = {}
      console.log("find out the label:::::", label)
      if(content.constructor === Array){
        listContent = content.map(list => {
            return (
              <li key={list}>{list}</li>
            )
          })
      } else {
          listContent = <p>{content}</p>
      }

      // if(label.constructor === Array){
      //   listLabel = label.map(each => {
      //       return (
      //         <li key={each}>{each}</li>
      //       )
      //     })
      // } else if (label.constructor !== Array) {
      //     listLabel = <p>{label}</p>
      // } else {
      //     listLabel = <p>fsdfsdfsfe</p>
      // }

    return (
      <div>
          <h3>{title}</h3>
          {label}
          <img src={img} />
          {label}
      </div>
    )
  }
}
