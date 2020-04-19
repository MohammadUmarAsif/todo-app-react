/* Component which displays the input field for creating a list of elements */

// Required imports
import React from "react";
import "./Create-Element-List.css";

class CreateElementList extends React.Component {
  constructor(props) {
    super(props);

    // Binding to enable setState() in functions
    this.props.handleChange.bind(this);
    this.props.handleFocus.bind(this);
  }

  // Prevents default action of a form on submit
  handleKeyDown(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  render() {
    // JSX that lays out the input box
    return (
      <div
        id="create"
        className={this.props.created ? "in-create" : "out-create"}
      >
        <form onKeyDown={this.handleKeyDown}>
          <div className="input-field">
            <input
              type="text"
              name="ElementInput"
              placeholder="5,34,23,9..."
              onChange={this.props.handleChange}
              onFocus={this.props.handleFocus}
              disabled={this.props.running}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateElementList;
