import Image from 'next/image';
import React from 'react'
import Logo from '../styles/Images/PZ4.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from "react-icons/bs"
import {Ri24HoursLine} from "react-icons/ri"

const Header = () => {
  return (
		<div>
			<header class="text-gray-600 body-font">
				<div class="container mx-auto flex flex-wrap  flex-col p-2 md:flex-row items-center">
					<a class="flex title-font font-medium items-center text-gray-900 ">
						<Image src={Logo} width={80} height={80} />
					</a>
					<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a class="mr-5 hover:text-gray-900">
							<div className="flex">
								<HiOutlineLocationMarker size={30} color="#ffae42" />
								<a class="mr-5 hover:text-gray-900">Address</a>
							</div>
						</a>

						<a class="mr-5 hover:text-gray-900">
							<div className="flex">
								<BsTelephone size={30} color="#ffae42" />
								<a class="mr-5 hover:text-gray-900">+92-XXXXXXX</a>
							</div>
						</a>
						<a class="mr-5 hover:text-gray-900">
							<div className="flex">
								<Ri24HoursLine size={30} color="#ffae42" />
								<a class="mr-5 hover:text-gray-900">Open 24/7</a>
							</div>
						</a>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default Header