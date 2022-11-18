---
title: React best practices
date: "2022-11-18T22:12:03.284Z"
description: "The small code changes that will improve your coding."
---

As React is the most popular web framework according to [Stackoverflow survey for 2022](https://survey.stackoverflow.co/2022/#most-loved-dreaded-and-wanted-webframe-want) I would like to show you some code best practices to improve your coding.


#### Arrow Functions:
An arrow function is the compact alternative to function expression and can let your code be cleaner.

```js
//Instead of doing that:
function addNumbers(x, y) {
    return x + y;
}

// Better to use:
const addNumbers = (x, y) => x + y;

// With block body, explicit "return" needed
const addNumbers = (x, y) => {
    return x + y;
}

```

#### Object destructuring assignment:
The destructuring assignment syntax is an expression that makes it possible to unpack properties from objects, into distinct variables.
```js
var myData = {
    date: new Date('2022-11-18T22:12:03.284Z'),
    data: 'This is my data',
    dataCounter: 42
}

const {date, data, dataCounter} = myData;
// Now your object is separate into distinct variables.
console.log(date, data, dataCounter);
```

#### Avoid "CSS-in-JS" or "Inline Styling" patterns: 
"CSS-in-JS" or "Inline Styling" refers to a pattern where CSS is composed using JavaScript instead of defined in external files.
for example:
```jsx
const myTitle = '{easy-code} blog'
const TitleText = <div style={{fontSize: 1em}}>{myTitle}</div>
```
Those patterns will makes your JSX code not clean and harder to maintenance, if you often find yourself writing code like this, better to export your styles into different css file. Doing this will allow you reuse your styling without duplicate your code and your component will be smaller and easily to understand and use.
For example:
```jsx
const myTitle = '{easy-code} blog'
const TitleText = <div className='title'>{myTitle}</div>
```
The css should look like this:
```css
.title {
    font-size: 1em,
    font-weight: bold;
}
```

#### Add Keys to the elements inside the array:
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
for example:
```jsx
const users = [{id: 1, name: ''}, {id: 1, name: ''}];
const IdxItems = <ul>{
    users.map((user) => 
        <li key={user.id}>{user.name}</li>
    )}
    </ul>;

```
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Therefore, use IDs from your data would be a good key choose.
But when you don't have stable IDs and unique so React will render your items correctly, you can use the item index as a key.
For example:
```jsx
const users = [{name: ''}, {name: ''}];
const IdxItems = <ul>{
    users.map((user, index) => 
        <li key={index}>{user.name}</li>
    )}
    </ul>;

```
###### Be aware!
It is not recommended to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you’re interested in learning more, you can find more details [Here](https://reactjs.org/docs/reconciliation.html#recursing-on-children).


#### Always destructuring your Props
Using Props allow you component to reusable which will make your code clean. Therefore, again destructuring object come to help you.

```jsx
const Header = ({title, iconSrc}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={iconSrc}/>
        </div>
    );
}

```

#### Use equality (==) and avoid strict equality (===)
While you compare your objects, try avoiding the strict equality (===) operator as is could lead to misleading evaluation.
For example:
```js
const result = '32' === 32 // false

const result = '32' == 32 // true

```
The reason is that the strict operator checks whether its two operands are equal, returning a Boolean result. The strict operator will return True only if the operands have the same type. Unlike the equality operator (==) which will compare the values without consider the operands type.

You can find another advantage to use equality (==) with objects.
For example, if you have some *null* object and you need to compare it to *undefined* object which most of the time handle with the same logic.

```js
const obj1 = null;
const obj2 = undefined;

const result = obj1 === obj2 // false

const result = obj1 == obj2 // true

```



Now you can go and start coding better, hope you enjoy! 🙏🏻

Happy Debugging 👨🏼‍💻👩‍💻
