// import the react and reactdom libraries
// Create a react component
// take the react component and show it on the screen
import React from "react";
import { createRoot } from "react-dom/client";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui cointainer comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
				</div>
				Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="today at 3:42PM"
					textMessage="Nej hvor dejligt"
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="yesterday at 3:33PM"
					textMessage="Det går super fint"
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="today at 1:15PM"
					textMessage="Hej hvordan går det"
					profileImage={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
//
