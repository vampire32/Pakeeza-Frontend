import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { height } from '@mui/system';

const ProductCards = (props) => {
	
  return (
		<div className="flex justify-center">
			<div
				class={`card  border-4 border-${props.border} bg-transparent text-${props.text}-400`}
				style={{ width: "18rem" }}
			>
				<img src={props.Picture} class="card-img-top " alt="..." />

				<hr className="border-4" />
				<div class={`card-body bg-${props.bg}-800 h-[8rem] space-y-4`}>
					<h5 class={`text-${props.text2}-400 text-[15px] font-bold`}>
						{props.name}
					</h5>
					<h5 class={`text-${props.text} text-[15px] font-bold`}>
						{props.Brands}Model:{props.slug}
					</h5>
					<h5 className={`mt-2 text-[14px] text-${props.text} font-bold`}>
						Price:{props.price}
					</h5>
				</div>
				<a
					class={`btn border-2 border-${props.border}  bg-transparent text-${props.text}-400 mx-5 mb-3 hover-btn`}
				>
					<Link href={`/Products/${props.slug}`}>View</Link>
				</a>
			</div>
		</div>
	);
}

export default ProductCards