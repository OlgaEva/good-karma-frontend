import React from 'react'
import Message from './Message'

class Chat extends React.Component {

    state = {
        msgInput: '',
        sentMessages: [],
        receivedMessages: [],
        whichMessage: {},
        volunteerName: ''
    }

    componentDidMount(){
        if(this.props.user.admin){
        fetch('http://localhost:3000/messages')
        .then(res => res.json())
        .then(data => { console.log(data) 
            this.setState({
                sentMessages: data.filter(msg => msg.messenger_id === this.props.user.id),
                receivedMessages: data.filter(msg => msg.messagee_id === this.props.user.id)
            })
        })
        } else {
        fetch('http://localhost:3000/messages')
        .then(res => res.json())
        .then(data => { 
            this.setState({
                sentMessages: data.filter(msg => msg.messenger_id === this.props.user.id),
                receivedMessages: data.filter(msg => msg.messagee_id === this.props.user.id)
            })
        })
      }
    }

    handleMessageObject = (msgObj) => {    
        fetch(`http://localhost:3000/users/${msgObj.messenger_id}`)
        .then(res => res.json())
        .then(data => { this.setState({volunteerName: data.username})
        })
        console.log(msgObj)
        this.setState({whichMessage: msgObj})
    }

    handleClick = () => {
        if(this.props.user.admin){
            this.props.handleYourMessagesClicked()
        } else {
        }
    }

    handleXClick = () => {
        this.props.handleMessageXClick()
    }

    handleChange = (e) => {
        this.setState({msgInput: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    if(this.props.user.admin){
        const message = 
        {
            message:
            {
            messenger_id: this.props.user.id,
            messagee_id: this.state.whichMessage.messenger_id,
            message: this.state.msgInput,
            job_id: this.state.whichMessage.job_id
            }
        }
     
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(messageFromServer => this.setState({sentMessages: [...this.state.sentMessages, messageFromServer]}))
        
        this.setState({msgInput: ''})
        
    } else {
        const message = 
        {
            message:
            {
            messenger_id: this.props.user.id,
            messagee_id: this.props.jobOwner,
            message: this.state.msgInput,
            job_id: this.props.whichJobToMessage
            }
        }
     
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(messageFromServer => this.setState({sentMessages: [...this.state.sentMessages, messageFromServer]}))
        
        this.setState({msgInput: ''})
      }
    }

    whatToRender = () => {
        const filteredSentMessages = this.state.sentMessages.filter(msg => msg.job_id === this.props.whichJobToMessage)  
        const filteredReceivedMessages = this.state.receivedMessages.filter(msg => msg.job_id === this.props.whichJobToMessage)
        if(this.props.user.admin){
        return <div><p className="chat-title">Your Messages with {this.state.volunteerName}</p>
        <ul className="messages-ul">
                    <Message handleMessageObject={this.handleMessageObject} orgName={this.props.orgName} user={this.props.user} receivedMessages={this.state.receivedMessages} sentMessages={this.state.sentMessages}/>
                </ul></div> 
        } else {
        return <div><p className="chat-title">Your Messages with {this.props.orgName}</p>
        <ul className="messages-ul">
                    <Message handleMessageObject={this.handleMessageObject} orgName={this.props.orgName} user={this.props.user} receivedMessages={filteredReceivedMessages} sentMessages={filteredSentMessages}/>
                </ul></div>
        }
    }

    render(){

        // const filteredSentMessages = this.state.sentMessages.filter(msg => msg.job_id === this.props.whichJobToMessage)  
        // const filteredReceivedMessages = this.state.receivedMessages.filter(msg => msg.job_id === this.props.whichJobToMessage)  
        console.log(this.state)
        console.log(this.props)
        return(
            this.props.wannaMessage ? ( 
            <div className="chat">
                <div><span className="closing-x" onClick={this.handleXClick}>𝗫</span></div>
                {this.whatToRender()}
                {/* {!this.props.user.admin ? (
                <p className="chat-title">Your Messages with {this.props.orgName}</p> ) : null } */}
                {/* <ul className="messages-ul">
                    <Message handleMessageObject={this.handleMessageObject} orgName={this.props.orgName} user={this.props.user} receivedMessages={filteredReceivedMessages} sentMessages={filteredSentMessages}/>
                </ul> */}
                <form onSubmit={this.handleSubmit}>
                    <input className="msg-form" onChange={this.handleChange} value={this.state.msgInput} type="text" />
                    <input type="submit" />
                </form>
            </div> ) : (
             <div>
             <button className="sidebar-btn2" onClick={this.handleClick}>Your Messages</button>
            </div> )
        )
    }
}
export default Chat
