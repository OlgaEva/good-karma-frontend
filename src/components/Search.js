import React from 'react'
import SearchResults from './SearchResults'

class Search extends React.Component {
    state = {
        searchTerm: '',
        opportunities: [],
        searchSubmitted: false
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => { 
            this.setState({opportunities:data, searchSubmitted: true})
    })
}

    render(){

        const filteredOpportunities = this.state.opportunities.filter(oppty => oppty.address.includes(this.state.searchTerm))
    
        return(
            <div className="search-area">
            <h2>Where would you like to volunteer?</h2>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Search for opportunities" />
            <input type="submit" value="Search" />
            </form>
            <br/>
            
            {this.state.searchSubmitted ? (
                <SearchResults handleSubmit={this.handleSubmit} opportunities={filteredOpportunities}/>
            ) : null }
            
            </div>
        )
            }
    }


export default Search