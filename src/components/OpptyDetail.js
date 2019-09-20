import React from 'react'

class OpptyDetail extends React.Component {
    render(){
        // console.log("Props from OpptyDetail: ", this.props.opportunity)
        return(
            <div>
                <h4>{this.props.opportunity.organization}</h4>
                <h5>{this.props.opportunity.title}/</h5>
                <p>{this.props.opportunity.address}</p>
                </div>
        )
    }
}

export default OpptyDetail