<template>
  <div id="app">
    <MapTest></MapTest>
  </div>
</template>

<script>
import MapTest from "@/components/MapTest";

export default {
  name: 'App',
  components: {
    MapTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
