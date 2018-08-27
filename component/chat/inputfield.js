import { Component } from 'react'
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/ducks/chat'

class Inputfield extends Component {
    constructor(props){
        super(props)
        this.state={
            messageInputted : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSendMessage = this.handleSendMessage.bind(this)
    }
    handleInputChange(event) {
        const message = event.target.value;
        this.setState({
            messageInputted: message
        })
    }
    async handleSendMessage(){
        const message = this.state.messageInputted
        // const { id , platform } = this.props
        const id = 'Uc72aacda842257e6ae27f0bb8d80cc13'
        const platform = 'line'
        await this.props.sendMessage( id, platform, message )
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log('FROMINPUT')
        console.log('id',id)
        console.log('platform',platform)
        console.log('message',message)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        this.setState({
            messageInputted : ''
        })
    }
    render(){
        return (
            <div style={{padding: '3px', position: 'fixed', bottom: '0', width: '100%'}}>
                <span>
                    <Input style={{width:'90%'}} 
                    placeholder="Input Message" 
                    value={this.state.messageInputted}
                    onChange={this.handleInputChange}
                    />
                    <Button 
                    type="primary" 
                    style={{width:'10%'}}
                    onClick = {this.handleSendMessage}
                    >
                    Send
                    </Button>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      chats : state.chat
    }
}

export default connect(
    null,
    {sendMessage}
)(Inputfield)