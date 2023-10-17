import logoHeader from "../assets/Logo/ASHIRA_BRAND.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <header className="px-4 bg-white sticky top-0 z-30 text-neutral-500 cursor-default">
      <div className="flex justify-end text-xs">
        <div className="pr-2 text-stone-300  hover:text-stone-400 ">ABOUT</div>
        <div className=" text-stone-300  hover:text-stone-400">CONTACT</div>
      </div>

      <hr className=" justify-item-center" />
      <div className="flex justify-center py-1">
        <img
          src={logoHeader}
          alt="logo"
          width={120}
          onClick={goToHomePage}
          className="cursor-pointer"
        />
      </div>
      <hr className=" justify-item-center w-full" />

      <div className="flex justify-between px-20 py-2">
        <div className="dropdown">
          <button className="dropbtn hover:text-stone-400">ALL PRODUCTS</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a href="/product" className=" hover:text-stone-400 my-1">
                    Seating
                  </a>
                  <a href="/product" className=" hover:text-stone-400 my-1">
                    Tables
                  </a>
                  <a
                    href="/product?category=bedandmattresses"
                    className=" hover:text-stone-400 my-1"
                  >
                    Bed & Mattresses
                  </a>
                  <a
                    href="/product?category=officechairs"
                    className=" hover:text-stone-400 my-1"
                  >
                    Office Chairs
                  </a>

                  <a
                    href="/product?category=officedesks"
                    className=" hover:text-stone-400 my-1"
                  >
                    Office Desks
                  </a>

                  <a
                    href="/product?category=outdoortables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Outdoor Tables
                  </a>

                  <a
                    href="/product?category=outdoorsofas"
                    className=" hover:text-stone-400 my-1"
                  >
                    Outdoor Sofas
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?category=lighting"
                    className=" hover:text-stone-400 my-1"
                  >
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a
                  href="product?department=saleitem"
                  className=" hover:text-stone-400 my-1"
                >
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
                  <a
                    href="/product?department=livingroom&category=seating"
                    className=" hover:text-stone-400 my-1"
                  >
                    Seating
                  </a>
                  <a
                    href="product?department=livingroom&category=tables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?department=livingroom&category=lighting"
                    className=" hover:text-stone-400 my-1"
                  >
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a
                  href="product?department=saleitem"
                  className=" hover:text-stone-400 my-1"
                >
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
                  <a
                    href="product?department=dinningroom&category=seating"
                    className=" hover:text-stone-400 my-1"
                  >
                    Seating
                  </a>
                  <a
                    href="product?department=dinningroom&category=tables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?department=dinningroom&category=lighting"
                    className=" hover:text-stone-400 my-1"
                  >
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a
                  href="product?department=saleitem"
                  className=" hover:text-stone-400 my-1"
                >
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
                  <a
                    href="product?department=bedroom&category=bedandmattresses"
                    className=" hover:text-stone-400 my-1"
                  >
                    Bed & Mattresses
                  </a>
                  <a
                    href="product?department=bedroom&category=setting"
                    className=" hover:text-stone-400 my-1"
                  >
                    Seating
                  </a>
                  <a
                    href="product?department=bedroom&category=tables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?department=bedroom&category=lighting"
                    className=" hover:text-stone-400 my-1"
                  >
                    Lighting
                  </a>
                </div>
              </div>
              <div className="border border-x-stone-300 "></div>
              <div className="flex flex-col mx-16  ">
                <a
                  href="product?department=saleitem"
                  className=" hover:text-stone-400 my-1"
                >
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
                    <a
                      href="product?department=workspace&category=officechairs"
                      className=" hover:text-stone-400 my-1"
                    >
                      Office Chairs
                    </a>

                    <a
                      href="product?department=workspace&category=officedesks"
                      className=" hover:text-stone-400 my-1"
                    >
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
                  <a
                    href="product?department=saleitem"
                    className=" hover:text-stone-400 my-1"
                  >
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
                    <a
                      href="product?department=outdoor&category=outdoortables"
                      className=" hover:text-stone-400 my-1"
                    >
                      Outdoor Tables
                    </a>
                    <a
                      href="product?department=outdoor&category=outdoorsofas"
                      className=" hover:text-stone-400 my-1"
                    >
                      Outdoor Sofas
                    </a>
                  </div>
                </div>
                <div className="border border-x-stone-300 "></div>
                <div className="flex flex-col mx-16  ">
                  <a
                    href="product?department=saleitem"
                    className=" hover:text-stone-400 my-1"
                  >
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
          <div className="hover:text-stone-400 py-1">
            <a href="signin?">SIGN IN</a>
          </div>
        </div>
      </div>
    </header>
  );
}
