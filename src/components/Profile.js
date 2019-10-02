import React from 'react'
import Header from './Header'
import LoginBar from './LoginBar'
import Search from './Search'
import SideBar from './SideBar'
import NewJobForm from './NewJobForm'
import EditJobForm from './EditJobForm'

class Profile extends React.Component {
    state = {
        user: {},
        username: '',
        userId: '',
        favorites: [],
        monthlyGoal: '',
        points: '',
        pastWork: [],
        componentToRender: 'search',
        newJobClicked: false,
        editJobClicked: false,
        editSelected: {}
    }

    componentDidMount(){
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(user => {
        console.log(user);
        
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
        this.setState({newJobClicked: true, componentToRender: 'newJob', editJobClicked: false})
    }

    closeNewJobs = () => {
        this.setState({newJobClicked: false, componentToRender: 'search'})
    }

    handleAddNewJob = (newJobOppty) => {
        const newJob = {
            organization: newJobOppty.organization,
            address: newJobOppty.address,
            title: newJobOppty.title,
            description: newJobOppty.description,
            user_id: newJobOppty.user_id
        }

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newJob)
        }).then(res => res.json())
        .then(newJob => {
            this.setState({user: {
            ...this.state.user, 
                jobs: [...this.state.user.jobs, newJob]
        }})})
    }
    
    handleEditJobClicked = () => {
        this.setState({editJobClicked: true})
    }

    handleEditXClick = () => {
        this.setState({editJobClicked: false})
    }

    closeEditJobForm = () => {
        this.setState({editJobClicked: false, componentToRender: 'search'})
    }

    handleJobToEdit = (job) => {
        this.setState({editSelected: job, componentToRender: 'editJob'})
    }

    handleEditJob = (jobOppty) => {
        
        
        const editedJob = {
            organization: jobOppty.organization,
            address: jobOppty.address,
            title: jobOppty.title,
            description: jobOppty.description,
            user_id: jobOppty.user_id
        }

        fetch(`http://localhost:3000/jobs/${jobOppty.editJobId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(editedJob)
        }).then(res => res.json())
        .then(job => {

            let jobsFiltered = this.state.user.jobs.map((oppty) => {
                if(job.id !== oppty.id){
                    return oppty
                } else {
                    return job
                }
             })

            this.setState({user: {
                ...this.state.user,
                jobs: jobsFiltered
            }})
        })
    }

    handleDelete = (jobOppty) => {
        fetch(`http://localhost:3000/jobs/${jobOppty.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(job => {
            let filteredJobs = this.state.user.jobs.filter((oppty) => oppty.id !== jobOppty.id) 

                this.setState({componentToRender: 'search', user: {
                    ...this.state.user,
                    jobs: filteredJobs
                }})
            })
        }

    whatToRender = () => {
        if(this.state.componentToRender === 'newJob'){
            return <NewJobForm 
                userId={this.state.user.id} 
                handleAddNewJob={this.handleAddNewJob} 
                closeNewJobs={this.closeNewJobs} />
        } else if(this.state.componentToRender === 'editJob'){
            return <EditJobForm 
                handleDelete={this.handleDelete}
                handleEditXClick={this.handleEditXClick} 
                handleEditJob={this.handleEditJob} 
                closeEditJobForm={this.closeEditJobForm} 
                editSelected={this.state.editSelected}/>
         } else {
            return <Search 
                user={this.state.user}
                favorites={this.state.favorites} 
                addToFavorites={this.addToFavorites} />
        }
    }

    render() {
        // console.log(this.state)
        return(
            <div className="page-div">
            <Header />
            <br />
            <LoginBar 
                addToPastWork={this.addToPastWork} 
                pastWork={this.state.pastWork} 
                points={this.state.points} 
                monthlyGoal={this.state.monthlyGoal} 
                favorites={this.state.favorites} 
                redirect={this.props.redirect} 
                username={this.state.username}/>
            <br />
            {this.whatToRender()}
            
            <SideBar 
                handleJobToEdit={this.handleJobToEdit} 
                handleEditXClick={this.handleEditXClick} 
                editJobClicked={this.state.editJobClicked} 
                handleEditJobClicked={this.handleEditJobClicked} 
                handleNewJobClicked={this.handleNewJobClicked} 
                user={this.state.user} 
                addToPastWork={this.addToPastWork} 
                pastWork={this.state.pastWork} 
                points={this.state.points} 
                monthlyGoal={this.state.monthlyGoal} 
                favorites={this.state.favorites} 
                redirect={this.props.redirect} 
                username={this.state.username}/> 
            <br />          
      </div>
    )
  }
}

export default Profile

