import React from 'react'
import BG from '../styles/Images/about-hero.svg'
import Image from "next/image";
import {FiTruck} from 'react-icons/fi'
import {FaExchangeAlt} from 'react-icons/fa'
import {FiPercent} from "react-icons/fi"
import {Ri24HoursLine} from 'react-icons/ri'
import {FaChevronRight} from 'react-icons/fa'
import { FaChevronLeft } from "react-icons/fa";
import Kicthen from '../styles/Images/kitchenA.jpg'
import Washing from '../styles/Images/WashingA.png'
import AC from '../styles/Images/AC.webp'
import Water from '../styles/Images/WaterD.png'
import LED from '../styles/Images/LEDA.jpg'
import Brands from '../Components/Brands';
import Dlivery from '../Components/Dlivery';

const About = () => {
  return (
		<div>
			<section class=" py-5" style={{ backgroundColor: "#200b52" }}>
				<div class="container">
					<div class="row align-items-center py-5">
						<div class="col-md-8 text-white text-justify">
							<h1>About Us</h1>
							<p>
								Just like any other country in the world, people in Pakistan
								also do more of their shopping online. Online shopping in
								Pakistan has grown to the extent that people buy everything
								online. At Pakeeza Electronics, we have appliances to the latest
								gadgets. You can find almost everything under one link. That’s
								not all, we have everything that you can think of at pakeeza
								electronics..
								<br />
								We offer “deal of the week” & other deals every now and then for
								the ease of our consumers. Here is a list of all the amazing
								stuff that you can purchase at pakeeza electronics | The
								cheapest store in Pakistan
							</p>
						</div>
						<div class="col-md-4">
							<Image src={BG} alt="About Hero" />
						</div>
					</div>
				</div>
			</section>
			<section class="container py-5">
				<div class="row">
					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								{/* <i class="fa fa-truck fa-lg"></i> */}
								<div className="flex justify-center">
									<FiTruck color="#ffae42" />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Delivery Services</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<FaExchangeAlt color="#ffae42" />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Shipping & Return</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<FiPercent color="#ffae42" />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Promotion</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<Ri24HoursLine color="#ffae42" />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">24 Hours Service</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-purple-900 text-white">
				<div className="container-fluid ">
					<div className="row">
						<div className="col-md-6 text-justify mt-32">
							<h2 className="font-bold text-[32px]">
								Buy Kitchen Appliances Online In Pakistan
							</h2>
							<p>
								Kitchen appliances are investments for years. A single machine
								can last for 2-3 years easily. Therefore, you should purchase
								the best quality products from a trusted vendor like us! We have
								big brands like Braun, Anex, etc on board to provide the newest
								electronics at the cheapest prices.
								<br />
								Food processors, blenders, hand blenders, mixers & everything
								you could think of! Buy now at super reasonable prices &
								simplify your domestic life!
							</p>
						</div>
						<div class="col-md-6 mt-32">
							<Image src={Kicthen} alt="About Hero" />
						</div>
					</div>
					<div className="row">
						<div class="col-md-6">
							<Image src={Washing} alt="About Hero" />
						</div>
						<div className="col-md-6 text-justify mt-32">
							<h2 className="font-bold text-[32px]">
								Washing Machine, Laundry
							</h2>
							<p>
								Washing machines are a helping hand for all housewives in
								Pakistan. We have all sorts of washing machines available, we
								have top-loading, front-loading, manual, semi-automatic & fully
								automatic washing machines in all sizes to fit your needs.The
								washing machines are of the best quality, we have all the
								well-known companies in collaboration like Haier, Samsung, Toyo
								& a lot more! Washing machines are available in multiple sizes,
								we have baby washers as well as the biggest washing machine size
								available. Gaba baby washers are the best-selling!
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 text-justify mt-32">
							<h2 className="font-bold text-[32px]">
								Air Conditioner, Inverter Ac
							</h2>
							<p>
								The temperature is rising every year! The only way to escape the
								intense heat is through air conditioners. We have 1 ton, 2 ton,
								chillers & for every air conditioning time that you seek. We
								have a well-known brand here as well, we have Haier, Gree,
								Kenwood, etc to provide the best quality inverters & air
								conditioners to our clients.
							</p>
						</div>
						<div class="col-md-6">
							<Image src={AC} alt="About Hero" />
						</div>
					</div>
					<div className="row">
						<div class="col-md-6">
							<Image src={Water} alt="About Hero" />
						</div>
						<div className="col-md-6 text-justify mt-32">
							<h2 className="font-bold text-[32px]">Water Dispensers</h2>
							<p>
								Keeping water chilled in your refrigerator is a difficult task.
								The refrigerator is meant to be opened every now & then. This
								affects the temperature of the water. To keep water chilled at
								all times you need a water dispenser. It can be placed in
								minimal space & is the perfect solution to keep water chilled &
								the food fresh (in the refrigerator).We have variants of
								dispensers, two outlets, three outlets, top loading, bottom
								loading, etc. Pick the one that suits your needs the most &
								purchase it today!
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 text-justify mt-32">
							<h2 className="font-bold text-[32px]">LED TVs In Pakistan</h2>
							<p>
								Who doesn’t like to be entertained? A TV room to get all your
								family members together & watch something fun! TV during lunch
								is a habit in most households. You can elevate your television
								experience with Smart LED TVs in Pakistan. We have the best LEDs
								available just for you. We have Samsung, EchoStar, TCL & more!
								Explore the website you might find the best
								<br />
								You must be thinking why I should choose pakeeza electronics
								when there are a ton of options available. But after reading
								this you won’t be able to resist the temptation to always buy
								from pakeeza electronics.
							</p>
						</div>
						<div class="col-md-6">
							<Image src={LED} alt="About Hero" />
						</div>
					</div>
				</div>
			</section>
			<section className="u-clearfix u-white usection2">
				<div className="u-align-center u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-container-style u-custom-item u-list-item u-palette-1-light-1 u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-3">
									Our Vision
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-4">
									<span>
										&nbsp; Our vision is simple to be an effectivevalue-added
										technology partner trusted by its clients through our
										consultative selling, support and services for their every
										exploration with innovations.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-default u-text-5">
									Our Mission
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-palette-1-base u-text-6">
									<span className="u-text-body-alt-color">
										&nbsp; Creating a powerful and valued brand associated to
										being a trusted corporate strategy consultant that will be
										synonymous with developing and addressing the business
										problems of customers through technological change and
										innovation.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-7">
									Our Core Values
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-8">
									<span>
										Committed with dedication.
										<br />
										&nbsp;Teamwork &amp; Synchronization.&nbsp;
										<br />
										Compliance professionally
										<br />
										Best Recommendations.
										<br />
										&nbsp;Consultancy with Excellency.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Brands/>
			<Dlivery/>
		</div>
	);
}

export default About