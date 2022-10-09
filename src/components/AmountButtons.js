// import React, { useState } from 'react';
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// const AmountButtons = ({ increaseAmount, decreaseAmount, amount }) => {

//     const [theAmount, setTheAmount] = useState(amount)


//     const increaseAmount = () => {
//         setTheAmount((oldAmount) => {
//             let tempAmount = oldAmount + 1;

//             if (tempAmount > 5) {
//                 tempAmount = oldAmount
//             }
//             return tempAmount

//         })
//     }

//     const decreaseAmount = () => {
//         setTheAmount((oldAmount) => {
//             let tempAmount = oldAmount - 1;

//             if (tempAmount < 1) {
//                 tempAmount = 1
//             }

//             return tempAmount
//         })

//     }
//     return (
//         <div className="amount-btns">
//             <button type='button' className='amount-btn' onClick={decreaseAmount}><AiOutlineMinus /></button>
//             <h2 className='amount'>{theAmount}</h2>
//             <button type='button' className='amount-btn' onClick={increaseAmount}><AiOutlinePlus /></button>
//         </div>
//     )
// }

// export default AmountButtons