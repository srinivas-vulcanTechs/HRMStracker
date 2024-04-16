import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideNav from "../Components/SideNav";
import CreateFence from "../Pages/CreateFence";
import Tracking from "../Pages/Tracking";
import Triangulate from "../Pages/Triangulate";
import TrackingHistory from "../Pages/TrackingHistory";

const Layout = () => {
	return (
		<SideNav>
			<Outlet />
		</SideNav>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <CreateFence />,
			},
			{
				path: "/tracking",
				element: <Tracking />,
			},
			{
				path: "/triangulate",
				element: <Triangulate />,
			},
			{
				path: "/tracking-history",
				element: <TrackingHistory />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={router} />;
}
