import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  Pune: [
    { dish: "VadaPav", descrip: "Indian Burger" },
    { dish: "Misal Pav", descrip: "Lunch | Spicy" },
    { dish: "Bakarwadi", descrip: "Snacks | chakna  " },
    { dish: "Sabudana Vada", descrip: "Crunchy | Fried " }
  ],

  Banglore: [
    {
      dish: "Chaat",
      descrip: "Pani Puri | Bhel | khatta-metha"
    },
    {
      dish: "Rolls & kebabs",
      descrip: "Sheek Kebab | Shawarma"
    },
    {
      dish: "Manglore Buns",
      descrip: "Breakfast | Fluffy"
    }
  ],
  Delhi: [
    {
      dish: "Aloo Chat",
      descrip: "Spiced Potatoes | Diced Fruits"
    },
    {
      dish: "Ram Ladoo",
      descrip: "Pakoras | Crispy | Served with cutney"
    },
    {
      dish: "Kulfi",
      descrip: "Dessert | Cool | Caramelized Milk"
    }
  ]
};

var booksArr = Object.keys(bookDB);

export default function App() {
  var [selectedGenre, setGenre] = useState("Pune");

  function onClickHandler(city) {
    setGenre(city);
  }

  return (
    <div className="App">
      <h1>😋Best Street Food😋</h1>

      <div>
        {booksArr.map((city) => (
          <button onClick={() => onClickHandler(city)}>{city}</button>
        ))}
      </div>
      <div>
        <ul>
          {bookDB[selectedGenre].map((city) => (
            <li>
              <div className="name">{city.dish}</div>
              <div className="rating">{city.descrip}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
