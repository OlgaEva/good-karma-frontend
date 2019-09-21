import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class OpptyShowPage extends React.Component {
    handleBackClick = () => {
        this.props.handleBackToSearchResults()
    }
    render() {
    
        return(
            <div>
  <Container className="details-container" text>
    <Header as='h3'>{this.props.opportunity.organization}</Header>
    <h4>{this.props.opportunity.title}</h4>
    <p>
      {this.props.opportunity.description}
    </p>
  </Container>
  <button className="back-btn" onClick={this.handleBackClick}>⬅  Back</button>
  </div>
    )
  }
}

export default OpptyShowPage
