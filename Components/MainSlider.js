import React,{useEffect} from 'react'
import C1 from "../styles/Images/Slide1.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import C2 from "../styles/Images/Slide2.png";
import C3 from "../styles/Images/slide3.png";
import Image from "next/image";
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

const MainSlider = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<div>
			<div
				id="template-mo-zay-hero-carousel"
				class="carousel slide"
				data-bs-ride="carousel"
				data-aos="fade-in"
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
										<img
											src="https://www.pngall.com/wp-content/uploads/5/LED-TV-PNG-File-Download-Free.png"
											alt=""
										/>
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-[#ffae42]">
											<b>Pakeeza </b> Electronics
										</h1>
										<h3 class="h2 leading-[3rem]">
											GENUINE ELECTRONICS AND LIFESTYLE STORE IN PAKISTAN.
										</h3>
										<p>
											At Pakeeza Electronics, our customers enjoy a huge range
											of genuine and reliable electronics, appliances, LED TVs,
											mobiles, and accessories at the best prices
										</p>
										<a class="btn border-2 border-yellow-600 px-8  bg-transparent text-white mx-5 mb-3 hover-btn">
											<Link href="/">Buy Now</Link>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container pb-[10rem]">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<img
											src="https://www.pngall.com/wp-content/uploads/11/Home-Appliance-Transparent.png"
											alt=""
										/>
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
										<a class="btn border-2 border-yellow-600 px-8  bg-transparent text-white mx-5 mb-3 hover-btn">
											<Link href="/">Buy Now</Link>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container pb-[5rem]">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<img
											src="https://www.pngarts.com/files/1/AC-Free-PNG-Image.png"
											alt=""
										/>
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
										<a class="btn border-2 border-yellow-600 px-8  bg-transparent text-white mx-5 mb-3 hover-btn">
											<Link href="/">Buy Now</Link>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container ">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<img
											src="https://freepngimg.com/save/19055-refrigerator-picture/1800x2550"
											width="60%"
											alt=""
										/>
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
										<a class="btn border-2 border-yellow-600 px-8  bg-transparent text-white mx-5 mb-3 hover-btn">
											<Link href="/">Buy Now</Link>
										</a>
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
										<a class="btn border-2 border-yellow-600 px-8  bg-transparent text-white mx-5 mb-3 hover-btn">
											<Link href="/">Buy Now</Link>
										</a>
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