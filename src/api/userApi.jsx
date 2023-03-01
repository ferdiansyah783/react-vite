import apiClient from "../service/api";

export default {
  async getUsers(query) {
    return await apiClient.get(`users?${query}`);
  },
};
