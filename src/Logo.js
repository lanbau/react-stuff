import React from 'react';
class Logo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <img 
                src={this.props.logo} 
                className="App-logo" 
                alt={this.props.parentFunction('Calling From Logo.js')} 
            />
        )
    }
}
export default Logo;