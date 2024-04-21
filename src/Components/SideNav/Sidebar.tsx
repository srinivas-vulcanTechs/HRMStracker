import React, { useState, useEffect } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineSpatialTracking } from "react-icons/md";
import trackerLogo from "../../Assets/Images/logo.png";
import { LuTriangleRight, LuHistory } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

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
			{open ? (
				<React.Fragment>
					<motion.div
						{...framerSidebarBackground}
						aria-hidden="true"></motion.div>
					<motion.div {...framerSidebarPanel} aria-label="sidebar">
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
									<motion.div {...framerIcon}>
										<IoCreateOutline
											color="303539"
											fontSize={open ? 20 : 22}
											style={{
												color: open ? "#303539" : "#080808",
											}}
										/>
									</motion.div>
									<motion.span
										{...framerText(0)}
										style={{ display: open ? "block" : "none" }}
										className="link-text">
										Create Fence
									</motion.span>
								</div>
							</NavLink>
							<NavLink
								to="/tracking"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<MdOutlineSpatialTracking
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
									<motion.span
										{...framerText(1)}
										style={{ display: open ? "block" : "none" }}
										className="link-text">
										Tracking
									</motion.span>
								</div>
							</NavLink>
							<NavLink
								to="/triangulate"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<LuTriangleRight
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
									<motion.span
										{...framerText(2)}
										style={{ display: open ? "block" : "none" }}
										className="link-text">
										Triangulate
									</motion.span>
								</div>
							</NavLink>
							<NavLink
								to="/tracking-history"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<LuHistory
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
									<motion.span
										{...framerText(3)}
										style={{ display: open ? "block" : "none" }}
										className="link-text">
										Tracking History
									</motion.span>
								</div>
							</NavLink>
						</div>
					</motion.div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="sidebar-container" style={{ width: sidebarWidth }}>
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
									<motion.div {...framerIcon}>
										<IoCreateOutline
											color="303539"
											fontSize={open ? 20 : 22}
											style={{
												color: open ? "#303539" : "#080808",
											}}
										/>
									</motion.div>
								</div>
							</NavLink>
							<NavLink
								to="/tracking"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<MdOutlineSpatialTracking
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
								</div>
							</NavLink>
							<NavLink
								to="/triangulate"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<LuTriangleRight
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
								</div>
							</NavLink>
							<NavLink
								to="/tracking-history"
								style={{ textDecoration: "none" }}
								className={({ isActive }) =>
									isActive ? "active-link link" : "link"
								}>
								<div className="link-row">
									<motion.div {...framerIcon}>
										<LuHistory
											color="303539"
											fontSize={open ? 20 : 22}
											style={{ color: open ? "#303539" : "#080808" }}
										/>
									</motion.div>
								</div>
							</NavLink>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Sidebar;

const framerSidebarBackground = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 1, transition: { delay: 0.5 } },
	transition: { duration: 0.5 },
};

const framerSidebarPanel = {
	initial: { x: "-100%" },
	animate: { x: 0 },
	exit: { x: "-100%" },
	transition: { duration: 0.5 },
};

const framerText = (delay: number) => {
	return {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		transition: {
			delay: 0.2 + delay / 10,
		},
	};
};

const framerIcon = {
	initial: { scale: 0 },
	animate: { scale: 1 },
	transition: {
		type: "spring",
		stiffness: 260,
		damping: 20,
		delay: 0.3,
	},
};
