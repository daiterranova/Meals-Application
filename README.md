# Meals Application

## Setting up Project Structure

---

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

---

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

## Meals Component

---

### Meals DB

We will consume the [API Meals DB](https://www.themealdb.com/api.php). We will see how to get the data using `fetch` and also using `axios`.

### Using fetch

1. From the API get the URLs for [Search meal by name](www.themealdb.com/api/json/v1/1/search.php?s=) and [Lookup a single random meal](www.themealdb.com/api/json/v1/1/random.php) and set each value to a variable.
2. Set a fetchMeals in such a way that can receive any url.
3. Call fetchMeals inside of the useEffect hook.

### Using axios

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

### No items

1. In the context component, evaluate if exist data. If there is, set up the meals state variable with the value of that data. If there isn't, set up meals to an empty array.
2. In the Meals component, evaluate the case of if data's length is less than 1, return a message that says there's no matches.Make this evaluation before returning the list of cards.
3. Test if our logic works gibbering the url passed to fetchData calling.

## Search Component

---

1. Create the search component html structure:
   - Header element that contains:
     - a form with 1 input and two buttons
2. Set the classes and styles for the component. You can grab the styles from [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp/blob/main/src/App.css).
3. Create "text" state variable and set it to an empty string.
4. Create two handle functions: handleSubmit (for the submit event) and handleChange(for the input of the user).
5. Set up the setText variable inside of the handleChange function with the value of `e.target.value`. The handle functions must receive the _event_.
6. Set the handleSubmit function to prevent the default behaviour of the page with `e.preventDefault()`.

### Setting search term

1. In the context.js file, create a state variable for the search term and set it to an empty string.
2. Passed it to the `<App Provider>` component the SetSearchTerm as prop, and destructured it inside of the Search component, using global Context.
3. Inside of the handleSubmit function, create a condition that evaluates if `text`is true, set SetSearchTerm to that variable, and change the value of the `text` state variable to and empty string.
4. In the context.js file, implement a useEffect for fetch the meal according to the search term, using the fetchMeals function and passing it to the **allMealsUrl** concatenated with **searchTerm**. The useEffect receives as a second parameter the state of searchTerm. Consider the case of is **SearchTerm** is empty.

### Fetching random meal

1. In the context.js file, create a function that calls to fetchMeals and receives as a parameter the randomMealUrl. Passed it through props to the `<App Provider>` component, then, destructured it inside of the Search component, in the global Context.
2. In the Search component, create a handle called `handleRandomMeal` and set: SearchTerm and text to and empty string, and call to fetchRandomMeal function.
3. Set inside of the button for random meal, the onClick property to the handle.

## Modal Component

---

### Basic structure

1. Inside of the Modal component, return a h1, inside of a div, all inside of a aside element, and set a class called `modal-container` for the div and `modal-overlay` for the aside element.
2. Create an state variable for show the modal, inside of the context.js file, and set the value to true.
3. Import the `useGlobalContext`hook in the App and the Modal jsx file.
4. In the `App.jsx` file:
   - import the global context and render the `Modal` component when `showModal` is `true`.
   - destructure the `showModal` variable and set it to the `useGlobalContext()` hook.
   - render the modal in case of showModal it is true.

### Styles

You can style the modal container and the modal overlay to center the modal in the screen by your own, or you can just grab the styles from the [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp/blob/main/src/App.css).

### Select Meal

Inside of the context file:

1. Create a state variable called `selected` and initialize it to **null**.
2. Create a function to select a meal that:
   - finds a meal matching it with its id and passed it to the setSelectedMeal function as a parameter.
   - set ShowModal value to **true**.
3. Passe to the `<App Provider>` component the function to select a meal and the state variable selectedMeal as a prop.
4. Inside of the `Meals` component, pass it the **selectMeal** function to the `useGlobalContext` hook and also inside of the `img` element as a onClick prop. Use an arrow function to avoid the automatically call of the function.

### Close Modal

1. Create a function inside of the context.js file and inside of it, set the showModal state to false, and passed it to the `<App Provider>` component as a prop.
2. In the Meals component, destructure selectedMeal and closeModal from the useGlobalContext hook.
3. In the return structure, add a button element with the onClick prop and set it to the closeModal reference.

### Setting html structure Modal and Display

From the meals object, we can see the property that has every meal object, and choose which one we want to display.
I choose to show the following properties:

- The image of the meal `strMealThumb`
- The name of the meal (title) `strMeal`
- The category of the meal (tag) `strCategory`
- The instructions for cook the meal `strInstructions`
- Original source `strSource`
  We can destructure the properties to use each one and simplify the syntax.

Now with this properties, we create the modal structure showing: image, title, description and tag.

We catch the styles from the [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp/blob/main/src/App.css).

## Favorites Component

---

### Setting Favorites

1. Create a state variable for favorites and set it with a initial value of an empty array.

### Add Favorites

Create a function that add a meal as a favorite and passed as a parameter the id of the meal with the following logic:

- iterate through the array of meals looking for the meal that matches with the idMeal and store it in a variable.
- repeat the previous step but with the favorites array and store the value in another variable called alreadyFavorite
- consider the situation if alreadyFavorite exists, cut the execution of the function.
- create a variable for update the favorites state that concat the favorites array with the meal object inside of a new array.
- set the favorites state variable to the update variable.

### Remove from favorites

1. Create a function that iterates trough the favorites array and return the array without the meal that we want to remove (use filter method). Store the result in a variable
2. Set the favorites state variable using the result variable from step 1.

### Render Favorites

1. In the App.jsx file, we will render the Favorites component only if the length of the favorites state variable is bigger than 0.
2. In the Favorites component, destructure the favorites variable, selectMeal function and removeFromFavorites function and store it in the useGlobalContext hook.
3. Set up the html structure:
   - `section` with the folllowing nested elements: - `div` with the class favorites-content - a `heading` title that says **Favorites** - another `div` with the favorites-container class.
     Inside of the `div favorites-container`, map the array of favorites, destructure for every meal the id and the image properties so you can return them with the proper html structure (the image inside of a div and a remove button).

### Styles

We catch the styles from the [repository](https://github.com/john-smilga/react-meals-application-freeCodeCamp/blob/main/src/App.css).

### Refactor selectMeal function

1. Add the favorites array to the parameters that receive the function and consider the case in which the favoriteMeal exists, then find that meal iterating through the favorites array.
2. Passed it to the img element inside of the Favorites component a onClick prop that receives selectMeal function with the idMeal as first parameter and a true value as a second parameter.

### Add favorites to Local Storage

1. On the addFavorites function, after setting the favorites state variable to the current array, set the local storage to the favorites variable as first parameter, and as the second one, using `JSON.stringfy`method, pass the updated array of favorites.
2. Repeat step 1 inside of the removeFromFavorites function.
3. Create a function to get the favorites array from the local storage, and consider the case if there's a favorites array, set that variable to the information stored in local storage. If it isn't, set it favorites to an empty array.
4. Passed it the previous function as the initial value to the favorites array inside of the `<App Provider>`.
