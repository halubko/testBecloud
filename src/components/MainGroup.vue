<template>
   <v-main>
      <v-container class="d-flex flex-column justify-space-between h-100">
         <div>
            <SearchInput />
            <UserList :page="page" />
         </div>
         <v-pagination v-model="page" :length="10" />
      </v-container>
   </v-main>
</template>

<script setup lang="ts">
import UserList from "@/components/users/UsersList.vue";
import { ref } from "vue";
import SearchInput from "@/components/filter/SearchInput.vue";

const page = ref(1);
</script>
