import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  login(user) {
    console.log(user);
    return apiClient
      .post("/auth/", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        GStore.currentUser = response.data.user;
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    GStore.currentUser = null;
  },
};
