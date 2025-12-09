<template>
   <FilterGroup />
   <v-main>
      <UserList />
   </v-main>
</template>

<script setup lang="ts">
import UserList from "@/components/users/UserList.vue";
import FilterGroup from "@/components/filter/FilterGroup.vue";
</script>
