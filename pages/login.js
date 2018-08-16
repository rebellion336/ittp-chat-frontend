import React , { Component } from 'react'
import FullPageLayout from '../layouts/FullPageLayout'
import LoginForm from '../component/loginform'

class Login extends Component {
  render(){
    return(
      <FullPageLayout>
        <LoginForm />
      </FullPageLayout>
    )
  }
}

export default Login 