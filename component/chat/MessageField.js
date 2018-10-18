import { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import Inputfield from './inputfield'
import { fetchChat } from '../../redux/ducks/chat'
import database from '../../firebase/firebase'
import io from 'socket.io-client'
import { API_SERVER } from '../../tools/api'

class MessageField extends Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        dataIndex: 'customerMessage',
        key: 'customerMessage',
      },
      {
        dataIndex: 'operatorMessage',
        key: 'operatorMessage',
        align: 'right',
      },
    ]
    this.state = {
      chatLog: [],
      id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
    }
    try {
      //get data from firebase
      const dataRef = database.ref(`Message/${this.state.id}`)
      dataRef.on('value', snapshot => {
        const data = []
        snapshot.forEach(childSnapshot => {
          data.push({
            ...childSnapshot.val(),
          })
        })
        this.setState({
          chatLog: data,
        })
        console.log('data In messageField>>>', data)
      })
    } catch (error) {
      console.log('error firebase in messageField >>>>', error)
    }
    // this.socket = io(
    //   'https://us-central1-noburo-216104.cloudfunctions.net/line:9000'
    // )
    //     this.socket.on('RECEIVE_MESSAGE', () => {
    //       this.props.fetchChat({
    //         id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
    //         platform: 'line',
    //       })
    //     })
    //     this.socket.on('connect', function() {
    //       var sessionid = socket.socket.sessionid
    //       console.log('sessionId>>>', sessionid)
    //     })
  }
  // componentDidMount() {
  //   this.props.fetchChat({
  //     id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
  //     platform: 'line',
  //   })
  // }
  render() {
    // let chatLog = ''
    // if (this.props.chats.data !== undefined) {
    //   chatLog = this.props.chats.data
    // }
    return (
      <div style={{ width: '100%' }}>
        <Table
          dataSource={this.state.chatLog}
          columns={this.columns}
          pagination={false}
          scroll={{ y: 600 }}
        />
        <Inputfield id={this.state.id} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    chats: state.chat,
  }
}

export default connect(
  mapStateToProps,
  { fetchChat }
)(MessageField)
