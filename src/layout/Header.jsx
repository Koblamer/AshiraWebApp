import logoHeader from "../assets/Logo/ASHIRA_BRAND.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SignInModal from "../page/SignInModal";
import SignUpModal from "../page/SignUpModal";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import OrderStatus from "../components/OrderStatus/OrderStatus";
// import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { shoppingCart } = useProduct();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  // const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  console.log("userData =", userData);

  const goToHomePage = () => {
    navigate("/");
  };

  const goToOrderStatusPage = () => {
    navigate("/order-status");
  };

  const goToOrderSummaryPage = () => {
    navigate("/order-summary");
  };

  const goToAdminPage = () => {
    navigate("/admin");
  };

  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  const toggleSignUpModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(!showSignUpModal);
  };

  const closeSignUpAndBackToSignIn = () => {
    setShowSignInModal(true);
    setShowSignUpModal(false);
  };

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  // useEffect(() => {

  // },[]);

  return (
    <header className="px-4 bg-white sticky top-0 z-30 text-neutral-500 cursor-default">
      <div className="flex justify-end text-xs">
        {userData?.role === "ADMIN" && (
          <div
            className="pr-2 text-stone-300  hover:text-stone-400 "
            onClick={goToAdminPage}
          >
            ADMIN PAGE
          </div>
        )}
        <div className="pr-2 text-stone-300  hover:text-stone-400 ">ABOUT</div>
        <div className="pr-2 text-stone-300  hover:text-stone-400">CONTACT</div>
        {/* {userData && (
          <div
            className=" text-stone-300  hover:text-stone-400"
            onClick={logout}
          >
            LOGOUT
          </div>
        )} */}
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
          <button className="dropbtn hover:text">ALL PRODUCTS</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a
                    href="/product?department=allproducts&category=seating"
                    className=" hover:text-stone-400 my-1"
                  >
                    Seating
                  </a>
                  <a
                    href="/product?department=allproducts&category=tables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Tables
                  </a>
                  <a
                    href="/product?department=allproducts&category=bedandmattresses"
                    className=" hover:text-stone-400 my-1"
                  >
                    Bed & Mattresses
                  </a>
                  <a
                    href="/product?department=allproducts&category=officechairs"
                    className=" hover:text-stone-400 my-1"
                  >
                    Office Chairs
                  </a>

                  <a
                    href="/product?department=allproducts&category=officedesks"
                    className=" hover:text-stone-400 my-1"
                  >
                    Office Desks
                  </a>

                  <a
                    href="/product?department=allproducts&category=outdoortables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Outdoor Tables
                  </a>

                  <a
                    href="/product?department=allproducts&category=outdoorsofas"
                    className=" hover:text-stone-400 my-1"
                  >
                    Outdoor Sofas
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?department=allproducts&category=lighting"
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
          <button className="dropbtn hover:text-stone-400">DINING ROOM</button>
          <div className="dropdown-content bg-white py-5">
            <div className="flex justify-center py-5">
              <div className="flex">
                <div className="flex flex-col mx-16   ">
                  <a
                    href="product?department=diningroom&category=seating"
                    className=" hover:text-stone-400 my-1"
                  >
                    Seating
                  </a>
                  <a
                    href="product?department=diningroom&category=tables"
                    className=" hover:text-stone-400 my-1"
                  >
                    Tables
                  </a>
                </div>
                <div className="flex flex-col  mx-16  ">
                  <a
                    href="product?department=diningroom&category=lighting"
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
                    href="product?department=bedroom&category=seating"
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

        <div className="flex justify-items-end">
          <div className="border border-x-stone-300 "></div>
          <div className="justify-items-start py-1 pl-5 pr-20 hover:text-stone-400 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          {userData ? (
            <div className="dropdown">
              <div className="py-1">{userData?.firstName}</div>

              <div className="dropdown-content items-center relative dropbtn">
                <div>
                  <div
                    className="pr-2 text-stone-300  hover:text-stone-400 "
                    onClick={goToOrderStatusPage}
                  >
                    ORDER CHECK
                  </div>
                  {userData && (
                    <div
                      className=" text-stone-300  hover:text-stone-400"
                      onClick={logout}
                    >
                      LOGOUT
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="hover:text-stone-400 py-1"
              onClick={toggleSignInModal}
            >
              SIGN IN
            </div>
          )}

          <div
            className="justify-items-end py-1 pl-5 hover:text-stone-400 cursor-pointer"
            onClick={goToOrderSummaryPage}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="pl-1">{`(${shoppingCart?.length})`}</span>
          </div>
        </div>
      </div>
      {showSignInModal && (
        <SignInModal
          toggleSignInModal={toggleSignInModal}
          toggleSignUpModal={toggleSignUpModal}
          setShowSignInModal={setShowSignInModal}
        />
      )}
      {showSignUpModal && (
        <SignUpModal
          toggleSignUpModal={toggleSignUpModal}
          toggleSignInModal={toggleSignInModal}
          setShowSignUpModal={setShowSignUpModal}
          closeSignUpAndBackToSignIn={closeSignUpAndBackToSignIn}
        />
      )}
    </header>
  );
}
