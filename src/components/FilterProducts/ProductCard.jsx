import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/ProductsSlice";
import { useParams, Link } from "react-router-dom";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

function ProductCard({ id, img, name, text, colors, price, gender, liked }) {
	const dispatch = useDispatch();
	const { type } = useParams();
	return (
		<Link to={`/filterProducts/${type}/` + id}>
			<Card className="w-96 h-auto" onClick={() => dispatch(singleProduct(id))}>
				<CardHeader color="pink" className="relative h-[550px]">
					<img src={img} alt="img-blur-shadow" className="h-full w-full" />
					<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
					{liked ? (
						<Tooltip content="In your wishlist" placement="bottom">
						<IconButton
							size="lg"
							color="red"
							variant="text"
							className="!absolute top-4 right-4 rounded-full"
						>
							<VscHeartFilled size={32} />
						</IconButton>
						</Tooltip>
					) : (
						<IconButton
							size="lg"
							color="gray"
							variant="text"
							className="!absolute top-4 right-4 rounded-full"
						>
							<VscHeart size={32} />
						</IconButton>
					)}
				</CardHeader>
				<CardBody className="text-center">
					<Typography variant="h5" className="mb-2">
						{name}
					</Typography>
					<Typography>{text}</Typography>
				</CardBody>
				<CardFooter divider className="flex items-center justify-between py-3">
					<Typography variant="small">${price}</Typography>
					<Typography variant="small" color={"pink"}>
						{gender.charAt(0).toUpperCase()}
					</Typography>
					<Typography variant="small" color="gray" className="flex gap-1">
						<span className="">Color: </span>
						{colors.map((color, idx) => {
							return (
								<i
									className="rounded-full p-2 mb-2"
									style={{ backgroundColor: color }}
									key={idx}
								></i>
							);
						})}
					</Typography>
				</CardFooter>
			</Card>
		</Link>
	);
}

export default ProductCard;
