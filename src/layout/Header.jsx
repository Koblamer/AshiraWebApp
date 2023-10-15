import logoHeader from "../assets/Logo/ASHIRA_BRAND.png";
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
        <img src={logoHeader} alt="logo" width={120} />
      </div>
      <hr className=" justify-item-center w-full" />

      <div className="flex justify-between px-20 py-1  text-base ">
        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">PRODUCT</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Seating
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Tables
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Bed & Mattresses
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Office
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Outdoor
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Lighting
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Kitchen
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Bathroom
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a href="#" className=" hover:text-stone-400 my-1">
                  Shop All Sale Items
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">LIVINGROOM</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Seating
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a href="#" className=" hover:text-stone-400 my-1">
                  Shop All Sale Items
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">DINNING ROOM</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Seating
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a href="#" className=" hover:text-stone-400 my-1">
                  Shop All Sale Items
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">BEDROOM</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Bed & Mattresses
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Seating
                  </a>
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a href="#" className=" hover:text-stone-400 my-1">
                  Shop All Sale Items
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">WORKSPACE</button>
          <div className="dropdown-content">
            <div className="dropdown-content bg-white py-5">
              <div className="flex justify-center py-5">
                <div className="flex">
                  <div className="flex flex-col mx-16">
                    <a href="#" className=" hover:text-stone-400 my-1">
                      Office Chairs
                    </a>

                    <a href="#" className=" hover:text-stone-400 my-1">
                      Office Desks
                    </a>
                  </div>
                  <div className="flex flex-col  mx-16  ">
                    <a href="#" className=" hover:text-stone-400 my-1">
                      Lighting
                    </a>
                  </div>
                </div>
                <div className="border border-x-stone-300 "></div>
                <div className="flex flex-col mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Shop All Sale Items
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">OUTDOOR</button>
          <div className="dropdown-content">
            <div className="dropdown-content bg-white py-5">
              <div className="flex justify-center py-5">
                <div className="flex">
                  <div className="flex flex-col mx-16">
                    <a href="#" className=" hover:text-stone-400 my-1">
                      Outdoor Tables
                    </a>
                    <a href="#" className=" hover:text-stone-400 my-1">
                      Outdoor Sofas
                    </a>
                  </div>
                </div>
                <div className="border border-x-stone-300 "></div>
                <div className="flex flex-col mx-16  ">
                  <a href="#" className=" hover:text-stone-400 my-1">
                    Shop All Sale Items
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-items-end pr-20">
          <div className="border border-x-stone-300 "></div>
          <div className="justify-items-start py-1 pl-5 pr-20 hover:text-stone-400 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="hover:text-stone-400 py-1">SIGN IN</div>
        </div>
      </div>
    </header>
  );
}
