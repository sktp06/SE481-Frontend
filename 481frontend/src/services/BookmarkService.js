import apiClient from "@/services/AxiosClient.js";

export default {
  addBookmark(userId, animeId, score) {
    apiClient.post("/bookmarks/add", {
      userId: userId,
      amimeId: animeId,
      score: score,
    });
  },
  removeBookmark(userId, animeId) {
    apiClient.post("/bookmarks/remove", {
      userId: userId,
      amimeId: animeId,
    });
  },
  bookmarkList(userId) {
    apiClient.post("/bookmarks/", {
      userId: userId,
    });
  },
};
