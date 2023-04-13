/** @format */

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileLists from "./components/ProfileLists";
import { profiles } from "./data/users-profile";
import "./styles/app.css";

const App = () => {
	const [userDetails] = useState(profiles);
	const [filteredProfiles, setFilteredProfiles] = useState(profiles);

	return (
		<div className="app">
			<SearchBar
				userDetails={userDetails}
				setFilteredProfiles={setFilteredProfiles}
			/>
			<ProfileLists filteredProfiles={filteredProfiles} />
		</div>
	);
};

export default App;
