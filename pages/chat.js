import { Component } from 'react'
import {Row , Col} from 'antd'
import { compose } from 'redux'
import { withReduxSaga } from '../redux/store'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import MessageField from '../component/chat/MessageField'
import LoanAccount from '../component/loan/loanAccount'

class Chat extends Component {
  render(){
    return(
      <FullPageLayout>
        <Row style={{width : '100%'}}>
          <Col span={19}>
            <MessageField />
          </Col>
          <Col span={5}>
            <LoanAccount />
          </Col>
        </Row>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Chat)