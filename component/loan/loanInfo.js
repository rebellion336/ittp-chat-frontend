import { Component } from 'react'
import { Row, Col, Card } from 'antd'

class LoanInfo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { loanData } = this.props
    if (loanData !== '') {
      loanData.name = `${loanData.firstName} ${loanData.lastName}`
      const minimumBalance = (loanData.minDue - loanData.minPaid) / 100
      return (
        <div>
          <Card>
            <Row>
              <Col>CustomerName: {loanData.name}</Col>
            </Row>
            <Row>
              <Col>citizenId: {loanData.citizenId}</Col>
            </Row>
            <Row>
              <Col>productName: {loanData.productName}</Col>
            </Row>
            <Row>
              <Col>installAmount: {loanData.installAmount}</Col>
            </Row>
            <Row>
              <Col>ยอดขั้นต่ำเดือนนี้: {minimumBalance}</Col>
            </Row>
          </Card>
        </div>
      )
    }
    return <div />
  }
}
export default LoanInfo
