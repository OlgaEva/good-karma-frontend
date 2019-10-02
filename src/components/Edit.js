import React from 'react'

class Edit extends React.Component {

    handleXClick = () => {
        this.props.handleEditXClick()
    }
    
    handleClick = () => {
        this.props.handleEditJobClicked()
    }

    handleEditClick = (job) => {
        this.props.handleJobToEdit(job)
    }
    
    render(){
        const mappedJobs = this.props.user.jobs.map(job => <li className="li" onClick={() => this.handleEditClick(job)} key={job.id}>{job.title}</li>)
        return(
            <div>
            {this.props.editJobClicked ? (              
                <div className='your-volunteer'>
                    <div><span className="closing-x" onClick={this.handleXClick}>𝗫</span></div>               
                    <h5 className="sidebar-h5">Edit Your Job Postings</h5>
                    <ul>
                    {mappedJobs}
                </ul>
                </div>
            ) : (
                <button className="sidebar-btn" onClick={this.handleClick}>Edit Volunteer Job</button>
            )
            }
            </div>
        )
    }
}

export default Edit
