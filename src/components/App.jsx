/** @format */

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileLists from "./ProfileLists";
import { profiles } from "../data/users-profile";
import "../styles/app.css";

const App = () => {
	const [userDetails] = useState(profiles);
	const [searchQuery, setSearchQuery] = useState(profiles);
	console.log(profiles);

	return (
		<div className="app">
			<SearchBar
				userDetails={userDetails}
				setSearchQuery={setSearchQuery}
			/>
			<ProfileLists searchQuery={searchQuery} />
		</div>
	);
};

export default App;
