import React from 'react'

class NewJobForm extends React.Component {

    state = {
        organization: '',
        address: '',
        title: '',
        description: ''
    }

    handleXClick = () => {
        this.props.closeNewJobs()
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddNewJob(this.state)
        this.setState({organization:'', address: '', title: '', description: ''})
    }

    render(){
        console.log(this.state)
        return(
            <div className="search-area">
                <div><span className="closing-x" onClick={this.handleXClick}>𝗫</span></div>
                <h2 className="question">Post A New Volunteer Job</h2>
                <br />
                <form className="form" onSubmit={this.handleSubmit}>
                <input className="form" onChange={this.handleChange} value={this.state.organization} type="text" placeholder="Organization Name"  name="organization"/>
                <br />
                <br />
                <input className="form" onChange={this.handleChange} value={this.state.address} type="text" placeholder="City, State" name="address"/>
                <br />
                <br />
                <input className="form" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Job Title" name="title"/>
                <br />
                <br />
                <textarea className="form-description" onChange={this.handleChange} value={this.state.description} type="text" placeholder="Job Description" name="description" />
                <br />
                <br />
                <input className="logout-btn" type="submit" value="Create" />
                </form>
            </div>
        )
    }
}

export default NewJobForm