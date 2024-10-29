import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export default function HomeCategoryLoad() {


  const [products, setProducts] = useState([]);

  // Fetch all users from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://mern-backend-v2.onrender.com/allproducts"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Load users when the component mounts
  }, []);

  let uniqueNames = products.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);

  //let uniqueCategoryId = bookCategories.map(item => item.categoryid).filter((value, index, self) => self.indexOf(value) === index);

  // console.log(uniqueNames);
  //console.log(uniqueCategoryId)
  // const selectedCourse = course.find(n => n._id === id);
  // res.send(selectedCourse)


  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 md:gap-12 xl:12">
          {
            uniqueNames.map(bookCategory => (<div className="card card-compact h-40  shadow-xl" key={bookCategory}>

              <div className="card-body">

                <h2 className="card-title bg-accent rounded-md flex justify-center p-5">{bookCategory}</h2>
                {/* <Link to={`/bookcategories/${bookCategory}`}> */}
                <Link to={`/bookCategoryWiseDetails/${bookCategory}`}>
                  <div className=" h-32 w-32">
                    <div className="absolute inset-x-0 bottom-0 h-18 flex justify-center">
                      <button className="btn btn-outline btn-accent">View Products</button>
                    </div>
                  </div>
                </Link>

              </div>
            </div>))
          }



        </div>
      </div>
    </div >
  )
}
