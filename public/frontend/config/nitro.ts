import type { Data, Style } from '~/types';

const useNitroConfig = async (): Promise<string[]> => {
  const routes: string[] = [];
  // Populate all the style route(s)
  const stylesRes = await fetch('http://localhost:8080/styles.json');
  const styles: Style[] = await stylesRes.json();
  styles.forEach((style) => {
    routes.push(`/style/${style.id}`);
  });

  // Populate all the data route(s)
  const dataRes = await fetch('http://localhost:8080/data.json');
  const data: Data[] = await dataRes.json();
  data.forEach((dataItem) => {
    routes.push(`/data/${dataItem.id}`);
  });

  return routes;
};

export { useNitroConfig };
