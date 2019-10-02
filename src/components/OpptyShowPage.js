import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class OpptyShowPage extends React.Component {

    handleBackClick = () => {
        this.props.handleBackToSearchResults()
    }

    handleClick = (opptyObj) => {
      // console.log(opptyObj.id, this.props.favorites)

      let opportunity = this.props.favorites.find(oppty => {
        return oppty.job_id === opptyObj.id
      })

      if(!opportunity){
      this.props.addToFavorites(opptyObj)
    } else{
      alert("You already have this in your favorites")
    }
  }

    render() {
    // console.log(this.props)
        return(
            <div>
  <Container className="details-container" text>
    <Header as='h3'>{this.props.opportunity.organization}</Header>
    <h4>{this.props.opportunity.title}</h4>
    <p>
      {this.props.opportunity.description}
    </p>
    <div onClick={() => this.handleClick(this.props.opportunity)}>Add to Favorites: 💙</div>
  </Container>
  <button className="back-btn" onClick={this.handleBackClick}>⬅  Back</button>
  </div>
    )
  }
}

export default OpptyShowPage
