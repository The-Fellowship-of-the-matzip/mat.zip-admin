import { rest } from "msw";
import { API_BASE_URL, ENDPOINTS } from "../constants/urls";

export const handlers = [rest.post(`${API_BASE_URL}${ENDPOINTS.LOGIN}`), null];
