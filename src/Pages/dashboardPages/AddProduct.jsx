import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import PageTitle from '../../components/PageTitle';
// import useTitle from '../../../hooks/useTitle';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    // const [categoryObject, setCategoryObject] = useState({});


    const categoryObject = useLoaderData();
    //  console.log(categoryObject);

    const [formData, setFormData] = useState({
        name: '',
        resalePrice: '',
        image: null,
        category: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // useTitle('Add Product');
    //const imageHostKey = process.env.REACT_APP_imgbb_key;
    const imageHostKey = 'ec39a7a11a2b7d1d5ffaae57fee1fc5e';

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Product Name is Required";
        }
        if (!formData.resalePrice) {
            newErrors.resalePrice = "Resell Price is Required";
        }
        if (!formData.image) {
            newErrors.image = "Photo is Required";
        }
        if (!formData.category) {
            newErrors.category = "Category is Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const image = formData.image;
        const imageData = new FormData();
        imageData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        try {
            const res = await fetch(url, {
                // mode: 'no-cors',//added---------------------
                method: 'POST',
                body: imageData
            });
            const imgData = await res.json();

            if (imgData.success) {
                const product = {
                    categoryId: categoryObject[formData.category],
                    category: formData.category,
                    image: imgData.data.url,
                    productName: formData.name,
                    resalePrice: formData.resalePrice,
                    postingTime: new Date(),
                    description: formData.description,
                    status: formData.status,
                };

                const result = await fetch('https://mern-backend-v2.onrender.com/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product)
                });

                const data = await result.json();
                if (data.success) {
                    toast.success(`${formData.name} is added successfully`);
                    //navigate('/dashboard/products');//will change here the path
                }
                //  else {
                //     toast.error('Failed to add product.');// why not success??
                // }
            } else {
                toast.error('Image upload failed. Please try again.');
            }
        } catch (error) {
            // console.error('Failed to add product:', error);
            toast.error('An error occurred while adding the product.');
        }
    };

    return (
        <div>
            <div className='w-12/12 p-7'>
                <div><PageTitle title="Add Product"></PageTitle></div>
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Add a Product
                    </h1>
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
                <div className=' '>
                    <form onSubmit={handleSubmit} className="border shadow-lg py-2 px-6 mt-3 ">
                        <div className='flex flex-col md:flex-row w-12/12'>
                            <div className='w-11/12'>
                                <div className="form-control w-full max-w-xl border p-2 border-indigo-400 mb-3">
                                    <div className='input-bordered rounded-none'>
                                        <input
                                            placeholder='Product Name'
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full max-w-xl rounded-none bg-white"
                                        />
                                    </div>
                                    {errors.name && <p className='text-red-500 text-xs'>{errors.name}</p>}
                                </div>

                                <div className='form-control w-full max-w-xl border p-2 border-indigo-400 mb-3'>
                                    <div className="input-bordered rounded-none">
                                        <input
                                            placeholder='Price'
                                            type="text"
                                            name="resalePrice"
                                            value={formData.resalePrice}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full max-w-xl rounded-none bg-white"
                                        />
                                    </div>
                                    {errors.resalePrice && <p className='text-red-600 text-xs'>{errors.resalePrice}</p>}
                                </div>

                                <div className="form-control w-full max-w-xl border p-2 border-indigo-400 mb-3">
                                    <div className='flex justify-center items-center max-w-xl'>
                                        <label className="label"> <span className="label-text">Upload Photo:</span></label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleFileChange}
                                            className="input input-bordered w-full max-w-xl p-1 rounded-none bg-white"
                                        />
                                        {errors.image && <p className='text-red-500 text-xs'>{errors.image}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className='w-11/12  xl:pl-5 lg:pl-5'>
                                <div className="form-control w-full max-w-xl border p-2 border-indigo-400 mb-3">
                                    <div className='flex justify-center items-center max-w-xl'>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full max-w-xl rounded-none text-sm bg-white"
                                        >
                                            <option value="">Select Product Category</option>
                                            {categoryObject.map((c) => (
                                                <option key={c.cid} value={c.cname}>
                                                    {c.cname}
                                                </option>
                                            ))}

                                        </select>
                                    </div>
                                    {errors.category && <p className='text-red-500 text-xs'>{errors.category}</p>}
                                </div>

                                <div className="form-control w-full max-w-xl border p-2 border-indigo-400 mb-3">
                                    <div className='flex input-bordered rounded-none'>
                                        <input
                                            placeholder='Description'
                                            type="text"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full max-w-xl rounded-none bg-white"
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full max-w-xl border p-2 border-indigo-400 mb-3">
                                    <div className='flex input-bordered rounded-none'>
                                        <input
                                            placeholder='Rating'
                                            type="text"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full max-w-xl rounded-none bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <input className='btn btn-outline btn-info w-11/12 rounded-none mt-1' value="Save Product" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
