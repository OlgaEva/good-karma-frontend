import React from 'react'
import Header from './Header'
import LoginBar from './LoginBar'
import Search from './Search'

class Profile extends React.Component {
    state = {
        username: ''
    }

    componentDidMount(){
      fetch('http://localhost:3000/profile',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(user => this.setState({username: user.username}))
}

    render() {

        return(
            <div className="page-div">
            <Header />
            <br />
            <LoginBar redirect={this.props.redirect} username={this.state.username}/>
            <br />
            <Search />
            </div>
        )
    }
}

export default Profile