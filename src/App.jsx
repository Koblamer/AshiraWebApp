import "./App.css";
import { ToastContainer } from "react-toastify";
import Route from "./router/Route";
// import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Route />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
