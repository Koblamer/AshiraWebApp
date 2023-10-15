import logoFooter from "../assets/Logo/ASHIRA_BRAND.png";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-13 bg-stone-50 ">
        <div className=" col-start-3 col-span-1  w-52 h-auto ">
          <img src={logoFooter} alt="logo" />
        </div>
        <div>
          <div className="font-light text-sm grid justify-items-end ">
            <div>CONNECT WITH ASHIRA</div>
            <div>HEAD OFFICE</div>
            <div>
              GPF Witthayu, Tower A18th Floor, 93/1 Wireless Rd. Bangkok,
              Thailand 10330
            </div>
            <div>+662 999 9999</div>
            <div>info@ashirabrand.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
