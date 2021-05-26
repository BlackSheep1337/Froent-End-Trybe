import React, { Component } from 'react';

class ShoppingList extends Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne', 'Pao', 'Queijo', 'Frango', 'CusCuz', 'Macaxeira'];

    return (
      shoppingList.map((item, i) => {
        return <li key={ i }>{ item }</li>
      })
    );
  }
}

export default ShoppingList;