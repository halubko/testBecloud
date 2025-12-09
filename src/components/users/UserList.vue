<script setup lang="ts">
import { useGetUsers } from "@/composables/useGetUsers";
import { ref } from "vue";
import UserCard from "@/components/users/UserCard.vue";

const page = ref(1);

const { data } = useGetUsers({ page });
</script>

<template>
   <v-container>
      <v-row>
         <v-col v-for="user in data?.results" :key="user.id.value" sm="6" md="4" lg="3">
            <user-card :user="user" />
         </v-col>
      </v-row>

      <v-row justify="center" class="mt-4">
         <v-col cols="auto">
            <v-pagination v-model="page" :length="10"></v-pagination>
         </v-col>
      </v-row>
   </v-container>
</template>
