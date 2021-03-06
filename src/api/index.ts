import {
  IDateOfList,
  IDeleteListData,
  ILoadedList,
  ILoadList,
  IPriceRow,
  IToken,
  IVenta
} from "../types";

async function ApiTemplate<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authentication: "adasdasfasfsafsafasds",
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function fetchPrices(date: string): Promise<IPriceRow[]> {
  return await ApiTemplate<IPriceRow[]>("/api/prices-by-fecha?fecha=" + date);
}

export async function fetchLastListDate(): Promise<string> {
  return await ApiTemplate<string>("/api/get-last-date");
}

export async function fetchLastLists(date: string): Promise<IPriceRow[]> {
  return await fetchPrices(date);
}

export function fetchAllLists(): Promise<ILoadedList[]> {
  return ApiTemplate<ILoadedList[]>("/api/get-all-loaded-lists");
}

export function fetchAllLoadedDates(): Promise<IDateOfList[]> {
  return ApiTemplate<IDateOfList[]>("/api/get-all-dates");
}

export function fetchAllListType(): Promise<string[]> {
  return ApiTemplate<string[]>("/api/get-list-types");
}

export async function cargarLista(form: FormData): Promise<ILoadList> {
  const response = await fetch("/api/cargar-lista", {
    body: form,
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function requestLogin(form: FormData): Promise<IToken> {
  const response = await fetch("/api/login", {
    body: form,
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function eliminarLista(lista: IDeleteListData): Promise<number> {
  const response = await fetch("/api/delete-list-by-date-and-name", {
    body: JSON.stringify(lista),
    headers: { "Content-type": "application/json" },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export const cargaVenta = async (
  monto: number,
  usuario: string
): Promise<number> => {
  const response = await fetch("/api/add-venta", {
    body: JSON.stringify({
      monto,
      usuario
    }),
    headers: { "Content-type": "application/json" },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const obtenerVentas = async (): Promise<IVenta[]> => {
  const response = await fetch("/api/get-ventas");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const obtenerVentasPorFecha = async (
  fecha: string
): Promise<IVenta[]> => {
  const response = await fetch(`/api/get-ventas-by-day?fecha=${fecha}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const obtenerFechasConVentas = (): Promise<IDateOfList[]> => {
  return ApiTemplate<IDateOfList[]>("/api/get-fechas-con-ventas");
};

export const eliminarVenta = async (fecha: string): Promise<Number> => {
  const response = await fetch("/api/remove-sale-by-date", {
    body: JSON.stringify({
      fecha
    }),
    headers: { "Content-type": "application/json" },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}