import { get } from "./httpClient";

export const productService = {
  getAll: () => get("/api/products"),
  getFeatured: (limit = 4) => get(`/api/products/featured?limit=${limit}`),
  getById: (id) => get(`/api/products/${id}`),
};
