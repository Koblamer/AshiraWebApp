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
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
