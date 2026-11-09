const BASE_URL = "http://localhost:3001";

export const getProducts = () =>
  fetch(`${BASE_URL}/products`).then((res) => res.json());

export const addProduct = (product) =>
  fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((res) => res.json());

export const getCart = () =>
  fetch(`${BASE_URL}/cart`).then((res) => res.json());

export const addCartItem = (item) =>
  fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((res) => res.json());

export const deleteCartItem = (id) =>
  fetch(`${BASE_URL}/cart/${id}`, { method: "DELETE" });
