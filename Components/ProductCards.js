import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const ProductCards = (props) => {
  return (
		<div className="flex justify-center">
			<div
				class="card  border-4 border-yellow-400 bg-transparent text-white"
				style={{ width: "22rem" }}
			>
				<img src={props.Picture} class="card-img-top " alt="..." />
				<hr className="border-4" />
				<div class="card-body ">
					<h5 class="text-[15px] font-bold">{props.name}</h5>
					<h5 class="text-[14px] ">
						{props.Brands}Model:{props.slug}
					</h5>
					<h5 className="mt-2 text-[14px] font-bold">Price:{props.price}</h5>
				</div>
				<a class="btn border-2 border-yellow-400  bg-transparent text-white mx-5 mb-3 hover-btn">
					<Link href={`/Products/${props.slug}`}>View</Link>
				</a>
			</div>
		</div>
	);
}

export default ProductCards