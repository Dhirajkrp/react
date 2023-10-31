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

## useParam Hook

we can pass data from one component or link to another using the url params , to implement that there are 3 steps.

1. Add a route with the desired signature or the data you want to pass.
   eg:

```jsx
<Route to ='cities/:id' element = {<City/>}>

```

2. Provide a link which matches this route.

eg:

```jsx
<Link to =`/app/citis/${id}`>
```

Notice that we do not use the : when specifying the link.

3. Accessing the passed data.
   To access the data, in this case the id , we use the useParam() hook which is provided by the react-router-dom.

eg:

```jsx
function City() {
  const { id } = useParas();
}
```

## Query String

This is rather simple and does not require any additional route setup.
we can directly pass the query parameters into any link by using the ? symbol , so the syntax is

```
url?v1=x&&v2=y&&v2=z
```

where url is the actual path ,which is followed by the question mark , then the v1 ,v2, v3 are the variable names followed by their values .

Notice we use && to separate the variables.

eg:

```jsx
<Link to =`/app/citis/${id}?lat=${position.lat}&&lng=${position.lng}`>
```

## useSearchParams() hook

This hook is similar to the useState hook and it passes two values , first the object containing all the query Parameters and second a setter function which can be used to change the query parameters in the application.

```jsx
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
}
```

Notice how we use the get function on the state to fetch the query parameters.
and not destructure the state like we do in the uesState hook.

To change the search params we use the setter method and pass a new object as the new query parameter.

eg:

```jsx
setSearchParams({ lat: 23, lng: 50 });
```

### useNavigate() hook

This is another hook provided by the react router dom which enables us to move between routes programatically.

```jsx
const navigate = usenavigate();
```
