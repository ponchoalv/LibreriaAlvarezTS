import { PriceRow, LoadedList, DateOfList, LoadList } from "src/types";

async function ApiTemplate<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
  }

export async function fetchPrices(date: string): Promise<Array<PriceRow>> {
    return await ApiTemplate<Array<PriceRow>>('api/prices-by-fecha?fecha=' + date);
}

export async function fetchLastListDate(): Promise<string> {
    return await ApiTemplate<string>('api/get-last-date');
}

export async function fetchLastLists(date: string): Promise<Array<PriceRow>> {
    return await fetchPrices(date);
}

export function fetchAllLists(): Promise<Array<LoadedList>> {
    return ApiTemplate<Array<LoadedList>>('api/get-all-loaded-lists');
}

export function fetchAllLoadedDates(): Promise<Array<DateOfList>> {
    return ApiTemplate<Array<DateOfList>>('api/get-all-dates');
}

export async function cargarLista(form: FormData): Promise<LoadList> {
    const response =  await fetch('api/cargar-lista', {
        method: 'POST',
        body: form
    });

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}