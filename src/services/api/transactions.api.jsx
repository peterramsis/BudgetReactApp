import axiosApi from "../../assets/axios/axiosApi";
export const getTransactions = async () => {
  try {
    const {data} = await axiosApi.get("/transactions");
    return data;
  } catch (error) {
    console.error("---Error fetching transactions: ", error);
    return error;
  }
};

export const deleteTransaction = async (id) => {
  try {
    const {data} = await axiosApi.delete(`/transactions/${id}`);
    return data;
  } catch (error) {
    console.error("---Error deleting transaction: ", error);
    return error;
  }
}