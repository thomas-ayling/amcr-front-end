# Using the ToastNotification Component

## Go to your component

Go to the component where you have written your logic for the error / success message. For example, it might look like this

```js
console.log("Error! This thing doesn't work!");
```

or

```js
alert("Success! This thing's just fine!");
```

## Import the _runToastNotificatoin_ function

The function is located in _src/components/toast-notification/ToastNotification_.

The import will most likely look similar to this

```js
import { runToastNotification } from '../toast-notification/ToastNotification';
```

## Change this to the _runToastNotification_ function

For example, if you have

```js
console.log("Error! This thing doesn't work!");
```

you would change it to

```js
runToastNotification("Error! This thing doesn't work!");
```

## Select whether this notification will be a _success_ or an _error_ message

All you need to do is add another parameter to the _runToastNotification_ function, either _"success"_ or _"error"_.

So if you have the error notification

```js
runToastNotification("Error! This thing doesn't work!");
```

just add the "error" parameter like so

```js
runToastNotification("Error! This thing doesn't work!", 'error');
```

If you have a success notification, it would look like

```js
runToastNotification("Success! This thing's just fine!", 'success');
```

That is it, have fun implementing your toast notifications (or else).
