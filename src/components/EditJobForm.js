import React from 'react'

class EditJobForm extends React.Component {

    state = {
        organization: '',
        address: '',
        title: '',
        description: '',
        user_id: this.props.editSelected.user_id,
        editJobId: this.props.editSelected.id
    }

    handleXClick = () => {
        this.props.closeEditJobForm()
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleEditSubmit = (e) => {
        e.preventDefault()

        let info = {
            organization: this.state.organization ? this.state.organization : this.props.editSelected.organization,
            address: this.state.address ? this.state.address : this.props.editSelected.address,
            title: this.state.title ? this.state.title : this.props.editSelected.title,
            description: this.state.description ? this.state.description : this.props.editSelected.description,
            user_id: this.props.editSelected.user_id,
            editJobId: this.props.editSelected.id
        }

// console.log(info)
        this.props.handleEditJob(info)
        this.setState({organization:'', address: '', title: '', description: '', user_id: '', editJobId: ''})
    }

    handleDeleteClick = (opptyObj) => {
        // console.log(opptyObj)
        this.props.handleDelete(opptyObj)
    }

    render(){
        // console.log(this.props)
        // console.log(this.state)
        return(
            <div className="search-area">
                <div><span className="closing-x" onClick={this.handleXClick}>𝗫</span></div>
                <h2 className="question">Edit Volunteer Job</h2>
                <br />
                <form className="form" onSubmit={this.handleEditSubmit}>
                <input className="form" onChange={this.handleChange} value={this.state.organization} type="text" placeholder={this.props.editSelected.organization} name="organization"/>
                <br />
                <br />
                <input className="form" onChange={this.handleChange} value={this.state.address} type="text" placeholder={this.props.editSelected.address} name="address"/>
                <br />
                <br />
                <input className="form" onChange={this.handleChange} value={this.state.title} type="text" placeholder={this.props.editSelected.title} name="title"/>
                <br />
                <br />
                <textarea className="form-description" onChange={this.handleChange} value={this.state.description} type="text" placeholder={this.props.editSelected.description} name="description" />
                <br />
                <br />
                <input className="logout-btn" type="submit" value="Edit" />
                <br />
                <br />
                <input className="logout-btn" onClick={() => this.handleDeleteClick(this.props.editSelected)} type="submit" value="Delete" />
                </form>
            </div>
        )
    }
}

export default EditJobForm