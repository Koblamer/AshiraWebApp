import { useProduct } from "../../hooks/useProduct";

export default function ShoppingCart() {
  const {
    shoppingCart,
    removeProduct,
    increaseProductQty,
    decreaseProductQty,
  } = useProduct();

  const handleRemoveProduct = (product) => {
    removeProduct(product?.id);
  };

  const handleIncreaseQty = (id) => {
    increaseProductQty(id);
  };

  const handleDecreaseQty = (id) => {
    decreaseProductQty(id);
  };

  return (
    <>
      <div className="text-sm">Shopping cart</div>
      <hr />
      <div className="font-bold grid grid-cols-6 start-1 my-2">
        <div className="col-start-3">Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {shoppingCart?.length > 0 &&
        shoppingCart?.map((p, i) => {
          return (
            <div key={i}>
              <div className="grid grid-cols-6 my-6">
                <div
                  className="flex items-center text-sm cursor-pointer "
                  onClick={() => handleRemoveProduct(p)}
                >
                  x
                </div>
                <div className="flex items-center">
                  <img
                    src={p?.imageUrl}
                    alt="product_order_summary"
                    className="pr-5"
                  />
                </div>
                <div className="flex items-center">{p?.name}</div>
                <div className="flex items-center">
                  {p?.price?.toLocaleString("en-US")}
                </div>
                <div className="flex items-center text-sm">
                  <span
                    className="text-sm mx-2 cursor-pointer"
                    onClick={() => handleDecreaseQty(p?.id)}
                  >
                    -
                  </span>
                  {p?.qty}
                  <span
                    className="text-sm mx-2 cursor-pointer"
                    onClick={() => handleIncreaseQty(p?.id)}
                  >
                    +
                  </span>
                </div>
                <div className="flex items-center">
                  {(p?.qty * p?.price).toLocaleString("en-US")}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </>
  );
}
