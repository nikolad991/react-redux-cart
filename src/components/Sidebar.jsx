import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByCategory } from "../redux/productsSlice";
// import { filterProductsByCategory } from "../redux/productsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
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

  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((category) => ({
      name: category,
      checked: true,
    }))
  );

  const handleCheck = (e) => {
    setSelectedCategories((prev) =>
      prev.map((item) => {
        if (item.name === e.target.name) item.checked = e.target.checked;
        return item;
      })
    );
    
  };

  return (
    <div className=" sidebar d-flex flex-column position-fixed px-4">
      <div>
        {categories.map((category, index) => (
          <div key={index} className="sidebar-item">
            <input
              type="checkbox"
              id={category}
              name={category}
              onChange={handleCheck}
              defaultChecked
            />

            <label for={category}>{category}</label>
          </div>
        ))}
      </div>
      <button
        className=" btn btn-info"
        onClick={() => {
          const categories = selectedCategories.reduce(
            (acc, { name, checked }) => {
              if (checked === true) acc.push({ name });
              return acc;
            },
            []
          );
          console.log(categories);
          dispatch(filterProductsByCategory(categories));
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default Sidebar;
