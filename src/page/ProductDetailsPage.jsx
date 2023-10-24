import Footer from "../layout/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import BreadcrumbHeader from "../components/ProductDetails/BreadcrumbHeader";
import ProductItem from "../components/ProductDetails/ProductItem";
import Header2 from "../layout/Header2";
import { useEffect, useCallback, useState } from "react";
import axios from "axios";

export default function ProductDetailsPage() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");
  const [product, setProduct] = useState(null);

  const getProductById = useCallback(async () => {
    const res = await axios.get(`/product/${id}`);

    console.log("Product =", res);
    setProduct(res?.data?.product);
  }, [id]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div>
      <Header2 />
      <div className="my-5 ml-10">
        <BreadcrumbHeader />
      </div>
      <ProductItem product={product} />
      <ProductDetails />
      <Footer />z
    </div>
  );
}
