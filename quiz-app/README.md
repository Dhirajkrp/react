# Quiz app

The main purpose of this project is to practice the useReducer hook and to understand how we can manage more complex states in our application in a single place.

The useReducer works similar to the useState hook and takes two parameters.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Instead of defining different states we can have an object called the initialState which stores all the states in one place , similar to how it works in the class components.

eg:

const initialState = {
count: 0,
step: 1,
}

The above object has two states stored in it.

To manage the set() calls we use the reducer , similar to the initialSate object which handles all the states , the reducer method handles all the actions.

the reducer method has access to two parameters , namely

1. state : this defines the current state of the application.
2. action: this is an object which generally has two attributes ,

- type : this defines the type of the action
- payload : this stores any incomming data for the action.

eg:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setStep":
      return { ...state, step: action.payload };
  }
}
```

In the above example we have 3 actions ,

1. Increment : this increases the current count by step (initially it is 1).
2. Decrement : this decreases the current count by step (initially it is 1).
3. setStep : this changes the step value , for the increment and decrement.

Note: we have to return the new state from the reducer function.

## why useReducer :

sometimes there are many state in a component and there are multiple state updates regarding those states , so it not ideal to use the useState for each and every state in the component and as the component becomes more complex the state updates becomes difficult to manage.

useReducer on the other hand keeps all the states in a single place and keeps all the state updates in one function , this helps to organize the code better and also the pass state bettween different components easier.

There are many times when an update to one of the state leads to other updates and thus it can get difficult to keep track of all the state updates if they are all at different places.

Since states are immutable in react , the reducer to not allowed to change it , and also since this is a pure function it should not cause any side effects thus instead of changing the state , it simply returns a new and updated state.
