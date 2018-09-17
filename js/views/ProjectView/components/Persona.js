import React from 'react'

export default class Persona extends React.Component {
  render () {
    const {title, content, p1Img, p2Img, p1content, p2content} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className='project-layout-half'>

          <div className='persona-div'>
            <img className='persona-img' src={p1Img} />
            <ul>
              {p1content.map(p1 => {
                return (
                  <li key={p1}>{p1}</li>
                )
              })}
            </ul>
          </div>

          <div className='persona-div'>
            <img className='persona-img' src={p2Img} />
            <ul>
              {p2content.map(p2 => {
                return (
                  <li key={p2}>{p2}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
