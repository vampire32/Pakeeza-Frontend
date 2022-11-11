import Head from "next/head";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import C1 from "../styles/Images/Slide1.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import C2 from "../styles/Images/Slide2.png";
import C3 from "../styles/Images/slide3.png";
import home from "../styles/Images/homeA.png";
import ref from "../styles/Images/Freezer.png";
import air from "../styles/Images/air-cooler.png";
import kitch from "../styles/Images/Kitchen.png";
import led from "../styles/Images/LEDS.png";
import wash from "../styles/Images/washM.png";
import { Testimonials } from "../Components/Testimonials";
import ContactForm from "../Components/ContactForm";
import ProductCards from "../Components/ProductCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiTruck } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { Ri24HoursLine } from "react-icons/ri";

import b1 from "../styles/Images/brand-1.png";
import b2 from "../styles/Images/brand-2.png";
import b3 from "../styles/Images/brand-3.png";
import b4 from "../styles/Images/brand-4.png";
import b5 from "../styles/Images/brand-5.png";

import { Pagination, Navigation } from "swiper";
import MainSlider from "../Components/MainSlider";
import Brands from "../Components/Brands";
import Dlivery from "../Components/Dlivery";
import axios from "axios";
const product = {
	slug: "Basic Tee 6-Pack",
	price: "$192",
	href: "#",
	brand: "Bonnza",
	images: [
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
			alt: "Two each of gray, white, and black shirts laying flat.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
			alt: "Model wearing plain black basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
			alt: "Model wearing plain gray basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
			alt: "Model wearing plain white basic tee.",
		},
	],
};

const Home = (props) => {
	return (
		<div>
			<Head>
				<title>Pakeeza Electronics</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainSlider />
			<Brands />
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

			<div className="container mt-[3rem]">
				<h1 className="text-center text-[40px] font-bold pb-[4rem] text-[#ffae42]">
					TOP CATEGORIES
				</h1>
			</div>

			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					AIR-CON & AIR COOLER
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.productsData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url
						console.log(img)

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
									Model={item.attributes.Model}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			{/* <Dlivery /> */}
			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					REFRIGERATOR & FREEZERS
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.FreezerData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url;
						console.log(img);

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									Model={item.attributes.Model}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					LED TV & SOUND SYSTEM
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.LEDData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url;
						console.log(img);

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									Model={item.attributes.Model}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					HOME APPLIANCES
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.HomeData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url;
						console.log(img);

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									Model={item.attributes.Model}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					BUILT-IN KITCHEN
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.KitchenData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url;
						console.log(img);

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									Model={item.attributes.Model}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="conatiner mt-[4rem]">
				<h3 className=" font-bold text-[22px] pb-[2rem] ml-5 text-[#ffae42]">
					WASHING SOLUTIONS
				</h3>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{props.WashingData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.url;
						console.log(img);

						return (
							<SwiperSlide key={item.id}>
								<ProductCards
									slug={item.attributes.Name}
									Model={item.attributes.Model}
									brands={item.attributes.Brand}
									price={item.attributes.Price}
									Picture={imgurl + img}
								/>
								;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<Dlivery />
			<Testimonials />
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Master Cleanse Reliac Heirloom
						</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							havent heard of them man bun deep jianbing selfies heirloom prism
							food truck ugh squid celiac humblebrag.
						</p>
					</div>
					<div class="flex flex-wrap -m-4 text-center">
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-[#ffae42] w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M8 17l4 4 4-4m-4-5v9"></path>
									<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									2.7K
								</h2>
								<p class="leading-relaxed">Downloads</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-[#ffae42] w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									1.3K
								</h2>
								<p class="leading-relaxed">Users</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-[#ffae42] w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M3 18v-6a9 9 0 0118 0v6"></path>
									<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									74
								</h2>
								<p class="leading-relaxed">Files</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-[#ffae42] w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									46
								</h2>
								<p class="leading-relaxed">Places</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export async function getServerSideProps(context) {
	let headers = {
		Authorization:
			"e4cbdda2da4876ca76a1458aece14ae1e513d4f509c2ca53fba1368fcd806d0a93f30f4dde98050a933ff4b88fa7581685e5761c9f9c6413cd9fb0994fd045c78c046b29fe5e179e25f2075d82285f7cdc147a4b66f6a93475a24422e4a7e2aeb2f88be57addcd4e54e8be86106da6ae83035fb39710f87b087c241221cddcbf",
	};
	let a = await fetch("https://glacial-woodland-47482.herokuapp.com/api/air-con-and-air-coolers?populate=*",
		(headers = headers)
	);
	let b= await fetch(
		"https://glacial-woodland-47482.herokuapp.com/api/refrigerator-and-freezers?populate=*",
		(headers = headers)
	);
	let c = await fetch(
		"https://glacial-woodland-47482.herokuapp.com/api/home-appliances?populate=*",
		(headers = headers)
	);
	let d= await fetch("https://glacial-woodland-47482.herokuapp.com/api/built-in-kitchens?populate=*",
			(headers = headers)
		)
	
	let e = await fetch(
		"https://glacial-woodland-47482.herokuapp.com/api/led-tv-and-sound-systems?populate=*",
		(headers = headers)
	);
	let f = await fetch(
		"https://glacial-woodland-47482.herokuapp.com/api/washing-solutions?populate=*",
		(headers = headers)
	);
	

	let productsData = await a.json();
	let FreezerData = await b.json();
	let HomeData = await c.json();
	let KitchenData = await d.json();
	let LEDData = await e.json();
	let WashingData = await f.json();
	console.log(FreezerData.data)
	
	return {
		props: { productsData: productsData, FreezerData: FreezerData,LEDData:LEDData,HomeData:HomeData,KitchenData:KitchenData,WashingData:WashingData },
		// will be passed to the page component as props
	};
}
export default Home;
