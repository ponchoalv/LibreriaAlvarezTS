import { PriceRow } from "src/types";

async function ApiTemplate<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
  }

export function fetchPrices(date: string): Promise<Array<PriceRow>> {
    return ApiTemplate<Array<PriceRow>>('api/prices-by-fecha?fecha=' + date);
}