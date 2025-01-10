import React from "react";
import "./service.css";
import IndexLayout from "../../Layouts/indexLayout";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const Service = () => {
  return (
    <IndexLayout>
      <section id="services" className="container py-5">
        <h2 className="text-center mb-5">Services</h2>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 text-center">
            <img src={img1} alt="Product Selling" className="img-fluid mb-4" />
            <h3><strong>Product Selling</strong></h3>
          </div>
          <div className="col-lg-6">
            <p>
            <span className="orange-text">We Take Pride</span> In Offering A Curated Selection Of Premium Interior
              Design Materials. Our Products Redefine Spaces, Blending
              Functionality With Style, Ensuring That The Spaces We Sell
              Contribute To The Creation Of Inspired And Sophisticated
              Environments.
            </p>
            <div className="d-flex">
              <a href="#" className="btn btn-warning me-3">Explore More <i class="fa-solid fa-arrow-right"></i>
               
              </a>
              <a href="#" className="btn btn-link text-decoration-none">
              <i class="fa-solid fa-download"></i>  Download Brochure</a>
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-5 flex-lg-row-reverse">
          <div className="col-lg-6 text-center">
            <img src={img2} alt="Product Installation" className="img-fluid mb-4" />
            <h3><strong>Product Installation</strong></h3>
          </div>
          <div className="col-lg-6">
            <p>
            <span className="orange-text">Our Commitment</span> Goes Beyond Providing Premium Interior Design
              Materials. We Offer A Seamless Installation Experience. Our
              Skilled Team Ensures Flawless Integration Of Our Products,
              Bringing Your Vision To Life With Confidence.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 text-center">
            <img src={img3} alt="Site Supervision" className="img-fluid mb-4" />
            <h3><strong>Site Supervision</strong></h3>
          </div>
          <div className="col-lg-6">
            <p>
              <span className="orange-text">Our Dedication</span> To Your Project Extends To Meticulous Site
              Supervision. Our Experienced Team Ensures Every Detail Aligns
              With Your Vision, Overseeing The Installation Process To Guarantee
              A Seamless And Superior Outcome.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6 text-center">
            <img src={img4} alt="Technical Guidance" className="img-fluid mb-4" />
            <h3><strong>Technical Guidance</strong></h3>

          </div>
          <div className="col-lg-6">
            <p>
            <span className="orange-text">We Go Beyond</span> Delivering Exceptional Products; We Offer
              Comprehensive Technical Guidance. Our Team Of Experts Is
              Dedicated To Providing Valuable Insights, Ensuring You Make
              Informed Decisions On Product Selection, Installation, And
              Maintenance.
            </p>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
};

export default Service;
