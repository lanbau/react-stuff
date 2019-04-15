import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    /*
    In applications with many components, 
    it’s very important to free up resources taken by the components when they are destroyed.

    */

    // component output has been rendered
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    componentDidUpdate() {
      console.log('clock did update')
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
export default Clock;
  