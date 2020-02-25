import React from 'react'

class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='footer-contact'>
        <h2> todo list</h2>
            <a href='mailto:jiao_xue@hotmail.com'><i className='icon-mail' /></a>
            <a target='_blank' href='https://www.linkedin.com/in/kyloxue/'><i className='icon-linkedin1' /> Mail</a>
            <a target='_blank' href='https://twitter.com/alfancelric'> Linkedin<i className='icon-twitter1' /> Twitter</a>
            <a target='_blank' href='https://www.uplabs.com/alfance_elric'><i className='icon-uplabs2' /></a>
      </div>
    )
  }
}

export default Footer
