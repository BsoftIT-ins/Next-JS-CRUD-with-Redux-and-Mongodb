"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

const CounterPage = () => {
  const {count} = useSelector(selectCount);
  const dispatch = useDispatch();
  
  return (
    <div className='mx-20'>
      <h1 className='text-9xl text-red-500'>{count}</h1>
      <hr className='border-2' />
      <button className='text-7xl bg-sky-400 mr-2 rounded-lg shadow-md hover:bg-sky-500 transition duration-300' onClick={() => dispatch(decrement())}>--</button>
<button className='text-7xl bg-sky-400 rounded-lg shadow-md hover:bg-sky-500 transition duration-300' onClick={() => dispatch(increment())}>++</button>

    </div>
  );
};

export default CounterPage;
