<template>
<div ref="mapElement" class="map loading">
  <div style="position: absolute; background-color: transparent; width: 100%; height: 98%; z-index: 1000; border: 2px solid black;"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
.loading {
  cursor: wait;
}
.showScrolling {
  display: block !important;
}
</style>
