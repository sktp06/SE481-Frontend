import apiClient from "@/services/AxiosClient.js";

export default {
  correction(query) {
    return apiClient.get(`/correction?query=${query}`);
  },
};
