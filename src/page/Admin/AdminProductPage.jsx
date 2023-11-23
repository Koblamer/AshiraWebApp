import { useState, useEffect } from "react";
import { deleteProduct, getAllProduct } from "../../api/product";
import AddProductModal from "./component/AddProductModal";
import UpdateProductModal from "./component/UpdateProductModal";
// import moment from "moment";

const AdminProductPage = () => {
  const [product, setProduct] = useState(null);
  const [updateProductId, setUpdateProductId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

  const getProductDetails = async () => {
    const res = await getAllProduct();

    setProduct(res?.products);
  };

  const deleteProductItem = async (id) => {
    const res = await deleteProduct(id);
    if (res) {
      getProductDetails();
    }
  };

  const openUpdateModal = async (id) => {
    setUpdateProductId(id);
    setIsOpenUpdateModal(true);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="text-xl pb-5">Product</div>
        <button
          onClick={() => setIsOpenModal(true)}
          className="border px-2 my-2 rounded-md bg-green-500 text-white"
        >
          Add Product
        </button>
      </div>

      <div className="table-dashboard">
        <table>
          <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Department</th>
            <th>Category</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {product?.length > 0 &&
            product?.map((p, i) => {
              return (
                <tr key={i}>
                  <td>{p?.id}</td>
                  <td>{p?.SKU}</td>
                  <td>{p?.name}</td>
                  <td>
                    <img
                      src={p?.imageUrl}
                      alt="product"
                      height={100}
                      width={100}
                    />
                  </td>

                  <td>{p.price?.toLocaleString("en-US")}</td>
                  <td>{p.department}</td>
                  <td>{p.category}</td>
                  {/* <td>{moment(p.createdAt).format("DD/MM/YYYY")}</td>
                  <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td> */}
                  <td>
                    <button
                      onClick={() => openUpdateModal(p?.id)}
                      className="border px-2 py-1 rounded-md bg-blue-500 text-white"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteProductItem(p?.id)}
                      className="border px-2 py-1 rounded-md bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      {isOpenModal && (
        <AddProductModal
          setIsOpenModal={setIsOpenModal}
          getProductDetails={getProductDetails}
        />
      )}
      {isOpenUpdateModal && (
        <UpdateProductModal
          updateProductId={updateProductId}
          setIsOpenUpdateModal={setIsOpenUpdateModal}
          getProductDetails={getProductDetails}
        />
      )}
    </div>
  );
};

export default AdminProductPage;
