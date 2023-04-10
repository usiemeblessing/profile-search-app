/** @format */

const UserProfile = ({ picture, id, title, firstName, lastName }) => {
	return (
		<div className="profile-details-container">
			<div>{picture}</div>
			<div className="id-name">
				<p>00kaldflhdlfldgldghldhlhdhfh</p>
				<p>
					{title} {firstName}
					{lastName}
				</p>
			</div>
		</div>
	);
};

export default UserProfile;
