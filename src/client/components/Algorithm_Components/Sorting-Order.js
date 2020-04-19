/* Component which enables user to set the sorting order */

// Required imports
import React from "react";
import "./Sorting-Order.css";

class SortingOrder extends React.Component {
  constructor(props) {
    super(props);

    // Binding to enable setState() in function
    this.props.handleClick.bind(this);
  }

  render() {
    // JSX that lays out the elements for 'Ascending' and 'Descending' options
    return (
      <div
        id="sort"
        className={this.props.sortClicked ? "in-sort" : "out-sort"}
      >
        <form>
          <div className="input-field">
            <input
              type="text"
              name="Ascending"
              value="ASCENDING"
              onClick={this.props.handleClick}
              style={
                this.props.sortingOrderBool
                  ? { color: "#bb86fc" }
                  : { color: "#818181" }
              }
              readOnly
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="Descending"
              value="DESCENDING"
              onClick={this.props.handleClick}
              style={
                this.props.sortingOrderBool
                  ? { color: "#818181" }
                  : { color: "#bb86fc" }
              }
              readOnly
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SortingOrder;
