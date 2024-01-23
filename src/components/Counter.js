import React, { useState } from 'react';

import './counter.css'



export default function Counter(){
    /*
    you can also use the state like this without using the callback function
    function add(){
        setCount( count +1)
    }
   */
const [count, setCount] = useState(0)
    function add(){
        setCount(function(prevCount){
            return prevCount +1;
        })
    }

    function subtract(){
        setCount(function(prevCount){
            return prevCount -1;
        })
    }

        return (
            <div className="counter">
            <button onClick={subtract} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
        )
    

}
