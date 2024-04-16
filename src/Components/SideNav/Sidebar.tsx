import React from "react";

import "./styles.css";
import trackerLogo from "../../Assets/Images/logo.png";
import { sidebarItems } from "./sidebarItems";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
	const mediumDevices = useMediaQuery({ query: "(min-width: 1023px)" });
	const smallDevices = useMediaQuery({ query: "(min-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(min-width: 320px)" });
	const { open } = useSelector((state: RootState) => state.toggleSidebar);
	return (
		<React.Fragment>
			{sidebarItems.length > 0 ? (
				<div
					style={{
						width: open
							? "225px"
							: mediumDevices
							? "70px"
							: smallDevices
							? "65px"
							: mobileDevices
							? "50px"
							: "70px",
					}}
					className={"sidebar-container"}>
					<div className="logo-container">
						<img src={trackerLogo} alt="" className="sidebar-logo" />
					</div>
					<div className="company-name-container">
						<div className="company-logo"></div>
						<h5
							style={{ display: open ? "block" : "none" }}
							className="company-name">
							Vulcan Admin
						</h5>
						<p style={{ display: open ? "block" : "none" }} className="role">
							Administrator
						</p>
					</div>
					<div className="">
						{sidebarItems.map((item, idx) => {
							return (
								<NavLink
									to={item.link}
									style={{ textDecoration: "none" }}
									className={({ isActive }) =>
										isActive ? "active-link link" : "link"
									}
									key={idx}>
									<div className="link-row">
										{item.icon}
										<p
											style={{ display: open ? "block" : "none" }}
											className="link-text">
											{item.text}
										</p>
									</div>
								</NavLink>
							);
						})}
					</div>
				</div>
			) : null}
		</React.Fragment>
	);
};

export default Sidebar;
