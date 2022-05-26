import "leaflet/dist/leaflet.css"
import $L from "leaflet";

const createMap = (divId, options) => {
  return $L.map(divId, options);
};
const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};

export default { createMap,createTileLayer };