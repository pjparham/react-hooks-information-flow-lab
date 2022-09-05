import React, { useState } from "react";

function Filter ({ onCategoryChange }){
    return(
    <>
         {/* <select name="filter" onChange={handleCategoryChange}> */}
         <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <h2>I'm the filter</h2>
    </>
    )
}

export default Filter