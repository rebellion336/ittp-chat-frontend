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
        align: 'center',
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
      id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
    }
  }
  componentDidMount() {
    this.props.fetchLoan({
      id: this.state.id,
    })
  }

  handleClickRow(record) {
    this.setState({
      loanData: record,
    })
  }

  render() {
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
      return <BindingIdForm id={this.state.id} />
    }
    return <div style={{ textAlign: 'center' }}>LOADING</div>
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
