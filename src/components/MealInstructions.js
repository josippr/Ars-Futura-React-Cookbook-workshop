const MealInstructions = ({ meal }) => {
  return (
    <div className="instructions-container">
      <h2>Instructions</h2>
      {meal?.strInstructions}
    </div>
  );
};

export default MealInstructions;
