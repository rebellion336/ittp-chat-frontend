import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Badge, Icon, Tabs, Menu } from 'antd'
import MessageField from '../../component/chat/MessageField'
import LoanAccount from '../../component/loan/loanAccount'
import { fetchActiveUser } from '../../redux/ducks/activeUser'
import database, { provider, firebase } from '../../firebase/firebase'
import { patchJSON, FIREBASE_SERVER } from '../../tools/api'
import { Button } from 'antd/lib/radio'

const TabPane = Tabs.TabPane
const SubMenu = Menu.SubMenu

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.inActiveColumns = [
      {
        title: 'inActiveUser',
        dataIndex: 'name',
        key: 'name',
      },
    ]
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
      inactiveUserData: undefined,
      displayName: '',
    }
    //check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
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
        console.log('user>>>>>>>>', user)
        this.setState({
          displayName: displayName,
        })
        // ...
      } else {
        // No user is signed in.
        // then redirect to google login to sign user up
        console.log('go to login')
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

            console.log('errorCode>>', errorCode)
            console.log('errorMessage>>>', errorMessage)
            console.log('email error>>>', email)
            console.log('credential error', credential)
          })
      }
    })
    this.unActiveUser = this.unActiveUser.bind(this)
    this.signOut = this.signOut.bind(this)
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

  async signOut() {
    await firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log('user signed OUT')
      })
      .catch(function(error) {
        // An error happened.
        console.log('signed out error')
      })
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
      const inactiveUserRef = database.ref('InactiveUser')
      inactiveUserRef.on('value', snapshot => {
        const inactiveUserData = []
        snapshot.forEach(childSnapshot => {
          inactiveUserData.push(childSnapshot.val())
        })
        this.setState({
          inactiveUserData: inactiveUserData,
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
      const inactiveUserList = this.state.inactiveUserData
      return (
        <Row style={{ width: '100%', height: '100%' }}>
          <Col
            span={5}
            style={{
              height: '100%',
              background: '#FFFFFF',
              borderRight: 'solid',
              borderWidth: '0.5px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', position: 'relative' }}>
              <Menu mode="vertical" style={{ width: '100%' }}>
                <Menu.Item style={{ fontSize: '20px' }}>
                  ITTP Customer Service
                </Menu.Item>
                <SubMenu
                  title={
                    <span>
                      <Icon type="user" />
                      <span>{this.state.displayName}</span>
                    </span>
                  }
                >
                  <Menu.Item onClick={this.signOut}>Signed Out</Menu.Item>
                </SubMenu>
              </Menu>
            </div>

            <div
              class="scroll-container"
              style={{
                width: '100%',
                height: '87%',
                float: 'left',
                position: 'relative',
              }}
            >
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              test
              <br />
              END
            </div>

            {/* <div style={{ height: '43.2%' }}>
              <Tabs defaultActiveKey="ADMIN" type="card">
                <TabPane tab="ADMIN" key="ADMIN">
                  <Table
                    dataSource={contactList}
                    columns={this.columns}
                    pagination={false}
                    scroll={{ y: 200 }}
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
            </div>
            <div style={{ height: '43.2%' }}>
              <Table
                dataSource={inactiveUserList}
                columns={this.inActiveColumns}
                pagination={false}
                scroll={{ y: 200 }}
                onRow={record => {
                  return {
                    onClick: () => {
                      this.handleClickRow(record)
                    },
                  }
                }}
              />
            </div> */}
          </Col>
          <Col span={12} style={{ height: '100%' }}>
            <MessageField activeId={this.state.activeId} />
          </Col>
          <Col span={7}>
            <LoanAccount activeId={this.state.activeId} />
          </Col>
          <style>{`
            .ant-tabs-bar {
              margin: 0px !important;
            }
            .scroll-container {
              overflow: hidden;
            } 
            .scroll-container:hover {
              overflow-y: auto;
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
