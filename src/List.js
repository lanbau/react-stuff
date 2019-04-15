import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.numbers)
    }
    render () {
        const numbers = this.props.numbers;
        return (
            <ul>
            {
                // If you put a surrounding bracket, you need to put return keyword
                numbers.map((number) => {
                    return <li key={number}>{number}</li>
                })
            }
            </ul>
        )
    }
}
export default List;