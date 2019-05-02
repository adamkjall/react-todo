import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }
  inputElement = React.createRef();

  handleInput = event => {
    const itemText = event.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = event => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: { text: "", key: "" }
      });
      this.inputElement.current.value = "";
    }
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
