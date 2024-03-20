export default class LaptopApi {
  static BASE_URL = "https://freetestapi.com/api/v1/laptops";

  static async handleResponse(response) {
    if (response.ok) {
      return await response.json();
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  }

  static async getAllLaptops() {
    try {
      const response = await fetch(this.BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching all laptops:", error);
    }
  }

  static async getLaptopById(id) {
    try {
      const response = await fetch(`${this.BASE_URL}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching laptop by ID:", error);
    }
  }

  static async getLaptopsWithLimit(limit) {
    try {
      const response = await fetch(`${this.BASE_URL}?limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error fetching laptops with limit:", error);
    }
  }

  static async searchLaptops(query) {
    try {
      const response = await fetch(`${this.BASE_URL}?search=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error searching laptops:", error);
    }
  }

  static async sortLaptops(sort, order = "dec") {
    try {
      const response = await fetch(
        `${this.BASE_URL}?sort=${sort}&order=${order}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return this.handleResponse(response);
    } catch (error) {
      console.error("Error sorting laptops:", error);
    }
  }
}
