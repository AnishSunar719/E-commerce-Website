import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

function Login() {
	const [values, setValues] = useState({
		name: "",
		password: "",
		imageURL: "",
	});
	const onChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const dispatch = useDispatch();
	return (
		<div className="h-screen flex items-center justify-center">
			<Card className="w-96">
				<CardHeader
					variant="gradient"
					color="pink"
					className="mb-4 grid h-28 place-items-center"
				>
					<Typography variant="h3" color="white">
						Sign In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<Input
						label="name"
						size="lg"
						color="pink"
						type="text"
						name="name"
						value={values.email}
						onChange={onChange}
					/>
					<Input
						label="Password"
						size="lg"
						color="pink"
						type="password"
						name="password"
						value={values.password}
						onChange={onChange}
					/>
					<Input
						label="Image URL Address"
						size="lg"
						color="pink"
						type="text"
						name="imageURL"
						value={values.image}
						onChange={onChange}
					/>
				</CardBody>
				<CardFooter className="pt-0">
					<Button
						variant="gradient"
						fullWidth
						color="pink"
						onClick={() => dispatch(login(values))}
					>
						Sign In
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default Login;
