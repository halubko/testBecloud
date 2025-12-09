<script setup lang="ts">
import { useForm } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "vue";

const router = useRouter();
const route = useRoute();

const { handleSubmit, defineField, resetForm, setValues } = useForm();

const [minAge, minAgeAttrs] = defineField("minAge");
const [maxAge, maxAgeAttrs] = defineField("maxAge");
const [gender, genderAttrs] = defineField("gender");

watch(
   () => route.query,
   () => {
      setValues({
         minAge: route.query.minAge ? Number(route.query.minAge) : null,
         maxAge: route.query.maxAge ? Number(route.query.maxAge) : null,
         gender: route.query.gender,
      });
   }
);

const onSubmit = handleSubmit((values) => {
   const queryParams: Record<string, number | string> = {};

   if (values.minAge) {
      queryParams.minAge = values.minAge;
   }

   if (values.maxAge) {
      queryParams.maxAge = values.maxAge;
   }

   if (values.gender) {
      queryParams.gender = values.gender;
   }

   router.replace({ query: queryParams });
});

const onClear = () => {
   resetForm();
   router.replace({ query: undefined });
};

const isFormEmpty = computed(() => {
   return !minAge.value && !maxAge.value && !gender.value;
});
</script>

<template>
   <v-navigation-drawer location="left" permanent rounded="lg" class="bg-transparent border-none">
      <v-form @submit.prevent="onSubmit" class="pa-4">
         <div class="text-subtitle-1 font-weight-bold mb-4">Filters</div>

         <v-number-input
            variant="outlined"
            label="Minimal age"
            control-variant="split"
            :min="1"
            v-model="minAge"
            v-bind="minAgeAttrs"
            density="compact"
            hide-details="auto"
            class="mb-4"
         />
         <v-number-input
            variant="outlined"
            label="Maximal age"
            control-variant="split"
            :min="1"
            v-model="maxAge"
            v-bind="maxAgeAttrs"
            density="compact"
            hide-details="auto"
            class="mb-4"
         />

         <v-radio-group
            label="Choose gender"
            v-model="gender"
            v-bind="genderAttrs"
            hide-details
            class="mb-6"
         >
            <v-radio label="Male" value="male" density="compact" />
            <v-radio label="Female" value="female" density="compact" />
         </v-radio-group>

         <div class="d-flex justify-space-between">
            <v-btn
               variant="tonal"
               @click="onClear"
               class="flex-grow-1 mr-2"
               :disabled="isFormEmpty"
            >
               Clear
            </v-btn>
            <v-btn
               type="submit"
               color="primary"
               variant="tonal"
               class="flex-grow-1"
               :disabled="isFormEmpty"
            >
               Submit
            </v-btn>
         </div>
      </v-form>
   </v-navigation-drawer>
</template>
