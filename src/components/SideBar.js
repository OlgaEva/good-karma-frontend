import React from 'react'
import YourVolunteer from './YourVolunteer'
import Create from './Create'
import Edit from './Edit'

class SideBar extends React.Component {
    render(){
        // console.log(this.props.user.admin)
        return(
            <div className="sidebar">
                <YourVolunteer favorites={this.props.favorites} pastWork={this.props.pastWork} addToPastWork={this.props.addToPastWork}/>
                <br />
                <br />
                <br />
                { this.props.user.admin ? (
                    <Create newJobClicked={this.props.handleNewJobClicked}/>
                ) : null }
                <br />
                <br />
                <br />
                { this.props.user.admin ? (
                    <Edit editJobClicked={this.props.handleEditJobClicked}/>
                ) : null }

            </div>
        )
    }
}

export default SideBar