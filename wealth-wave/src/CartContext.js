import { createContext, useState } from "react";
import { courseArray, getCourseData } from "./courseDetails";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getTotalCost(){
    let totalCost = 0
    cartProducts.map((cartItem) => {
        const productData = getCourseData(cartItem.id)
        totalCost+= (productData.price * cartItem.quantity)
    })
    return totalCost
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) => {
          return product.id === id ? { ...product, quantity: quantity + 1 } : product;
        })
      );
    }
  }

  function removeOneFromCart(id){
    const quantity = getProductQuantity(id)

    if(quantity === 1){
        deleteFromCart(id)
    }
    else{
        setCartProducts(
            cartProducts.map((product) => {
              return product.id === id ? { ...product, quantity: quantity - 1 } : product;
            })
          );
    }
  }

  function deleteFromCart(id){
    setCartProducts((cartProductS)=> cartProducts.filter((currentProduct)=>{
        return currentProduct.id != id
    }))
  }


  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };


 
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export {CartProvider}
