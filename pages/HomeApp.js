
import Filters from "../Components/Filters";
import MainSlider from "../Components/MainSlider";
import ProductCards from "../Components/ProductCards";
import { Fragment, useState } from "react";
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

const HomeApp = (props) => {
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
											>
												{subCategories.map((category) => (
													<li key={category.name}>
														<a href={category.href} className="block px-2 py-3">
															{category.name}
														</a>
													</li>
												))}
											</ul>

											{filters.map((section) => (
												<Disclosure
													as="div"
													key={section.id}
													className="border-t border-gray-200 px-4 py-6"
												>
													{({ open }) => (
														<>
															<h3 className="-mx-2 -my-3 flow-root">
																<Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
																	<span className="font-medium text-gray-900">
																		{section.name}
																	</span>
																	<span className="ml-6 flex items-center">
																		{open ? (
																			<MinusIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		) : (
																			<PlusIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		)}
																	</span>
																</Disclosure.Button>
															</h3>
															<Disclosure.Panel className="pt-6">
																<div className="space-y-6">
																	{section.options.map((option, optionIdx) => (
																		<div
																			key={option.value}
																			className="flex items-center"
																		>
																			<input
																				id={`filter-mobile-${section.id}-${optionIdx}`}
																				name={`${section.id}[]`}
																				defaultValue={option.value}
																				type="checkbox"
																				defaultChecked={option.checked}
																				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																			/>
																			<label
																				htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																				className="ml-3 min-w-0 flex-1 text-gray-500"
																			>
																				{option.label}
																			</label>
																		</div>
																	))}
																</div>
															</Disclosure.Panel>
														</>
													)}
												</Disclosure>
											))}
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
									<div>
										<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
											Sort
											<ChevronDownIcon
												className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>

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
												{sortOptions.map((option) => (
													<Menu.Item key={option.name}>
														{({ active }) => (
															<a
																href={option.href}
																className={classNames(
																	option.current
																		? "font-medium text-gray-900"
																		: "text-gray-500",
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm"
																)}
															>
																{option.name}
															</a>
														)}
													</Menu.Item>
												))}
											</div>
										</Menu.Items>
									</Transition>
								</Menu>

								<button
									type="button"
									className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
								>
									<span className="sr-only">View grid</span>
									<Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
								</button>
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
									<ul
										role="list"
										className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
									>
										{subCategories.map((category) => (
											<li key={category.name}>
												<a href={category.href}>{category.name}</a>
											</li>
										))}
									</ul>

									{filters.map((section) => (
										<Disclosure
											as="div"
											key={section.id}
											className="border-b border-gray-200 py-6"
										>
											{({ open }) => (
												<>
													<h3 className="-my-3 flow-root">
														<Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
															<span className="font-medium text-gray-900">
																{section.name}
															</span>
															<span className="ml-6 flex items-center">
																{open ? (
																	<MinusIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																) : (
																	<PlusIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																)}
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel className="pt-6">
														<div className="space-y-4">
															{section.options.map((option, optionIdx) => (
																<div
																	key={option.value}
																	className="flex items-center"
																>
																	<input
																		id={`filter-${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		defaultValue={option.value}
																		type="checkbox"
																		defaultChecked={option.checked}
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																	/>
																	<label
																		htmlFor={`filter-${section.id}-${optionIdx}`}
																		className="ml-3 text-sm text-gray-600"
																	>
																		{option.label}
																	</label>
																</div>
															))}
														</div>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</form>

								{/* Product grid */}
								<div className="lg:col-span-3">
									{/* Replace with your content */}
									<div className=" lg:h-full">
										<div className="row ">
											{props.productsData.data.map((item) => {
												let imgurl =
													"https://glacial-woodland-47482.herokuapp.com";
												let img = item.attributes.img.data.attributes.url;
												console.log(item.attributes.Model);

												return (
													<div className="col-md-4 " key={item.id}>
														<ProductCards
															slug={item.attributes.Name}
															Model={item.attributes.Model}
															brands={item.attributes.Brand}
															price={item.attributes.Price}
															Picture={imgurl + img}
														/>
													</div>
												);
											})}
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
export async function getStaticProps(context) {
	let headers = {
		Authorization:
			"e4cbdda2da4876ca76a1458aece14ae1e513d4f509c2ca53fba1368fcd806d0a93f30f4dde98050a933ff4b88fa7581685e5761c9f9c6413cd9fb0994fd045c78c046b29fe5e179e25f2075d82285f7cdc147a4b66f6a93475a24422e4a7e2aeb2f88be57addcd4e54e8be86106da6ae83035fb39710f87b087c241221cddcbf",
	};
	let a = await fetch(
		"https://glacial-woodland-47482.herokuapp.com/api/home-appliances?populate=*",
		(headers = headers)
	);
	let productsData = await a.json();
	console.log(productsData);
	return {
		props: { productsData: productsData },
		// will be passed to the page component as props
	};
}
export default HomeApp
