import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getStoredLaptopById } from "../data/dataUtility";
import Laptop from "../components/Laptops/LaptopComponent";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ItemDetails() {
  const { id } = useParams();
  const query = useQuery();
  const [laptop, setLaptop] = useState(null);

  const refresh = query.get("refresh");

  useEffect(() => {
    const fetchLaptop = () => {
      const laptopData = getStoredLaptopById(id);
      if (laptopData) {
        setLaptop(laptopData);
      } else {
        console.error("Laptop not found");
      }
    };

    fetchLaptop();
  }, [id, refresh]);

  if (!laptop) {
    return <div>Loading...</div>;
  }

  return <Laptop laptop={laptop} />;
}

export default ItemDetails;
