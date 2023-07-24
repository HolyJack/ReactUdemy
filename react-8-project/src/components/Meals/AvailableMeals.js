import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-htttp";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadedMeals = [];

      for (let key in mealsObj) {
        let meal = mealsObj[key];
        loadedMeals.push({
          id: key,
          name: meal.name,
          description: meal.description,
          price: meal.price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-fetch-movies-1fd48-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && !error && <ul>{mealsList}</ul>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
