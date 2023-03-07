import apiClient from "../service/api";

export default {
  async getProfile() {
    return await apiClient.get(`profile`);
  },
};
