import React from 'react'

const ContactForm = () => {
  return (
		<div>
			<section className="contact_section layout_padding">
				<div className="container ">
					<div className="heading_container">
						<h2 className="">Contact Us</h2>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<form action="">
								<div>
									<input type="text" placeholder="Name" />
								</div>
								<div>
									<input type="email" placeholder="Email" />
								</div>
								<div>
									<input type="text" placeholder="Phone" />
								</div>
								<div>
									<input
										type="text"
										className="message-box"
										placeholder="Message"
									/>
								</div>
								<div className="d-flex ">
									<button>SEND</button>
								</div>
							</form>
						</div>
						<div className="col-md-6">
							<div className="map_container">
								<div className="map-responsive">
									<iframe
										src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=G359+QHW+MajidFarmsandFruitsSuppliers+Plai+UniversityofMalakand+Malakand+Khyber+Pakhtunkhwa"
										width="600"
										height="300"
										frameborder="0"
										style={{ border: "0", width: "100%", height: "100%" }}
										allowfullscreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContactForm