import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories} ) => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = (e) => {
      e.preventDefault();
      if(inputValue.trim().length>2){
        setCategories(cats =>[...cats,inputValue]);
        setInputValue('');
      }
      
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={(e) => handleAdd(e)}>Agregar</button>
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory;
