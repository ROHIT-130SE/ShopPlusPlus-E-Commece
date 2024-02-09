import React from "react";
import Layout from "./../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - ShopPlusPlus"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <section>
            <h2>Information Collection</h2>
            <p>
              We collect personal information for order processing and
              communication purposes only.
            </p>

            <h3>Data Protection</h3>
            <p>
              We employ security measures to protect your personal information.
            </p>

            <h3>Third-Party Disclosure</h3>
            <p>We do not share your information with external parties.</p>

            <h3>Privacy Policy Updates</h3>
            <p>
              Our policy may be updated at any time, with changes posted on this
              page.
            </p>

            <h3>Contact Us</h3>
            <p>
              For questions or concerns, email us at{" "}
              <a href="mailto:privacy@shopplusplus.com">
                privacy@shopplusplus.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
