import { Link } from "react-router-dom";

const MealRow = ({ meal }) => {
  return (
    <Link to={`/${meal.idMeal}`}>
      <div className="row">
        <div className="field small-field">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-image"
          />
        </div>
        <div className="field large-field">{meal.strMeal}</div>
        <div className="field large-field">{meal.strCategory}</div>
        <div className="field large-field">{meal.strArea}</div>
      </div>
    </Link>
  );
};

export default MealRow;
