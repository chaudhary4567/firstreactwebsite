import React, {useState} from 'react';
import sendapi from "../Api/sendApi.js";

const Howtosend = () => {

	const [serviceData, setServiceData] = useState(sendapi);

	return (
		<>
			<section className="service-main-container">
				<div className="container service-container">
					<h1 className="main-heading text-center fw-bold">
						How to Send Money
					</h1>
					<div className="row">
					{serviceData.map((curElem) =>{
						const{id,logo, title,info} =curElem;

						return (

					
						<div className="col-md-4 work-container-subdiv text-left" key={id}>
					  	 	<i className={`fontawesome-style ${logo}`}></i>
					  	 	<h2 className="sub-heading">{title}</h2>
					  	 	<p className="main-hero-para">{info}</p>
					  	</div>

					  	)

					})};

					</div>
					
				</div>
				
			</section>
				
		</>
	)
}

export default Howtosend;