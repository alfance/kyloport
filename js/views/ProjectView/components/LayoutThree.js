import React from 'react'

export default class LayoutThree extends React.Component {
  render () {
      const {title, content, imgLeft, imgMiddle, imgRight, contentLeft, contentMiddle, contentRight} = this.props.content
    return (
      <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <div className='project-layout-third'>
            <div>
              <img src={imgLeft} />
                    {contentLeft}
            </div>
            <div>
              <img src={imgMiddle} />
                    {contentMiddle}
            </div>
            <div>
              <img src={imgRight} />
                  {contentRight}
            </div>
          </div>
      </div>
    )
  }
}
