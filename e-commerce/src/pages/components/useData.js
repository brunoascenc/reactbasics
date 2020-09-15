import {useState, useEffect} from 'react'
import cellphonesData from "../../data/data";

const useData = () => {
  const [celData, setCelProd] = useState([]);
  useEffect(() => {
    setCelProd(cellphonesData);
  }, []);
    
   return [celData]

}

export default useData