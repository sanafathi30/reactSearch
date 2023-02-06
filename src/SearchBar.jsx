import "./App.css";
import React, { useState } from "react";
import { data } from "./data";
import { useEffect } from "react";
import axios from "axios";

function SearchBar() {
  let [name, setName] = useState([]);
  let [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://api.open-notify.org/astros.json")
      .then(function (response) {
        // handle success
        setName(response.data.people);
        // console.log(response.data.people);
      });
  });
  //   console.log(search);
  return (
    <div className="">
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor "
          className="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          className="input"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="main">
        <ul className="ullist">
          {name
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => (
              <li className="item">
                <span className="span1">{item.name}</span>
                <span className="span2">craft: {item.craft}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
