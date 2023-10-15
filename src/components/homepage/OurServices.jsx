import OurServicesPic1 from "../../assets/OurservicesPic/OurServicesPic1.jpg";
import OurServicesPic2 from "../../assets/OurservicesPic/OurServicesPic2.jpg";

export default function OurServices() {
  return (
    <>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-start-3 col-span-2 text-4xl font-semibold">
          Our Services
        </div>

        <div className="col-start-5 col-span-4 text-justify ">
          We provide a growing range of related services to make the experience
          of building a home as seamless as possible. From styling and furniture
          care to turn-key solutions by our full-service design studio, no
          request is too great and no detail is too small.
        </div>
      </div>

      <div className="grid grid-cols-10  gap-10 my-20">
        <div className="col-start-3 col-span-3   ">
          <img src={OurServicesPic1} alt="picture"></img>
        </div>

        <div className="col-start-6 col-span-3   ">
          <img src={OurServicesPic2} alt="picture"></img>
        </div>

        <div className="col-start-3 col-span-3 text-justify ">
          <div className="pb-3 font-semibold">Advisory</div>
          <div className="font-light">
            With over two decades of helping clients with their projects in
            Thailand and abroad, we are happy to listen to your ideas and needs
            while sharing with you our experience and insight.
          </div>
        </div>

        <div className="col-start-6 col-span-3 ">
          <div className="pb-3 font-semibold">Design Solutions</div>
          <div className="font-light">
            Whether you are looking for a total solution for a fully fitted
            condo or newly built home, we can provide artistic direction,
            assemble a team and make it happen for you.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-center border border-neutral-500 rounded-md py-2 px-6 mb-32 hover:border-stone-400 hover:text-stone-400 ">
          Explore New Arrivals
        </button>
      </div>
    </>
  );
}
