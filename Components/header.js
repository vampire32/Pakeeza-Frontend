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
				<div class="container mx-auto flex  flex-col  md:flex-row items-center">
					<a class="flex title-font font-medium items-center text-gray-900 ">
						<Image src={Logo} width={150} height={150} />
					</a>
					<nav class="md:ml-auto lg:ml-[40%] flex  ">
						<a class="mr-5 hover:text-gray-900">
							<div className="flex">
								<HiOutlineLocationMarker size={30} color="#ffae42" />
								<a class="mr-5 hover:text-gray-900">
									Address:Office No. 8 /A, near Punjab college, Block D
									Islamabad
								</a>
							</div>
						</a>

						<a class="mr-5 hover:text-gray-900 w-80">
							<div className="flex">
								<BsTelephone size={30} color="#ffae42" />
								<a class="mr-5 hover:text-gray-900">+92-3365124444</a>
							</div>
						</a>
						<a class="mr-5 hover:text-gray-900 w-48">
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