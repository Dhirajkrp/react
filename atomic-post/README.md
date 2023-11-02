# Atomic - posts

The goal of this project is to learn about the context api and build a simple application to implement it.

In this we will see what are the advantages of using the context api, why should we consider using the context api and what are the best practices of using it.

To use the context api there are 3 main steps.

1. Defining the context: For this we use the createContext();

eg:

```jsx
const PostsContext = createContext();
```

2. Providing values to the context.
   once we create the context ,we then provide some values to the cotext.

for that we use the Provider pattern.

```jsx

<PostsContext.proveider  value = {{
   state1 = value1,
   state2 = value2,
   state3 = value3 ,
   ...
}}>

```

3. consuming the context , for this we use the useContext hook provided by react.
   and pass the context we just created as the parameter.

```jsx
const data = useContext(PostsContext);
```

Notice that we pass the complete name of the context , and not something like PostsContext.Consumer or something like that.

we can also use destructuring to access specific states from the context.

```jsx
const { state1 } = useContext(PostsContext);
```

### Best Practices:

- It is always better to use context, when we have to share the state in nested component tree to avoid prop drilling.

- Always try to group the related states in one context.
  eg the PostsContext can have state like , posts , addPost , deletePost , etc.
