<script setup lang="ts">
import { useGetUsers } from "@/composables/useGetUsers";
import { computed, ref } from "vue";
import UserCard from "@/components/users/UserCard.vue";
import { useRoute } from "vue-router";

const page = ref(1);
const route = useRoute();

const filtersComputed = computed(() => {
   return {
      minAge: route.query.minAge ? Number(route.query.minAge) : undefined,
      maxAge: route.query.maxAge ? Number(route.query.maxAge) : undefined,
      gender: route.query.gender ? (route.query.gender as string) : undefined,
   };
});

const { data, isLoading } = useGetUsers({ page, filters: filtersComputed });
</script>

<template>
   <v-container class="d-flex flex-column justify-space-between h-100" fluid>
      <v-row dense>
         <template v-if="isLoading">
            <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3">
               <v-skeleton-loader type="card-avatar, actions" />
            </v-col>
         </template>

         <template v-else>
            <v-col
               v-for="user in data?.results"
               :key="user.id.value"
               cols="12"
               sm="6"
               md="4"
               lg="3"
            >
               <user-card :user="user" />
            </v-col>
         </template>
      </v-row>

      <v-row justify="center" class="mt-4 flex-grow-0">
         <v-col cols="auto">
            <v-pagination v-model="page" :length="10" density="compact" />
         </v-col>
      </v-row>
   </v-container>
</template>
