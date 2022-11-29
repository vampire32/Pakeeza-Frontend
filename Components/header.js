import Image from 'next/image';
import React from 'react'
import Logo from '../styles/Images/Pakeeza_Logo-removebg-preview.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from "react-icons/bs"
import {Ri24HoursLine} from "react-icons/ri"

const Header = () => {
  return (
		<div>
			<header class=" container text-gray-600 body-font overflow-hidden ">
				<div className="row flex justify-center">
					<div className="col-md-3 hide">
						<div className=" flex py-12">
							<HiOutlineLocationMarker size={45} color="#ffae42" />
							<h3 className="mt-2">
								Address:Office No. 8 /A, near Punjab college, Block D Islamabad
							</h3>
						</div>
					</div>
					<div className="col-md-4">
						<div className=" flex  justify-center ml-10">
							<Image src={Logo} width={200} height={200} />
						</div>
					</div>
					<div className="col-md-2 hide">
						<div className=" flex py-12 justify-center">
							<a
								href="tel:+923365124444"
								
								
							>
								<BsTelephone
									size={40}
									color=" ffae42"
									className=""
								/>
							</a>

							<h3>+92-3365124444</h3>
						</div>
					</div>
					<div className="col-md-2 hide">
						<div className=" flex py-12 justify-center">
							<Ri24HoursLine size={40} color="#ffae42" />
							<h3 className="ml-4">24/7</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header