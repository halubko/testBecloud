import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "../constants/constants.ts";
import type { UserResponseInterfaces } from "../interfaces/User.Interfaces.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL,
});

export const getUsers = async (page: number, results: number, gender?: "male" | "female") => {
   const params: Record<string, number | string> = {
      page,
      results,
   };

   if (gender) {
      params.gender = gender;
   }

   const response: AxiosResponse<UserResponseInterfaces> = await axiosInstance.get("", {
      params,
   });
   return response.data;
};
