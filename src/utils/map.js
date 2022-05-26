import "leaflet/dist/leaflet.css"
import $L from "leaflet";

const createMap = (divId, options) => {
  let map=$L.map(divId, options)
  var popup = $L.popup();
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on('click', onMapClick);
  return map;
};
const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};
const createCircle=(map)=>{
  let circle=$L.circle([30.524986, 114.358417], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 500
  }).addTo(map)
  circle.bindPopup("这是一个圆形区域");
  return circle
}
const createPolygon=(map)=>{
  let polygon=$L.polygon([
    [30.526188, 114.374413],
    [30.524154, 114.369178],
    [30.520827, 114.368234],
    [30.518831, 114.376731],
    [30.522602, 114.376388]
  ]).addTo(map);
  polygon.bindPopup("这是一个多边形区域");
  return polygon
}
const createMarker=(map)=>{
  let marker =$L.marker([30.527351, 114.367986]).addTo(map);
  marker.bindPopup("这是一个标记");
  return marker
}

export default { createMap,createTileLayer,createCircle,createPolygon,createMarker};