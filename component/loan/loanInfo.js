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
      // รออัพ apiV2 ถึงใช้ได้
      // ใช้เซิฟ test อยู่
      const minimumBalance = loanData.minDue - loanData.minPaid
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
            <Row>
              <Col>ใช้เซิฟ test อยู่ ไม่ได้ใช้ core</Col>
            </Row>
          </Card>
        </div>
      )
    }
    return <div />
  }
}
export default LoanInfo
