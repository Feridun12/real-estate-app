import React, { useState } from "react";
import "../styles/AddProperty.css";

function AddProperty() {
  const initialState = {
    title: "",
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  return (
    <div className="add-property">
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <input className="add-property-input" type="text" placeholder="title" />
        <input
          className="add-property-input"
          type="text"
          placeholder="property type"
        />
        <input
          className="add-property-input"
          type="text"
          placeholder="number of bedrooms"
        />
        <input
          className="add-property-input"
          type="text"
          placeholder="number of bathrooms"
        />
        <input className="add-property-input" type="text" placeholder="price" />
        <input className="add-property-input" type="text" placeholder="city" />
        <input className="add-property-input" type="text" placeholder="email" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProperty;
