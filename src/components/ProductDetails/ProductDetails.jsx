import LivSetPic5 from "../../assets/LivingRoomPic/Seating/LivSetPic5.jpg";

export default function ProductDetails() {
  return (
    <>
      <div>
        <div className="flex flex-col-2  justify-between mx-52  my-32  ">
          <img src={LivSetPic5} alt="product" width={350} />
          <div className="ml-10 ">
            <div className="text-xl">Onsa Armchair</div>
            <div className="mt-4 text-justify">
              A reclining chair with function and a particular aesthetic: the
              seat shell and armrests open up from the backrest like a flower.
              The soft, inviting upholstery, high back and height-adjustable
              padded seat create a beautiful feeling of relaxation and security.
              For dreaming, reading, watching TV, or listening to music - in
              private rooms or hospitality areas.
            </div>
            <div className="mt-2">10 year guarantee</div>
            <div className="mt-2">Dimensions (cm) w78-0 x D90-109 x H108-0</div>
            <div className="mt-2">Powder-Coated Matt Bronze</div>
          </div>
        </div>
      </div>
    </>
  );
}
