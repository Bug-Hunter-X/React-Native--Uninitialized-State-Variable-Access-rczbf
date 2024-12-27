# React Native: Uninitialized State Variable Access

This repository demonstrates a common error in React Native: attempting to access a state variable before it has been initialized. This often occurs when dealing with asynchronous operations, such as fetching data from an API.

## The Problem
The `bug.js` file shows a component that fetches data from an API.  It attempts to render data from the state variable before the asynchronous `fetch` call completes, causing an error because the state is initially `null`.

## The Solution
The `bugSolution.js` file demonstrates the correct approach. It uses optional chaining (`?.`) and a nullish coalescing operator (`??`) to handle the case where `data` is still `null` while the data is being fetched. This prevents the error while also displaying a message indicating the loading status.