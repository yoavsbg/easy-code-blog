---
title: React custom hook
date: "2022-12-09T22:12:03.284Z"
description: "Building your own React Hooks"
---

Hooks are a new addition in React 16.8 and above. They let you use state and other React features without writing a class.

Building your own Hooks lets you extract component logic into reusable functions.

Let's take a look into this simple hook example:
```jsx
import React, {useState} from 'react';

const CounterApp = () => {
     // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    
    return (
        <div>
            <h1>Your number is {count}</h1>
            <button onClick={() => increment()}>
             Increment 
            </button>
            <button onClick={() => decrement()}>
             Decrement 
            </button>
        </div>
    );
};

export default CounterApp;

```

In the above example you will notice that when logic will have more cases it will be difficult and unable to reuse.

#### Extracting a Custom Hook:
When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. For example, <mark>useCounter</mark> below is our first custom Hook:

```jsx
import React, {useState} from 'react';

const useCounter(value? : number) {
    // use parameter value or init with 0 value.
    const [count, setCount] = useState(value || 0);

    const incrementCounter = () => setCount(count + 1);
    const decrementCounter = () => setCount(count - 1);

    return {
        count,
        setCount,
        incrementCounter,
        decrementCounter
    }
}

export default useCounter;

```

#### Using the Counter Hook:

```jsx
import React, {useState} from 'react';
import {useCounter} from './my-counter-hook'

const CounterApp = () => {
     // Declare my Counter hook
    const [count, setCount, incrementCounter, decrementCounter] = useCounter(0);
    
    // extend for reuse
    const reset = () => setCount(0);
    return (
        <div>
            <h1>Your number is {count}</h1>
            <button onClick={incrementCounter()}>
             Increment 
            </button>
            <button onClick={() => decrementCounter()}>
             Decrement 
            </button>
        </div>
    );
};

export default CounterApp;

```


#### useYourImagination()

Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. 




Happy Debugging 👨🏼‍💻👩‍💻
