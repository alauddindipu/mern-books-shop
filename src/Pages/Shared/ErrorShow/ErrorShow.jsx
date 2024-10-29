import {Link, useRouteError} from "react-router-dom";

const ErrorShow = () => {
  const error = useRouteError();

  return (<div className="grid place-items-center shadow-xl p-6 rounded-lg">
    <p className="bg-warning text-5xl font-bold font-4xl">
      Please Try Correctly
    </p>
    <p className=" mt-16 text-5xl font-bold">
      {error.statusText || error.message}
    </p>
    <h4 className="text-3xl font-semibold mt-10">
      <Link to="/">
        <button className="btn btn-active bg-green-600 btn-warning text-white rounded-none text-lg font-bold">
          Go to Home Page
        </button>
      </Link>{" "}
    </h4>
  </div>);
};

export default ErrorShow;