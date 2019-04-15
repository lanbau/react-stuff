import React, { useState, useEffect } from 'react';

export default function Counter () {
    // A Hook is a special function that lets you “hook into” React features.

    /*
    If you write a function component and realize you need to add some state to it, 
    previously you had to convert it to a class. 
    Now you can use a Hook inside the existing function component.
    */
    // Hooks can be initialised with anything, boolean, number, object
    // Left is variable, right is the function
    const [count, incrementCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    /*
    A "side effect" is anything that affects something outside the scope of the function being executed. 
    These can be, say, a network request, which has your code communicating with a third party 
    (and thus making the request, causing logs to be recorded, caches to be saved or updated, 
    all sorts of effects that are outside the function.

    Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 
    */

    /*
     What does useEffect do? By using this Hook, you tell React that your component needs to 
     do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), 
     and call it later after performing the DOM updates. In this effect, we set the document title, 
     but we could also perform data fetching or call some other imperative API.
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                document.title = json.title + fruit
            })

        // If you return something, React will use this when it unmounts. this is called a Cleanup
    })

    return (
        <div>
            {todos.map((item=>{
                return <li>{item.text}</li>
            }))}
            <div>{count} - {fruit} </div>
            <button onClick={() => incrementCount(count + 1)}>Increment</button>
            <button onClick={() => setFruit('orange')}>Update</button>
            <button onClick={() => setTodos(todos.concat([{ text: 'New Hook' }]))}>Add Todo</button>


        </div>
    )
}