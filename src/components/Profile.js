import React from 'react'
import Header from './Header'
import LoginBar from './LoginBar'
import Search from './Search'

class Profile extends React.Component {
    state = {
        username: '',
        userId: '',
        favorites: [],
        monthlyGoal: '',
        points: '',
        pastWork: []
    }

    componentDidMount(){
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(user => {
        console.log(user.favorites)
        this.setState({
            username: user.username, 
            userId: user.id, 
            favorites: user.favorites.filter(fav => fav.done === false), 
            monthlyGoal: user.monthly_goal, 
            points: user.points,
            pastWork: user.favorites.filter(fav => fav.done === true)
        })
    })
}

addToFavorites = (opptyObj) => {
    const favOppty = {
        user_id: this.state.userId,
        job_id: opptyObj.id,
        organization: opptyObj.organization,
        title: opptyObj.title,
        done: false
    }
 
    fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(favOppty)
    })
    .then(res => res.json())
    .then(favoriteFromServer => this.setState({favorites: [...this.state.favorites, favoriteFromServer]}))
    alert("You added a favorite to your list!")
}

addToPastWork = (opptyObj) => {
    // console.log(opptyObj)
    this.setState({pastWork: [...this.state.pastWork, opptyObj]})
    const filteredFavs = this.state.favorites.filter(fav => fav.id !== opptyObj.id)
    this.setState({ favorites: filteredFavs })

    fetch(`http://localhost:3000/favorites/${opptyObj.id})`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            done: true
        })
      })
    }

    render() {
        // console.log("profile props ", this.props)
        console.log("profile's state ", this.state)
        // const doneFavs = this.state.favorites.filter(fav => fav.done === true)
    
        return(
            <div className="page-div">
            <Header />
            <br />
            <LoginBar addToPastWork={this.addToPastWork} pastWork={this.state.pastWork} points={this.state.points} monthlyGoal={this.state.monthlyGoal} favorites={this.state.favorites} redirect={this.props.redirect} username={this.state.username}/>
            <br />
            <Search favorites={this.state.favorites} addToFavorites={this.addToFavorites}/>
            </div>
        )
    }
}

export default Profile