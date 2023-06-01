import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "authUser",
	initialState: {
		authUser: JSON.parse(sessionStorage.getItem("authUser")) || {
			name: "",
			password: "",
			imageURL: "",
			authUser: false,
		},
	},
	reducers: {
		login(state, action) {
			const userId = action.payload;
			const defaultImageURL =
				"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";
			const userValidation = /^[a-zA-Z]{1,10}$/i.test(userId.name);
			const passwordValidation = /^[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
				userId.password
			);
			state.authUser = userId;
			if (state.authUser.imageURL.length === 0) {
				state.authUser.imageURL = defaultImageURL;
			}
			if (!userValidation || !passwordValidation) {
				state.authUser.authUser = false;
			} else {
				state.authUser.authUser = true;
				const saveState = JSON.stringify(userId);
				sessionStorage.setItem("authUser", saveState);
			}
		},
		logout(state, action) {
			state.authUser = {
				name: "",
				password: "",
				imageURL: "",
				authUser: false,
			};
			sessionStorage.clear();
		},
	},
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
