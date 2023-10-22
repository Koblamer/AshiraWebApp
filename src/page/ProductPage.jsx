import { useEffect, useState } from "react";
import axios from "../config/axios";
import Header2 from "../layout/Header2";
import ProductCard from "../components/ProductLists/ProductCard";
import ShowProductLimit from "../components/ProductLists/ShowProductLimit";

import { useNavigate } from "react-router-dom";

const mockProductList = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  console.log(window.location.pathname);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let department = params.get("department");
  let category = params.get("category");
  console.log(search);
  console.log("DEPARTMENT", department);
  console.log("CAREGORY", category);

  const goToProductDetails = (id) => {
    console.log(id);
    navigate("/product-details");
  };

  //USEEFFECT  ถ้าไม่ใส่[]ทำงานทุกครั้งที่มีสเตทเปลี่ยนแปลง แต่ถ้าใส่ จะทำครั้งเดียวตอนรีโหลดหน้า
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `/product?department=${
          department || "allproducts"
        }&category=${category}`
      );
      console.log("Product =", res);
      setProduct(res);
    };
    getProduct();
  }, []);

  return (
    <>
      <Header2 />
      <div className="flex justify-end px-20 py-10">
        <ShowProductLimit />
      </div>
      <div className="grid grid-cols-3 px-20 ">
        {mockProductList.map((p, i) => {
          return (
            <div key={i} onClick={() => goToProductDetails(p.id)}>
              <ProductCard />
            </div>
          );
        })}
      </div>

      {/* {product?.data && (
        <>
          {product?.data.products.map((p) => {
            return (
              <>
                <div>{p.name}</div>
                <div>{p.SKU}</div>
                <div>{p.category}</div>
                <div>{p.department}</div>
                <div>{p.desc}</div>
                <div>{p.id}</div>
                <div>{p.imageUrl}</div>
                <div>{p.price}</div>
                <div>{p.updatedAt}</div>
                <div>{p.vdoUrl}</div>
              </>
            );
          })}
        </>
      )} */}
    </>
  );
};

export default ProductsPage;
