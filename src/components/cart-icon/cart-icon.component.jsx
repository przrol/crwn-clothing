import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.jsx";
import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const handleIconClick = () => {
    // console.log("handleIconClick");
    setIsCartOpen((p) => !p);
  };

  return (
    <CartIconContainer onClick={handleIconClick}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
