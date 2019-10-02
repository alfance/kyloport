import React from 'react';
import { validateAll } from ‘indicative’;

class SignUp extends React.component {
  state = {
    password_confirmation:'',
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div><input type='password' placeholder='password(confirm)' name='password_confirmation' onChange={this.handleInputChange} /></div>
      </form>
      <button type='submit'>Submit</button>
      </div>
    )
  }

  handleInputChange=(event)=>{
    this.setState({
      [event.target.anme]:event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);

    const data = this.state;
    const rules = {
      password:'influencerMarketing'
    }
    }

    validateAll(data, rules)
    .then(()=>{
      console.log('success')
    })
    .catch(errors =>{
      console.log(errors);
    })

  }



export default SignUp;
