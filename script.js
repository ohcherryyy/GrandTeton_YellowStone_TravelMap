const elkCountryInn = ["Elk Country Inn", 43.4786, -110.7697, "hotel"];
const yellowstoneParkHotel = ["Yellowstone Park Hotel", 44.6613, -111.1041, "hotel"];

const routes = {
  overview: [elkCountryInn, ["Schwabacher Landing parking", 43.7115, -110.6709, "scenic"], ["Snake River / Beaver Ponds view", 43.7110, -110.6730, "hike", true], ["South Jenny Lake parking area", 43.8590, -110.7200, "hike"], ["Hidden Falls / Inspiration Point", 43.8745, -110.7415, "hike", true], ["Signal Mountain Summit", 43.8444, -110.7111, "scenic"], ["Jackson Lake Dam", 43.8576, -110.7212, "scenic"], ["Oxbow Bend", 43.9050, -110.6570, "scenic"], ["Antelope Flats Road / US-89 access", 43.6746, -110.6221, "scenic"], ["Mormon Row Historic District", 43.6607, -110.6650, "scenic"], elkCountryInn, ["Colter Bay", 43.9044, -110.6411, "scenic"], ["Yellowstone South Entrance", 44.1022, -110.6714, "scenic"], ["Old Faithful parking / Visitor Education Center", 44.4605, -110.8281, "scenic"], ["Observation Point", 44.4647, -110.8244, "hike", true], ["Morning Glory Pool", 44.4751, -110.8435, "hike", true], ["Upper Falls Viewpoints parking", 44.7204, -110.4775, "hike"], ["Brink of the Upper Falls Trail", 44.7211, -110.4756, "hike", true], ["Uncle Tom's Point parking / Clear Lake trailhead", 44.7153, -110.4910, "hike"], ["Ribbon Lake Trail / optional loop", 44.7000, -110.4780, "hike", true], ["Artist Point (on optional loop)", 44.7169, -110.4874, "scenic", true], ["Gibbon Falls", 44.7080, -110.7490, "scenic"], ["Norris Geyser Basin / Porcelain Basin", 44.7299, -110.7055, "scenic"], ["Roaring Mountain", 44.7613, -110.7122, "scenic"], ["Sheepeater Cliff", 44.8914, -110.7298, "scenic"], ["Mammoth Hot Springs Terraces / Albright Visitor Center", 44.9760, -110.7050, "scenic"], ["Undine Falls", 44.9441, -110.6386, "scenic"], ["Wraith Falls Trail (trailhead)", 44.9423, -110.6234, "hike"], ["Petrified Tree parking", 44.9163, -110.4394, "scenic"], ["Lamar Valley legal pullouts", 44.9177, -110.1787, "scenic"], yellowstoneParkHotel, ["Bozeman Yellowstone International Airport", 45.7775, -111.1530, "airport"]],
  "day-1": [["Jackson Hole Airport (JAC)", 43.6073, -110.7377, "airport"], elkCountryInn],
  "day-2": [elkCountryInn, ["Schwabacher Landing parking", 43.7115, -110.6709, "scenic"], ["Snake River / Beaver Ponds view", 43.7110, -110.6730, "hike", true], ["South Jenny Lake parking area", 43.8590, -110.7200, "hike"], ["Hidden Falls / Inspiration Point", 43.8745, -110.7415, "hike", true], ["Signal Mountain Summit", 43.8444, -110.7111, "scenic"], ["Jackson Lake Dam", 43.8576, -110.7212, "scenic"], ["Oxbow Bend", 43.9050, -110.6570, "scenic"], ["Antelope Flats Road / US-89 access", 43.6746, -110.6221, "scenic"], ["Mormon Row Historic District", 43.6607, -110.6650, "scenic"], elkCountryInn],
  "day-3": [elkCountryInn, ["Colter Bay", 43.9044, -110.6411, "scenic"], ["Yellowstone South Entrance", 44.1022, -110.6714, "scenic"], ["Lewis Falls", 44.2075, -110.6555, "scenic"], ["West Thumb Geyser Basin Trail", 44.4137, -110.5738, "scenic"], ["Old Faithful parking / Visitor Education Center", 44.4605, -110.8281, "scenic"], ["Observation Point", 44.4647, -110.8244, "hike", true], ["Morning Glory Pool", 44.4751, -110.8435, "hike", true], ["Midway Geyser Basin Trail", 44.5252, -110.8378, "scenic"], yellowstoneParkHotel],
  "day-4": [yellowstoneParkHotel, ["Upper Falls Viewpoints parking", 44.7204, -110.4775, "hike"], ["Brink of the Upper Falls Trail", 44.7211, -110.4756, "hike", true], ["Uncle Tom's Point parking / Clear Lake trailhead", 44.7153, -110.4910, "hike"], ["Ribbon Lake Trail / optional loop", 44.7000, -110.4780, "hike", true], ["Artist Point (on optional loop)", 44.7169, -110.4874, "scenic", true], ["Gibbon Falls", 44.7080, -110.7490, "scenic"], yellowstoneParkHotel],
  "day-5": [yellowstoneParkHotel, ["Norris Geyser Basin / Porcelain Basin", 44.7299, -110.7055, "scenic"], ["Roaring Mountain", 44.7613, -110.7122, "scenic"], ["Sheepeater Cliff", 44.8914, -110.7298, "scenic"], ["Mammoth Hot Springs Terraces / Albright Visitor Center", 44.9760, -110.7050, "scenic"], ["Undine Falls", 44.9441, -110.6386, "scenic"], ["Wraith Falls Trail (trailhead)", 44.9423, -110.6234, "hike"], ["Petrified Tree parking", 44.9163, -110.4394, "scenic"], ["Lamar Valley legal pullouts", 44.9177, -110.1787, "scenic"], yellowstoneParkHotel],
  "day-6": [yellowstoneParkHotel, ["Gallatin River pullout (only if ahead of schedule)", 45.2785, -111.3067, "scenic"], ["Bozeman Yellowstone International Airport (BZN)", 45.7775, -111.1530, "airport"]],
};

const typeSymbols = { airport: "✈", scenic: "●", hike: "↗", hotel: "H" };
const trailSegments = {
  overview: [
    { points: [[43.7115, -110.6709], [43.7110, -110.6730], [43.7115, -110.6709]], label: "短走示意：从 Schwabacher Landing 停车区依正式未铺装小径往返" },
    { points: [[43.8590, -110.7200], [43.8745, -110.7415], [43.8590, -110.7200]], label: "徒步示意：NPS Inspiration Point via South Jenny Lake Loop Trail，经 Hidden Falls；不乘船原路返回" },
    { points: [[44.4605, -110.8281], [44.4647, -110.8244], [44.4605, -110.8281]], label: "徒步示意：Observation Point（经 Geyser Hill / Solitary Geyser 的环线变体）" },
    { points: [[44.4605, -110.8281], [44.4751, -110.8435], [44.4605, -110.8281]], label: "步行示意：按 Upper Geyser Basin 现场木栈道 / 铺装路往返" },
    { points: [[44.7204, -110.4775], [44.7211, -110.4756], [44.7204, -110.4775]], label: "步行示意：从 Upper Falls Viewpoints 停车区按 South Rim 现场标识往返" },
    { points: [[44.7153, -110.4910], [44.7000, -110.4780], [44.7169, -110.4874], [44.7153, -110.4910]], label: "徒步示意：Ribbon Lake Trail 经 Lily Pad Lake / Artist Point 的环线变体；按现场标识行走" },
  ],
  "day-2": [
    { points: [[43.7115, -110.6709], [43.7110, -110.6730], [43.7115, -110.6709]], label: "短走示意：从 Schwabacher Landing 停车区依正式未铺装小径往返" },
    { points: [[43.8590, -110.7200], [43.8745, -110.7415], [43.8590, -110.7200]], label: "徒步示意：NPS Inspiration Point via South Jenny Lake Loop Trail，经 Hidden Falls；不乘船原路返回" },
  ],
  "day-3": [
    { points: [[44.4605, -110.8281], [44.4647, -110.8244], [44.4605, -110.8281]], label: "徒步示意：Observation Point（经 Geyser Hill / Solitary Geyser 的环线变体）" },
    { points: [[44.4605, -110.8281], [44.4751, -110.8435], [44.4605, -110.8281]], label: "步行示意：按 Upper Geyser Basin 现场木栈道 / 铺装路往返" },
  ],
  "day-4": [
    { points: [[44.7204, -110.4775], [44.7211, -110.4756], [44.7204, -110.4775]], label: "步行示意：从 Upper Falls Viewpoints 停车区按 South Rim 现场标识往返" },
    { points: [[44.7153, -110.4910], [44.7000, -110.4780], [44.7169, -110.4874], [44.7153, -110.4910]], label: "徒步示意：Ribbon Lake Trail 经 Lily Pad Lake / Artist Point 的环线变体；按现场标识行走" },
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
const mapInstances = new WeakMap();

function drawRoute(element) {
  const existingMap = mapInstances.get(element);
  if (existingMap) return existingMap;

  const stops = routes[element.dataset.route];
  const touchScreen = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
  const map = L.map(element, { scrollWheelZoom: false, zoomControl: true, dragging: !touchScreen, touchZoom: !touchScreen });
  mapInstances.set(element, map);
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
  void (async () => {
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
  })();

  return map;
}

function resizeRoute(element) {
  const map = drawRoute(element);
  requestAnimationFrame(() => {
    map.invalidateSize();
    setTimeout(() => map.invalidateSize(), 100);
  });
}

const overviewMap = document.querySelector('.real-map[data-route="overview"]');
if (overviewMap) resizeRoute(overviewMap);

const weatherDays = {
  "day-1": {
    date: "2026-09-28",
    dateLabel: "9月28日",
    locations: [{ id: "jackson", label: "Jackson / Elk Country Inn", lat: 43.4799, lon: -110.7624 }],
  },
  "day-2": {
    date: "2026-09-29",
    dateLabel: "9月29日",
    locations: [{ id: "grand-teton", label: "大提顿 / South Jenny Lake", lat: 43.8590, lon: -110.7200 }],
  },
  "day-3": {
    date: "2026-09-30",
    dateLabel: "9月30日",
    locations: [{ id: "old-faithful", label: "Old Faithful / 黄石南部", lat: 44.4605, lon: -110.8281 }],
  },
  "day-4": {
    date: "2026-10-01",
    dateLabel: "10月1日",
    locations: [{ id: "canyon", label: "Canyon / South Rim", lat: 44.7204, lon: -110.4775 }],
  },
  "day-5": {
    date: "2026-10-02",
    dateLabel: "10月2日",
    locations: [
      { id: "mammoth", label: "Mammoth / 北部", lat: 44.9760, lon: -110.7050 },
      { id: "lamar", label: "Lamar Valley", lat: 44.9177, lon: -110.1787 },
    ],
  },
  "day-6": {
    date: "2026-10-03",
    dateLabel: "10月3日",
    locations: [
      { id: "west-yellowstone", label: "West Yellowstone / 酒店", lat: 44.6613, lon: -111.1041 },
      { id: "bzn", label: "BZN / Belgrade", lat: 45.7775, lon: -111.1530 },
    ],
  },
};
const weatherLocationCache = new Map();
const weatherDayCache = new Map();
let weatherRequestId = 0;

function weatherElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function temperatureParts(value, unit) {
  if (!Number.isFinite(value)) return null;
  if (unit === "F") return { celsius: `${Math.round((value - 32) * 5 / 9)}°C`, fahrenheit: `${value}°F` };
  if (unit === "C") return { celsius: `${value}°C`, fahrenheit: `${Math.round((value * 9 / 5) + 32)}°F` };
  return { celsius: `${value}°${unit}`, fahrenheit: "" };
}

function appendTemperatureMetric(container, label, period) {
  const metric = weatherElement("div", label === "最高" ? "weather-high" : "weather-low");
  const temperature = period ? temperatureParts(period.temperature, period.temperatureUnit) : null;
  metric.append(weatherElement("small", "", label === "最高" ? "日间最高" : "当晚最低"));
  metric.append(weatherElement("strong", "", temperature ? `${label} ${temperature.celsius}` : `${label} 官方未提供`));
  if (temperature?.fahrenheit) metric.append(weatherElement("span", "", temperature.fahrenheit));
  container.append(metric);
}

function windSummary(period) {
  const raw = [period?.windDirection, period?.windSpeed].filter(Boolean).join(" ");
  const numbers = (period?.windSpeed?.match(/\d+(?:\.\d+)?/g) ?? []).map(Number);
  if (!period?.windSpeed) return { label: "风力 官方未提供", raw: "" };
  if (!numbers.length) return { label: /\b(?:calm|light|variable)\b/i.test(period.windSpeed) ? "风小" : "风力 官方未提供", raw };

  const unitFactor = /\b(?:kt|kts|knots?)\b/i.test(period.windSpeed) ? 1.15078 : 1;
  const peakMph = Math.max(...numbers) * unitFactor;
  const level = peakMph <= 10 ? "风小" : peakMph <= 20 ? "有风" : "风较大";
  return { label: level, raw };
}

function daytimeWeatherLabel(period) {
  const original = period?.shortForecast?.trim();
  if (!original) return { label: "官方未提供", original: "" };

  const forecast = original.toLowerCase();
  const labels = [];
  const add = (label) => {
    if (!labels.includes(label)) labels.push(label);
  };

  if (/\bthunderstorms?\b/.test(forecast)) add("雷暴");
  if (/\bfreezing rain\b/.test(forecast)) add("冻雨");
  if (/\bsleet\b/.test(forecast)) add("雨夹雪");
  if (/\bhail\b/.test(forecast)) add("冰雹");

  const rainAndSnow = /\brain\s*(?:and|\/)\s*snow\b|\bsnow\s*(?:and|\/)\s*rain\b/.test(forecast);
  if (rainAndSnow) {
    add("雨");
    add("雪");
  } else if (/\bsnow showers?\b/.test(forecast)) {
    add("阵雪");
  } else if (/\bsnow\b/.test(forecast)) {
    add("雪");
  }

  if (/\bshowers?\b/.test(forecast) && !/\bsnow showers?\b/.test(forecast)) add("阵雨");
  else if (/\bdrizzle\b/.test(forecast)) add("细雨");
  else if (/\brain\b/.test(forecast) && !/\bfreezing rain\b/.test(forecast)) add("雨");

  if (/\bpatchy fog\b/.test(forecast)) add("局地雾");
  else if (/\bfog\b/.test(forecast)) add("雾");
  if (/\bsmoke\b/.test(forecast)) add("烟");
  if (/\bhaze\b/.test(forecast)) add("霾");
  if (/\b(?:blowing dust|dust)\b/.test(forecast)) add("扬尘");

  if (/\bmostly sunny\b|\bpartly sunny\b/.test(forecast)) add("晴间多云");
  else if (/\bmostly cloudy\b|\bovercast\b/.test(forecast)) add("多云");
  else if (/\bpartly cloudy\b/.test(forecast)) add("局部多云");
  else if (/\bsunny\b/.test(forecast)) add("晴");
  else if (/\bclear\b/.test(forecast)) add("晴朗");
  else if (/\bcloudy\b/.test(forecast)) add("多云");

  return { label: labels.join("、") || original, original };
}

async function fetchNwsJson(url) {
  const response = await fetch(url, { headers: { Accept: "application/geo+json" } });
  if (!response.ok) throw new Error(`NWS ${response.status}`);
  return response.json();
}

async function fetchLocationForecast(location, date, force) {
  const cacheKey = `${location.id}:${date}`;
  if (!force && weatherLocationCache.has(cacheKey)) return weatherLocationCache.get(cacheKey);

  const task = (async () => {
    const point = await fetchNwsJson(`https://api.weather.gov/points/${location.lat},${location.lon}`);
    const forecastUrl = point.properties?.forecast;
    if (!forecastUrl) throw new Error("NWS 未返回预报端点");
    const forecast = await fetchNwsJson(forecastUrl);
    const periods = forecast.properties?.periods ?? [];
    const datePeriods = periods.filter((period) => period.startTime?.slice(0, 10) === date);
    return {
      ...location,
      forecastUrl,
      updated: forecast.properties?.updateTime ?? forecast.properties?.generatedAt,
      timeZone: point.properties?.timeZone ?? "America/Denver",
      daytime: datePeriods.find((period) => period.isDaytime) ?? null,
      nighttime: datePeriods.find((period) => !period.isDaytime) ?? null,
      period: datePeriods.find((period) => period.isDaytime) ?? datePeriods.find((period) => !period.isDaytime) ?? null,
    };
  })();

  weatherLocationCache.set(cacheKey, task);
  try {
    return await task;
  } catch (error) {
    weatherLocationCache.delete(cacheKey);
    throw error;
  }
}

async function fetchActiveAlerts(location) {
  const alerts = await fetchNwsJson(`https://api.weather.gov/alerts/active?point=${location.lat},${location.lon}`);
  return alerts.features ?? [];
}

function renderForecast(location, dateLabel) {
  const block = weatherElement("section", "weather-location");
  block.append(weatherElement("h5", "", `NWS · ${location.label}`));

  if (!location.period) {
    block.append(weatherElement("p", "weather-status", `官方预报尚未覆盖 ${dateLabel}。NWS 通常仅提供约 7 天近期预报，请临近出行刷新。`));
    const source = weatherElement("a", "weather-source", "NWS 来源 ↗");
    source.href = location.forecastUrl;
    source.target = "_blank";
    source.rel = "noopener";
    block.append(source);
    return block;
  }

  const temperatures = weatherElement("div", "weather-high-low");
  appendTemperatureMetric(temperatures, "最高", location.daytime);
  appendTemperatureMetric(temperatures, "最低", location.nighttime);

  const daytimeRain = location.daytime?.probabilityOfPrecipitation?.value;
  const wind = windSummary(location.daytime ?? location.period);
  const weather = daytimeWeatherLabel(location.daytime);
  const weatherType = weatherElement("span", "weather-type", `天气：${weather.label}`);
  if (weather.original) weatherType.title = `NWS：${weather.original}`;
  const conditions = weatherElement("div", "weather-conditions");
  conditions.append(
    weatherType,
    weatherElement("span", "", daytimeRain == null ? "日间降雨：官方未提供" : `日间降雨 ${daytimeRain}%`),
    weatherElement("span", "", wind.raw ? `${wind.label} · ${wind.raw}` : wind.label),
  );

  block.append(temperatures, conditions);
  const source = weatherElement("a", "weather-source", "NWS 来源 ↗");
  source.href = location.forecastUrl;
  source.target = "_blank";
  source.rel = "noopener";
  block.append(source);
  return block;
}

function renderAlerts(alerts, error) {
  const block = weatherElement("section", "weather-alerts");
  if (error) {
    block.append(weatherElement("p", "", `NWS 预警查询失败：${error.message}。请稍后刷新。`));
    return block;
  }
  if (!alerts.length) {
    block.append(weatherElement("p", "", "暂无 NWS 预警"));
    return block;
  }
  alerts.slice(0, 2).forEach((alert) => {
    const details = alert.properties ?? {};
    const link = weatherElement("a", "", `NWS 预警 · ${details.severity || "未分级"}：${details.headline || details.event || "天气警示"} ↗`);
    link.href = details["@id"] ?? alert.id;
    link.target = "_blank";
    link.rel = "noopener";
    block.append(link);
  });
  return block;
}

async function getWeatherDay(day, force) {
  const config = weatherDays[day];
  if (!force && weatherDayCache.has(day)) return weatherDayCache.get(day);
  const task = (async () => {
    const forecasts = await Promise.all(config.locations.map((location) => fetchLocationForecast(location, config.date, force)));
    const alertResult = await fetchActiveAlerts(config.locations[0]).then(
      (alerts) => ({ alerts, error: null }),
      (error) => ({ alerts: [], error }),
    );
    return { forecasts, alertResult };
  })();
  weatherDayCache.set(day, task);
  try {
    return await task;
  } catch (error) {
    weatherDayCache.delete(day);
    throw error;
  }
}

async function loadWeatherDay(day, { force = false } = {}) {
  const card = document.querySelector(`[data-weather-day="${day}"]`);
  const config = weatherDays[day];
  if (!card || !config) return;
  const requestId = String(++weatherRequestId);
  card.dataset.weatherRequest = requestId;
  card.setAttribute("aria-busy", "true");
  const refresh = card.querySelector(".weather-refresh");
  const content = card.querySelector(".weather-content");
  const title = card.querySelector(".weather-title");
  refresh.disabled = true;
  title.textContent = force ? "正在刷新天气" : "正在获取天气";
  content.replaceChildren(weatherElement("p", "weather-status", "正在请求 NWS 官方数据…"));

  if (force) {
    weatherDayCache.delete(day);
    config.locations.forEach((location) => weatherLocationCache.delete(`${location.id}:${config.date}`));
  }

  try {
    const { forecasts, alertResult } = await getWeatherDay(day, force);
    if (card.dataset.weatherRequest !== requestId) return;
    title.textContent = "天气摘要";
    const grid = weatherElement("div", "weather-grid");
    forecasts.forEach((forecast) => grid.append(renderForecast(forecast, config.dateLabel)));
    content.replaceChildren(grid, renderAlerts(alertResult.alerts, alertResult.error));
  } catch (error) {
    if (card.dataset.weatherRequest !== requestId) return;
    title.textContent = "天气未能加载";
    content.replaceChildren(weatherElement("p", "weather-status error", `请求失败：${error.message}。请检查网络后刷新。`));
  } finally {
    if (card.dataset.weatherRequest === requestId) {
      card.setAttribute("aria-busy", "false");
      refresh.disabled = false;
    }
  }
}

function queueBackgroundWeather(activeDay) {
  const remainingDays = Object.keys(weatherDays).filter((day) => day !== activeDay);
  const run = async () => {
    for (const day of remainingDays) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      await loadWeatherDay(day).catch(() => {});
    }
  };
  if ("requestIdleCallback" in window) window.requestIdleCallback(() => { void run(); });
  else setTimeout(() => { void run(); }, 500);
}

document.querySelectorAll(".weather-refresh").forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.closest("[data-weather-day]")?.dataset.weatherDay;
    if (day) void loadWeatherDay(day, { force: true });
  });
});

const dayTabs = [...document.querySelectorAll(".day-tab")];
const dayPanels = [...document.querySelectorAll('.day[role="tabpanel"]')];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function dayFromHash() {
  const day = location.hash.slice(1);
  return dayTabs.some((tab) => tab.dataset.day === day) ? day : "day-2";
}

function activateDay(day, { updateHistory = false, scroll = false } = {}) {
  const activeTab = dayTabs.find((tab) => tab.dataset.day === day);
  const activePanel = document.getElementById(`${day}-panel`);
  if (!activeTab || !activePanel) return;

  dayTabs.forEach((tab) => {
    const selected = tab === activeTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  dayPanels.forEach((panel) => {
    panel.hidden = panel !== activePanel;
  });

  resizeRoute(activePanel.querySelector(".real-map"));
  void loadWeatherDay(day);

  if (updateHistory && location.hash !== `#${day}`) {
    history.pushState({ day }, "", `${location.pathname}${location.search}#${day}`);
  }
  if (scroll) {
    requestAnimationFrame(() => activePanel.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" }));
  }
}

dayTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateDay(tab.dataset.day, { updateHistory: true, scroll: true }));
  tab.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? dayTabs.length - 1 : (index + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) + dayTabs.length) % dayTabs.length;
    dayTabs[nextIndex].focus();
    activateDay(dayTabs[nextIndex].dataset.day, { updateHistory: true, scroll: true });
  });
});

if (!location.hash) history.replaceState({ day: "day-2" }, "", `${location.pathname}${location.search}#day-2`);
const initialDay = dayFromHash();
activateDay(initialDay);
queueBackgroundWeather(initialDay);
window.addEventListener("hashchange", () => activateDay(dayFromHash()));
window.addEventListener("popstate", () => activateDay(dayFromHash()));
