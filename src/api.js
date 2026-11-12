const BASE_URL = "http://localhost:3001";

async function fetchJson(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status} ${response.statusText})`);
  }

  return response.json();
}

export const getProducts = () => fetchJson(`${BASE_URL}/products`);

export const addProduct = (product) =>
  fetchJson(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const editProduct = (id, product) =>
  fetchJson(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const updateProduct = (id, product) =>
  fetchJson(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status} ${response.statusText})`);
  }
};

export const getCart = () => fetchJson(`${BASE_URL}/cart`);

export const addCartItem = (item) =>
  fetchJson(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

export const deleteCartItem = async (id) => {
  const response = await fetch(`${BASE_URL}/cart/${id}`, { method: "DELETE" });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status} ${response.statusText})`);
  }
};
