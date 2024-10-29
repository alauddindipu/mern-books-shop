import React, { useEffect, useState } from 'react'

export default function HomeContentLoad() {

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`https://mern-backend-v2.onrender.com/products`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, []);
  // console.log(course);
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12 md:gap-12 xl:12">
          {
            course.map(c => (<div className="card card-compact bg-base-100 w-40 h-60 shadow-xl " key={c._id}>
              <div className=''>
                <div>
                  <figure>
                    <img src={c.image} alt={c.productName} />
                  </figure>
                  <div className="card-body">
                    <div className="absolute inset-x-0 bottom-5 h-18 flex flex-col justify-center">
                      <div className="card-title">{c.productName}</div>
                      <div>
                        <span className="bg-warning p-2 rounded">{c.status}/5</span>
                        <span className='p-1'></span>
                        <span className="bg-success p-2 rounded">{c.resalePrice}$</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  )
}
