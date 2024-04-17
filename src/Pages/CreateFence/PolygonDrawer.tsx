import React, { useEffect, useRef } from "react";

type PolygonDrawerProps = {
	map: any; // Google Maps map object
};

const PolygonDrawer: React.FC<PolygonDrawerProps> = ({ map }) => {
	const drawingManagerRef = useRef<any>(null);

	useEffect(() => {
		if (!map || !window.google.maps) return;

		const drawingManager = new window.google.maps.drawing.DrawingManager({
			drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
			drawingControl: true,
			drawingControlOptions: {
				position: window.google.maps.ControlPosition.TOP_CENTER,
				drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
			},
		});

		drawingManager.setMap(map);

		drawingManagerRef.current = drawingManager;

		window.google.maps.event.addListener(
			drawingManager,
			"overlaycomplete",
			(event: any) => {
				if (event.type === "polygon") {
					const polygon = event.overlay;
					const coordinates = polygon.getPath().getArray();
					console.log("Polygon coordinates:", coordinates);
				}
			}
		);

		return () => {
			if (drawingManagerRef.current) {
				drawingManagerRef.current.setMap(null);
			}
		};
	}, [map]);

	return null;
};

export default PolygonDrawer;
