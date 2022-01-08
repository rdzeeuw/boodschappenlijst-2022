import React from 'react'

function ListItem({item, handleClickGroceryItem, name}) {

    return (
        <li 
            key={item.id}
            className="list-item"
            value={item.title}
            id={item.id}
            onClick={() => handleClickGroceryItem(item.id)}
            >
               {name === 'shopping' ? 
               <>
                 <p>{item.title}</p> <p>Amount: {item.amount}</p>
               </>: 
               <p>{item.title}</p>}
        </li>
    )
       
}

export default ListItem