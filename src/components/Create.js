import React from 'react'

class Create extends React.Component {
    handleClick = () => {
        this.props.newJobClicked()
    }

    render(){
        return(
            <div className="create">
                <button className="sidebar-btn" onClick={this.handleClick}>Post New Volunteer Job</button>
            </div>
        )
    }
}
export default Create