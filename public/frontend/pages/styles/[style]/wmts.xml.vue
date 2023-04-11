<template>
  <pre class="select-auto overflow-y-auto"> {{ xml }} </pre>
</template>
<script setup>
  const xml = ref();
  const { data } = await useFetch('/wmts.xml');
  xml.value = data.value;
</script>
