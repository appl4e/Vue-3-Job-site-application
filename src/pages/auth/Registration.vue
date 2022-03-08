<template>
  <form @submit.prevent="handleForm" class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12">
    <h1 class="text-xl font-semibold text-slate-700">Register</h1>
    <Input
      v-model="regFields.name"
      labels="Nameee"
      name="name"
      :helperText="getErrors('name')"
      :hasError="Boolean(getErrors('name'))"
      class="text-blue-800"
    />

    <Input
      v-model="regFields.email"
      labels="Email"
      name="email"
      :helperText="getErrors('email')"
      :hasError="Boolean(getErrors('email'))"
      type="email"
    />

    <Input
      v-model="regFields.password"
      labels="Password"
      name="password"
      :helperText="getErrors('password')"
      :hasError="Boolean(getErrors('password'))"
      type="password"
    />
    <Input
      v-model="regFields.password_confirmation"
      labels="Confirm Password"
      name="password_confirmation"
      :helperText="getErrors('password_confirmation')"
      :hasError="Boolean(getErrors('password_confirmation'))"
      type="password"
    />

    <Button :loading="loading">Register</Button>
  </form>
</template>
<script setup>
import api from "@/helpers/api";
import { reactive, ref } from "vue";
import Input from "@/components/Form/input.vue"
import Button from "@/components/Form/Button.vue"
const regFields = reactive({
  "name": "",
  "email": "",
  "password": "",
  "password_confirmation": ""
});

const errors = ref([]);
const loading = ref();
const handleForm = async () => {
  loading.value = true
  const { ok, data, originalError } = await api.post("/api/auth/register", regFields);

  if (!ok) {
    console.log(originalError.response.data);
    errors.value = originalError.response.data.errors;
  }
  else {
    console.log('success');

  }
  loading.value = false
  // try {
  //   const response = await axios.post("https://jobs-api.return0.codes/api/auth/register", regFields)
  // }
  // catch (err) {

  //   console.log(err.response.data)

  // }  loading.value = false
};

const getErrors = (key) => {
  return errors.value[key]?.join(' ') || ""
}

</script>