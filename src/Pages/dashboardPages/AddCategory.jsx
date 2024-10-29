import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

function AddCategory() {
    const handleAddCategory = (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const cname = form.get("categoryname");
        const cid = form.get("categoryid");

        const category = { cname, cid };
        // console.log(category);

        fetch("https://mern-backend-v2.onrender.com/category", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(category),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success("Category Added Successfully", {
                        position: "top-right",
                    });
                }
                event.target.reset();
            });
    };
    return (
        <>
            <div className="mx-auto mt-20">
                <div><PageTitle title="Category"></PageTitle></div>
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Add Category
                    </h1>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/dashboard/allCategory">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Categories List
                        </button>
                    </Link>
                </div>
                <form onSubmit={handleAddCategory} className="w-full ">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="categoryname"
                            >
                                Category Name
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="categoryname"
                                type="text"
                                name="categoryname"
                                placeholder="Category name"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="categoryid"
                            >
                                Category ID
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="categoryid"
                                type="text"
                                name="categoryid"
                                placeholder="Category id"
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
                                Add Category
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCategory;