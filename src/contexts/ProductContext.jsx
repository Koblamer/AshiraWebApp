import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    let shoppingCartStorage =
      JSON.parse(localStorage.getItem("shoppingCart")) || []; //JSON.parse คือการแปลงค่ากลับให้เป็นค่าเดิม
    setShoppingCart(shoppingCartStorage);
  }, []);

  const addProduct = async (data) => {
    console.log("addProduct =", data);
    const product = {
      id: data?.id,
      imageUrl: data?.imageUrl,
      name: data?.name,
      price: data?.price,
      qty: data?.qty,
    };

    const findProductIndex = shoppingCart.findIndex((p) => p.id == data?.id);

    if (findProductIndex !== -1) {
      increaseProductQty(data?.id);
    } else {
      const newArray = [...shoppingCart];
      newArray.push(product);
      setShoppingCart(newArray);

      // JSON.stringify คือการแปลงค่าต่างๆให้เป็นข้อความ เพราะ Local storage เก็บค่าได้แต่ String
      localStorage.setItem("shoppingCart", JSON.stringify(newArray));
    }
  };

  const removeProduct = async (id) => {
    const filterRemoveProduct = shoppingCart.filter((p) => p.id != id);

    setShoppingCart(filterRemoveProduct);
    localStorage.setItem("shoppingCart", JSON.stringify(filterRemoveProduct));
  };

  const increaseProductQty = async (id) => {
    // หา Index ใน Array จาก id ที่ส่งมาs
    const findProductIndex = shoppingCart.findIndex((p) => p.id == id);
    shoppingCart[findProductIndex].qty++;

    const newArray = [...shoppingCart];

    setShoppingCart(newArray);
    localStorage.setItem("shoppingCart", JSON.stringify(newArray));
  };

  const decreaseProductQty = async (id) => {
    const findProductIndex = shoppingCart.findIndex((p) => p.id == id);
    shoppingCart[findProductIndex].qty--;

    if (shoppingCart[findProductIndex].qty === 0) {
      removeProduct(id);
    } else {
      const newArray = [...shoppingCart];

      setShoppingCart(newArray);
      localStorage.setItem("shoppingCart", JSON.stringify(newArray));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addProduct,
        removeProduct,
        increaseProductQty,
        decreaseProductQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
