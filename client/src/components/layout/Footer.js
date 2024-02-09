import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        Codecrafted by
        <a href="https://www.linkedin.com/in/rohitbose/" target="blank">
          Rohit Bose
        </a>{" "}
        | © 2024
      </h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact Us</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
