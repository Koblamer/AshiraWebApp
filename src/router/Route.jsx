import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductPage from "../page/ProductPage";
// import OrderPage from "../page/OrderPage";
import SignInModal from "../page/SignInModal";
import SignUpModal from "../page/SignUpModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/product",
    element: <Layout />,
    children: [
      { path: "", element: <ProductPage /> },
      // { path: "/:id", element: <ProductPage /> },
    ],
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
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
