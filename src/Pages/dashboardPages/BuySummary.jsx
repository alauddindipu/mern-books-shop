
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const BuySummary = () => {
    const loadedBuyerInfo = useLoaderData();
    // console.log(loadedBuyerInfo);

    return (
        <div className="">
            <div><PageTitle title="Buying Summary"></PageTitle></div>
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Buying Summary of {loadedBuyerInfo.length} Items
                </h1>
            </div>
            <table className="border-collapse w-2/3 mx-auto">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Product Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Product Price($)
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {loadedBuyerInfo.map((c) => (
                        <tr
                            key={c._id}
                            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                        >
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Product Name
                                </span>
                                {c.productName}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    Product Price
                                </span>
                                {c.resalePrice}
                            </td>
                            <td className="flex justify-center"><button className="btn btn-outline btn-success">Payment</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuySummary;