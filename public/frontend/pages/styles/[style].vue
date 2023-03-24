<template>
  <v-header />
  <maplibre-map :map-style="style" @map-load="onMapLoad" />
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
    async setup() {
      const { style } = await useRaster();

      const onMapLoad = (map: Map) => {
        console.log('Map Loaded!', map);
      };

      return {
        style,
        onMapLoad,
      };
    },
  });
</script>
