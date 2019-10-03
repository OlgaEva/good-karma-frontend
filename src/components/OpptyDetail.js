import React from 'react'

class OpptyDetail extends React.Component {
    render(){
        return(
            <div onClick={() => this.props.onClick(this.props.opportunity)}>
                <h4>{this.props.opportunity.organization}</h4>
                <p>{this.props.opportunity.title}/</p>     
                </div>
        )
    }
}

export default OpptyDetail