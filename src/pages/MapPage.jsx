import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../index.css"; 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Assets (images)
import banner from "../assets/map-banner.png";
import injuredDog from "../assets/injured-dog.png";
import kittenTraffic from "../assets/kitten-traffic.png";
import limpingDog from "../assets/dog-noida.png";

// Sample Reports
const sampleReports = [
  {
    id: 1,
    position: [22.5726, 88.3639],
    title: "Injured Dog",
    description: "Light brown dog limping near Park Street.",
    status: "Need Help",
    time: "5 mins ago",
    image: injuredDog,
  },
  {
    id: 2,
    position: [19.076, 72.8777],
    title: "Kitten Stuck in Traffic",
    description: "Ginger kitten stuck under a car in traffic.",
    status: "In Progress",
    time: "10 mins ago",
    image: kittenTraffic,
  },
  {
    id: 3,
    position: [28.5355, 77.3910],
    title: "Dog Limping",
    description: "Light brown limping near Sector 18 Noida.",
    status: "Rescued",
    time: "25 mins ago",
    image: limpingDog,
  },
];

const MapPage = () => {
  const [reports, setReports] = useState(sampleReports);
  const [selectedReport, setSelectedReport] = useState(null);
  const [filter, setFilter] = useState("All");
  const mapRef = useRef();

  // Auto-refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setReports([...sampleReports]);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredReports =
    filter === "All"
      ? reports
      : reports.filter((r) => r.status === filter);

  const handleFeedClick = (report) => {
    setSelectedReport(report);
    if (mapRef.current) {
      mapRef.current.setView(report.position, 14, {
        animate: true,
        duration: 1.5,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <div className="w-full relative h-[320px]">
        <img
          src={banner}
          alt="Stray Rescue Map Banner"
          className="w-full h-full object-contain object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold">Live Map & Rescue Feed</h1>
          <p className="text-sm md:text-lg mt-1">
            Track stray reports and rescue efforts across the country in real-time.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <section className="w-full bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            scrollWheelZoom={true}
            className="rounded-xl shadow-xl w-full h-[300px] md:h-[400px] z-0"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredReports.map((report) => (
              <Marker key={report.id} position={report.position}>
                <Popup>
                  <div className="text-sm">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <strong>{report.title}</strong>
                    <p>{report.description}</p>
                    <p>
                      Status:{" "}
                      <span className="font-semibold">{report.status}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{report.time}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            {selectedReport && (
              <Marker position={selectedReport.position}>
                <Popup>
                  <div className="text-sm">
                    <img
                      src={selectedReport.image}
                      alt={selectedReport.title}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <strong>{selectedReport.title}</strong>
                    <p>{selectedReport.description}</p>
                    <p>
                      Status:{" "}
                      <span className="font-semibold">
                        {selectedReport.status}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{selectedReport.time}</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </section>

      {/* Live Feed */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Live Feed</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="All">All</option>
              <option value="Need Help">Need Help</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Rescued">Rescued</option>
            </select>
          </div>
          <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
  {filteredReports.map((report) => (
    <li
      key={report.id}
      onClick={() => handleFeedClick(report)}
      className="bg-gray-100 rounded p-3 shadow-sm hover:shadow-md hover:bg-blue-50 transition cursor-pointer flex justify-between items-start"
    >
      <div>
        <div className="font-semibold">{report.title}</div>
        <div className="text-sm text-gray-600">{report.description}</div>
        <div className="text-xs text-gray-500">{report.time}</div>
      </div>
      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
        report.status === 'Rescued' || report.status === 'Approved'
          ? 'bg-green-100 text-green-700'
          : report.status === 'In Progress'
          ? 'bg-yellow-100 text-yellow-700'
          : 'bg-red-100 text-red-700'
      }`}>
        {report.status}
      </span>
    </li>
  ))}
</ul>

        </div>
      </section>
    </div>
  );
};

export default MapPage;
