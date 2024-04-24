import React from "react";

import "./styles.css";
import { useMediaQuery } from "react-responsive";

type ClockInOutCardProps = {
	img?: string;
	height?: string;
};
export default function ClockInOutCards(props: ClockInOutCardProps) {
	const { img, height } = props;
	const bigScreens = useMediaQuery({ minWidth: "767px" });
	const usersClockInOut = [
		{
			name: "John Clay",
			clockIn: true,
			clockOut: false,
			date: new Date("2021-08-15T12:00:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "Marry John",
			clockIn: true,
			clockOut: false,
			date: new Date("2021-08-15T12:05:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "Sia Block",
			clockIn: true,
			clockOut: false,
			date: new Date("2021-08-15T12:10:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "John Clay",
			clockIn: true,
			clockOut: false,
			date: new Date("2021-08-15T12:00:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "John Clay",
			clockIn: false,
			clockOut: true,
			date: new Date("2021-08-15T09:00:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "Marry John",
			clockIn: false,
			clockOut: true,
			date: new Date("2021-08-15T10:00:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
		{
			name: "Sia Block",
			clockIn: false,
			clockOut: true,
			date: new Date("2021-08-15T10:52:00"),
			profilePicture:
				"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais",
		},
	];
	return (
		<React.Fragment>
			<div
				style={{ height: bigScreens ? "70vh" : height ? height : "50%" }}
				className="absolute-overflow-container">
				{usersClockInOut.map((item, idx) => {
					return (
						<div
							className="clock-in-out-card  mb-2 d-flex align-items-center gap-2 p-2 rounded"
							key={idx}>
							<img
								src={img ? img : item.profilePicture}
								alt=""
								style={{ height: "50px", width: "50px", borderRadius: "50%" }}
							/>
							<div className="">
								<div className="">
									<b>{item.name}</b> has{" "}
									{item.clockIn ? "Clocked In" : "Clocked Out"} at{" "}
									{item.date.toString()}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
}
