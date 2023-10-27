import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

export default function ProductItem({ product }) {
  const { addProduct } = useProduct();
  const navigate = useNavigate();

  const handlePurchase = (page, isPurchase) => {
    const productItem = {
      id: product?.id,
      imageUrl: product?.imageUrl,
      name: product?.name,
      price: product?.price,
      qty: 1,
    };
    addProduct(productItem);

    if (isPurchase) {
      navigate(`/${page}`, true);
    }
  };

  return (
    <div>
      {product && (
        <div className="flex justify-center mt-20 ">
          <div className="mr-32">
            <img src={product?.imageUrl} alt="product" width={350}></img>
          </div>
          <div>
            <div className="font-bold text-2xl ">{product?.name}</div>

            <div className="my-2">฿ {product?.price}</div>

            <div>How to get it</div>
            <div className="border py-2 px-10 my-2 rounded-md">
              <div>Delivery</div>
              <div>Avaliable</div>
              <div>Find all options at checkout</div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handlePurchase("order-summary", true)}
                className="border py-1 px-6 my-2 rounded-md bg-green-500 text-white "
              >
                Purchase
              </button>
              <button
                onClick={() => handlePurchase("order-summary", false)}
                className="border py-1 px-6 my-2 rounded-md bg-red-500 text-white "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      <hr className="m-32" />
    </div>
  );
}
