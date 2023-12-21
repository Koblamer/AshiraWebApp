import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductPage from "../page/ProductPage";
import SignInModal from "../page/SignInModal";
import SignUpModal from "../page/SignUpModal";
import ProductDetailsPage from "../page/ProductDetailsPage";
import OrderSummaryPage from "../page/OrderSummaryPage";
import PaymentPage from "../page/PaymentPage";
import AdminPage from "../page/AdminPage";
import AdminOrderPage from "../page/Admin/AdminOrderPage";
import OrderStatusPage from "../page/OrderStatusPage";
import AdminProductPage from "../page/Admin/AdminProductPage";
import ProtectedRoute from "./ProtectRoute";
// import UploadPaymentModal from "../page/UploadPaymentModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <AdminPage /> }],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      { path: "order", element: <AdminOrderPage /> },
      { path: "product", element: <AdminProductPage /> },
    ],
  },
  {
    path: "/product",
    element: <Layout />,
    children: [{ path: "", element: <ProductPage /> }],
  },
  {
    path: "/order-status",
    element: <Layout />,
    children: [{ path: "", element: <OrderStatusPage /> }],
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
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
