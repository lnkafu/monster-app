import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.scss'

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.monsters.map(monsterObj => (
                <Card key={monsterObj.id} monster={monsterObj} />
            )
            )
        }
    </div>
)
