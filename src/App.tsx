import React from "react";
import "./App.css";
import BaseRoutes from "./Routing/routes";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<Provider store={store}>
			<BaseRoutes />
			<Toaster position="top-right" />
		</Provider>
	);
}

export default App;
