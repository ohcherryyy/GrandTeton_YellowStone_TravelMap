const routes = {
  overview: [
    ["Jackson Hole Airport", 43.6073, -110.7377],
    ["Jackson", 43.4799, -110.7624],
    ["Mormon Row", 43.6553, -110.6664],
    ["String Lake Trailhead", 43.8688, -110.7366],
    ["Yellowstone South Entrance", 44.1022, -110.6714],
    ["West Thumb Geyser Basin", 44.4137, -110.5738],
    ["Old Faithful", 44.4605, -110.8281],
    ["West Yellowstone", 44.6621, -111.1041],
    ["Bozeman Yellowstone International Airport", 45.7775, -111.1530],
  ],
  "day-1": [["Jackson Hole Airport", 43.6073, -110.7377], ["Jackson", 43.4799, -110.7624]],
  "day-2": [["Jackson", 43.4799, -110.7624], ["Mormon Row", 43.6553, -110.6664], ["String Lake Trailhead", 43.8688, -110.7366], ["Jenny Lake", 43.8701, -110.7126], ["Jackson", 43.4799, -110.7624]],
  "day-3": [["Jackson", 43.4799, -110.7624], ["Yellowstone South Entrance", 44.1022, -110.6714], ["West Thumb Geyser Basin", 44.4137, -110.5738], ["Old Faithful", 44.4605, -110.8281], ["Midway Geyser Basin", 44.5252, -110.8378], ["West Yellowstone", 44.6621, -111.1041]],
  "day-4": [["West Yellowstone", 44.6621, -111.1041], ["Norris Geyser Basin", 44.7273, -110.7044], ["Canyon Village", 44.7336, -110.4898], ["Artist Point", 44.7169, -110.4874], ["West Yellowstone", 44.6621, -111.1041]],
  "day-5": [["West Yellowstone", 44.6621, -111.1041], ["Fountain Paint Pot", 44.5655, -110.7987], ["Fairy Falls Trailhead", 44.5362, -110.8293], ["Old Faithful", 44.4605, -110.8281], ["West Yellowstone", 44.6621, -111.1041]],
  "day-6": [["West Yellowstone", 44.6621, -111.1041], ["Bozeman Yellowstone International Airport", 45.7775, -111.1530]],
};

const markerIcon = (number) => L.divIcon({
  className: "",
  html: `<div class="map-marker"><span>${number}</span></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

async function drawRoute(element) {
  const stops = routes[element.dataset.route];
  const touchScreen = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
  const map = L.map(element, {
    scrollWheelZoom: false,
    zoomControl: true,
    dragging: !touchScreen,
    touchZoom: !touchScreen,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const markerBounds = [];
  stops.forEach(([name, lat, lng], index) => {
    L.marker([lat, lng], { icon: markerIcon(index + 1) }).addTo(map).bindPopup(`${index + 1}. ${name}`);
    markerBounds.push([lat, lng]);
  });
  map.fitBounds(markerBounds, { padding: [28, 28], maxZoom: 10 });

  if (touchScreen) {
    const activate = document.createElement("button");
    activate.className = "map-activate";
    activate.type = "button";
    activate.textContent = "点击启用拖拽 / 双指缩放";
    activate.addEventListener("click", () => {
      map.dragging.enable();
      map.touchZoom.enable();
      activate.remove();
    });
    element.append(activate);
  }

  const coordinates = stops.map(([, lat, lng]) => `${lng},${lat}`).join(";");
  try {
    const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`);
    if (!response.ok) throw new Error(`Routing service returned ${response.status}`);
    const data = await response.json();
    if (data.code !== "Ok" || !data.routes?.[0]?.geometry) throw new Error("No route geometry returned");
    const route = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    L.polyline(route, { color: "#cb6947", weight: 5, opacity: .86 }).addTo(map);
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
