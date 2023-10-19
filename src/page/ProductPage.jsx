import { useEffect, useState } from "react";
import axios from "../config/axios";
import Header2 from "../layout/Header2";
import ProductCard from "../components/ProductPage/ProductCard";
import ShowProductLimit from "../components/ProductPage/ShowProductLimit";

const ProductsPage = () => {
  const [product, setProduct] = useState(null);

  console.log(window.location.pathname);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let department = params.get("department");
  let category = params.get("category");
  console.log(search);
  console.log("DEPARTMENT", department);
  console.log("CAREGORY", category);
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
      <div className="items-right">
        <ShowProductLimit />
      </div>
      <div className="grid grid-cols-3 mt-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {product?.data && (
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
      )}
    </>
  );
};

export default ProductsPage;
