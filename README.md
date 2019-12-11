# Beginning-with-redux

**Overall Idea of Redux**

```
In react we have components whereby each component  uniquely has its state..


However in Large Projects it becomes tedious managing each individual component  with its state and this is the idea of redux.

And this is where any state manager comes in.


Instead of component level state you get application Level State as a one way data flow..


```

**REDUX FLOW**

```
State  is just a javascript object with values in it..


Here is an overview of the Major flow in react



(a)Store  ->This is your actual level state.


(b)View ->these are  your components which receive data from your state.


(c)Action Creator ->Components have the ability to instantiate action creators each when you submit via a button and which will in turn affect the state.

And this is where the reducers are called .



(d)Reducers -> These are functions that will return the new state thus components react accordingly.(triggered by any change of state)

```

**ThisProject**

```
App has a post component which  will fetch posts from a fake JSON Place Holder API..

We also have a form component which is a very different component from the posts lists but can add
data to the posts.

```

**Commands**

```
(a)npx create-react-app .

(b)App sudo saving permissions-> sudo chmod -R 777 *

(c)Component will mount is a lifecycle method that runs when the component does mount.


(d)fetch and axios can be used to make requests to external apis.Both are asynchronus and return promises.


(e)Remeber that when you are looping through so as to access data you need a unique
key otherwise react will throw an error.






```

**JSX**

Jsx refers to rendering javascript code in the inside of HTML

```
render() {
    //so as to access the state
    const postItems = this.state.posts.map(post => {
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>;
    });
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }

```

```
Other methods are written just before return()

```

```
In the return is where the HTML CODE IS APPENDED WHEN USING REACT...
MY THINK for the render method refers to what is now happening to the component.
this.setState react method!
JSX-JAVASCRIPT INSIDE OF YOUR HTML CODE!
APP.JS IS THE MAIN ENTRY POINT OF THE APPLICATION!

```

**React remember points**

```
You use props when transferring state from one component to the net.

Redux simplifies the work by introducing application level state.

Redux brings in actions example when we make a submit to a form thats an action.Same as when we make a fetch.

Reducers respons to the action bringing in the new state.


```

**Installing Redux**

```
(a)npm i redux react-redux redux-thunk

react-redux-links react to redux
redux-thunk enables the making of asynchronous calls.
```

```
Provider is the glue class in redux impoted in the main app.js.
Takes in the store which is the state

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

action Have an effect to the reducers..reducers have an effect to the state or the store.

You combine the reducers eg post reducer can be combined with the other reducers to return the final state.

The root reducer is the sum of all the reducers.
```

```
Postreducer in this project evaluates the actions which normally are created as constants in the actions folder.

```

```
The reducer return the state from the actions..
And thus can be mounted unto the component props..


```

```
Adding the redux extension as an enhancer in store.

This redux chrome extension maybe well used
to view the application Level State.
Dispatch is used since data is being passed to the reducer from the Action.

```

**KEY-POINT**

```
How an action passes data to the reducer and how after being passed to
 the reducer is passed to the Component.

```

**Connect function**

```
Plays a very important function in mapping data from the reducer and now to
the new component.

```

**Notes**

```
By Mbugua Caleb
```
