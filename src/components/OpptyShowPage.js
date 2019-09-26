import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class OpptyShowPage extends React.Component {

    handleBackClick = () => {
        this.props.handleBackToSearchResults()
    }

    handleClick = (opptyObj) => {
      console.log(opptyObj, this.props.favorites)
      if(!this.props.favorites.includes(opptyObj)){
      this.props.addToFavorites(opptyObj)
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
