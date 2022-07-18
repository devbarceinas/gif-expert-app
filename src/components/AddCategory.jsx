import { useState } from "react";
import './AddCategory.css'

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Dragon Ball");

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onSubmitValue = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setInputValue('')
  } 

  return (
    <form onSubmit={onSubmitValue} className="form-container">
      <input
        type="text"
        className="form-container__input"
        placeholder="Buscar gif's"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export { AddCategory };
