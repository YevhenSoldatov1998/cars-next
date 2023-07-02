import {Car, FilterType} from "@/types";

const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'

const headers = {
  'X-RapidAPI-Key': 'ea54076780msha4118f6d341459bp1d045djsn330ef05a884b',
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
}

export async function getCars(filters: FilterType): Promise<Car[]> {
  const response = await fetch(generateCarUrl(filters), {headers})
  const result = await response.json()
  return result as Car[]
}

function generateCarUrl({limit, fuel, model, year, manufacturer}: FilterType) {
  const url = new URL(baseUrl);
  limit && url.searchParams.append('limit', `${limit}`);
  fuel && url.searchParams.append('fuel', fuel);
  model && url.searchParams.append('model', model);
  year && url.searchParams.append('year', `${year}`);
  manufacturer && url.searchParams.append('manufacturer', manufacturer);
  return `${url}`;
};

export function generateCarImageUrl(car: Car, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const {make, model, year} = car;
  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
}