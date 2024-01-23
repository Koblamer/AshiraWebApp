export default function ProductCard({ img, name, price }) {
  return (
    <div className="flex flex-col items-center py-4">
      <div style={{ height: "23rem" }}>
        <img src={img} alt="product" width={300} />
      </div>
      <div className="text-sm"> {name}</div>
      <div className="text-sm"> ฿{price?.toLocaleString("en-US")} </div>
    </div>
  );
}
