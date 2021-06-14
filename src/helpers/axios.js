import Axios from "axios";

import { apiBaseUrl } from "@enums";

export const axios = Axios.create({
  baseURL: apiBaseUrl,
});

axios.CancelToken = Axios.CancelToken;
axios.isCancel = Axios.isCancel;
