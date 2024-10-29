import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State to handle error messages

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    try {
      await loginWithEmail(email, password); // Try to log in
      navigate("/dashboard"); // If successful, navigate to dashboard
    } catch (err) {
      setError(err.message); // Set error message if login fails
      console.error(err.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-white pt-10 font-semibold">
      <div><PageTitle title="Login Page"></PageTitle></div>


      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div> */}

          <div className="card w-full max-w-xl ">
            <form className="card-body" onSubmit={handleEmailLogin}>
              {/* <h1 className="text-4xl font-extrabold text-center mb-4">
                Please Login!
              </h1> */}

              {/* Display error message */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-accent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-10 input-accent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} */}
                  </span>
                </div>
                {/* <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label> */}
              </div>

              <div className="form-control mt-6">
                {/* <button className="btn bg-black text-white w-full">Login</button> */}
                <button className="btn btn-outline btn-accent">Login</button>

              </div>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Register here
                </Link>
              </p>
            </form>
          </div>

        </div>
      </div>



    </div>
  );
};

export default LoginPage;
