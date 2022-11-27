import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Floating = () => {
  return (
		<>
			<a
				href="tel:+923365124444"
				className="float drop-shadow-md"
				rel="noopener noreferrer"
			>
				<AiFillPhone
					size="1.8em"
					className="fa fa-plus my-float "
				></AiFillPhone>
			</a>
			<a
				href="https://api.whatsapp.com/send?phone+923365124444"
				target="_blank"
				className="float2 drop-shadow-md"
				rel="noopener noreferrer"
			>
				<BsWhatsapp size="1.8em" className="fa fa-plus my-float "></BsWhatsapp>
			</a>
		</>
	);
}

export default Floating
