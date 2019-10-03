import React from 'react'
import YourVolunteer from './YourVolunteer'
import Create from './Create'
import Edit from './Edit'
import Chat from './Chat'

class SideBar extends React.Component {
    state = {
        wannaMessage: false,
        whichJobToMessage: '',
        jobOwner: '',
        orgName: ''
    }

    handleMessageClick = (fav) => {
        fetch(`http://localhost:3000/jobs/${fav.job_id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({jobOwner: data.user_id, wannaMessage: true, orgName: data.organization, whichJobToMessage: fav.job_id})
            })
        }

    handleYourMessagesClicked = () => {
        this.setState({wannaMessage: true})
    }

    handleMessageXClick = () => {
        this.setState({wannaMessage: false})
    }

    render(){
        return(
            <div className="sidebar">
                { !this.props.user.admin ? ( 
                <YourVolunteer user={this.props.user} handleMessageClick={this.handleMessageClick} favorites={this.props.favorites} pastWork={this.props.pastWork} addToPastWork={this.props.addToPastWork}/>
                ) : null }
                { this.props.user.admin ? (
                    <Create newJobClicked={this.props.handleNewJobClicked}/>
                ) : null }
                <br />
                <br />
                { this.props.user.admin ? (
                    <Edit handleJobToEdit={this.props.handleJobToEdit} handleEditXClick={this.props.handleEditXClick} user={this.props.user} editJobClicked={this.props.editJobClicked} handleEditJobClicked={this.props.handleEditJobClicked}/>
                ) : null }
                <br /> 
                {this.props.user.id ? (
                <Chat whichJobToMessage={this.state.whichJobToMessage} orgName={this.state.orgName} jobOwner={this.state.jobOwner} handleMessageXClick={this.handleMessageXClick} wannaMessage={this.state.wannaMessage} user={this.props.user} handleYourMessagesClicked={this.handleYourMessagesClicked}/>
                ) : null }
                <br />
            </div>
        )
    }
}

export default SideBar