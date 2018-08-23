import React , { Component } from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import FullPageLayout from '../layouts/FullPageLayout'
import LoginForm from '../component/loginform'
import { withReduxSaga } from '../redux/store'
import { connectI18n } from '../hocs/connectI18n'
import { redirect } from '../tools/utils'

class Login extends Component {
  componentDidMount() {
    Router.prefetch('/chat')
  }
  render(){
    const { t } = this.props
    console.log('props::::>',this.props)
    return(
      <FullPageLayout>
        <LoginForm t={t}/>
      </FullPageLayout>
    )
  }
}
Login.propTypes = {
  t: PropTypes.func.isRequired,
}
Login.getInitialProps = ({ store, res, isServer }) => {
  const { auth } = store.getState()
  // User is already login, redirect to home page
  if (typeof auth.token !== 'undefined') {
    redirect('/chat', { res, isServer })
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Login)