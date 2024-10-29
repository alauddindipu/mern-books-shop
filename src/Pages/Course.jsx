import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Course = () => {
  // const {_id,details} = products;

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://mern-backend-v2.onrender.com/totalProducts")
      .then(res => res.json())
      .then(data => setCourse(data));
  }, []);
  // console.log(course);

  return (<div>
    <div><PageTitle title="Products Page"></PageTitle></div>
    <div>
      <p className="text-3xl py-10">Available Courses: {course.length}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 md:gap-12 xl:12 mb-20">
      {
        course.map(c => (<div className="card card-compact bg-base-100 w-70 shadow-xl" key={c.course_id}>
          <figure>
            <img src={c.image} alt={c.productName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{c.productName}</h2>
            <p>{c.category}</p>
            <p>
              <span className="bg-warning p-2 rounded">
                {c.resalePrice}
                $
              </span>{" "}
              <span className="bg-success p-2 rounded">{c.status}/5</span>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                {" "}
                <Link to={`/productDetails/${c._id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>))
      }
    </div>
  </div>);
};

export default Course;
