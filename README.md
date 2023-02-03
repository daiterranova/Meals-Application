# Meals Application

## Setting up Project Structure

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
2. Call to React.createContext and keep it in a variable called `AppContext`.
3. Create the AppProvider component and return the context (AppContext) using a Provider. Set the value property with the value of `"hello"`.
4. Export the component and the context and import the component in the `main.jsx` file, grapping the `<App/>` component with `<AppProvider/>`.

### Using Context to consume data

1. In the Meals component, import `useContext` and `AppContext` to create a new constant variable that contains the context.
2. Print to the console the context. You must able to see the `value` pass to `<AppProvider>` component.
3. Create a custom hook inside of the `context.jsx` file that returns the context and replace it for the steps 1 and 2 in the `Meals` component.

### Data Fetching

1. Import `useEffect` from **React** on the context.js file.
2. Create a function to fetch data from "https://randomuser.me/api/", using async/await and print the response to the console.
3. Called the function inside of the `useEffect` hook and pass a second parameter an empty array.

### Meals Component

---

#### Meals DB

We will consume the [API Meals DB](https://www.themealdb.com/api.php). We will see how to get the data using `fetch` and also using `axios`.

##### Using fetch

1. From the API get the URLs for [Search meal by name](www.themealdb.com/api/json/v1/1/search.php?s=) and [Lookup a single random meal](www.themealdb.com/api/json/v1/1/random.php) and set each value to a variable.
2. Set a fetchMeals in such a way that can receive any url.
3. Call fetchMeals inside of the useEffect hook.

##### Using axios

1. Install axios as a dependency:

```
      npm install axios
```

2. Import axios in the context.js file
3. Replace fectch for axios, and to see the array of meals on the console, we need to access to the data property inside of the response object (`response.data`)

### Passing data set to Meals component

1. Import useState hook on the context.js file.
2. Setup state variable (meals)
3. On the `try` section of the fetchMeals function, give to setMeals the API's meals data.
4. Set up the value inside of the <AppProvider> component to `meals`.
5. On the Meals Component, destructure the context using `meals`.
6. Iterate over the array of meals, printing each meal and render some html element on the screen.
7. Set a meal an object with idMeal, strMeal: title, strMealThumb: image as properties.
8. Import local styles from the [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp/blob/main/src/App.css)
9. Install [React Icons](https://react-icons.github.io/react-icons) running on the console:
   ```
         npm install react-icons --save
   ```
10. Looking in the gallery of React Icons for thumbs up and import it to the Meals component.
11. Show the icon component in the button element. You should see the icon in every meal.

### Implement loading screen

1. In the context.js file, initialize a state variable named `loading` and set it up to false.
2. Change the state of loading to true before catching the data inside of the fetchMeals function and set it again to true after the fetch data block.
3. Pass it the prop to the context component.
4. Include the prop in the Meals component, and before of return every meal card, show a loading sign when loading is set to true.
