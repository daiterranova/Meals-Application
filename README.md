# Setting up Project Structure

This project is based on the following tutorial:

[Meals Application Repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp)

[Tutorial Video](https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=19642s&ab_channel=freeCodeCamp.org)

1. Taking global styles from the App.css file of this [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp)
2. Create a folder inside of the src folder, named `components`. Inside of it, create the following components and return a text of your preference:
   - Meals
   - Search
   - Modal
   - Favorites
3. Import all the components in the App.jsx file

## Creating Context

### Setting Provider

1. Create a `content.jsx` file and import useContext using destructuring.
2. Call React.createContext and keep it in a variable called `AppContext`
3. Create the AppProvider component and return the context (AppContext) using a Provider. Set the value to `"hello"`
4. Export the component and the context and import the component in the `main.jsx`file, grapping the `<App/>` component with `<AppProvider/>`

### Using Context to consume data

1. In the Meals component, import `useContext`y `AppContext` to create a new constant that contains the context.
2. print to the console the context. You must able to see the `value` pass to `<AppProvider>` componenent
3. Create a custom hook inside of the `context.jsx` file that returns the context and replace it for the steps 1 and 2 in the `Meals` component.
