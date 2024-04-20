import React from "react";

type UsersListProps = {
	user: {
		profilePicture: string;
		name: string;
	};
};
export default function UsersList(props: UsersListProps) {
	return (
		<React.Fragment>
			<div className="bg-white d-flex align-items-center gap-3 p-2 mb-1 rounded">
				<img
					src={props.user.profilePicture}
					alt=""
					style={{ height: "35px", width: "35px", borderRadius: "50%" }}
				/>
				<p className="username">
					<b>{props.user.name}</b>
				</p>
			</div>
		</React.Fragment>
	);
}
