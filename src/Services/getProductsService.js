import axios from "axios";

export const fetchProductsData = async () => {
  let url = "https://eventos.ec/api/products";
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
