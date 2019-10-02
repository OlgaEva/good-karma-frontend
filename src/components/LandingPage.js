import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'

class LandingPage extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()      
    }

  render() {
    return(
        <div className="page-div">
        <Header />
        <br />
        <LoginForm redirect={this.props.redirect}/>
        </div>
        )
    }
}

export default LandingPage