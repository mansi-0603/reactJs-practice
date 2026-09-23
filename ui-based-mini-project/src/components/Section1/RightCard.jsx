import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ({ img, color, id, tag }) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={img} alt="" />
            <RightCardContent color={color} id={id} tag={tag} />
        </div>
    )
}

export default RightCard