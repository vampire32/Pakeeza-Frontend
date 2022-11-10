import Head from "next/head";
import Script from "next/script";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/nouislider.css";
import "../styles/slick.css";
import '../styles/Home.css'
import '../styles/filters.css'
import '../styles/about.css'
import '../styles/checkout.css'



import NavBar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
	 
	
	 console.log("I am use Effect ")
	}, [])
	const [Carts, setCarts] = useState({})
	const [SubTotal, setSubTotal] = useState(0)
	useEffect(() => {
		try {
			 if (localStorage.getItem("Carts")) {
					setCarts(JSON.parse(localStorage.getItem("Carts")));
				}
		} catch (error) {
			console.error(error)

			
		}
		
	 
	}, [])
	
	// const addtocart=(qty,price,name,img)=>{
	// 	let newCart=Carts;
	// 	if(name in Carts){
	// 		newCart[name].qty=Carts[name].qty+qty
	// 	}
	// 	else{
	// 		newCart[name]={qty:1,price,name,img}
	// 	}
	// 	setCarts(newCart)
	// 	saveCart(newCart)
	// }
	const addToCart=(itemCode,qty,price,name,img)=>{
		let newCart=Carts
		if (itemCode in Carts) {
			newCart[itemCode].qty = Carts[itemCode].qty + qty;
		} else {
			newCart[itemCode] = { qty: 1, price, name, img };
		}
		setCarts(newCart);
		saveCart(newCart);

	}
	const saveCart = (myCart) => {
		localStorage.setItem("Carts", JSON.stringify(myCart));
		let subt = 0;
		let keys = Object.keys(myCart);
		for (let i = 0; i < keys.length; i++) {
			subt = myCart[keys[i]].price * myCart[keys[i]].qty;
		}
		setSubTotal(subt);
	};
	const clearCart=()=>{
		setCarts({})
		saveCart({})
	}
	
	 
	
	
	return (
		<>
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
					crossOrigin="anonymous"
				/>
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
				crossorigin="anonymous"
			/>
			<Script src="https://cdn.tailwindcss.com" />
			<NavBar
				Carts={Carts}
				addToCart={addToCart}
				clearCart={clearCart}
				SubTotal={SubTotal}
			/>

			<Component
				Carts={Carts}
				addToCart={addToCart}
				clearCart={clearCart}
				{...pageProps}
			/>
			<Footer />
		</>
	);
}

export default MyApp;
