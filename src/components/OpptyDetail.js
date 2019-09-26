import React from 'react'

class OpptyDetail extends React.Component {
    render(){
        // console.log(this.props)
        return(
            <div onClick={() => this.props.onClick(this.props.opportunity)}>
                <h4>{this.props.opportunity.organization}</h4>
                <p>{this.props.opportunity.title}/</p>
                <br />
                <p>{this.props.opportunity.address}</p>
                </div>
        )
    }
}

export default OpptyDetail