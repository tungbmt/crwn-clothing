import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import { auth } from '../../firebase/firebase'
import './SignIn.scss'
import { connect } from 'react-redux'
import { googleSignInStart } from '../../redux/user/user.actions'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props

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

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
})

export default connect(null, mapDispatchToProps)(SignIn)
