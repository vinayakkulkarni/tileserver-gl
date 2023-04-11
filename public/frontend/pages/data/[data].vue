<template>
  <v-header />
  <div ref="map" id="map" class="w-full h-full" />
  <v-footer />
</template>

<script lang="ts">
  import type { Map, StyleSpecification } from 'maplibre-gl';
  import { MaplibreInspect } from 'maplibre-gl-inspect';
  import maplibregl from 'maplibre-gl';
  import VHeader from '~/components/ui/VHeader.vue';
  import VFooter from '~/components/ui/VFooter.vue';

  export default defineComponent({
    name: 'MapData',
    components: {
      VHeader,
      VFooter,
    },
    setup() {
      const mapRef = ref(null);

      const route = useRoute();
      const style: StyleSpecification = {
        version: 8,
        sources: {
          openmaptiles: {
            type: 'vector',
            url: `http://localhost:8080/data/${route.params.data}.json`,
          },
        },
        layers: [],
      };

      onMounted(async () => {
        const map: Map = new maplibregl.Map({
          container: mapRef.value! || 'map',
          style: style,
          center: [0, 0],
          zoom: 1,
          hash: true,
        });
        const scale = new maplibregl.ScaleControl({
          maxWidth: 80,
        });
        const nav = new maplibregl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true,
        });
        const geolocate = new maplibregl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        });

        const inspect = new MaplibreInspect({
          showInspectMap: true,
          showInspectButton: false,
          useInspectStyle: true,
        } as MaplibreInspect['options']);

        map.addControl(scale, 'bottom-left');
        map.addControl(geolocate, 'bottom-right');
        map.addControl(nav, 'bottom-right');
        map.addControl(inspect);
      });

      return {
        mapRef,
      };
    },
  });
</script>
