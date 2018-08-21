import { Component } from 'react'
import { Input, Button } from 'antd';

class Inputfield extends Component {
    constructor(props){
        super(props)
        this.state={
            messageInputted : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        const message = event.target.value;
        this.setState({
            messageInputted: message
        })
        console.log('message',this.state.messageInputted)
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
                    <Button type="primary" style={{width:'10%'}}>Send</Button>
                </span>
            </div>
        )
    }
}
export default Inputfield