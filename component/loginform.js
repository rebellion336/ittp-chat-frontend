import { Component } from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';
import React from 'react'
import { login } from '../redux/duck/login'

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { email , password } = values

      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{margin: 'auto'}}>
        <Card style={{width:"19rem"}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'กรุณากรอก ID ของคุณ' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'กรุณาใส่รหัสผ่าน' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  errorMessage: state.auth.error.message,
  token: state.auth.token,
  email: state.auth.email,
})

export default Form.create()( NormalLoginForm )