import React from "react";
import {useSelector, useDispatch} from 'react-redux'
// import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy numOfIceCreams</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     numOfIceCreams: state.iceCream.numOfIceCreams,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

export default IceCreamContainer
