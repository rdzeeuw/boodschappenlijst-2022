import React from 'react'
import ListItem from './ListItem'

export default function List() {
    return (
        <ul className='list'>
            <ListItem title="brood" />
            <ListItem title="eieren" />
            <ListItem title="kaas" />
        </ul>
    )
}