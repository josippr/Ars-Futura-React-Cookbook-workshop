const Letter = ({ isSelected, letter, onSelect }) => {
    return (
      <div
        className={isSelected ? "letter-selected" : "letter"}
        onClick={onSelect}
      >
        {letter.toUpperCase()}
      </div>
    );
  };
  
  export default Letter;
  