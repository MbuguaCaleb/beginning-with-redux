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
