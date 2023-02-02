import { useGlobalContext } from "../context";

const Meals = () => {
  //passing the context to the component
  const context = useGlobalContext();
  console.log(context);
  return <h1> Vamo a comer</h1>;
};
export default Meals;
