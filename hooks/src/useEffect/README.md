## useEffect

- what are effects and side effects
- how are they different from the regular state changes.
- what is the need of the useEffect hook?

The effect hook lets you perform side effects in function components , it is a close replacement for **componentDidMount** **componentDidUpdate** and **componentWillUnmount**.

The useEffect hook is declared inside the functional component and thus it has access to all tthe states and methods of that functional component.

The useEffect takes a function as a paremeter and executes that function every time the component is rendered , however this might not be effecient and thus we can pass a dependency array as a second parameter to the useEffect function to specify when do we want to excute the function, it keeps tracks of the dependencies and everytime there is a change in the values of the dependencies , the callback method is executed.

## Steps:

1. import uesEffect from react
2. pass a function to the useEffect which you want to execute on every render of the component .

```javascript

import {useState} from 'react';

function StateExample {
    const [count, setCount]= useState(0);

    return (
        <div>
            <button onClick ={()=> setState(prev => prev+1)}> Count {count} </button>
        </div>
    )
}

export default StateExample

```
