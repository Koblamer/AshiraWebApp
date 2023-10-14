import logoImg from "../assets/Logo/ASHIRA_BRAND.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="px-4 bg-white sticky top-0 z-30 text-neutral-500 cursor-default">
      <div className="flex justify-end text-xs">
        <div className="pr-2 text-stone-300  hover:text-stone-400 ">ABOUT</div>
        <div className=" text-stone-300  hover:text-stone-400">CONTACT</div>
      </div>

      <hr className=" justify-item-center" />
      <div className="flex justify-center py-1">
        <img src={logoImg} alt="logo" width={120} />
      </div>
      <hr className=" justify-item-center w-full" />

      <div className="flex justify-between px-20 py-1  text-base ">
        <div className=" hover:text-stone-400 pl-20">PRODUCT</div>
        <div className=" hover:text-stone-400">LIVINGROOM</div>
        <div className=" hover:text-stone-400">DINNING ROOM</div>
        <div className=" hover:text-stone-400">BEDROOM</div>
        <div className=" hover:text-stone-400">WORKSPACE</div>
        <div className=" hover:text-stone-400">OUTDOOR</div>

        <div className="flex justify-items-end pr-20">
          <div className="border border-x-stone-300 "></div>
          <div className="justify-items-start pl-5 pr-20 hover:text-stone-400 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="hover:text-stone-400">SIGN IN</div>
        </div>
      </div>
    </header>
  );
}
