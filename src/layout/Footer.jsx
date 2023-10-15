import logoFooter from "../assets/Logo/ASHIRA_BRAND.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLine,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-around  bg-stone-50 px-10 py-20">
      <div className=" w-52 h-auto">
        <img src={logoFooter} alt="logo" />
      </div>
      <div>
        <div className="font-light text-sm grid justify-items-end ">
          <div className="my-1">CONNECT WITH ASHIRA</div>
          <div className="flex justify-between w-28    ">
            <div className="hover:text-stone-400">
              <FontAwesomeIcon icon={faLine} />
            </div>
            <div className="hover:text-stone-400">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="hover:text-stone-400">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="hover:text-stone-400">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className="my-1">HEAD OFFICE</div>
          <div className="my-1">
            GPF Witthayu, Tower A18th Floor, 93/1 Wireless Rd. Bangkok, Thailand
            10330
          </div>
          <div className="my-1">+662 999 9999</div>
          <div className="my-1">info@ashirabrand.com</div>
        </div>
      </div>
    </div>
  );
}
