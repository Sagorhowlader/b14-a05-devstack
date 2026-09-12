# Dev Stack Builder For Programming Hero B15 - Assignment 5

Dev Stack Builder is a simple website where users can explore different technologies and create their own technology stack.

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Vite](https://vite.dev/)

## Features

- Users can see different technologies and their details like Difficulties, Categories, Rating.
- Users can add technologies to their own stack bucket.
- Users can remove technologies from their stack or Remove all at once.

## Live Website

[Dev Stack Builder](https://sagorhowlader-b14-a05-devstack.vercel.app/)

## Developer

[Sagor Howlader][(https://www.linkedin.com/in/sagorhowlader17/)]


## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. We can use JSX to create React components and use those components anywhere in our project. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only for the child component. **State** is data that a component manages and can change over time. When the state changes, React renders the component again.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a component. In this project, I used it in the `Technology` component with the `yourTechnologyData` state to store the technologies added to the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. It can be used to fetch data when a component loads. But I did not use `useEffect` in this project. I used `fetch()` with `Suspense` and `use()` to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which item has changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it to show an empty message when the stack has no technologies:

```tsx
{yourStackTechnology.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**. For example, I pass `yourTechnologyStack` to the `YourStack` component.

The parent can also pass a function as a prop. In my project, I pass `handleAddToStack` to the `TechnologyList` component, which passes it further to the `TechnologyCard` component. The child can call this function to send an action or data back to the parent.

