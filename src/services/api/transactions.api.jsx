import axiosApi from "../../assets/axios/axiosApi";
export const getTransactions = async () => {
  try {
    const {data} = await axiosApi.get("/transactions");
    return data;
  } catch (error) {
    console.error("Error fetching transactions: ", error);
  }
};