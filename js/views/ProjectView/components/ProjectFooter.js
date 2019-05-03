import React from 'react'

export default class ProjectFooter extends React.Component {
  render () {
    const {field, logo, bgImg} = this.props.content
    const {color, titleBgP} = this.props.style
    const footerStyle = {
      textAlign: 'center',
      borderColor:color
    }
    const iconStyle = {
        color:color
    }
    return (
      <div style={footerStyle} className='project-footer'>
      <hr style={footerStyle} />
          <p>Thanks for reading. </p>
              <a href='mailto:jiao_xue@hotmail.com'><i style={iconStyle} className='icon-mail' /></a>
              <a target='_blank' href='https://www.linkedin.com/in/kyloxue/'><i style={iconStyle} className='icon-linkedin1' /></a>
              <a target='_blank' href='https://twitter.com/alfancelric'><i style={iconStyle} className='icon-twitter1' /></a>
              <a target='_blank' href='https://www.uplabs.com/alfance_elric'><i style={iconStyle} className='icon-uplabs2' /></a>
      </div>
    )
  }
}
