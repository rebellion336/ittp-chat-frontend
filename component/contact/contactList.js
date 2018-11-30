import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Badge, Icon, Tabs, Menu } from 'antd'
import MessageField from '../../component/chat/MessageField'
import LoanAccount from '../../component/loan/loanAccount'
import { fetchActiveUser } from '../../redux/ducks/activeUser'
import database, { provider, firebase } from '../../firebase/firebase'
import { patchJSON, FIREBASE_SERVER } from '../../tools/api'

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
      openKeys: ['ADMIN'],
    }
    //check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
      if (user && !user.isAnonymous) {
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
        console.log('user', user)
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
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  async unActiveUser(userId) {
    await patchJSON(`${FIREBASE_SERVER}/unActiveUser/${userId}`)
  }

  async handleClickRow(userId) {
    this.setState({
      activeId: userId,
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
        //const list = []
        snapshot.forEach(childSnapshot => {
          //activeUserData.push(childSnapshot.val())
          activeUserData.push(
            <Menu.Item key={childSnapshot.val().userId}>
              {childSnapshot.val().name}
              <Icon
                type="close-circle"
                theme="outlined"
                style={{
                  fontSize: '20px',
                  paddingTop: '10px',
                  float: 'right',
                }}
                onClick={() => this.unActiveUser(childSnapshot.val().userId)}
              />
            </Menu.Item>
          )
        })
        this.setState({
          activeUserData: activeUserData,
        })
      })
      const botResponseRef = database.ref('BotResponse')
      botResponseRef.on('value', snapshot => {
        const botResponseData = []
        snapshot.forEach(childSnapshot => {
          botResponseData.push(
            <Menu.Item key={childSnapshot.val().userId}>
              {childSnapshot.val().name}
              <Icon
                type="close-circle"
                theme="outlined"
                style={{
                  fontSize: '20px',
                  paddingTop: '10px',
                  float: 'right',
                }}
                onClick={() => this.unActiveUser(childSnapshot.val().userId)}
              />
            </Menu.Item>
          )
        })
        this.setState({
          botResponseData: botResponseData,
        })
      })
      const inactiveUserRef = database.ref('InactiveUser')
      inactiveUserRef.on('value', snapshot => {
        const inactiveUserData = []
        snapshot.forEach(childSnapshot => {
          inactiveUserData.push(
            <Menu.Item key={childSnapshot.val().userId}>
              {childSnapshot.val().name}
            </Menu.Item>
          )
        })
        this.setState({
          inactiveUserData: inactiveUserData,
        })
      })
    } catch (error) {
      console.log('error at contactList firebase', error)
    }
  }

  rootSubmenuKeys = ['ADMIN', 'BotResponse', 'InactiveUser']

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
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
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative' }}>
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
                position: 'relative',
              }}
            >
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: '100%' }}
                onClick={({ key }) => {
                  this.handleClickRow(key)
                }}
              >
                <SubMenu
                  key="ADMIN"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>ADMIN</span>
                    </span>
                  }
                  children={contactList}
                />

                <SubMenu
                  key="BotResponse"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>BotResponse</span>
                    </span>
                  }
                  onClick={({ key }) => {
                    this.handleClickRow(key)
                  }}
                  children={botResponseList}
                />

                <SubMenu
                  key="InactiveUser"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>InactiveUser</span>
                    </span>
                  }
                  onClick={({ key }) => {
                    this.handleClickRow(key)
                  }}
                  children={inactiveUserList}
                />
              </Menu>
            </div>
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
