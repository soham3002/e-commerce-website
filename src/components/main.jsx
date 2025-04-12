import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main2.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              This is a detailed card with informative text that smoothly 
              introduces the reader to more content. It offers a bit more context to help set 
              the stage for what's coming next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
