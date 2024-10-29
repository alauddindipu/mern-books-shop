import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FiEdit } from "react-icons/fi"; // Importing react-icon
import toast from 'react-hot-toast';

const BuyProduct = () => {




  const { user } = useContext(AuthContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    phone: "",
    email: "",
    address: "",
  });

  // Update user info
  const handleSave = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    // const displayName = form.get("displayName");
    // const phone = form.get("phone");
    // const email = form.get("email");
    // const address = form.get("address");
    // const productName = course.productName;
    // const resalePrice = course.resalePrice;



    //const data = new FormData()
    form.append("displayName", displayName);
    form.append("phone", phone);
    form.append("email", email);
    form.append("address", address);

    //const updateBuyer = { displayName, phone, email,address,productName,resalePrice};
    const updateBuyer = { displayName, phone, email, address };



    // Make API call to update user information
    fetch("https://mern-backend-v2.onrender.com/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBuyer),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Added Successfully", {
            position: "top-right",
          });
        }
        event.target.reset();
      });

    // Close the modal upon successful update
    //setIsEditModalOpen(false);
  };


  // Open the edit modal with the user's current details
  const handleOpenEditModal = () => {
    setFormData({
      displayName: user.displayName || "",
      phone: user.phone || "",
      email: user.email || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };


  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl m-20">
        <figure>
          <img src={course.image} alt={course.productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.productName}</h2>
          <p className="text-xl">{course.category}</p>
          <p className="pb-5">
            <span>{course.description}</span>
          </p>
          <p>
            <span className="bg-warning">
              {course.resalePrice}
              BDT
            </span>{" "}
          </p>
          <p>
            <span>Rating: {course.status}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleOpenEditModal}>Buy Now</button>
            <button className="btn btn-secondary">Wish</button>
          </div>
        </div>
      </div>

      {/* Invisible div to use this info in modal edit */}
      <div className="mt-6 w-full invisible">
        <h3 className="text-xl font-bold text-gray-700">Profile Details</h3>
        <hr />
        <ul className="mt-3 text-gray-600 space-y-2">
          <li>
            <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Phone:</strong> {user?.phone || "N/A"}
          </li>
          <li>
            <strong>Address:</strong> {user?.address || "N/A"}
          </li>
          <hr />
          <li>
            <strong>Unique ID:</strong> {user?.uid}
          </li>
        </ul>
      </div>

      {/* Edit Button with React Icon */}
      {!user?.isBlocked ? (
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-105"
          onClick={handleOpenEditModal}
        >
          <FiEdit size={24} />
        </button>
      ) : null}
      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">Buyer Information</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.displayName}
                onChange={(e) =>
                  setFormData({ ...formData, displayName: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Buy Confirm
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyProduct;
