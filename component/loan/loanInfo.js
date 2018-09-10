import { Component } from 'react'
import {Row , Col} from 'antd'

class LoanInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { loanData } = this.props
        if(loanData !== ''){
            loanData.name = `${loanData.firstName} ${loanData.lastName}`
            return (
                <div>
                    <Row>
                        <Col>
                            CustomerName: {loanData.name}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            citizenId: {loanData.citizenId}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            productName: {loanData.productName}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            installAmount: {loanData.installAmount}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            ข้อมูลอื่นๆ
                        </Col>
                    </Row>
                </div>
            )
        }
        return <div />
    }
}
export default LoanInfo