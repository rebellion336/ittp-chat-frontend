import { Component } from 'react'
import { Row, Col } from 'antd'
import { compose } from 'redux'
import { withReduxSaga } from '../redux/store'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import MessageField from '../component/chat/MessageField'
import LoanAccount from '../component/loan/loanAccount'
import ContactList from '../component/contact/contactList'

class Chat extends Component {
  render() {
    return (
      <FullPageLayout>
        <ContactList />
      </FullPageLayout>
    )
  }
}

export default compose(
  withReduxSaga,
  connectI18n(['common'])
)(Chat)
