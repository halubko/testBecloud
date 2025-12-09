<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();

const inputValue = ref();

watch(
   () => inputValue.value,
   (value) => {
      router.push({
         query: {
            search: value === "" ? undefined : value,
         },
      });
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
