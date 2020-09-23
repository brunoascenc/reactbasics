import { useContext, useState, useEffect } from "react";
import { DataContext } from "../data/DataProvider";

const productsPerPage = 12;
let arrayForHoldingProds = [];

const SeeMoreBtn = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [productsToShow, setProductsToShow] = useState([]);
  const [next, setNext] = useState(6);

  const loopWithSlice = (start, end) => {
    const slicedProducts = products.slice(start, end);
    arrayForHoldingProds = [...arrayForHoldingProds, ...slicedProducts];
    setProductsToShow(arrayForHoldingProds);
  };

  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMoreProds = () => {
    loopWithSlice(next, next + productsPerPage);
    setNext(next + productsPerPage);
  };

  return [handleShowMoreProds, productsToShow, products];
};

export default SeeMoreBtn;
