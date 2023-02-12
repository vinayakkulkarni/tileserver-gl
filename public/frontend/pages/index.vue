<template>
  <section
    class="min-h-screen bg-no-repeat bg-contain bg-hero-pattern overflow-auto pb-24"
  >
    <div class="flex flex-col items-center justify-start space-y-24">
      <div class="flex flex-col mt-32 items-center space-y-6">
        <img src="/images/logo.png" class="w-96" />
        <p class="font-light text-3xl">Vector and raster maps with GL styles</p>
      </div>
      <!-- Styles -->
      <div class="bg-white divide-y max-w-screen-lg w-full rounded shadow">
        <h1 class="px-8 py-4 font-bold text-xl uppercase">Styles</h1>
        <div class="p-8" v-for="(style, idx) in styles" :key="idx">
          <div class="flex items-center justify-between">
            <section
              id="details"
              class="flex justify-between items-center space-x-6"
            >
              <img
                :src="`/styles/${style.id}/0/0/0.png`"
                :alt="`${style.name} preview`"
                class="w-32 h-32 object-cover rounded border shadow"
              />
              <div class="space-y-2">
                <h3 class="font-bold text-lg">{{ style.name }}</h3>
                <p class="text-sm font-light">identifier: {{ style.id }}</p>
                <p class="divide-x">
                  services:
                  <a
                    :href="`/styles/${style.id}/style.json`"
                    class="text-blue-600 hover:underline"
                  >
                    GL Style
                  </a>
                  <a
                    :href="`/styles/${style.id}.json`"
                    class="text-blue-600 hover:underline"
                  >
                    TileJSON
                  </a>
                  <a
                    :href="`/styles/${style.id}/wmts.xml`"
                    class="text-blue-600 hover:underline"
                  >
                    WMTS
                  </a>
                  <!-- <a class="text-blue-600 hover:underline"> XYZ </a>
                  <input
                    id="xyz_style_dark-matter"
                    type="text"
                    value="http://localhost:8080/styles/dark-matter/{z}/{x}/{y}.webp"
                    style="display: none"
                  /> -->
                </p>
              </div>
            </section>
            <section
              id="viewers"
              class="flex flex-col items-center justify-center space-y-2"
            >
              <a
                href="styles/dark-matter/#2/0.00000/0.00000"
                class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Viewer
              </a>
              <a
                href="styles/dark-matter/?raster#2/0.00000/0.00000"
                class="text-blue-600 hover:underline"
              >
                Raster
              </a>
              <a href="styles/dark-matter/?vector#2/0.00000/0.00000">
                Vector
              </a>
            </section>
          </div>
        </div>
      </div>
      <!-- Data -->
    </div>
  </section>
</template>

<script lang="ts">
  import type { Style } from '~/types/style';
  export default defineComponent({
    name: 'HomePage',
    async setup() {
      let styles: Style[] = await $fetch('http://localhost:8080/styles.json');
      return {
        styles,
      };
    },
  });
</script>
