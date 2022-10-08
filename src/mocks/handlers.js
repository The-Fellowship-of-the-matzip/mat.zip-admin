import { rest } from "msw";
import { API_BASE_URL, ENDPOINTS } from "../constants/urls";

const loginResponse = {
  accessToken: "Access Token",
};

const loginHandler = rest.post(
  `${API_BASE_URL}${ENDPOINTS.LOGIN}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginResponse));
  }
);

export const handlers = [loginHandler];
