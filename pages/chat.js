import React , { Component } from 'react'
import FullPageLayout from '../layouts/FullPageLayout'
import MessageField from '../component/chat/chatfield'

class Chat extends Component {
  render(){
    return(
      <FullPageLayout>
        <MessageField />
      </FullPageLayout>
    )
  }
}

export default Chat