import {
    IDateOfList,
    IDeleteListData,
    ILoadedList,
    ILoadList,
    IPriceRow
    } from 'src/types';

async function ApiTemplate<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
  }

export async function fetchPrices(date: string): Promise<IPriceRow[]> {
    return await ApiTemplate<IPriceRow[]>('api/prices-by-fecha?fecha=' + date);
}

export async function fetchLastListDate(): Promise<string> {
    return await ApiTemplate<string>('api/get-last-date');
}

export async function fetchLastLists(date: string): Promise<IPriceRow[]> {
    return await fetchPrices(date);
}

export function fetchAllLists(): Promise<ILoadedList[]> {
    return ApiTemplate<ILoadedList[]>('api/get-all-loaded-lists');
}

export function fetchAllLoadedDates(): Promise<IDateOfList[]> {
    return ApiTemplate<IDateOfList[]>('api/get-all-dates');
}

export function fetchAllListType(): Promise<string[]> {
    return ApiTemplate<string[]>('api/get-list-types');
}

export async function cargarLista(form: FormData): Promise<ILoadList> {
    const response =  await fetch('api/cargar-lista', {
        body: form,
        method: 'POST'
    });

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

export async function eliminarLista(lista: IDeleteListData): Promise<number> {
    const response =  await fetch('api/delete-list-by-date-and-name', {
        body: JSON.stringify(lista),
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
    });

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}