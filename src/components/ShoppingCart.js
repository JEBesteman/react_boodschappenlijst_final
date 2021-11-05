import React from "react"
import List from "./List"

const ShoppingCart = ({ groceryItems, handleClickEmptyCart}) => {
    return (
        <div>
            <button className="delete-btn" onClick={handleClickEmptyCart} >Leeg je winkelmandje</button>
            <List items={groceryItems} readonly={true} />
        </div>
    )
}

export default ShoppingCart;