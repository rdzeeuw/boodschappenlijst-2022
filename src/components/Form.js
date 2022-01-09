import React from "react";

function Form({groceryItem, handleChange, handleSubmit}) {
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="groceryItem"
                value={groceryItem}
                onChange={handleChange}
                placeholder="Vul je boodschappen in" /> 
            <input type="submit" value="Voeg toe" className="add-btn"></input>
        </form>
    )
}

export default Form