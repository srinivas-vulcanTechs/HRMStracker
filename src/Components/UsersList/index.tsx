import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";

import "./styles.css";

type UsersListProps = {
	user: {
		photo: string;
		name: string;
	};
	userClicked: boolean;
	setUserClicked: any;
};

export default function UsersList(props: UsersListProps) {
	return (
		<React.Fragment>
			<div className="users-list-container">
				<div
					onClick={() => props.setUserClicked(!props.userClicked)}
					style={{ cursor: "pointer" }}
					className="user-container">
					<img
						src={props.user?.photo}
						alt=""
						style={{ height: "45px", width: "45px", borderRadius: "50%" }}
					/>
					<p className="username">
						<b>{props.user?.name}</b>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}
