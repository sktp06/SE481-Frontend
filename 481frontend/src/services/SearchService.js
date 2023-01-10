import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(input) {
    console.log(input);
    return apiClient
      .post("/anime/title", input)
      .then((response) => {
        console.log(response.data);
        var KeepData = JSON.stringify(response.data);
        console.log(JSON.parse(KeepData));
        var KeepData2 = JSON.parse(KeepData);
        GStore.animeList = KeepData2;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
};
