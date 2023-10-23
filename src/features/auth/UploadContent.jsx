import logoHeader from "../../assets/Logo/ASHIRA_BRAND.png";

export default function UploadContent() {
  return (
    <>
      <div className="flex flex-col items-center -10">
        <img
          src={logoHeader}
          alt="logo"
          width={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-lg px-16 mt-10">
        <div>Payment for invoice</div>
        <div>#661011099</div>
      </div>
      <div className=" text-amber-800 text-[10px] px-16 ">
        Note : Please make sure that you have wired the money before filling
        this form
      </div>
    </>
  );
}
