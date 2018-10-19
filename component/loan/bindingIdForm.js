import { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { FIREBASE_SERVER, postJSON } from '../../tools/api'
import { validCitizenId } from '../../tools/validators'
import { fetchLoan } from '../../redux/ducks/loan'

const FormItem = Form.Item
const Search = Input.Search

class BindingIdForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { citizenId, userName, userLastName, phoneNumber } = values
        const { id } = this.props
        console.log('id>>>', id)
        try {
          const value = {
            userId: id,
            citizenId,
            userName,
            userLastName,
            phoneNumber,
          }
          //await postJSON(`${API_SERVER}/chats/line/binding`, value)
          console.log('firebase API start')
          await postJSON(`${FIREBASE_SERVER}/bindId`, value)
          console.log('END firebase API')
          this.props.fetchLoan({ id })
        } catch (error) {
          console.error(error)
        }
      } else {
        console.log('Error')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
        <br />
        <p>ลูกต้าไม่มีประวัติ</p>
        <br />
        <FormItem>
          {getFieldDecorator('citizenId', {
            rules: [
              {
                required: true,
                message: 'โปรดใส่เลขบัตรประชาชนของลูกค้า',
              },
              {
                validator: validCitizenId,
              },
            ],
          })(
            <Search
              prefix={
                <Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="บัตรประชาชนของลูกค้า"
              enterButton="ตรวจสอบ"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [
              {
                required: true,
                message: 'โปรดระบุชื่อของลูกค้า',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="ชื่อของลูกค้า"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userLastName', {
            rules: [
              {
                required: true,
                message: 'โปรดระบุนามสกุลของลูกค้า',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="นามสกุลของลูกค้า"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('phoneNumber', {
            rules: [
              {
                required: false,
                message: 'โปรดเบอร์โทรศัพท์ของลูกค้า',
              },
            ],
          })(
            <Input
              prefix={
                <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="เบอร์โทรศัพท์ของลูกค้า"
            />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit">
          Binding CitizenId
        </Button>
      </Form>
    )
  }
}
const WrappedBindingIdForm = Form.create()(BindingIdForm)
export default connect(
  null,
  { fetchLoan }
)(WrappedBindingIdForm)
