# WordWise

In this project we will learn about how routing works ,and how we can use the react-router-dom for creating a single page application.

For this project we will be using the v6 of the react-router-dom and see two ways of how we can implement routing.

The react-router-dom comes with few useful components which we can ues to implement routing in our application , these are

- BrowserRouter
- Routes
- Route
- Link
- NavLink.
- Outlet

By defalut when we use the anchor tag to move to different pages , the browser performs a hard reload and reloads the entire page , but if we want to stop this we can use the Link insted of the a tag, the `Link` has an attribute as `to` which is used to specify the path of the desired page.

const [cities , setCities] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(function () {
async function getCities (){
try{
const res = await fetch("http://localhost:8000/cities");
const data = await res.json();

            setCities(data);
        }cathc(error){
            console.error(error);
        }finally{
            setIsLoading(false);
        }
    }
    getCities();

}, []);

## code for App.js

```jsx
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";

import Question from "./components/Error";
import "./index.css";

import { useEffect, useReducer } from "react";
import StartScreen from "./components/StartScreen";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
```

### code for reducer

```jsx

```
