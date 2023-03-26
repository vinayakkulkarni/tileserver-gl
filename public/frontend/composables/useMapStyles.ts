import type { Style } from '~/types';

/**
 * Returns if raster tiles are requested by the browser
 *
 */
async function useMapStyles() {
  const data = ref<Style[]>([]);
  try {
    const { data: response } = await useFetch(
      'http://localhost:8080/styles.json',
    );
    data.value = response.value as Style[];
  } catch (error) {
    console.error('Error fetching styles: ', error);
    data.value = [];
  }
  return { data };
}

export { useMapStyles };
