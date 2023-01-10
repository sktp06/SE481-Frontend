import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(query) {
    return apiClient.post(`/anime/title?query=${query}`).then((res) => {
      GStore.animeList = res.data;
    });
  },
  getAnimeDescription(query) {
    return apiClient.post(`/anime/description?query=${query}`).then((res) => {
      GStore.animeList = res.data;
    });
  },
};
