import LaptopApi from "../services/laptopApi";

let laptops = [];

export const fetchAndStoreLaptops = async () => {
  try {
    const fetchedLaptops = await LaptopApi.getAllLaptops();
    laptops = fetchedLaptops || [];
    return laptops;
  } catch (error) {
    console.error("Failed to fetch laptops:", error);
    return [];
  }
};
export const getStoredLaptopById = (id) => {
  return laptops.find((laptop) => laptop.id.toString() === id);
};
export const getStoredLaptops = () => laptops;

export const updateStoredLaptop = (updatedLaptop) => {
  const index = laptops.findIndex((laptop) => laptop.id === updatedLaptop.id);
  if (index !== -1) {
    laptops = [
      ...laptops.slice(0, index),
      updatedLaptop,
      ...laptops.slice(index + 1),
    ];
  }
};

export const deleteStoredLaptop = (laptopId) => {
  laptops = laptops.filter((laptop) => laptop.id !== laptopId);
};
export const sortStoredLaptops = (laptops, key, order = "asc") => {
  const sortedLaptops = [...laptops].sort((a, b) => {
    if (a[key] < b[key]) return order === "asc" ? -1 : 1;
    if (a[key] > b[key]) return order === "asc" ? 1 : -1;
    return 0;
  });
  return sortedLaptops;
};

export const searchLaptops = (query) => {
  const queryLower = query.toLowerCase();
  return laptops.filter(
    (laptop) =>
      laptop.brand.toLowerCase().includes(queryLower) ||
      laptop.model.toLowerCase().includes(queryLower)
  );
};
export const filterStoredLaptops = (laptops, key, value) => {
  return laptops.filter((laptop) => {
    const laptopValue = laptop[key];
    if (typeof laptopValue === "string" && typeof value === "string") {
      return laptopValue.toLowerCase().includes(value.toLowerCase());
    } else if (
      typeof laptopValue === "number" &&
      typeof value !== "undefined"
    ) {
      return laptopValue.toString().includes(value.toString());
    }
    return laptopValue === value;
  });
};
