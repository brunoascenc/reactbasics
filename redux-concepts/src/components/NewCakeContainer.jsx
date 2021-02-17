import React, { useState } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} cakes
      </button>
    </div>
  );
};

export default NewCakeContainer;
