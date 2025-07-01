import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import banner from "../assets/map-banner.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const sampleReports = [
  {
    id: 1,
    position: [22.5726, 88.3639],
    description: "🐶 Injured dog in Kolkata – 5 mins ago",
  },
  {
    id: 2,
    position: [19.0760, 72.8777],
    description: "🐱 Kitten stuck in traffic – Mumbai – 10 mins ago",
  },
  {
    id: 3,
    position: [28.5355, 77.3910],
    description: "🐕 Dog limping in Sector 18 – Noida – 25 mins ago",
  },
];

const MapPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Banner */}
     <div className="w-full aspect-[17/3] md:aspect-[17/4] lg:aspect-[17/3.5] relative">
  <img
    src={banner}
    alt="Stray Rescue Map Banner"
    className="w-full h-[400px] object-cover"
  />
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
    <h1 className="text-2xl md:text-4xl font-bold">Live Map & Rescue Feed</h1>
    <p className="text-sm md:text-lg mt-1">Track stray reports and rescue efforts across the country in real-time.</p>
  </div>
</div>

        {/* SVG Wave Divider */}
        <div className="-mb-1">
        <svg
          className="w-full" view
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,58.7C672,64,768,64,864,58.7C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#f9fafb"
          />
        </svg>
        </div>

      {/* Map Section */}
      <section className="w-full bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            scrollWheelZoom={true}
            className="h-[400px] w-full rounded-lg z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sampleReports.map((report) => (
              <Marker key={report.id} position={report.position}>
                <Popup>{report.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
          <ul className="space-y-3">
            {sampleReports.map((report) => (
              <li
                key={report.id}
                className="bg-gray-100 rounded p-3 shadow-sm hover:shadow-md transition"
              >
                {report.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MapPage;
