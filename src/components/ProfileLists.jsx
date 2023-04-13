/** @format */

import React from "react";
import "../styles/profile-list.css";

const ProfileLists = ({ filteredProfiles }) => {
	const usersProfile = filteredProfiles.map((profile) => {
		return (
			<li key={profile.id}>
				<img src={profile.picture} alt="profile" />
				<div className="profile-details">
					<p>{profile.id}</p>
					<span>{`${profile.title} ${profile.firstName} ${profile.lastName}`}</span>
				</div>
			</li>
		);
	});
	const content = usersProfile?.length ? usersProfile : "";
	return (
		<div>
			<ul className="profile-card">{content}</ul>
		</div>
	);
};

export default ProfileLists;
