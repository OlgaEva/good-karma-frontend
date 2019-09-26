import React from 'react'
// import logo from '../logo.svg'
import YourVolunteer from './YourVolunteer'


class LoginBar extends React.Component {
    handleClick = () => {
        localStorage.clear()
        this.props.redirect('landing')
    }
render(){
    console.log("loginBar's props ", this.props)
    return(
        <div>
           
        <div className="login-bar">
            <h3 className="welcome">You are logged in as: {this.props.username}</h3>
            <h4 className="goal"><em>Your monthly volunteering goal is: {this.props.monthlyGoal} hours</em></h4>
            {/* <div className="star-span"><span role="img">⭐️</span> */}
            {/* <div className="star-span"><img className="star rotate" src="https://media.istockphoto.com/photos/golden-star-isolated-on-white-background-picture-id155359800?k=6&m=155359800&s=612x612&w=0&h=Sz_Dqx9ELolniXdOEobkNw1hGzb7Z1D7UCfWhBgS9vo=" alt="star" /></div> */}
            {/* <h6>You have {this.props.points} good karma points</h6> */}
            {/* </div> */}
            <YourVolunteer favorites={this.props.favorites} pastWork={this.props.pastWork} addToPastWork={this.props.addToPastWork}/>
            <button className="logout-btn" onClick={this.handleClick}>Logout</button>
        </div>
        </div>
    )
}
}

export default LoginBar