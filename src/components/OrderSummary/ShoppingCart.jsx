export default function ShoppingCart() {
  return (
    <>
      <div className="text-xl">Shopping cart</div>
      <hr />
      <div className="font-bold grid grid-cols-6 start-1">
        <div className="col-start-3">Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <div className="grid grid-cols-6">
        <div> x </div>
        <div> Picture </div>
        <div>Product Name</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
    </>
  );
}
