import type { Data } from '~/types';

/**
 * Returns if raster tiles are requested by the browser
 *
 */
async function useDataSources() {
  const data = ref<Data[]>([]);
  try {
    const { data: response } = await useFetch(
      'http://localhost:8080/data.json',
    );
    data.value = response.value as Data[];
  } catch (error) {
    console.error('Error fetching data: ', error);
    data.value = [];
  }
  return { data };
}

export { useDataSources };