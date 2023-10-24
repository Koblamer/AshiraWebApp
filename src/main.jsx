import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./SignIn.css";
import "./Admin.css";
import ProductContextProvider from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
);
