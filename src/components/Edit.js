import React from 'react'

class Edit extends React.Component {
    
    handleClick = () => {
        this.props.editJobClicked()
    }
    
    render(){
        return(
            <div className="Edit">
                <button className="your-volunteer-btn" onClick={this.handleClick}>Edit Volunteer Job</button>
            </div>
        )
    }

}

export default Edit