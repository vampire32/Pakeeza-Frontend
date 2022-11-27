import Image from 'next/image';
import React from 'react'
import Logo from '../styles/Images/PZ4.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from "react-icons/bs"
import {Ri24HoursLine} from "react-icons/ri"

const Header = () => {
  return (
		<div>
			<header class=" container text-gray-600 body-font overflow-hidden">
				<div className="row flex justify-center">
					<div className="col-md-3">
						<div className=" flex py-12">
							<HiOutlineLocationMarker size={30} color="#ffae42" />
							<h3>
								Address:Office No. 8 /A, near Punjab college, Block D Islamabad
							</h3>
						</div>
					</div>
					<div className="col-md-4">
						<div className=" flex  justify-center ml-10">
							<Image src={Logo} width={180} height={180} />
						</div>
					</div>
					<div className="col-md-2">
						<div className=" flex py-12 justify-center">
							<BsTelephone size={30} color="#ffae42" />
							<h3>+92-3365124444</h3>
						</div>
					</div>
					<div className="col-md-2">
						<div className=" flex py-12 justify-center">
							<Ri24HoursLine size={30} color="#ffae42" />
							<h3>24/7</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header