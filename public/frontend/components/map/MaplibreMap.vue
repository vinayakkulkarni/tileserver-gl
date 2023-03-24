<template>
  <div ref="maplibre" id="map" class="w-full h-full relative">
    <div class="z-40 absolute top-0 right-0">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
  import maplibregl from 'maplibre-gl';
  import type { Map, StyleSpecification } from 'maplibre-gl';
  import type { Ref, PropType } from 'vue';

  export default defineComponent({
    name: 'MaplibreMap',
    props: {
      mapStyle: {
        type: Object as PropType<StyleSpecification>,
        required: true,
      },
    },
    emits: ['map-load'],
    setup(props, { emit }) {
      const maplibre = ref(null);
      let map: Ref<Map | null> = shallowRef(null);

      onMounted(async () => {
        map.value = new maplibregl.Map({
          container: maplibre.value! || 'map',
          style: props.mapStyle,
          center: [0, 0],
          zoom: 1,
          hash: true,
        });

        map.value.on('load', () => {
          addControls();
          emit('map-load', map.value);
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
