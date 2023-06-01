import React from "react";
import logo from "../../assets/images/logo.png";

function Footer() {
	const year = new Date().getFullYear();
	return <div>
		<div className="flex items-center justify-center">
			<hr className="h-px w-full bg-pink-600 opacity-50 outline-none border-none" />
		</div>
		<div className="flex justify-around items-center p-4 ">
			<div><img className="w-full h-24" src={logo} alt="logo" /></div>
			<div className="text-base">&copy; {year}</div>
		</div>
	</div>;
}

export default Footer;
