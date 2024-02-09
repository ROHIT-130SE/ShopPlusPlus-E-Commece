import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us - ShopPlusPlus"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any inquiries or assistance regarding our products, please don't
            hesitate to reach out to us. Our dedicated team is available 24/7 to
            provide support and guidance. Your satisfaction is our top priority!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@shopplusplus.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : (099)999-9999
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-9999-9999 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
