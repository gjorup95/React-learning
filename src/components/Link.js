import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (e) => {
		if (e.metaKey || e.ctrlKey) {
			return;
		}
		e.preventDefault();
		window.history.pushState({}, "", href);

		// tell the route that the data has changed
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
