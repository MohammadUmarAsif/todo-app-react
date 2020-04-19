/* Component which displays the application header */

// Required imports
import React from "react";
import Logo from "./Logo.js";
import FullScreen from "../../assets/Full-Screen.png";
import "./Header.css";

// Global variables for information related text
const ABOUT =
  "Sorting Visualizer is a single-page web-application developed to enable step-by-step simulation and visualization of the 'Bubble Sort' algorithm.<br/>" +
  "The objective is to enable a better understanding of the logic behind the algorithm through various components:<br/>" +
  "- Visualization Block &nbsp;&nbsp;- Message Block &nbsp;&nbsp;- Highlight Block &nbsp;&nbsp;- Key Block &nbsp;&nbsp;- Button Block &nbsp;&nbsp;- Description Block";
const VISUALIZATION =
  "It visualizes the simulation of the algorithm through color-coded bars representing the elements in the list.<br/>" +
  "The Value of each element is displayed in the corresponding box.<br/>" +
  "Furthermore, it dynamically responds to changes to the element-list.";
const MESSAGE =
  "It displays important messages to enhance the interaction with the application.<br/>" +
  "Messages pertain to the inputs provided and the current state of simulation.";
const HIGHLIGHT =
  "It highlights the line of code that is currently being executed in the simulation. ";
const KEY =
  "It displays the information associated with each color used in the ‘Visualization Block’.";
const BUTTON =
  "It displays interactable buttons that control the 'state' of the simulation.<br/>" +
  "1. Generate Random Elements = Generates a random list of elements&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Sorting Order = Sets sorting order<br/>" +
  "2. Create Element List = Takes user-input to create the list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Start = Begins the simulation";
const DESCRIPTION =
  "It displays information pertaining to the definition, iteration diagram, pseudocode, algorithmic-code and complexity-analysis of the algorithm.";

// Global variables for DOM elements
let INFORMATIONBOX;
let INFORMATIONCONTAINER;
let INFORMATIONHEADING;
let INFORMATIONTEXT;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      mounted: false
    };

    // Binding to enable setState() in functions
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    // Obtaining DOM elements
    INFORMATIONBOX = document.getElementById("informationBox");
    INFORMATIONCONTAINER = document.getElementById("informationContainer");
    INFORMATIONHEADING = document.getElementById("informationHeading");
    INFORMATIONTEXT = document.getElementById("informationText");

    this.setState({
      mounted: true
    });
  }

  // Resets the information-box contents to 'About'
  resetContainer() {
    if (this.state.mounted) {
      if (INFORMATIONHEADING.textContent !== "ABOUT") {
        INFORMATIONCONTAINER.style.opacity = 0;

        setTimeout(() => {
          INFORMATIONHEADING.textContent = "About";
          INFORMATIONTEXT.innerHTML = ABOUT;
          INFORMATIONCONTAINER.style.opacity = 1;
        }, 500);
      }
    }
  }

  // Sets the information-box content to the content for the respective hovered navigation-button
  handleMouseOver() {
    this.setState({
      hovered: true
    });

    let newHeading;
    let newText;

    newHeading = event.target.name;
    if (newHeading === "Visualization") {
      newText = VISUALIZATION;
    } else if (newHeading === "Message") {
      newText = MESSAGE;
    } else if (newHeading === "Highlight") {
      newText = HIGHLIGHT;
    } else if (newHeading === "Key") {
      newText = KEY;
    } else if (newHeading === "Button") {
      newText = BUTTON;
    } else if (newHeading === "Description") {
      newText = DESCRIPTION;
    }

    INFORMATIONCONTAINER.style.opacity = 0;

    setTimeout(() => {
      INFORMATIONHEADING.textContent = newHeading;
      INFORMATIONTEXT.innerHTML = newText;
      INFORMATIONCONTAINER.style.opacity = 1;
    }, 500);
  }

  // Checks for when the mouse is not hovered on a navigation-button
  handleMouseLeave() {
    this.setState({
      hovered: false
    });
  }

  // Handles clicks to enable fullscreen mode or to scroll to a particular 'Block'
  handleClick() {
    if (event.target.name === "FullScreen") {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      if (document.fullscreen) {
        document.exitFullscreen();
      }
    } else if (event.target.name === "Description") {
      window.scrollTo({ top: 1750, behavior: "smooth" });
    } else if (event.target.name === "Button") {
      if (document.fullscreen) {
        window.scrollTo({ top: 890, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 990, behavior: "smooth" });
      }
    } else {
      if (document.fullscreen) {
        window.scrollTo({ top: 885, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 890, behavior: "smooth" });
      }
    }
  }

  render() {
    // JSX that lays out the elements of the navigation-bar, logo and information-box
    return (
      <div>
        <div id="navigationBar">
          <button
            className="nav-button"
            name="Visualization"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Visualization Block
          </button>
          <button
            className="nav-button"
            name="Message"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Message Block
          </button>
          <button
            className="nav-button"
            name="Highlight"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Highlight Block
          </button>
          <button
            className="nav-button"
            name="Key"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Key Block
          </button>
          <button
            className="nav-button"
            name="Button"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Button Block
          </button>
          <button
            className="nav-button"
            name="Description"
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            Description Block
          </button>
          <button
            className="nav-button"
            name="FullScreen"
            onClick={this.handleClick}
          >
            <img
              id="icon"
              name="FullScreen"
              onClick={this.handleClick}
              src={FullScreen}
            />
          </button>
        </div>
        <Logo />
        <div id="informationBox">
          <div id="informationContainer">
            <h5 id="informationHeading">About</h5>
            <div id="informationText">{ABOUT}</div>
          </div>
        </div>
        {this.state.hovered ? null : this.resetContainer()}
      </div>
    );
  }
}

export default Header;
