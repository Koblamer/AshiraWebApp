import { useState, useEffect, useCallback, useRef } from "react";
import { getProductById, updateProduct } from "../../../api/product";
import { uploadImage } from "../../../api/image";

const UpdateProductModal = ({
  updateProductId,
  setIsOpenUpdateModal,
  getProductDetails,
}) => {
  const [fileImage, setFileImage] = useState(null);
  const [fileVideo, setFileVideo] = useState(null);
  const [input, setInput] = useState({
    SKU: "",
    name: "",
    desc: "",
    dimensions: "",
    imageUrl: "",
    vdoUrl: "",
    price: "",
    department: "",
    category: "",
  });
  const fileEl = useRef(null);
  const fileVideoEl = useRef(null);

  const getProduct = useCallback(async () => {
    const res = await getProductById(updateProductId);
    console.log("getProduct res =", res);
    if (res?.product) {
      setInput({
        ...res?.product,
      });

      // setFileImage(res?.product?.imageUrl);
      // setFileVideo(res?.product?.vdoUrl);
    }
  }, [updateProductId]);

  console.log("input =", input);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log("handleSubmitForm input =", input);
      console.log("handleSubmitForm fileImage =", fileImage);

      const formDataImage = new FormData();
      const formDataVideo = new FormData();
      let resUploadImage = input?.imageUrl;
      let resUploadVideo = input?.vdoUrl;

      if (fileImage) {
        formDataImage.append("image", fileImage);
        resUploadImage = await uploadImage(formDataImage);
        input.imageUrl = resUploadImage?.imageUrl;
      }
      if (fileVideo) {
        formDataVideo.append("image", fileVideo);
        resUploadVideo = await uploadImage(formDataImage);
        input.vdoUrl = resUploadVideo?.imageUrl;
      }

      const res = await updateProduct(input?.id, input);

      if (res) {
        alert("Updated success");
        setIsOpenUpdateModal(false);
        getProductDetails();
      }
    } catch (err) {
      console.log("handleSubmitForm err =", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="modal-overlay">
      <div className="shadow-md modal-content w-1/3">
        Add Product
        <div
          className="flex justify-end mr-5 cursor-pointer"
          onClick={() => setIsOpenUpdateModal(false)}
        >
          X
        </div>
        <div>
          <form
            className="grid justify-center m-2 "
            onSubmit={handleSubmitForm}
          >
            <div>
              <div className="pl-2">Product Name</div>
              <input
                type="text"
                placeholder="Name"
                className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </div>
            <div>
              <div className="pl-2">Product SKU</div>
              <input
                type="text"
                placeholder="SKU"
                className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
                value={input.SKU}
                onChange={(e) => setInput({ ...input, SKU: e.target.value })}
              />
            </div>
            <div>
              <div className="pl-2">Description</div>
              <input
                type="text"
                placeholder="Description"
                className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
                value={input.desc}
                onChange={(e) => setInput({ ...input, desc: e.target.value })}
              />
            </div>
            <div>
              <div className="pl-2">Dimensions</div>
              <input
                type="text"
                placeholder="Dimensions"
                className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
                value={input.dimensions}
                onChange={(e) =>
                  setInput({ ...input, dimensions: e.target.value })
                }
              />
            </div>
            <div>
              <div className="pl-2">Price</div>
              <input
                type="number"
                placeholder="Price"
                className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
                value={input.price}
                onChange={(e) => setInput({ ...input, price: e.target.value })}
              />
            </div>
            <div>
              <div className="ml-2 my-2">Department</div>
              <div>
                <select
                  name="department"
                  id="department"
                  className="w-full p-1 border border-neutral-500"
                  onChange={(e) =>
                    setInput({ ...input, department: e.target.value })
                  }
                  value={input?.department}
                >
                  <option value="PRODUCTS">PRODUCTS</option>
                  <option value="LIVINGROOM">LIVINGROOM</option>
                  <option value="DININGROOM">DININGROOM</option>
                  <option value="BEDROOM">BEDROOM</option>
                  <option value="WORKSPACE">WORKSPACE</option>
                  <option value="OUTDOOR">OUTDOOR</option>
                </select>
              </div>
            </div>
            <div>
              <div className="ml-2 my-2">Category</div>
              <div>
                <select
                  name="category"
                  id="category"
                  className="w-full py-1 border border-neutral-500"
                  onChange={(e) =>
                    setInput({ ...input, category: e.target.value })
                  }
                  value={input?.category}
                >
                  <option value="SEATING">SEATING</option>
                  <option value="TABLES">TABLES</option>
                  <option value="BEDANDMATTRESSES">BEDANDMATTRESSES</option>
                  <option value="OFFICE">OFFICE</option>
                  <option value="OUTDOOR">OUTDOOR</option>
                  <option value="LIGHTING">LIGHTING</option>
                  <option value="OFFICECHAIRS">OFFICECHAIRS</option>
                  <option value="OFFICEDESKS">OFFICEDESKS</option>
                </select>
              </div>
            </div>
            <div className="text-[10px]">
              {input?.imageUrl ? (
                <div
                  onClick={() => fileEl.current.click()}
                  className="text-sm cursor-pointer max-h-52 overflow-hidden my-3"
                >
                  Image Name : {fileImage?.name}
                  <img
                    src={
                      fileImage
                        ? URL?.createObjectURL(fileImage)
                        : input?.imageUrl
                    }
                    alt="fileImage"
                    height={300}
                    width={300}
                  />
                </div>
              ) : (
                <div className="flex justify-center my-2 ">
                  <button
                    type="button"
                    onClick={() => fileEl.current.click()}
                    className="text-center text-xs  rounded-md py-1 w-48 m-1 border border-stone-400 hover:border-stone-400 hover:text-stone-400 "
                  >
                    Add Image
                  </button>
                </div>
              )}
              <input
                type="file"
                id="fileImage"
                name="fileImage"
                className="hidden"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFileImage(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="text-[10px]">
              {input?.vdoUrl ? (
                <div
                  onClick={() => fileEl.current.click()}
                  className="text-sm cursor-pointer max-h-52 overflow-hidden my-3"
                >
                  Video Name : {fileVideo?.name}
                  <img
                    src={
                      fileVideo
                        ? URL?.createObjectURL(fileVideo)
                        : input?.vdoUrl
                    }
                    alt="fileVideo"
                    height={200}
                    width={200}
                  />
                </div>
              ) : (
                <div className="flex justify-center my-2 ">
                  <button
                    type="button"
                    onClick={() => fileVideoEl.current.click()}
                    className="text-center text-xs  rounded-md py-1 w-48 m-1 border border-stone-400 hover:border-stone-400 hover:text-stone-400 "
                  >
                    Add Video
                  </button>
                </div>
              )}
              <input
                type="file"
                id="fileVideo"
                name="fileVideo"
                className="hidden"
                ref={fileVideoEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFileVideo(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-center text-base  rounded-md py-1 w-48 m-1   border border-stone-400  hover:border-stone-400    hover:text-stone-400 "
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
