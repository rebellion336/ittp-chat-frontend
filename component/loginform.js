import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Form, Icon, Input, Button } from 'antd'
import { login } from '../redux/ducks/auth'
import { setCookie } from '../redux/ducks/cookie'

const FormItem = Form.Item

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values
        this.props.login({ email, password })
      }
    })
  }
render() {
    const { t, loading, errorMessage } = this.props
    const { getFieldDecorator, getFieldError } = this.props.form
    const passwordError = getFieldError('password') || errorMessage
    return (
      <div style={{ margin: 'auto' /* center div inside parent */ }}>
        <Card style={{ width: '19rem' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('email', {
                validateTrigger: 'onBlur',
                rules: [
                  {
                    type: 'email',
                    message: t('The input is not valid E-mail!'),
                  },
                  { required: true, message: t('Please input your email!') },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder={t('Email')}
                  disabled={loading}
                />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={getFieldError('password') || errorMessage}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: t('Please input your password!') },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder={t('Password')}
                  disabled={loading}
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                loading={loading}
              >
                {loading ? '' : t('Log in')}
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
LoginForm.propTypes = {
  t: PropTypes.func.isRequired,
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    getFieldsError: PropTypes.func.isRequired,
  }).isRequired,
  // action creators
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
}
LoginForm.defaultProps = {
  loading: false,
  errorMessage: '',
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  errorMessage: state.auth.error.message,
  token: state.auth.token,
  email: state.auth.email,
})
const WrappedLoginForm = Form.create()(
  connect(mapStateToProps, { login, setCookie })(LoginForm)
)
export default WrappedLoginForm

// import { Component } from 'react'
// import { Form, Icon, Input, Button, Card } from 'antd';
// import React from 'react'
// import { login } from '../redux/ducks/auth'
// import { setCookie } from '../redux/ducks/auth'

// const FormItem = Form.Item;

// class NormalLoginForm extends Component {
//   constructor(props){
//     super(props)
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         const { email , password } = values
//       }
//     });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div style={{margin: 'auto'}}>
//         <Card style={{width:"19rem"}}>
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <FormItem>
//               {getFieldDecorator('email', {
//                 rules: [{ required: true, message: 'กรุณากรอก ID ของคุณ' }],
//               })(
//                 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//               )}
//             </FormItem>
//             <FormItem>
//               {getFieldDecorator('password', {
//                 rules: [{ required: true, message: 'กรุณาใส่รหัสผ่าน' }],
//               })(
//                 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//               )}
//             </FormItem>
//             <FormItem>
//               <Button type="primary" htmlType="submit" className="login-form-button">
//                 Log in
//               </Button>
//             </FormItem>
//           </Form>
//         </Card>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   loading: state.auth.loading,
//   errorMessage: state.auth.error.message,
//   token: state.auth.token,
//   email: state.auth.email,
// })

// export default Form.create()( NormalLoginForm )