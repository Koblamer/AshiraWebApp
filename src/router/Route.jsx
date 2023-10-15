import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  // {
  //   path: "/product",
  //   element: <Layout />,
  //   children: [{ path: "", element: <Product /> }],
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
