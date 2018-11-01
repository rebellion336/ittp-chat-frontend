import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Badge, Icon, Tabs } from 'antd'
import MessageField from '../../component/chat/MessageField'
import LoanAccount from '../../component/loan/loanAccount'
import { fetchActiveUser } from '../../redux/ducks/activeUser'
import database, { firebase } from '../../firebase/firebase'
import { patchJSON, FIREBASE_SERVER } from '../../tools/api'

const TabPane = Tabs.TabPane

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'รายชื่อลูกค้า',
        dataIndex: 'name',
        key: 'name',
        width: '75%',
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
        width: '10%',
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
        width: '15%',
      },
    ]
    this.state = {
      activeId: '',
      activeUserData: undefined,
      botResponseData: undefined,
      status: 'Loading',
    }
    //check if user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // infomation that User Obj. have
        const displayName = user.displayName
        const email = user.email
        const emailVerified = user.emailVerified // true or falue
        const photoURL = user.photoURL //url to photo
        const isAnonymous = user.isAnonymous //ture or falue
        const uid = user.uid // unique Id for user
        const providerData = user.providerData
        // ...
      } else {
        // No user is signed in.
        // then redirect to google login to sign user up
        firebase
          .auth()
          .signInWithRedirect(provider)
          .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken
            // The signed-in user info.
            const user = result.user
            console.log('token>>', token)
            console.log('user>>>', user)
          })
          .catch(function(error) {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.email
            const credential = error.credential

            this.setState({
              status: 'Google Login Error',
            })

            console.log('errorCode>>', errorCode)
            console.log('errorMessage>>>', errorMessage)
            console.log('email error>>>', email)
            console.log('credential error', credential)
          })
      }
    })
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

  componentDidMount() {
    try {
      const activeUserRef = database.ref('ActiveUser')
      activeUserRef.on('value', snapshot => {
        const activeUserData = []
        snapshot.forEach(childSnapshot => {
          activeUserData.push(childSnapshot.val())
        })
        this.setState({
          activeUserData: activeUserData,
        })
      })
      const botResponseRef = database.ref('BotResponse')
      botResponseRef.on('value', snapshot => {
        const botResponseData = []
        snapshot.forEach(childSnapshot => {
          botResponseData.push(childSnapshot.val())
        })
        this.setState({
          botResponseData: botResponseData,
        })
      })
    } catch (error) {
      console.log('error at contactList firebase', error)
    }
  }

  render() {
    if (this.state.activeUserData !== undefined) {
      const contactList = this.state.activeUserData
      const botResponseList = this.state.botResponseData
      return (
        <Row style={{ width: '100%' }}>
          <Col span={5}>
            <Tabs defaultActiveKey="ADMIN" type="card">
              <TabPane tab="ADMIN" key="ADMIN">
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
              </TabPane>
              <TabPane tab="BOT" key="BOT">
                <Table
                  dataSource={botResponseList}
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
              </TabPane>
            </Tabs>
          </Col>
          <Col span={12}>
            <MessageField activeId={this.state.activeId} />
          </Col>
          <Col span={7}>
            <LoanAccount activeId={this.state.activeId} />
          </Col>
          <style jsx global>{`
            .ant-tabs-bar {
              margin: 0px !important;
            }
          `}</style>
        </Row>
      )
    }
    return (
      <div style={{ textAlign: 'center', fontSize: '36px', paddingTop: '3%' }}>
        {this.state.status}
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
