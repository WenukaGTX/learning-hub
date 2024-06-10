import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreameSlice';

export const IcecreamView = () => {
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>No of Ice Cream: {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Ice Cream</button>
        </div>
    )
}