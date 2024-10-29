import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Edit = () => {
    const loadedProduct = useLoaderData();
    //console.log(loadedUser);
    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const productName = form.get("productName");
        const description = form.get("description");

        const updatedProduct = { productName, description };
        // console.log("Updated:", updatedProduct);

        fetch(`https://mern-backend-v2.onrender.com/product/${loadedProduct._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount) {
                    toast.success("Updated Successfully", {
                        position: "top-right",
                    });
                    navigate("/dashboard/totalProducts");
                }
            });
    };
    return (
        <div className="mx-auto mt-20">
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Update a Product :
                </h1>
                &nbsp;&nbsp;&nbsp;
                <Link to="/dashboard/products">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
    py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                    >
                        Add Products
                    </button>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/dashboard/totalProducts">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
    py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                    >
                        Products List
                    </button>
                </Link>
            </div>
            <form onSubmit={handleEdit} className="w-full ">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
        leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="productName"
                            type="text"
                            name="productName"
                            defaultValue={loadedProduct.productName}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="description"
                        >
                            Description
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
        leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="description"
                            type="text"
                            name="description"
                            defaultValue={loadedProduct.description}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
        font-bold py-2 px-4 rounded-none"
                            type="submit"
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;