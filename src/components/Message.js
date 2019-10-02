import React from 'react'

class Message extends React.Component {
    state = {
        volunteerName: ''
    }

    handleReply = (msgObj) => {
        console.log(msgObj)
        this.props.handleMessageObject(msgObj)
    }

    componentDidMount() {
        // fetch(`http://localhost:3000/users/${msgObj[0].messenger_id}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        //     { this.setState({volunteerName: data.username})
        // })
    }

    render(){
        // console.log(this.props.sentMessages)
        console.log(this.props)
    const mappedSentMessages = this.props.sentMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-me" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{this.props.user.username}-{msg.created_at}</div></div></li>)
    const mappedReceivedMessages = this.props.receivedMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-another" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{this.props.orgName}-{msg.created_at}</div></div></li>)
    const adminMappedReceivedMessages = this.props.receivedMessages.map(msg => <li onClick={() => this.handleReply(msg)} className="from-another" key={msg.id} message={msg}><div className="message-text">{msg.message}<div className="make-smaller">{this.props.orgName}-{msg.created_at}</div></div></li>)
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