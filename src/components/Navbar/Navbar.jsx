import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button } from "@material-tailwind/react";

import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { logout } from "../../features/slices/authSlice";

function Navbar() {
	const [open, setOpen] = useState(false);
	const [openWish, setOpenWish] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleWish = () => setOpenWish(true);
	const cartTotalQty = useSelector((state) => state.cart.totalQty);
	const wishListTotalQty = useSelector((state) => state.wishList.totalQty);
	const { name, imageURL } = useSelector((state) => state.authUser.authUser);
	const dispatch = useDispatch();

	return (
		<>
			<div className="bg-black w-full p-2">
				<h3 className="text-pink-600 text-center text-2xl font-bold tracking-normal leading-none">
					Welcome
				</h3>
			</div>
			<div className="flex justify-around h-24 items-center">
				<div>
					<img className="w-full h-24" src={logo} alt="Logo" />
				</div>
				<div className="flex flex-row items-center gap-4 ">
					<div
						className="flex flex-row gap-1 cursor-pointer"
						onClick={handleWish}
					>
						<Button
							className="flex gap-1 items-center"
							variant="outlined"
							color="pink"
							size="sm"
						>
							{wishListTotalQty > 0 ? (
								<span className="rounded-full bg-pink-300 text-white  px-2 mr-1">
									{wishListTotalQty}
								</span>
							) : (
								<AiOutlineHeart size={20} />
							)}
							Wishlist
						</Button>
						<div>
							{openWish && (
								<WishList openWish={openWish} setOpenWish={setOpenWish} />
							)}
						</div>
					</div>
					<div
						className="flex flex-row gap-1 items-center cursor-pointer"
						onClick={handleOpen}
					>
						{cartTotalQty > 0 ? (
							<span className="rounded-full bg-pink-300 text-white  px-2 mr-1">
								{cartTotalQty}
							</span>
						) : (
							<BsBag size={20} />
						)}
						<p>Shopping Bag</p>
						<div>{open && <Cart openCart={open} setOpenCart={setOpen} />}</div>
					</div>
					<div className="flex items-center gap-2">
						{imageURL && <Avatar src={imageURL} alt="avatar" size="sm" />}
						<p>Hi, {name.split(" ")[0]}</p>
						<div className="ml-2">
							<Button
								variant="filled"
								color="pink"
								size="sm"
								onClick={() => dispatch(logout())}
							>
								Log Out
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-around bg-black text-white p-4">
				<div className="text-pink-600 text-base font-medium tracking-normal leading-none">
					<span>50% Off</span>
				</div>
				<div className="text-pink-600 text-base font-medium tracking-normal leading-none">
					<span>Free Shipping and Returns</span>
				</div>
				<div className="text-pink-600 text-base font-medium tracking-normal leading-none">
					<span>Different Payments</span>
				</div>
			</div>
		</>
	);
}

export default Navbar;
