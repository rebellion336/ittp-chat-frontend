import { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import FileUploader from 'react-firebase-file-uploader'
import { sendMessage, fetchChat } from '../../redux/ducks/chat'
import { FIREBASE_SERVER, postJSON } from '../../tools/api'
import { firebase } from '../../firebase/firebase'

class Inputfield extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageInputted: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
    this.handleProgress = this.handleProgress.bind(this)
    this.handleUploadError = this.handleUploadError.bind(this)
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this)
  }
  handleInputChange(event) {
    const message = event.target.value
    this.setState({
      messageInputted: message,
    })
  }
  async handleSendMessage() {
    const message = this.state.messageInputted
    const id = this.props.id
    if (message !== '') {
      try {
        const value = {
          userId: id,
          message: message,
        }
        await postJSON(`${FIREBASE_SERVER}/sendmessage`, value)
      } catch (error) {
        console.error(error)
      }
    }
    this.setState({
      messageInputted: '',
    })
  }

  handleProgress = progress => {
    this.setState({ progress })
  }
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        const id = this.props.id
        const value = {
          userId: id,
          imageUrl: url,
        }
        return postJSON(`${FIREBASE_SERVER}/sendimage`, value)
      })
  }

  render() {
    return (
      <div
        style={{
          padding: '3px',
          bottom: '0',
          width: '100%',
          // position: 'absolute',
          display: 'block',
        }}
      >
        <span>
          <Input
            style={{ width: '79%' }}
            placeholder="Input Message"
            value={this.state.messageInputted}
            onChange={this.handleInputChange}
            onPressEnter={this.handleSendMessage}
          />
          <label
            style={{
              width: '11%',
              display: 'inline-block',
              backgroundColor: 'steelblue',
              color: 'white',
              padding: '5px',
              borderRadius: 4,
              pointer: 'cursor',
            }}
          >
            <font size="1.5">Send Image</font>
            <FileUploader
              hidden
              accept="image/*"
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
          <Button
            type="primary"
            style={{ width: '10%' }}
            onClick={this.handleSendMessage}
          >
            Send
          </Button>
        </span>
      </div>
    )
  }
}

export default connect(
  null,
  { sendMessage }
)(Inputfield)
