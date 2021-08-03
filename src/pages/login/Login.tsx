import React, { useState } from 'react'
import './Login.scss'

interface SignUpInfo {
  signUpEmail: string,
  firstName: string,
  lastName: string,
  signUpPassword: string,
}

interface LoginInfo {
  loginEmail: string,
  loginPassword: string,
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    loginEmail: '',
    loginPassword: '',
    })
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    signUpEmail: '',
    firstName: '',
    lastName: '',
    signUpPassword: '',
    })

  const handleLoginInput = (e: any) => {
    const { name, value } = e.target
    setLoginInfo((prevState: LoginInfo) => ({ ...prevState, [name]: value }))
  }

  const handleSignUpInput = (e: any) => {
    const { name, value } = e.target
    setSignUpInfo((prevState: SignUpInfo) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='login-options'>
      <div className='sign-in'>
        <label>CREATE AN ACCOUNT</label>
        <form action="">
          <input
            name='signUpEmail'
            value={signUpInfo.signUpEmail}
            type="text"
            onChange={handleSignUpInput}
          />
          <input
            name='firstName'
            value={signUpInfo.firstName}
            type="text"
            onChange={handleSignUpInput}
          />
          <input
            name='lastName'
            value={signUpInfo.lastName}
            type="text"
            onChange={handleSignUpInput}
          />
          <input
            name='signUpPassword'
            value={signUpInfo.signUpPassword}
            type="password"
            onChange={handleSignUpInput}
          />
          <button>SIGN IN</button>
        </form>
      </div>
      <div className='sign-up'>
        <label>ALREADY HAVE AN ACCOUNT</label>
        <form action="">
          <input
              name='loginEmail'
              value={loginInfo.loginEmail}
              type="text"
              onChange={handleLoginInput}
            />
            <input
              name='loginPassword'
              value={loginInfo.loginPassword}
              type="password"
              onChange={handleLoginInput}
            />
          <button>SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
