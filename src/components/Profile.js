import React from 'react'
import Header from './Header'
import LoginBar from './LoginBar'
import Search from './Search'
import SideBar from './SideBar'
import NewJobForm from './NewJobForm'

class Profile extends React.Component {
    state = {
        user: {},
        username: '',
        userId: '',
        favorites: [],
        monthlyGoal: '',
        points: '',
        pastWork: [],
        newJobClicked: false,
        editJobClicked: false
    }

    componentDidMount(){
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(user => {
        console.log(user.admin)
        this.setState({
            user: user,
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
    this.setState({pastWork: [...this.state.pastWork, opptyObj], points: this.state.points + 25})
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

    handleNewJobClicked = () => {
        this.setState({newJobClicked: true})
    }

    closeNewJobs = () => {
        this.setState({newJobClicked: false})
    }

    handleAddNewJob = (newJobOppty) => {
        console.log(newJobOppty.organization)
        const newJob = {
            organization: newJobOppty.organization,
            address: newJobOppty.address,
            title: newJobOppty.title,
            description: newJobOppty.description
        }

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
    }
    
    handleEditJobClicked = () => {
        console.log("editing this job....")
        this.setState({editJobClicked: true})
    }

    render() {
        // console.log("profile props ", user)
        console.log("profile's state editClicked? ", this.state.editJobClicked)
        // const doneFavs = this.state.favorites.filter(fav => fav.done === true)
    
        return(
            <div className="page-div">
            <Header />
            <br />
            <LoginBar addToPastWork={this.addToPastWork} pastWork={this.state.pastWork} points={this.state.points} monthlyGoal={this.state.monthlyGoal} favorites={this.state.favorites} redirect={this.props.redirect} username={this.state.username}/>
            <br />
            {this.state.newJobClicked ? ( 
            <NewJobForm handleAddNewJob={this.handleAddNewJob} closeNewJobs={this.closeNewJobs}/> ) :
            <Search favorites={this.state.favorites} addToFavorites={this.addToFavorites}/>
            }
            <SideBar editJobClick={this.state.editJobClicked} handleEditJobClicked={this.handleEditJobClicked} handleNewJobClicked={this.handleNewJobClicked} user={this.state.user} addToPastWork={this.addToPastWork} pastWork={this.state.pastWork} points={this.state.points} monthlyGoal={this.state.monthlyGoal} favorites={this.state.favorites} redirect={this.props.redirect} username={this.state.username}/> 
            </div>
        )
    }
}

export default Profile