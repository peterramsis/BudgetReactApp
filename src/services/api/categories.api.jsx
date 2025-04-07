import axiosApi from "../../assets/axios/axiosApi";
export const getCategories = async () => {
  try {
    const {data} = await axiosApi.get("/categories");
    return data;
  } catch (error) {
    console.error("---Error fetching categories: ", error);
    return error;
  }
};
