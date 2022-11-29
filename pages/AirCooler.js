import React from 'react'
import Filters from '../Components/Filters'
import MainSlider from '../Components/MainSlider'
import ProductCards from '../Components/ProductCards';
import { Fragment, useState } from "react";
import axios from "axios";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid";

import C1 from "../styles/Images/cart.jpg";
import C2 from "../styles/Images/cart-2.jpg";
import C3 from "../styles/Images/cart-3.jpg";
import C4 from "../styles/Images/cart-4.jpg";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const product = {
	slug: "Basic Tee 6-Pack",
	price: "$192",
	href: "#",
	brand: "Bonnza",
	images: [
		{
			src: C1,
			alt: "Two each of gray, white, and black shirts laying flat.",
		},
		{
			src: C2,
			alt: "Model wearing plain black basic tee.",
		},
		{
			src: C3,
			alt: "Model wearing plain gray basic tee.",
		},
		{
			src: C4,
			alt: "Model wearing plain white basic tee.",
		},
	],
};
const sortOptions = [
	{ name: "Most Popular", href: "#", current: true },
	{ name: "Best Rating", href: "#", current: false },
	{ name: "Newest", href: "#", current: false },
	{ name: "Price: Low to High", href: "#", current: false },
	{ name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
	{ name: "Totes", href: "#" },
	{ name: "Backpacks", href: "#" },
	{ name: "Travel Bags", href: "#" },
	{ name: "Hip Bags", href: "#" },
	{ name: "Laptop Sleeves", href: "#" },
];
const filters = [
	{
		id: "color",
		name: "Color",
		options: [
			{ value: "white", label: "White", checked: false },
			{ value: "beige", label: "Beige", checked: false },
			{ value: "blue", label: "Blue", checked: true },
			{ value: "brown", label: "Brown", checked: false },
			{ value: "green", label: "Green", checked: false },
			{ value: "purple", label: "Purple", checked: false },
		],
	},
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "new-arrivals", label: "New Arrivals", checked: false },
			{ value: "sale", label: "Sale", checked: false },
			{ value: "travel", label: "Travel", checked: true },
			{ value: "organization", label: "Organization", checked: false },
			{ value: "accessories", label: "Accessories", checked: false },
		],
	},
	{
		id: "size",
		name: "Size",
		options: [
			{ value: "2l", label: "2L", checked: false },
			{ value: "6l", label: "6L", checked: false },
			{ value: "12l", label: "12L", checked: false },
			{ value: "18l", label: "18L", checked: false },
			{ value: "20l", label: "20L", checked: false },
			{ value: "40l", label: "40L", checked: true },
		],
	},
];
const Products = (props) => {
	const [filter, setfilter] = useState([])
	const [value, setvalue] = useState("")
	const [renders, setrenders] = useState(false)
	const handleChange=(e)=>{
		setvalue(e.target.value)
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		axios
			.get(
				`https://pakeeza-backend-railway-production.up.railway.app/api/products?filters[Category][$eq]=AC&filters[SubCategories][$eq]=${value}&populate=*`
			)
			.then((response) => {
				// Handle success.
				setfilter(response.data);
				console.log(filter);
				setrenders(true);
			})
			.catch((error) => {
				// Handle error.
				alert(error);
				console.log("An error occurred:", error.response);
			});
	};

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
		<div>
			<MainSlider />

			<div className="bg-white">
				<div>
					{/* Mobile filter dialog */}
					<Transition.Root show={mobileFiltersOpen} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-40 lg:hidden"
							onClose={setMobileFiltersOpen}
						>
							<Transition.Child
								as={Fragment}
								enter="transition-opacity ease-linear duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="transition-opacity ease-linear duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-black bg-opacity-25" />
							</Transition.Child>

							<div className="fixed inset-0 z-40 flex">
								<Transition.Child
									as={Fragment}
									enter="transition ease-in-out duration-300 transform"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transition ease-in-out duration-300 transform"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
										<div className="flex items-center justify-between px-4">
											<h2 className="text-lg font-medium text-gray-900">
												Filters
											</h2>
											<button
												type="button"
												className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
												onClick={() => setMobileFiltersOpen(false)}
											>
												<span className="sr-only">Close menu</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>

										{/* Filters */}
										<form className="mt-4 border-t border-gray-200">
											<h3 className="sr-only">Categories</h3>
											<ul
												role="list"
												className="px-2 py-3 font-medium text-gray-900"
											></ul>

											<Disclosure
												as="div"
												className="border-t border-gray-200 px-4 py-6"
											>
												<>
													<h3 className="-mx-2 -my-3 flow-root">
														<Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
															<span className="font-medium text-gray-900">
																subCategories
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel className="pt-6">
														<div className="space-y-4">
															<div className="flex items-center">
																<input
																	name="GREELINEUP"
																	type="checkbox"
																	defaultValue="GREELINEUP"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	GREE LINEUP
																</label>
															</div>
															<div className="flex items-center">
																<input
																	name="HAIERLINEUP"
																	type="checkbox"
																	defaultValue="HAIERLINEUP"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	HAIER LINEUP
																</label>
															</div>
															<div className="flex items-center">
																<input
																	name="ORIENTLINEUP"
																	type="checkbox"
																	defaultValue="ORIENTLINEUP"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	ORIENT LINEUP
																</label>
															</div>
															<div className="flex items-center">
																<input
																	name="KENWOODLINEUP"
																	type="checkbox"
																	defaultValue="KENWOODLINEUP"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	KENWOOD LINEUP
																</label>
															</div>
															<div className="flex items-center">
																<input
																	name="ALLOTHERBRANDS"
																	type="checkbox"
																	defaultValue="Dawalance"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	ALL OTHER BRANDS
																</label>
															</div>
															<div className="flex items-center">
																<input
																	name="Dawalance"
																	type="checkbox"
																	defaultValue="Dawalance"
																	onChange={handleChange}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label className="ml-3 min-w-0 flex-1 text-gray-500">
																	Dawlance
																</label>
															</div>
														</div>
													</Disclosure.Panel>
												</>
											</Disclosure>
											<button onClick={handleSubmit} className="btn btn-danger"></button>
										</form>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</Dialog>
					</Transition.Root>

					<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900">
								New Arrivals
							</h1>

							<div className="flex items-center">
								<Menu as="div" className="relative inline-block text-left">
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div className="py-1">
												<Menu.Item></Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>

								<button
									type="button"
									className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
									onClick={() => setMobileFiltersOpen(true)}
								>
									<span className="sr-only">Filters</span>
									<FunnelIcon className="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>

						<section aria-labelledby="products-heading" className="pt-6 pb-24">
							<h2 id="products-heading" className="sr-only">
								Products
							</h2>

							<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
								{/* Filters */}
								<form className="hidden lg:block">
									<h3 className="sr-only">Categories</h3>

									<Disclosure
										as="div"
										className="border-b border-gray-200 py-6"
									>
										<>
											<h3 className="-my-3 flow-root">
												<Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
													<span className="font-medium text-gray-900">
														Brands
													</span>
												</Disclosure.Button>
											</h3>
											<Disclosure.Panel className="pt-6">
												<div className="space-y-4">
													<div className="flex items-center">
														<input
															name="GREELINEUP"
															type="checkbox"
															defaultValue="GREELINEUP"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															GREE LINEUP
														</label>
													</div>
													<div className="flex items-center">
														<input
															name="HAIERLINEUP"
															type="checkbox"
															defaultValue="HAIERLINEUP"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															HAIER LINEUP
														</label>
													</div>
													<div className="flex items-center">
														<input
															name="ORIENTLINEUP"
															type="checkbox"
															defaultValue="ORIENTLINEUP"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															ORIENT LINEUP
														</label>
													</div>
													<div className="flex items-center">
														<input
															name="KENWOODLINEUP"
															type="checkbox"
															defaultValue="KENWOODLINEUP"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															KENWOOD LINEUP
														</label>
													</div>
													<div className="flex items-center">
														<input
															name="ALLOTHERBRANDS"
															type="checkbox"
															defaultValue="Dawalance"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															ALL OTHER BRANDS
														</label>
													</div>
													<div className="flex items-center">
														<input
															name="Dawalance"
															type="checkbox"
															defaultValue="Dawalance"
															onChange={handleChange}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label className="ml-3 min-w-0 flex-1 text-gray-500">
															Dawlance
														</label>
													</div>
												</div>
											</Disclosure.Panel>
										</>
									</Disclosure>
									<button onClick={handleSubmit} className="btn btn-danger">
										Search
									</button>
									{console.log(filter)}
								</form>

								{/* Product grid */}
								<div className="lg:col-span-3  ">
									{/* Replace with your content */}
									<div className=" lg:h-full">
										{renders ? (
											<div className="row">
												{filter.data.map((item) => {
													let imgurl =
														"https://glacial-woodland-47482.herokuapp.com";
													let img =
														item.attributes.img.data.attributes.formats
															.thumbnail.url;
													console.log(item.attributes.Model);

													return (
														<div className="col-md-4 " key={item.id}>
															<ProductCards
																slug={item.attributes.Model}
																name={item.attributes.Name}
																brands={item.attributes.Brand}
																price={item.attributes.Price}
																Picture={img}
																border="blue"
																text="white"
																text2="yellow"
																bg="blue"
															/>
														</div>
													);
												})}
											</div>
										) : (
											<div className="row">
												{props.productsData.data.map((item) => {
													let imgurl =
														"https://glacial-woodland-47482.herokuapp.com";
													let img =
														item.attributes.img.data.attributes.formats
															.thumbnail.url;
													console.log(item.attributes.Model);

													return (
														<div className="col-md-4 " key={item.id}>
															<ProductCards
																slug={item.attributes.Model}
																name={item.attributes.Name}
																brands={item.attributes.Brand}
																price={item.attributes.Price}
																Picture={img}
																border="blue"
																text="white"
																text2="yellow"
																bg="blue"
															/>
														</div>
													);
												})}
											</div>
										)}

										{/* <div className="col-md-4 ">
												<ProductCards
													slug={props.name}
													brands={props.brand}
													price={props.price}
													Picture={props.image}
													Model={props.model}
												/>
											</div> */}
									</div>

									{/* /End replace */}
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	let headers = {
		Authorization:
			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
	};
	let a = await fetch(
		"https://pakeeza-backend-railway-production.up.railway.app/api/products?filters[Category][$eq]=AC&populate=*",
		(headers = headers)
	);
	let productsData = await a.json();
	console.log(productsData);
	return {
		props: { productsData: productsData },
		// will be passed to the page component as props
	};
}
export default Products