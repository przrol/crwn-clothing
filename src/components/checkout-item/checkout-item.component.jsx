import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemName,
  CheckoutItemImage,
  ImageContainer,
  CheckoutItemContainer,
  CheckoutItemValue,
  CheckoutItemArrow,
  RemoveButton
} from "./checkout-item.styles.jsx";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={handleArrowDown}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow onClick={handleArrowUp}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveButton onClick={handleRemoveProduct}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
