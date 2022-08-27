import React from "react";
import Products from "./Products";

const Home = () => {
	return (
		<div classNameName="hero">
			<div className="card bg-dark text-white border-0">
				<img src='assets/bg.jpg' className="card-img" alt="background" style={{height:"550px"}} />
				<div className="card-img-overlay">
          <div className="container">

          </div>
				</div>
			</div>
      <Products />
		</div>
	);
};

export default Home;
