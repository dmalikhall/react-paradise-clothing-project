import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-container'>
            <h2>Error:page not found</h2>
            <Link to='/'>
                <button className='error-back-to-home'>Back to Home</button>
            </Link>
            

        </div>
    
)}

export default Error