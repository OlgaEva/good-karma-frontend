import React from 'react'

class LoginBar extends React.Component {
    handleClick = () => {
        localStorage.clear()
        this.props.redirect('landing')
    }
render(){
    // console.log("loginBar's props ", this.props)
    return(
        <div>       
        <div className="login-bar">
            <h3 className="welcome">You are logged in as: {this.props.username}</h3>
            <h4 className="goal"><em>Your monthly volunteering goal is: {this.props.monthlyGoal} hours</em></h4>
            <div className="star-span rotate"><span role="img">⭐️</span></div>
            <h5 className="gkpoints">You have {this.props.points} Good Karma points</h5>
            <button className="logout-btn" onClick={this.handleClick}>Logout</button>
        </div>
        </div>
    )
}
}

export default LoginBar