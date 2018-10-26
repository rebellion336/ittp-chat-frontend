import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Badge, Icon } from 'antd'
import MessageField from '../../component/chat/MessageField'
import LoanAccount from '../../component/loan/loanAccount'
import { fetchActiveUser } from '../../redux/ducks/activeUser'
import database from '../../firebase/firebase'
import { patchJSON, FIREBASE_SERVER } from '../../tools/api'

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'รายชื่อลูกค้า',
        dataIndex: 'name',
        key: 'name',
      },
      {
        render: record => {
          return (
            <Badge
              count={record.count}
              style={{ backgroundColor: '#88DDBB' }}
            />
          )
        },
      },
      {
        render: record => {
          return (
            <Icon
              type="close-circle"
              theme="outlined"
              style={{ fontSize: '20px', paddingTop: '5px' }}
              onClick={() => this.unActiveUser(record.userId)}
            />
          )
        },
      },
    ]
    this.state = {
      activeId: '',
      activeUserData: undefined,
    }
    try {
      const activeUserRef = database.ref('ActiveUser')
      activeUserRef.on('value', snapshot => {
        const data = []
        snapshot.forEach(childSnapshot => {
          data.push(childSnapshot.val())
        })
        this.setState({
          activeUserData: data,
        })
      })
    } catch (error) {
      console.log('error at cintactList firebase', error)
    }
    this.unActiveUser = this.unActiveUser.bind()
  }

  async unActiveUser(userId) {
    await patchJSON(`${FIREBASE_SERVER}/unActiveUser/${userId}`)
  }

  async handleClickRow(record) {
    this.setState({
      activeId: record.userId,
    })
    await patchJSON(`${FIREBASE_SERVER}/patchMessageCount/${record.userId}`)
  }

  render() {
    if (this.state.activeUserData !== undefined) {
      const contactList = this.state.activeUserData
      return (
        <Row style={{ width: '100%' }}>
          <Col span={5}>
            <Table
              dataSource={contactList}
              columns={this.columns}
              pagination={false}
              onRow={record => {
                return {
                  onClick: () => {
                    this.handleClickRow(record)
                  },
                }
              }}
            />
          </Col>
          <Col span={12}>
            <MessageField activeId={this.state.activeId} />
          </Col>
          <Col span={7}>
            <LoanAccount activeId={this.state.activeId} />
          </Col>
        </Row>
      )
    }
    return (
      <div style={{ textAlign: 'center', fontSize: '36px', paddingTop: '3%' }}>
        Loading
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    activeUsers: state.activeUser,
  }
}

export default connect(
  mapStateToProps,
  { fetchActiveUser }
)(ContactList)
