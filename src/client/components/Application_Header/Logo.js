/* Component which displays the application logo */

// Required imports
import React from "react";
import "./Logo.css";

// Global pre-defined array list
const ARRAYVALUES = [
  [40, 28, 15, 35, 5, 13, 25, 10, 30, 20, 28, 45, 50],
  [50, 45, 28, 20, 30, 10, 25, 13, 5, 35, 15, 28, 40],
  [26, 16, 10, 5, 30, 27, 10, 14, 35, 17, 15, 40, 50],
  [50, 40, 15, 17, 35, 14, 10, 27, 30, 5, 10, 16, 26],
  [15, 28, 11, 14, 35, 13, 24, 5, 16, 35, 8, 40, 50],
  [50, 40, 8, 35, 16, 5, 24, 13, 35, 14, 11, 28, 15],
  [19, 24, 5, 15, 17, 8, 28, 35, 35, 10, 31, 42, 48],
  [48, 42, 31, 10, 35, 35, 28, 8, 17, 15, 5, 24, 19],
];

class Logo extends React.Component {
  componentDidMount() {
    // Obtaining DOM elements
    let logoArrayBars = document.getElementsByClassName("logo-array-bar");
    let nameOne = document.getElementById("nameOne");
    let nameTwo = document.getElementById("nameTwo");
    let nameDiv = document.getElementById("nameDiv");

    let [array, sortingOrder] = this.selectArray();

    // 'Animating' the name and array bars of the logo
    setTimeout(() => {
      for (let i = 0; i < array.length; i++) {
        logoArrayBars[i].style.height = `${array[i] * 2}%`;
        if (sortingOrder % 2 === 0) {
          nameOne.style.color = "#e1e1e1";
          nameTwo.style.color = "#ae6bff";
          if (i === 12 || i === 11) {
            logoArrayBars[i].style.backgroundColor = "#ae6bff";
          }
          if (i === 1 || i === 2) {
            logoArrayBars[i].style.backgroundColor = "#e1e1e1";
          }
        } else {
          nameOne.style.color = "#ae6bff";
          nameTwo.style.color = "#e1e1e1";
          if (i === 11 || i === 10) {
            logoArrayBars[i].style.backgroundColor = "#e1e1e1";
          }
          if (i === 0 || i === 1) {
            logoArrayBars[i].style.backgroundColor = "#ae6bff";
          }
        }
        nameDiv.style.opacity = 1;
      }
    }, 500);
  }

  // Selects an array from the pre-defined list
  selectArray() {
    let tempIndex = Math.floor(Math.random() * 8) + 1;
    let tempArray = ARRAYVALUES[tempIndex - 1];
    let sortingOrder = tempIndex - 1;

    return [tempArray, sortingOrder];
  }

  render() {
    let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // JSX that lays out the elements and maps the array
    return (
      <div id="logo">
        <div id="logoArrayDiv">
          {array.map((value, idx) => (
            <div
              className="logo-array-bar"
              key={idx}
              style={{ height: "0%" }}
            ></div>
          ))}
        </div>
        <div id="nameDiv">
          <div id="nameOne">SORTING</div>
          <div id="nameTwo">VISUALIZER</div>
        </div>
      </div>
    );
  }
}

export default Logo;
