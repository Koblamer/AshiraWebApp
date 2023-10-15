import welcomePic1 from "../../assets/WelcomeTo/WelcomePic1.jpg";

export default function WelcomeTo() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className=" text-xl text-center ">Welcome to Our Home</div>
        <div className="text-3xl text-center font-light mt-10 mb-20 ">
          The Leading Luxury Furniture Retailer in Bangkok
        </div>

        <div className="grid grid-cols-10 gap-8 ">
          <div className="col-start-3 col-end-9">
            <img src={welcomePic1} alt="Picture"></img>
          </div>

          <div className="col-start-3 col-span-2  text-xl">
            At ASHIRA, we believe in living well, in the everyday and in the
            most special moments.
          </div>

          <div className=" col-start-5 col-end-9 text-justify font-light">
            <div>
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

            <div className="my-3 hover:text-stone-400 font-medium">
              Read more
            </div>
          </div>
        </div>
      </div>

      <hr className="m-32" />
    </>
  );
}
