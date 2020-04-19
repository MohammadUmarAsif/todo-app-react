/* App Component that is rendered to the HTML 'app' div */

// Required imports
import React from "react";
import Header from "./Application_Header/Header.js";
import AlgorithmBlocks from "./Algorithm_Components/Algorithm-Blocks.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AlgorithmBlocks />
      </div>
    );
  }
}

export default App;
