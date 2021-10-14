// import React, { createContext, useContext, useState } from "react";

// export const CartContext = createContext();
// export const useCartContext = () => useContext(CartContext);

// export const CartProvider = (props) => {
//   // se fija si el carro esta en memoria, si no hay nada, guarda un array vacio en el estado
//   const [cartList, setCartList] = useState(
//     () => JSON.parse(window.sessionStorage.getItem("cart")) || []
//   );

//   /*  console.log("sessionStorage:" + list) */
//   const addCart = (item_to_add) => {
//     // se fija si esta el item en el carrito
//     const found = cartList.find((element) => element.id === item_to_add.id);

//     if (found) {
//       // vamos a recorrer mi array del carro en busca de el item para aumentarle la cantidad en el carro
//       const carroViejo = cartList.map((element) => {
//         // si el ID del elemento del array (lo que ya esta en el carro) es igual al ID del elemento que quiero agregar al carro
//         if (element.id === item_to_add.id) {
//           // devolveme el item con la cantidad que se agregue
//           return {
//             ...item_to_add,
//             contador: item_to_add.contador + element.contador,
//           };
//         }
//         // aca se re arma el array del carro
//         return element;
//       });

//       setList(carroViejo);
//       window.sessionStorage.setItem("cart", JSON.stringify(carroViejo));
//       console.log(found);
//       // si if ya estaba en el carrito, entra aca, y por ahora no hace nada .
//     } else {
//       // si no estaba el item, se agrega al array carro
//       const carro = [...cartList, item_to_add];
//       /*  console.log("array" + carro); */
//       setList(carro);
//       window.sessionStorage.setItem("cart", JSON.stringify(carro));
//     }
//   };
//   const totalItems = () => {
//     let total_items = cartList.reduce(
//       (total, product) => total + product.contador,
//       0
//     );
//     return total_items;
//   };
//   const totalPrize = () => {
//     let total_prize = cartList
//       .reduce((total, product) => total + product.prize * product.contador, 0)
//       .toFixed(2);
//     return total_prize;
//   };
//   const quitarProducto = (item) => {
//     const carro = cartList.filter((element) => element.id !== item.id);
//     setList(carro);
//     window.sessionStorage.setItem("cart", JSON.stringify(carro));
//   };
//   return (
//     <>
//       <CartContext.Provider
//         value={{
//           addCart,
//           cartList,
//           totalItems,
//           totalPrize,
//           quitarProducto,
//         }}
//       >
//         {props.children}
//       </CartContext.Provider>
//     </>
//   );
// };

// import React, { createContext, useState, useEffect } from "react";

// // url repositorio >> https://github.com/joydesigner/react-context-api/blob/e1f96b233d2e1f111d276dd273c8567de48a7a0c/src/providers/cart/cart.provider.jsx#L15
// //https://github.com/joydesigner/react-context-api/blob/e1f96b233d2e1f111d276dd273c8567de48a7a0c/src/providers/cart/cart.utils.js

// export const CartContext = createContext([]);

// const CartProvider = ({ children }) => {

//   //lista de items del carrito
//   const [cartItems, setCartItems] = useState([]);

//   //agregar al carrito
//   const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
//   //remover del carrito
//   const removeItem = (item) =>
//     setCartItems(removeItemFromCart(cartItems, item));
//   //remover todos los items del carrito
//   const clearItemsFromCart = () => setCartItems([]);
//   //remover todos los productos de un tipo del carrito
//   const clearItemFromCart = (item) =>
//     setCartItems(filterItemFromCart(cartItems, item));

//   //Agregado de items a la lista "cartItems"
//   export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === cartItemToAdd.id
//     );

//     if (existingCartItem) {
//       return cartItems.map((cartItem) =>
//         cartItem.id === cartItemToAdd.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//     }

//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//   };

//   //remover items de la lista "cartItems" de a 1
//   export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === cartItemToRemove.id
//     );

//     if (existingCartItem.quantity === 1) {
//       return cartItems.filter(
//         (cartItem) => cartItem.id !== cartItemToRemove.id
//       );
//     }

//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToRemove.id
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   };

//   export const filterItemFromCart = (cartItems, item) =>
//     cartItems.filter((cartItem) => cartItem.id !== item.id);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         setCartItems,
//         addItem,
//         removeItem,
//         clearItemsFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  //Estado que s eencarga de almacenar al carrito
  const [cart, setCart] = useState([]);

  //funcion que agrega items al carro >>
  // ------------ No me funciona el que no se dupliquen los objetos y no pude entender porque.  ------------- //

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      //mejor forma de modificar un objeto que se encuentra en el estado >> teniendo en cuenta que solo debe sumar la quantity del mismo y no agregar uno nuevo
      //se crea un duplicado del array cart
      const updateQty = [...cart];
      //se mapea y si el id de algun elemento coincide con el del pasado por parametro a la quantity de ese elemento se le suma la quantity pasada por parametro
      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
      });
      setCart(updateQty);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => {
    cart.find((element) => element.item.id === id);
  };

  //funcion que borra todos los items del carro
  const clearCart = () => setCart([]);

  //funcion que remueve un tipo de item del carrito
  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);
    setCart(cartFilter);
  };

  console.log("carrito", cart);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
