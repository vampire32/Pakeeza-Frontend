import React from "react";
import {ImLocation2} from 'react-icons/im'
import {AiFillPhone} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'

const Contactus = () => {
	return (
		<div>
			<div className="container  ">
				<h1 className="text-center font-bold text-[40px]">Contact US</h1>
				<div className="row mt-[3rem] ">
					<div className="col-md-4">
						<div
							class="card text-center drop-shadow-xl"
							style={{ width: "18rem", borderRadius: "10%" }}
						>
							<div class="card-body">
								<ImLocation2
									size={60}
									style={{ marginLeft: "6rem" }}
									color="#C8FFD4"
								/>
								<h2 class="card-title">Address</h2>
								<h3 class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div
							class="card text-center drop-shadow-xl"
							style={{ width: "18rem", borderRadius: "10%" }}
						>
							<div class="card-body">
								<AiFillPhone
									size={60}
									style={{ marginLeft: "6rem" }}
									color="#C8FFD4"
								/>
								<h2 class="card-title">Phone</h2>
								<h3 class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</h3>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div
							class="card text-center drop-shadow-xl"
							style={{ width: "18rem", borderRadius: "10%" }}
						>
							<div class="card-body">
								<AiTwotoneMail
									size={60}
									style={{ marginLeft: "6rem" }}
									color="#C8FFD4"
								/>
								<h2 class="card-title">Address</h2>
								<h3 class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the cards content.
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class="text-gray-600 body-font relative mt-[4rem]">
				<div class="absolute inset-0 bg-gray-300">
					<iframe
						width="100%"
						height="100%"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="map"
						scrolling="no"
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
					></iframe>
				</div>
				<div class="container px-5 py-24 mx-auto flex">
					<div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
						<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
							Feedback
						</h2>
						<p class="leading-relaxed mb-5 text-gray-600">
							Post-ironic portland shabby chic echo park, banjo fashion axe
						</p>
						<div class="relative mb-4">
							<label for="email" class="leading-7 text-sm text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div class="relative mb-4">
							<label for="message" class="leading-7 text-sm text-gray-600">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							></textarea>
						</div>
						<button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
							Button
						</button>
						<p class="text-xs text-gray-500 mt-3">
							Chicharrones blog helvetica normcore iceland tousled brook viral
							artisan.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contactus;
