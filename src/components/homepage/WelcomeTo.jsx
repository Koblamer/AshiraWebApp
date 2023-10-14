import welcomePic1 from "../../assets/WelcomeTo/WelcomePic1.jpg";

export default function WelcomeTo() {
  return (
    <>
      <div className="flex flex-col items-center my-10">
        <div className=" text-xl text-center  ">Welcome to Our Home</div>
        <div className="text-xl text-center my-20  ">
          The Leading Luxury Furniture Retailer in Bangkok
        </div>

        <img src={welcomePic1} alt="Picture" width={815}></img>

        <div className="flex flex-row gap-x-10 px-80 my-10 ">
          <div className=" text-justify basis-1/4  flex-1">
            At ASHIRA, we believe in living well, in the everyday and in the
            most special moments.
          </div>

          <div className="flex-1 flex-col basis-1/4">
            <div className=" text-justify">
              Since opening our doors in 1994, ASHIRA has stayed true to our
              commitment of helping customers achieve the simple concept of
              Living Well. As the leading luxury furniture retailer in Thailand,
              we strive to become the destination for all things home and every
              move we make begins with our clients in mind. Our business and
              family of brands have grown over the years to meet the needs and
              desires of our discerning customers. We now have furniture
              showrooms in Siam Paragon, Thonglor, Soi Sukhumvit 26 and Soi
              Sukhumvit 61.
            </div>

            <div className="my-3 hover:text-stone-400 font-bold">Read more</div>
          </div>
        </div>
      </div>
    </>
  );
}
