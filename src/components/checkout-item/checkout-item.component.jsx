import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, removeProductFromCart } =
    useContext(CartContext);

  const handleArrowUp = () => {
    addItemToCart(item);
  };

  const handleArrowDown = () => {
    removeItemFromCart(item);
  };

  const handleRemoveProduct = () => {
    removeProductFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={handleArrowDown}>
          {"<"}
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={handleArrowUp}>
          {">"}
        </div>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={handleRemoveProduct}>
        X
      </div>
    </div>
  );
};

export default CheckoutItem;
