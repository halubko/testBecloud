<script setup lang="ts">
import { useGetUsers } from "@/composables/useGetUsers";
import { computed, toRef } from "vue";
import UserCard from "@/components/users/UserCard.vue";
import { useRoute } from "vue-router";
import type { UserFilterInterface } from "@/interfaces/User.Interfaces.ts";
import NoUsersFound from "@/components/users/NoUsersFound.vue";

const route = useRoute();

const filters = computed(() => {
   return {
      minAge: route.query.minAge ? Number(route.query.minAge) : undefined,
      maxAge: route.query.maxAge ? Number(route.query.maxAge) : undefined,
      gender: route.query.gender
         ? (route.query.gender as UserFilterInterface["gender"])
         : undefined,
      search: route.query.search ? (route.query.search as string) : undefined,
   };
});

const props = defineProps<{
   page: number;
}>();

const { data, isLoading } = useGetUsers({ page: toRef(props, "page"), filters });
</script>

<template>
   <v-row>
      <v-col cols="12" v-if="isLoading" class="d-flex justify-center">
         <v-progress-circular color="primary" indeterminate size="40" />
      </v-col>

      <v-col cols="12" v-else-if="data.results.length === 0" class="d-flex justify-center">
         <NoUsersFound />
      </v-col>

      <v-col
         v-for="user in data.results"
         :key="user.id.value"
         cols="12"
         md="6"
         lg="4"
         xl="3"
         v-else
      >
         <user-card :user="user" />
      </v-col>
   </v-row>
</template>
