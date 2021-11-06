import React from "react";

import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "havermout" },
        { id: 2, title: "broccoli" },
        { id: 3, title: "konijnenoren" },
      ],
      shoppingListItems: [{ id: 1, title: "havermout", amount: 2 }],
    };
  }

  addNewShoppingListItem = (itemTitle) => {
    const newShoppingItem = {
      // id: this.state.shoppingListItems.length + 1,
      id: Math.random() * 100,
      title: itemTitle,
      amount: 1,
    };

    this.setState((prevState) => {
      const newList = prevState.shoppingListItems.concat(newShoppingItem);
      return {
        shoppingListItems: newList,
      };
    });
  };

  addAmountToITem = (itemTitle) => {
    //eerst kopie maken van state om amount/state te kunnen aanpassen
    const shoppingList = [...this.state.shoppingListItems];
    const newList = shoppingList.map((shoppingItem) => {
      if (shoppingItem.title === itemTitle) {
        shoppingItem.amount++;
      }
      return shoppingItem;
    });
    this.setState({ shoppingListItems: newList });
  };

  handleClickGroceryItem = (event) => {
    const clickedItem = event.target.getAttribute("value");
    const currentShoppingList = this.state.shoppingListItems;
    const shoppingListItem = currentShoppingList.filter(
      (item) => item.title === clickedItem
    );
    // console.log(clickedItem); // dit item toevoegen aan shoppingList
    shoppingListItem.length === 0
      ? this.addNewShoppingListItem(clickedItem)
      : this.addAmountToITem(clickedItem);
  };

  addGrocery = (grocery) => {
    const item = { id: Math.random() * 100, title: grocery };
    this.setState({ groceryItems: this.state.groceryItems.concat(item) });
  };

  emptyCart = () => {
    this.setState({ shoppingListItems: [] });
  };

  render() {
    return (
      <div className="container">
        <div className="groceries-list groceries">
          <h1>Boodschappenlijst</h1>
          <GroceryList
            groceryItems={this.state.groceryItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            addGrocery={this.addGrocery}
          />
        </div>
        <div className="groceries-list shopping">
          <h1>Winkelmand</h1>
          <ShoppingCart
            groceryItems={this.state.shoppingListItems}
            handleClickEmptyCart={this.emptyCart}
          />
        </div>
      </div>
    );
  }
}

export default Container;
