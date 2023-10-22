import Footer from "../layout/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import BreadcrumbHeader from "../components/ProductDetails/BreadcrumbHeader";
import ProductItem from "../components/ProductDetails/ProductItem";
import Header2 from "../layout/Header2";

export default function ProductDetailsPage() {
  return (
    <div>
      <Header2 />
      <div className="my-5 ml-10">
        <BreadcrumbHeader />
      </div>
      <ProductItem />
      <ProductDetails />
      <Footer />z
    </div>
  );
}
