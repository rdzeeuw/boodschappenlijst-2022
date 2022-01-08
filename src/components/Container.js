import React, {useState} from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'

function Container() {
    // state of grocery list
    const [ groceryItems, setGroceryItems ] = useState([
        // { id: 1, title: "Appels", amount: 0 },
        // { id: 2, title: "Melk", amount: 1 },
        // { id: 3, title: "Eieren", amount: 1 }
    ])
    // state of shopping cart list    
    const [ shoppingCartItems, setShoppingCartItems ] = useState([])

    // //state of inputfield
    const [groceryItem, setGroceryItem] = useState('')
    // amount state
    const [cartItem, setCartItem] = useState('')
    
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

    const handleClickGroceryItem = (id) => {
        const clickedItem = groceryItems.filter((item) => item.id === id)[0]
        console.log(clickedItem)   


            setShoppingCartItems(prevShoppingCartItems => {
                return [...prevShoppingCartItems, clickedItem]
            })
       

         
    
    }

    function addAmountToItem(id) {

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
                shoppingCartItems={ shoppingCartItems }
                emptyShoppingCart={emptyShoppingCart}/>
        </div>
    )
    
}

export default Container
