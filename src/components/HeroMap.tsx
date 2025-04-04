import { useTheme } from "@/context/ThemeContext";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import Map, { MapRef, Marker } from "react-map-gl/maplibre";

const HeroMap = () => {
  const [time, setTime] = useState(
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Kuala_Lumpur",
    }).format(new Date())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kuala_Lumpur",
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [hours, minutes] = time.split(":");

  const mapRef = useRef<MapRef>(null);

  const handleMapLoad = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [101.55508781886314, 3.218514155214521],
        zoom: 16,
        essential: true,
        speed: 2,
        curve: 1,
      });
    }
  };

  const [mapStyle, setMapStyle] = useState("basic-v2");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setMapStyle("basic-v2");
    } else if (theme === "dark") {
      setMapStyle("basic-v2-dark");
    } else {
      setMapStyle("basic-v2");
    }
  }, [theme]);

  return (
    <Map
      key={mapStyle}
      ref={mapRef}
      initialViewState={{
        longitude: 101.55508781886314,
        latitude: 3.218514155214521,
        zoom: 8,
      }}
      onLoad={handleMapLoad}
      style={{ width: "100%", height: 300, borderRadius: "12px" }}
      mapStyle={`https://api.maptiler.com/maps/${mapStyle}/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}
    >
      <Marker longitude={101.55508781886314} latitude={3.218514155214521}>
        <button className="relative">
          <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-0" />
          <div className="w-6 h-6 bg-primary opacity-50 rounded-full animate-ping absolute top-[-6px] left-[-6px]" />
        </button>
      </Marker>
      <div className="absolute top-2 right-2 bg-background-offset text-foreground text-lg p-2 rounded-xl flex gap-1 font-mono border border-muted">
        <p>{hours}</p>
        <span className="animate-pulse inline-block">:</span>
        <p>{minutes}</p>
        <p className="ml-2">UTC+08</p>
      </div>
    </Map>
  );
};

export default HeroMap;
