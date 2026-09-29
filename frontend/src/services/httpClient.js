import { API_URL } from "../config/env";

export async function get(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

export const assetUrl = (path) => `${API_URL}${path}`;
