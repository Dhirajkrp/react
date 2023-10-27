# React Hooks

- Introduction
- we cannot use hooks in inside a class.
- hooks provides a way to manage state in functional components and hook into the other life cycle events of the class components as well.
- Allows to use state logic .

Reasons to use hooks:

1. Understanding this keyword with the classes can be difficult.
2. The classes does not minify very well and can cause difficulties in hot reloading.

3. When using the class components there is no particular way of reusing the stateful components and requiers difficult refactoring when we want to use higher order components.
4. There is a need to share staful logic in a better way, by using hooks we can mange the state without altering the heirarchy of the components.

5. Related code is not organized in one place , and are divided into various life cycle models.

## Resources:

learn more about scopes and clousers to better understand hooks.

[atl](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)

[alt](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)

### History

React was introduced 16.8 .

### useState:

This hook allows us to manage state within our functional components, internally this relies on the clousers which is a fundamental concept of javascript.

Lets see some high level code examples of how useState is implemented.

```javascript

function (initialVal){
    let _val = initialVal;

    const state(){
        return _val;
    }
    const setState = (newVal)=>{
        _val = newVal;
    }
    return [state, setState];
}


const [count , setCount] = useState(0);

console.log(count());
setCount(2);
console.log(count());
```

we can also use some methods to mimic the dom events

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  return {
    click: () => setCount(count() + 1),
    render: () => console.log(`Count: ${count()}`),
  };
}

const myCounter = Counter();
myCounter.render(); // count:0
myCounter.click();
myCounter.render(); // count:1javascript
```

however , if we want to mimic the actual useState , we need to return a value for the state and not a function.

but if we try to do that, what will happen?

```javascript

function useState (initialVal){
    let _val = initialVal;

    const setVal (newVal){
        _val = newVal;
    }

    return [_val , setVal];
}

const [name,setName] = useState("dhiraj");

console.log(name);// dhiraj
setName("ram");
console.log(name); // still dhiraj

```

This is also called stale closure , where we just get the initial value from the closure and we cannot change the value now as this is not a function which returns a value but simply a variable .

for more info , see the article below.
[alt](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)

## Rules for hooks:

1. only define hooks at the top level , hooks does not work inside loops or conditions.
2. Only call hooks from react functions , and not just any other js function.
3. Calling the set method does not result to immediate change in the current value , it means that the value will be updated in the next render.

for example.

```javaScript

for(let i=0; i < 5 ;i++){
    setCount(count +1);
}


```

assuming that the value of the count is initially 0, the above 5 set method call is interpreated as

```javascript
setCount(0 + 1);
setCount(0 + 1);
setCount(0 + 1);
setCount(0 + 1);
setCount(0 + 1);
```

Thus whenever we want to change the value which is depending on the previous value ,we do it by using the following syntax.

```javaScript


setCount(prevCount => prevCount +1);

```

### useState with objects:

when we have an object as our state , and we want to update few properties of the object we need to using the spread operator to preserve the other values of the object and then change the required attribute.
