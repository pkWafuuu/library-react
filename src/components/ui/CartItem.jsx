import { useEffect } from "react";
import { useState } from "react";

function CartItem({ cart, remove }) {

	const [itemCart , setItemCart] = useState([cart])

	function quantityChange(event) {
		setItemCart(itemCart.map((item) => ({...item, quantity: event})))
	}

	function price(){
		return (((cart.salePrice || cart.originalPrice)) * itemCart[0].quantity).toFixed(2)
	}

	function removeItem(index) {
		remove(index)
	}

	useEffect(() => (console.log(itemCart)), [itemCart])
  return (
    <>
      <div className="cart__item">
        <div className="cart__book">
          <img src={cart.url} className="cart__book--img" alt="" />
          <div className="cart__book--info">
            <span className="cart__book--title">{cart.title}</span>
            <span className="cart__book--price">${(cart.salePrice || cart.originalPrice).toFixed(2)}</span>
            <button className="cart__book--remove" onClick={() => removeItem(cart.id)}>Remove</button>
          </div>
        </div>
        <div className="cart__quantity">
          <input type="number" value={itemCart[0].quantity} min={0} max={99} className="cart__input" onChange={(event) => quantityChange(+event.target.value)} />
        </div>
        <div className="cart__total">${price()}</div>
      </div>
    </>
  );
}

export default CartItem;
