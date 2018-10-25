import { Component } from 'react'
import { Table } from 'antd'
import Inputfield from './inputfield'
import database from '../../firebase/firebase'

class MessageField extends Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'การสนทนา',
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
      chatLog: [
        {
          operatorMessage: 'โปรดเลือกคู่สนทนา',
        },
      ],
      id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props)
    if (this.props.activeId !== prevProps.activeId) {
      if (this.props.activeId !== '') {
        console.log('props.id in MessageField In if', this.props.activeId)
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
          })
        } catch (error) {
          console.log('error firebase in messageField >>>>', error)
        }
      }
    }
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Table
          dataSource={this.state.chatLog}
          columns={this.columns}
          pagination={false}
          scroll={{ y: 545 }}
        />
        <Inputfield id={this.state.id} />
      </div>
    )
  }
}

export default MessageField
