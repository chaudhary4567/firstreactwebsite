import React, {useState} from 'react'

const Contactus = () => {

	const [userData, setUserData] = useState({
		firstName : "",
		lastName : "",
		phone : "",
		email : "",
		address : "",
		message : "",
	});

	let name, value;
	const postUserData =(event) => {
		name = event.target.name;
		value = event.target.value;

		setUserData({...userData,  [name] : value});
	};


	// Connect with Firebase

	const submitData = async (event) => {
		event.preventDefault();

		const{firstName ,lastName, phone, email, address, message} = userData;

		if(firstName && lastName &&  phone &&  email &&  address &&  message){


		const res = fetch('https://first-react-website-b47f9-default-rtdb.firebaseio.com/userDataRecords.json',
			{
			method : "post",
			Headers : {
				"Content-Type" : "application/json",
			},
			body:JSON.stringify({
				firstName,
				lastName,
				phone,
				email,
				address,
				message,
			}),
		}
			);
		if(res){
			setUserData({
				firstName : "",
				lastName : "",
				phone : "",
				email : "",
				address : "",
				message : "",
			});
			alert("Data Stored");
		} else{
			alert("Please Fill the Data");
		}
		}else{
			alert("Please Fill the Data");
		}
	};

	return (
		<>
			<section className="contactus-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-5 contact-leftside">
									<h1 className="main-heading fw-bold">
									Connect with Our <br/> Sales Team.
									</h1>
									<p className="main-hero-para"
									>Lorem, ipsum dolor sit amet consectetur, adipisicing elit. 
									Enim pariatur, illum nisi, natus tenetur laudantium similique odit id, 
									in, numquam expedita sit voluptatem est. Vel dignissimos fugiat 
									fuga, cupiditate ullam?</p>
									<img src="./images/img1.jpg" alt="conimg" className="img-fluid"
									 />
									
								</div>
								<div className="col-md-7 contact-rightside">
									<form method="post">
										<div className="row">
											<div className="col-md-6 contact-input-feild">
												<input type="text" 
												name="firstName"
												id=""
												className="form-control"
												value ={userData.firstname}
												onChange={postUserData}
												
												placeholder="First Name"
												/>
											</div>
											<div className="col-md-6 contact-input-feild">
												<input type="text" 
												name="lastName"
												id=""
												className="form-control"
												value ={userData.lastName}
												onChange={postUserData}
												
												placeholder="Last Name"
												/>
											</div>
											</div>
											<div className="row">
											<div className="col-md-6 contact-input-feild">
												<input type="text" 
												name="phone"
												id=""
												className="form-control"
												value ={userData.phone}
												onChange={postUserData}
												
												placeholder="Phone Number"
												/>
											</div>
											<div className="col-md-6 contact-input-feild">
												<input type="text" 
												name="email"
												id=""
												className="form-control"
												value ={userData.email}
												onChange={postUserData}
												
												placeholder="Email id"
												/>
											</div>
											</div>
											<div className="row">
											<div className="col-md-12 contact-input-feild">
												<input type="text" 
												name="address"
												id=""
												className="form-control"
												value ={userData.address}
												onChange={postUserData}
												
												placeholder="Add Address"
												/>
											</div>
											</div>
											<div className="row">
											<div className="col-md-12 contact-input-feild">
												<input type="text" 
												name="message"
												id=""
												className="form-control"
												value ={userData.message}
												onChange={postUserData}
												
												placeholder="Enter your Messege"
												/>
											</div>
											<div className="col-md-12">
											<div class="form-check form-checkbox-style">
											  <input class="form-check-input" type="checkbox" value="" 
											  id="flexCheckDefault"/>
											  <label class="form-check-label" for="flexCheckDefault">
											    I agree that the rohitpay may contact me at the 
											    email address or phone number
											  </label>
											</div>
											<button type="submit" className="btn sign_btn w-100" onClick={submitData}>
												Submit
											</button>
											</div>
										</div>
										
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</>
	)
}

export default Contactus