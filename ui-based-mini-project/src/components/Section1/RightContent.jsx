import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = ({ users = [] }) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {users.map((elem, idx) => (
          <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        ))}
    </div>
  )
}

export default RightContent