import type { Data } from '~/types';

/**
 * Returns the data for the current route.
 *
 */
async function useDataSource() {
  const route = useRoute();
  const data = ref<Data>({} as Data);
  try {
    const { data: response } = await useFetch(
      `http://localhost:8080/data/${route.params.data}.json`,
    );
    data.value = response.value as Data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    data.value = {} as Data;
  }
  return { data };
}

export { useDataSource };
