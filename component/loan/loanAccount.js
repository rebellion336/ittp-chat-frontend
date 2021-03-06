import { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { fetchLoan } from '../../redux/ducks/loan'
import LoanInfo from './loanInfo'
import BindingIdForm from './bindingIdForm'

class LoanAccount extends Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'ข้อมูลลูกค้า',
        dataIndex: 'loanId',
        key: 'loanId',
        // align: 'center',
      },
      {
        render: record => {
          const name = `${record.firstName} ${record.lastName}`
          return name
        },
      },
    ]
    this.state = {
      loanData: '',
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props)
    if (this.props.activeId !== prevProps.activeId) {
      this.props.fetchLoan({
        id: this.props.activeId,
      })
    }
  }

  handleClickRow(record) {
    this.setState({
      loanData: record,
    })
  }

  render() {
    console.log('props', this.props)
    const { data } = this.props.loans
    if (data !== undefined) {
      if (!data.length == 0) {
        return (
          <div>
            <Table
              style={{ cursor: 'pointer' }}
              dataSource={data}
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
            <br />
            <LoanInfo loanData={this.state.loanData} />
          </div>
        )
      }
      return <BindingIdForm id={this.props.activeId} />
    }
    const initData = [
      {
        firstName: '',
        lastName: '',
        loanId: 'โปรดเลือกคู่สนทนา',
      },
    ]
    //return <div style={{ textAlign: 'center' , fontSize : '24px' , paddingTop : '10px' }}>โปรดเลือกคู่สนทนา</div>
    return (
      <Table
        style={{ cursor: 'pointer' }}
        dataSource={initData}
        columns={this.columns}
        pagination={false}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loans: state.loan,
    chats: state.chat,
  }
}
export default connect(
  mapStateToProps,
  { fetchLoan }
)(LoanAccount)
