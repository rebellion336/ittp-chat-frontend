import React , { Component } from 'react'
import { compose } from 'redux'
import { withReduxSaga } from '../redux/store'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import MessageField from '../component/chat/MessageField'

class Chat extends Component {
  render(){
    return(
      <FullPageLayout>
        <MessageField />
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Chat)