import React from 'react'

export default class LayoutImage extends React.Component {
  render () {
      const {title, img, video, label, content} = this.props.content

      if(Array.isArray(content)){
          {content.map(each => {
            <li key={each}>{each}</li>
          })}
      } else {
         <p>{content}</p>
      }

      if(Array.isArray(label)){
          label.map(each => {
                      <li> key={each}>{each}</li>
          })
      } else {
         <span>{label}</span>
      }
    
    return (
      <div>
          <h3>{title}</h3>
          {content}
          <img src={img} />
          {label}
      </div>
    )
  }
}
