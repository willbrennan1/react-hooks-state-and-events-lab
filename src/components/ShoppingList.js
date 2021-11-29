import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filter, SetFilter] = useState("All")

  let filteredState = filter ==="All" ? items : items.filter(state => state.category === filter)
  
  const handleChange = (e) =>{
    SetFilter(e.target.value)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredState.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
