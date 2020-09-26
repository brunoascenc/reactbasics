import { useState } from 'react';

const OderBy = (products) => {
     const [orderBy, setOrderBy] = useState("");

     const sorted = products.sort((a, b) => {
       const orderPrice =
         orderBy === "asc"
           ? b.preco - a.preco
           : orderBy === "desc"
           ? a.preco - b.preco
           : "";
       return orderPrice;
     });

     const handleOrderBy = (sortType) => {
       setOrderBy(sortType);
     };

    return [sorted, handleOrderBy]
}

export default OderBy;
