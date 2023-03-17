import axios from "axios";

export const addProduct = async (product) => {
  let url =
    "https://eventos.ec/api/products?name=Test&price=8&observation=Teste test&size=S";
  try {
    const response = await axios.post(url, product);
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
