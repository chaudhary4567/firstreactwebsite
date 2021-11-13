import React from 'react';

const Header = () => {
	return (
		<>
			<header>
              <section className="container main-hero-container">
                  <div class="row">
	                    <div class="col-md-6 header-left-side d-flex flex-column justify-content-center align-items-start">
	                        <h1>Online Payment Made<br/>Easy For You</h1>
	                        <p className="main-hero-para"
	                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus numquam, accusantium recusandae quia aperiam tenetur debitis consequatur rerum corporis nam, iure sit eum, distinctio dolore fugit optio id exercitationem.</p>
	                        <h3>Get early access for you</h3>
	                        <div className="input-group mt-3">
	                            <input type="text" className="rounded-pill w-75 me-3 form-control-text p-2" placeholder="Enter your Email"
	                            />
	                            <div className="input-group-button">
	                                Get it now
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-md-6 header-right-side main-hero-images d-flex flex-column justify-content-center align-items-center">
	                        <img src="./images/bannerimg1.jpg"  alt="heroimg" className="img-fluid"/>
	                        <img src="./images/bannerimg2.jpeg" alt="heroimg2" className="img-fluid main-hero-img2"/>
	                    </div>
                  </div>
              </section>
          </header>
		</>
	)
}

export default Header;