import React from 'react'
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";

import List from './List'

function ShoppingCart( {shoppingCartItems, emptyShoppingCart}) {
    
    return (
        <div className="list-section">
            <div className="subtitle">
                < AiOutlineShoppingCart className="icon" />
                <h2>Winkelwagen</h2>
            </div>
                <button 
                    type="button" 
                    id="dltBtn" 
                    className="dlt-btn"
                    onClick={emptyShoppingCart}    
                >
                    Leeg de winkelwagen <AiFillDelete className="dlt-icon" />
                </button>
            
            <ul>
               { shoppingCartItems.length > 0 ?  
               <List 
                name="shopping" 
                items={shoppingCartItems} 
               /> : 
               "Uw winkelwagen is leeg..." }
            </ul>
        </div>
    )
}

export default ShoppingCart