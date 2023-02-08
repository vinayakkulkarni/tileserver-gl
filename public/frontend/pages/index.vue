<template>
  <v-header />
  <maplibre-map />
  <v-footer />
</template>

<script lang="ts">
  import VHeader from '~/components/ui/VHeader.vue';
  import VFooter from '~/components/ui/VFooter.vue';
  import MaplibreMap from '~/components/map/MaplibreMap.vue';

  export default defineComponent({
    name: 'HomePage',
    components: {
      VHeader,
      VFooter,
      MaplibreMap,
    },
  });
</script>
