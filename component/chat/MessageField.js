import { Component } from 'react'
import { Table} from 'antd';
import { connect } from 'react-redux';
import Inputfield from './inputfield'
import { fetchChat } from '../../redux/ducks/chat'
import io from 'socket.io-client'
import {API_SERVER} from '../../tools/api'

class MessageField extends Component {
    constructor(props){
        super(props)
        this.columns=[
            {
                dataIndex: 'customerMessage',
                key: 'customerMessage',
            }, 
            {
                dataIndex: 'operatorMessage',
                key: 'operatorMessage',
                align:'right'
            }
        ]
        this.socket = io(API_SERVER)

        this.socket.on('RECEIVE_MESSAGE', ()=>{
            this.props.fetchChat({
                id : 'Uc72aacda842257e6ae27f0bb8d80cc13',
                platform: 'line'
            }) 
        })
    }
    componentDidMount() {
        this.props.fetchChat({
            id : 'Uc72aacda842257e6ae27f0bb8d80cc13',
            platform: 'line'
        })
    }
    render(){
        let chatData = ''
        if(this.props.chats.data !== undefined){
            chatData = this.props.chats.data.chat
        }
        
        return (
            <div style={{width:'100%'}}>
            <Table dataSource={ chatData } columns={this.columns} pagination={false} scroll={{ y: 600 }}/>
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