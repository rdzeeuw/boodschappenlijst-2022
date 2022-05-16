import React, {useState} from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'

function Container() {
    // state of grocery list
    const [ groceryItems, setGroceryItems ] = useState([])
    // state of shopping cart list    
    const [ shoppingCartItems, setShoppingCartItems ] = useState([])

    // //state of inputfield
    const [groceryItem, setGroceryItem] = useState('')
    
    // handling the input field
    const handleChange = (e) => {
        const text = e.target.value
        const id = Math.floor(Math.random() * 1000) +1
        setGroceryItem({id: id, title: text, amount: 1})
    } 

    // when the form is being submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(groceryItem){
            setGroceryItems((prevGroceryItems) => {
                return [...prevGroceryItems, groceryItem]
            })
            setGroceryItem('')  
        } else {
            console.log('empty values')
        }
    }

    // when grocery item is clicked
    const handleClickGroceryItem = (id) => {
        const clickedItem = groceryItems.filter((item) => item.id === id)[0] 

        const alreadyInShoppingList = shoppingCartItems.find((item) => item.id === id)
        if (alreadyInShoppingList){
            setShoppingCartItems(
                shoppingCartItems.map((item) => 
                    item.id === id ? {...alreadyInShoppingList, amount: alreadyInShoppingList.amount + 1} : item
                )
            )
        } else {
            setShoppingCartItems(prevShoppingCartItems => {
                return [...prevShoppingCartItems, clickedItem]
            })
        }
    }

    function emptyShoppingCart() {
        setShoppingCartItems([])
    }

    return (
        <div className="container">
            <GroceryList 
                name="grocery" 
                groceryItems={groceryItems} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                handleClickGroceryItem={handleClickGroceryItem}
             />
            <ShoppingCart 
                name="shopping"
                shoppingCartItems={shoppingCartItems}
                emptyShoppingCart={emptyShoppingCart}
                />
        </div>
    )
}

export default Container
