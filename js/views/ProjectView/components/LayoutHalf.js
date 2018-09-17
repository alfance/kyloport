import React from 'react'

export default class LayoutHalf extends React.Component {
  render () {
    const {title, content, imgLeft, imgRight, contentLeft, contentRight} = this.props.content
    return (
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
        <div className='project-layout-half'>

          <div>
            <img src={imgLeft} />
            <ul>
              {contentLeft.map(p1 => {
                return (
                  <li key={p1}>{p1}</li>
                )
              })}
            </ul>
          </div>

          <div>
            <img src={imgRight} />
            <ul>
              {contentRight.map(p2 => {
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
