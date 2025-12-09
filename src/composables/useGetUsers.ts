import { useQuery } from "@tanstack/vue-query";
import { getUsers } from "../api/userAPI.ts";
import { type MaybeRef, toValue } from "vue";

export const useGetUsers = ({ page }: { page: MaybeRef<number> }) => {
   return useQuery({
      queryKey: ["users", page],
      queryFn: () => getUsers(toValue(page), 12),
   });
};
