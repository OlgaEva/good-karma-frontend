import React from 'react'
import SearchResults from './SearchResults'

class Search extends React.Component {
    state = {
        searchTerm: '',
        opportunities: [],
        searchSubmitted: false
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value, searchSubmitted: false})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => { 
            this.setState({opportunities:data, searchSubmitted: true})
    })
}

    whatToRender = () => {
        if(this.props.user.admin){
            return <h2 className="question">See all volunteer opportunities</h2>
        } else {
            return <h2 className="question">Where would you like to volunteer?</h2>
        }
    }

    render(){
        const filteredOpportunities = this.state.opportunities.filter(oppty => oppty.address.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return(
            <div className="search-area">   
            {this.whatToRender()}
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Search for opportunities" />
            <input type="submit" value="Search" />
            </form>
            <br/>
            
            {this.state.searchSubmitted ? (
                <SearchResults favorites={this.props.favorites} addToFavorites={this.props.addToFavorites} handleSubmit={this.handleSubmit} opportunities={filteredOpportunities} searchSubmitted={this.state.searchSubmitted}/>
            ) : null }
            
            </div>
        )
            }
    }


export default Search