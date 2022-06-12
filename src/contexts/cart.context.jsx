import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  // return new array with modified cartitems / new cart item

  // let foundProduct = false;
  // const newItems = cartItems.map((item) => {
  //   if (item.id === productToAdd.id) {
  //     foundProduct = true;
  //     return { ...item, quantity: item.quantity + 1 };
  //   }
  //   return item;
  // });

  // if (foundProduct) {
  //   return newItems
  // }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeProductFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    // console.log(productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === itemToRemove.id
    );

    //if found, increment quantity
    if (existingCartItem.quantity === 1) {
      removeProductFromCart(itemToRemove);

      // return cartItems.map((item) => {
      //   if (item.id === itemToRemove.id) {
      //     return { ...item, quantity: item.quantity + 1 };
      //   }
      //   return item;
      // });
    } else {
      setCartItems((p) =>
        p.map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeProductFromCart = (productToRemove) => {
    setCartItems((p) => p.filter((item) => item.name !== productToRemove.name));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    removeProductFromCart,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
