<template>
  <footer
    class="flex h-auto items-center justify-between shadow border-t border-gray-200 dark:border-gray-700 px-2 py-1"
  >
    <a href="https://www.maptiler.com/" target="_blank">
      <img src="/images/maptiler-logo.svg" class="w-24 h-6" />
    </a>
    <p class="text-sm font-light">
      <a href="https://github.com/maptiler/tileserver-gl" target="_blank">
        Powered by TileServer GL (v{{ appVersion }})
      </a>
      –
      <a href="https://www.maptiler.com/" target="_blank">
        an open-source project from MapTiler.
      </a>
    </p>
  </footer>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'VFooter',
    setup() {
      const runtime = useRuntimeConfig();

      return {
        appVersion: runtime.public.appVersion,
      };
    },
  });
</script>
