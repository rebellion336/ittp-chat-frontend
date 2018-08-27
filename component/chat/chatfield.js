import { Component } from 'react'
import { Row, Col ,Table} from 'antd';
import { connect } from 'react-redux';
import Inputfield from './inputfield'
import { fetchChat } from '../../redux/ducks/chat'

class MessageField extends Component {
    constructor(props){
        super(props)
        this.columns=[
            {
                dataIndex: 'customerMessage',
                key: 'key',
            }, 
            {
                dataIndex: 'operatorMessage',
                key: 'key',
                align:'right'
            }
        ]
    }
    componentDidMount() {
        this.props.fetchChat({
            id : 'Uc72aacda842257e6ae27f0bb8d80cc13',
            platform: 'line'
        })
    }
    render(){
        const chatData = this.props.chats.data
        return (
            <div style={{width:'100%'}}>
                <Table dataSource={ chatData } columns={this.columns} pagination={false} />
                <Inputfield chats={this.props.chats.data}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      chats : state.chat
    }
}

export default connect(
    mapStateToProps,
    {fetchChat}
)(MessageField)