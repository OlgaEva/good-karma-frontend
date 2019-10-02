import React from 'react'

class Favorites extends React.Component {
    handleClick = () => {
        this.props.handleVolunteerClick()
    }

    handleOpptyClick = (fav) => {
        this.props.addToPastWork(fav)
    }

    handleMessagingClick = (fav) => {
        // console.log(fav)
        // console.log("I'd like to message the owner of this job")
        this.props.handleMessageClick(fav)
        this.props.sendingMsg()
    }

    render() {
        // console.log(this.props)
        const favoritesMapped = this.props.favorites.map(fav => (<div><li className="li" onClick={() => this.handleOpptyClick(fav)} key={fav.id}>{fav.organization}</li><span onClick={() => this.handleMessagingClick(fav)}>📨</span></div>))
        const pastWorkMapped = this.props.pastWork.map(pastW => (<li className="li" key={pastW.id}>{pastW.organization}</li>))
        return(
            <div className="your-volunteer">
                <div><span className="closing-x" onClick={this.handleClick}>𝗫</span></div>
                <h5>Favorite Volunteer Ops:</h5>
                <ul>
                {favoritesMapped}
                </ul>
                <h5>Past Volunteer Activity:</h5>
                <ul>
                {pastWorkMapped}
                </ul>
            </div>
        )
    }
}

export default Favorites