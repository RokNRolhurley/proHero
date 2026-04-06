    import React from "react";
    import { useState } from "react";
import '../../App.css'


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
            
        <div style={{ border: '1px solid White', borderRadius: '10px', padding: '10px', marginTop: '10px' }}>
            <p id='countNum' className='counter'>{count}</p>
            
            <div style={{ display: 'flex', gap: '10px'}}>
                <button id='countAdd' className='counter' onClick={() => {
                setCount(count + 1);
            }}>Add</button>

            <button id='countRest' className='counter' onClick={() => {
                setCount(0);
            }}>Reset</button>

            <button id='countSub' className='counter' onClick={() => {
                setCount(count - 1);
            }}>Subtract</button>

            
            </div>
            
        </div>
    );
}

        export default Counter;