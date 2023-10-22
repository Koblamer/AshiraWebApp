import { useNavigate } from "react-router-dom";

export default function BreadcrumbHeader() {
  const navigate = useNavigate();
  const arrowRight = ">";

  const handleOnClick = (page) => {
    navigate(`/${page}`, true);
  };

  return (
    <>
      <div className="flex">
        <div onClick={() => handleOnClick("")} className="cursor-pointer">
          HOME
        </div>
        <div className="px-1"> {arrowRight} </div>
        <div
          onClick={() => handleOnClick("product")}
          className="cursor-pointer"
        >
          ALL Product
        </div>
        <div className="px-1"> {arrowRight} </div>
        <div>Product Name</div>
      </div>
    </>
  );
}
