import chair1 from "../../assets/NewArrivals/chair1.jpg";
import chair2 from "../../assets/NewArrivals/chair2.jpg";
import chair3 from "../../assets/NewArrivals/chair3.jpg";

export default function NewArrivals() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center text-3xl font-light mt-40 my-20">
          New Arrivals
        </div>

        <div className="flex items-center justify-between ">
          <div className="grid grid-rows-2 gap-y-5 mx-20 place-items-center">
            <div className="h-[250px]">
              <img src={chair2} alt="product" width={250} />
            </div>
            <div className="">Corona Chair - Swivel Base</div>
          </div>

          <div className="grid grid-rows-2 gap-y-5 mx-20 place-items-center">
            <div className="h-[250px]">
              <img src={chair1} alt="product" width={250} />
            </div>
            <div className="">Harbour Dining Chair, Oak Base, Upholstered</div>
          </div>

          <div className="grid grid-rows-2 gap-y-5 mx-20 place-items-center">
            <div className="h-[250px]">
              <img src={chair3} alt="product" width={250} />
            </div>
            <div>CH78 Mama Bear Chair</div>
          </div>
        </div>

        <button className="text-center border border-neutral-500 rounded-md py-2 px-6  hover:border-stone-400 hover:text-stone-400 ">
          Explore New Arrivals
        </button>
      </div>
      <hr className="m-32" />
    </>
  );
}
