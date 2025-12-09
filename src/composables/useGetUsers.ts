import { useQuery } from "@tanstack/vue-query";
import { getUsers } from "../api/userAPI.ts";
import { type MaybeRef, toValue } from "vue";
import type { UserFilterInterface } from "@/interfaces/User.Interfaces.ts";

interface useGetUsersProps {
   page: MaybeRef<number>;
   filters: MaybeRef<UserFilterInterface>;
}

export const useGetUsers = ({ page, filters }: useGetUsersProps) => {
   return useQuery({
      queryKey: ["users", page, filters],
      queryFn: () => {
         const filter = toValue(filters);
         return getUsers(toValue(page), 12, filter.gender);
      },
      select: (data) => {
         const filter = toValue(filters);
         let users = data.results;

         if (filter.minAge) {
            users = users.filter((user) => user.registered.age > filter.minAge!);
            data.results = users;
         }
         if (filter.maxAge) {
            users = users.filter((user) => user.registered.age < filter.maxAge!);
            data.results = users;
         }

         return data;
      },
   });
};
