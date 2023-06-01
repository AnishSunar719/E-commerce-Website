import React from "react";
import { Fragment } from "react";
import {
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Button,
	Tooltip,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import { removeFromCart, emptyCart } from "../../features/slices/CartSlice";

function Cart({ openCart, setOpenCart }) {
	const { cart, totalPrice, totalQty } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	return (
		<Fragment>
			<Dialog
				open={openCart}
				handler={() => setOpenCart(false)}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				size="md"
				className="overflow-y-auto"
			>
				<DialogHeader>Your cart</DialogHeader>
				<DialogBody divider className="overflow-y-auto">
					{cart.length > 0 ? (
						cart.map((item, idx) => {
							return (
								<div
									className="overflow-y-auto grid grid-cols-3 py-2 items-center gap-8"
									key={idx}
								>
									<div>
										<img
											className="h-[125px] rounded-md"
											src={item.img}
											alt={item.name}
										/>
										<div className="flex flex-col items-start">
											<h4 className="font-bold tracking-normal leading-none text-base pt-2">
												{item.name}
											</h4>
										</div>
									</div>
									<div>
										<p className="tracking-normal leading-none text-sm pt-2">
											Size:<span className="ml-2">{item.size}</span>
										</p>
										<p className="tracking-normal leading-none text-sm pt-2">
											Color:
											<span
												className="ml-2 px-[7px] rounded-full"
												style={{ backgroundColor: item.color }}
											></span>
										</p>
										<p className="tracking-normal leading-none text-sm pt-2">
											Quantity:<span className="ml-2">{item.qty}</span>
										</p>
										<p className="tracking-normal leading-none text-sm pt-2">
											Rate:<span className="ml-2">${item.price}</span>
										</p>
										<p className="tracking-normal leading-none text-sm pt-2">
											Total:
											<span className=" ml-2">${item.price * item.qty}</span>
										</p>
									</div>
									<div>
										<Tooltip content="Remove" placement="right">
											<Button
												variant="filled"
												color="red"
												size="sm"
												ripple={true}
												onClick={() => {
													dispatch(removeFromCart(item));
												}}
												className="flex mt-2"
											>
												Remove
												<BsFillTrash3Fill className="ml-2" />
											</Button>
										</Tooltip>
									</div>
								</div>
							);
						})
					) : (
						<span>Your cart is Empty</span>
					)}
				</DialogBody>
				{cart.length > 0 && (
					<DialogFooter className="flex justify-between items-center">
						<p className="tracking-normal leading-none text-sm pt-2">
							Total Quantity:<span className="ml-2">{totalQty}</span>
						</p>
						<Button
							variant="filled"
							color="red"
							size="md"
							onClick={() => dispatch(emptyCart())}
						>
							Empty Cart
						</Button>
						<p className="tracking-normal leading-none text-sm pt-2">
							Grand Total:<span className="ml-2">${totalPrice}</span>
						</p>
					</DialogFooter>
				)}
			</Dialog>
		</Fragment>
	);
}

export default Cart;
