import React from 'react'
import C1 from "../styles/Images/Slide1.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import C2 from "../styles/Images/Slide2.png";
import C3 from "../styles/Images/slide3.png";
import Image from "next/image";

const MainSlider = () => {
  return (
		<div>
			<div
				id="template-mo-zay-hero-carousel"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<ol class="carousel-indicators">
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="0"
						class="active"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="1"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="2"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="3"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="4"
					></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C3} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2">
											GENUINE ELECTRONICS AND LIFESTYLE STORE IN PAKISTAN.
										</h3>
										<p>
											At Pakeeza Electronics, our customers enjoy a huge range
											of genuine and reliable electronics, appliances, LED TVs,
											mobiles, and accessories at the best prices
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C1} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2">
											Best Reliable ELECTRONICS STORE IN PAKISTAN
										</h3>
										<p>
											At Pakeeza Electronics, you will be shopping for
											authentic, reliable, and genuine products that are sourced
											only from authorized dealers.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C2} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2">AIR-CON & AIR COOLER STORE IN PAKISTAN.</h3>
										<p>
											delivered right to their doorstep. Compared to a number of
											marketplaces that sell the very same items from
											third-party vendors with no control over the quality or
											originality of the product.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C2} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2">
											REFRIGERATOR & FREEZERS STORE IN PAKISTAN.
										</h3>
										<p>
											At Pakeeza Electronics store, you can acquire any type of
											refrigerator and freezer at cheap rates. In market, we are
											giving good prices as compared to others electronics shops
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C2} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2">HOME APPLIANCES STORE IN PAKISTAN</h3>
										<p>
											At Pakeeza Electronics store, you can acquire any type of
											home appliance at cheap rates. In market, we are giving
											good prices as compared to an others electronics shops.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev text-decoration-none w-auto ps-3"
					href="#template-mo-zay-hero-carousel"
					role="button"
					data-bs-slide="prev"
				>
					{/* <i class="fas fa-chevron-left"></i> */}

					<FaChevronLeft size={50} color="#ffae42" />
				</a>
				<a
					class="carousel-control-next text-decoration-none w-auto pe-3"
					href="#template-mo-zay-hero-carousel"
					role="button"
					data-bs-slide="next"
				>
					{/* <i class="fas fa-chevron-right"></i> */}
					<FaChevronRight size={50} color="#ffae42" />
				</a>
			</div>
		</div>
	);
}

export default MainSlider