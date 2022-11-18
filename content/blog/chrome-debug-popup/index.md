---
title: Chrome devtools debugging
date: "2022-11-06T22:12:03.284Z"
description: "Chrome DevTools: Debugging popup, focus object and more."
---

Most of the time they works, but when you have an issue with focus state it can be very frustrating to debug.
You can find the focus state in many components for example popup when you are hovering.


## So, how to debug it?!

There are many ways to debug focus, but I found this one the easiest for me :)

1. Open DevTools and place the breakpoint where you want to start.
2. Go to console tab and place the following code:

```js
setTimeout(function(){debugger;}, 5000)
```

3. Go to your Popup or View and hover it.
(in case 5 seconds in not enough time, you can change it)

Happy Debugging 👨🏼‍💻👩‍💻
