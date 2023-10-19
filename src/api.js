import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";
//process.env.REACT_APP_BASE_URL

class PixlyApi {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      const res = await axios({ url, method, data, params });
      return res;
    } catch (err) {
      let message = err.response?.data?.error?.message || err;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Get AWS images with optional search term */
  static async getImagesWithUrlsOptionalSearch(search_term = null) {
    return (await this.request("images", { search_term })).data.images;
  }

  /** Get image URL by ID */
  static async getImageWithUrl(id) {
    return (await this.request(`images/${id}`)).data.images;
  }

  /** Add new image to AWS */
  static async addNewImage(data) {
    return (await this.request(`images/upload`, data, "post")).data.images;
  }
}

export default PixlyApi