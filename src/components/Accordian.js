import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Accordian = ({title, desc}) => {
    const [showDesc, setShowDesc] = useState(false);
    return (
        <article className='accordian-item'>
            <header>
                <p className='heading'>{title}</p>
                <button className='accordian-btn' onClick={()=> setShowDesc(!showDesc)}>{showDesc ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>

            {showDesc && <p className='desc'>{desc}</p>}
        </article>
    )
}

export default Accordian