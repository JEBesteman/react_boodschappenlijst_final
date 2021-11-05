import React from "react";
import InputField from "./InputField";
import List from "./List";

const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
  return (
    <div>
      <InputField onSubmit={addGrocery} />
      <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    </div>
  );
};

export default GroceryList;
