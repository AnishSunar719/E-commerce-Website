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
import {
	removeFromWishList,
	emptyWishList,
} from "../../features/slices/wishSlice";

function WishList({ openWish, setOpenWish }) {
	const { wishList, totalQty } = useSelector((state) => state.wishList);
	const dispatch = useDispatch();
	return (
		<Fragment>
			<Dialog
				open={openWish}
				handler={() => setOpenWish(false)}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				size="lg"
				className="overflow-auto"
			>
				<DialogHeader>Your WishList</DialogHeader>
				<DialogBody divider className="flex justify-around overflow-auto">
					{wishList.length > 0 ? (
						wishList.map((item, idx) => {
							return (
								<div
									className="flex justify-around py-2 items-center gap-8"
									key={idx}
								>
									<div>
										<img
											className="h-[10rem] w-[7rem] rounded-md"
											src={item.img}
											alt={item.name}
										/>
										<div className="flex flex-col justify-center items-center">
											<h4 className="font-bold text-center tracking-normal leading-none text-base pt-2">
												{item.name}
											</h4>
											<p className="tracking-normal leading-none text-sm pt-2">
												${item.price}
											</p>
											<Tooltip content="Remove from wishlist" placement="right">
												<Button
													variant="gradient"
													color="red"
													size="sm"
													ripple={true}
													onClick={() => dispatch(removeFromWishList(item))}
													className="flex mt-2"
												>
													<BsFillTrash3Fill />
												</Button>
											</Tooltip>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<span>Your WishList is Empty</span>
					)}
				</DialogBody>
				{wishList.length > 0 && (
					<DialogFooter className="flex justify-between items-center">
						<p className="tracking-normal leading-none text-sm pt-2">
							Total Quantity: {totalQty}
						</p>
						<Button
							variant="filled"
							color="red"
							size="md"
							onClick={() => dispatch(emptyWishList())}
						>
							Empty wishList
						</Button>
					</DialogFooter>
				)}
			</Dialog>
		</Fragment>
	);
}

export default WishList;
