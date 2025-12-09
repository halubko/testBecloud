<script setup lang="ts">
import type { UserInterface } from "@/interfaces/User.Interfaces.ts";
import { toRefs } from "vue";
import { formatUserName } from "@/utils/helpers.ts";

const props = defineProps<{
   user: UserInterface;
}>();

const { name, gender, phone, email, registered } = toRefs(props.user);
</script>

<template>
   <v-card max-width="380" rounded="lg">
      <v-card-item class="text-center pt-4">
         <v-card-title class="text-h5 font-weight-bold text-truncate">
            {{ formatUserName(name.first, name.last) }}
         </v-card-title>

         <v-card-subtitle class="mt-1">
            <v-chip
               size="small"
               :color="gender === 'female' ? 'pink' : 'blue'"
               variant="tonal"
               class="mr-2"
            >
               <v-icon start icon="mdi-gender-female" v-if="gender === 'female'"></v-icon>
               <v-icon start icon="mdi-gender-male" v-else></v-icon>
               {{ gender }}
            </v-chip>

            <v-chip size="small" color="purple" variant="tonal">
               <v-icon start icon="mdi-cake-variant"></v-icon>
               {{ registered.age }} years
            </v-chip>
         </v-card-subtitle>
      </v-card-item>

      <v-divider class="mx-3"></v-divider>

      <v-list class="px-2 pb-4">
         <v-list-item
            :href="`tel:${phone}`"
            :title="phone"
            prepend-icon="mdi-phone-outline"
            rounded="lg"
         >
            <template v-slot:prepend>
               <v-icon color="success"></v-icon>
            </template>
         </v-list-item>

         <v-list-item
            :href="`mailto:${email}`"
            :title="email"
            prepend-icon="mdi-email-outline"
            rounded="lg"
         >
            <template v-slot:prepend>
               <v-icon color="primary"></v-icon>
            </template>
         </v-list-item>
      </v-list>
   </v-card>
</template>
