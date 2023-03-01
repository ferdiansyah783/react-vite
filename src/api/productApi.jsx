import apiClient from "../service/api";

export default {
    async getProducts(query) {
        return await apiClient.get(`products?${query}`)
    }
}