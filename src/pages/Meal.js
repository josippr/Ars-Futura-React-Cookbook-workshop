import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMeal from "../api/meal/getMeal";

import IngredientsList from "../components/IngredientsList";
import MealInstructions from "../components/MealInstructions";

const Meal = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getMeal(id)
      .then((result) => {
        setMeal(result.meals[0]);
      })
      .catch((error) => setError(error));
  }, [id]);

  if (error) {
    return "Oops! Something went wrong...";
  }

  return (
    <div className="page-container">
      <img
        className="meal-cover-image"
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
      />
      <h1 className="meal-title">{meal?.strMeal}</h1>
      <div className="meal-info-container">
        <IngredientsList meal={meal} />
        <MealInstructions meal={meal} />
      </div>
    </div>
  );
};

export default Meal;
