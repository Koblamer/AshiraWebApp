import { useEffect, useState, useCallback } from "react";
import axios from "../config/axios";
import Header2 from "../layout/Header2";
import ProductCard from "../components/ProductLists/ProductCard";
import ShowProductLimit from "../components/ProductLists/ShowProductLimit";

import { useNavigate } from "react-router-dom";

// const mock = [
//   {
//     id: 1,
//     name: 'Table1'
//     videoUrl: 'http://xxxx.com'
//   },
//   {
//     id: 2,
//     name: 'Table2'
//     videoUrl: 'http://xxxx.com'
//   },
//   {
//     id: 2,
//     name: 'Table2'
//     videoUrl: 'http://xxxx.com'
//   },
// ]

const ProductsPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  console.log(window.location.pathname);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let department = params.get("department");
  let category = params.get("category");

  const goToProductDetails = (id) => {
    navigate(`/product-details?id=${id}`);
  };

  const getProduct = useCallback(async () => {
    const res = await axios.get(
      `/product?department=${department || "allproducts"}&category=${category}`
    );

    console.log("Product =");
    setProduct(res?.data?.products);
  }, [category, department]);

  //USEEFFECT  ถ้าไม่ใส่[]ทำงานทุกครั้งที่มีสเตทเปลี่ยนแปลง แต่ถ้าใส่ จะทำครั้งเดียวตอนรีโหลดหน้า
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <Header2 />
      <div className="flex justify-end px-20 py-10">
        <ShowProductLimit />
      </div>
      <div className="grid grid-cols-3 px-20 ">
        {product &&
          product?.map((p, i) => {
            return (
              <div key={i} onClick={() => goToProductDetails(p.id)}>
                <ProductCard
                  img={p?.imageUrl}
                  name={p?.name}
                  price={p?.price}
                />
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
