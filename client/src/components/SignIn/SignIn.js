import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './SignIn.scss'
import { useDispatch } from 'react-redux'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

const SignIn = () => {
  const dispatch = useDispatch()

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    dispatch(emailSignInStart({ email, password }))
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          id='email'
          handleChange={handleChange}
          label='email'
          value={email}
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          handleChange={handleChange}
          label='password'
          value={password}
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
