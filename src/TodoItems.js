import React from "react";

const liStyle = {
  width: "60%"
};

const divStyle = {
  display: "flex",
  alignItems: "center"
};

const buttonStyle = {
  padding: "10px",
  margin: "5px",
  fontSize: "14px",
  backgroundColor: "rgb(139, 163, 199)",
  color: "#FFF",
  border: "none"
};

class TodoItems extends React.Component {
  createTask = item => {
    return (
      <div style={divStyle}>
        <li style={liStyle} key={item.key}>
          {item.text}
        </li>
        <button
          style={buttonStyle}
          onClick={() => this.props.deleteItem(item.key)}
        >
          Remove
        </button>
      </div>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTask);

    return (
      <ul className="theList" style={divStyle}>
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;
