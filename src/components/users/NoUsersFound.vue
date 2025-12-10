<script setup lang="ts">
import { mdiAlertCircleOutline } from "@mdi/js";
</script>

<template>
   <v-card rounded="lg" class="d-flex flex-column align-center pa-4">
      <v-icon :icon="mdiAlertCircleOutline" color="red" size="64" />
      <v-card-title class="text-h5 font-weight-bold"> No users found </v-card-title>
   </v-card>
</template>
