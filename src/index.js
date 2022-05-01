import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";


/* ALTERNATIVE
import {createStore} from 'redux';

<Provider store={createStore(reducers)}>
<App tab="home" />
</Provider>


*/



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	
		<App tab="home" />
	
);
