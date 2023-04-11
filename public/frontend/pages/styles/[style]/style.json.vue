<template>
  <pre v-html="JSON.stringify(json, null, 2)" class="select-auto overflow-y-auto" />
</template>
<script setup>
  const json = ref({});
  const { style: data } = await useMapStyle();
  json.value = data.value;
</script>
