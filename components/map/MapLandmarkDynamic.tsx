"use client";

import dynamic from "next/dynamic";

const MapLandmark = dynamic(() => import("./MapLandmark"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default MapLandmark;
