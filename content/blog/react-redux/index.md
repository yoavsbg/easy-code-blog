---
title: React Redux
date: "2022-12-19T22:12:03.284Z"
description: "Understand React redux"
---
<center>
<img src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt='Redux Logo' width='150'>
</center>


[Redux](https://react-redux.js.org/) is a popular state management tool that can be used in conjunction with React to manage the state of an application. It works by implementing a unidirectional data flow, in which actions are dispatched to a central store, which then updates the state of the application and sends the updated state back to the components that need it.


Here's a high-level overview of how Redux works with React:

1. The user interacts with the React components in the application, triggering an action to be dispatched.

2. The action is a JavaScript object that describes the change that needs to be made to the application state. It is sent to the Redux store.

3. The Redux store receives the action and uses a reducer function to update the state of the application based on the action. The reducer function is a pure function that takes in the current state and the action, and returns the updated state.

4. The updated state is sent back to the React components, which use the new state to re-render and display the updated data to the user.

Using Redux with React can help you manage the state of your application in a centralized and predictable way, making it easier to reason about and debug your code. It also enforces a strict unidirectional data flow, which can make your application easier to test and maintain.

##### Before we start
Add the Redux Toolkit and React Redux packages to your project:
```shell
npm install @reduxjs/toolkit react-redux
```

#### Some code to understand:
In this example, I will show how to use Redux on a counter application. For that, we need the following:
1. **createSlice()** is a function that get a name, initial state and reducers.
```ts
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'easyCounter',
    initialState: {
        counterValue: 0
    },
    reducers: {
        incrementValue: (state) => { 
            state.counterValue++
        },
        decrementValue: (state) => {
            state.counterValue--
        },
        addByAmount: (state, action) => {
            state.counterValue += action.payload
        }
    }
});

export const { incrementValue, decrementValue, addByAmount } = counterSlice.actions;
export const selectCount = (state) => state.easyCounter.counterValue;

export default counterSlice.reducer;

```

2. **configureStore()** which will holds the state of the application. Changing the state is allowed through `dispatch(action)`. 
```ts

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```


3. Usage in the Components
Now we can read the data from the our store using the `useSelector()` hook, and to update new values using the `useDispatch()` 

```jsx
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementValue, decrementValue, addByAmount, selectCount } from './counterSlice'

export function EasyCounter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('10') ;

    return (
        <div>
            <h1>Counter value: {count}</h1>
            <button onClick={() => dispatch(incrementValue())}>Plus 1</button>
            <button onClick={() => dispatch(decrementValue())}>Minus 1</button>
            <div>
                <input 
                    value={inputValue}
                    onChange={e => setInputValue(Number(inputValue))}/>
                    <button onClick={() => dispatch(addByAmount(Number(inputValue)))}>Add value By Amount</button>
            </div>
        </div>
    );
}

```

4. **Use `<Provider>`** and provide the the Redux store so the it will be available to our React components. Open your `index.js` file and add the `<Provider>` as the following example:

```ts 
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import store from './app/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

#### Some practices
We all agree that the better way to really understand code or framework is get your hand dirty. So you are welcome to do that, but for now I picked up some GitHub projects that use React Redux.

1. [Tetris](https://github.com/chvin/react-tetris) - This project is a Tetris classic game  

<center>
    <img src='https://img.alicdn.com/tps/TB1Ag7CNXXXXXaoXXXXXXXXXXXX-320-483.gif' alt='Tetris classic game react redux' width='200'>
</center>

2. [Spotify Client](https://github.com/Pau1fitz/react-spotify) - This project is a client that communicates with the Spotify API.

<center>
    <img src='https://raw.githubusercontent.com/Pau1fitz/react-spotify/master/browser.png' alt='Spotify client react redux' width='500'>
</center>

3. [Fakeflix](https://github.com/Th3Wall/Fakeflix) - This project is inspired from Netflix. The project is mid-level complexity.

<center>
    <img src='https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_readme.png' alt='Spotify client react redux' width='500'>
</center>

#### Last note:
It's important to note that Redux is just one of many options for global state management in a React application. Other popular options include [MobX](https://mobx.js.org/) and the [React context API](https://reactjs.org/docs/context.html).