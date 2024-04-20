import React, { useState, useEffect } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineSpatialTracking } from "react-icons/md";
import trackerLogo from "../../Assets/Images/logo.png";
import { LuTriangleRight, LuHistory } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
	const mediumDevices = useMediaQuery({ query: "(min-width: 1023px)" });
	const smallDevices = useMediaQuery({ query: "(min-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(min-width: 320px)" });
	const allSmallerDevices = useMediaQuery({ query: "(max-width:768px)" });
	const { open } = useSelector((state: RootState) => state.toggleSidebar);

	// Define initial width based on media queries and open state
	const [sidebarWidth, setSidebarWidth] = useState(() => {
		if (open) {
			return "250px";
		} else if (mediumDevices) {
			return "70px";
		} else if (smallDevices) {
			return "65px";
		} else if (mobileDevices) {
			return "50px";
		} else {
			return "70px";
		}
	});

	useEffect(() => {
		// Update sidebar width when open state changes
		setSidebarWidth(open ? "250px" : "70px");
	}, [open]);

	return (
		<div style={{ width: sidebarWidth }} className={"sidebar-container"}>
			<div className="logo-container">
				<img src={trackerLogo} alt="" className="sidebar-logo" />
			</div>
			<div className="company-name-container">
				{mediumDevices && open && (
					<div
						style={{ height: "70px", width: "70px" }}
						className="company-logo"></div>
				)}
				{allSmallerDevices && <div className="company-logo"></div>}
				{!open && mediumDevices && <div className="company-logo"></div>}
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
				<NavLink
					to="/"
					style={{ textDecoration: "none" }}
					className={({ isActive }) =>
						isActive ? "active-link link" : "link"
					}>
					<div className="link-row">
						<IoCreateOutline
							color="303539"
							fontSize={open ? 20 : 22}
							style={{
								color: open ? "#303539" : "#080808",
							}}
						/>
						<p
							style={{ display: open ? "block" : "none" }}
							className="link-text">
							Create Fence
						</p>
					</div>
				</NavLink>
				<NavLink
					to="/tracking"
					style={{ textDecoration: "none" }}
					className={({ isActive }) =>
						isActive ? "active-link link" : "link"
					}>
					<div className="link-row">
						<MdOutlineSpatialTracking
							color="303539"
							fontSize={open ? 20 : 22}
							style={{ color: open ? "#303539" : "#080808" }}
						/>
						<p
							style={{ display: open ? "block" : "none" }}
							className="link-text">
							Tracking
						</p>
					</div>
				</NavLink>
				<NavLink
					to="/triangulate"
					style={{ textDecoration: "none" }}
					className={({ isActive }) =>
						isActive ? "active-link link" : "link"
					}>
					<div className="link-row">
						<LuTriangleRight
							color="303539"
							fontSize={open ? 20 : 22}
							style={{ color: open ? "#303539" : "#080808" }}
						/>
						<p
							style={{ display: open ? "block" : "none" }}
							className="link-text">
							Triangulate
						</p>
					</div>
				</NavLink>
				<NavLink
					to="/tracking-history"
					style={{ textDecoration: "none" }}
					className={({ isActive }) =>
						isActive ? "active-link link" : "link"
					}>
					<div className="link-row">
						<LuHistory
							color="303539"
							fontSize={open ? 20 : 22}
							style={{ color: open ? "#303539" : "#080808" }}
						/>
						<p
							style={{ display: open ? "block" : "none" }}
							className="link-text">
							Create Fence
						</p>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
