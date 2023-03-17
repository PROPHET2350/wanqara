import axios from "axios";

export const updateProduct = async (product) => {
  let size = product.size.toLowerCase();
  let url = `https://eventos.ec/api/products/${product.id}?name=${product.name}&price=${product.price}&observation=${product.observation}&size=${size}`;
  try {
    const response = await axios.patch(url);
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
