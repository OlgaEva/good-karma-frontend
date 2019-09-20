import React from 'react'
import { Grid } from 'semantic-ui-react'
import OpptyDetail from './OpptyDetail'

class SearchResults extends React.Component{
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 4})
        // console.log("I want to see more opportunities!")
    }

    render(){
        // console.log(this.props.opportunities)
        // this.props.opportunities.slice(this.state.counter, this.state.counter + 4).map(oppty => {
        //     console.log("oppty from searchresults: ", oppty)
        // return <OpptyDetail oppty = { oppty } /> })
        
        // const opportunityDetail = this.props.opportunities.slice(0,4).map(oppty => )
        return(
    <div>
  <Grid relaxed columns={4}>
    <Grid.Column>
        <div className="card">
        { this.props.opportunities.slice(this.state.counter, this.state.counter + 1).map(opportunity =>  <OpptyDetail key={opportunity.id} opportunity = { opportunity } /> ) }
         </div>
    </Grid.Column>
    <Grid.Column>
    <div className="card">
    { this.props.opportunities.slice(this.state.counter + 1, this.state.counter + 2).map(opportunity =>  <OpptyDetail key={opportunity.id} opportunity = { opportunity } /> ) }
         </div>
    </Grid.Column>
    <Grid.Column>
    <div className="card">
    { this.props.opportunities.slice(this.state.counter + 2, this.state.counter + 3).map(opportunity =>  <OpptyDetail key={opportunity.id} opportunity = { opportunity } /> ) }
         </div>
    </Grid.Column>
    <Grid.Column>
    <div className="card">
    { this.props.opportunities.slice(this.state.counter + 3, this.state.counter + 4).map(opportunity =>  <OpptyDetail key={opportunity.id} opportunity = { opportunity } /> ) }
         </div>
    </Grid.Column>
  </Grid>
  <br />
  <button className="back-btn" onClick={this.handleClick}>Back</button><button className="more-btn" onClick={this.handleClick}>More</button>
  </div>
)
        }
    }

export default SearchResults