import React from 'react'

class LoginBar extends React.Component {
    handleClick = () => {
        localStorage.clear()
        this.props.redirect('landing')
    }

    whatToRender = () => {
        if(this.props.user.admin){
            return <h5 className="gkpoints">You have <span className="larger">∞ </span> Good Karma points</h5>
        } else {
            return <h5 className="gkpoints">You have {this.props.points} Good Karma points</h5>
        }
    }

    whetherToRender = () => {
        if(this.props.user.admin) {
            return <h4 className="goal"><em>"To serve others and to do good." - Aristotle</em></h4>
        } else {
            return <h4 className="goal"><em>Your monthly volunteering goal is: {this.props.monthlyGoal} hours</em></h4>
        }
    }

render(){
    return(
        <div>       
        <div className="login-bar">
            <h3 className="welcome">You are logged in as: {this.props.username}</h3>
            {this.whetherToRender()}
            <div className="star-span rotate"><span role="img">⭐️</span></div>
            {this.whatToRender()}
            <button className="logout-btn" onClick={this.handleClick}>Logout</button>
        </div>
        </div>
    )
}
}

export default LoginBar