<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
export default {
  name: "mapView",
  components: {},
  data() {
    return {
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  },
  mounted() {
    this.map = this.$utils.map.createMap("map-container");
    // 加载 open street map 图层服务
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {});

    // 设置地图视图 中心位置
    this.map.setView([30.524986, 114.358417], 14);
    //添加标记
    this.$utils.map.createMarker(this.map);
    //添加一个圆
    this.$utils.map.createCircle(this.map);
    //添加多边形
    this.$utils.map.createPolygon(this.map);
  }
};
</script>
<style>
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>