import React from 'react'
import Favorites from './Favorites'

class YourVolunteer extends React.Component {
    state = {
        yourVolunteerClicked: false
    }

    handleClick = () => {
        this.setState({yourVolunteerClicked: !this.state.yourVolunteerClicked})
    }

    render(){
    // console.log("your volunteer's props ", this.props)
        return(
            this.state.yourVolunteerClicked ? (
                <div>
                <Favorites addToPastWork={this.props.addToPastWork} pastWork={this.props.pastWork} favorites={this.props.favorites} handleVolunteerClick={this.handleClick}/>
                </div>
             ) : (
                <div>
                <button className="your-volunteer-btn" onClick={this.handleClick}>Your Volunteer Work</button>
             </div> )
             
        )
    }
}

export default YourVolunteer


