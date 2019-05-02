import React from "react";

class TodoItems extends React.Component {
  createTask = item => {
    return (
    <li key={item.key}
        onClick={() => this.props.deleteItem(item.key) }>
    {item.text}
    </li>);
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTask);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
