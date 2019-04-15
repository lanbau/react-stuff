import React from 'react';
import Logo from './Logo'
import Clock from './Clock'
import Button from './Button.js'
import List from './List.js'
import Counter from './Counter.js'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "Login",
            numbers: ['1','9','3','4','5']
        }
    }
    componentDidUpdate() {
        console.log('header did update')
    }

    render () {
        return (
            <header className="App-header">
                <Logo logo={this.props.logo} parentFunction={this.props.parentFunction}/>
                <List numbers={this.state.numbers}/>
                <Counter />
                <Clock />
                <p>{ this.props.parentFunction("Calling from child") }</p>
                <Button loginStatus={this.state.login}/>
            </header>
        )
    }
}

export default Header;