import React from 'react'
import GroceryList from './GroceryList'
import ShoppingList from './ShoppingList'

function Container() {
    return (
        <div className='container'>
            <GroceryList />
            <ShoppingList />
        </div>
    )
}

export default Container
