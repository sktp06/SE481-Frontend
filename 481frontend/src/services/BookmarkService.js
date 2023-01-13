import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  addBookmark(userId, animeId, score) {
    apiClient
      .post("/bookmarks/add", {
        userId: userId,
        animeId: animeId,
        score: score,
      })
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.response.data.message));
    alert.response.data.message;
  },
  removeBookmark(userId, animeId) {
    apiClient.post("/bookmarks/remove", {
      userId: userId,
      animeId: animeId,
    });
  },
  getbookmarkList(userId) {
    apiClient
      .post("/bookmarks/", {
        userId: userId,
      })
      .then((res) => {
        GStore.bookmarks = res.data.animes;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getBookmarkById(animeId) {
    apiClient
      .post("/bookmarks/id", {
        animeId: animeId,
      })
      .then((res) => {
        GStore.animeDetails = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
