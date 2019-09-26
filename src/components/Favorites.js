import React from 'react'


class Favorites extends React.Component {
    handleClick = () => {
        this.props.handleVolunteerClick()
    }

    handleOpptyClick = (fav) => {
        // console.log(fav)
        this.props.addToPastWork(fav)
    }

    render() {
        const favoritesMapped = this.props.favorites.map(fav => (<li onClick={() => this.handleOpptyClick(fav)} key={fav.id}>{fav.organization}</li>))
        const pastWorkMapped = this.props.pastWork.map(pastW => (<li key={pastW.id}>{pastW.organization}</li>))
        return(
            <div className="your-volunteer">
                <div><span className="closing-x" onClick={this.handleClick}>𝗫</span></div>
                <h4>Your Favorite Volunteer Ops:</h4>
                <ul>
                {favoritesMapped}
                </ul>
                <h4>Your Past Volunteer Activity:</h4>
                <ul>
                {pastWorkMapped}
                </ul>
            </div>
    
        )
    }
}

export default Favorites