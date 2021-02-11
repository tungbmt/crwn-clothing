import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './SignIn.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            handleChange={this.handleChange}
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            handleChange={this.handleChange}
            label='password'
            value={this.state.password}
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
