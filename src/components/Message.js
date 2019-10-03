import React from 'react'

class Message extends React.Component {

    handleReply = (msgObj) => {
        this.props.handleMessageObject(msgObj)
    }

    render(){
    const mappedSentMessages = this.props.sentMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-me" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{this.props.user.username}--{msg.created_at.slice(5,7)}/{msg.created_at.slice(8,10)}/{msg.created_at.slice(0,4)} at {msg.created_at.slice(11,16)}</div></div></li>)
    const mappedReceivedMessages = this.props.receivedMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-another" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{this.props.orgName}-{msg.created_at.slice(5,7)}/{msg.created_at.slice(8,10)}/{msg.created_at.slice(0,4)} at {msg.created_at.slice(11,16)}</div></div></li>)
    const adminMappedReceivedMessages = this.props.receivedMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-another" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{msg.messenger.username}-{msg.created_at.slice(5,7)}/{msg.created_at.slice(8,10)}/{msg.created_at.slice(0,4)} at {msg.created_at.slice(11,16)}</div></div></li>)
    
    return(
            <div >
                { this.props.user.admin ? (
                    <ul className="messages-ul">
                    {mappedSentMessages}
                    {adminMappedReceivedMessages}
                </ul>) :
                (
                <ul className="messages-ul">
                    {mappedSentMessages}
                    {mappedReceivedMessages}
                </ul>)}
            </div>
        )
    }
}
export default Message