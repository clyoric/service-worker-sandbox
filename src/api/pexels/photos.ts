import axiosInstance from "./instanse";

export const getPhotosByPage = async (page: number, perPage: number = 20) => {
  const response = await axiosInstance.get(`curated?page=${page}&per_page=${perPage}`);
  return response.data;
};