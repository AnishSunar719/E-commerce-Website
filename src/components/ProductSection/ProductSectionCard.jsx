import React from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/CartSlice";

function ProductSectionCard({
	id,
	img,
	name,
	text,
	size,
	color,
	price,
}) {
	const defaultSize = size[0];
	const defaultColor = color[0];
	const dispatch = useDispatch();
	return (
		<Card className="w-96">
			<CardHeader floated={false} className="h-96">
				<img src={img} alt={name} />
			</CardHeader>
			<CardBody className="text-center">
				<Typography variant="h4" color="blue-gray" className="mb-2">
					{name}
				</Typography>
				<Typography color="gray" className="font-medium" textGradient>
					{text}
				</Typography>
			</CardBody>
			<div className="flex justify-between items-center p-4">
				<Typography color={"indigo"} className="font-medium" textGradient>
					Size Left: {defaultSize}
				</Typography>
				<Typography color={"pink"} className="font-medium" textGradient>
					${price}
				</Typography>
				<Typography color="gray" className="font-medium" textGradient>
					Color:{" "}
					<span
						className="px-[7px] rounded-full ml-2"
						style={{ backgroundColor: defaultColor }}
					></span>
				</Typography>
			</div>
			<CardFooter className="flex justify-center gap-7 pt-2">
				<Button
					variant="filled"
					color="pink"
					onClick={() =>
						dispatch(
							addToCart({
								id: id,
								name: name,
								size: defaultSize,
								color: defaultColor,
								qty: 1,
								price: price,
								img: img,
								text: text,
							})
						)
					}
				>
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	);
}

export default ProductSectionCard;
