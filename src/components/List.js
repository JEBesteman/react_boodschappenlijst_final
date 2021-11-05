import React from "react";
import ListItem from "./ListItem";

// class List extends React.Component {
//   render() {
//     const { items, handleClickItem, readonly } = this.props;
//     const listItems = items.map((item) => (
//       <ListItem
//         key={item.id}
//         item={item}
//         clickItem={handleClickItem}
            // readonly={readonly}     
//       />
//     ));

//     return <ul>{listItems}</ul>;
//   }
// }

//kan allebei de manieren!!
const List = ({ items, handleClickItem, readonly }) => {
  const listItems = items.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      clickItem={handleClickItem}
      readonly={readonly}

    />
  ));
  return <ul>{listItems}</ul>;
};

export default List;
