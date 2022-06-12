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
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleArrowDown}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleArrowUp}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveProduct}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
