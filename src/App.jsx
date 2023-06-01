import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import SingleProduct from "./components/FilterProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import Error from "./components/Error/Error";

function App() {
	const user = useSelector((state) => state.authUser.authUser);
	const { authUser } = user;
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={authUser ? <Main /> : <Login />}></Route>
					<Route path="/filterProducts/:type" element={<FilterProducts />} />
					<Route path="/filterProducts/:type/:id" element={<SingleProduct />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
