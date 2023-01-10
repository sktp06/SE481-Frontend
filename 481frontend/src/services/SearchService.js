import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(contents) {
    console.log(contents);
    return apiClient
      .post("/anime/title/", contents)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "contents",
          JSON.stringify(response.data.contents)
        );
        GStore.currentContent = response.data.contents;
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
};
