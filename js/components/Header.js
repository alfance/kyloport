import React from 'react'
import TodoTextInput from './inputfield'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  onSave (text) {
    console.log(text)
  }

  render () {
    const pHolder = 'todos'
    return (
      <div>
        <h2> todo list</h2>
        <TodoTextInput onSave={this.onSave.bind(this)} placeholder={pHolder} />
      </div>
    )
  }
}

export default Header
