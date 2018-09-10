import { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux';
import {API_SERVER , postJSON} from '../../tools/api'
import {validCitizenId} from '../../tools/validators'
import { fetchLoan } from '../../redux/ducks/loan'

const FormItem = Form.Item;

class BindingIdForm extends Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.props.form.validateFields(async(err, values) => {
            if (!err) {
                const {citizenId} = values
                const { id , platform } = this.props.customerInfo
                try{
                    const value = {
                        id: id,
                        citizenId : citizenId,
                        platform: platform
                    }
                    await postJSON(
                        `${API_SERVER}/chats/line/binding`,
                        value
                    )
                    this.props.fetchLoan({id})
                }
                catch(error){
                    console.error(error)
                }
            }
            else{
                console.log('Error')
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
          <Form onSubmit={this.handleSubmit} style={{textAlign:'center'}} >
            <br/>
            <p>ลูกต้าไม่มีประวัติ</p>
            <br/>
            <FormItem>
              {getFieldDecorator('citizenId', {
                rules: [
                    { 
                        required: true, 
                        message: 'โปรดใส่เลขบัตรประชาชนของลูกค้า' 
                    },
                    {
                        validator: validCitizenId
                    }
                ],
              })(
                <Input prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="บัตรประชาชนของลูกค้า" />
              )}
            </FormItem>
            <Button type="primary" htmlType="submit">
                Binding CitizenId
            </Button>
          </Form>
        );
    }
    
}
const WrappedBindingIdForm = Form.create()(BindingIdForm);
export default connect(
    null,
    {fetchLoan}
)(WrappedBindingIdForm)