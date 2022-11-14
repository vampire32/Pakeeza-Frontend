import { useState,useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import C1 from '../../styles/Images/cart.jpg'
import C2 from "../../styles/Images/cart-2.jpg";
import C3 from "../../styles/Images/cart-3.jpg";
import C4 from "../../styles/Images/cart-4.jpg";
import Image from "next/image";
import ProductCards from "../../Components/ProductCards";


const product = {
	
	name: "Basic Tee 6-Pack",
	price: 192,
	href: "#",
	breadcrumbs: [
		{ id: 1, name: "Men", href: "#" },
		{ id: 2, name: "Clothing", href: "#" },
	],
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
	colors: [
		{ name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
		{ name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
		{ name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
	],
	sizes: [
		{ name: "XXS", inStock: false },
		{ name: "XS", inStock: true },
		{ name: "S", inStock: true },
		{ name: "M", inStock: true },
		{ name: "L", inStock: true },
		{ name: "XL", inStock: true },
		{ name: "2XL", inStock: true },
		{ name: "3XL", inStock: true },
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		"Hand cut and sewn locally",
		"Dyed with our proprietary colors",
		"Pre-washed & pre-shrunk",
		"Ultra-soft 100% cotton",
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}



const Slug = ({ addToCart, RemoveFromcart, productsData }) => {
	const router = useRouter();
	const { slug } = router.query;

	const [item, setitem] = useState([]);
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
	return (
		<div>
			<section class="text-gray-600 body-font overflow-hidden">
				<div class="container px-5 py-24 mx-auto">
					{productsData.data.map((item) => {
						let imgurl = "https://glacial-woodland-47482.herokuapp.com";
						let img = item.attributes.img.data.attributes.formats.thumbnail.url;
						console.log(item.attributes.Model);

						return (
							<div key={item.id} class="lg:w-4/5 mx-auto flex flex-wrap">
								<img
									alt="ecommerce"
									class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
									src={img}
								/>
								<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
									<h2 class="text-sm title-font text-gray-500 tracking-widest">
										{slug}
									</h2>
									<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
										{item.attributes.Name}
									</h1>
									<h2 class="text-sm title-font text-gray-500 tracking-widest">
										Warrant:
									</h2>

									<p class="leading-relaxed">
										Fam locavore kickstarter distillery. Mixtape chillwave
										tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
										indxgo juiceramps cornhole raw denim forage brooklyn.
										Everyday carry +1 seitan poutine tumeric. Gastropub blue
										bottle austin listicle pour-over, neutra jean shorts keytar
										banjo tattooed umami cardigan.
									</p>
									<hr className="border-3" />

									<div class="flex mt-3">
										<span class="title-font font-medium text-2xl text-gray-900">
											{item.attributes.Price}
										</span>
										<button
											class="flex ml-auto text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none  rounded"
											onClick={() => {
												addToCart(
													slug,
													1,
													item.attributes.Price,
													item.attributes.Name,
													img
												);
											}}
										>
											Add to Cart
										</button>
										<button class="flex ml-auto text-white bg-gray-800  border-0 py-2 px-6 focus:outline-none  rounded">
											Buy Now
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<ul
				class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
				id="tabs-tabJustify"
				role="tablist"
			>
				<li class="nav-item flex-grow text-center" role="presentation">
					<a
						href="#tabs-homeJustify"
						class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
						id="tabs-home-tabJustify"
						data-bs-toggle="pill"
						data-bs-target="#tabs-homeJustify"
						role="tab"
						aria-controls="tabs-homeJustify"
						aria-selected="true"
					>
						Details
					</a>
				</li>
				<li class="nav-item flex-grow text-center" role="presentation">
					<a
						href="#tabs-profileJustify"
						class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
						id="tabs-profile-tabJustify"
						data-bs-toggle="pill"
						data-bs-target="#tabs-profileJustify"
						role="tab"
						aria-controls="tabs-profileJustify"
						aria-selected="false"
					>
						Specification
					</a>
				</li>
				<li class="nav-item flex-grow text-center" role="presentation">
					<a
						href="#tabs-messagesJustify"
						class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
						id="tabs-messages-tabJustify"
						data-bs-toggle="pill"
						data-bs-target="#tabs-messagesJustify"
						role="tab"
						aria-controls="tabs-messagesJustify"
						aria-selected="false"
					>
						Reviews
					</a>
				</li>
			</ul>
			<div class="tab-content" id="tabs-tabContentJustify">
				<div
					class="tab-pane fade show active"
					id="tabs-homeJustify"
					role="tabpanel"
					aria-labelledby="tabs-home-tabJustify"
				>
					Tab 1 content justify
				</div>
				<div
					class="tab-pane fade"
					id="tabs-profileJustify"
					role="tabpanel"
					aria-labelledby="tabs-profile-tabJustify"
				>
					Tab 2 content justify
				</div>
				<div
					class="tab-pane fade"
					id="tabs-messagesJustify"
					role="tabpanel"
					aria-labelledby="tabs-profile-tabJustify"
				>
					Tab 3 content justify
				</div>
			</div>
		</div>
	);
};
export async function getServerSideProps(context) {
	
	const { slug } = context.query;
	console.log(slug)
	
	let headers = {
		Authorization:
			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
	};
	let a = await fetch(
		`https://gentle-lake-42463.herokuapp.com/api/products?filters[Model][$contains]=${slug}&populate=*`,
		(headers = headers)
	);
	let productsData = await a.json();
	console.log(productsData);
	return {
		props: { productsData: productsData },
		// will be passed to the page component as props
	};
}
export default Slug
