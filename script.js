const elkCountryInn = ["Elk Country Inn", 43.4786, -110.7697, "hotel"];
const yellowstoneParkHotel = ["Yellowstone Park Hotel", 44.6613, -111.1041, "hotel"];

const routes = {
  overview: [elkCountryInn, ["Schwabacher Landing parking", 43.7115, -110.6709, "scenic"], ["Snake River / Beaver Ponds view", 43.7110, -110.6730, "hike", true], ["South Jenny Lake Trailhead", 43.8590, -110.7200, "hike"], ["Hidden Falls / Inspiration Point", 43.8745, -110.7415, "hike", true], ["Signal Mountain Summit", 43.8444, -110.7111, "scenic"], ["Jackson Lake Dam", 43.8576, -110.7212, "scenic"], ["Oxbow Bend", 43.9050, -110.6570, "scenic"], ["Antelope Flats Road / US-89 access", 43.6746, -110.6221, "scenic"], ["Mormon Row Historic District", 43.6607, -110.6650, "scenic"], elkCountryInn, ["Colter Bay", 43.9044, -110.6411, "scenic"], ["Yellowstone South Entrance", 44.1022, -110.6714, "scenic"], ["Old Faithful parking / Visitor Education Center", 44.4605, -110.8281, "scenic"], ["Observation Point", 44.4647, -110.8244, "hike", true], ["Morning Glory Pool", 44.4751, -110.8435, "hike", true], ["Upper Falls Viewpoints parking", 44.7204, -110.4775, "hike"], ["Brink of Upper Falls", 44.7211, -110.4756, "hike", true], ["Uncle Tom's Point parking / Clear Lake Trailhead", 44.7153, -110.4910, "hike"], ["Ribbon Lake Loop", 44.7000, -110.4780, "hike", true], ["Artist Point (included in Ribbon Loop)", 44.7169, -110.4874, "scenic", true], ["Gibbon Falls", 44.7080, -110.7490, "scenic"], ["Norris Geyser Basin", 44.7299, -110.7055, "scenic"], ["Roaring Mountain", 44.7613, -110.7122, "scenic"], ["Sheepeater Cliff", 44.8914, -110.7298, "scenic"], ["Mammoth Terraces / Albright Visitor Center", 44.9760, -110.7050, "scenic"], ["Undine Falls", 44.9441, -110.6386, "scenic"], ["Wraith Falls Trailhead", 44.9423, -110.6234, "hike"], ["Petrified Tree parking", 44.9163, -110.4394, "scenic"], ["Lamar Valley legal pullouts", 44.9177, -110.1787, "scenic"], yellowstoneParkHotel, ["Bozeman Yellowstone International Airport", 45.7775, -111.1530, "airport"]],
  "day-1": [["Jackson Hole Airport (JAC)", 43.6073, -110.7377, "airport"], elkCountryInn],
  "day-2": [elkCountryInn, ["Schwabacher Landing parking", 43.7115, -110.6709, "scenic"], ["Snake River / Beaver Ponds view", 43.7110, -110.6730, "hike", true], ["South Jenny Lake Trailhead", 43.8590, -110.7200, "hike"], ["Hidden Falls / Inspiration Point", 43.8745, -110.7415, "hike", true], ["Signal Mountain Summit", 43.8444, -110.7111, "scenic"], ["Jackson Lake Dam", 43.8576, -110.7212, "scenic"], ["Oxbow Bend", 43.9050, -110.6570, "scenic"], ["Antelope Flats Road / US-89 access", 43.6746, -110.6221, "scenic"], ["Mormon Row Historic District", 43.6607, -110.6650, "scenic"], elkCountryInn],
  "day-3": [elkCountryInn, ["Colter Bay", 43.9044, -110.6411, "scenic"], ["Yellowstone South Entrance", 44.1022, -110.6714, "scenic"], ["Lewis Falls", 44.2075, -110.6555, "scenic"], ["West Thumb Geyser Basin", 44.4137, -110.5738, "scenic"], ["Old Faithful parking / Visitor Education Center", 44.4605, -110.8281, "scenic"], ["Observation Point", 44.4647, -110.8244, "hike", true], ["Morning Glory Pool", 44.4751, -110.8435, "hike", true], ["Midway Geyser Basin", 44.5252, -110.8378, "scenic"], yellowstoneParkHotel],
  "day-4": [yellowstoneParkHotel, ["Upper Falls Viewpoints parking", 44.7204, -110.4775, "hike"], ["Brink of Upper Falls", 44.7211, -110.4756, "hike", true], ["Uncle Tom's Point parking / Clear Lake Trailhead", 44.7153, -110.4910, "hike"], ["Ribbon Lake Loop", 44.7000, -110.4780, "hike", true], ["Artist Point (included in Ribbon Loop)", 44.7169, -110.4874, "scenic", true], ["Gibbon Falls", 44.7080, -110.7490, "scenic"], yellowstoneParkHotel],
  "day-5": [yellowstoneParkHotel, ["Norris Geyser Basin", 44.7299, -110.7055, "scenic"], ["Roaring Mountain", 44.7613, -110.7122, "scenic"], ["Sheepeater Cliff", 44.8914, -110.7298, "scenic"], ["Mammoth Terraces / Albright Visitor Center", 44.9760, -110.7050, "scenic"], ["Undine Falls", 44.9441, -110.6386, "scenic"], ["Wraith Falls Trailhead", 44.9423, -110.6234, "hike"], ["Petrified Tree parking", 44.9163, -110.4394, "scenic"], ["Lamar Valley legal pullouts", 44.9177, -110.1787, "scenic"], yellowstoneParkHotel],
  "day-6": [yellowstoneParkHotel, ["Gallatin River pullout (only if ahead of schedule)", 45.2785, -111.3067, "scenic"], ["Bozeman Yellowstone International Airport (BZN)", 45.7775, -111.1530, "airport"]],
};

const typeSymbols = { airport: "✈", scenic: "●", hike: "↗", hotel: "H" };
const trailSegments = {
  overview: [
    { points: [[43.7115, -110.6709], [43.7110, -110.6730], [43.7115, -110.6709]], label: "短走示意：从 Schwabacher Landing 停车区依正式未铺装小径往返" },
    { points: [[43.8590, -110.7200], [43.8745, -110.7415], [43.8590, -110.7200]], label: "徒步示意：按 South Jenny Lake Loop Trail 现场标识往返" },
    { points: [[44.4605, -110.8281], [44.4647, -110.8244], [44.4605, -110.8281]], label: "徒步示意：按 Observation Point / Geyser Hill 现场标识步行" },
    { points: [[44.4605, -110.8281], [44.4751, -110.8435], [44.4605, -110.8281]], label: "步行示意：按 Upper Geyser Basin 现场木栈道 / 铺装路往返" },
    { points: [[44.7204, -110.4775], [44.7211, -110.4756], [44.7204, -110.4775]], label: "步行示意：从 Upper Falls Viewpoints 停车区按 South Rim 现场标识往返" },
    { points: [[44.7153, -110.4910], [44.7000, -110.4780], [44.7169, -110.4874], [44.7153, -110.4910]], label: "徒步示意：Ribbon Lake Loop 从 Uncle Tom's Point / Clear Lake trailhead 起，经 Ribbon Lake、Artist Point 返回停车区；按现场标识行走" },
  ],
  "day-2": [
    { points: [[43.7115, -110.6709], [43.7110, -110.6730], [43.7115, -110.6709]], label: "短走示意：从 Schwabacher Landing 停车区依正式未铺装小径往返" },
    { points: [[43.8590, -110.7200], [43.8745, -110.7415], [43.8590, -110.7200]], label: "徒步示意：按 South Jenny Lake Loop Trail 现场标识往返" },
  ],
  "day-3": [
    { points: [[44.4605, -110.8281], [44.4647, -110.8244], [44.4605, -110.8281]], label: "徒步示意：按 Observation Point / Geyser Hill 现场标识步行" },
    { points: [[44.4605, -110.8281], [44.4751, -110.8435], [44.4605, -110.8281]], label: "步行示意：按 Upper Geyser Basin 现场木栈道 / 铺装路往返" },
  ],
  "day-4": [
    { points: [[44.7204, -110.4775], [44.7211, -110.4756], [44.7204, -110.4775]], label: "步行示意：从 Upper Falls Viewpoints 停车区按 South Rim 现场标识往返" },
    { points: [[44.7153, -110.4910], [44.7000, -110.4780], [44.7169, -110.4874], [44.7153, -110.4910]], label: "徒步示意：Ribbon Lake Loop 从 Uncle Tom's Point / Clear Lake trailhead 起，经 Ribbon Lake、Artist Point 返回停车区；按现场标识行走" },
  ],
};
function markerIcon(number, type) {
  return L.divIcon({ className: "", html: `<div class="map-marker ${type}"><span>${typeSymbols[type]}</span><b>${number}</b></div>`, iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -25] });
}
function addLegend(map) {
  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => {
    const element = L.DomUtil.create("div", "map-legend");
    element.innerHTML = "<span class='scenic'>● 自驾</span><span class='hike'>↗ 徒步</span><span class='walking'>- - 徒步示意</span><span class='hotel'>H 住宿</span><span class='airport'>✈ 机场</span>";
    L.DomEvent.disableClickPropagation(element);
    return element;
  };
  legend.addTo(map);
}
async function drawRoute(element) {
  const stops = routes[element.dataset.route];
  const touchScreen = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
  const map = L.map(element, { scrollWheelZoom: false, zoomControl: true, dragging: !touchScreen, touchZoom: !touchScreen });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
  addLegend(map);
  const markerBounds = [];
  stops.forEach(([name, lat, lng, type], index) => {
    L.marker([lat, lng], { icon: markerIcon(index + 1, type) }).addTo(map).bindPopup(`${index + 1}. ${name}`);
    markerBounds.push([lat, lng]);
  });
  map.fitBounds(markerBounds, { padding: [34, 34], maxZoom: 10 });
  if (touchScreen) {
    const activate = document.createElement("button");
    activate.className = "map-activate";
    activate.type = "button";
    activate.textContent = "点击启用拖拽 / 双指缩放";
    activate.addEventListener("click", () => { map.dragging.enable(); map.touchZoom.enable(); activate.remove(); });
    element.append(activate);
  }
  (trailSegments[element.dataset.route] || []).forEach(({ points, label }) => {
    L.polyline(points, { color: "#4d7a67", weight: 4, dashArray: "7 8", opacity: .9 }).addTo(map).bindTooltip(label, { sticky: true });
  });

  const roadStops = stops.filter(([, , , , trailOnly]) => !trailOnly);
  const coordinates = roadStops.map(([, lat, lng]) => `${lng},${lat}`).join(";");
  try {
    const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`);
    if (!response.ok) throw new Error(`Routing service returned ${response.status}`);
    const data = await response.json();
    if (data.code !== "Ok" || !data.routes?.[0]?.geometry) throw new Error("No route geometry returned");
    L.polyline(data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]), { color: "#cb6947", weight: 5, opacity: .86 }).addTo(map);
  } catch (error) {
    const notice = document.createElement("span");
    notice.className = "map-loading map-error";
    notice.textContent = "路线服务暂不可用；仍可拖拽查看站点，或打开 Google Maps 导航。";
    element.append(notice);
    console.warn("Unable to load OSRM route", error);
  } finally {
    element.querySelector(".map-loading:not(.map-error)")?.remove();
    setTimeout(() => map.invalidateSize(), 0);
  }
}
document.querySelectorAll(".real-map").forEach(drawRoute);
