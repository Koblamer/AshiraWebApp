export default function ProductCard({ img, name, price }) {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="product" width={350} />
      <div className="text-sm"> {name}</div>
      <div className="text-sm"> ฿{price?.toLocaleString("en-US")} </div>
    </div>
  );
}
