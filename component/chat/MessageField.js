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
        width: '50%',
        align: 'left',
        render: record => {
          if (record.messageType === 'image') {
            return (
              <a href={record.customerMessage} target="_blank" download>
                <img
                  src={record.customerMessage}
                  style={{ maxWidth: '100%' }}
                />
              </a>
            )
          }
          return record.customerMessage
        },
      },
      {
        dataIndex: 'operatorMessage',
        key: 'operatorMessage',
        align: 'right',
        width: '50%',
      },
    ]
    this.state = {
      loading: false,
      chatLog: [
        {
          operatorMessage: 'โปรดเลือกคู่สนทนา',
        },
      ],
    }
  }

  componentDidUpdate(prevProps) {
    // this.scrollToBottom({ block: 'end', behavior: 'smooth' })
    // Typical usage (don't forget to compare props)
    if (this.props.activeId !== prevProps.activeId) {
      this.setState({
        loading: true,
      })
      if (this.props.activeId !== '') {
        try {
          //get data from firebase
          const dataRef = database.ref(`Message/${this.props.activeId}`)
          dataRef.on('value', snapshot => {
            const data = []
            snapshot.forEach(childSnapshot => {
              data.push({
                ...childSnapshot.val(),
              })
            })
            this.setState({
              chatLog: data,
              loading: false,
            })
          })
        } catch (error) {
          console.log('error firebase in messageField >>>>', error)
        }
      }
    }
  }

  // scrollToBottom = options => {
  //   this.messagesEnd.scrollIntoView(options)
  // }

  // componentDidMount() {
  //   this.scrollToBottom(false)
  // }

  // displayMessages = messages => {
  //   let a = []
  //   messages.forEach(message => {
  //     const customerMessage = message.customerMessage
  //     const operatorMessage = message.operatorMessage
  //     a.push(
  //       <li>
  //         <span>
  //           <p style={{ textAlign: 'left' }}>{customerMessage}</p>
  //           <p style={{ textAlign: 'right' }}>{operatorMessage}</p>
  //         </span>
  //       </li>
  //     )
  //   })
  //   return a
  // }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            position: 'relative',
            height: 'auto',
            overflow: 'scroll',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Table
            dataSource={this.state.chatLog}
            columns={this.columns}
            pagination={false}
            loading={this.state.loading}
            // scroll={{ y: 600 }}
          />
        </div>
        <div style={{ height: '6%' }}>
          <Inputfield id={this.props.activeId} />
        </div>
      </div>
    )
  }
}

export default MessageField
