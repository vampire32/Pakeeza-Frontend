import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const ProductCards = (props) => {
  return (
		<div>
			<div class="p-4   ">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
					<a class="block relative h-48 rounded overflow-hidden">
						<img
							alt="ecommerce"
							class="object-cover object-center w-full h-full block"
							src={props.Picture}
						/>
					</a>
					<div class="p-6 drop-shadow-xl">
						<span class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							{props.brands} Model:{props.Model}
						</span>
						
						<h3 class="title-font text-lg font-medium text-gray-900 mb-3">
							{props.slug}
						</h3>
						<span class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							Rs.{props.price}
						</span>

						<div class="flex items-center flex-wrap ">
							<a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
								<Link href={`/Products/${props.slug}`}>View</Link>
								<svg
									class="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 12h14"></path>
									<path d="M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCards