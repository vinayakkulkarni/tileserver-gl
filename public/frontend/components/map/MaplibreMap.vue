<template>
  <div ref="maplibre" id="map" class="w-full h-full relative">
    <div class="z-40 absolute top-0 right-0">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
  import maplibregl from 'maplibre-gl';
  import type { Map } from 'maplibre-gl';
  import type { Ref } from 'vue';
  import type { Style } from '~/types/style';

  export default defineComponent({
    name: 'MaplibreMap',
    setup() {
      const maplibre = ref(null);
      let map: Ref<Map | null> = shallowRef(null);

      onMounted(async () => {
        const data: Style[] = await $fetch('http://localhost:8080/styles.json');
        map.value = new maplibregl.Map({
          container: maplibre.value! || 'map',
          style: data[data.length - 1].url,
          center: [0, 0],
          zoom: 1,
        });
        map.value.on('load', () => {
          addControls();
        });
      });

      /**
       * Add Scale, Geolocate & Navigate controls to the map
       * @returns {void}
       */
      const addControls = (): void => {
        map.value!.addControl(
          new maplibregl.ScaleControl({
            maxWidth: 80,
          }),
          'bottom-left',
        );
        map.value!.addControl(
          new maplibregl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          'bottom-right',
        );
        map.value!.addControl(
          new maplibregl.NavigationControl({
            showCompass: true,
            showZoom: true,
            visualizePitch: true,
          }),
          'bottom-right',
        );
      };

      return {
        maplibre,
      };
    },
  });
</script>
