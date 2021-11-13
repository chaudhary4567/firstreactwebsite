import React, {useState} from 'react';
import abtapi from "../Api/abtApi.js";

const Aboutus = () => {

	const [abtData, setAbtData] =useState(abtapi);

	return (
		<>
			<section className="common-section our-services">
				<div className="container mb-5">
				    <div className="row">
				       <div className="col-md-5 text-center our-services-leftside-img">
				         <img src="./images/howto.jpg" alt="aboutimg"/>
				       </div>
				       <div className="col-md-7 our-services-list">
				         <h3 className="mini-title">
				         	-- AVAILABLE @GOOGLE AND IOS APP STORE ONLY
				         </h3>
				         <h1 className="main-heading">
				         	How to use the App?
				         </h1>

				         {abtData.map((curElem) => {
				         	const{id,number,title,des} =curElem;

				         	return(

				         		<>

						         <div className="row our-services-info" key="id">
						         	<div className="col-md-1 our-services-number">
						         		{curElem.number}
						         	</div>
						         	<div className="col-md-10 our-services-data">
						         		<h2>{curElem.title}</h2>
						         		<p className="main-hero-para">{curElem.des}</p>
						         	</div>
						         </div>
						         </>
						         )
						     })};
				         <br/>
				         <button className="btn-style btn-style-border log_btn btn">Learn More</button>
				         
				       </div>
				    </div>
				</div>
			</section>


			<section className="common-section our-services">
				<div className="container mb-5">
				    <div className="row">
				       
				       <div className="col-md-7 our-services-list">
				         <h3 className="mini-title">
				         	-- Support in Any Languages
				         </h3>
				         <h1 className="main-heading">
				         	World class support is <br/>avaible 24/7
				         </h1>

				         {abtData.map((curElem) => {
				         	const{id,number,title,des} =curElem;

				         	return(

				         		<>

						         <div className="row our-services-info" key="id">
						         	<div className="col-md-1 our-services-number">
						         		{curElem.number}
						         	</div>
						         	<div className="col-md-10 our-services-data">
						         		<h2>{curElem.title}</h2>
						         		<p className="main-hero-para">{curElem.des}</p>
						         	</div>
						         </div>
						         </>
						         )
						     })};
				         <br/>
				         <button className="btn-style btn-style-border log_btn btn">Learn More</button>
				         
				       </div>
				       <div className="col-md-5 text-center our-services-rightside-img">
				         <img src="./images/abtimg.jpg" alt="aboutimg"/>
				       </div>
				    </div>
				</div>
			</section>
			
		</>
	)
}

export default Aboutus;