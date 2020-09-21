import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../data/DataProvider";
import Checkout from "../components/Checkout";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  //Total price
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.preco * item.count;
      }, 0);
      const totalValue = res.toFixed(2).toString().replace(".", ",");
      setTotal(totalValue);
    };
    getTotal();
  }, [cart]);

  //Items Quantity
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Quer mesmo remover")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0) return <h2>Cart vazio</h2>;

  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.imagem} alt={product.titulo} />
            <span>{product.titulo}</span>
            <span>
              R$ {product.preco.toFixed(2).toString().replace(".", ",")}
            </span>

            <div className="quantity">
              <button onClick={() => decrement(product.id)}> - </button>
              <span>{product.count}</span>
              <button onClick={() => increment(product.id)}> + </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product.id)}>
              x
            </div>
          </div>
        );
      })}

      <div className="total-price">
        <h4>Total: R$: {total}</h4>
        <Checkout product={cart} total={total} />
      </div>
    </div>
  );
};

export default Cart;
