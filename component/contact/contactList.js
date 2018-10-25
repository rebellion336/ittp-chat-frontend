import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Badge } from 'antd'
import MessageField from '../../component/chat/MessageField'
import LoanAccount from '../../component/loan/loanAccount'
import { fetchActiveUser } from '../../redux/ducks/activeUser'

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
    ]
    this.state = {
      activeId: '',
    }
  }
  componentDidMount() {
    this.props.fetchActiveUser()
  }

  handleClickRow(record) {
    console.log('click!!! >>>', record.userId)
    this.setState({
      activeId: record.userId,
    })
  }

  render() {
    if (this.props.activeUsers.data !== undefined) {
      const contactList = this.props.activeUsers.data
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
