import { useEffect, useState } from "react";
import getMealsByFirstLetter from "../api/meals/getMealsByFirstLetter";
import LetterPicker from "../components/LetterPicker";
import HeaderRow from "../components/HeaderRow";
import EmptyContent from "../components/EmptyContent";
import MealRow from "../components/MealRow";

const Cookbook = () => {
  const [selectedLetter, setSelectedLetter] = useState("a");
  const [meals, setMeals] = useState([]);

  const [error, setError] = useState();

  const [areAllMealsVisible, setAreAllMealsVisible] = useState(false);
  const slicedMeals = meals.slice(0, 5);
  const mealsToShow = areAllMealsVisible ? meals : slicedMeals;

  useEffect(() => {
    getMealsByFirstLetter(selectedLetter)
      .then((result) => {
        if (result.meals === null) {
          setMeals([]);
        } else {
          setMeals(result.meals);
        }
      })
      .catch((error) => setError(error));
  }, [selectedLetter]);

  if (error) {
    return "Oops! Something went wrong...";
  }

  return (
    <div className="page-container">
      <LetterPicker
        selectedLetter={selectedLetter}
        setSelectedLetter={setSelectedLetter}
      />
      {meals.length === 0 ? (
        <EmptyContent />
      ) : (
        <>
          <HeaderRow />
          {mealsToShow.map((meal) => (
            <MealRow key={meal.idMeal} meal={meal} />
          ))}
          {meals.length > 5 && (
            <button
              className="table-button"
              onClick={() => setAreAllMealsVisible(!areAllMealsVisible)}
            >
              {areAllMealsVisible ? "Show less..." : "Show more..."}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Cookbook;
