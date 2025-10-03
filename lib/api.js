// lib/api.js

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Helper untuk fetch data dari Strapi
 * @param {string} path - endpoint API (misal: /articles, /products)
 * @param {object} options - konfigurasi fetch tambahan
 */ 
export async function fetchAPI(path, options = {}) {
  const url = `${STRAPI_URL}/api${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // default: selalu fresh
    ...options,
  });

  if (!res.ok) {
    console.error("Strapi API error:", res.statusText);
    throw new Error(`Error fetch ${url}`);
  }

  return res.json();
}
