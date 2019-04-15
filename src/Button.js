import React from 'react';

class Button extends React.Component {
    handleClick = (event) => {
        console.log(event)
        alert('handle click')
    }
    render () {
        return (
            <button onClick={(event) => this.handleClick(event) }>{this.props.loginStatus}</button>
        )
    }
}

export default Button;