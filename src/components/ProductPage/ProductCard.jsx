import LivPic1 from "../../assets/LivingRoomPic/Seating/LivPic1.jpg";

export default function ProductCard() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={LivPic1} alt="product" width={350} />
        <div className="text-sm"> Product Name </div>
        <div className="text-sm"> Price </div>
      </div>
    </>
  );
}
