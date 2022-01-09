import React from 'react'

function ListItem({item, handleClickGroceryItem, name}) {
    return (
        <li 
            key={item.id}
            className={name === 'grocery' ? 'list-item grocery-list-item' : 'list-item shopping-list-item' }
            value={item.title}
            id={item.id}
            onClick={() => handleClickGroceryItem(item.id)}
            >
               {name === 'shopping' ? 
               <>
                 <p>{item.title}</p> <p>Aantal: {item.amount}</p>
               </>: 
               <p>{item.title}</p>}
        </li>
    )
       
}

export default ListItem