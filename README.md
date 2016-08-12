# React Log State [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/react-log-state.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-log-state

A little tweak on [@ryanflorence](https://github.com/ryanflorence)'s [React Lumberjack](https://github.com/ryanflorence/react-lumberjack). Lets you track setState calls on React elements at runtime.

![](http://i.imgur.com/8BmfFyt.png)

## Setup

#### [npm](https://www.npmjs.com)
Install package:
```
npm install react-log-state
```
And include in your code:
```js
require('react-log-state')
```

#### `<script>` tag
Add the following to your HTML anywhere:
```html
<script src="https://npmcdn.com/react-log-state"></script>
```

## Usage

Open up your browser's console. Select an element using the [React DevTools](https://github.com/facebook/react-devtools) (which makes it available on the `$r` variable). Then activate logging:
```js
ReactLogState($r)
```
That's it! Any calls to `setState` will be logged in the console.

---

You can also hook into all `setState` calls globally:
```js
ReactLogState.logAll()
```
Of course, this technically alters how `setState` operates, so you may have a bad time if any of your components making a lot of changes to state.
