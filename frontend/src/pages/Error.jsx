import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { WrapperError } from "../styles/Error.styles";
import error1 from "../assets/error.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <WrapperError>
        <div>
          <img src={error1} alt="404 error" />
          <h3>🫤 Sorry!!! Page not found</h3>
          <Link to="/" className="btn">
            Come back home
          </Link>
        </div>
      </WrapperError>
    );
  }

  return (
    <div>
      <p>Sorry!!!</p>
    </div>
  );
};

export default Error;
