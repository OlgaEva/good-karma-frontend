import React from 'react'
import { Grid } from 'semantic-ui-react'
import OpptyDetail from './OpptyDetail'
import OpptyShowPage from './OpptyShowPage'

class SearchResults extends React.Component{
    state = {
        counter: 0,
        cardClicked: false,
        whichCard: {}
    }

    handleMoreClick = () => {
        if(this.state.counter >= this.props.opportunities.length - 4) {
        }
    else{
        this.setState({counter: this.state.counter + 4})
    }
}

    handleBackClick = () => {
        if(this.state.counter === 0) {       
        }
        else{
            this.setState({counter: this.state.counter - 4})
        }
    }

    showDetails = (cardObj) => {
        this.setState({cardClicked: !this.state.cardClicked, whichCard: cardObj})
    }

    handleBackToSearchResults = () => {
        this.setState({cardClicked: !this.state.cardClicked})
    }

    resetCounter = () => {
        if(this.props.searchSubmitted){
            this.setState({counter: this.state.counter - this.state.counter})     
        } else {
        }
    }


    render(){
        // console.log("the counter on search results ", this.state.counter)
        // console.log("search results props ", this.props)
        return(
            this.state.cardClicked ? (
            <OpptyShowPage favorites={this.props.favorites} addToFavorites={this.props.addToFavorites} key={ this.state.whichCard.id } opportunity = { this.state.whichCard } handleBackToSearchResults={this.handleBackToSearchResults} resetCounter={this.resetCounter}/> 
           ) : (
               <div>
  <Grid relaxed columns={4}>
    <Grid.Column>
        <div  className="card">
        { this.props.opportunities.slice(this.state.counter, this.state.counter + 1).map(opportunity =>  <OpptyDetail onClick={this.showDetails} key={opportunity.id} opportunity = { opportunity } /> ) }
         </div>
    </Grid.Column>
    {this.props.opportunities.length - this.state.counter === 1 ? (null) : (
    <Grid.Column>
        <div className="card">
        { this.props.opportunities.slice(this.state.counter + 1, this.state.counter + 2).map(opportunity =>  <OpptyDetail onClick={this.showDetails} key={opportunity.id} opportunity = { opportunity } /> ) }
            </div>
    </Grid.Column>
    )
    }
    {this.props.opportunities.length - this.state.counter === 1 || this.props.opportunities.length - this.state.counter === 2 ? (null) : (
    <Grid.Column>
        <div className="card">
        { this.props.opportunities.slice(this.state.counter + 2, this.state.counter + 3).map(opportunity =>  <OpptyDetail onClick={this.showDetails} key={opportunity.id} opportunity = { opportunity } /> ) }
            </div>
    </Grid.Column>
    )
    }
    {this.props.opportunities.length - this.state.counter === 1 || this.props.opportunities.length - this.state.counter === 2 || this.props.opportunities.length - this.state.counter === 3 ? (null) : (
    <Grid.Column>
        <div className="card">
        { this.props.opportunities.slice(this.state.counter + 3, this.state.counter + 4).map(opportunity =>  <OpptyDetail onClick={this.showDetails} key={opportunity.id} opportunity = { opportunity } /> ) }
            </div>
    </Grid.Column>
    )
    }
  </Grid>
  <br />
  <button className="back-btn" onClick={this.handleBackClick}>⬅  Back</button><button className="more-btn" onClick={this.handleMoreClick}>More ➡</button>
  </div> 
            )
           
        )
    }
}

export default SearchResults