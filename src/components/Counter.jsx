import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dicreaseBy1, dicreaseBy10, increaseBy1, increaseBy10 } from '../app/features/counterSlice/counterSlice';

const Counter = () => {
    const counter = useSelector((state)=>state.Counter);
    const dispatch = useDispatch()

    const handleIncreseBy1 =()=>{
        dispatch(increaseBy1())
    }
    const handleIncreseBy10 = ()=>{
        dispatch(increaseBy10())
    }
    const handleDecreseBy1 = ()=>{
        dispatch(dicreaseBy1())
    }
    const handleDecreseBy10 = ()=>{
        dispatch(dicreaseBy10())
    }
  return (
    <>
    <div className=''>
      Counter <span style={{color:"lightseagreen"}}>{counter}</span>
    </div>
    <div style={{display:'flex', gap:10, paddingTop:10}}>
    {/* <button onClick={()=>dispatch(increaseBy1())}>+1</button>  */}  {/*  <----- aesa bhi kar skte hai */}
    <button onClick={handleIncreseBy1}>+1</button>
    <button onClick={handleIncreseBy10}>+10</button>
    <button onClick={handleDecreseBy1}>-1</button>
    <button onClick={handleDecreseBy10}>-10</button>
    </div>
    </>
  )
}

export default Counter
