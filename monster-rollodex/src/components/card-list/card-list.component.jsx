import React from 'react'
import { Card } from '../card/card.component'

import './card-list.style.css'

export const CardList = (props) => (
    <div className='card-list'>
    {
        // Monsters is an array here which is coming from your props
        // monsterObj is 
        props.monsters.map(
            monsterObj => (
                <Card key={monsterObj.id} monster={monsterObj} />
            ) 
        )
    }
       
    </div>
)