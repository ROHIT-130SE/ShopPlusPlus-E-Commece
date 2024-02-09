import React from "react";
import Layout from "./../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ShopPlusPlus"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <section>
              <h2>About ShopPlusPlus</h2>
              <p>
                At ShopPlusPlus, we are dedicated to providing an unparalleled
                online shopping experience. With a focus on quality,
                convenience, and customer satisfaction, we aim to be your
                one-stop destination for all your shopping needs.
              </p>

              <h3>Our Mission:</h3>
              <p>
                To simplify your shopping experience by offering a diverse range
                of products, exceptional customer service, and seamless
                transactions.
              </p>

              <h3>Our Vision:</h3>
              <p>
                To become the preferred choice for online shoppers worldwide,
                recognized for our reliability, integrity, and commitment to
                excellence.
              </p>
            </section>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
