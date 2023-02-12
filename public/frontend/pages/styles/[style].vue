<template>
  <v-header />
  <!-- {{ style }} -->
  <maplibre-map
    :map-style="`http://localhost:8080/styles/${$route.params.style}/style.json`"
  />
  <!-- {{  style  }} -->
  <v-footer />
</template>

<script lang="ts">
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
  });
</script>
