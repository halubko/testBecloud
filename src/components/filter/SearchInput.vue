<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { mdiMagnify } from "@mdi/js";

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
      :prepend-inner-icon="mdiMagnify"
      clearable
      placeholder="Search by name"
      variant="solo"
      v-model="inputValue"
      max-width="600"
   />
</template>
