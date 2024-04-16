import { MdCreateNewFolder, MdSpatialTracking } from "react-icons/md";
import { IoTriangle } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

export const sidebarItems = [
	{
		icon: <MdCreateNewFolder fontSize={25} />,
		text: "Create Fence",
		link: "/",
	},
	{
		icon: <MdSpatialTracking fontSize={25} />,
		text: "Tracking",
		link: "/tracking",
	},
	{
		icon: <IoTriangle fontSize={25} />,
		text: "Triangulate",
		link: "/triangulate",
	},
	{
		icon: <FaHistory fontSize={25} />,
		text: "Tracking History",
		link: "/tracking-history",
	},
];
