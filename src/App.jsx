/** @format */

import { useState } from "react";
import "./app.css";
import { Users } from "./users";

const App = () => {
	const [query, setQuery] = useState("");
	return (
		<div className="app">
			<input
				type="text"
				placeholder="Search by name..."
				className="search"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul className="profileList">
				{Users.filter((user) =>
					user.firstName.toLowerCase().includes(query)
				).map((user) => (
					<li key={user.id} className="listItem">
						{user.firstName} {user.lastName}
					</li>
				))}
			</ul>
		</div>
	);
};
export default App;
