import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductPage from "../page/ProductPage";
// import OrderPage from "../page/OrderPage";
import SignInModal from "../page/SignInModal";
import SignUpModal from "../page/SignUpModal";
import ProductDetailsPage from "../page/ProductDetailsPage";
import OrderSummaryPage from "../page/OrderSummaryPage";
import PaymentPage from "../page/PaymentPage";
import AdminLayout from "../layout/AdminLayout";
import AdminPage from "../page/AdminPage";
import AdminOrderPage from "../page/Admin/AdminOrderPage";
// import UploadPaymentModal from "../page/UploadPaymentModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "", element: <AdminPage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "order", element: <AdminOrderPage /> }],
  },
  {
    path: "/product",
    element: <Layout />,
    children: [{ path: "", element: <ProductPage /> }],
  },
  {
    path: "/signin",
    element: (
      // <RedirectIfAuthenticated>
      <SignInModal />
      // </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/signup",
    element: (
      // <RedirectIfAuthenticated>
      <SignUpModal />
      // </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/product-details",
    element: (
      // <RedirectIfAuthenticated>
      <ProductDetailsPage />
      // </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/order-summary",
    element: (
      // <RedirectIfAuthenticated>
      <OrderSummaryPage />
      // </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/payment",
    element: (
      // <RedirectIfAuthenticated>
      <PaymentPage />
      // </RedirectIfAuthenticated>
    ),
  },
  // {
  //   path: "/upload-payment",
  //   element: (
  //     // <RedirectIfAuthenticated>
  //     <UploadPaymentModal />
  //     // </RedirectIfAuthenticated>
  //   ),
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
