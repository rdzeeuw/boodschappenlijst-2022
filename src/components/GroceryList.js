import React from 'react'
import List from './List'
import Form from './Form'
import { AiOutlineUnorderedList } from "react-icons/ai";

function GroceryList({ groceryItems, handleChange, handleSubmit, handleClickGroceryItem}) {

    return (
        <div className="list-section">
            <div className="subtitle">
                <AiOutlineUnorderedList className="icon"/>
                <h2>Boodschappenlijst</h2>
            </div>
                <Form 
                    className="input-field"
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
            { groceryItems.length > 0 ? 
                    <List 
                        name="grocery" 
                        items={ groceryItems } 
                        handleClickGroceryItem={handleClickGroceryItem}
                    /> : "Er staan nog geen boodschappen op het lijstje" }
        </div>
    )
}

export default GroceryList

