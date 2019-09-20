import React from 'react'

class LoginBar extends React.Component {
    handleClick = () => {
        localStorage.clear()
        this.props.redirect('landing')
    }
render(){
    console.log(this.props)
    return(
        <div className="login-bar">
            <h3>You are logged in as: {this.props.username}</h3>
            <button className="logout-btn" onClick={this.handleClick}>Logout</button>
            </div>
    )
}
}

export default LoginBar