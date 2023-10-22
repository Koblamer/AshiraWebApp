import LivSetPic4 from "../../assets/LivingRoomPic/Seating/LivSetPic4.jpg";
import { useNavigate } from "react-router-dom";

export default function ProductItem() {
  const navigate = useNavigate();

  const handleOnClick = (page) => {
    navigate(`/${page}`, true);
  };

  return (
    <div>
      <div className="flex justify-center mt-20 ">
        <div className="mr-32">
          <img src={LivSetPic4} alt="product" width={350}></img>
        </div>
        <div>
          <div className="font-bold text-2xl ">Onsa Armchair</div>

          <div className="my-2">฿ 78,000</div>

          <div>How to get it</div>
          <div className="border py-2 px-10 my-2  rounded-md">
            <div>Delivery</div>
            <div>Avaliable</div>
            <div>Find all options at checkout</div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => handleOnClick("order-summary")}
              className="border py-1 px-6 my-2 rounded-md bg-green-500 text-white "
            >
              Purchase
            </button>
            <button className="border py-1 px-6 my-2 rounded-md bg-red-500 text-white ">
              Add to card
            </button>
          </div>
        </div>
      </div>
      <hr className="m-32" />
    </div>
  );
}
