import React from "react";

const Sidebar = () => {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  return (
    <div className="d-flex flex-column position-fixed p-4 mt-4">
      {categories.map((category, index) => (
        <div key={index}>
          <input type="checkbox" id={category} name={category} />
          
          <label for={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
