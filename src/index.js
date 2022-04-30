import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

/* ALTERNATIVE
import {createStore} from 'redux';

<Provider store={createStore(reducers)}>
<App tab="home" />
</Provider>


*/
const store = configureStore({
	reducer: reducers,
});
export default store;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App tab="home" />
	</Provider>
);
