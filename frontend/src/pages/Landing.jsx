import React from "react";
import { Wrapper } from "../styles/Landing.styles";
import booksy from "../assets/booksy.svg";
import main from "../assets/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Books <span> store</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            aliquid quae facilis at cupiditate, est porro minus. Accusamus,
            consectetur. Labore rem odit accusamus necessitatibus delectus
            distinctio? Non in ipsam officia!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="booksy" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
