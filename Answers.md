1. What problem does the context API help solve?

Context API lets us share specific forms of data across alllevels of the application, rather than only through a parent-child relationship. Basically it negates the need for prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - these are payloads of information that send data from our applications to the store. It's important to note that they are the only source of information for the store.

Reducers - tell us when an application's state changes in response to actions we've set up in the store.

Store - The store holds our application state and allows it to be updated via dispatch.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Simply put, application state is global while component state is local. In Redux we use 'stores' to hold application state, which can then be accessed anywhere within the app. Component state only lives within it's respective component and can only be updated within said component or passed down to children via props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to call action creators, which return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I probably understood Context API better since it was very similar to how we do things in the past minus prop drilling. I want to get better at Redux, though, since it seems to be the standard for most companies and projects moving forward. I'm still struggling a bit with how everything talks to each other, but ultimately like how much better organized projects can be.