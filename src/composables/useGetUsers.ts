import { useQuery } from "@tanstack/vue-query";
import { getUsers } from "../api/userAPI.ts";
import { computed, type MaybeRef, toValue } from "vue";
import type { UserFilterInterface } from "@/interfaces/User.Interfaces.ts";
import { formatUserName } from "@/utils/helpers.ts";

interface useGetUsersProps {
   page: MaybeRef<number>;
   filters: MaybeRef<UserFilterInterface>;
}

export const useGetUsers = ({ page, filters }: useGetUsersProps) => {
   const query = useQuery({
      queryKey: ["users", page, () => computed(() => toValue(filters).gender)],
      queryFn: () => {
         const filter = toValue(filters);
         return getUsers(toValue(page), 12, filter.gender);
      },
   });

   const filteredUsers = computed(() => {
      const data = query.data.value;
      const filter = toValue(filters);

      if (!data)
         return {
            results: [],
            info: {
               results: 0,
               page: 0,
            },
         };

      let users = data.results;
      if (filter.minAge) {
         users = users.filter((user) => user.registered.age >= filter.minAge!);
      }
      if (filter.maxAge) {
         users = users.filter((user) => user.registered.age <= filter.maxAge!);
      }
      if (filter.search) {
         users = users.filter((user) =>
            formatUserName(user.name.first, user.name.last)
               .toLowerCase()
               .includes(filter.search!.toLowerCase())
         );
      }

      return {
         ...data,
         results: users,
      };
   });

   return {
      isLoading: query.isLoading,
      data: filteredUsers,
   };
};
