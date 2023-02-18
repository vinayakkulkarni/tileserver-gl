<template>
  <v-header />
  <maplibre-map
    :map-style="`http://localhost:8080/styles/${$route.params.style}/style.json`"
    @map-load="onMapLoad"
  />
  <v-footer />
</template>

<script lang="ts">
  import type { Map } from 'maplibre-gl';
  import VHeader from '~/components/ui/VHeader.vue';
  import VFooter from '~/components/ui/VFooter.vue';
  import MaplibreMap from '~/components/map/MaplibreMap.vue';

  export default defineComponent({
    name: 'MapStyle',
    components: {
      VHeader,
      VFooter,
      MaplibreMap,
    },
    setup() {
      const onMapLoad = (map: Map) => {
        console.log(map);
      };

      return {
        onMapLoad,
      };
    },
  });
</script>
