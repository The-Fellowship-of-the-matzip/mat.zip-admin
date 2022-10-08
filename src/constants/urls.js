export const API_BASE_URL =
  process.env.NODE_ENV === "production" ? "https://api.matzip.today/api" : "";

export const ENDPOINTS = {
  LOGIN: "/login/admin",
};
