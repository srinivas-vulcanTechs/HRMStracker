import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

type SideNavProps = {
	children: React.ReactNode;
};

export default function SideNav(props: SideNavProps) {
	const { children } = props;

	const mediumDevices = useMediaQuery({ query: "(min-width: 1023px)" });
	const smallDevices = useMediaQuery({ query: "(min-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(min-width: 320px)" });

	const { open } = useSelector((state: RootState) => state.toggleSidebar);
	return (
		<React.Fragment>
			<div className="sideNav-container">
				<Sidebar />
				<div className="navbar-outlet-container">
					<Navbar />
					<div
						style={{
							paddingLeft: open
								? "250px"
								: mediumDevices
								? "70px"
								: smallDevices
								? "65px"
								: mobileDevices
								? "50px"
								: "70px",
						}}
						className="outlet-container">
						{children}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
