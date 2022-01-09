import React from 'react'
import ListItem from './ListItem'

function List({items, handleClickGroceryItem, name}) {
    const listItems = items.map(item => {
        return (
            <ListItem 
                key={item.id} 
                item={item} 
                handleClickGroceryItem={handleClickGroceryItem}
                name={name}
                id={item.id}
            />
        )
    })

    return (
        <div>
           <ul> { listItems } </ul>
        </div>
    )
}


export default List