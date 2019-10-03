import React from 'react'
import Favorites from './Favorites'

class YourVolunteer extends React.Component {
    state = {
        yourVolunteerClicked: false
    }

    handleClick = () => {
        this.setState({yourVolunteerClicked: !this.state.yourVolunteerClicked})
    }

    sendingMsg = () => {
        this.setState({yourVolunteerClicked: !this.state.yourVolunteerClicked})
    }

    render(){
        return(
            this.state.yourVolunteerClicked ? (
                <div>
                <Favorites sendingMsg={this.sendingMsg} handleMessageClick={this.props.handleMessageClick} addToPastWork={this.props.addToPastWork} pastWork={this.props.pastWork} favorites={this.props.favorites} handleVolunteerClick={this.handleClick}/>
                </div>
             ) : (
                <div>
                <button className="sidebar-btn" onClick={this.handleClick}>Your Volunteer Work</button>
             </div> )
             
        )
    }
}

export default YourVolunteer


