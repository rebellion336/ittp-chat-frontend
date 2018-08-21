import { Component } from 'react'
import { Row, Col ,Table} from 'antd';
import { connect } from 'react-redux';
import Inputfield from './inputfield'

class MessageField extends Component {
    constructor(props){
        super(props)
        this.columns=[
            {
                dataIndex: 'customerMessage',
                key: 'key',
            }, 
            {
                dataIndex: 'opratorMessage',
                key: 'key',
                align:'right'
            }
        ]
    }
    render(){
        const dataSource = [
            {
                key:1,
                customerMessage: 'HelloFromCustomer',
                opratorMessage: ''
            },
            {
                key:2,
                customerMessage: '',
                opratorMessage: 'HelloFromOprator'
            }
        ]
        return (
            <div style={{width:'100%'}}>
                {/* <p style={{textAlign:'left'}}>HelloFromCustomer</p>
                <p style={{textAlign:'right'}}>HelloFromCA</p> */}
                <Table dataSource={dataSource} columns={this.columns} pagination={false} />
                <Inputfield/>
            </div>
        )
    }
}
const mapStateToProps = state => ({

})

export default MessageField
// export default connect(mapStateToProps)(ChatField)