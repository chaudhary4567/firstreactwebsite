import React, {useState} from 'react';
import workapi from "../Api/workApi.js";


const Howitwork = () => {

	const [workData, setWorkData] = useState(workapi);

	return (
		<>
			<section>
				<div className="container work-container">
				  <h1 className="main-heading text-center">How does it work</h1>
					<div className="row">
					{workData.map((curElem) => {
						const{id, logo, title, info} =curElem;

						return(
							<>
							<div className="col-md-4" key={id}>
						  	 	<i className={`fontawesome-style ${logo}`}></i>
						  	 	<h2 className="sub-heading">{title}</h2>
						  	 	<p className="main-hero-para">{info}</p>
						  	</div>
					  	</>
					  	)
					}
					)
				};
					</div>
				</div>
			</section>	
		</>
	)
}

export default Howitwork;