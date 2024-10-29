import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const TotalProducts = () => {
    const loadedProducts = useLoaderData();
    //console.log(loadedProducts);
    const [users, setUsers] = useState(loadedProducts);



    const handleDelete = (_id) => {
        // console.log(_id);
        fetch(`https://mern-backend-v2.onrender.com/product/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingUsers = users.filter((product) => product._id !== _id);
                    setUsers(remainingUsers);
                }
            });
    };
    return (
        <div className="mt-14">
            <div><PageTitle title="Products List for Admin"></PageTitle></div>
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    All Products: {loadedProducts.length}
                </h1>
                &nbsp;&nbsp;&nbsp;
                <Link to="/dashboard/products">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                    >
                        Add Product
                    </button>
                </Link>
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-left">
                        <th className="py-2 px-4 border">#</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Price</th>
                        <th className="py-2 px-4 border">Image</th>

                        <th className="py-2 px-4 border">Description</th>
                        <th className="py-2 px-4 border">Status</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loadedProducts.map((product, index) => (
                        <tr key={product._id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border">{index + 1}</td>
                            <td className="py-2 px-4 border">{product?.productName || "N/A"}</td>
                            <td className="py-2 px-4 border">{product?.resalePrice}</td>
                            <td className="py-2 px-4 border">
                                <img
                                    src={product?.image || "https://via.placeholder.com/50"}
                                    alt="product"
                                    className="w-10 rounded-full"
                                />
                            </td>
                            <td className="py-2 px-4 border">
                                {/* {product.isAdmin ? "Admin" : "User"} */}
                                {product.description}
                            </td>
                            <td className="py-2 px-4 border">
                                {/* {user.isBlocked ? "Blocked" : "Active"} */}{product.status}
                            </td>
                            <td className="py-2 px-4 border">

                                <Link to={`/dashboard/edit/${product._id}`}>
                                    <button
                                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
          border border-blue-500 hover:border-transparent rounded-none"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="bg-red-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 
          border border-blue-500 hover:border-transparent rounded-none"
                                >
                                    Delete
                                </button>
                                {/* <button
                                    onClick={() => openEditModal(product)}
                                    className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                                    title="Edit User"
                                >
                                    <FaEdit />
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default TotalProducts;