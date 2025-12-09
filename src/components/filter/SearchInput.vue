<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();

const inputValue = ref();

watch(
   () => inputValue.value,
   (value) => {
      router.push({
         query: {
            ...route.query,
            search: value === "" ? undefined : value,
         },
      });
   }
);
watch(
   () => route.query.search,
   (value) => {
      inputValue.value = (value as string) || "";
   }
);
</script>

<template>
   <v-text-field
      rounded="lg"
      prepend-inner-icon="mdi-magnify"
      clearable
      placeholder="Search by name"
      variant="solo"
      v-model="inputValue"
      max-width="600"
   />
</template>
