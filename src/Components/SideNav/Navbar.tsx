import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { BsFullscreen } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import "./styles.css";
import { toggleSidebar } from "../../Redux/Actions/toggleSidebar";
import { RootState } from "../../Redux/Reducers";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
	const dispatch: any = useDispatch();

	const mediumDevices = useMediaQuery({ query: "(min-width: 1023px)" });
	const smallDevices = useMediaQuery({ query: "(min-width: 760px)" });
	const mobileDevices = useMediaQuery({ query: "(min-width: 320px)" });

	const { open } = useSelector((state: RootState) => state.toggleSidebar);

	const clickThreeBars = () => {
		dispatch(toggleSidebar());
	};

	return (
		<React.Fragment>
			<div
				style={{
					left: open
						? "250px"
						: mediumDevices
						? "70px"
						: smallDevices
						? "65px"
						: mobileDevices
						? "50px"
						: "70px",
				}}
				className="navbar-container">
				{/* sidebar toggler */}
				<div className="left-container">
					<VscThreeBars
						fontSize={20}
						onClick={clickThreeBars}
						style={{
							cursor: "pointer",
							color: "grey",
							display: !mediumDevices ? "none" : "",
						}}
					/>
					<input type="text" placeholder="Search" className="search-bar" />
					<FaSearch fontSize={12} style={{ marginLeft: "-50px" }} />
				</div>

				<div className="right-container">
					<BsFullscreen
						fontSize={16}
						style={{ cursor: "pointer", color: "#080808" }}
					/>
					<div className="admin-avatar"></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
